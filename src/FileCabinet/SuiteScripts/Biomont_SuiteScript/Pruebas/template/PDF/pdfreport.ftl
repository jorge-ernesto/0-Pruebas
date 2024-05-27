<#assign params = input.data?eval>
<?xml version="1.0"?>
<!DOCTYPE pdf PUBLIC "-//big.faceless.org//report" "report-1.1.dtd">
<pdf>
    <head>
        <style>
            body {
                font-family: sans-serif;
                font-size: 10pt;
            }

            p {
                margin: 0pt;
            }

            table.items {
                border: 0.1mm solid #000000;
            }

            td {
                vertical-align: top;
            }

            .items td {
                border-left: 0.1mm solid #000000;
                border-right: 0.1mm solid #000000;
            }

            table thead td {
                background-color: #EEEEEE;
                text-align: center;
                border: 0.1mm solid #000000;
                font-variant: small-caps;
            }

            .items td.blanktotal {
                background-color: #EEEEEE;
                border: 0.1mm solid #000000;
                background-color: #FFFFFF;
                border: 0mm none #000000;
                border-top: 0.1mm solid #000000;
                border-right: 0.1mm solid #000000;
            }

            .items td.totals {
                text-align: right;
                border: 0.1mm solid #000000;
            }

            .items td.cost {
                text-align: "." center;
            }

            /****************** Personalizado ******************/

            /****************** Head ******************/

            .cabecera-head {
                font-weight: normal;
                border-bottom: 0.1mm solid #000000;
            }

            .celda-head {
                font-weight: normal;
                border-bottom: 0.1mm solid #000000;
            }

            img {
                width: 120px;
                height: 40px;
            }

            /****************** Body ******************/

            .cabecera-body {
                font-weight: normal;
                background-color: #EEEEEE;
                border: 0.1mm solid #000000;
            }

            .celda-body {
                font-weight: normal;
                border: 0.1mm solid #000000;
            }

            /*
            .celda-separador {
                height: 30px;
            }
            */
        </style>
    </head>

    <body style="width: 300px; height: 300px; padding: 5px;">

        <!-- <img src='https://www.biomont.com.pe/storage/img/logo.png'></img> -->

        <table class="items" width="100%" style="font-size: 7pt; border-collapse: collapse;" cellpadding="4">
            <thead>
                <tr>
                    <th colspan="1" class="cabecera-head" align="center" style="vertical-align: middle;">
                        <img src='https://www.biomont.com.pe/storage/img/logo.png'></img><br />
                        Laboratorios Biomont S.A.
                    </th>
                    <th colspan="2" class="cabecera-head" align="center" style="vertical-align: middle; font-size: 18px;">
                        CONTROL DE CAMBIOS
                    </th>
                    <th colspan="1" class="cabecera-head" style="vertical-align: middle;">
                        Código: F-AC.009<br />
                        Versión: 10<br />
                        Vigente desde: <br />27/12/2023
                    </th>
                </tr>
                <tr>
                    <th colspan="3" class="celda-head celda-separador">&nbsp;</th>
                    <th colspan="1" class="celda-head celda-separador"></th>
                </tr>
            </thead>
            <tbody>
                <!-- CUADRO N. 1 -->
                <tr>
                    <td class="celda-body"><b>Modelo</b></td>
                    <td class="celda-body"><b>Velocidad</b></td>
                    <td class="celda-body"><b>Antiguedad</b></td>
                    <td class="celda-body"><b></b></td>
                </tr>
                <tr>
                    <td class="celda-body">${params.data.modelo}</td>
                    <td class="celda-body">${params.data.velocidad}</td>
                    <td class="celda-body">${params.data.antiguedad}</td>
                    <td class="celda-body">${params.data.propiedad}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4" align="right">Página <pagenumber/> / <totalpages/></td>
                </tr>
            </tfoot>
        </table>

    </body>

    <!--
    <head>
        <style>
            body { background-color:yellow; font-size:18 }
        </style>
    </head>
    <body>
        Hello, World! - Applying Applying Stylesheets
        ${params.name}
        ${params.project_id}
    </body>
    -->
</pdf>