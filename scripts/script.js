var x=1;
var cajas_d = 1;
var cajas_a = 1;

var watts_totales = 0;
var factor_seguridad = 0;
var consumo_amperes = 0;
var tiempo_respaldo = 0;

var capacidad_bateria = 0;
var tiempo_respaldo_requerido = 0;
var baterias = 0;

function cd()
{
    if($("#x_tipo_corriente1").val(1))
    {

    }
    else
    {
        
    }
}

function agregar_directa()
{
    cajas_d++
    var codigo = "";
    codigo+= ""+
    "<div class='x_subcuadro' style='margin-left: 1%; margin-top: 10px;'>"+
        "<span class='x_subtitulo'>Cantidad</span><span class='x_campo_obligatorio'>*</span><br>"+
        "<input type='number' id='x_cantidad" + cajas_d + "' maxlength='' onchange='f_directa(" + cajas_d + ")'>"+
    "</div>"+
    "<div class='x_subcuadro otros'>"+
        "<span class='x_subtitulo'>Tipo de corriente</span><span class='x_campo_obligatorio'>*</span><br>"+
        "<select id='x_tipo_corriente" + cajas_d + "' style='cursor: pointer;'>"+
            "<option value=''></option>"+
            "<option value='1'>Directa</option>"+
            "<option value='2'>Alterna</option>"+
        "</select>"+
    "</div>"+
    "<div class='x_subcuadro otros'>"+
        "<span class='x_subtitulo'>Voltaje (volts)</span><span class='x_campo_obligatorio'>*</span><br>"+
        "<select id='x_voltaje" + cajas_d + "' style='cursor: pointer;' onchange='f_directa(" + cajas_d + ")'>"+
            "<option value=''></option>"+
            "<option value=12>12</option>"+
            "<option value=24>24</option>"+
        "</select>"+
    "</div>"+
    "<div class='x_subcuadro' style='margin-left: 1%;'>"+
        "<span class='x_subtitulo'>Corriente (amperes)</span><span class='x_campo_obligatorio'>*</span><br>"+
        "<input type='number' id='x_corriente" + cajas_d + "' maxlength='' onchange='f_directa(" + cajas_d + ")'>"+
    "</div>"+
    "<div class='x_subcuadro'>"+
        "<span class='x_subtitulo'>Potencia (watts)</span><br>"+
        "<input type='number' id='x_potencia" + cajas_d + "' style='cursor: not-allowed;' disabled>"+
    "</div>"+
    "<div class='x_subcuadro'>"+
        "<span class='x_subtitulo'>Sumatoria de watts</span><br>"+
        "<input type='number' id='x_suma_watts" + cajas_d + "' style='cursor: not-allowed;' disabled>"+
    "</div>"+
    "<div style='text-align: right; padding-bottom: 5px'>"+
        "<img class='icono toRotate' src='imagenes/icons8-más-50.png' alt='' onclick='agregar_directa()'>"+
    "</div>"+
    "<span id='agregar_directa" + cajas_d + "'></span>"
    var agregar_directa = "#agregar_directa" + (cajas_d - 1);
    $(agregar_directa).html(codigo);
}

function agregar_alterna()
{
    cajas_a++
    var codigo = "";
    codigo+= ""+
    "<div class='x_subcuadro' style='margin-left: 1%; margin-top: 10px;'>"+
        "<span class='x_subtitulo'>Cantidad</span><span class='x_campo_obligatorio'>*</span><br>"+
        "<input type='number' id='x_cantidad" + cajas_a + "' maxlength=''>"+
    "</div>"+
    "<div class='x_subcuadro otros'>"+
        "<span class='x_subtitulo'>Tipo de corriente</span><span class='x_campo_obligatorio'>*</span><br>"+
        "<select id='x_tipo_corriente" + cajas_a + "' style='cursor: pointer;'>"+
            "<option value=''></option>"+
            "<option value='1'>Directa</option>"+
            "<option value='2'>Alterna</option>"+
        "</select>"+
    "</div>"+
    "<div class='x_subcuadro otros'>"+
        "<span class='x_subtitulo'>Potencia (watts)</span><span class='x_campo_obligatorio'>*</span><br>"+
        "<input type='number' id='x_potencia" + cajas_a + "' maxlength=''>"+
    "</div>"+
    "<div class='x_subcuadro' style='margin-left: 1%; float: none;'>"+
        "<span class='x_subtitulo'>Sumatoria de watts</span><br>"+
        "<input type='number' id='x_suma_watts" + cajas_a + "' style='cursor: not-allowed;' disabled>"+
    "</div>"+
    "<div style='text-align: right; padding-bottom: 5px'>"+
        "<img class='icono toRotate' src='imagenes/icons8-más-50.png' alt='' onclick='agregar_alterna()'>"+
    "</div>"+
    "<span id='agregar_alterna" + cajas_a + "'></span>";
    var agregar_alterna = "#agregar_alterna" + (cajas_a - 1);
    $(agregar_alterna).html(codigo);
}

function f_directa(valor)
{
    var x_cantidad = "#x_cantidad" + valor
    var x_voltaje = "#x_voltaje" + valor
    var x_corriente = "#x_corriente" + valor
    var x_potencia = "#x_potencia" + valor
    var x_suma_watts = "#x_suma_watts" + valor
    var cantidad = $(x_cantidad).val()
    var voltaje = $(x_voltaje).val()
    var corriente = $(x_corriente).val()
    var potencia = voltaje*corriente
    var suma_watts = potencia*cantidad
    $(x_potencia).val(potencia)
    $(x_suma_watts).val(suma_watts)
    f_watts_totales()
}

function f_watts_totales()
{
    var x_suma_watts
    var watts_totales = 0
    for(x=1; x<=cajas_d; x++)
    {
        x_suma_watts = "#x_suma_watts" + x
        watts_totales+= parseFloat($(x_suma_watts).val())
    }
    $("#x_watts_totales").val(watts_totales)

    factor_seguridad = watts_totales*1.2
    $("#x_factor_seguridad").val(factor_seguridad.toFixed(2))

    voltaje = $("#x_voltaje1").val()
    consumo_amperes = watts_totales/voltaje
    $("#x_consumo_amperes").val(consumo_amperes.toFixed(2))

    capacidad_bateria = $("#x_capacidad_bateria").val()
    tiempo_respaldo = capacidad_bateria/consumo_amperes
    $("#x_tiempo_respaldo").val(tiempo_respaldo.toFixed(2))

    tiempo_respaldo_requerido = $("#x_tiempo_respaldo_requerido").val()
    baterias = tiempo_respaldo_requerido/tiempo_respaldo
    var resultado = Math.ceil(baterias)
    $("#x_baterias").val(resultado)

    if($("#x_baterias").val() != "")
    {
        $("#x_resultado").attr('placeholder','Se necesitan ' + resultado + ' baterías de ' + capacidad_bateria + ' Ah.')
    }
    else
    {
        $("#x_resultado").attr('placeholder','')
    }
}