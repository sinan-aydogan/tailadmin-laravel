<template>
    <div class="pagination-container">
        <div
            :class="['pagination-arrow',radiusStyle,arrowStyle]"
            @click="previousPage"
        >
            <t-chevron-left/>
        </div>
        <div
            v-for="item in total"
            v-if="item>=start && end>=item"
            :class="[
                'pagination-item',
                activePage === item ? activePaginateStyle : paginateStyle,
                radiusStyle
                ]"
            @click="activePage = item">
            {{ item }}

        </div>
        <div
            :class="['pagination-arrow',radiusStyle,arrowStyle]"
            @click="nextPage"
        >
            <t-chevron-right/>
        </div>
    </div>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
/*Icons*/
import TChevronLeft from "@/Components/Icon/TChevronLeft";
import TChevronRight from "@/Components/Icon/TChevronRight";

export default {
    name: "TPaginate",
    props: {
        active: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
        },
        range: {
            type: Number,
            default: 5
        },
        color: {
            type: String,
            default: 'blue'
        }
    },
    mixins: [radiusSizeMixin],
    components: {
        TChevronRight, TChevronLeft
    },
    data() {
        return {
            activePage: this.active,
        }
    },
    methods: {
        nextPage() {
            if (this.total > this.activePage) {
                this.activePage++;
            }
        },
        previousPage() {
            if (this.activePage > 1) {
                this.activePage--;
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
