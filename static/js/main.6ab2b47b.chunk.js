(this["webpackJsonpjob-portal"]=this["webpackJsonpjob-portal"]||[]).push([[0],{22:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),n=s(23),r=s.n(n),o=(s(34),s(5)),i=s(4),l=(s(35),s.p+"static/media/poster-img.bb7401ae.jpg"),d=s.p+"static/media/solaytic.8fcec411.png",j=s(1);var b=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"home-page",children:[Object(j.jsxs)("div",{className:"home-gradient-box",children:[Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light px-0",children:[Object(j.jsxs)("a",{className:"brandName",href:"/",children:["My",Object(j.jsx)("span",{style:{color:"#43AFFF",fontSize:"23px"},children:"Jobs"})]}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)(o.b,{className:"login-signup-btn ml-auto",to:"./signup",children:"Login/Signup"})]}),Object(j.jsx)("div",{className:"home-main-div",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("header",{className:"Home-heading",children:["Welcome to ",Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"Home-header-span1",children:"My"}),Object(j.jsx)("span",{className:"Home-header-span2",children:"Jobs"})]}),Object(j.jsx)(o.b,{className:"home-getStarted-btn",to:"./signup",children:"Get Started"})]}),Object(j.jsx)("div",{className:"images ml-auto",children:Object(j.jsx)("img",{src:l,className:"poster-img",alt:"poster"})})]})})]}),Object(j.jsxs)("div",{className:"home-why-us-content",children:[Object(j.jsx)("h3",{className:"heading-why-us",children:"Why us?"}),Object(j.jsxs)("div",{className:"row d-flex home-cards",children:[Object(j.jsx)("div",{className:"home-card",children:Object(j.jsxs)("div",{className:"home-card-body",children:[Object(j.jsxs)("h5",{className:"home-card-title",children:["Get More",Object(j.jsx)("br",{})," Visibility"]}),Object(j.jsx)("p",{className:"home-card-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."})]})}),Object(j.jsx)("div",{className:"home-card",children:Object(j.jsxs)("div",{className:"home-card-body",children:[Object(j.jsxs)("h5",{className:"home-card-title",children:["Get More",Object(j.jsx)("br",{})," Visibility"]}),Object(j.jsx)("p",{className:"home-card-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."})]})}),Object(j.jsx)("div",{className:"home-card",children:Object(j.jsxs)("div",{className:"home-card-body",children:[Object(j.jsxs)("h5",{className:"home-card-title",children:["Get More",Object(j.jsx)("br",{})," Visibility"]}),Object(j.jsx)("p",{className:"home-card-text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."})]})})]})]}),Object(j.jsxs)("div",{className:"home-companies-who-trust-us",children:[Object(j.jsx)("h3",{children:"Companies Who Trust Us"}),Object(j.jsxs)("div",{className:"row",style:{justifyContent:"space-between"},children:[Object(j.jsx)("img",{src:d,alt:"logo",width:"150"}),Object(j.jsx)("img",{src:d,alt:"logo",width:"150"}),Object(j.jsx)("img",{src:d,alt:"logo",width:"150"}),Object(j.jsx)("img",{src:d,alt:"logo",width:"150"}),Object(j.jsx)("img",{src:d,alt:"logo",width:"150"})]}),Object(j.jsxs)("div",{className:"row",style:{justifyContent:"space-around"},children:[Object(j.jsx)("img",{src:d,alt:"logo",width:"150"}),Object(j.jsx)("img",{src:d,alt:"logo",width:"150"}),Object(j.jsx)("img",{src:d,alt:"logo",width:"150"}),Object(j.jsx)("img",{src:d,alt:"logo",width:"150"})]})]})]})})},p=(s(41),s(42),s(7)),h=s.n(p),m=s(11),u=s(3),x=(s(45),s(25)),O=s(12),g=s(14);s(46);var v=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(u.a)(n,2),o=r[0],i=r[1],l=Object(a.useState)(""),d=Object(u.a)(l,2),b=d[0],p=d[1],v=Object(a.useState)(""),f=Object(u.a)(v,2),N=f[0],y=f[1],w=JSON.parse(localStorage.getItem("user-info"));function S(){return(S=Object(m.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("RECRUITER TOKEN",N),t={title:s,description:o,location:b},console.warn(t),e.next=5,fetch("https://jobs-api.squareboat.info/api/v1/jobs/",Object(x.a)({method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"".concat(N.data.token)}},"body",JSON.stringify(t)));case 5:return a=e.sent,e.next=8,a.json();case 8:a=e.sent,console.log("POSTE_JOB",a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){y(w)}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"post-a-job-gradient-box",children:[Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light px-0",children:[Object(j.jsxs)("a",{className:"brandName",href:"/",children:["My",Object(j.jsx)("span",{style:{color:"#43AFFF",fontSize:"23px"},children:"Jobs"})]}),Object(j.jsx)("p",{className:"post-a-job-nav-item ml-auto",children:"Post a Job"}),Object(j.jsxs)("div",{className:"dropdown",children:[Object(j.jsx)("button",{className:"btn btn-circle dropdown-toggle btn-lg",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(j.jsx)(O.a,{size:40,color:"#D9EFFF"})}),Object(j.jsx)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:Object(j.jsx)("a",{className:"dropdown-item",href:"/",children:"Logout"})})]})]}),Object(j.jsx)("div",{className:"post-a-job-content",children:Object(j.jsxs)("p",{children:[Object(j.jsx)(g.a,{})," Home ",Object(j.jsx)(g.b,{})," Post a Job"]})})]}),Object(j.jsx)("div",{className:"post-a-job-form",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("h4",{className:"mt-4 mb-3 ",children:"Post a Job"})}),Object(j.jsxs)("div",{class:"form-group",children:[Object(j.jsx)("label",{for:"title",children:"Job title*"}),Object(j.jsx)("input",{type:"text",class:"form-control mb-3",id:"title",placeholder:"Enter job title",onChange:function(e){return c(e.target.value)},required:!0}),Object(j.jsx)("label",{for:"desc",children:"Description*"}),Object(j.jsx)("textarea",{type:"text",class:"form-control mb-3",id:"desc",placeholder:"Enter job discription",rows:"4",onChange:function(e){return i(e.target.value)},required:!0}),Object(j.jsx)("label",{for:"location",children:"Location*"}),Object(j.jsx)("input",{type:"text",class:"form-control mb-3",id:"location",placeholder:"Enter job location",onChange:function(e){return p(e.target.value)},required:!0})]}),Object(j.jsx)("div",{className:"login-btn text-center my-4",children:Object(j.jsx)("button",{type:"submit",class:"btn btn-primary px-5",onClick:function(){return S.apply(this,arguments)},children:"Submit"})})]})})]})};var f=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(u.a)(n,2),l=r[0],d=r[1],b=Object(a.useState)(""),p=Object(u.a)(b,2),x=p[0],O=p[1],g=Object(i.g)(),v=Object(a.useState)(""),f=Object(u.a)(v,2),N=(f[0],f[1]);function y(){return(y=Object(m.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn("data",s,l),t={email:s,password:l},e.next=4,fetch("https://jobs-api.squareboat.info/api/v1/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 4:return a=e.sent,e.next=7,a.json();case 7:a=e.sent,localStorage.setItem("user-info",JSON.stringify(a)),console.log("result",a),N(a),200==a.code?g.push("/postedjobs"):O(!0);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsx)("div",{className:"login-page",children:Object(j.jsxs)("div",{className:"gradient-box",children:[Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light px-0",children:Object(j.jsxs)("a",{className:"brandName",href:"/",children:["My",Object(j.jsx)("span",{style:{color:"#43AFFF",fontSize:"23px"},children:"Jobs"})]})}),Object(j.jsxs)("div",{className:"login-form",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("h4",{className:"my-3 ",children:"Login"})}),Object(j.jsxs)("div",{className:"login-form-group",children:[Object(j.jsx)("label",{children:"Email address"}),Object(j.jsx)("input",{type:"email",className:"form-control ".concat(1==x&&"login-error"),placeholder:"Enter your email",onChange:function(e){return c(e.target.value)},required:!0}),Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)(o.b,{style:{color:"#43AFFF",marginLeft:"208px"},to:"./forgotpass",children:"Forgot your password?"}),Object(j.jsx)("input",{type:"password",className:"form-control ".concat(1==x&&"login-error"),placeholder:"Enter your password",onChange:function(e){return d(e.target.value)},required:!0}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("p",{className:"error-msg ".concat(1==x&&"error-msg1"),children:"Incorrect email address or password."})})]}),Object(j.jsx)("div",{className:"login-btn text-center my-4",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-primary px-5 ",onClick:function(){return y.apply(this,arguments)},children:"Login"})}),Object(j.jsx)("div",{className:"create-account-link-div text-center",children:Object(j.jsxs)("p",{children:["New to MyJobs? ",Object(j.jsx)(o.b,{style:{color:"#43AFFF"},to:"./signup",children:"Create an account"})]})})]})]})})},N=(s(47),s(26)),y=s(27);var w=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(u.a)(n,2),l=r[0],d=r[1],b=Object(a.useState)(""),p=Object(u.a)(b,2),x=p[0],O=p[1],g=Object(a.useState)(""),v=Object(u.a)(g,2),f=v[0],w=v[1],S=Object(a.useState)(0),F=Object(u.a)(S,2),C=F[0],E=F[1],k=Object(a.useState)(""),J=Object(u.a)(k,2),M=J[0],P=J[1],T=Object(i.g)(),q=Object(a.useState)(""),A=Object(u.a)(q,2),L=A[0],z=A[1],I=Object(a.useState)(""),R=Object(u.a)(I,2),H=R[0],B=R[1],D=Object(a.useState)(""),G=Object(u.a)(D,2),V=G[0],W=G[1];function U(){return(U=Object(m.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:s,email:x,password:l,confirmPassword:f,userRole:C,skills:M},console.warn(t),e.next=4,fetch("https://jobs-api.squareboat.info/api/v1//auth/register",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:return a=e.sent,e.next=7,a.json();case 7:a=e.sent,console.log("result",a),201==a.code&&T.push("/login"),""==s&&z(!0),""==x&&B(!0),""!=l&&""!=f||W(!0);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsx)("div",{className:"signup-page",children:Object(j.jsxs)("div",{className:"gradient-box",children:[Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light px-0",children:Object(j.jsxs)("a",{className:"brandName",href:"/",children:["My",Object(j.jsx)("span",{style:{color:"#43AFFF",fontSize:"23px"},children:"Jobs"})]})}),Object(j.jsxs)("div",{className:"signup-form",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("h4",{className:"my-3 ",children:"Signup"})}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("label",{for:"validInputEmail1",children:"I'm a*"})}),Object(j.jsx)("form",{children:Object(j.jsxs)("div",{className:"radio-toolbar",children:[Object(j.jsxs)("label",{className:"radio-inline radio-btn ".concat(0==C&&"radio-btn-active"),children:[Object(j.jsx)("input",{type:"radio",name:"optradio",onClick:function(){return E(0)}}),Object(j.jsx)(N.a,{size:25}),"  Recruiter"]}),Object(j.jsxs)("label",{className:"radio-inline radio-btn ".concat(1==C&&"radio-btn-active"),children:[Object(j.jsx)("input",{type:"radio",name:"optradio",onClick:function(){return E(1)}}),Object(j.jsx)(y.a,{size:25}),"  Candidate"]})]})})]}),Object(j.jsxs)("div",{className:"signup-form-group ",children:[Object(j.jsx)("label",{children:"Full Name*"}),Object(j.jsx)("input",{type:"email",className:"form-control ".concat(1==L&&"signup-error"),onChange:function(e){return c(e.target.value)},placeholder:"Enter your name",required:!0}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("p",{className:"signup-error-msg ".concat(1==L&&"signup-error-msg1"),children:"This feild is mandatory"})}),Object(j.jsx)("label",{children:"Email address*"}),Object(j.jsx)("input",{type:"email",className:"form-control ".concat(1==H&&"signup-error"),onChange:function(e){return O(e.target.value)},placeholder:"Enter your email",required:!0}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("p",{className:"signup-error-msg ".concat(1==H&&"signup-error-msg1"),children:"Invalid email address"})}),Object(j.jsxs)("div",{className:"row  d-flex",style:{justifyContent:"space-between"},children:[Object(j.jsxs)("div",{className:"create-password",children:[Object(j.jsx)("label",{children:"Create Password*"}),Object(j.jsx)("input",{type:"password",className:"form-control ".concat(1==V&&"signup-error"),placeholder:"Enter your password",onChange:function(e){return d(e.target.value)},required:!0})]}),Object(j.jsxs)("div",{className:"confirm-password",children:[Object(j.jsx)("label",{children:"Confirm Password*"}),Object(j.jsx)("input",{type:"password",className:"form-control ".concat(1==V&&"signup-error"),placeholder:"Enter your password",onChange:function(e){return w(e.target.value)},required:!0})]})]}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("p",{className:"signup-error-msg ".concat(1==V&&"signup-error-msg1"),children:"This feild is mandatory"})}),Object(j.jsx)("label",{children:"Skills"}),Object(j.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter coma separated skills",onChange:function(e){return P(e.target.value)},required:!0})]}),Object(j.jsx)("div",{className:"signup-btn text-center my-4",children:Object(j.jsx)("button",{type:"submit",className:"btn btn-primary px-5",onClick:function(){return U.apply(this,arguments)},children:"Signup"})}),Object(j.jsx)("div",{className:"create-account-link-div text-center",children:Object(j.jsxs)("p",{children:["Have an account? ",Object(j.jsx)(o.b,{style:{color:"#43AFFF"},to:"./login",children:"Login"})]})})]})]})})};s(48);var S=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(u.a)(n,2),l=r[0],d=r[1],b=Object(i.g)();function p(){return x.apply(this,arguments)}function x(){return(x=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn(s),e.next=3,fetch(s).then((function(e){e.json().then((function(e){d(e),localStorage.setItem("token",JSON.stringify(e))}))}));case 3:console.log("token",l);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){""==l?console.log("blank"):(console.warn(">>>>>>>>>>",l.code),201==l.code&&b.push("/resetpass"))}),[p]),Object(j.jsx)("div",{className:"forgottPass-page",children:Object(j.jsxs)("div",{className:"gradient-box",children:[Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light px-0",children:[Object(j.jsxs)("a",{className:"brandName",href:"/",children:["My",Object(j.jsx)("span",{style:{color:"#43AFFF",fontSize:"23px"},children:"Jobs"})]}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)(o.b,{className:"login-signup-btn ml-auto",to:"./login",children:"Login/Signup"})]}),Object(j.jsxs)("div",{className:"forgottPass-form",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h4",{className:"my-3 ",children:"Fotgot your password ?"}),Object(j.jsx)("p",{children:"Enter the email associated with your account and we\u2019ll send you instructions to reset your password."})]}),Object(j.jsxs)("div",{class:"form-group row",children:[Object(j.jsx)("label",{for:"validInputEmail1",children:"Email address"}),Object(j.jsx)("input",{type:"email",class:"form-control",id:"validInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter your email",onChange:function(e){return c("https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email="+e.target.value)},required:!0})]}),Object(j.jsx)("div",{className:"login-btn text-center my-4",children:Object(j.jsx)("button",{type:"submit",class:"btn btn-primary px-5",onClick:p,children:"Submit"})})]})]})})};s(49);var F=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(),r=Object(u.a)(n,2),l=r[0],d=r[1],b=Object(i.g)();function p(){return(p=Object(m.a)(h.a.mark((function e(){var t,a,c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("token")),a=t.data.token,console.log("data",s,l,a),c={password:s,confirmPassword:l,token:a},e.next=6,fetch("https://jobs-api.squareboat.info/api/v1/auth/resetpassword",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 6:return n=e.sent,e.next=9,n.json();case 9:n=e.sent,console.log("result",n),200==n.code&&b.push("/login");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsx)("div",{className:"resetpass-page",children:Object(j.jsxs)("div",{className:"gradient-box",children:[Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light px-0",children:[Object(j.jsxs)("a",{className:"brandName",href:"/",children:["My",Object(j.jsx)("span",{style:{color:"#43AFFF"},children:"Jobs"})]}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)(o.b,{className:"login-signup-btn ml-auto",to:"./login",children:"Login/Signup"})]}),Object(j.jsxs)("div",{className:"resetpass-form",children:[Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("h4",{className:"my-3 ",children:"Reset your password "})}),Object(j.jsx)("div",{className:"row mb-3",children:Object(j.jsx)("p",{children:"Enter your new password below."})}),Object(j.jsxs)("div",{class:"form-group row",children:[Object(j.jsx)("label",{children:"New password"}),Object(j.jsx)("input",{type:"password",class:"form-control",placeholder:"Enter your password",onChange:function(e){return c(e.target.value)},required:!0})]}),Object(j.jsxs)("div",{class:"form-group row",children:[Object(j.jsx)("label",{children:"Confirm new password"}),Object(j.jsx)("input",{type:"password",class:"form-control",placeholder:"Enter your password",onChange:function(e){return d(e.target.value)},required:!0})]}),Object(j.jsx)("div",{className:"login-btn text-center my-4",children:Object(j.jsx)("button",{type:"submit",class:"btn btn-primary px-5",onClick:function(){return p.apply(this,arguments)},children:"Reset"})})]})]})})},C=(s(22),s(29));s(50);var E=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{class:"modal-dialog",role:"document",children:Object(j.jsxs)("div",{class:"modal-content",children:[Object(j.jsxs)("div",{class:"modal-header",children:[Object(j.jsx)("h5",{class:"modal-title",id:"scropllModalLongTitle",children:"Applicants for this job"}),Object(j.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(j.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(j.jsxs)("div",{class:"modal-body",children:[Object(j.jsx)("p",{children:"Total 35 applications"}),Object(j.jsxs)("div",{className:"modal-content-div d-flex",children:[Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(O.a,{size:40,color:"#D9EFFF",style:{marginRight:"20px"}}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h6",{children:"Aditya Shrivastava"}),Object(j.jsx)("p",{children:"enailid@gmail.com"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h6",{children:"Skills"}),Object(j.jsx)("p",{children:"Coading, design, resturant, playing, driving"})]})]}),Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)(O.a,{size:40,color:"#D9EFFF",style:{marginRight:"20px"}}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h6",{children:"Aditya Shrivastava"}),Object(j.jsx)("p",{children:"enailid@gmail.com"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h6",{children:"Skills"}),Object(j.jsx)("p",{children:"Coading, design, resturant, playing, driving"})]})]})]})]})]})})})},k=s(28);var J=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){fetch("https://jobs-api.squareboat.info/api/v1/jobs").then((function(e){e.json().then((function(e){c(e.data),localStorage.setItem("jobs",JSON.stringify(e))}))}))}),[]),console.log(s),""==s?Object(j.jsx)("div",{className:"d-flex mt-5",children:Object(j.jsxs)("div",{className:"mr-auto ml-auto",children:[Object(j.jsx)("div",{className:"d-flex",children:Object(j.jsx)(k.a,{className:"ml-auto mr-auto",color:"rgba(211, 211, 211, 0.877)",size:150})}),Object(j.jsx)("p",{children:"Your posted jobs will show here !"}),Object(j.jsx)("div",{className:"d-flex",children:Object(j.jsx)("button",{className:"btn btn-primary ml-auto mr-auto px-4",children:"Post a Job"})})]})}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"footer-pagination-div d-flex ",children:[s.map((function(e){return Object(j.jsx)("div",{className:"job-cards",children:Object(j.jsxs)("div",{className:"posted-job-card",children:[Object(j.jsxs)("div",{className:"posted-job-card-body",children:[Object(j.jsx)("h5",{className:"posted-job-card-title",children:e.title}),Object(j.jsx)("p",{className:"posted-job-card-text",children:e.description})]}),Object(j.jsxs)("div",{className:"posted-job-card-footer row d-flex",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)(C.a,{size:20,color:"#43AFFF"})," ",e.location]}),Object(j.jsx)("button",{className:"btn view-app-btn","data-toggle":"modal","data-target":"#scropllModalLong",children:"View Application"})]})]})})})),Object(j.jsx)("div",{className:"modal fade",id:"scropllModalLong",tabindex:"-1",role:"dialog","aria-labelledby":"scropllModalLongTitle","aria-hidden":"true",children:Object(j.jsx)(E,{})})]}),Object(j.jsx)("div",{className:"footer-pagination-div",children:Object(j.jsx)("div",{className:"pagination-nav",children:Object(j.jsx)("nav",{"aria-label":"Page navigation",children:Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:"pagination-item",children:Object(j.jsxs)("a",{className:"page-link",href:"#","aria-label":"Previous",children:[Object(j.jsx)("span",{"aria-hidden":"true",children:"\xab"}),Object(j.jsx)("span",{className:"sr-only",children:"Previous"})]})}),Object(j.jsx)("li",{className:"pagination-item",children:Object(j.jsx)("a",{className:"page-link",href:"#",children:"1"})}),Object(j.jsx)("li",{className:"pagination-item",children:Object(j.jsxs)("a",{className:"page-link",href:"#","aria-label":"Next",children:[Object(j.jsx)("span",{"aria-hidden":"true",children:"\xbb"}),Object(j.jsx)("span",{className:"sr-only",children:"Next"})]})})]})})})})]})};var M=function(){return Object(j.jsxs)("div",{className:"posted-jobs-page",children:[Object(j.jsxs)("div",{className:"posted-job-gradient-box",children:[Object(j.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light px-0",children:[Object(j.jsxs)("a",{className:"brandName",href:"/",children:["My",Object(j.jsx)("span",{style:{color:"#43AFFF",fontSize:"23px"},children:"Jobs"})]}),Object(j.jsx)(o.b,{to:"/postajob",className:"ml-auto mr-4",style:{color:"white"},children:"Post a Job"}),Object(j.jsxs)("div",{className:"dropdown",children:[Object(j.jsx)("button",{className:"btn btn-circle dropdown-toggle btn-lg",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(j.jsx)(O.a,{size:40,color:"#D9EFFF"})}),Object(j.jsx)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:Object(j.jsx)("a",{className:"dropdown-item",href:"/",children:"Logout"})})]})]}),Object(j.jsxs)("div",{className:"posted-job-content",children:[Object(j.jsxs)("p",{children:[Object(j.jsx)(g.a,{})," Home"]}),Object(j.jsx)("h5",{children:"Jobs posted by you"})]})]}),Object(j.jsx)(J,{})]})};var P=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(o.a,{children:Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{exact:!0,path:"/",component:b}),Object(j.jsx)(i.b,{exact:!0,path:"/login",component:f}),Object(j.jsx)(i.b,{exact:!0,path:"/signup",component:w}),Object(j.jsx)(i.b,{exact:!0,path:"/forgotpass",component:S}),Object(j.jsx)(i.b,{exact:!0,path:"/resetpass",component:F}),Object(j.jsx)(i.b,{exact:!0,path:"/postedjobs",component:M}),Object(j.jsx)(i.b,{exact:!0,path:"/postajob",component:v}),Object(j.jsx)(i.a,{to:"/"})]})})})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.6ab2b47b.chunk.js.map