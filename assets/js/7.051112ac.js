(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8],{364:function(t,e,s){},368:function(t,e,s){"use strict";s(364)},369:function(t,e,s){},372:function(t,e,s){"use strict";s.r(e);var i={name:"Home",props:{item:{required:!0}},data:function(){return{isOpen:!1}},methods:{toggle:function(t){this.isOpen=!this.isOpen}}},n=(s(368),s(62)),a=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h3",{staticClass:"title",on:{click:t.toggle}},[t._v("\n    "+t._s(t.item.title)+"\n    "),s("img",{class:{iconActive:t.isOpen,icon:!0},attrs:{src:t.$withBase("/plus.svg")}})]),t._v(" "),s("article",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"details"},[t._v(t._s(t.item.details))])])}),[],!1,null,"7e3f8ac2",null);e.default=a.exports},376:function(t,e,s){"use strict";s(369)},377:function(t,e,s){"use strict";s.r(e);var i={name:"Home",components:{Item:s(372).default},props:{data:{required:!0}},data:function(){return{open:!1}},computed:{title:function(){return this.$page.frontmatter.FAQTitle}},methods:{toggle:function(t){this.open=!this.open}}},n=(s(376),s(62)),a=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"faq"},[e("h2",{staticClass:"title"},[this._v(this._s(this.title))]),this._v(" "),this._l(this.data,(function(t,s){return e("Item",{key:"faq_"+s,attrs:{item:t}})}))],2)}),[],!1,null,"006048c5",null);e.default=a.exports}}]);