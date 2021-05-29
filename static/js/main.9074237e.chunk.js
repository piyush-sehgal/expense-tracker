(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(7),s=n.n(c),a=(n(13),n(8)),i=n(2),l=n(1),r=(n(14),n(0)),o=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})},j=(n(16),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onFilterChange(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"}),Object(r.jsx)("option",{value:"2018",children:"2018"})]})]})})}),d=(n(17),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),c=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:c}),Object(r.jsx)("div",{className:"expense-date__day",children:n})]})}),u=(n(18),function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(o,{className:"expense-item",children:[Object(r.jsx)(d,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsx)("div",{className:"expense-item__price",children:e.amount})]})]})})}),b=(n(19),n(20),function(e){return 0===e.items.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"No expenses found."}):Object(r.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(r.jsx)(u,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),x=function(e){var t=Object(l.useState)("2021"),n=Object(i.a)(t,2),c=n[0],s=n[1],a=e.items.filter((function(e){return console.log(e.date.getFullYear.toString()===c),e.date.getFullYear().toString()===c}));return Object(r.jsx)("div",{children:Object(r.jsxs)(o,{className:"expenses",children:[Object(r.jsx)(j,{selected:c,onFilterChange:function(e){s(e)}}),Object(r.jsx)(b,{items:a})]})})},O=n(6),h=(n(21),function(e){var t=Object(l.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],a=Object(l.useState)(""),o=Object(i.a)(a,2),j=o[0],d=o[1],u=Object(l.useState)(""),b=Object(i.a)(u,2),x=b[0],O=b[1];return Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:j,date:new Date(x)};e.onSaveForm(n),s(""),d(""),O("")},children:Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){d(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{type:"date",min:"2019-0101",max:"2022-12-31",value:x,onChange:function(e){O(e.target.value)}})]}),Object(r.jsxs)("div",{class:"new-expense__actions",children:[Object(r.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(r.jsx)("button",{type:"submit",children:"Add Expense"})]})]})})}),m=(n(22),function(e){var t=Object(l.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!c&&Object(r.jsx)("button",{onClick:function(){s(!0)},children:"Add new Expense"}),c&&Object(r.jsx)(h,{onSaveForm:function(t){var n=Object(O.a)(Object(O.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),s(!1)},onCancel:function(){s(!1)}})]})}),p=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],v=function(){var e=Object(l.useState)(p),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{onAddExpense:function(e){c((function(t){return[e].concat(Object(a.a)(t))}))}}),Object(r.jsx)(x,{items:n})]})};s.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.9074237e.chunk.js.map