(this["webpackJsonpshop-list"]=this["webpackJsonpshop-list"]||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),o=a.n(r),c=a(16),i=a(6),s=a(7),m=a(9),u=a(8),p=(a(27),a(12)),d=a(1);var h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"page-banner"},l.a.createElement("div",{className:"picture-banner"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8"},l.a.createElement("h2",null,l.a.createElement("strong",null,"Shopping")," List"),l.a.createElement("h3",null,function(){var e=(new Date).getHours();return e<12?"Good Morning!!":e>=12&&e<17?"Good Afternoon!!":"Good Night!!"}()," "),l.a.createElement("h3",null,l.a.createElement(p.b,{className:"link-style",to:"/ShoppingList"},"Home ")," |",l.a.createElement(p.b,{className:"link-style",to:"/about"}," About"))),l.a.createElement("div",{className:"col"},l.a.createElement("h3",null," ' ' ")))))}}]),a}(n.Component),f=a(21),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:""},e.onChange=function(t){return e.setState(Object(f.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){console.log(e.state.title),""!==e.state.title?(t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})):t.preventDefault()},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},l.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),l.a.createElement("input",{type:"submit",value:"Submit",className:"btn-green",style:{flex:"1"}}))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).getStyle=function(){return{textDecoration:e.props.todo.complete?"line-through":"none"}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title;return l.a.createElement("div",{className:"page-item"},l.a.createElement("div",{style:this.getStyle()},l.a.createElement("p",null,l.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," "," ",a,l.a.createElement("button",{className:"btn-red",onClick:this.props.delTodo.bind(this,t)},"X"))))}}]),a}(n.Component),v=a(10),g=a.n(v),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"page-list"},this.props.todos.map((function(t){return l.a.createElement(b,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})})))}}]),a}(n.Component);y.protoType={todos:g.a.array.isRequired};var O=y,j=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("p",null,"\xa9\xa0Copyright Karla Rodrigues")))};var k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement("div",{className:"about"},l.a.createElement("h1",null," About "),l.a.createElement("p",null," Application developed using react"),l.a.createElement("p",null," Great helper for shopping"),l.a.createElement("p",null," October 2020"),l.a.createElement("p",null," Keep in Contact"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/2karla/"},l.a.createElement("i",{className:"fab fa-linkedin fa-2x"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/Karla-Rodrigues"},l.a.createElement("i",{className:"fab fa-github-square fa-2x"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:karlaadautor@gmail.com"},l.a.createElement("i",{className:"fas fa-envelope fa-2x"}))))),l.a.createElement(j,null))},N=a(36),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={todos:[{id:Object(N.a)(),title:"milk",complete:!1},{id:Object(N.a)(),title:"bread",complete:!1},{id:Object(N.a)(),title:"cheese",complete:!1},{id:Object(N.a)(),title:"eggs",complete:!1}]},e.markComplete=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.complete=!e.complete),e}))})},e.delTodo=function(t){e.setState({todos:Object(c.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodo=function(t){var a={id:Object(N.a)(),title:t,complete:!1};e.setState({todos:[].concat(Object(c.a)(e.state.todos),[a])})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(p.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement(d.a,{exact:!0,path:"/ShoppingList",render:function(t){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(E,{addTodo:e.addTodo}),l.a.createElement("main",null,l.a.createElement(O,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo})),l.a.createElement(j,null))}}),l.a.createElement(d.a,{exact:!0,path:"/about",component:k}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(33);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.17c88cb7.chunk.js.map