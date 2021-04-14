(this["webpackJsonprest-countries-api"]=this["webpackJsonprest-countries-api"]||[]).push([[0],{71:function(n,e,t){"use strict";t.r(e);var r,a,i,c,o,s,d,l,u,p,j,b,h,m=t(1),O=t.n(m),x=t(34),f=t.n(x),g=t(3),v=t(2),w=t(16),y=t.n(w),E=t(19),k=t(38),C=t(20),L=t.n(C),R=function(n,e){switch(e.type){case"FETCH_DATA":return Object(v.a)(Object(v.a)({},n),{},{countries:e.payload,isLoading:!1});case"FETCH_DETAILS":return Object(v.a)(Object(v.a)({},n),{},{countryDetails:e.payload,isLoading:!1});case"FETCH_BORDERS":return Object(v.a)(Object(v.a)({},n),{},{borders:e.payload});case"CREATE_BORDERS":return Object(v.a)(Object(v.a)({},n),{},{newBorders:e.payload});case"TOGGLE_THEME":return"dark"===e.payload?Object(v.a)(Object(v.a)({},n),{},{theme:"light"}):Object(v.a)(Object(v.a)({},n),{},{theme:"dark"});case"CHANGE_INPUT":return Object(v.a)(Object(v.a)({},n),{},{input:e.payload});case"CLEAR_INPUT":return Object(v.a)(Object(v.a)({},n),{},{input:""});case"SEARCH_COUNTRY":return Object(v.a)(Object(v.a)({},n),{},{countries:e.payload});case"START_LOADING":return Object(v.a)(Object(v.a)({},n),{},{isLoading:!0});case"STOP_LOADING":return Object(v.a)(Object(v.a)({},n),{},{isLoading:!1});case"ERROR":return Object(v.a)(Object(v.a)({},n),{},{noInput:!0});case"REMOVE_ERROR":return Object(v.a)(Object(v.a)({},n),{},{noInput:!1});default:throw new Error("No action type found")}},T=t(0),A=Object(m.createContext)(),S={theme:"dark",countries:[],countryDetails:{},borders:[],newBorders:[],isLoading:!0,input:"",noInput:!1,url:"https://restcountries.eu/rest/v2/all"},D=function(n){var e=n.children,t=Object(m.useReducer)(R,S),r=Object(k.a)(t,2),a=r[0],i=r[1],c=function(){i({type:"START_LOADING"})},o=function(){i({type:"STOP_LOADING"})},s=function(){i({type:"CLEAR_INPUT"})},d=function(){var n=Object(E.a)(y.a.mark((function n(e){var t;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(),n.next=4,L.a.get(e);case 4:if(!((t=n.sent).status>=400)){n.next=7;break}throw new Error(t.status);case 7:i({type:"FETCH_DATA",payload:t.data}),n.next=16;break;case 10:n.prev=10,n.t0=n.catch(0),console.error(n.t0),alert("Invalid input"),o(),s();case 16:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=Object(E.a)(y.a.mark((function n(e){var t;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(),n.next=4,L.a.get(e);case 4:if(!((t=n.sent).status>=400)){n.next=8;break}throw console.log("error"),new Error(t.status);case 8:i({type:"FETCH_BORDERS",payload:t.data[0].borders}),i({type:"FETCH_DETAILS",payload:t.data[0]}),n.next=18;break;case 12:n.prev=12,n.t0=n.catch(0),console.log("error"),console.error(n.t0),o(),s();case 18:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}();return Object(m.useEffect)((function(){d(a.url)}),[a.url]),Object(T.jsx)(A.Provider,{value:Object(v.a)(Object(v.a)({},a),{},{handleTheme:function(n){i({type:"TOGGLE_THEME",payload:n})},handleInput:function(n){i({type:"CHANGE_INPUT",payload:n})},searchCountry:function(n){if(!a.input)return i({type:"ERROR"}),void setTimeout((function(){i({type:"REMOVE_ERROR"})}),3e3);var e="https://restcountries.eu/rest/v2/name/".concat(n||a.input);d(e)},handleFilter:function(n){if("All"===n)d(a.url);else{var e="https://restcountries.eu/rest/v2/region/".concat(n);d(e)}},fetchDetails:l,createBorders:function(){var n=[];a.countries.forEach((function(e){a.borders.forEach((function(t){e.alpha3Code===t&&n.push(e.name)}))})),i({type:"CREATE_BORDERS",payload:n})}}),children:e})},N=t(5),_=t.p+"static/media/NunitoSans-Light.7f9eed4c.ttf",I={fontColor:"hsl(0, 0%, 100%)",input:"hsl(0, 0%, 52%)",background:"hsl(207, 26%, 17%)",elements:"hsl(209, 23%, 22%)",loader:"hsl(0, 0%, 100%)",loaderTop:"hsl(0, 0%, 17%)"},B={fontColor:"hsl(200, 15%, 8%)",input:"hsl(0, 0%, 52%)",background:"hsl(0, 0%, 98%)",elements:"hsl(0, 0%, 100%)",loader:"hsl(0, 0%, 0%)",loaderTop:"hsl(0, 0%, 100%)"},F=Object(g.b)(r||(r=Object(N.a)(["\n    @font-face {\n        font-family: 'NunitoSans';\n        src: url(",") format('ttf');\n    }\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n    body {\n        font-family: 'Nunito Sans', sans-serif;\n        font-size: 14px;\n        background-color: ",";\n        color: ",";\n    }\n    nav {\n        background-color: ",";\n    }\n    button {\n        cursor: pointer;\n        color: ",";\n        border: none;\n        outline: none;\n        background-color: transparent;\n        font-family: 'Nunito Sans', sans-serif;\n    }\n    span {\n        font-family: 'Nunito Sans', sans-serif;\n    }\n    input {\n        font-family: inherit;\n        color: ",";\n        background-color: ",";\n    }\n    ::-webkit-input-placeholder,\n    :-ms-input-placeholder,\n    ::placeholder {\n        color: ",";\n        font-family: inherit;\n        font-size: 12px;\n    }\n    select,\n    article,\n    a {\n        background-color: ",";\n        color: ",";\n        text-decoration: none;\n    }\n"])),_,(function(n){return n.theme.background}),(function(n){return n.theme.fontColor}),(function(n){return n.theme.elements}),(function(n){return n.theme.fontColor}),(function(n){return n.theme.fontColor}),(function(n){return n.theme.elements}),(function(n){return n.theme.fontColor}),(function(n){return n.theme.elements}),(function(n){return n.theme.fontColor})),H=t(11),G=t(4),P=t(12),M="375px",z="425px",U="768px",J="1024px",V="1440px",Y="1920px",W="2560px",q={mobileS:"(min-width: ".concat("320px",")"),mobileM:"(min-width: ".concat(M,")"),mobileL:"(min-width: ".concat(z,")"),tablet:"(min-width: ".concat(U,")"),laptop:"(min-width: ".concat(J,")"),laptopL:"(min-width: ".concat(V,")"),desktop:"(min-width: ".concat(Y,")"),desktopL:"(min-width: ".concat(W,")")},K=g.c.nav(a||(a=Object(N.a)(["\n    width: 90%;\n    margin: 0 auto;\n    padding: 2rem 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    button {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        span {\n            margin-left: 0.4rem;\n        }\n    }\n    @media "," {\n        width: 75%;\n        margin: 0 auto;\n    }\n    @media "," {\n        width: 88%;\n        margin: 0 auto;\n    }\n    @media "," {\n        width: 85%;\n        margin: 0 auto;\n    }\n    @media "," {\n        width: 82%;\n        margin: 0 auto;\n    }\n    @media "," {\n        width: 86%;\n        margin: 0 auto;\n    }\n"])),q.tablet,q.laptop,q.laptopL,q.desktop,q.desktopL),Q=function(){var n=Object(m.useContext)(A),e=n.theme,t=n.handleTheme;return Object(T.jsx)("nav",{children:Object(T.jsxs)(K,{children:[Object(T.jsx)(H.b,{to:"/react-fem-rest-countries-api/",children:Object(T.jsx)("h1",{children:"Where in the world?"})}),Object(T.jsx)("button",{onClick:function(){return t(e)},children:"dark"===e?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(P.d,{})," ",Object(T.jsx)("span",{children:"Light Mode"})]}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(P.b,{})," ",Object(T.jsx)("span",{children:"Dark Mode"})]})})]})})},X=g.c.select(i||(i=Object(N.a)(["\n    font-family: inherit;\n    font-size: 12px;\n    margin: 2.5rem 0 0 0;\n    padding: 0.8rem 2rem 0.8rem 1rem;\n    border: none;\n    border-radius: 5px;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n\n    @media "," {\n        margin: 0;\n    }\n"])),q.laptop),Z=function(){var n=Object(m.useContext)(A).handleFilter;return Object(T.jsxs)(X,{name:"region",id:"region","aria-label":"filter by region",onChange:function(e){return n(e.target.value)},children:[Object(T.jsx)("option",{value:"",hidden:!0,children:"Filter by Region"}),Object(T.jsx)("option",{value:"All",children:"All"}),Object(T.jsx)("option",{value:"Africa",children:"Africa"}),Object(T.jsx)("option",{value:"Americas",children:"Americas"}),Object(T.jsx)("option",{value:"Asia",children:"Asia"}),Object(T.jsx)("option",{value:"Europe",children:"Europe"}),Object(T.jsx)("option",{value:"Oceania",children:"Oceania"})]})},$=g.c.section(c||(c=Object(N.a)(["\n    padding: 3rem 0 0 0;\n    div {\n        width: 90%;\n        margin: 0 auto;\n    }\n    form {\n        width: 100%;\n        max-width: 480px;\n        border-radius: 5px;\n        overflow: hidden;\n        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n        position: relative;\n    }\n    button {\n        font-size: 1rem;\n        position: absolute;\n        top: 50%;\n        left: 2rem;\n        transform: translateY(-50%);\n    }\n    input {\n        width: 100%;\n        font-size: 14px;\n        padding: 0.8rem 4rem;\n        border: none;\n        outline: none;\n    }\n    @media "," {\n        div {\n            width: 75%;\n            margin: 0 auto;\n        }\n    }\n    @media "," {\n        div {\n            width: 88%;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n    }\n    @media "," {\n        div {\n            width: 85%;\n        }\n    }\n    @media "," {\n        div {\n            width: 82%;\n        }\n    }\n    @media "," {\n        div {\n            width: 86%;\n        }\n    }\n"])),q.tablet,q.laptop,q.laptopL,q.desktop,q.desktopL),nn=function(){var n=Object(m.useContext)(A),e=n.handleInput,t=n.searchCountry,r=n.noInput;return Object(T.jsx)($,{children:Object(T.jsxs)("div",{children:[Object(T.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(),n.target.reset()},children:[Object(T.jsx)("button",{type:"submit",children:Object(T.jsx)(P.c,{})}),Object(T.jsx)("input",{style:r?{border:"2px solid red"}:{border:"none"},type:"text",name:"search",id:"search","aria-label":"search",placeholder:"Search for a country...",onChange:function(n){return e(n.target.value)}})]}),Object(T.jsx)(Z,{})]})})},en=Object(g.c)(H.b)(o||(o=Object(N.a)(["\n    width: 260px;\n    height: 330px;\n    border-radius: 5px;\n    margin: 2rem;\n    overflow: hidden;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n    div {\n        width: 100%;\n        height: 160px;\n        & img {\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n        }\n    }\n    div:last-child {\n        padding: 1rem;\n        h2 {\n            font-size: 1.1rem;\n            margin: 0.5rem 0.5rem 1rem 0.5rem;\n        }\n        p {\n            margin: 0.5rem;\n        }\n    }\n"]))),tn=function(n){var e=n.flag,t=n.name,r=n.population,a=n.region,i=n.capital;return Object(T.jsxs)(en,{to:"/react-fem-rest-countries-api/country/".concat(t),children:[Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:e,alt:t})}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h2",{children:t}),Object(T.jsxs)("p",{children:["Population: ",r.toLocaleString()]}),Object(T.jsxs)("p",{children:["Region: ",a]}),Object(T.jsxs)("p",{children:["Capital: ",i]})]})]})},rn=Object(g.d)(s||(s=Object(N.a)(["\n    to {\n        transform: rotate(360deg);\n    }\n}\n"]))),an=g.c.div(d||(d=Object(N.a)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 50px;\n    height: 50px;\n    margin-top: 0;\n    margin-left: -25px;\n    border-radius: 50%;\n    border: 2px solid ",";\n    border-top-color: ",";\n    animation: "," 0.6s linear infinite;\n"])),(function(n){return n.theme.loader}),(function(n){return n.theme.loaderTop}),rn),cn=function(){return Object(T.jsx)(an,{})},on=g.c.div(l||(l=Object(N.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n"]))),sn=function(){var n=Object(m.useContext)(A),e=n.countries;return n.isLoading?Object(T.jsx)(cn,{}):Object(T.jsx)("main",{children:Object(T.jsx)(on,{children:e.map((function(n){return Object(m.createElement)(tn,Object(v.a)(Object(v.a)({},n),{},{key:n.name}))}))})})},dn=g.c.section(u||(u=Object(N.a)(["\n    width: 100vw;\n    article {\n        width: 90%;\n        margin: 0 auto;\n        background-color: transparent;\n    }\n    a {\n        display: inline-block;\n        font-family: inherit;\n        padding: 0.5rem 1.5rem;\n        margin: 3rem 0;\n        border-radius: 3px;\n        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n        span {\n            margin-left: 0.5rem;\n        }\n    }\n    @media "," {\n        width: 83%;\n        margin: 0 auto;\n    }\n    @media "," {\n        width: 95%;\n        margin: 0 auto;\n    }\n    @media "," {\n        width: 90%;\n        margin: 0 auto;\n    }\n"])),q.tablet,q.laptop,q.desktop),ln=g.c.div(p||(p=Object(N.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n"]))),un=g.c.div(j||(j=Object(N.a)(["\n    width: 100%;\n    img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n    }\n    @media "," {\n        width: 55%;\n        height: 400px;\n    }\n    @media "," {\n        width: 50%;\n    }\n    @media "," {\n        max-width: 700px;\n    }\n    @media "," {\n        max-width: 900px;\n    }\n"])),q.laptop,q.laptopL,q.desktop,q.desktopL),pn=g.c.div(b||(b=Object(N.a)(["\n    padding: 2rem 0;\n    div p {\n        margin: 1rem 0;\n        span {\n            display: inline-block;\n            padding: 0.5rem;\n            margin: 0.5rem 1rem 0.5rem 0;\n            border-radius: 3px;\n            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n        }\n    }\n    div::nth-child(1) {\n        grid-area: one;\n    }\n    div:nth-child(2) {\n        margin: 2rem 0;\n        grid-area: two;\n    }\n    div:nth-child(3) {\n        grid-area: three;\n    }\n    @media "," {\n        width: 40%;\n        display: grid;\n        grid-template-areas:\n            'one two'\n            'three three';\n        div:nth-child(3) {\n            margin-top: 1rem;\n        }\n    }\n    @media "," {\n        width: 45%;\n    }\n    @media "," {\n        max-width: 700px;\n    }\n    @media "," {\n        max-width: 900px;\n    }\n"])),q.laptop,q.laptopL,q.desktop,q.desktopL),jn=function(){var n=Object(G.f)().country,e="https://restcountries.eu/rest/v2/name/".concat(n),t=Object(m.useContext)(A),r=t.fetchDetails,a=t.countryDetails,i=t.isLoading,c=t.newBorders,o=t.borders,s=t.createBorders,d=a.flag,l=a.name,u=a.nativeName,p=a.population,j=a.region,b=a.subregion,h=a.capital,O=a.topLevelDomain,x=a.currencies,f=a.languages;return Object(m.useEffect)((function(){r(e)}),[]),Object(m.useEffect)((function(){s()}),[o]),i?Object(T.jsx)(cn,{}):Object(T.jsx)(dn,{children:Object(T.jsxs)("article",{children:[Object(T.jsxs)(H.b,{to:"/react-fem-rest-countries-api/",children:[Object(T.jsx)(P.a,{}),Object(T.jsx)("span",{children:"Back"})]}),Object(T.jsxs)(ln,{children:[Object(T.jsx)(un,{children:Object(T.jsx)("img",{src:d,alt:l})}),Object(T.jsxs)(pn,{children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("h2",{children:l}),Object(T.jsxs)("p",{children:["Native name: ",u]}),Object(T.jsx)("p",{children:p&&"Population: ".concat(p.toLocaleString())}),Object(T.jsxs)("p",{children:["Region: ",j]}),Object(T.jsxs)("p",{children:["Sub Region: ",b]}),Object(T.jsxs)("p",{children:["Capital: ",h]})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("p",{children:O&&"Top Level Domain: ".concat(O)}),Object(T.jsx)("p",{children:x&&"Currencies: ".concat(x[0].name)}),Object(T.jsx)("p",{children:f&&"Languages: ".concat(f.map((function(n){return n.name})).join(" ").replace(/\s/g,", "))})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{children:"Border Countries:"}),Object(T.jsx)("p",{children:0!==c.length?c.map((function(n,e){return Object(T.jsx)("span",{children:n},e)})):Object(T.jsx)("span",{children:"N/A"})})]})]})]})]})})},bn=g.c.div(h||(h=Object(N.a)(["\n    margin-top: 5rem;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    a {\n        padding: 0.5rem 1.5rem;\n        font-family: inherit;\n        margin: 2rem 0;\n        border-radius: 3px;\n        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n        span {\n            margin-left: 0.5rem;\n        }\n    }\n"]))),hn=function(){return Object(T.jsxs)(bn,{children:[Object(T.jsxs)("h1",{children:["Oops!",Object(T.jsx)("br",{})," Nothing here..."]}),Object(T.jsx)(H.b,{to:"/react-fem-rest-countries-api/",children:Object(T.jsxs)("button",{children:[Object(T.jsx)(P.a,{}),Object(T.jsx)("span",{children:"Back"})]})})]})};var mn=function(){var n=Object(m.useContext)(A).theme;return Object(T.jsxs)(g.a,{theme:"dark"===n?I:B,children:[Object(T.jsx)(F,{}),Object(T.jsxs)(H.a,{children:[Object(T.jsx)(Q,{}),Object(T.jsxs)(G.c,{children:[Object(T.jsxs)(G.a,{exact:!0,path:"/react-fem-rest-countries-api/",children:[Object(T.jsx)(nn,{}),Object(T.jsx)(sn,{})]}),Object(T.jsx)(G.a,{exact:!0,path:"/react-fem-rest-countries-api/country/:country",children:Object(T.jsx)(jn,{})}),Object(T.jsx)(G.a,{exact:!0,path:"/react-fem-rest-countries-api/*",children:Object(T.jsx)(hn,{})})]})]})]})};f.a.render(Object(T.jsx)(O.a.StrictMode,{children:Object(T.jsx)(D,{children:Object(T.jsx)(mn,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.b58b40ac.chunk.js.map