// Notas del archivo:
// - Secuencia de comando:
//      - Biomont SL Pruebas - Personalizacion PDF (customscript_bio_sl_pruebas_perpdf)
// - URL:
//      - https://6462530.app.netsuite.com/app/site/hosting/scriptlet.nl?script=1794&deploy=1

/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['./lib/Bio.Library.Helper', 'N'],

    function (objHelper, N) {

        const { log, file, render } = N;

        /******************/

        // Crear PDF
        function createPDF(data) {
            // Nombre del archivo
            let typeRep = 'reportePDF';
            let titleDocument = 'Reporte PDF'

            // Crear PDF - Contenido dinamico
            let pdfContent = file.load(`./template/PDF/pdfreport.ftl`).getContents();
            let rendererPDF = render.create();
            rendererPDF.templateContent = pdfContent;

            // Enviar datos a PDF
            rendererPDF.addCustomDataSource({
                format: render.DataSource.OBJECT,
                alias: "input",
                data: {
                    data: JSON.stringify({
                        name: titleDocument,
                        data: data,
                        img: 'https://www.biomont.com.pe/storage/img/logo.png'
                    })
                }
            });

            // Crear PDF
            let pdfFile = rendererPDF.renderAsPdf();

            // Reescribir datos de PDF
            pdfFile.name = `biomont_${typeRep}.pdf`;

            return { pdfFile };
        }

        function getData() {
            // Obtener data
            let data = {
                modelo: "BMW",
                velocidad: 200,
                antiguedad: 2017,
                propiedad: "Valor aleatorio",
            }

            return data;
        }

        /******************/

        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        function onRequest(scriptContext) {
            // log.debug('method', scriptContext.request.method);
            // log.debug('parameteres', scriptContext.request.parameters);

            if (scriptContext.request.method == 'GET') {
                // Obtener datos
                let data = getData();

                // Crear PDF
                let { pdfFile } = createPDF(data);

                // Descargar PDF
                scriptContext.response.writeFile({
                    file: pdfFile
                });
            }
        }

        return { onRequest }

    });
