import Vue from 'vue'
import LoginPage from '@/components/LoginPage'
import PopupPage from '@/components/PopupPage'
import {mount} from '@vue/test-utils'

describe('LoginPage.vue', () => {
  it('should render correct title', () => {
    const Constructor = Vue.extend(LoginPage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#title').textContent)
      .to.equal('Login Page')
  })

  it('should render login username input with tips', () => {
    const Constructor = Vue.extend(LoginPage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#input_name').placeholder)
      .to.equal('请输入名字')
  })

  it('should render login password input with tips', () => {
    const Constructor = Vue.extend(LoginPage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#input_password').placeholder)
      .to.equal('请输入密码')
  })

  it('should render button with label `Login`', () => {
    const Constructor = Vue.extend(LoginPage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#btn_login').textContent)
      .to.equal('Login')
  })

  it('should see the callback result when click login button', () => {
    const component = mount(LoginPage, {data(){return {name:'Mike', password:'12345'};}, components:{PopupPage}});
    let loginBtn = component.find('#btn_login')
    loginBtn.trigger('click')
    let callbackLabel = component.find('#callback-label');
    expect(callbackLabel.text()).to.equal('password too short. to password too short.');
  })
})
