(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{56:function(e,n,t){e.exports=t(85)},84:function(e,n,t){},85:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(15),o=t.n(l),c=t(20),i=t(46),s=t(47),m=t(32),d=Object(c.combineReducers)({userLogin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"USER_LOGIN_REQUEST":return{loading:!0};case"USER_LOGIN_SUCCESS":return{loading:!1,userInfo:n.payload};case"USER_LOGIN_FAIL":return{loading:!1,error:n.payload};case"USER_LOGOUT":return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"USER_REGISTER_REQUEST":return{loading:!0};case"USER_REGISTER_SUCCESS":return{loading:!1,userInfo:n.payload};case"USER_REGISTER_FAIL":return{loading:!1,error:n.payload};case"USER_LOGOUT":return{};default:return e}},userDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"USER_DETAILS_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{loading:!0});case"USER_DETAILS_SUCCESS":return{loading:!1,user:n.payload};case"USER_DETAILS_FAIL":return{loading:!1,error:n.payload};case"USER_DETAILS_RESET":return{user:{}};default:return e}},userUpdateProfile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"USER_UPDATE_PROFILE_REQUEST":return{loading:!0};case"USER_UPDATE_PROFILE_SUCCESS":return{loading:!1,success:!0,userInfo:n.payload};case"USER_UPDATE_PROFILE_FAIL":return{loading:!1,error:n.payload};case"USER_UPDATE_PROFILE_RESET":return{};default:return e}},userList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{users:[]},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"USER_LIST_REQUEST":return{loading:!0};case"USER_LIST_SUCCESS":return{loading:!1,users:n.payload};case"USER_LIST_FAIL":return{loading:!1,error:n.payload};case"USER_LIST_RESET":return{users:[]};default:return e}},userDelete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"USER_DELETE_REQUEST":return{loading:!0};case"USER_DELETE_SUCCESS":return{loading:!1,success:!0};case"USER_DELETE_FAIL":return{loading:!1,error:n.payload};default:return e}},userUpdate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"USER_UPDATE_REQUEST":return{loading:!0};case"USER_UPDATE_SUCCESS":return{loading:!1,success:!0};case"USER_UPDATE_FAIL":return{loading:!1,error:n.payload};case"USER_UPDATE_RESET":return{user:{}};default:return e}}}),u={userLogin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null}},p=[i.a],E=Object(c.createStore)(d,u,Object(s.composeWithDevTools)(c.applyMiddleware.apply(void 0,p))),g=t(22),f=t(11),h=t(14),b=t(5),v=t(12);function S(){var e=Object(f.a)(["\n  .logo {\n    z-index: 1;\n    transition: all 0.3s ease-in-out;\n    @media only screen and (max-width: 520px) {\n      transform: scale(0.85);\n    }\n  }\n\n  .underbar {\n    background-color: #fff;\n    height: 1.5px;\n    width: 96%;\n    position: relative;\n    top: 6px;\n  }\n\n  .logo:hover {\n    @media only screen and (min-width: 900px) {\n      transform: scale(1.1);\n    }\n  }\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  padding: 0 20px;\n  background-color: #303030;\n\n  & label {\n    color: #57b228;\n    font-size: 0.9rem;\n    cursor: pointer;\n  }\n\n  & p {\n    letter-spacing: 8.5px;\n    margin-bottom: -5px;\n  }\n\n  & a {\n    display: flex;\n    text-decoration: none;\n    color: #f4f4f4;\n    text-transform: uppercase;\n    border-bottom: 3px transparent solid;\n    padding-bottom: 0.2rem;\n    transition: border-color 0.5s;\n  }\n\n  & a.current {\n    border-color: #57b228;\n  }\n\n  & i {\n    margin: auto;\n    margin-right: 10px;\n    padding: 0;\n  }\n\n  & .menu-wrap {\n    position: fixed;\n    margin: 0 1rem;\n    top: 0;\n    right: 0;\n    z-index: 1;\n\n    & .toggler {\n      position: absolute;\n      top: 0;\n      right: 0;\n      z-index: 2;\n      cursor: pointer;\n      width: 70px;\n      height: 70px;\n      opacity: 0;\n    }\n\n    /* Show menu */\n    & .toggler:checked ~ .menu {\n      visibility: visible;\n      > div {\n        transform: scale(1);\n        transition-duration: 0.5s;\n        > div {\n          opacity: 1;\n          transition: opacity 0.4s ease;\n        }\n      }\n    }\n\n    & .hamburger {\n      position: absolute;\n      top: 0;\n      right: 0;\n      z-index: 1;\n      width: 40px;\n      height: 40px;\n      padding: 1rem;\n      background: #303030;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      @media only screen and (max-width: 520px) {\n        transform: scale(0.8);\n      }\n\n      > div {\n        position: relative;\n        width: 100%;\n        height: 2px;\n        background-color: #fff;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        transition: all 0.4s ease;\n      }\n\n      /* Top and bottom lines */\n      & > div:before,\n      & > div:after {\n        content: '';\n        position: absolute;\n        z-index: 1;\n        top: -10px;\n        width: 100%;\n        height: 2px;\n        background: inherit;\n      }\n\n      /* Moves line down */\n      & > div:after {\n        top: 10px;\n      }\n    }\n\n    /* Toggler animate */\n    & .toggler:checked + .hamburger > div {\n      transform: rotate(135deg);\n    }\n    /* Turn lines into X */\n    & .toggler:checked + .hamburger > div:before,\n    & .toggler:checked + .hamburger > div:after {\n      top: 0;\n      transform: rotate(90deg);\n    }\n\n    & .toggler:hover + .hamburger > div {\n      transform: rotate(180deg);\n    }\n\n    /* Rotate on hover when checked */\n    & .toggler:checked:hover + .hamburger > div {\n      transform: rotate(315deg);\n    }\n\n    & .menu {\n      position: fixed;\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 100%;\n      visibility: hidden;\n      overflow: hidden;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      > div {\n        background: rgba(0, 0, 0, 0.9);\n        border-radius: 50%;\n        width: 200vw;\n        height: 200vw;\n        display: flex;\n        flex: none;\n        align-items: center;\n        justify-content: center;\n        transform: scale(0);\n        transition: all 0.4s ease;\n\n        > div {\n          /* text-align: center; */\n          max-width: 90vw;\n          max-height: 100vh;\n          opacity: 0;\n          transition: opacity 0.4s ease;\n          & ul {\n            > li {\n              font-size: 2rem;\n              padding: 1rem;\n\n              a {\n                padding: 3rem;\n                transition: 0.4s ease;\n              }\n              & a:hover {\n                background-color: #303030;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return S=function(){return e},e}var x=v.a.nav(S()),y=function(){function e(){document.getElementById("toggler").checked=!1}return r.a.createElement("div",{className:"container"},r.a.createElement(x,null,r.a.createElement("div",{className:"logo"},r.a.createElement(h.b,{to:"/"},r.a.createElement("i",{className:"fas fa-user-astronaut fa-3x"}),r.a.createElement("h1",null,r.a.createElement("p",null,"Hendrik"),r.a.createElement("div",{className:"underbar"}),r.a.createElement("label",null,"Full Stack Developer")))),r.a.createElement("div",{className:"menu-wrap"},r.a.createElement("input",{type:"checkbox",className:"toggler",id:"toggler"}),r.a.createElement("div",{className:"hamburger"},r.a.createElement("div",null)),r.a.createElement("div",{className:"menu"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return e()}},r.a.createElement(h.b,{to:"/"},"H o m e")),r.a.createElement("li",{onClick:function(){return e()}},r.a.createElement(h.b,{to:"/projects"},"project")))))))))},w=t(52),_=t.n(w);function k(){var e=Object(f.a)(["\n  color: white;\n  text-align : center;\n  align-items: center;\n  position:fixed;\n  top:25%;\n  left:25%;\n  font-size: 2rem;\n\n  span {\n    font-size: 3.5rem;\n  }\n\n  abbr {\n    color:#50bcdf;\n  }\n\n  .header {\n    font-size: 4rem;\n    @media only screen and (max-width: 900px) {\n      font-size: 2rem;\n    }\n\n    @media only screen and (max-width: 520px) {\n      \n      font-size: 1.25rem;\n    }\n  }\n  .typewriter { \n    .react-typewriter-text{\n      text-align:center;\n    }\n    z-index:-1;\n    display: block;\n    font-size : 2rem;\n    position:relative;\n    top:-1rem;\n    @media only screen and (max-width: 900px) {\n      font-size: 1rem;\n      position:relative;\n      top:-1rem;\n    }\n    @media only screen and (max-width: 520px) {\n      position:relative;\n      top:-2rem;\n      font-size: 0.6rem;\n    }\n  }\n\n  .btn-light {\n      margin: 3rem;\n      font-size: 1.5rem;\n      border-radius : 2px;\n      background:#57b228;\n      color: white;\n\n      &:hover {\n        letter-spacing : 2px;\n        transform:scale(1.2);\n        filter: brightness(120%);\n      }\n\n      @media only screen and (max-width: 700px) {\n        font-size: 1rem;\n      }\n      @media only screen and (max-width: 520px) {\n      position:relative;\n      font-size:0.8rem;\n      top:-2rem;\n    }\n    }\n  }\n"]);return k=function(){return e},e}var R=v.a.div(k()),N=function(){return r.a.createElement(R,null,r.a.createElement("h2",{className:"header"},"I Am ",r.a.createElement("abbr",null,"{")," Hendrik ",r.a.createElement("abbr",null,"}")," The"),r.a.createElement("br",null),r.a.createElement("div",{className:"typewriter"},r.a.createElement(_.a,{multiText:["Full Stack Developer","E-Commerce Savvy","Programming Tutor","POS System Expert","Full Stack Developer","E-Commerce Savvy","Programming Tutor","POS System Expert"],typeSpeed:50,cursorColor:"#fff",textStyle:{color:"#fff"},startDelay:0,multiTextDelay:2e3,eraseDelay:10})),r.a.createElement(h.b,{to:"/projects"},r.a.createElement("button",{className:"btn-light"},"View Projects")))};function U(){var e=Object(f.a)(["\n  .contact {\n    position: absolute;\n    top: 50%;\n    left: -7rem;\n    transform: translateY(-50%);\n    z-index: 0;\n\n    @media only screen and (min-width: 100em) {\n      left: -12.5rem;\n    }\n\n    &-list {\n      list-style: none;\n    }\n\n    &-link {\n      &:visited,\n      &:link {\n        display: block;\n        color: #fff;\n        font-size: 1.5rem;\n        padding: 1rem;\n        transition: all 450ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\n        text-decoration: none;\n\n        @media only screen and (max-width: 31.25em) {\n          padding: 0.5rem;\n        }\n\n        @media only screen and (min-width: 100em) {\n          padding: 1rem;\n          font-size: 2.8rem;\n        }\n      }\n\n      &-linkedin {\n        background-color: #0077b5;\n      }\n      &-github {\n        background-color: #333;\n      }\n      &-email {\n        background-color: #74c23d;\n      }\n      &-resume {\n        background-color: #dc143c;\n      }\n\n      &:hover,\n      &:active,\n      &:focus {\n        transform: translateX(6.4rem);\n      }\n    }\n\n    &-label {\n      display: inline-block;\n      vertical-align: middle;\n      font-size: 1.1rem;\n      margin-right: 1.2rem;\n      width: 5.8rem;\n      letter-spacing: 1px;\n      text-align: right;\n      text-transform: uppercase;\n\n      @media only screen and (min-width: 100em) {\n        width: 10.8rem;\n      }\n    }\n  }\n"]);return U=function(){return e},e}var I=v.a.div(U()),T=function(){return r.a.createElement(I,null,r.a.createElement("div",{className:"contact"},r.a.createElement("ul",{className:"contact-list"},r.a.createElement("li",{className:"contact__item"},r.a.createElement("a",{href:"https://www.linkedin.com/in/hendrik-kim-849091200/",target:"_blank",className:"contact-link contact-link-linkedin"},r.a.createElement("span",{className:"contact-label"},"Linkedin")," ",r.a.createElement("i",{className:"fab fa-linkedin"}))),r.a.createElement("li",{className:"contact__item"},r.a.createElement("a",{href:"https://github.com/hendrik-kim",target:"_blank",className:"contact-link contact-link-github"},r.a.createElement("span",{className:"contact-label"},"Github")," ",r.a.createElement("i",{className:"fab fa-github-square"}))),r.a.createElement("li",{className:"contact__item"},r.a.createElement("a",{href:"https://docs.google.com/document/d/1S02ZEx1-gUVBkr2Q0HRWSwMN3h8gKx9IxyTxO1qh3L4",target:"_blank",className:"contact-link contact-link-resume"},r.a.createElement("span",{className:"contact-label"},"Resume")," ",r.a.createElement("i",{className:"fas fa-address-card"}))),r.a.createElement("li",{className:"contact__item"},r.a.createElement("a",{href:"mailto:hendrik.kim.developer@gmail.com",target:"_blank",className:"contact-link contact-link-email"},r.a.createElement("span",{className:"contact-label"},"Email")," ",r.a.createElement("i",{className:"fas fa-envelope"}))))))};function O(){var e=Object(f.a)(["\n  color: white;\n"]);return O=function(){return e},e}var L=v.a.div(O()),C=function(){return r.a.createElement(L,null,"About")};function j(){var e=Object(f.a)(["\n  a {\n    color: #fff;\n  }\n\n  p {\n    margin: 0.5rem;\n    font-size: 1.2rem;\n  }\n\n  .color-portfolio {\n    color: #57b228;\n  }\n\n  .color-youtube {\n    color: red;\n  }\n\n  .row {\n    margin: 2rem 5rem;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n\n    @media all and (max-width: 1200px) {\n      grid-template-columns: repeat(1, 1fr);\n    }\n    /* \n    @media all and (max-width: 625px) {\n      grid-template-columns: repeat(1, 1fr);\n    } */\n\n    grid-gap: 1rem;\n  }\n\n  /* .column {\n    float: left;\n    width: 25%;\n  }\n\n  /* Clear floats after the columns */\n  .row:after {\n    content: '';\n    display: table;\n    clear: both;\n  }\n\n  /* Style the counter cards */\n  .card {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the \"card\" effect */\n    padding: 16px;\n    text-align: center;\n    background-color: #f1f1f1;\n    transition: all 0.2s ease-in-out;\n    border-radius: 2px;\n    height: 35rem;\n\n    .card-header {\n      margin-top: 0.5rem;\n      text-align: center;\n    }\n\n    .content {\n      margin-top: 1rem;\n      text-align: left;\n\n      .content-title {\n        color: #303030;\n      }\n    }\n\n    .label-group {\n      text-align: left;\n      margin-bottom: 0.5rem;\n      p {\n        display: inline-block;\n        color: #fff;\n        background-color: #808080;\n        padding: 5px;\n        border-radius: 15px;\n        margin-right: -2px;\n        margin-top: 0;\n\n        &:hover {\n          filter: brightness(120%);\n        }\n      }\n    }\n\n    .btn-group {\n      position: absolute;\n      right: 1rem;\n      top: 91%;\n    }\n  }\n\n  .card:hover {\n    transform: translate(0, -3px);\n\n    & .btn-card {\n      visibility: visible;\n      cursor: pointer;\n\n      &:hover {\n        filter: brightness(110%);\n      }\n    }\n  }\n\n  .btn-card {\n    visibility: hidden;\n    margin: 0 5px;\n    display: inline-block;\n    border: 1px solid #57b228;\n    border-radius: 4px;\n    padding: 5px 10px;\n    text-transform: uppercase;\n    color: #fff;\n    background-color: #57b228;\n  }\n\n  /* Responsive columns - one column layout (vertical) on small screens */\n  @media screen and (max-width: 500px) {\n    .column {\n      width: 120%;\n      display: block;\n      margin-bottom: 20px;\n      * {\n        font-size: 95%;\n        line-height: 100%;\n      }\n      .card {\n        max-height: 500px;\n      }\n      .btn-group {\n        display: flex;\n        margin-right: -10px;\n      }\n    }\n  }\n"]);return j=function(){return e},e}var A=v.a.div(j()),z=function(){return r.a.createElement(A,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,r.a.createElement("span",{className:"color-portfolio"},r.a.createElement("i",{className:"fas fa-user-astronaut"})," HANK's"),r.a.createElement("span",null," PORTFOLIO"))),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"content-title"},r.a.createElement("h3",null,"Skills")),r.a.createElement("div",{className:"label-group"},r.a.createElement("p",null,"React"),r.a.createElement("p",null,"Sass"),r.a.createElement("p",null,"HTML"),r.a.createElement("p",null,"Javascript"),r.a.createElement("p",null,"SPA"),r.a.createElement("p",null,"Responsive UI / UX")),r.a.createElement("hr",null),r.a.createElement("p",{className:"content-title"},r.a.createElement("h3",null,"About")),r.a.createElement("p",null,"I made a Single Page Application using React and react-router-dom."),r.a.createElement("p",null,"UI is managed within individual components using Scss and styled-component."),r.a.createElement("p",null,"I have tried to build a simple and clean homepage in terms of practical application design and user-friendly inteface.")),r.a.createElement("div",{className:"btn-group"},r.a.createElement("span",{className:"btn-card"},r.a.createElement("a",{href:"https://hank-dohwankim.github.io/portfolio/",target:"_blank"},r.a.createElement("i",{class:"fas fa-globe"})," Demo")),r.a.createElement("span",{className:"btn-card"},r.a.createElement("a",{href:"https://github.com/hank-dohwankim/portfolio",target:"_blank"},r.a.createElement("i",{class:"fas fa-code"})," Code"))))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,r.a.createElement("span",{className:"color-youtube"},r.a.createElement("i",{class:"fab fa-youtube"}),"YOU"),"FLIX")),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"content-title"},r.a.createElement("h3",null,"Skills")),r.a.createElement("div",{className:"label-group"},r.a.createElement("p",null,"React"),r.a.createElement("p",null,"CSS"),r.a.createElement("p",null,"HTML"),r.a.createElement("p",null,"AWS"),r.a.createElement("p",null,"EC2")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("p",{className:"content-title"},r.a.createElement("h3",null,"About")),r.a.createElement("p",null,"I planned a pilot project that utilizes 'React' and 'react-router-dom'."),r.a.createElement("p",null,"I developed a website in the form of Netflix using the Youtube API."),r.a.createElement("p",null,"AWS's EC2 service is used For hosting.")),r.a.createElement("div",{className:"btn-group"},r.a.createElement("span",{className:"btn-card"},r.a.createElement("a",{href:"http://youflix2.s3-website.ca-central-1.amazonaws.com/",target:"_blank"},r.a.createElement("i",{class:"fas fa-globe"})," Demo")),r.a.createElement("span",{className:"btn-card"},r.a.createElement("a",{href:"https://github.com/hank-dohwankim/YouFlix-React-AWS-EC2",target:"_blank"},r.a.createElement("i",{className:"fas fa-code"})," Code")))))))},D=t(21),P=t(92),F=t(90),G=t(89),Q=t(55),H=t(91),J=function(e){var n=e.variant,t=e.children;return r.a.createElement(H.a,{variant:n},t)};J.defaultProps={variant:"info"};var M=J,W=t(87),X=function(){return r.a.createElement(W.a,{animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"}},r.a.createElement("span",{className:"sr-only"},"Loading..."))},Y=t(88),B=function(e){var n=e.children;return r.a.createElement(Y.a,null,r.a.createElement(G.a,{className:"justify-content-md-center"},r.a.createElement(Q.a,{xs:12,md:6},n)))},q=t(7),K=t.n(q),V=t(17),Z=t(18),$=t.n(Z),ee=function(e){var n=e.location,t=e.history,l=Object(a.useState)(""),o=Object(D.a)(l,2),c=o[0],i=o[1],s=Object(a.useState)(""),m=Object(D.a)(s,2),d=m[0],u=m[1],p=Object(a.useState)(""),E=Object(D.a)(p,2),f=E[0],b=E[1],v=Object(a.useState)(""),S=Object(D.a)(v,2),x=S[0],y=S[1],w=Object(a.useState)(null),_=Object(D.a)(w,2),k=_[0],R=_[1],N=Object(g.b)(),U=Object(g.c)((function(e){return e.userRegister})),I=U.loading,T=U.error,O=U.userInfo,L=n.search?n.search.split("=")[1]:"/";Object(a.useEffect)((function(){O&&t.push(L)}),[t,O,L]);return r.a.createElement(B,null,r.a.createElement("h1",null,"Sign Up"),k&&r.a.createElement(M,{variant:"danger"},k),T&&r.a.createElement(M,{variant:"danger"},T),I&&r.a.createElement(X,null),r.a.createElement(P.a,{onSubmit:function(e){e.preventDefault(),f!==x?R("Passwords do not match"):N(function(e,n,t){return function(){var a=Object(V.a)(K.a.mark((function a(r){var l,o,c;return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:"USER_REGISTER_REQUEST"}),l={headers:{"Content-Type":"application/json"}},a.next=5,$.a.post("/api/users",{name:e,email:n,password:t},l);case 5:o=a.sent,c=o.data,r({type:"USER_REGISTER_SUCCESS",payload:c}),r({type:"USER_LOGIN_SUCCESS",payload:c}),localStorage.setItem("userInfo",JSON.stringify(c)),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),r({type:"USER_REGISTER_FAIL",payload:a.t0.response&&a.t0.response.data.message?a.t0.response.data.message:a.t0.message});case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e){return a.apply(this,arguments)}}()}(c,d,f))}},r.a.createElement(P.a.Group,{controlId:"name"},r.a.createElement(P.a.Label,null,"Name"),r.a.createElement(P.a.Control,{type:"name",placeholder:"Enter name",value:c,onChange:function(e){return i(e.target.value)}})),r.a.createElement(P.a.Group,{controlId:"email"},r.a.createElement(P.a.Label,null,"Email Address"),r.a.createElement(P.a.Control,{type:"email",placeholder:"Enter email",value:d,onChange:function(e){return u(e.target.value)}})),r.a.createElement(P.a.Group,{controlId:"password"},r.a.createElement(P.a.Label,null,"Password"),r.a.createElement(P.a.Control,{type:"password",placeholder:"Enter password",value:f,onChange:function(e){return b(e.target.value)}})),r.a.createElement(P.a.Group,{controlId:"confirmPassword"},r.a.createElement(P.a.Label,null,"Confirm Password"),r.a.createElement(P.a.Control,{type:"password",placeholder:"Confirm password",value:x,onChange:function(e){return y(e.target.value)}})),r.a.createElement(F.a,{type:"submit",variant:"primary"},"Register")),r.a.createElement(G.a,{className:"py-3"},r.a.createElement(Q.a,null,"Have an Account?"," ",r.a.createElement(h.b,{to:L?"/login?redirect=".concat(L):"/login"},"Login"))))},ne=function(){return r.a.createElement("div",null,"LoginScreen")};t(84);function te(){var e=Object(f.a)(["height: 100vh;"]);return te=function(){return e},e}var ae=v.a.div(te()),re=function(){return r.a.createElement(h.a,null,r.a.createElement(ae,null,r.a.createElement(y,null),r.a.createElement(T,null),r.a.createElement(b.a,{exact:!0,path:"/",component:N}),r.a.createElement("section",{className:"container"},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/about",component:C}),r.a.createElement(b.a,{exact:!0,path:"/projects",component:z}),r.a.createElement(b.a,{exact:!0,path:"/register",component:ee}),r.a.createElement(b.a,{exact:!0,path:"/login",component:ne})))))};o.a.render(r.a.createElement(g.a,{store:E},r.a.createElement(re,null)),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.c97e5967.chunk.js.map