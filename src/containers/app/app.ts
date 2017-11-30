import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import axios from 'axios';
import { Navbar } from '../../components/navbar';
import { DealerMultiselect } from '../../components/multiselect';
import { Grid } from '../../components/grid';
@Component({
  template: require('./app.html'),
  components: {
     Navbar,
     DealerMultiselect,
     Grid
     
  }
})
export class App extends Vue {
  data() {
    return {
      selectedQuery: '',
      dealerURL: 'https://jsonplaceholder.typicode.com/users',
      userURL: 'https://jsonplaceholder.typicode.com/users',
      primaryNav:
      [
        { 'name': 'Home', 'link': '#' },
        { 'name': 'Applications', 'link': '#' },
        { 'name': 'Reports', 'link': '#' },
        { 'name': 'Resource Library', 'link': '#' },
        { 'name': 'Forms', 'link': '#' },
        { 'name': 'News', 'link': '#' },
        { 'name': 'Directories', 'link': '#' },
        { 'name': 'Expand / Collapse', 'link': '#' },
      ],
      secondaryNav:
      [
        { 'name': 'Dashboard', 'link': 'dashboard', 'isActive': true },
        { 'name': 'Inventory', 'link': 'inventory', 'isActive': false },
        { 'name': 'Trade History', 'link': 'tradehistory', 'isActive': false },
        { 'name': 'Vehicle estimator', 'link': 'vehicleestimator', 'isActive': false },
        { 'name': 'Local History', 'link': 'localhistory', 'isActive': false },
      ],
        gridColumns: ['name', 'email', 'username', 'website'],
        gridData: [],
        selectedValue : ''
        
    };
     
  }
  search() {
    let self = this;
    self['selectedValue'] = self.$el.querySelector('.multiselect__input')['name'];
       axios.get('https://jsonplaceholder.typicode.com/users').then(function(response){
         
        self['gridData'] = response.data;
        self.$el.querySelector('.grid').setAttribute('class', 'grid grid-show');
       });
       

  }
}
