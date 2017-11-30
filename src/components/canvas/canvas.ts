import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import VueChart from 'vue-chart-js'
@Component({
    template: require('./canvas.html'),
  props: {
    type:{
      type:String
    },
    items: {
      type: Object
      
    }
  },
  components: {
  VueChart
  }
     
})

export class DealerCanvas extends Vue {

  
}