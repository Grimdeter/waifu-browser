"use strict";(self["webpackChunkwaifu_browser"]=self["webpackChunkwaifu_browser"]||[]).push([[515],{3515:function(e,l,a){a.r(l),a.d(l,{default:function(){return M}});var t=a(3396),s=a(9242),i=a(4870),o=a(7139),r=a(3350);const u={class:"pt-2 bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-300 ease-in-out origin-top-left min-w-max"},n={class:"text-sm px-3 py-1 hover:bg-gray-100"},m=["href"],g={class:"text-sm px-3 py-1 hover:bg-gray-100"},d=["href"];var c={name:"ImgMenu",props:{modelValue:{type:Boolean,default:!1},image:{type:Object,default:()=>({})}},setup(e){const l=e;return(e,a)=>l.modelValue?((0,t.wg)(),(0,t.iD)("div",{key:0,class:"group inline-block",onClick:a[0]||(a[0]=(0,s.iM)((()=>{}),["stop"]))},[(0,t.Wm)(r.Z,{class:"text-xl"}),(0,t._)("ul",u,[(0,t._)("li",n,[(0,t._)("a",{href:l.image.url,target:"_blank"},"Link to img",8,m)]),(0,t._)("li",g,[(0,t._)("a",{href:l.image.source,target:"_blank"},"Link to source",8,d)])])])):(0,t.kq)("",!0)}};const p=c;var v=p;const x={class:"w-full px-4"},b=["src"],f={class:"p-8 sm:p-9 md:p-7 xl:p-9 text-center"},w={class:"font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary"},h={class:"text-base text-body-color leading-relaxed mb-7"};var _={name:"Card",props:{image:{type:Object,default:()=>({})}},setup(e){const l=e,a=(0,i.iH)([]),r=(0,i.iH)(!1),u=(0,t.aZ)(v),n=(0,i.iH)(!1),m=(0,i.iH)(!1),g=(0,t.Fl)((()=>l.image.tags.map((e=>e.description)).join(" "))),d=()=>{let e=[];e.push({title:l.image.image_id,src:l.image.url}),a.value=e,c()},c=()=>{r.value=!0},p=()=>{r.value=!1};return(l,c)=>{const v=(0,t.up)("dots-vertical"),_=(0,t.up)("vue-easy-lightbox");return(0,t.wg)(),(0,t.iD)("div",x,[(0,t._)("div",{class:"bg-white relative rounded-lg overflow-hidden mb-10 shadow-xl hover:shadow-2xl",onMouseenter:c[4]||(c[4]=e=>n.value=!0),onMouseleave:c[5]||(c[5]=e=>{n.value=!1,m.value=!1})},[(0,t._)("img",{src:e.image.url,alt:"image",class:"rounded-lg w-full",onClick:c[0]||(c[0]=e=>d())},null,8,b),n.value?((0,t.wg)(),(0,t.iD)("button",{key:0,class:"btn absolute left-5 top-5 text-xl",onMouseenter:c[1]||(c[1]=e=>m.value=!0),onClick:c[2]||(c[2]=(0,s.iM)((e=>m.value=!0),["stop"]))},[(0,t.Wm)(v)],32)):(0,t.kq)("",!0),(0,t.Wm)((0,i.SU)(u),{class:"absolute left-5 top-5 text-4xl",image:e.image,modelValue:m.value,"onUpdate:modelValue":c[3]||(c[3]=e=>m.value=e)},null,8,["image","modelValue"]),(0,t._)("div",f,[(0,t._)("h3",null,[(0,t._)("p",w,(0,o.zw)(e.image.image_id),1)]),(0,t._)("p",h,(0,o.zw)((0,i.SU)(g)),1)])],32),(0,t.Wm)(_,{moveDisabled:"",visible:r.value,imgs:a.value,onHide:p},null,8,["visible","imgs"])])}}};const k=_;var y=k;const D={class:"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"};var H={name:"Home",props:{waifuList:{type:Array,default:()=>[{}]}},setup(e){return(l,a)=>((0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",null,[(0,t._)("ul",D,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.waifuList,(e=>((0,t.wg)(),(0,t.iD)("li",{key:e.image_id},[(0,t.Wm)(y,{image:e},null,8,["image"])])))),128))])])]))}};const C=H;var M=C}}]);
//# sourceMappingURL=515.7e2e8a74.js.map