(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{chh7:function(e,t,a){"use strict";a.r(t);a("IzEo");var n=a("bx4M"),o=(a("14J3"),a("BMrR")),r=(a("jCWc"),a("kPKH")),s=(a("g9YV"),a("wCAj")),u=(a("+L6B"),a("2/Rp")),c=(a("y8nQ"),a("Vl3Y")),i=(a("OaEy"),a("2fM7")),l=a("p0pE"),d=a.n(l),m=a("2Taf"),p=a.n(m),h=a("vZ4D"),g=a.n(h),f=a("l4Ni"),v=a.n(f),y=a("ujKo"),E=a.n(y),w=a("MhPg"),I=a.n(w),b=a("q1tI"),T=a.n(b),k=a("2MRG"),A=a("OYJU"),P=a("wY1l"),U=a.n(P),N=a("Sp1i"),S=a.n(N),V=a("ydnR"),J=function(e){function t(e){var a;return p()(this,t),a=v()(this,E()(t).call(this,e)),a.statusChange=function(e,t){var n=a.state.doctors,o=n.map(function(e){return d()({},e)});o.map(function(a){if(a.Username==t){var n=!1;a.Attributes.map(function(t){"custom:doctor_status"==t.Name&&(t.Value=e,n=!0)}),n||(a.Attributes.push({Name:"custom:doctor_status",Value:e}),console.log("each.Attributes",a.Attributes))}}),a.setState({doctors:o});var r={accessKeyId:"AKIATUPTMLPP37TGUMEZ",secretAccessKey:"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",region:"ap-south-1",sessionToken:null,userPoolId:"ap-south-1_p7Jz6LG3T",username:t};S.a.config.correctClockSkew=!0,S.a.config.update(r);var s=new S.a.CognitoIdentityServiceProvider({apiVersion:"2016-04-18"});s.adminUpdateUserAttributes({UserPoolId:"ap-south-1_p7Jz6LG3T",Username:t,UserAttributes:[{Name:"custom:doctor_status",Value:e}]},function(e){console.log(e,"res")})},a.editDoctor=function(){a.setState({})},a.state={doctors:[],loading:!0,doctorView:!0,phoneList:["222"]},a}return I()(t,e),g()(t,[{key:"componentDidMount",value:function(){var e=this;null==localStorage.getItem(V["a"])&&this.props.history.push({pathname:"/user/login"});var t={accessKeyId:"AKIATUPTMLPP37TGUMEZ",secretAccessKey:"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",region:"ap-south-1",sessionToken:null,userPoolId:"ap-south-1_p7Jz6LG3T"};S.a.config.correctClockSkew=!0,S.a.config.update(t);var a=new S.a.CognitoIdentityServiceProvider({apiVersion:"2016-04-18"});a.listUsersInGroup({GroupName:"admin",UserPoolId:"ap-south-1_p7Jz6LG3T"},function(t,a){var n=[];a.Users.map(function(e){e.Attributes.map(function(e){"phone_number"==e.Name&&n.push(e.Value)})}),e.setState({phoneList:n}),Object(k["a"])("get","/api/doctors").then(function(t){console.log(t.data.data,"asasd"),e.setState({doctors:t.data.data,loading:!1})})})}},{key:"render",value:function(){var e=this,t=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return T.a.createElement("a",{href:"javascript:;"},e)}},{title:"Phone Number",dataIndex:"age",key:"age"},{title:"Email",dataIndex:"address",key:"address"},{title:"Status",key:"tags",dataIndex:"tags",render:function(t,a){return T.a.createElement("span",null,[t].map(function(t){t.length;return"loser"===t&&"#f50",T.a.createElement(c["a"].Item,null,T.a.createElement(i["a"],{placeholder:"Please select",style:{width:100,marginTop:20},onChange:function(t){return e.statusChange(t,a.key)},value:t},T.a.createElement(Option,{value:"1"},"Accept"),T.a.createElement(Option,{value:"0"},"Reject")))}))}},{title:"Action",key:"action",render:function(e,t){return T.a.createElement("span",null,T.a.createElement(U.a,{to:{pathname:"/doctor-view",state:{id:e.key}}},T.a.createElement(u["a"],{icon:"edit",style:{float:"left"}})),T.a.createElement(u["a"],{icon:"delete",style:{marginLeft:8}}))}}],a=[];return this.state.doctors.map(function(t){if(t.Attributes.length){console.log(t.Attributes);var n=t.Username,o="",r="",s="",u="";t.Attributes.map(function(e){"custom:full_name"===e.Name&&(o=e.Value),"phone_number"===e.Name&&(r=e.Value),"email"===e.Name&&(s=e.Value),"custom:doctor_status"===e.Name&&(u=e.Value)}),e.state.phoneList.some(function(e){return r===e})||a.push({key:n,name:o,age:r,address:s,tags:u})}}),T.a.createElement("div",null,this.state.doctorView?T.a.createElement(n["a"],{bordered:!1},T.a.createElement("div",{className:"gutter-example"},T.a.createElement(o["a"],{gutter:24},T.a.createElement(r["a"],{className:"gutter-row",xs:24,sm:24,md:24,lg:24,xl:24},T.a.createElement(s["a"],{columns:t,dataSource:a,loading:this.state.loading}))))):T.a.createElement(A["default"],null))}}]),t}(b["PureComponent"]);t["default"]=J}}]);