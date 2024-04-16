"use strict";(self.webpackChunkminifigs=self.webpackChunkminifigs||[]).push([[178],{3178:function(e,s,a){a.r(s),a.d(s,{default:function(){return D}});var r=a(8687),t=a(184),n=function(e){var s=e.message;return(0,t.jsx)("article",{className:"error",children:(0,t.jsxs)("div",{className:"message",children:[(0,t.jsx)("p",{className:"message__general-message",children:"Hi, \ud83d\ude00"}),(0,t.jsx)("hr",{}),(0,t.jsx)("div",{className:"message__error-message",children:s||""})]})})},i=a(2791),c=i.memo((function(){return(0,t.jsx)("div",{children:"It seems that Dementors sucked all the parts \ud83d\ude29"})})),l=a(1413),m=a(7689),o=a(5290),d=a(5970),u=a(1436),h="minifigs-ordr-form-id",x=a(3552),p="String does not satisfy the pattern: ",f="This field is required",g={address:/[A-Za-z0-9'\.\-\s\,]/,city:/^([ \u00c0-\u01ffa-zA-Z'\-])+$/,dob:/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,email:/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,firstName:/^([ \u00c0-\u01ffa-zA-Z'\-])+$/,state:/^([ \u00c0-\u01ffa-zA-Z'\-])+$/,surName:/^([ \u00c0-\u01ffa-zA-Z'-])+$/,phone:/(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-8]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}/,zip:/^[0-9]{2}-[0-9]{3}/},j={firstName:{minLength:{value:2,message:"This input requests not less then ".concat(2," chars")},maxLength:{value:45,message:"This input exceed length of ".concat(45," chars")},pattern:{value:g.firstName,message:"".concat(p).concat(g.firstName)},required:{value:!0,message:f}},surName:{required:{value:!0,message:f},minLength:{value:2,message:"This input requests not less then ".concat(2," chars")},maxLength:{value:45,message:"This input exceed length of ".concat(45," chars")},pattern:{value:g.surName,message:"".concat(p).concat(g.surName)}},phone:{required:{value:!0,message:f},pattern:{value:g.phone,message:"".concat(p).concat(g.surName)}},email:{required:{value:!0,message:f},pattern:{value:g.email,message:"".concat(p).concat(g.email)}},dob:{required:{value:!1,message:f},pattern:{value:g.dob,message:"".concat(p).concat(g.dob)}},address:{required:{value:!0,message:f},pattern:{value:g.address,message:"".concat(p).concat(g.address)}},city:{required:{value:!0,message:f},minLength:{value:2,message:"This input requests not less then ".concat(2," chars")},pattern:{value:g.city,message:"".concat(p).concat(g.city)}},state:{required:{value:!0,message:f},minLength:{value:2,message:"This input requests not less then ".concat(2," chars")},pattern:{value:g.state,message:"".concat(p).concat(g.state)}},zip:{pattern:{value:g.zip,message:"".concat(p).concat(g.zip)},required:{value:!0,message:f}}},v=a(5861),N=a(4687),y=a.n(N),b=a(3929),_=a(7721),z=a(5796),Z=(0,r.$j)(null,(function(e){return{sendOrder:function(s,a,r){return e(function(e,s,a){var r={headers:{"Content-type":"application/json; charset=UTF-8"}};return function(){var t=(0,v.Z)(y().mark((function t(n){return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b.Z.post("https://jsonplaceholder.typicode.com/posts",a,r).then((function(a){if(a)try{s.success("Your order has been successfully proceeded"),setTimeout((function(){return e(z.n.intro)}),5e3)}catch(r){n((0,_.showError)({isError:!0,errorMessage:"Error occured during order placing"}))}else n((0,_.showError)({isError:!0,errorMessage:"Empty data received from receiver's endpoint"}))})).catch((function(e){var s;s=b.Z.isAxiosError(e)?{isError:!0,errorMessage:"The following error occured when placing order: "+e.message}:{isError:!0,errorMessage:"Unknown error occured when placing order"},n((0,_.showError)(s))}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(s,a,r))}}}))((function(e){var s=e.sendOrder,a=(0,r.v9)(u.eW),n=(0,i.useRef)(null),c=(0,m.s0)(),p=(0,x.UD)(),f=(0,o.cI)(),g=f.register,v=f.handleSubmit,N=f.formState.errors;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("form",{className:"details",id:h,onSubmit:v((function(){var e=new FormData(n.current);a&&(e.append("setNumber",a),e&&s(c,p,e))})),ref:n,children:[(0,t.jsx)("h1",{className:"fromLeft",children:"Shipping details"}),(0,t.jsx)("div",{className:"foo",id:"foo"}),(0,t.jsxs)("div",{className:"form-item extendable",children:[(0,t.jsx)("label",{className:"required",htmlFor:"firstName",children:"Name"}),(0,t.jsx)("input",(0,l.Z)((0,l.Z)({type:"text"},g("firstName",j.firstName)),{},{id:"firstName"})),(0,t.jsx)(d.B,{errors:N,name:"firstName",as:"span"})]}),(0,t.jsxs)("div",{className:"form-item extendable",children:[(0,t.jsx)("label",{className:"required",htmlFor:"Surname",children:"Surname"}),(0,t.jsx)("input",(0,l.Z)({id:"Surname",type:"text"},g("surName",j.surName))),(0,t.jsx)(d.B,{errors:N,name:"surName",as:"span"})]}),(0,t.jsxs)("div",{className:"form-item full-width",children:[(0,t.jsx)("label",{className:"required",htmlFor:"Phone",children:"Phone Number"}),(0,t.jsx)("input",(0,l.Z)({id:"Phone",placeholder:"Mobile or regular Polish phone with country code like 048 669086566",type:"text"},g("phone",j.phone))),(0,t.jsx)(d.B,{errors:N,name:"phone",as:"span"})]}),(0,t.jsxs)("div",{className:"form-item full-width",children:[(0,t.jsx)("label",{className:"required",htmlFor:"email",children:"Email"}),(0,t.jsx)("input",(0,l.Z)({id:"email",type:"text"},g("email",j.email))),(0,t.jsx)(d.B,{errors:N,name:"email",as:"span"})]}),(0,t.jsxs)("div",{className:"form-item full-width",children:[(0,t.jsx)("label",{htmlFor:"DoB",children:"Date of Birth"}),(0,t.jsx)("input",(0,l.Z)({id:"DoB",placeholder:"Date in yyyy-mm-dd or yyyy-m-dd format ",type:"text"},g("dob",j.dob))),(0,t.jsx)(d.B,{errors:N,name:"dob",as:"span"})]}),(0,t.jsxs)("div",{className:"form-item full-width",children:[(0,t.jsx)("label",{className:"required",htmlFor:"address",children:"Address"}),(0,t.jsx)("input",(0,l.Z)({type:"text",id:"address"},g("address",j.address))),(0,t.jsx)(d.B,{errors:N,name:"address",as:"span"})]}),(0,t.jsxs)("div",{className:"form-item full-width",children:[(0,t.jsx)("label",{className:"required",htmlFor:"city",children:"City"}),(0,t.jsx)("input",(0,l.Z)({type:"text",id:"city"},g("city",j.city))),(0,t.jsx)(d.B,{errors:N,name:"city",as:"span"})]}),(0,t.jsxs)("div",{className:"form-item",children:[(0,t.jsx)("label",{className:"required",htmlFor:"state",children:"State"}),(0,t.jsx)("input",(0,l.Z)({type:"text",id:"state"},g("state",j.state))),(0,t.jsx)(d.B,{errors:N,name:"state",as:"span"})]}),(0,t.jsxs)("div",{className:"form-item",children:[(0,t.jsx)("label",{className:"required",htmlFor:"ZipCode",children:"Zip Code"}),(0,t.jsx)("input",(0,l.Z)({id:"ZipCode",type:"text",placeholder:" zip code in format xx-xxx"},g("zip",j.zip))),(0,t.jsx)(d.B,{errors:N,name:"zip",as:"span"})]})]})})})),q=function(e){var s=e.data,a=e.loadHandler;return(0,t.jsxs)("div",{className:"part",children:[(0,t.jsx)("img",{className:"part__image",src:s.part.part_img_url,alt:s.part.name,onLoad:a,onError:a}),(0,t.jsxs)("div",{className:"part__text-items",children:[(0,t.jsx)("div",{className:"part__item part__name",children:s.part.name}),(0,t.jsx)("a",{className:"part__item part__code",href:s.part.part_img_url,target:"blank",children:s.part.part_num})]})]})},w=a(6666),E=a.n(w),F=a(763),B=a(7480),k=a(8592),T=a(9874),L=function(){var e=(0,r.v9)(u.eW),s=(0,T.B)(e,{skip:(0,k.Z)()}),a=s.data,n=s.isFetching,l=s.isError,m=(0,i.useRef)(null),o=a?(0,F.after)(a.length,(function(){var e;null===(e=m.current)||void 0===e||e.classList.add("active")})):function(){};return n?(0,t.jsx)(B.TF,{}):l?(0,t.jsx)(c,{}):a&&!(0,F.isEmpty)(a)?(0,t.jsx)("div",{className:"parts",ref:m,children:a.map((function(e){return(0,t.jsx)(q,{data:e,loadHandler:o},E()())}))}):(0,t.jsx)(c,{})},S=function(){var e=(0,r.v9)(u.jX);if(!e)return null;var s=e.name,a=e.num_parts,n=e.set_img_url,i="There are ".concat(a," parts in this minifig:");return(0,t.jsxs)("div",{className:"summary__main items",children:[(0,t.jsx)("h2",{className:"black fromLeft",children:"Summary"}),(0,t.jsxs)("div",{className:"minifigCard minifigCard--no-padding",children:[s&&n&&(0,t.jsx)(B.t,{name:s,imageURL:n}),s&&(0,t.jsx)(B.VG,{name:s})]}),a&&(0,t.jsx)("p",{children:i})]})},C=function(){return(0,t.jsxs)("div",{className:"summary",children:[(0,t.jsx)(S,{}),(0,t.jsx)(L,{}),(0,t.jsx)(B.kD,{className:"button uppercased",type:"submit",form:h,children:"Submit"})]})},$=function(){return(0,k.Z)()?(0,t.jsx)(n,{message:"No Internet connection, try again some later"}):(0,t.jsxs)("main",{className:"order",children:[(0,t.jsx)(Z,{}),(0,t.jsx)(C,{})]})},D=(0,r.$j)((function(e){return{message:e.fetch.message,isMessage:e.fetch.isMessage}}),{})($)}}]);
//# sourceMappingURL=178.9e6c06f2.chunk.js.map