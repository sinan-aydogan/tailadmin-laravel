<template>
    <div class="collapsible-item-container">
        <!--Title-->
        <div
            :class="['collapsible-item',
        calculatedCollapsibleTitleStyle,
        align === 'right' && 'flex-row-reverse']"
            @click="updateStatus"
            @mouseover.passive="type.includes('hover') ? updateStatus('open') :''"
            @mouseout.passive="type.includes('hover') ? updateStatus('close') :''"
        >
            <div
                :class="['flex items-center space-x-2 w-full whitespace-normal',align === 'left' && 'justify-start',align === 'center' && 'justify-center',align === 'right' && 'flex-row-reverse']">
        <span>
            <slot name="title"/> {{activeItems}}
        </span>
            </div>
            <!--DropDown Icon-->
            <t-chevron-down-icon
                :class="[
                'w-6 h-6 transform duration-300',
                showPanel ? 'rotate-90' : 'rotate-0'
                ]"
            />
        </div>
        <!--Content-->
        <div
            v-show="showPanel"
            :class="[calculatedCollapsibleItemContentStyle]"
            @mouseover.passive="type.includes('hover') ? updateStatus('show') :''"
            @mouseout.passive="type.includes('hover') ? updateStatus('hide') :''"
        >
        <span class="flex p-4 overflow-hidden">
            <slot name="content"></slot>
        </span>
        </div>
    </div>
</template>

<script>
import {defineComponent, ref, inject, toRefs, getCurrentInstance} from 'vue'
import {uniqueId} from "lodash";
import {collapsibleStyleMixin} from "@/Mixins/Styles/collapsibleStyleMixin";
import TChevronDownIcon from "@/Components/Icon/TChevronDownIcon";

export default defineComponent({
    name: "CollapsibleItem",
    components: {TChevronDownIcon},
    mixins: [collapsibleStyleMixin],
    props: {
        itemKey: {
            type: [String, Number],
            default:uniqueId()
        },
        align: {
            type: String,
            default: 'left'
        }
    },
    setup(props) {
        const {itemKey} = toRefs(props)
        const showPanel = ref(false)

        /*v-model data from root for mount*/
        let vModelActiveItemsList = getCurrentInstance().parent.props.modelValue
        const vModelActiveStatus = ref(Object.values(vModelActiveItemsList).includes(itemKey.value))
        vModelActiveStatus.value ? showPanel.value= true : showPanel.value= false

        /*default active items list for subItems*/
        const activeItems = ref([].concat(Object.values(vModelActiveItemsList)))



        /*collapsible component type from root*/
        const type = ref(inject('type'))


        const updateStatus = (rule) => {
            vModelActiveItemsList = ['cicik']
            /*Open Function*/
            const openItem = () => {
                if(!activeItems.value.includes(itemKey.value)){
                    activeItems.value.push(itemKey.value)
                }
                showPanel.value = true
            }
            /*Close Function*/
            const closeItem = () => {
                if(activeItems.value.includes(itemKey.value)){
                    activeItems.value.splice(activeItems.value.indexOf(item=>item === itemKey.value),1)
                }
                showPanel.value = false
            }
            /*Open/Close Action Controller*/
            if (rule === 'open') {
                openItem();
            } else if (rule === 'close') {
                closeItem()
            } else {
                if(showPanel.value){
                    closeItem()
                }else{
                    openItem()
                }
            }
        }

        getCurrentInstance().parent.props.modelValue = activeItems.value

        return {showPanel, updateStatus,type, activeItems}
    }
})
</script>
