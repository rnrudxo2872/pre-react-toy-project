(this.webpackJsonpmasterd=this.webpackJsonpmasterd||[]).push([[0],{40:function(n,e,t){"use strict";t.r(e);var o,i=t(0),a=t.n(i),r=t(18),c=t.n(r),s=t(10),l=t(2),b=t(9),d=t(6),p=t(4),u=t(1),h=p.c.article(o||(o=Object(d.a)(["\n    \n"])));function m(){var n=Object(i.useState)(!0),e=Object(b.a)(n,2),t=e[0],o=(e[1],Object(l.f)().state);return console.log(o),Object(u.jsx)(h,{children:t?"Loading...":Object(u.jsx)(h,{children:"as"})})}var g,x,j,f,O,k,v=Object(i.memo)(m),y=t(16),w=t.n(y),z=t(23),q=p.c.article(g||(g=Object(d.a)(["\n    margin: 0 auto;\n    max-width: 480px;\n"]))),C=p.c.header(x||(x=Object(d.a)(["\n    height: 10vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),S=p.c.h1(j||(j=Object(d.a)(["\n    color: ",";\n"])),(function(n){return n.theme.titleColor})),B=p.c.ul(f||(f=Object(d.a)([""]))),D=p.c.li(O||(O=Object(d.a)(["\n    background-color: ",";\n    color: ",";\n    margin-bottom: 10px;\n    border-radius: 8px;\n\n    a {\n        display: block;\n        padding: 10px 20px;\n    }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.bgColor})),L=p.c.img(k||(k=Object(d.a)(["\n    width: 20px;\n    height: 20px;\n    margin-right: 10px;\n"])));function E(){var n=Object(i.useState)([]),e=Object(b.a)(n,2),t=e[0],o=e[1],a=Object(i.useState)(!0),r=Object(b.a)(a,2),c=r[0],l=r[1];Object(i.useEffect)((function(){Object(z.a)(w.a.mark((function n(){var e;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.coinpaprika.com/v1/coins");case 2:return n.next=4,n.sent.json();case 4:e=n.sent,o(e.slice(0,20)),l(!1),console.log(t);case 8:case"end":return n.stop()}}),n)})))()}),[]);return Object(u.jsxs)(q,{children:[Object(u.jsx)(C,{children:Object(u.jsx)(S,{children:"\ucf54\uc778 \uc0b4\ud3b4\ubcf4\uae30"})}),c?"Loading...":Object(u.jsx)(B,{children:t.map((function(n,e){return Object(u.jsx)(D,{children:Object(u.jsxs)(s.b,{to:{pathname:"/".concat(n.id),state:{coinId:n.id,coinSymbol:n.symbol}},children:[Object(u.jsx)(L,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name]})},n.id)}))})]})}var I=Object(i.memo)(E);var J=function(){return Object(u.jsx)(s.a,{basename:"/react-coin-tracker",children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/:id",children:Object(u.jsx)(v,{})}),Object(u.jsx)(l.a,{path:"/",children:Object(u.jsx)(I,{})})]})})};var M,R=function(){return Object(u.jsx)(J,{})},A=Object(p.b)(M||(M=Object(d.a)(['\n  html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:focus {\n    outline: 0;\n}\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\ninput[type=search] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n}\n\ntextarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n}\n\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    max-width: 100%;\n}\n\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n[hidden] {\n    display: none;\n}\n\nhtml {\n    font-size: 100%; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -ms-text-size-adjust: 100%; /* 2 */\n}\n\na {\n    text-decoration: none;\n    color:inherit;\n}\n\na:focus {\n    outline: thin dotted;\n}\n\na:active,\na:hover {\n    outline: 0;\n}\n\nimg {\n    border: 0; /* 1 */\n    -ms-interpolation-mode: bicubic; /* 2 */\n}\n\nfigure {\n    margin: 0;\n}\n\nform {\n    margin: 0;\n}\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0;\n    white-space: normal; /* 2 */\n    *margin-left: -7px; /* 3 */\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 100%; /* 1 */\n    margin: 0; /* 2 */\n    vertical-align: baseline; /* 3 */\n    *vertical-align: middle; /* 3 */\n}\n\nbutton,\ninput {\n    line-height: normal;\n}\n\nbutton,\nselect {\n    text-transform: none;\n}\n\nbutton,\nhtml input[type="button"], /* 1 */\ninput[type="reset"],\ninput[type="submit"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n    *overflow: visible;  /* 4 */\n}\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\ninput[type="checkbox"],\ninput[type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    *height: 13px; /* 3 */\n    *width: 13px; /* 3 */\n}\n\ninput[type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    color: #222;\n}\n\n\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\nimg {\n    vertical-align: middle;\n}\n\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\ntextarea {\n    resize: vertical;\n}\n\n.chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n}\n\nbody {\n    background-color: ',";\n    color: ",";\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsxs)(p.a,{theme:{bgColor:"#414141",borderRadius:"10%",textColor:"#DBDBDB",titleColor:"#f39d3b"},children:[Object(u.jsx)(A,{}),Object(u.jsx)(R,{})]})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.004bda51.chunk.js.map