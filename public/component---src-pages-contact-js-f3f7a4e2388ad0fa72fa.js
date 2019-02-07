(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{176:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return d});a(32),a(248);var n=a(6),r=a.n(n),l=(a(84),a(62),a(249),a(0)),c=a.n(l),i=(a(41),a(12)),o=a(194),m=a(192),s=a(200),u=a.n(s);var d=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){e.preventDefault();var t,n=e.target;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t=Object.assign({"form-name":n.getAttribute("name")},a.state),Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"))}).then(function(){return Object(i.navigateTo)(n.getAttribute("action"))}).catch(function(e){return alert(e)})},a.state={},a}return r()(t,e),t.prototype.render=function(){return c.a.createElement(o.a,null,c.a.createElement(m.a,{title:"Contact"}),c.a.createElement("div",{className:"contactForm"},c.a.createElement("div",{className:"aboveForm"},c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("img",{style:{maxWidth:"300px",marginTop:"20px"},src:u.a,alt:"Contact me for Web Design needs"})),c.a.createElement("div",null,c.a.createElement("h2",null,"Contact me"),c.a.createElement("p",{style:{fontWeight:"bold"}},"Whether you want to contact me about building you a site, collaborating, or you want to learn more about web design and/or development, don't hesitate to drop me a message!"))),c.a.createElement("form",{name:"contact",method:"post",action:"/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},c.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),c.a.createElement("p",{hidden:!0},c.a.createElement("label",null,"Don’t fill this out:"," ",c.a.createElement("input",{name:"bot-field",onChange:this.handleChange}))),c.a.createElement("div",{className:"formName"},c.a.createElement("label",null,"Your name:",c.a.createElement("br",null),c.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange}))),c.a.createElement("div",{className:"formEmail"},c.a.createElement("label",null,"Your email:",c.a.createElement("br",null),c.a.createElement("input",{type:"email",name:"email",onChange:this.handleChange}))),c.a.createElement("div",{className:"formMessage"},c.a.createElement("label",null,"Message:",c.a.createElement("br",null),c.a.createElement("textarea",{rows:"5",name:"message",onChange:this.handleChange}))),c.a.createElement("div",{className:"formSubmit"},c.a.createElement("button",{type:"submit"},"Send")))))},t}(c.a.Component)},185:function(e){e.exports={data:{site:{siteMetadata:{title:"johndurso.co"}}}}},186:function(e,t,a){},187:function(e,t,a){},188:function(e,t,a){},189:function(e,t,a){},190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){"use strict";var n=a(193),r=a(0),l=a.n(r),c=a(1),i=a.n(c),o=a(196),m=a.n(o),s=a(41);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,i=e.title;return l.a.createElement(s.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(m.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=u;var d="1025518380"},193:function(e){e.exports={data:{site:{siteMetadata:{title:"johndurso.co",description:"Web Designer and Developer from Detroit, Michiga dedicated to building responsive, optimized websites.",author:"@hivemindjohn"}}}}},194:function(e,t,a){"use strict";var n=a(185),r=a(0),l=a.n(r),c=a(1),i=a.n(c),o=a(41),m=a(184),s=a.n(m),u=(a(186),function(){return l.a.createElement("div",null,l.a.createElement("input",{id:"main-menu-checkbox",type:"checkbox"}),l.a.createElement("div",{className:"navigation"},l.a.createElement("label",{for:"main-menu-checkbox",className:"menu-toggle"},l.a.createElement("span",{className:"sr-only"},"Open main menu"),l.a.createElement("span",{className:"fa fa-bars",ariaHidden:"true"})),l.a.createElement("div",{id:"main-menu",role:"navigation",className:"main-menu",ariaExpanded:"false",ariaLabel:"Main menu"},l.a.createElement("label",{for:"main-menu-checkbox",class:"menu-close"},l.a.createElement("span",{className:"sr-only"},"Close main menu"),l.a.createElement("span",{className:"fa fa-close",ariaHidden:"true"})),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.a,{cover:!0,to:"/",bg:"#c4af9c"},"Home")),l.a.createElement("li",null,l.a.createElement(s.a,{cover:!0,to:"/about",bg:"#c4af9c"},"About")),l.a.createElement("li",null,l.a.createElement(s.a,{cover:!0,to:"/blog",bg:"#c4af9c"},"Blog")),l.a.createElement("li",null,l.a.createElement(s.a,{cover:!0,to:"/contact",bg:"#c4af9c"},"Contact"))))))}),d=(a(187),a(195),function(e){e.siteTitle;return l.a.createElement("div",{className:"header"},l.a.createElement("div",null,l.a.createElement("h1",null,l.a.createElement(s.a,{cover:!0,to:"/",bg:"#c4af9c"},"John Durso")),l.a.createElement("h2",null,"Front-End Web Developer"),l.a.createElement("h3",null,"Detroit, Michigan")),l.a.createElement("div",null,l.a.createElement("div",{className:"socialShare"},l.a.createElement("div",null,l.a.createElement("a",{href:"https://twitter.com/johndursodev/",target:"_blank"},l.a.createElement("i",{className:"fa fa-2x fa-twitter"}))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://linkedin.com/in/johnkyrondurso/",target:"_blank"},l.a.createElement("i",{className:"fa fa-2x fa-linkedin"}))),l.a.createElement("div",null,l.a.createElement(s.a,{cover:!0,to:"/contact",bg:"#c4af9c"},l.a.createElement("i",{className:"fa fa-2x fa-envelope"}))))))});d.propTypes={siteTitle:i.a.string},d.defaultProps={siteTitle:""};var f=d;var p=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"© ",(new Date).getFullYear()," developed by ",l.a.createElement("a",{href:"https://twitter.com/johndursodev",target:"_blank"},"@johndursodev")))},E=(a(188),a(189),a(190),a(191),function(e){var t=e.children;return l.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),l.a.createElement(u,null),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),l.a.createElement(p,null))},data:n})});E.propTypes={children:i.a.node.isRequired};t.a=E},200:function(e,t,a){e.exports=a.p+"static/contact-d632e59b7bf26a5491f774d13d98c78d.svg"},248:function(e,t,a){var n=a(30).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(21)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},249:function(e,t,a){var n=a(33),r=a(45);a(250)("keys",function(){return function(e){return r(n(e))}})},250:function(e,t,a){var n=a(11),r=a(20),l=a(31);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],c={};c[e]=t(a),n(n.S+n.F*l(function(){a(1)}),"Object",c)}}}]);
//# sourceMappingURL=component---src-pages-contact-js-f3f7a4e2388ad0fa72fa.js.map