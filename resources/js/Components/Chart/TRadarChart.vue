<script>
import { defineComponent } from 'vue'
import { Radar } from 'vue-chartjs'

export default defineComponent({
  name : 'RadarChart',
  extends: Radar,
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
