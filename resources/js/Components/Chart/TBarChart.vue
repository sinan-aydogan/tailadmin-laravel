<script>
import { defineComponent } from 'vue'
import { Bar } from 'vue-chartjs'

export default defineComponent({
  name : 'BarChart',
  extends: Bar,
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
