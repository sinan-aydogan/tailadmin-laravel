<template>
    <div class="pagination-container">
        <div
            :disabled="range>activePage"
            :class="[
                'pagination-arrow',
                calculatedArrowStyle,
                range>=activePage && 'opacity-10'
                ]"
            @click="previousPage"
        >
            <t-chevron-left/>
        </div>
        <div
            v-for="item in total"
            v-if="item>=start && end>=item"
            :class="[
                'pagination-item',
                activePage === item ? calculatedActivePaginateStyle : calculatedPaginateStyle,
                ]"
            @click="activePage = item; $emit('input', item)">
            {{ item }}

        </div>
        <div
            :disabled="activePage===total"
            :class="[
                'pagination-arrow',
                calculatedArrowStyle,
                activePage===total && 'opacity-10'
                ]"
            @click="nextPage"
        >
            <t-chevron-right/>
        </div>
    </div>
</template>

<script>
import {paginateStyleMixin} from "@/Mixins/Styles/paginateStyleMixin";
/*Icons*/
import TChevronLeft from "@/Components/Icon/TChevronLeftIcon";
import TChevronRight from "@/Components/Icon/TChevronRightIcon";

export default {
    name: "TPaginate",
    props: {
        active: {
            type: Number,
            default: 1
        },
        value: {
            type: Number,
        },
        total: {
            type: Number,
        },
        range: {
            type: Number,
            default: 5
        },

    },
    mixins: [paginateStyleMixin],
    components: {
        TChevronRight, TChevronLeft
    },
    data() {
        return {
            activePage: this.value ? this.value : this.active,
        }
    },
    methods: {
        nextPage() {
            if (this.total > this.activePage) {
                this.activePage++;
                this.$emit('input', this.activePage)
            }
        },
        previousPage() {
            if (this.activePage > 1) {
                this.activePage--;
                this.$emit('input', this.activePage)
            }
        }
    },
    computed: {
        /*Color Styles*/
        paginateStyle(){
            /*Solid*/
            if (!this.color.includes('-') && this.color !== 'black' && this.color !== 'white') {
                return 'bg-' + this.color + '-300 text-white';
            } else if (this.color === 'black') {
                return 'bg-black text-white';
            } else if (this.color === 'white') {
                return 'bg-white border border-gray-300 text-gray-700';
            }
            /*Light*/
            if (this.color.includes('light')) {
                return 'bg-' + this.color.split('-')[1] + '-50 border border-' + this.color.split('-')[1] + '-500 text-' + this.color.split('-')[1] + '-600';
            }
        },
        activePaginateStyle(){
            /*Solid*/
            if (!this.color.includes('-') && this.color !== 'black' && this.color !== 'white') {
                return 'bg-' + this.color + '-500 text-white';
            } else if (this.color === 'black') {
                return 'bg-gray-300 border border-gray-700';
            } else if (this.color === 'white') {
                return 'bg-gray-500 text-white';
            }
            /*Light*/
            if (this.color.includes('light')) {
                return 'bg-' + this.color.split('-')[1] + '-500 border border-' + this.color.split('-')[1] + '-500 text-white';
            }
        },
        arrowStyle(){
            /*Solid*/
            if (!this.color.includes('-') && this.color !== 'black' && this.color !== 'white') {
                return 'bg-' + this.color + '-500';
            } else if (this.color === 'black') {
                return 'bg-gray-500'
            } else if (this.color === 'white') {
                return 'bg-gray-500';
            }
            /*Light*/
            if (this.color.includes('light')) {
                return 'bg-' + this.color.split('-')[1] + '-500';
            }
        },
        /*Pagination Functions*/
        start(){
            let totalRange = this.total/this.range
            let activeRange = this.activePage/this.range
            if(1>=activeRange){
                return 1
            }else if(Math.ceil(activeRange)>activeRange){
                return Math.floor(activeRange)*this.range+1
            }else if(Math.ceil(activeRange)===activeRange){
                return (Math.floor(activeRange)-1)*this.range+1
            }
        },
        end(){
            let totalRange = this.total/this.range
            let activeRange = this.activePage/this.range
            if(1>=activeRange){
                return this.range
            }else if(Math.ceil(activeRange)>=activeRange){
                return Math.ceil(activeRange)*this.range
            }

        }
    }
}
</script>

<style scoped>

</style>
