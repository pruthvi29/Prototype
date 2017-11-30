import Vue from 'vue';
import { Navbar } from '../../components/navbar';
import { Component, Watch } from 'vue-property-decorator';

import { DealerCanvas } from '../../components/canvas';
import '../../components/navbar/navbar.css';
import '../../components/canvas/canvas.css'
@Component({
  template: require('./inventory.html'),
   components: {
     Navbar,
     DealerCanvas
    }
})
export class Inventory extends Vue {
data() {
    return {
      optionData : [
        {'name': 'Dashboard1', 'link': 'dashboard', 'isActive': true },
        {'name': 'Inventory1', 'link': 'inventory', 'isActive': true },
        {'name': 'LocalHistory1', 'link': 'localHistory', 'isActive': true }
      ],
       chartData: {
       
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
    }
    };
  }
}