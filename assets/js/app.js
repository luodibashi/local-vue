// console.log('1');
var app = new Vue({
  el: '#app',
  data: {
    message1: 'Hello Vue.js!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 '+new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' }
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message5: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message5 = this.message5.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message6: 'Hello Vue!'
  }
})

  // 注册组件
  // 定义名为 todo-item 的新组件
Vue.component('todo-item', {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义特性。
  // 这个 prop 名为 todo。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})

var data = {a:222};
console.log(data.a);

var vm = new Vue({
	data:data
	// created:function () {
	// 	console.log('a is:' this.a);
	// }
})
console.log(vm.a,data.a)

// 生命周期钩子
// created
// mounted
// updated
// destroyed
