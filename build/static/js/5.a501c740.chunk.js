(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{37:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,c=[],a=!0,i=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);a=!0);}catch(s){i=!0,o=s}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return o}))},45:function(t,e,n){t.exports={comments:"Comments_comments__iZX-v"}},46:function(t,e,n){t.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},47:function(t,e,n){t.exports={quote:"HighlightedQuote_quote__nE9T6"}},52:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(2),c=n(8),a=n(37),i=n(45),s=n.n(i),u=n(46),l=n.n(u),m=n(1),d=function(t){var e=Object(r.useRef)(),n=function(t){t.preventDefault()};return Object(m.jsxs)("form",{className:l.a.form,onSubmit:n,children:[Object(m.jsxs)("div",{className:l.a.control,onSubmit:n,children:[Object(m.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(m.jsx)("textarea",{id:"comment",rows:"5",ref:e})]}),Object(m.jsx)("div",{className:l.a.actions,children:Object(m.jsx)("button",{className:"btn",children:"Add Comment"})})]})},j=function(){var t=Object(r.useState)(!1),e=Object(a.a)(t,2),n=e[0],o=e[1];return Object(m.jsxs)("section",{className:s.a.comments,children:[Object(m.jsx)("h2",{children:"User Comments"}),!n&&Object(m.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),n&&Object(m.jsx)(d,{})]})},f=n(47),b=n.n(f),h=function(t){return Object(m.jsxs)("figure",{className:b.a.quote,children:[Object(m.jsx)("p",{children:t.text}),Object(m.jsx)("figcaption",{children:t.author})]})};e.default=function(){var t=Object(o.j)(),e=Object(o.k)();console.log(e);var n=[{id:"q1",author:"Brandon",text:"Learning react is fun!!"},{id:"q2",author:"fred legusta",text:"Learning react is fun!!"},{id:"q3",author:"tom hendricks",text:"Learning react is fun!!"}].find((function(e){return e.id===t.quoteId}));return n?Object(m.jsxs)(r.Fragment,{children:[Object(m.jsx)(h,{text:n.text,author:n.author}),Object(m.jsx)(o.c,{path:e.path,exact:!0,children:Object(m.jsx)("div",{className:"centered",children:Object(m.jsx)(c.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load comments"})})}),Object(m.jsx)(o.c,{path:"".concat(e.path,"/comments"),children:Object(m.jsx)(j,{})})]}):Object(m.jsx)("h3",{children:" No Quotes found here!!"})}}}]);
//# sourceMappingURL=5.a501c740.chunk.js.map