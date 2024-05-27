// Notas del archivo:
// - Secuencia de comando:
//      - Biomont CS Test - Detalle de Inventario (customscript_bio_cs_test_detinv)
// - Registro:
//      - - Todos los registros -
//      - Detalle de Inventario (inventorydetail) ----> No funciona

/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N'],

    function (N) {

        const { log } = N;

        /******************/

        /**
         * Function to be executed after page is initialized.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
         *
         * @since 2015.2
         */
        function pageInit(scriptContext) {

            var recordContext = scriptContext.currentRecord;

            // Verifica si el tipo de registro es 'inventorydetail'
            if (recordContext.type === 'inventorydetail') {
                console.log('inventorydetail test');

                let sublist = recordContext.getSublist({ sublistId: 'inventoryassignment' });
                console.log('sublist', sublist);
            }
        }

        return {
            pageInit: pageInit
        };

    });
