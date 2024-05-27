// Notas del archivo:
// - Secuencia de comando:
//      - Biomont UE Test - Detalle de Inventario (customscript_bio_ue_test_detinv)
// - Registro:
//      - - Todos los registros -
//      - Detalle de Inventario (inventorydetail) ----> No funciona

/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N'],

    function (N) {

        const { log } = N;
        const { serverWidget } = N.ui;

        /******************/

        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        function beforeLoad(scriptContext) {

            log.debug('scriptContext.newRecord.type', scriptContext.newRecord.type);

            // Prueba

            if (scriptContext.newRecord.type === 'inventorydetail') {

                var form = scriptContext.form;
                var sublist = form.getSublist({ id: 'inventoryassignment' });

                // Agregar una nueva columna a la sublista
                sublist.addField({
                    id: 'custcol_my_custom_column',
                    type: serverWidget.FieldType.TEXT,
                    label: 'My Custom Column'
                });
            }
        }

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        function beforeSubmit(scriptContext) {

        }

        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        function afterSubmit(scriptContext) {

        }

        return { beforeLoad, beforeSubmit, afterSubmit };

    });
