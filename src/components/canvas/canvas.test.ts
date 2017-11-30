import Vue from 'vue';
import VueRouter from 'vue-router';
//import Component from 'vue-class-component';
import VueChart from 'vue-chart-js'
import { Component, Watch } from 'vue-property-decorator';
import './navbar.css'
import { ComponentTest } from '../../util/component-test';
import { DealerCanvas } from './canvas';

@Component({
    template: require('./canvas.html'),
  props: {
    type:{
      type:String
    },
    items: {
      type: Object,
      default: function () { return {} }
    }
  },
  components: {
  VueChart
  }
     
})
class MockCanvasComponent extends DealerCanvas {
  constructor() {
    super();
  }
}

describe('Canvas component', () => {
  let directiveTest: ComponentTest;
  let router: VueRouter;
  let chartData:{
       
        /*labels: ['A','B','C','D','E','F','G','H','I','J','K'],
        datasets: [
            {
                label: 'Component 1',
                data: [5, 10, 15, 25, 45, 70, 115, 185, 70, 75, 70, 60]
            }
        ]*/

        labels: ['A','B','C','D','E','F'],
        datasets: [{
            label: '# of Votes',
            data: [5, 10, 15, 25, 45, 70],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

  beforeEach(() => {
    Vue.use(VueRouter);
    directiveTest = new ComponentTest('<div><DealerCanvas type="line" :items="'+chartData+'"></DealerCanvas></div>', { 'DealerCanvas': MockCanvasComponent });
  });


  it('should render correct contents', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => { // ensure Vue has bootstrapped/run change detection
      expect(vm.$el).toMatchSnapshot();
    });
  });
});
