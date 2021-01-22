import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '@/App.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const mocks = {
  $cookies: {get: (x)=> x}
};

const actions = {
  fetchUser: jest.fn(),
  fetchSettings: jest.fn()
};

const getters = {
  user: () => null,
  settings: () => null
};

const mutations = {
  setUserToken: jest.fn()  
};

const store = new Vuex.Store({
  actions,
  getters,
  mutations
});

const stubs = ['router-link', 'router-view'];

describe('App.vue', ()=> {
  it("Renders the page", () => {
    const wrapper = shallowMount(App, {store, localVue, mocks, stubs})
    expect(wrapper.element).toMatchSnapshot()
  });
});
