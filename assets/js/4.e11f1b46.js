(window.webpackJsonp=window.webpackJsonp||[]).push([[4,6,7],{364:function(t,e,i){},366:function(t,e,i){"use strict";i(364)},367:function(t,e,i){},369:function(t,e,i){"use strict";i.r(e);var n={name:"Home",props:{item:{required:!0}},data:function(){return{isOpen:!1}},methods:{toggle:function(t){this.isOpen=!this.isOpen}}},s=(i(366),i(62)),a=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title",on:{click:t.toggle}},[t._v("\n    "+t._s(t.item.title)+"\n    "),i("div",{class:{iconActive:t.isOpen,icon:!0}},[t._v("+")])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"details"},[t._v(t._s(t.item.details))])])}),[],!1,null,"89ce698c",null);e.default=a.exports},371:function(t,e,i){"use strict";i(367)},372:function(t,e,i){"use strict";i.r(e);var n={name:"Home",components:{Item:i(369).default},props:{data:{required:!0}},data:function(){return{open:!1}},computed:{title:function(){return this.$page.frontmatter.FAQTitle}},methods:{toggle:function(t){this.open=!this.open}}},s=(i(371),i(62)),a=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"faq"},[e("h2",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),this._l(this.data,(function(t,i){return e("Item",{key:"faq_"+i,attrs:{item:t}})}))],2)}),[],!1,null,"1e7ac874",null);e.default=a.exports},438:function(t,e,i){"use strict";i.r(e);var n=i(372).default,s=i(62),a=Object(s.a)(n,void 0,void 0,!1,null,null,null);e.default=a.exports}}]);