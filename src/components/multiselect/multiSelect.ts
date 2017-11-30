import Vue from 'vue';
import axios from 'axios';
import Multiselect from 'vue-multiselect';
import { Component, Watch } from 'vue-property-decorator';
import './multiselect.css';

@Component({
  template: require('./multiselect.html'),
  components: {
    Multiselect
  },
   props: {
    url: {
      type: String,
      required: true
    }
  }
  
})
export class DealerMultiselect extends Vue {

  options = [];
  value = '';
  created() {
     this.getData(this.$props.url);
  }

  onChange() {
    if (this.value.length > 0) {
    this.$el.querySelector('.multiselect__input')['placeholder'] = '';
    this.$el.querySelector('.multiselect__input')['name'] = this.value[0]['name'];
    }else {
    this.$el.querySelector('.multiselect__input')['placeholder'] = 'Hint: Series, Model';
    this.$el.querySelector('.multiselect__input')['name'] = '';
    this.$parent.$el.querySelector('.grid').setAttribute('class', 'grid grid-hide');
    }
  }
  getData(url) {
    return axios.get(url).then((response) => {
    const self = this;
        let tempOptions = response.data;
        for (let option in tempOptions) {
          tempOptions[option]['label'] = tempOptions[option].name;
          // options[option]['label'] = options[option].SeriesName + '-' + options[option].ModelNumber;
        }
        self.options = tempOptions;
     });
  }
    
}