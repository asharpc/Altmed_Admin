(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"5WY0":function(e,a,t){e.exports={main:"antd-pro-pages-user-register-main",getCaptcha:"antd-pro-pages-user-register-getCaptcha",submit:"antd-pro-pages-user-register-submit",login:"antd-pro-pages-user-register-login",error:"antd-pro-pages-user-register-error",success:"antd-pro-pages-user-register-success",warning:"antd-pro-pages-user-register-warning","progress-pass":"antd-pro-pages-user-register-progress-pass",progress:"antd-pro-pages-user-register-progress"}},cq3J:function(e,a,t){"use strict";t.r(a);t("14J3");var r,s,n,i,o=t("BMrR"),l=(t("+L6B"),t("2/Rp")),c=(t("Q9mQ"),t("diRs")),d=(t("jCWc"),t("kPKH")),m=(t("MXD1"),t("CFYs")),p=t("p0pE"),g=t.n(p),u=t("2Taf"),f=t.n(u),h=t("vZ4D"),v=t.n(h),b=t("l4Ni"),E=t.n(b),w=t("ujKo"),y=t.n(w),M=t("MhPg"),k=t.n(M),x=(t("5NDa"),t("5rEg")),O=(t("OaEy"),t("2fM7")),j=(t("y8nQ"),t("Vl3Y")),C=t("q1tI"),F=t.n(C),P=t("MuoO"),S=t("Y2fQ"),N=t("wY1l"),q=t.n(N),D=t("3a4m"),z=t.n(D),I=t("5WY0"),Y=t.n(I),R=t("vEYl"),V=t.n(R),W=j["a"].Item,B=O["a"].Option,J=x["a"].Group,Q={ok:F.a.createElement("div",{className:Y.a.success},F.a.createElement(S["FormattedMessage"],{id:"validation.password.strength.strong"})),pass:F.a.createElement("div",{className:Y.a.warning},F.a.createElement(S["FormattedMessage"],{id:"validation.password.strength.medium"})),poor:F.a.createElement("div",{className:Y.a.error},F.a.createElement(S["FormattedMessage"],{id:"validation.password.strength.short"}))},G={ok:"success",pass:"normal",poor:"exception"},T=(r=Object(P["connect"])(function(e){var a=e.register,t=e.loading;return{register:a,submitting:t.effects["register/submit"]}}),s=j["a"].create(),r(n=s((i=function(e){function a(){var e,t;f()(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return t=E()(this,(e=y()(a)).call.apply(e,[this].concat(s))),t.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86"},t.onGetCaptcha=function(){var e=59;t.setState({count:e}),t.interval=setInterval(function(){e-=1,t.setState({count:e}),0===e&&clearInterval(t.interval)},1e3)},t.getPasswordStatus=function(){var e=t.props.form,a=e.getFieldValue("password");return a&&a.length>9?"ok":a&&a.length>5?"pass":"poor"},t.handleSubmit=function(e){e.preventDefault();var a=t.props,r=a.form,s=a.dispatch;r.validateFields({force:!0},function(e,a){if(!e){var r=t.state.prefix;s({type:"register/submit",payload:g()({},a,{prefix:r})})}})},t.handleConfirmBlur=function(e){var a=e.target.value,r=t.state.confirmDirty;t.setState({confirmDirty:r||!!a})},t.checkConfirm=function(e,a,r){var s=t.props.form;a&&a!==s.getFieldValue("password")?r(Object(S["formatMessage"])({id:"validation.password.twice"})):r()},t.checkPassword=function(e,a,r){var s=t.state,n=s.visible,i=s.confirmDirty;if(a)if(t.setState({help:""}),n||t.setState({visible:!!a}),a.length<6)r("error");else{var o=t.props.form;a&&i&&o.validateFields(["confirm"],{force:!0}),r()}else t.setState({help:Object(S["formatMessage"])({id:"validation.password.required"}),visible:!!a}),r("error")},t.changePrefix=function(e){t.setState({prefix:e})},t.renderPasswordProgress=function(){var e=t.props.form,a=e.getFieldValue("password"),r=t.getPasswordStatus();return a&&a.length?F.a.createElement("div",{className:Y.a["progress-".concat(r)]},F.a.createElement(m["a"],{status:G[r],className:Y.a.progress,strokeWidth:6,percent:10*a.length>100?100:10*a.length,showInfo:!1})):null},t}return k()(a,e),v()(a,[{key:"componentDidUpdate",value:function(){var e=this.props,a=e.form,t=e.register,r=a.getFieldValue("mail");"ok"===t.status&&z.a.push({pathname:"/user/register-result",state:{account:r}})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,a=e.form,t=e.submitting,r=a.getFieldDecorator,s=this.state,n=s.count,i=s.prefix,m=s.help,p=s.visible;return F.a.createElement("div",{className:Y.a.main},F.a.createElement(o["a"],null,F.a.createElement(d["a"],{xl:12,lg:12,md:24,sm:24,xs:24},F.a.createElement("div",{style:{height:"60vh",width:"100%",backgroundColor:"#f9f9f9",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundBlendMode:"normal",borderRadius:"5px 0 0 5px",position:"relative",backgroundImage:"url(".concat(V.a,")")}})),F.a.createElement(d["a"],{xl:12,lg:12,md:24,sm:24,xs:24},F.a.createElement("h3",{style:{padding:"48px 48px 0"}},F.a.createElement(S["FormattedMessage"],{id:"app.register.register"})),F.a.createElement(j["a"],{style:{padding:"0 48px 12px"},onSubmit:this.handleSubmit},F.a.createElement(W,null,r("mail",{rules:[{required:!0,message:Object(S["formatMessage"])({id:"validation.email.required"})},{type:"email",message:Object(S["formatMessage"])({id:"validation.email.wrong-format"})}]})(F.a.createElement(x["a"],{size:"large",placeholder:Object(S["formatMessage"])({id:"form.email.placeholder"})}))),F.a.createElement(W,{help:m},F.a.createElement(c["a"],{getPopupContainer:function(e){return e.parentNode},content:F.a.createElement("div",{style:{padding:"4px 0"}},Q[this.getPasswordStatus()],this.renderPasswordProgress(),F.a.createElement("div",{style:{marginTop:10}},F.a.createElement(S["FormattedMessage"],{id:"validation.password.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:p},r("password",{rules:[{validator:this.checkPassword}]})(F.a.createElement(x["a"],{size:"large",type:"password",placeholder:Object(S["formatMessage"])({id:"form.password.placeholder"})})))),F.a.createElement(W,null,r("confirm",{rules:[{required:!0,message:Object(S["formatMessage"])({id:"validation.confirm-password.required"})},{validator:this.checkConfirm}]})(F.a.createElement(x["a"],{size:"large",type:"password",placeholder:Object(S["formatMessage"])({id:"form.confirm-password.placeholder"})}))),F.a.createElement(W,null,F.a.createElement(J,{compact:!0},F.a.createElement(O["a"],{size:"large",value:i,onChange:this.changePrefix,style:{width:"20%"}},F.a.createElement(B,{value:"86"},"+86"),F.a.createElement(B,{value:"87"},"+87")),r("mobile",{rules:[{required:!0,message:Object(S["formatMessage"])({id:"validation.phone-number.required"})},{pattern:/^\d{11}$/,message:Object(S["formatMessage"])({id:"validation.phone-number.wrong-format"})}]})(F.a.createElement(x["a"],{size:"large",style:{width:"80%"},placeholder:Object(S["formatMessage"])({id:"form.phone-number.placeholder"})})))),F.a.createElement(W,null,F.a.createElement(o["a"],{gutter:8},F.a.createElement(d["a"],{span:16},r("captcha",{rules:[{required:!0,message:Object(S["formatMessage"])({id:"validation.verification-code.required"})}]})(F.a.createElement(x["a"],{size:"large",placeholder:Object(S["formatMessage"])({id:"form.verification-code.placeholder"})}))),F.a.createElement(d["a"],{span:8},F.a.createElement(l["a"],{size:"large",disabled:n,className:Y.a.getCaptcha,onClick:this.onGetCaptcha},n?"".concat(n," s"):Object(S["formatMessage"])({id:"app.register.get-verification-code"}))))),F.a.createElement(W,null,F.a.createElement(l["a"],{size:"large",loading:t,className:Y.a.submit,type:"primary",htmlType:"submit",block:!0},F.a.createElement(S["FormattedMessage"],{id:"app.register.register"})),F.a.createElement(q.a,{className:Y.a.login,to:"/User/Login"},F.a.createElement(S["FormattedMessage"],{id:"app.register.sign-in"})))))))}}]),a}(C["Component"]),n=i))||n)||n);a["default"]=T}}]);