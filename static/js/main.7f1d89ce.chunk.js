(this["webpackJsonpreact-crud-app"]=this["webpackJsonpreact-crud-app"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(1),o=n(7),c=n.n(o),a=(n(14),n(9)),r=n(2),d=n(3),s=n(5),l=n(4),u=n(0),j=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).handleUpdate=function(){t.props.updateTodo(t.indexValue,t.title.value,t.description.value)},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.allTodos,i=e.pressUpdateButton,o=e.deleteTodo,c=n.map((function(e,n){return!0===e.isEditing?Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"text",ref:function(e){t.title=e},required:!0,defaultValue:e.title})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"text",ref:function(e){t.description=e},required:!0,defaultValue:e.description})}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"button",value:"Update",onClick:t.handleUpdate,ref:function(){t.indexValue=n},className:"btn green"})})]},n):Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.title}),Object(u.jsx)("td",{children:e.description}),Object(u.jsxs)("td",{children:[Object(u.jsx)("button",{className:"btn blue",onClick:function(){return i(n)},children:"Update"}),"  ",Object(u.jsx)("button",{className:"btn red",onClick:function(){return o(n)},children:" Delete "})]})]},n)}));return Object(u.jsxs)("table",{className:"striped",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:"Description"}),Object(u.jsx)("th",{children:"Update or Delete"})]})}),Object(u.jsx)("tbody",{children:c})]})}}]),n}(i.Component),p=n(8),h=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).initialState={title:"",description:"",isEditing:!1},t.state=t.initialState,t.handleSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state),e.target.reset()},t.updateState=function(e){var n=e.target,i=n.name,o=n.value;t.setState(Object(p.a)({},i,o))},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)("div",{className:"input-field col s4",children:Object(u.jsx)("input",{name:"title",autoComplete:"off",placeholder:"Enter title of your Todo",required:!0,type:"text",onChange:this.updateState})}),Object(u.jsx)("div",{className:"input-field col s4",children:Object(u.jsx)("input",{name:"description",autoComplete:"off",placeholder:"Enter description of your Todo",required:!0,type:"text",onChange:this.updateState})}),Object(u.jsx)("div",{className:"input-field col s2",children:Object(u.jsx)("input",{type:"submit",value:"Add Todo",className:"btn green"})})]})})}}]),n}(i.Component),b=(n(16),function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={todos:[{title:"React",description:"Prochur documentation porte hobe",isEditing:!1},{title:"Lunch",description:"Birani khaite hobe",isEditing:!1}]},t.addTodo=function(e){var n=[].concat(Object(a.a)(t.state.todos),[e]);t.setState({todos:n})},t.deleteTodo=function(e){var n=t.state.todos.filter((function(t,n){return n!==e}));t.setState({todos:n})},t.pressUpdateButton=function(e){var n=t.state.todos;n[e].isEditing=!0,t.setState({todos:n})},t.updateTodo=function(e,n,i){var o=t.state.todos;o[e].title=n,o[e].description=i,o[e].isEditing=!1,t.setState({todos:o})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"React Crud Todo App"}),Object(u.jsx)("h4",{children:"Todo Lists:"}),Object(u.jsx)(j,{allTodos:this.state.todos,pressUpdateButton:this.pressUpdateButton,updateTodo:this.updateTodo,deleteTodo:this.deleteTodo}),Object(u.jsx)("h4",{children:"Add Todo: "}),Object(u.jsx)(h,{addTodo:this.addTodo})]})}}]),n}(i.Component));c.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7f1d89ce.chunk.js.map