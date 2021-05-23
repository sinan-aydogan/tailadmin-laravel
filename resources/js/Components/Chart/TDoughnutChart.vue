<script>
import { Doughnut } from 'vue-chartjs'

export default {
    name : 'DoughnutChart',
    extends: Doughnut,
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
}
</script>