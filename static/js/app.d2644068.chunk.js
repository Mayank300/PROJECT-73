(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{176:function(t,e,n){"use strict";n.d(e,"a",(function(){return J}));var r=n(4),a=n.n(r),o=n(5),i=n.n(o),c=n(6),l=n.n(c),s=n(9),u=n.n(s),f=n(3),d=n.n(f),p=n(1),h=n.n(p),m=n(12),y=n(52),g=n(50),x=n(256),b=n(19),S=n.n(b),v=n(77),k=n(13),w=n(36),R=n(91),E=n(108),C=n(255),T=n(175).a.initializeApp({apiKey:"AIzaSyCLP52Pq_ef8JJihO4bFpAzkgihxfKaNXc",authDomain:"storyhub-6067b.firebaseapp.com",databaseURL:"https://storyhub-6067b.firebaseio.com",projectId:"storyhub-6067b",storageBucket:"storyhub-6067b.appspot.com",messagingSenderId:"610126553911",appId:"1:610126553911:web:c7526b69cec4be364ab0b2"}).firestore();function I(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u()(this,n)}}var A={uri:"https://wallpapercave.com/wp/wp2297884.jpg"},j=function(t){l()(n,t);var e=I(n);function n(t){var r;return a()(this,n),(r=e.call(this,t)).submitStory=function(){return S.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:T.collection("writestory").add({title:r.state.title,author:r.state.author,content:r.state.content}),r.setState({title:"",author:"",content:""});case 2:case"end":return t.stop()}}),null,null,null,Promise)},r.state={title:"",author:"",content:""},r}return i()(n,[{key:"handleTitle",value:function(t){this.setState({title:t.target.value}),console.log("title is working")}},{key:"handleAuthor",value:function(t){this.setState({author:t.target.value}),console.log("title is author")}},{key:"handleContent",value:function(t){this.setState({content:t.target.value}),console.log("title is content")}},{key:"render",value:function(){var t=this;return h.a.createElement(k.a,{style:B.container},h.a.createElement(v.a,{source:A,style:B.image},h.a.createElement(E.a,{behavior:"padding",style:B.container},h.a.createElement(w.a,{style:B.headers},"WRITE STORY"),h.a.createElement(C.a,{placeholder:"Story Title",onChangeText:function(e){t.setState({title:e})},placeholderTextColor:"black",value:this.state.title,style:B.textInput}),h.a.createElement(C.a,{placeholder:"Author",onChangeText:function(e){t.setState({author:e})},placeholderTextColor:"black",value:this.state.author,style:B.textInput}),h.a.createElement(C.a,{placeholder:"Write your story",onChangeText:function(e){t.setState({storyText:e})},placeholderTextColor:"black",value:this.state.storyText,style:B.textInput,multiline:!0}),h.a.createElement(R.a,{onPress:function(){t.submitStory()}},h.a.createElement(w.a,{style:B.buttonStyle},"SUBMIT")))))}}]),n}(h.a.Component),B=m.a.create({container:{flex:1,flexDirection:"column"},image:{flex:1,resizeMode:"cover",justifyContent:"center"},textInput:{width:500,marginLeft:"35%",marginBottom:"4%"},headers:{fontWeight:"bold",margin:"50px",fontSize:"40px",fontFamily:"Helvetica",border:"2px solid black",padding:"30px",textAlign:"center",width:"500px",marginLeft:"35%",borderRadius:"20px",color:"orange"},buttonStyle:{backgroundColor:"orange",padding:10,margin:10,width:120,height:50,borderRadius:"20px",textAlign:"center",justifyContent:"center",marginLeft:"45%",fontSize:"25px"}}),D=n(28),L=n.n(D),z=n(65),P=n(40);n(216),n(131);function W(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u()(this,n)}}var O={uri:"https://miro.medium.com/max/4574/1*b1T9PtMK3bxboKvnSctNmg.jpeg"},U=function(t){l()(n,t);var e=W(n);function n(t){var r;return a()(this,n),(r=e.call(this,t)).fetchMoreStories=function(){var t,e;return S.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=r.state.search.toUpperCase(),"B"!==(e=t.split(""))[0].toUpperCase()){n.next=9;break}return n.next=5,S.a.awrap(T.collection("readstory").where("title","==",t).startAfter(r.state.lastVisibleStory).limit(10).get());case 5:n.sent.docs.map((function(t){r.setState({allStories:[].concat(L()(r.state.allStories),[t.data()]),lastVisibleStory:t})})),n.next=14;break;case 9:if("S"!==e[0].toUpperCase()){n.next=14;break}return n.next=12,S.a.awrap(T.collection("readstory").where("bookId","==",t).startAfter(r.state.lastVisibleStory).limit(10).get());case 12:n.sent.docs.map((function(t){r.setState({allStories:[].concat(L()(r.state.allStories),[t.data()]),lastVisibleStory:t})}));case 14:case"end":return n.stop()}}),null,null,null,Promise)},r.searchStory=function(t){var e;return S.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if("R"!==(e=t.split(""))[0].toUpperCase()){n.next=8;break}return n.next=4,S.a.awrap(T.collection("readstory").where("bookId","==",t).get());case 4:n.sent.docs.map((function(t){r.setState({allStories:[].concat(L()(r.state.allStories),[t.data()]),lastVisibleStory:t})})),n.next=13;break;case 8:if("S"!==e[0].toUpperCase()){n.next=13;break}return n.next=11,S.a.awrap(T.collection("readstory").where("bookId","==",t).get());case 11:n.sent.docs.map((function(t){r.setState({allStories:[].concat(L()(r.state.allStories),[t.data()]),lastVisibleStory:t})}));case 13:case"end":return n.stop()}}),null,null,null,Promise)},r.retrieveStories=function(){try{var t=[];T.collection("readstory").get().then((function(e){e.forEach((function(e){t.push(e.data()),console.log("story is visible",t)})),r.setState({allStories:t})}))}catch(e){console.log(e)}},r.componentDidMount=function(){return S.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==r.search){t.next=7;break}return t.next=3,S.a.awrap(T.collection("readstory").limit(10).get());case 3:t.sent.docs.map((function(t){r.setState({allStories:[],lastVisibleStory:t})})),t.next=8;break;case 7:null!==r.search&&r.retrieveStories();case 8:case"end":return t.stop()}}),null,null,null,Promise)},r.state={search:"",allStories:[],lastVisibleStory:null},r}return i()(n,[{key:"render",value:function(){var t=this;return h.a.createElement(k.a,{style:M.container},h.a.createElement(v.a,{ImageBackground:!0,source:O,style:M.image},h.a.createElement(E.a,{behavior:"padding",style:M.container},h.a.createElement(w.a,{style:M.headers},"READ STORY"),h.a.createElement(k.a,{style:M.searchBar},h.a.createElement(P.a,{style:M.bar,placeholder:"Enter Title of The Book",onChangeText:function(e){t.setState({search:e})}}),h.a.createElement(R.a,{style:M.searchButton,onPress:function(){t.searchStory(t.state.search)}},h.a.createElement(w.a,null,"Search"))),h.a.createElement(k.a,null,h.a.createElement(z.a,{data:this.state.allStories,renderItem:function(t){var e=t.item;return h.a.createElement(k.a,{style:M.itemContainer},h.a.createElement(k.a,{style:{borderBottomWidth:2}},h.a.createElement(w.a,null,"Book Id: "+e.bookId),h.a.createElement(w.a,null,"Title:"+e.title),h.a.createElement(w.a,null,"Author:"+e.author)))},keyExtractor:function(t,e){return e.toString()},onEndReached:this.fetchMoreStories,onEndReachedThreshold:.7})))))}}]),n}(h.a.Component),M=m.a.create({container:{flex:1,flexDirection:"column"},image:{flex:1,resizeMode:"cover",justifyContent:"center",height:"100vh"},headers:{fontWeight:"bold",marginTop:"15px",fontSize:"40px",fontFamily:"Helvetica",border:"4px solid black",padding:"20px",textAlign:"center",width:"500px",marginLeft:"670px",borderRadius:"20px",color:"pink",marginBottom:"50px"},searchstyle:{width:"100px"},itemContainer:{marginTop:"20px",height:80,width:"70%",borderWidth:2,borderColor:"pink",justifyContent:"center",alignSelf:"center",backgroundColor:"white"},searchBar:{flexDirection:"row",marginLeft:"36%",height:80,width:450,borderWidth:3,borderRadius:"20px",alignItems:"center",backgroundColor:"pink"},bar:{marginLeft:"11%",borderWidth:2,height:45,width:300,paddingLeft:10,borderWidth:3,borderRadius:"20px"},searchButton:{marginLeft:"1%",borderWidth:3,borderRadius:"20px",height:45,width:60,alignItems:"center",justifyContent:"center",backgroundColor:"white"}});function V(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u()(this,n)}}var H={uri:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/3bf09552415479.59106033e0bf2.jpg"},Y=function(t){l()(n,t);var e=V(n);function n(){return a()(this,n),e.apply(this,arguments)}return i()(n,[{key:"render",value:function(){return h.a.createElement(k.a,{style:N.container},h.a.createElement(v.a,{source:H,style:N.image},h.a.createElement(w.a,{style:N.headers},"PUBLISH YOUR STORY OR YOU CAN READ A STORY")))}}]),n}(h.a.Component),N=m.a.create({container:{flex:1,flexDirection:"column"},image:{flex:1,resizeMode:"cover",justifyContent:"center"},textInput:{width:500,marginLeft:"35%",marginBottom:"4%"},headers:{fontWeight:"bold",margin:"50px",fontSize:"50px",fontFamily:"Helvetica",border:"5px solid black",padding:"30px",textAlign:"center",width:"800px",marginLeft:"30%",borderRadius:"20px",color:"#07fff8"},buttonStyle:{backgroundColor:"orange",padding:10,margin:10,width:120,height:50,borderRadius:"20px",textAlign:"center",justifyContent:"center",marginLeft:"45%",fontSize:"25px"},buttonText:{fontSize:30},check:{fontSize:30}});function F(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u()(this,n)}}var J=function(t){l()(n,t);var e=F(n);function n(){return a()(this,n),e.apply(this,arguments)}return i()(n,[{key:"render",value:function(){return h.a.createElement(_,null)}}]),n}(h.a.Component),K=Object(x.a)({ReadStory:{screen:U},HomeScreen:{screen:Y},WriteStory:{screen:j}},{defaultNavigationOptions:function(t){var e=t.navigation;return{tabBarIcon:function(){var t=e.state.routeName;return"HomeScreen"===t?h.a.createElement(y.a,{style:{width:32,height:32},source:n(239)}):"WriteStory"===t?h.a.createElement(y.a,{style:{width:32,height:32},source:n(240)}):"ReadStory"===t?h.a.createElement(y.a,{style:{width:32,height:32},source:n(241)}):void 0}}}}),_=Object(g.createAppContainer)(K);m.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},177:function(t,e,n){t.exports=n(243)},216:function(t,e,n){var r=n(217),a=n(218);"string"===typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);t.exports=a.locals||{}},218:function(t,e,n){(e=n(219)(!1)).push([t.i,".search-bar-dropdown {\n  width: 1000px;\n  margin-left: 22%;\n  background: #888;\n  border-radius: 10px;\n  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);\n}\n.allStories {\n  display: flex;\n  flex-direction: column;\n}\n.storyList1 {\n  background-color: pink;\n  padding: 10px;\n  margin-top: 60px;\n  margin-bottom: 20px;\n  width: 800px;\n  height: 100px;\n  border-radius: 20px;\n  text-align: left;\n  justify-content: space-around;\n  margin-left: 26%;\n  font-size: 25px;\n  border: 3px solid #000000;\n}\n",""]),t.exports=e},239:function(t,e,n){t.exports=n.p+"static/media/home.64ac6f4d.png"},240:function(t,e,n){t.exports=n.p+"static/media/write.85de73b4.png"},241:function(t,e,n){t.exports=n.p+"static/media/read.bab2041c.png"}},[[177,1,2]]]);
//# sourceMappingURL=app.d2644068.chunk.js.map