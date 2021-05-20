(this["webpackJsonpesbuild-reactjs"]=this["webpackJsonpesbuild-reactjs"]||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},24:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(9),s=a.n(c),r=a(10),i=a(11),o=a(13),m=a(12),u=a(2),E=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)([]),i=Object(u.a)(r,2),o=i[0],m=i[1];return Object(n.useEffect)((function(){fetch("https://spreadsheets.google.com/feeds/list/1EYJ9WPjqKqe26InIhdzyFKZzBKgAKRkM04w7aaFQhxk/od6/public/values?alt=json").then((function(e){return e.json()})).then((function(e){return e.feed.entry})).then((function(t){var a=[];t.forEach((function(e){var t=e.gsx$head.$t;t.length>0&&a.push(t)})),s(a[e.lang]),m(a),document.title=c}))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header f"},l.a.createElement("br",null),l.a.createElement("h1",null,c),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("b",null,l.a.createElement("a",{href:"#about",onClick:function(){e.handlePage("bio")}},o[3+e.lang]),l.a.createElement("a",{href:"#links",onClick:function(){e.handlePage("links")}},o[21+e.lang]),l.a.createElement("a",{href:"https://bit.ly/3fLb69d"},o[24+e.lang]))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("b",null,l.a.createElement("a",{href:"#experience",onClick:function(){e.handlePage("experience")}},o[12+e.lang]),l.a.createElement("a",{href:"#projects",onClick:function(){e.handlePage("projects")}},o[15+e.lang]),l.a.createElement("a",{href:"#skills",onClick:function(){e.handlePage("skills")}},o[18+e.lang]))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("b",null,l.a.createElement("a",{href:"#education",onClick:function(){e.handlePage("education")}},o[6+e.lang]),l.a.createElement("a",{href:"#certificates",onClick:function(){e.handlePage("certificates")}},o[9+e.lang]))),l.a.createElement("br",null),l.a.createElement("div",{id:"lang"},l.a.createElement("a",{onClick:function(){e.handleLang(0)}},"English"),l.a.createElement("a",{onClick:function(){e.handleLang(1)}},"\u65e5\u672c\u8a9e"),l.a.createElement("a",{onClick:function(){e.handleLang(2)}},"\u4e2d\u6587")),l.a.createElement("br",null)))},h=function(e){var t=Object(n.useState)(0),a=Object(u.a)(t,2),c=(a[0],a[1],Object(n.useState)("")),s=Object(u.a)(c,2),r=s[0],i=s[1],o=Object(n.useState)([""]),m=Object(u.a)(o,2),E=m[0],h=m[1],g=Object(n.useState)([]),f=Object(u.a)(g,2),d=f[0],b=f[1],p=Object(n.useState)([]),j=Object(u.a)(p,2),k=(j[0],j[1],Object(n.useState)([])),v=Object(u.a)(k,2),O=(v[0],v[1]),x=Object(n.useState)([]),y=Object(u.a)(x,2),S=(y[0],y[1]),L=Object(n.useState)(!0),F=Object(u.a)(L,2),C=F[0],z=F[1];Object(n.useEffect)((function(){fetch("https://spreadsheets.google.com/feeds/list/1EYJ9WPjqKqe26InIhdzyFKZzBKgAKRkM04w7aaFQhxk/od6/public/values?alt=json").then((function(e){return e.json()})).then((function(e){return e.feed.entry})).then((function(t){var a=[],n=[],l=[],c=0;t.forEach((function(t){var s=t["gsx$"+e.class].$t;if(s.length>0){switch(c%3){case 1:a.push(s);break;case 2:n.push(s);break;case 0:l.push(s)}c++}})),e.handleLang&&e.handleLang(0);var s=0==e.handleLang?a:1==e.handleLang?n:l;h(s[0]),console.log("title"+E),i(s[1]),a.shift(),a.shift(),console.log(a),b(a),n.shift(),n.shift(),console.log(n),O(n),l.shift(),l.shift(),console.log(l),S(l),0==e.handleLang?b(a):1==e.handleLang?b(n):b(l)}))}),[]);var P={};return P="bio"==e.class?{minHeight:"300px",border:"0.5em black solid",borderRadius:"100em",margin:"1em"}:{height:"100px",padding:"1em"},l.a.createElement("div",{class:"box f",id:e.class},""!=r&&l.a.createElement("img",{src:r,style:P}),l.a.createElement("h3",{onClick:function(){z(!C)}},E),C&&l.a.createElement("p",{class:"text"},l.a.createElement("p",null,d.map((function(e){return l.a.createElement(l.a.Fragment,null,e,l.a.createElement("br",null))})))))},g=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"body f"},l.a.createElement(h,{class:"about"})),l.a.createElement("br",null))},f=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"education",class:"body f"},l.a.createElement(h,{class:"asu"}),l.a.createElement(h,{class:"sbu"})),l.a.createElement("br",null))},d=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"edu",class:"body f"},l.a.createElement(h,{class:"nasa"}),l.a.createElement(h,{class:"frsecure"}),l.a.createElement(h,{class:"bloomberg"}),l.a.createElement(h,{class:"cfi"}),l.a.createElement(h,{class:"hackthebox"}),l.a.createElement(h,{class:"codepath"}),l.a.createElement(h,{class:"gold"}),l.a.createElement(h,{class:"ask"}),l.a.createElement(h,{class:"umd"}),l.a.createElement(h,{class:"triplebyte"}),l.a.createElement(h,{class:"fcc"}),l.a.createElement(h,{class:"hrank"}),l.a.createElement(h,{class:"google"}),l.a.createElement(h,{class:"ibm"}),l.a.createElement(h,{class:"peking"})),l.a.createElement("br",null))},b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"experience",class:"body f"},l.a.createElement(h,{class:"appen"}),l.a.createElement(h,{class:"geek"}),l.a.createElement(h,{class:"startup"}),l.a.createElement(h,{class:"facebook"}),l.a.createElement(h,{class:"softheon"})),l.a.createElement("br",null))},p=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"projects",class:"body f"},l.a.createElement(h,{class:"music"}),l.a.createElement(h,{class:"connect4"}),l.a.createElement(h,{class:"regiovinco"}),l.a.createElement(h,{class:"blackjack"}),l.a.createElement(h,{class:"pkmn"}),l.a.createElement(h,{class:"calc"}),l.a.createElement(h,{class:"txt"}),l.a.createElement(h,{class:"snake"}),l.a.createElement(h,{class:"space"}),l.a.createElement(h,{class:"cloudflare"})),l.a.createElement("br",null))},j=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"skills",class:"body f"},l.a.createElement(h,{class:"html"}),l.a.createElement(h,{class:"css"}),l.a.createElement(h,{class:"js"}),l.a.createElement(h,{class:"node"}),l.a.createElement(h,{class:"react"}),l.a.createElement(h,{class:"python"}),l.a.createElement(h,{class:"java"}),l.a.createElement(h,{class:"docker"}),l.a.createElement(h,{class:"kube"}),l.a.createElement(h,{class:"vbox"}),l.a.createElement(h,{class:"wireshark"}),l.a.createElement(h,{class:"burp"}),l.a.createElement(h,{class:"postman"}),l.a.createElement(h,{class:"terra"}),l.a.createElement(h,{class:"gcloud"}),l.a.createElement(h,{class:"ibmcloud"}),l.a.createElement(h,{class:"aws"}),l.a.createElement(h,{class:"bash"}),l.a.createElement(h,{class:"pshell"}),l.a.createElement(h,{class:"vi"}),l.a.createElement(h,{class:"git"}),l.a.createElement(h,{class:"jira"}),l.a.createElement(h,{class:"trello"})),l.a.createElement("br",null))},k=function(e){var t=Object(n.useState)(0),a=Object(u.a)(t,2),c=(a[0],a[1],Object(n.useState)("")),s=Object(u.a)(c,2),r=s[0],i=s[1],o=Object(n.useState)([""]),m=Object(u.a)(o,2),E=m[0],h=m[1],g=Object(n.useState)([]),f=Object(u.a)(g,2),d=f[0],b=f[1],p=Object(n.useState)([]),j=Object(u.a)(p,2),k=(j[0],j[1],Object(n.useState)([])),v=Object(u.a)(k,2),O=(v[0],v[1]),x=Object(n.useState)([]),y=Object(u.a)(x,2),S=(y[0],y[1]),L=Object(n.useState)(!0),F=Object(u.a)(L,2),C=F[0],z=F[1];Object(n.useEffect)((function(){fetch("https://spreadsheets.google.com/feeds/list/1EYJ9WPjqKqe26InIhdzyFKZzBKgAKRkM04w7aaFQhxk/od6/public/values?alt=json").then((function(e){return e.json()})).then((function(e){return e.feed.entry})).then((function(t){var a=[],n=[],l=[],c=0;t.forEach((function(e){var t=e.gsx$links.$t;if(t.length>0){switch(c%3){case 1:a.push(t);break;case 2:n.push(t);break;case 0:l.push(t)}c++}})),e.handleLang&&e.handleLang(0);var s=0==e.handleLang?a:1==e.handleLang?n:l;h(s[0]),console.log("title"+E),i(s[1]),a.shift(),a.shift(),console.log(a),b(a),n.shift(),n.shift(),console.log(n),O(n),l.shift(),l.shift(),console.log(l),S(l),0==e.handleLang?b(a):1==e.handleLang?b(n):b(l)}))}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"body f"},l.a.createElement("div",{class:"box f",id:"links"},""!=r&&l.a.createElement("img",{src:r,style:{height:"100px",padding:"1em"}}),l.a.createElement("h3",{onClick:function(){z(!C)}},E),C&&l.a.createElement("p",{class:"text"},l.a.createElement("p",null,d.map((function(e,t){return t%2==0&&l.a.createElement("h3",null,l.a.createElement("a",{href:d[t+1]},e,l.a.createElement("br",null)))})))))),l.a.createElement("br",null))},v=function(e){return l.a.createElement("div",{style:{paddingTop:"180px",paddingBottom:"180px"}},"bio"==e.page&&l.a.createElement(g,null),"education"==e.page&&l.a.createElement(f,null),"certificates"==e.page&&l.a.createElement(d,null),"experience"==e.page&&l.a.createElement(b,null),"projects"==e.page&&l.a.createElement(p,null),"skills"==e.page&&l.a.createElement(j,null),"links"==e.page&&l.a.createElement(k,null))},O=a(3),x=a(5),y=a(4),S=function(e){return n.createElement(n.Fragment,null,n.createElement("div",{class:"buttons"},n.createElement("p",null,n.createElement("a",{href:"mailto:jonrey.us@gmail.com"},n.createElement(O.a,{icon:y.b,size:"2x"})),n.createElement("a",{href:"https://drive.google.com/file/d/1B7G2BOXRs0rq03I48kNq2Pch1aJbk-oG/preview"},n.createElement(O.a,{icon:y.c,size:"2x"})),n.createElement("a",{href:"https://linkedin.com/in/jonxreyes"},n.createElement(O.a,{icon:x.c,size:"2x"})),n.createElement("a",{href:"https://github.com/jonreyes"},n.createElement(O.a,{icon:x.a,size:"2x"})),n.createElement("a",{href:"https://instagram.com/jrex.co/"},n.createElement(O.a,{icon:x.b,size:"2x"})),n.createElement("a",{href:"https://act.webull.com/nt/DEr7ucoaAetT/av8/inviteUs/"},n.createElement(O.a,{icon:y.a,size:"2x"})),n.createElement("a",{href:"https://drd.sh/SSClz3/"},n.createElement(O.a,{icon:y.d,size:"2x"})))))},L=function(e){return l.a.createElement("div",{class:"footer f"},l.a.createElement(S,{style:{backgroundColor:"white",color:"black",padding:"0.25em"}}),l.a.createElement("p",null,"Jon R. \xa9 ",(new Date).getFullYear()))},F=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).setPage=function(e){n.setState({page:e}),console.log(n.state.page)},n.getLang=function(){return n.state.lang},n.setLang=function(e){n.setState({lang:e},(function(){console.log(n.state.lang)}))},n.state={splash:!0,count:0,page:"about",lang:0},n}return Object(i.a)(a,[{key:"renderSplash",value:function(){var e=this;return setInterval((function(){e.setState({count:e.state.count+1})}),100),setTimeout((function(){e.setState({splash:!1})}),1e3),l.a.createElement(v,{time:this.state.count})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{handlePage:this.setPage,lang:this.state.lang,handleLang:this.setLang}),l.a.createElement(v,{page:this.state.page,handleLang:this.setLang,style:{padding:"700px"}}),l.a.createElement(L,{name:this.props.name}))}}]),a}(l.a.Component);s.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.66b3720c.chunk.js.map