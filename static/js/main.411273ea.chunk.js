(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},37:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(28),l=a.n(r),c=(a(37),a(15)),s=a(2),i=a(3),d=a(5),m=a(4),u=a(6),p=a(12),h=a(11),b=a(14),f=a.n(b);var g={background:"#343A40",color:"#fff",textAlign:"center",padding:"10px"},v=function(){return o.a.createElement("header",{style:g},o.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark"},o.a.createElement(p.b,{className:"navbar-brand",to:"/"},"Stu's Task List"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"nav-item-x"},o.a.createElement(p.c,{className:"nav-link",to:"/"},"Home")),o.a.createElement("li",{className:"x-nav-item"},o.a.createElement(p.c,{className:"nav-link",to:"/about"},"About")),o.a.createElement("li",{className:"x-nav-item"},o.a.createElement(p.c,{className:"nav-link",to:"/help"},"Help"))))))},E=a(31),y=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null," ",this.props.msg,o.a.createElement("button",{style:j,onClick:this.props.onDismissMessage},"x")))}}]),t}(n.Component),j={color:"white",background:"#aaa",border:"none",padding:"2px 9px",borderRadius:"50%",float:"right",cursor:"pointer"},k=y,O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={title:"",isError:!1},a.getStyle=function(){return{color:"purple"}},a.onChangeHandler=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),""!==a.state.title?(a.props.addTodo(a.state.title),a.setState({title:"",isError:!1})):a.setState({title:a.state.title,isError:!0})},a.handleDismissMessage=function(e){var t=a.state.title;a.setState({title:t,isError:!1})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add to do",style:{flex:11,padding:"5px"},value:this.state.title,onChange:this.onChangeHandler}),o.a.createElement("input",{type:"submit",value:"submit",className:"btnSubmit",style:{flex:1}})),this.state.isError?o.a.createElement(k,{onDismissMessage:this.handleDismissMessage,msg:"Please enter a description for the To do item"}):null)}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).getStyle=function(){return{backgroundColor:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:a.props.todo.completed?"line-through":"none"}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," ",a," ",o.a.createElement("button",{style:C,onClick:this.props.deleteTodo.bind(this,t)}," ",o.a.createElement("i",{className:"far fa-trash-alt"}))))}}]),t}(n.Component),C={color:"white",background:"red",border:"none",padding:"5px 9px",borderRadius:"50%",float:"right",cursor:"pointer"},N=x,S=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return o.a.createElement(N,{key:t.id,todo:t,markComplete:e.props.markComplete,deleteTodo:e.props.deleteTodo})})}}]),t}(n.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is the Todo List app v1.0."),o.a.createElement("p",null,"It's part of the react crash course by Traversy Media"))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Help"),o.a.createElement("ul",{className:"list-unstyled list-padded"},o.a.createElement("li",{className:"list-item-padded"},'Type your new task into the "Add to do" field and press enter (or tap Submit)'),o.a.createElement("li",{className:"list-item-padded"},"To mark a task as complete, tick the checkbox and your task will appear as completed"),o.a.createElement("li",{className:"list-item-padded"},"To remote a task entirely, tap on the red trash-can icon.  This cannot be undone.")),o.a.createElement("img",{src:"./assets/img/screen-mobile.png",className:"img-fluid center-image",alt:"Screen shot of mobile app"}))}}]),t}(n.Component),A=(a(65),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[]},a.deleteTodo=function(e){f.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then(function(t){a.setState({todos:Object(c.a)(a.state.todos.filter(function(t){return t.id!==e}))})}).catch(function(e){console.log(e)})},a.markComplete=function(e){a.setState({todos:a.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},a.addTodo=function(e){f.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1,userId:1}).then(function(e){a.setState({todos:[].concat(Object(c.a)(a.state.todos),[e.data])})}).catch(function(e){console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://jsonplaceholder.typicode.com/todos?_limit=7").then(function(t){e.setState({todos:Object(c.a)(t.data)})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement(p.a,{basename:"/react-tasklist/"},o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(v,null),o.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,{addTodo:e.addTodo}),o.a.createElement(S,{todos:e.state.todos,markComplete:e.markComplete,deleteTodo:e.deleteTodo}))}}),o.a.createElement(h.a,{path:"/about",component:T}),o.a.createElement(h.a,{path:"/help",component:w}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.411273ea.chunk.js.map