(this["webpackJsonpfun-food-friends"]=this["webpackJsonpfun-food-friends"]||[]).push([[0],{20:function(e,t,a){e.exports=a(37)},25:function(e,t,a){},26:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=a(12),s=a.n(i),o=(a(25),a(13)),u=a(14),c=a(15),l=a(18),m=a(16),d=a(6),h=a(19),p=(a(26),a(9)),f=a.n(p);f.a.initializeApp({apiKey:"AIzaSyDQODjLvkye6BdRE1WzOHKkapMY2FvJFdo",authDomain:"fun-food-friends-546ea.firebaseapp.com",databaseURL:"https://fun-food-friends-546ea.firebaseio.com",projectId:"fun-food-friends-546ea",storageBucket:"fun-food-friends-546ea.appspot.com",messagingSenderId:"272666238655",appId:"1:272666238655:web:85a5527d0ee97b6c8ab00a"});var v=f.a,b=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={currentItem:"",username:"",items:[],isUpdate:!1},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e,t){e.preventDefault();var a={title:this.state.currentItem,user:this.state.username};t?(v.database().ref("/items/".concat(t)).update(a),console.log("update")):(v.database().ref("items").push(a),console.log("add"));this.setState({username:"",currentItem:"",isUpdate:!1,id:""})}},{key:"componentDidMount",value:function(){var e=this;v.database().ref("items").on("value",(function(t){var a=t.val(),n=[];for(var r in a)n.push({id:r,title:a[r].title,user:a[r].user});e.setState({items:n})}))}},{key:"removeItem",value:function(e){v.database().ref("/items/".concat(e)).remove()}},{key:"updateItem",value:function(e){var t=this.state.items.find((function(t){return t.id===e}));this.setState({isUpdate:!0,id:t.id,username:t.user,currentItem:t.title})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Fun Food Friends"))),r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"add-item"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t,e.state.id)}},r.a.createElement("input",{type:"text",ref:"username",name:"username",placeholder:"What's your name?",onChange:this.handleChange,value:this.state.username}),r.a.createElement("input",{type:"text",ref:"currentItem",name:"currentItem",placeholder:"What are you bringing?",onChange:this.handleChange,value:this.state.currentItem}),r.a.createElement("button",null,this.state.isUpdate?"Update Item":"Add Item"))),r.a.createElement("section",{className:"display-item"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("ul",null,this.state.items.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("h3",null,t.title),r.a.createElement("p",null,"brought by: ",t.user),r.a.createElement("button",{onClick:function(){return e.removeItem(t.id)}},"Remove item"),r.a.createElement("button",{className:"update",onClick:function(){return e.updateItem(t.id)}},"Update item"))})))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.1db2fb77.chunk.js.map