<script>
import { Polar } from 'vue-chartjs'

export default {
  name : 'PolarChart',
  extends: Polar,
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