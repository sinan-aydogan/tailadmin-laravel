<script>
import { defineComponent } from 'vue'
import { Pie } from 'vue-chartjs'

export default defineComponent({
  name : 'PieChart',
  extends: Pie,
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
