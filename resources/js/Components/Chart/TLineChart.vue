<script>
import { defineComponent } from 'vue'
import { Line } from 'vue-chartjs'

export default defineComponent({
    name : 'LineChart',
    extends: Line,
    props: {
        chartdata: {
            type: Object,
            default: null
        },
        options: {
            type: Object,
            default: null
        }
    },
    mounted () {
        this.renderChart(this.chartdata, this.options)
    }
})
</script>
