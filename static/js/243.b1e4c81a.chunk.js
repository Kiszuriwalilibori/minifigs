"use strict";(self.webpackChunkminifigs=self.webpackChunkminifigs||[]).push([[243],{2243:function(e,i,s){s.r(i),s.d(i,{default:function(){return x}});var n=s(364),t=s(9271),c=s(885),r=s(6666),a=s.n(r),u=s(8111),l=s.n(u),o=s(5289),f=s(1088),d=s(763),m=s(2791),h=s(6363),p=s(948),g=s(8799),b=s(184),k=function(e){var i=e.minifigs,s=(0,t.k6)(),n=(0,m.useState)({}),r=(0,c.Z)(n,2),u=r[0],k=r[1],x="https://rebrickable.com/api/v3/lego/minifigs/"+u.set_num+"/parts/?key=8e442d7f1155bab4074dbff1e76bc680",j=(0,f.useLazyAxios)({url:x}),v=(0,c.Z)(j,2),C=v[0],N=v[1],Z=N.data,y=N.error,E=(N.loading,(0,h.Z)()),P=E.setSelectedMinifig,S=E.setParts;(0,m.useEffect)((function(){Z&&Z.results&&S(Z.results),y&&S(y),Z&&s.push(p.Z.order)}),[Z,y]);var _=(0,m.useCallback)((function(e){k(e)}),[]);return(0,b.jsx)("div",{className:"select",children:(0,b.jsxs)("div",{className:"select__content-box",children:[(0,b.jsx)("h2",{children:"Choose your minifig"}),(0,b.jsx)(o.Z,{in:!0,timeout:1500,children:(0,b.jsx)("div",{className:"images",children:i&&i.map((function(e){return e&&(0,b.jsx)(g.Ee,{minifig:e,clickHandler:_,isSelected:l()(e,u)},a()())}))})}),(0,b.jsx)(g.kD,{disabled:(0,d.isEmpty)(u),className:"button uppercased",onClick:function(e){e.stopPropagation(),P(u),C()},children:"Proceed to shipment"})]})})},x=(0,t.EN)((0,n.$j)((function(e){return{minifigs:e.fetch.minifigs}}),{})(k))}}]);
//# sourceMappingURL=243.b1e4c81a.chunk.js.map