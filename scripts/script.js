var x=1;
var cajas_d = 1;
var cajas_a = 1;

function f_tipo_corriente()
{
    if($("#x_tipo_corriente1").val() == 1)
    {
        var codigo = "";
        codigo+= ""+
        "<div class='x_subcuadro otros'>"+
            "<span class='x_subtitulo'>Voltaje (volts)</span><span class='x_campo_obligatorio'>*</span><br>"+
            "<select id='x_voltaje1' style='cursor: pointer;' onchange='f_directa(1)'>"+
                "<option value=12>12</option>"+
                "<option value=24>24</option>"+
            "</select>"+
        "</div>"+
        "<div class='x_subcuadro' style='margin-left: 1%;'>"+
            "<span class='x_subtitulo'>Corriente (amperes)</span><span class='x_campo_obligatorio'>*</span><br>"+
            "<input type='number' id='x_corriente1' maxlength='' onchange='f_directa(1)'>"+
        "</div>"+
        "<div class='x_subcuadro'>"+
            "<span class='x_subtitulo'>Potencia (watts)</span><br>"+
            "<input type='number' id='x_potencia1' style='cursor: not-allowed;' disabled>"+
        "</div>"+
        "<div class='x_subcuadro'>"+
            "<span class='x_subtitulo'>Sumatoria de watts</span><br>"+
            "<input type='number' id='x_suma_watts1' style='cursor: not-allowed;' disabled>"+
        "</div>"+
        /*"<div style='width: 100%; height: 15px; float left;'></div>"+*/
        "<div style='text-align: right; padding-bottom: 5px'>"+
            "<img id='icono1' class='icono' src='imagenes/icono-mas.png' alt='' onclick='agregar_directa(), desaparecer(1)'>"+
            "<hr id='separador1' style='border-top: 1px solid #ccc; display: none;'>"+
        "</div>"+
        "<span id='agregar_directa1'></span>"
        $("#tipo_corriente").html(codigo);
    }
    else
    {
        var codigo = "";
        codigo+= ""+
        "<div class='x_subcuadro otros'>"+
            "<span class='x_subtitulo'>Potencia (watts)</span><span class='x_campo_obligatorio'>*</span><br>"+
            "<input type='number' id='x_potencia1' maxlength='' onchange='f_alterna(1)'>"+
        "</div>"+
        "<div class='x_subcuadro' style='margin-left: 1%; float: none;'>"+
            "<span class='x_subtitulo'>Sumatoria de watts</span><br>"+
            "<input type='number' id='x_suma_watts1' style='cursor: not-allowed;' disabled>"+
        "</div>"+
        "<div style='text-align: right; padding-bottom: 5px'>"+
            "<img id='icono1' class='icono' src='imagenes/icono-mas.png' alt='' onclick='agregar_alterna(), desaparecer(1)'>"+
            "<hr id='separador1' style='border-top: 1px solid #ccc; display: none;'>"+
        "</div>"+
        "<span id='agregar_alterna1'></span>"
        $("#tipo_corriente").html(codigo);
    }
}

function desaparecer(valor)
{
    var icono = "#icono" + valor
    $(icono).css("display", "none");
    var separador = "#separador" + valor
    $(separador).css("display", "block");
}

function agregar_directa()
{
    $("#x_tipo_corriente1").prop("disabled", true);
    $("#x_voltaje1").prop("disabled", true);
    if($("#x_voltaje1").val() == 12)
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
                "<option value='1'>Directa</option>"+
            "</select>"+
        "</div>"+
        "<div class='x_subcuadro otros'>"+
            "<span class='x_subtitulo'>Voltaje (volts)</span><span class='x_campo_obligatorio'>*</span><br>"+
            "<select id='x_voltaje" + cajas_d + "' style='cursor: pointer;' onchange='f_directa(" + cajas_d + ")'>"+
                "<option value=12>12</option>"+
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
            "<img id='icono" + cajas_d + "' class='icono' src='imagenes/icons8-más-50.png' alt='' onclick='agregar_directa(), desaparecer(" + cajas_d + ")'>"+
            "<hr id='separador" + cajas_d + "' style='border-top: 1px solid #ccc; display: none;'>"+
        "</div>"+
        "<span id='agregar_directa" + cajas_d + "'></span>"
        var agregar_directa = "#agregar_directa" + (cajas_d - 1);
        $(agregar_directa).html(codigo);
    }
    else
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
                "<option value='1'>Directa</option>"+
            "</select>"+
        "</div>"+
        "<div class='x_subcuadro otros'>"+
            "<span class='x_subtitulo'>Voltaje (volts)</span><span class='x_campo_obligatorio'>*</span><br>"+
            "<select id='x_voltaje" + cajas_d + "' style='cursor: pointer;' onchange='f_directa(" + cajas_d + ")'>"+
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
            "<img id='icono" + cajas_d + "' class='icono' src='imagenes/icons8-más-50.png' alt='' onclick='agregar_directa(), desaparecer(" + cajas_d + ")'>"+
            "<hr id='separador" + cajas_d + "' style='border-top: 1px solid #ccc; display: none;'>"+
        "</div>"+
        "<span id='agregar_directa" + cajas_d + "'></span>"
        var agregar_directa = "#agregar_directa" + (cajas_d - 1);
        $(agregar_directa).html(codigo);
    }
}

function agregar_alterna()
{
    $("#x_tipo_corriente1").prop("disabled", true);
    cajas_a++
    var codigo = "";
    codigo+= ""+
    "<div class='x_subcuadro' style='margin-left: 1%; margin-top: 10px;'>"+
        "<span class='x_subtitulo'>Cantidad</span><span class='x_campo_obligatorio'>*</span><br>"+
        "<input type='number' id='x_cantidad" + cajas_a + "' maxlength='' onchange='f_alterna(" + cajas_a + ")'>"+
    "</div>"+
    "<div class='x_subcuadro otros'>"+
        "<span class='x_subtitulo'>Tipo de corriente</span><span class='x_campo_obligatorio'>*</span><br>"+
        "<select id='x_tipo_corriente" + cajas_a + "' style='cursor: pointer;'>"+
            "<option value='2'>Alterna</option>"+
        "</select>"+
    "</div>"+
    "<div class='x_subcuadro otros'>"+
        "<span class='x_subtitulo'>Potencia (watts)</span><span class='x_campo_obligatorio'>*</span><br>"+
        "<input type='number' id='x_potencia" + cajas_a + "' maxlength='' onchange='f_alterna(" + cajas_a + ")'>"+
    "</div>"+
    "<div class='x_subcuadro' style='margin-left: 1%; float: none;'>"+
        "<span class='x_subtitulo'>Sumatoria de watts</span><br>"+
        "<input type='number' id='x_suma_watts" + cajas_a + "' style='cursor: not-allowed;' disabled>"+
    "</div>"+
    "<div style='text-align: right; padding-bottom: 5px'>"+
        "<img id='icono" + cajas_a + "' class='icono' src='imagenes/icons8-más-50.png' alt='' onclick='agregar_alterna(), desaparecer(" + cajas_a + ")'>"+
        "<hr id='separador" + cajas_a + "' style='border-top: 1px solid #ccc; display: none;'>"+
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

function f_alterna(valor)
{
    var x_cantidad = "#x_cantidad" + valor
    var x_potencia = "#x_potencia" + valor
    var x_suma_watts = "#x_suma_watts" + valor
    var cantidad = $(x_cantidad).val()
    var potencia = $(x_potencia).val()
    var suma_watts = potencia*cantidad
    $(x_suma_watts).val(suma_watts)
    f_watts_totales()
}

function f_watts_totales()
{
    if($("#x_tipo_corriente1").val() == 1)
    {
        var x_suma_watts
        var watts_totales = 0
        for(x=1; x<=cajas_d; x++)
        {
            x_suma_watts = "#x_suma_watts" + x
            watts_totales+= parseFloat($(x_suma_watts).val())
        }
        $("#x_watts_totales").val(watts_totales)

        var factor_seguridad = watts_totales*1.2
        $("#x_factor_seguridad").val(factor_seguridad.toFixed(2))

        var voltaje = $("#x_voltaje1").val()
        var consumo_amperes = watts_totales/voltaje
        $("#x_consumo_amperes").val(consumo_amperes.toFixed(2))

        var capacidad_bateria = $("#x_capacidad_bateria").val()
        var tiempo_respaldo = capacidad_bateria/consumo_amperes
        $("#x_tiempo_respaldo").val(tiempo_respaldo.toFixed(2))

        var tiempo_respaldo_requerido = $("#x_tiempo_respaldo_requerido").val()
        var baterias = tiempo_respaldo_requerido/tiempo_respaldo
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
    else
    {
        var x_suma_watts
        var watts_totales = 0
        for(x=1; x<=cajas_a; x++)
        {
            x_suma_watts = "#x_suma_watts" + x
            watts_totales+= parseFloat($(x_suma_watts).val())
        }
        $("#x_watts_totales").val(watts_totales)

        var factor_seguridad = watts_totales*1.2
        $("#x_factor_seguridad").val(factor_seguridad.toFixed(2))

        var consumo_amperes = watts_totales/12
        $("#x_consumo_amperes").val(consumo_amperes.toFixed(2))

        var capacidad_bateria = $("#x_capacidad_bateria").val()
        var tiempo_respaldo = capacidad_bateria/consumo_amperes
        $("#x_tiempo_respaldo").val(tiempo_respaldo.toFixed(2))

        var tiempo_respaldo_requerido = $("#x_tiempo_respaldo_requerido").val()
        var baterias = tiempo_respaldo_requerido/tiempo_respaldo
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
}
