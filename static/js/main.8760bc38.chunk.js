(this.webpackJsonpreal_time_iss_bucharest=this.webpackJsonpreal_time_iss_bucharest||[]).push([[0],{119:function(e,t,a){e.exports=a(263)},124:function(e,t,a){},134:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},231:function(e,t,a){e.exports=a.p+"static/media/picture 1.864a5684.jpg"},232:function(e,t,a){e.exports=a.p+"static/media/picture 2.d6721184.jpg"},233:function(e,t,a){e.exports=a.p+"static/media/picture 3.d4babe2f.jpg"},234:function(e,t,a){e.exports=a.p+"static/media/picture 4.ca3a07c7.jpg"},235:function(e,t,a){e.exports=a.p+"static/media/picture 5.76656d2f.jpg"},236:function(e,t,a){e.exports=a.p+"static/media/picture 6.7a348b20.jpg"},237:function(e,t,a){e.exports=a.p+"static/media/picture 7.6e2b63ea.jpg"},238:function(e,t,a){e.exports=a.p+"static/media/picture_8.f9dc1bcf.jpg"},239:function(e,t,a){e.exports=a.p+"static/media/0701890_orig.84393bfc.jpg"},263:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),i=a.n(l),s=(a(124),a(8)),o=a(9),r=a(11),m=a(10),d=a(12),u=a(109),p=a(271),h=a(270),E=a(24),v=(a(134),function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"small-logo"},c.a.createElement("div",{class:"element2 nn-1"}),c.a.createElement("div",{class:"element2 nn-2"}),c.a.createElement("div",{class:"element2 nn-3"}),c.a.createElement("div",{class:"element2 nn-4"}),c.a.createElement("div",{class:"element2 nn-5"}),c.a.createElement("div",{class:"element2 nn-6"}),c.a.createElement("div",{class:"element2 nn-7"}),c.a.createElement("div",{class:"element2 nn-8"}),c.a.createElement("div",{class:"element2 nn-9"}),c.a.createElement("div",{class:"element2 nn-10"}),c.a.createElement("div",{class:"element2 nn-11"}),c.a.createElement("div",{class:"element2 nn-12"}),c.a.createElement("div",{class:"element2 nn-13"}),c.a.createElement("div",{class:"element2 nn-14"}),c.a.createElement("div",{class:"element2 nn-15"}),c.a.createElement("div",{class:"element2 nn-16"}),c.a.createElement("div",{class:"element2 nn-17"}),c.a.createElement("div",{class:"element2 nn-18"}))}}]),t}(n.Component)),f=function(e){return c.a.createElement("div",null,c.a.createElement(p.a,{bg:"dark",variant:"dark",className:"headerContainer"},c.a.createElement("span",null,c.a.createElement(v,null)),c.a.createElement(h.a,Object(u.a)({className:"mr-auto"},"className","navbarHeader"),c.a.createElement(h.a.Link,{href:"#"},c.a.createElement(E.Link,{activeClass:"inactive",to:"welcome",spy:!0,smooth:!0,offset:0,duration:500},"Home")),c.a.createElement(h.a.Link,{href:"#"},c.a.createElement(E.Link,{activeClass:"inactive",to:"mapSection",spy:!0,smooth:!0,offset:0,duration:500},"Map")),c.a.createElement(h.a.Link,{href:"#"},c.a.createElement(E.Link,{activeClass:"inactive",to:"newsSection",spy:!0,smooth:!0,offset:0,duration:500},"About ISS")),c.a.createElement(h.a.Link,{href:"#"},c.a.createElement(E.Link,{activeClass:"inactive",to:"newsletter",spy:!0,smooth:!0,offset:0,duration:500},"Contact")))))},g=a(47),b=a.n(g),w=a(53),k=(a(62),a(30),{width:"98%",height:"100%",right:"",margin:"0 auto",left:"0!important"}),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).getCoordinates=function(){a.timer=setInterval((function(){console.log("new coordinates at "+(new Date).toLocaleTimeString()),b.a.get("https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json").then((function(e){a.setState({longitude:e.data.iss_position.longitude,latitude:e.data.iss_position.latitude})}))}),2e3)},a.state={longitude:"",latitude:"",welcomeBtnClicked:a.props.welcomeBtn},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.welcomeBtn&&!this.state.welcomeBtnClicked&&(this.getCoordinates(),this.setState({welcomeBtnClicked:!0})),c.a.createElement("div",{className:"map_container map p-3 mb-2 bg-dark text-white ",id:this.props.id},c.a.createElement("div",{className:"coordinates"},c.a.createElement("h1",{className:"display-4"},"ISS real-time position"),c.a.createElement("div",{className:"btn-container"},c.a.createElement("div",{className:"coordinates-info"},c.a.createElement("p",null,"long: ",this.state.longitude),c.a.createElement("p",null,"lat: ",this.state.latitude)))),c.a.createElement("div",{className:"justTheMap p-3 mb-2 bg-dark text-white",style:{height:"100vh"}},c.a.createElement(w.Map,{google:this.props.google,zoom:5,style:k,className:"googleMap",center:{lat:this.state.latitude,lng:this.state.longitude}},c.a.createElement(w.Marker,{title:"Bucharest",name:"Bucharest",position:{lat:this.state.latitude,lng:this.state.longitude}}))),c.a.createElement("hr",null))}}]),t}(c.a.Component),j=Object(w.GoogleApiWrapper)({apiKey:"AIzaSyBuqivjlUHx_1CzHXli6ft9xLWrI-dOGwo"})(y),O=(a(168),function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{class:"logo"},c.a.createElement("div",{class:"element n-1"}),c.a.createElement("div",{class:"element n-2"}),c.a.createElement("div",{class:"element n-3"}),c.a.createElement("div",{class:"element n-4"}),c.a.createElement("div",{class:"element n-5"}),c.a.createElement("div",{class:"element n-6"}),c.a.createElement("div",{class:"element n-7"}),c.a.createElement("div",{class:"element n-8"}),c.a.createElement("div",{class:"element n-9"}),c.a.createElement("div",{class:"element n-10"}),c.a.createElement("div",{class:"element n-11"}),c.a.createElement("div",{class:"element n-12"}),c.a.createElement("div",{class:"element n-13"}),c.a.createElement("div",{class:"element n-14"}),c.a.createElement("div",{class:"element n-15"}),c.a.createElement("div",{class:"element n-16"}),c.a.createElement("div",{class:"element n-17"}),c.a.createElement("div",{class:"element n-18"}))}}]),t}(n.Component)),x=(a(169),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).launchTracking=function(){a.props.launchTracking(!0)},a.toLivestream=function(){a.props.toLivestream(!0)},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"welcome container-fluid row align-items-center p-3 mb-2 bg-light text-dark",id:this.props.id},c.a.createElement("div",{className:"container welcome-main"},c.a.createElement("div",{className:"row align-items-center welcomeContentContainer"},c.a.createElement("div",{className:"col-5"},c.a.createElement("div",{className:"logo"},c.a.createElement(O,null))),c.a.createElement("div",{className:"col-7 "},c.a.createElement("h1",{className:"display-3"},"Real-time ISS tracker"),c.a.createElement("h2",{className:"lead"},"The International Space Station is a space station in low Earth orbit, at approximately 400 km from the ground.",c.a.createElement("br",null),"At 28 800 km/h it only takes 90 minutes for the weightless laboratory to make a complete circuit of Earth."),c.a.createElement(E.Link,{activeClass:"inactive",to:"mapSection",spy:!0,smooth:!0,offset:0,duration:500},c.a.createElement("button",{className:"welcome-call-to-action col-4 btn btn-dark",onClick:this.launchTracking.bind(this)},"Track ISS")),c.a.createElement("button",{className:"welcome-call-to-action col-4 btn btn-primary",onClick:this.toLivestream.bind(this)},"Watch live feed")))))}}]),t}(n.Component)),C=a(272),N=function(e){return c.a.createElement("div",null,c.a.createElement(C.a,{bg:"dark",text:"white",className:"newsBox"},c.a.createElement(C.a.Header,{className:"newsBoxTitle"},e.title),c.a.createElement(C.a.Body,{className:"newsBoxContainer"},e.text)))},S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={persons:[],latitude:"",longitude:""},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://cors-anywhere.herokuapp.com/http://api.open-notify.org/astros.json").then((function(t){console.log(t),e.setState({persons:t.data.people})}))}},{key:"render",value:function(){return c.a.createElement(N,{className:"newsCard",title:"People that are in space now",text:c.a.createElement("div",{class:"containerNews row"},c.a.createElement("span",{className:"containersNewsImgContainerGreatNameYouGenius col-lg-6"},c.a.createElement("img",{src:" https://spacecenter.org/wp-content/uploads/2019/01/ISS-Debrief.jpg",class:"imageNews"})),c.a.createElement("span",{className:"col-lg-6 peopleInSpaceContainer"},c.a.createElement("ul",{className:"peopleThatAreInSpace"},this.state.persons.map((function(e){return c.a.createElement("li",null,e.name)})))))})}}]),t}(c.a.Component),B=a(56),I=function(e){return c.a.createElement("div",Object.assign({css:{overflow:"hidden",marginLeft:-2,marginRight:-2}},e))},L=function(e){return c.a.createElement("div",Object.assign({css:{backgroundColor:"#eee",boxSizing:"border-box",float:"left",margin:2,overflow:"hidden",paddingBottom:"16%",position:"relative",width:"calc(25% - ".concat(4,"px)"),":hover":{opacity:.9}}},e))},W=[{src:a(231)},{src:a(232)},{src:a(233)},{src:a(234)},{src:a(235)},{src:a(236)},{src:a(237)},{src:a(238)}],T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={modalIsOpen:!1,selectedIndex:0},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"toggleModal",value:function(e){this.setState({modalIsOpen:!this.state.modalIsOpen,selectedIndex:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.modalIsOpen,n=t.selectedIndex;return c.a.createElement("div",{id:this.props.id},c.a.createElement(B.b,null,a?c.a.createElement(B.a,{onClose:function(){return e.toggleModal(0)}},c.a.createElement(B.c,{views:W,currentIndex:n})):null),c.a.createElement("div",{className:"wrapperCarousel"},c.a.createElement(I,{className:"containerCarousel"},W.map((function(t,a){var n=t.src;return c.a.createElement(L,{onClick:function(){return e.toggleModal(a)},className:"imageCarousel"},c.a.createElement("img",{className:"imageCarousel",alt:"asdad",src:n,css:{cursor:"pointer",position:"absolute",maxWidth:"100%"}}))})))))}}]),t}(c.a.Component),M=a(269),_=a(265),D=a(113),A=a(266),z=function(e){return c.a.createElement(M.a.Group,{as:_.a},c.a.createElement(D.a,{sm:{span:10,offset:2}},c.a.createElement(A.a,{type:e.type,variant:e.bootstrapBtnTheme,block:!0},e.text)))},R=a(267),F=a(268),H=(n.Component,a(26)),G=a(118),P=a(52),V=a(49),J=a(50),U=(c.a.Component,function(){return c.a.createElement("section",{id:"footer",style:{position:"relative",width:"100%",height:"100px",background:"#343a40",color:"#fff"}},c.a.createElement("div",{className:"container footer"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-black"},c.a.createElement("p",{style:{fontSize:"27px"}},c.a.createElement("u",null,c.a.createElement("a",{className:"link",href:"https://github.com/WildCodeSchool/real_time_iss_bucharest/",style:{textDecoration:"none"}},c.a.createElement("span",{style:{color:"#000761"}},"A"),c.a.createElement("span",{style:{color:"#44008B"}},"W"),c.a.createElement("span",{style:{color:"#4B666B"}},"E"),c.a.createElement("span",{style:{color:"#1E2852"}},"S"),c.a.createElement("span",{style:{color:"#182141"}},"O"),c.a.createElement("span",{style:{color:"#44008B"}},"M"),c.a.createElement("span",{style:{color:"#115268"}},"E"),c.a.createElement("span",{style:{color:"black",fontSize:"25px"}},"   Team")))," "),c.a.createElement("p",{className:"h6"},"\xa9 All right Reserved",c.a.createElement("a",{className:"text-green ml-2",href:"https://www.wildcodeschool.com/en-GB",target:"_blank"},"WildCodeSchool \xa9 2019"))))))}),q=a(115),K=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={width:0,height:0},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(H.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"onPlayerReady",value:function(e){console.log("onPlayerReady function launched");var t=e.target.getVideoEmbedCode();e.target.playVideo(),document.getElementById("embed-code")&&(document.getElementById("embed-code").innerHTML=t)}},{key:"render",value:function(){var e={height:this.state.height,width:this.state.width,playerVars:{autoplay:1}};return c.a.createElement("div",null,c.a.createElement(q.a,{videoId:"EEIk7gwjgIM",opts:e,onReady:this.onPlayerReady}))}}]),t}(c.a.Component),X=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).checkBoxThatOpensModalFunction=function(e){a.setState({btnFromWelcomeSectionClicked:e})},a.checkBoxThatOpensModalFunction=function(e){a.setState({checkBoxThatOpensModal:e})},a.state={btnFromWelcomeSectionClicked:!1,livestreamDisplay:!0},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"toLivestream",value:function(e){this.setState({livestreamDisplay:!1})}},{key:"launchTracking",value:function(e){console.log("called: "+e),this.setState({btnFromWelcomeSectionClicked:e,checkBoxThatOpensModal:!1})}},{key:"dataFn",value:function(e){console.log("called: "+e),this.setState({checkBoxThatOpensModal:e})}},{key:"render",value:function(){var e=this;return this.state.livestreamDisplay?c.a.createElement("div",{className:"App"},c.a.createElement(f,{image:"https://via.placeholder.com/70x60"}),c.a.createElement(x,{launchTracking:this.launchTracking.bind(this),toLivestream:this.toLivestream.bind(this),id:"welcome"}),c.a.createElement("div",null,c.a.createElement(j,{id:"mapSection",className:"map map_component",welcomeBtn:this.state.btnFromWelcomeSectionClicked})),c.a.createElement("section",{className:"newsSection",id:"newsSection"},c.a.createElement(S,{className:"newCard"})),c.a.createElement(T,{id:"Carousel"}),c.a.createElement(U,null)):c.a.createElement("div",null,c.a.createElement("button",{style:{position:"absolute",top:"11px",left:"10px",background:"white",border:"none",borderRadius:"5px",width:"50px",fontSize:"36px"},onClick:function(){e.setState({livestreamDisplay:!0})}}," ",c.a.createElement("i",{src:"./img/left-arrow.png"}),"\xab"),c.a.createElement(K,null))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},30:function(e,t,a){}},[[119,1,2]]]);
//# sourceMappingURL=main.8760bc38.chunk.js.map