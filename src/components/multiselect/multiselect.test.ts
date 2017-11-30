
import Vue from 'vue';
import { shallow, mount } from 'vue-test-utils'
import { Component, Watch } from 'vue-property-decorator';
import Multiselect from 'vue-multiselect';
import axios from 'axios';
import { DealerMultiselect } from './multiSelect';
import VueRouter from 'vue-router';
import { ComponentTest } from '../../util/component-test';
var MockAdapter = require('axios-mock-adapter');
var mock = new MockAdapter(axios);
//var mock = new MockAdapter(axios);
 
// Mock any GET request to /users 
// arguments for reply are (status, data, headers) 
mock.onGet('https://jsonplaceholder.typicode.com/users').reply(200,
  [
    {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  ]
);

/*describe('Dealer Multi Select', () => {
  let cmp, vm
  beforeEach(() => {
    cmp = DealerMultiselect // Create a copy of the original component
    vm = new cmp({
      data : {
        options: [],
        viewResult : false,
        searchResult : [],
        value : [],
        optionRes : {},
        resultRes : {}
      }
    }).$mount() // Instances and mounts the component
  })
  it('has the expected html structure', () => {
    expect(vm.$el).toMatchSnapshot();
  })

})*/




class MockMultiselectComponent extends DealerMultiselect {
  constructor() {
    super();
  }
}

describe('Multi Select component', () => {
  let directiveTest: ComponentTest;
  let router: VueRouter;
  let url:"https://jsonplaceholder.typicode.com/users";

  beforeEach(() => {
    Vue.use(VueRouter);
    directiveTest = new ComponentTest('<div><DealerMultiselect :url='+url+'></DealerMultiselect></div>', { 'DealerMultiselect': MockMultiselectComponent });
  });


  it('should render correct contents', async () => {
    directiveTest.createComponent();
    await directiveTest.execute((vm) => { // ensure Vue has bootstrapped/run change detection
      expect(vm.$el).toMatchSnapshot();
    });
  });
});



