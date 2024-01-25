<script>
import { defineComponent } from 'vue'
import { PolarArea } from 'vue-chartjs'

export default defineComponent({
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
})
</script>
