<template>
    <app-layout title="Backend Table">
        <!--Header-->
        <template #header>
            {{tm('pageTitle')}}
        </template>
        <!--Subheader-->
        <template #subHeader>
            {{tm('pageSubTitle')}}
        </template>
        <!--Content-->
        <template #default>
            <t-code-showcase
                :tabs="showcaseTabs"
            >
                <t-back-end-table
                    :content="demoContent"
                    :header="header"
                    content-key="demoContent"
                    search-route="back-end-table"
                    request-search-key="demoSearch"
                >
                    <template #top-right>
                        <t-button color="green" design="light" border>+ Add New</t-button>
                    </template>
                    <template #type="{props}">
                        {{ filterType.find(t => t.key === Number(props.type)).label }}
                    </template>
                    <template #status="{props}">
                        <t-badge :color="filterStatus.find(t=>t.key === props.status).color">
                            {{ filterStatus.find(t => t.key === props.status).label }}
                        </t-badge>
                    </template>
                </t-back-end-table>
                <template #controller>{{ docSamples.controller }}</template>
                <template #route>{{ docSamples.route }}</template>
                <template #js>{{ docSamples.js }}</template>
                <template #template>{{ docSamples.template }}</template>
            </t-code-showcase>
        </template>
    </app-layout>
</template>

<script>
/*Main Functions*/
import {reactive, defineComponent, computed, ref} from "vue";

/*Components*/
import AppLayout from "@/Layouts/AppLayout";
import TBackEndTable from "@/Components/Table/TBackEndTable";
import TBadge from "@/Components/Badge/TBadge";
import TButton from "@/Components/Button/TButton";
import TCodeShowcase from "@/Components/Code/TCodeShowcase";
import {useI18n} from "vue-i18n";

export default defineComponent({
    name: "Table",
    components: {
        TButton,
        TBadge,
        TBackEndTable,
        AppLayout,
        TCodeShowcase
    },
    props: {
        demoContent: {
            type: Object,
            default() {
                return {};
            }
        },
        searchDataMainProducts: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    setup(props) {
        const filterStatus = reactive([
            {key: 1, label: "Active", color: "green"},
            {key: 0, label: "Passive", color: "red"}
        ]);
        const filterType = reactive([
            {key: 0, label: "Printer"},
            {key: 1, label: "Pencil"},
            {key: 2, label: "Clipper"}
        ]);
        const compareOperators = reactive([
            {key: "contains", label: "contains"},
            {key: "notContains", label: "not contains"},
            {key: "starts", label: "starts"},
            {key: "ends", label: "ends"}
        ]);
        const priceCompareOperators = reactive([
            {key: "=", label: "="},
            {key: ">", label: ">"},
            {key: ">=", label: ">="},
            {key: "<", label: "<"},
            {key: "<=", label: "<="}
        ]);

        const selectData = reactive([
            {
                label: "Dark Mode",
                key: "darkMode",
                options: [
                    {key: true, label: "Dark Mode"},
                    {key: false, label: "Light Mode"}
                ]
            },
            {
                label: "Design",
                key: "design",
                options: [
                    {key: "elegant", label: "Elegant"}
                ]
            },
            {
                label: "Radius",
                key: "radius",
                options: [
                    {key: 0, label: "Without radius"},
                    {key: 3, label: "Small"},
                    {key: 5, label: "Large"}
                ]
            }
        ]);
        const selectedData = reactive({
            darkMode: false,
            design: "elegant",
            radius: 3
        });
        const header = reactive([
            {
                label: "Name",
                key: "name",
                align: "left",
                status: true,
                sortable: true,
                simpleSearchable: true,
                advancedSearchable: true,
                advancedSearchInputType: "text",
                compareOperators: compareOperators
            },
            {
                label: "Main Product",
                key: "main_product_name",
                align: "left",
                status: true,
                simpleSearchable: false,
                advancedSearchable: true,
                advancedSearchKey: 'main_product_id',
                advancedSearchSelectInputSource: props.searchDataMainProducts,
                advancedSearchSelectLabelKey: 'name',
                advancedSearchSelectValueKey: 'id',
                advancedSearchInputType: "select",
                advancedSearchSelectSearch: true
            },
            {
                label: "Type",
                key: "type",
                align: "left",
                status: true,
                simpleSearchable: false,
                advancedSearchable: true,
                advancedSearchSelectInputSource: filterType,
                advancedSearchInputType: "select"
            },
            {
                label: "Price",
                key: "price",
                align: "center",
                status: true,
                sortable: true,
                simpleSearchable: true,
                advancedSearchable: false,
                advancedSearchInputType: "between",
            },
            {
                label: "Status",
                key: "status",
                align: "center",
                status: true,
                sortable: true,
                simpleSearchable: false,
                advancedSearchable: true,
                advancedSearchSelectInputSource: filterStatus,
                advancedSearchInputType: "select",
                compareOperators: compareOperators
            }
        ]);
        const features = computed(() => {
            return {
                table: {
                    darkMode: selectedData.darkMode,
                    design: selectedData.design,
                    borderRow: true,
                    zebraRow: false,
                    hoverRow: true,
                    radius: selectedData.radius,
                    contentKey: 'demoContent',
                    searchRoute: 'back-end-table'
                },
                pagination: {
                    status: true,
                    darkMode: selectedData.darkMode,
                    radius: selectedData.radius,
                    range: 5,
                    jump: true,
                },
                actions: {
                    status: true,
                    headerText: "Aksiyonlar"
                },
                deleteModal: {
                    headerText: "Item's deleting",
                    contentText: "You are going to delete <br><b>{$name}</b><br>Are you sure ?",
                    icon: "warning"
                }
            };
        });

        /* Multi-language */
        const {t, tm} = useI18n({
            inheritLocale: true,
            messages: {
                en: {
                    pageTitle: 'Table with backend data',
                    pageSubTitle: 'Tables with Backend Data and Dynamic options',
                    docDefault: 'Default Value',
                    docDescription: 'Description',
                    docType: 'Value Type',
                    docContentDesc: '',
                    docHeaderDesc: '',
                    docRequestSearchKeyDesc: '',
                    docPerPageDesc: '',
                    docUniqueIdDesc: '',
                    docRadiusDesc: 'It shapes the corners of the table.',
                    docHeaderKeyDesc: '',
                    docHeaderLabelDesc: '',
                    docHeaderAlignDesc: '',
                    docHeaderStatusDesc: '',
                    docHeaderSortableDesc: '',
                    docHeaderSimpleSearchableDesc: '',
                    docHeaderAdvancedSearchableDesc: '',
                    docHeaderAdvancedSearchKeyDesc: '',
                    docHeaderAdvancedSearchInputTypeDesc: '',
                    docHeaderAdvancedSearchInputSourceDesc: '',
                    docHeaderAdvancedSearchLabelDesc: '',
                    docHeaderAdvancedSearchValueDesc: '',
                    docHeaderCompareOperatorsDesc: ''

                },
                tr: {
                    pageTitle: 'Tablo (Server Side)',
                    pageSubTitle: 'Sunucu Tarafında Çalışan Tablo Komponenti',
                    docDefault: 'Varsayılan Değer',
                    docDescription: 'Detay',
                    docType: 'Değer Türü',
                    docContentDesc: '',
                    docHeaderDesc: '',
                    docRequestSearchKeyDesc: '',
                    docPerPageDesc: '',
                    docUniqueIdDesc: '',
                    docRadiusDesc: 'Tablonun köşelerinin ovalliğini kontrol etmenizi sağlar.',
                    docHeaderKeyDesc: '',
                    docHeaderLabelDesc: '',
                    docHeaderAlignDesc: '',
                    docHeaderStatusDesc: '',
                    docHeaderSortableDesc: '',
                    docHeaderSimpleSearchableDesc: '',
                    docHeaderAdvancedSearchableDesc: '',
                    docHeaderAdvancedSearchKeyDesc: '',
                    docHeaderAdvancedSearchInputTypeDesc: '',
                    docHeaderAdvancedSearchInputSourceDesc: '',
                    docHeaderAdvancedSearchLabelDesc: '',
                    docHeaderAdvancedSearchValueDesc: '',
                    docHeaderCompareOperatorsDesc: ''
                },
            },
        });

        /* Documentation */
        /* Props Definitions */

        const docProps = {
            headers: [
                {id: 'prop', label: 'Prop'},
                {id: 'type', label: tm('docType')},
                {id: 'options', label: 'Options', colorfulBg: true},
                {id: 'default', label: tm('docDefault')},
                {id: 'description', label: tm('docDescription')},

            ],
            content: [
                {
                    id: 'content',
                    prop: 'content',
                    type: 'Object',
                    description: tm('docContentDesc'),
                },
                {
                    id: 'header',
                    prop: 'header',
                    type: 'Array',
                    description: tm('docHeaderDesc')
                },
                {
                    id: 'request-search-key',
                    prop: 'request-search-key',
                    type: 'String',
                    default: 'searchObj',
                    description: tm('docRequestSearchKeyDesc')
                },
                {
                    id: 'per-page',
                    prop: 'per-page',
                    type: 'Number',
                    default: '5',
                    description: tm('docPerPageDesc')
                },
                {
                    id: 'unique-id',
                    prop: 'unique-id',
                    type: 'String',
                    default: 'id',
                    description: tm('docUniqueIdDesc')
                },
                {
                    id: 'row-border',
                    prop: 'row-border',
                    type: 'Boolean',
                    default: 'true',
                },
                {
                    id: 'row-zebra',
                    prop: 'row-zebra',
                    type: 'Boolean',
                    default: 'true',
                },
                {
                    id: 'row-hover',
                    prop: 'row-hover',
                    type: 'Boolean',
                    default: 'true',
                },
                {
                    id: 'radius',
                    prop: 'radius',
                    type: 'Number',
                    default: '3',
                    options: ['0', '1', '2', '3', '4', '5', '6', '7', '8'],
                    description: tm('docRadiusDesc')
                },
                {
                    id: 'show-pagination',
                    prop: 'show-pagination',
                    type: 'Boolean',
                    default: 'true',
                },
                {
                    id: 'pagination-detail',
                    prop: 'pagination-detail',
                    type: 'Boolean',
                    default: 'false',
                },
                {
                    id: 'pagination-detail-text',
                    prop: 'pagination-detail-text',
                    type: 'String',
                    default: '{totalPage} pages - {totalRecord} records',
                },
                {
                    id: 'pagination-range',
                    prop: 'pagination-range',
                    type: 'Number',
                    default: '5',
                },
                {
                    id: 'pagination-jump',
                    prop: 'pagination-jump',
                    type: 'Boolean',
                    default: 'true',
                },
                {
                    id: 'pagination-show-arrow-text',
                    prop: 'pagination-show-arrow-text',
                    type: 'Boolean',
                    default: 'true',
                },
                {
                    id: 'pagination-show-previous-text',
                    prop: 'pagination-show-previous-text',
                    type: 'String',
                    default: 'previous',
                },
                {
                    id: 'pagination-show-next-text',
                    prop: 'pagination-show-next-text',
                    type: 'String',
                    default: 'next',
                },
                {
                    id: 'actions',
                    prop: 'actions',
                    type: 'Array',
                    default: '[\'view\']',
                    options: ['view', 'delete', 'edit']
                },
                {
                    id: 'actions-modal',
                    prop: 'actions-modal',
                    type: 'Array',
                    default: '[\'delete\']',
                    options: ['view', 'delete', 'edit']
                },
                {
                    id: 'actions-header-text',
                    prop: 'actions-header-text',
                    type: 'String',
                    default: 'actions',
                },
                {
                    id: 'header[x].key',
                    prop: 'header[x].key',
                    type: 'String',
                    description: tm('docHeaderKeyDesc')
                },
                {
                    id: 'header[x].label',
                    prop: 'header[x].label',
                    type: 'String',
                    description: tm('docHeaderLabelDesc')
                },
                {
                    id: 'header[x].align',
                    prop: 'header[x].align',
                    type: 'String',
                    options: ['left', 'center', 'right'],
                    description: tm('docHeaderAlignDesc')
                },
                {
                    id: 'header[x].status',
                    prop: 'header[x].status',
                    type: 'Boolean',
                    options: ['true', 'false'],
                    default: 'true',
                    description: tm('docHeaderStatusDesc')
                },
                {
                    id: 'header[x].sortable',
                    prop: 'header[x].sortable',
                    type: 'Boolean',
                    options: ['true', 'false'],
                    default: 'false',
                    description: tm('docHeaderSortableDesc')
                },
                {
                    id: 'header[x].simpleSearchable',
                    prop: 'header[x].simpleSearchable',
                    type: 'Boolean',
                    options: ['true', 'false'],
                    default: 'false',
                    description: tm('docHeaderSimpleSearchableDesc')
                },
                {
                    id: 'header[x].advancedSearchable',
                    prop: 'header[x].advancedSearchable',
                    type: 'Boolean',
                    options: ['true', 'false'],
                    default: 'false',
                    description: tm('docHeaderAdvancedSearchableDesc')
                },
                {
                    id: 'header[x].advancedSearchKey',
                    prop: 'header[x].advancedSearchKey',
                    type: 'String',
                    description: tm('docHeaderAdvancedSearchKeyDesc')
                },
                {
                    id: 'header[x].advancedSearchInputType',
                    prop: 'header[x].advancedSearchInputType',
                    type: 'String',
                    options: ['text', 'select', 'between'],
                    description: tm('docHeaderAdvancedSearchInputTypeDesc')
                },
                {
                    id: 'header[x].advancedSearchSelectInputSource',
                    prop: 'header[x].advancedSearchSelectInputSource',
                    type: 'Object',
                    description: tm('docHeaderAdvancedSearchInputSourceDesc')
                },
                {
                    id: 'header[x].advancedSearchSelectLabelKey',
                    prop: 'header[x].advancedSearchSelectLabelKey',
                    type: 'String',
                    description: tm('docHeaderAdvancedSearchLabelDesc')
                },
                {
                    id: 'header[x].advancedSearchSelectValueKey',
                    prop: 'header[x].advancedSearchSelectValueKey',
                    type: 'String',
                    description: tm('docHeaderAdvancedSearchValueDesc')
                },
                {
                    id: 'header[x].compareOperators',
                    prop: 'header[x].compareOperators',
                    type: 'Array',
                    description: tm('docHeaderCompareOperatorsDesc')
                },
            ]
        };
        /* Sample Codes */
        const docSamples = {
            controller: '<?php\n\n' +
                'namespace App\\Http\\Controllers;\n' +
                '\n' +
                'use App\\Models\\Product;\n' +
                'use Illuminate\\Http\\Request;\n' +
                'use Inertia\\Inertia;\n' +
                '\n' +
                'class ProductController extends Controller\n' +
                '{\n' +
                '    /**\n' +
                '    * Display a listing of the resource.\n' +
                '    *\n' +
                '    * @return \\Inertia\\Response\n' +
                '    */\n' +
                '    public function index(Request $request)\n' +
                '    {\n\n' +
                '        //Please define vue file directory accordance your file structure\n' +
                '        return Inertia::render(\'Module/Product/Index\', [\n' +
                '            //You should to use tableSearch macro for dynamic query builder with $request->searchObj\n' +
                '            \'products\' => Product::tableSearch($request->input(\'searchObj\')),\n' +
                '            //You can send only related data for search data. For example the managers list only related to the departments\n' +
                '            // main_product_id = column name, products = table name\n' +
                '            \'searchDataMainProducts\' => Product::getRelatedData(\'main_product_id\', \'products\')->get()\n' +
                '        ]);\n' +
                '    }',
            route: '//You can have routes like below (get or resource)' +
                'Route::get(\'product\', [Product::class, \'index\'])->name(\'product.index\')\n' +
                '// or \n' +
                'Route::resource(\'product\', Product::class)\n' +
                '// You should add post route for search requests after get index or resource route\n' +
                'Route::post(\'product\', [Product::class, \'index\'])->name(\'product.search\')//\n',
            js: 'import TBackEndTable from \'@/Components/Table/TBackEndTable.vue\'\n\n' +
                'export default {\n\n' +
                '   components: { TBackEndTable },\n\n' +
                '   props: {\n' +
                '       productData: {\n' +
                '           type: Object,\n' +
                '           default() {\n' +
                '               return {};\n' +
                '           }\n' +
                '        },\n' +
                '        searchDataMainProducts: {\n' +
                '           type: Array,\n' +
                '           default() {\n' +
                '               return [];\n' +
                '           }\n' +
                '        }\n' +
                '    },\n\n' +
                '    setup(\n\n' +
                '       // You can use custom data set for advanced search options list.\n' +
                '       // It linked to status column in this case\n' +
                '       const filterStatus = reactive([\n' +
                '            {key: 1, label: "Active", color: "green"},\n' +
                '            {key: 0, label: "Passive", color: "red"}\n' +
                '        ]);\n' +
                '       //Compare definitions for fields, You can use them what if you want\n' +
                '       const compareOperators = reactive([\n' +
                '            {key: "contains", label: "contains"},\n' +
                '            {key: "notContains", label: "not contains"},\n' +
                '            {key: "starts", label: "starts"},\n' +
                '            {key: "ends", label: "ends"}\n' +
                '            {key: "=", label: "="},\n' +
                '            {key: ">", label: ">"},\n' +
                '            {key: ">=", label: ">="},\n' +
                '            {key: "<", label: "<"},\n' +
                '            {key: "<=", label: "<="}\n' +
                '        ]);\n\n' +
                '       const productDataHeaders = reactive([\n' +
                '            {\n' +
                '                label: "Name",\n' +
                '                key: "name",\n' +
                '                align: "left",\n' +
                '                status: true,\n' +
                '                sortable: true,\n' +
                '                simpleSearchable: true,\n' +
                '                advancedSearchable: true,\n' +
                '                advancedSearchInputType: "text",\n' +
                '                compareOperators: compareOperators\n' +
                '            },\n' +
                '            {\n' +
                '                label: "Main Product",\n' +
                '                key: "main_product_name",\n' +
                '                align: "left",\n' +
                '                status: true,\n' +
                '                simpleSearchable: true,\n' +
                '                advancedSearchable: true,\n' +
                '                advancedSearchKey: \'main_product_id\', //Search in different column\n' +
                '                advancedSearchSelectInputSource: props.searchDataMainProducts, //Select options data source\n' +
                '                advancedSearchSelectLabelKey: \'name\', //Showing label in the select input\n' +
                '                advancedSearchSelectValueKey: \'id\', //Select input real value when it selected\n' +
                '                advancedSearchInputType: "select",\n' +
                '                advancedSearchSelectSearch: true\n' +
                '            },\n' +
                '            {\n' +
                '                label: "Status",\n' +
                '                key: "status",\n' +
                '                align: "center",\n' +
                '                status: true,\n' +
                '                sortable: true,\n' +
                '                simpleSearchable: true,\n' +
                '                advancedSearchable: true,\n' +
                '                advancedSearchSelectInputSource: filterStatus,\n' +
                '                advancedSearchInputType: "select",\n' +
                '            }\n' +
                '        ]);\n' +
                '   )\n' +
                '}',
            template: '<t-back-end-table\n' +
                '    :content="productData"\n' +
                '    :header="productDataHeaders"\n' +
                '    content-key="productData"\n' +
                '    search-route="product.search" \n' +
                '>\n\n' +
                '    // You can add rich elements from this area to top right area of the table\n' +
                '    <template #top-right>\n' +
                '        <t-button color="green" design="light" border>+ Add New</t-button>\n' +
                '    </template>\n\n' +
                '    // If you want to add rich features to data showing, \n' +
                '    you can use scopeSlot. #status is your column key. This is only exaple:\n' +
                '    <template #status="{props}">\n' +
                '        <t-badge :color="filterStatus.find(t=>t.key === props.status).color">\n' +
                '            {{ filterStatus.find(t => t.key === props.status).label }}\n' +
                '        </t-badge>\n' +
                '    </template>\n\n' +
                '</t-back-end-table>',
        };
        const showcaseTabs = [
            {id: 'controller', label: 'Controller', type: 'code', codeLang: 'php'},
            {id: 'js', label: 'JS', type: 'code', codeLang: 'javascript'},
            {id: 'template', label: 'Template', type: 'code', codeLang: 'html'},
            {id: 'route', label: 'Web.php', type: 'code', codeLang: 'php'},
            {id: 'props', label: 'Props', type: 'table', table: docProps},
        ];

        return {
            selectData,
            selectedData,
            header,
            features,
            filterType,
            filterStatus,
            docProps,
            docSamples,
            showcaseTabs,
            t,
            tm
        };
    }
});
</script>
