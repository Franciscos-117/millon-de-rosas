"use strict";(self.webpackChunkfloreriaTest=self.webpackChunkfloreriaTest||[]).push([[189],{8189:(nt,V,p)=>{p.r(V),p.d(V,{AuthModule:()=>tt});var O=p(6814),N=p(1430),a=p(4946);let fe=(()=>{var t;class e{}return(t=e).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-layout-page"]],decls:1,vars:0,template:function(n,r){1&n&&a._UZ(0,"router-outlet")},dependencies:[N.lC]}),e})();var $=p(5861),me=p(3519),D=p.n(me),ye=p(7484),ge=p(9046);class G{logIn(e,s){return(0,$.Z)(function*(){return(yield ye.Z.post(`${ge.T.baseUrl}login?email=${e}&password=${s}&api_key=gkq7MTv7alzg5vlqNvVlpg2japI3B5dD`,{})).data})()}}var T=p(95);const ve=[{path:"",component:fe,children:[{path:"login",component:(()=>{var t;class e{constructor(n,r){this.router=n,this.authServices=r,this.formValues={email:"",password:""}}initSession(){var n=this;return(0,$.Z)(function*(){if(""!==n.formValues.email.trim()&&""!==n.formValues.password)try{let r=yield n.authServices.logIn(n.formValues.email,n.formValues.password);if(!r)return void D().fire({icon:"error",title:"Oops...",text:"Something went wrong!"});localStorage.setItem("USER",JSON.stringify(r.data)),n.router.navigate(["/dashboard/inicio"])}catch{return void D().fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}else D().fire({icon:"error",title:"Complete el formulario",text:"El Correo o contrase\xf1a estan vacios"})})()}}return(t=e).\u0275fac=function(n){return new(n||t)(a.Y36(N.F0),a.Y36(G))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-login"]],decls:11,vars:2,consts:[[1,"main_container"],[1,"login_container","bg-white","rounded-2"],[1,"col","left_nothing"],[1,"col"],["ngNativeValidate","",1,"form_login",3,"submit"],[1,"text-center","fs-3","title"],["required","","name","email","type","email","placeholder","Email",1,"form-control","rounded-5","mb-3","mb-3","p-3",3,"ngModel","ngModelChange"],["required","","name","password","placeholder","Contrase\xf1a","type","password",1,"form-control","rounded-5","mb-3","p-3",3,"ngModel","ngModelChange"],["type","submit",1,"btn","w-100","text-white","rounded-5","p-3","btn_login"]],template:function(n,r){1&n&&(a.TgZ(0,"div",0)(1,"div",1),a._UZ(2,"div",2),a.TgZ(3,"div",3)(4,"form",4),a.NdJ("submit",function(){return r.initSession()}),a.TgZ(5,"p",5),a._uU(6,"\xa1Bienvenido!"),a.qZA(),a.TgZ(7,"input",6),a.NdJ("ngModelChange",function(i){return r.formValues.email=i}),a.qZA(),a.TgZ(8,"input",7),a.NdJ("ngModelChange",function(i){return r.formValues.password=i}),a.qZA(),a.TgZ(9,"button",8),a._uU(10," Acceder "),a.qZA()()()()()),2&n&&(a.xp6(7),a.Q6J("ngModel",r.formValues.email),a.xp6(1),a.Q6J("ngModel",r.formValues.password))},dependencies:[T.Fj,T.JJ,T.JL,T.Q7,T.On,T.F],styles:[".main_container[_ngcontent-%COMP%]{background-color:#4e73df;min-height:100vh;padding-top:30px}.btn_login[_ngcontent-%COMP%]{background-color:#4e73df;border-color:#4e73df}.btn_login[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#4e73df}.title[_ngcontent-%COMP%]{color:#3a3b45}@media only screen and (min-width: 1024px){.login_container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;max-width:912px;margin:0 auto}.form_login[_ngcontent-%COMP%]{padding:3em}}@media only screen and (min-width: 768px) and (max-width: 1024px){.left_nothing[_ngcontent-%COMP%]{display:none}.login_container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;max-width:912px;margin:0 auto}.form_login[_ngcontent-%COMP%]{padding:3em}}@media only screen and (max-width: 767px){.left_nothing[_ngcontent-%COMP%]{display:none}.main_container[_ngcontent-%COMP%]{padding:80px 5%}.form_login[_ngcontent-%COMP%]{padding:1em}}"]}),e})()},{path:"**",redirectTo:"login"}]}];let be=(()=>{var t;class e{}return(t=e).\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[N.Bz.forChild(ve),N.Bz]}),e})();var Z=p(2096),Ee=p(7715),Te=p(5592),Ce=p(6328),we=p(2181),A=p(7398),W=p(4716),Re=p(4664);class k{}class I{}class g{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?"string"==typeof e?this.lazyInit=()=>{this.headers=new Map,e.split("\n").forEach(s=>{const n=s.indexOf(":");if(n>0){const r=s.slice(0,n),o=r.toLowerCase(),i=s.slice(n+1).trim();this.maybeSetNormalizedName(r,o),this.headers.has(o)?this.headers.get(o).push(i):this.headers.set(o,[i])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((s,n)=>{this.setHeaderEntries(n,s)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([s,n])=>{this.setHeaderEntries(s,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const s=this.headers.get(e.toLowerCase());return s&&s.length>0?s[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,s){return this.clone({name:e,value:s,op:"a"})}set(e,s){return this.clone({name:e,value:s,op:"s"})}delete(e,s){return this.clone({name:e,value:s,op:"d"})}maybeSetNormalizedName(e,s){this.normalizedNames.has(s)||this.normalizedNames.set(s,e)}init(){this.lazyInit&&(this.lazyInit instanceof g?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(s=>{this.headers.set(s,e.headers.get(s)),this.normalizedNames.set(s,e.normalizedNames.get(s))})}clone(e){const s=new g;return s.lazyInit=this.lazyInit&&this.lazyInit instanceof g?this.lazyInit:this,s.lazyUpdate=(this.lazyUpdate||[]).concat([e]),s}applyUpdate(e){const s=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,s);const r=("a"===e.op?this.headers.get(s):void 0)||[];r.push(...n),this.headers.set(s,r);break;case"d":const o=e.value;if(o){let i=this.headers.get(s);if(!i)return;i=i.filter(l=>-1===o.indexOf(l)),0===i.length?(this.headers.delete(s),this.normalizedNames.delete(s)):this.headers.set(s,i)}else this.headers.delete(s),this.normalizedNames.delete(s)}}setHeaderEntries(e,s){const n=(Array.isArray(s)?s:[s]).map(o=>o.toString()),r=e.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(s=>e(this.normalizedNames.get(s),this.headers.get(s)))}}class Pe{encodeKey(e){return K(e)}encodeValue(e){return K(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const _e=/%(\d[a-f0-9])/gi,Se={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function K(t){return encodeURIComponent(t).replace(_e,(e,s)=>Se[s]??e)}function L(t){return`${t}`}class v{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new Pe,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function xe(t,e){const s=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{const o=r.indexOf("="),[i,l]=-1==o?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,o)),e.decodeValue(r.slice(o+1))],u=s.get(i)||[];u.push(l),s.set(i,u)}),s}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(s=>{const n=e.fromObject[s],r=Array.isArray(n)?n.map(L):[L(n)];this.map.set(s,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const s=this.map.get(e);return s?s[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,s){return this.clone({param:e,value:s,op:"a"})}appendAll(e){const s=[];return Object.keys(e).forEach(n=>{const r=e[n];Array.isArray(r)?r.forEach(o=>{s.push({param:n,value:o,op:"a"})}):s.push({param:n,value:r,op:"a"})}),this.clone(s)}set(e,s){return this.clone({param:e,value:s,op:"s"})}delete(e,s){return this.clone({param:e,value:s,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const s=this.encoder.encodeKey(e);return this.map.get(e).map(n=>s+"="+this.encoder.encodeValue(n)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const s=new v({encoder:this.encoder});return s.cloneFrom=this.cloneFrom||this,s.updates=(this.updates||[]).concat(e),s}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const s=("a"===e.op?this.map.get(e.param):void 0)||[];s.push(L(e.value)),this.map.set(e.param,s);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let n=this.map.get(e.param)||[];const r=n.indexOf(L(e.value));-1!==r&&n.splice(r,1),n.length>0?this.map.set(e.param,n):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class Me{constructor(){this.map=new Map}set(e,s){return this.map.set(e,s),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function Y(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Q(t){return typeof Blob<"u"&&t instanceof Blob}function ee(t){return typeof FormData<"u"&&t instanceof FormData}class _{constructor(e,s,n,r){let o;if(this.url=s,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function Oe(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==n?n:null,o=r):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params)),this.headers||(this.headers=new g),this.context||(this.context=new Me),this.params){const i=this.params.toString();if(0===i.length)this.urlWithParams=s;else{const l=s.indexOf("?");this.urlWithParams=s+(-1===l?"?":l<s.length-1?"&":"")+i}}else this.params=new v,this.urlWithParams=s}serializeBody(){return null===this.body?null:Y(this.body)||Q(this.body)||ee(this.body)||function Ne(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof v?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ee(this.body)?null:Q(this.body)?this.body.type||null:Y(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof v?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const s=e.method||this.method,n=e.url||this.url,r=e.responseType||this.responseType,o=void 0!==e.body?e.body:this.body,i=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,l=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let u=e.headers||this.headers,c=e.params||this.params;const y=e.context??this.context;return void 0!==e.setHeaders&&(u=Object.keys(e.setHeaders).reduce((E,m)=>E.set(m,e.setHeaders[m]),u)),e.setParams&&(c=Object.keys(e.setParams).reduce((E,m)=>E.set(m,e.setParams[m]),c)),new _(s,n,o,{params:c,headers:u,context:y,reportProgress:l,responseType:r,withCredentials:i})}}var R=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(R||{});class j{constructor(e,s=200,n="OK"){this.headers=e.headers||new g,this.status=void 0!==e.status?e.status:s,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class U extends j{constructor(e={}){super(e),this.type=R.ResponseHeader}clone(e={}){return new U({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class P extends j{constructor(e={}){super(e),this.type=R.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new P({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class te extends j{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function J(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials}}let Ae=(()=>{var t;class e{constructor(n){this.handler=n}request(n,r,o={}){let i;if(n instanceof _)i=n;else{let c,y;c=o.headers instanceof g?o.headers:new g(o.headers),o.params&&(y=o.params instanceof v?o.params:new v({fromObject:o.params})),i=new _(n,r,void 0!==o.body?o.body:null,{headers:c,context:o.context,params:y,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const l=(0,Z.of)(i).pipe((0,Ce.b)(c=>this.handler.handle(c)));if(n instanceof _||"events"===o.observe)return l;const u=l.pipe((0,we.h)(c=>c instanceof P));switch(o.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return u.pipe((0,A.U)(c=>{if(null!==c.body&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return u.pipe((0,A.U)(c=>{if(null!==c.body&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return u.pipe((0,A.U)(c=>{if(null!==c.body&&"string"!=typeof c.body)throw new Error("Response is not a string.");return c.body}));default:return u.pipe((0,A.U)(c=>c.body))}case"response":return u;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:(new v).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,o={}){return this.request("PATCH",n,J(o,r))}post(n,r,o={}){return this.request("POST",n,J(o,r))}put(n,r,o={}){return this.request("PUT",n,J(o,r))}}return(t=e).\u0275fac=function(n){return new(n||t)(a.LFG(k))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac}),e})();function re(t,e){return e(t)}function Ie(t,e){return(s,n)=>e.intercept(s,{handle:r=>t(r,n)})}const Fe=new a.OlP(""),S=new a.OlP(""),oe=new a.OlP("");function He(){let t=null;return(e,s)=>{null===t&&(t=((0,a.f3M)(Fe,{optional:!0})??[]).reduceRight(Ie,re));const n=(0,a.f3M)(a.HDt),r=n.add();return t(e,s).pipe((0,W.x)(()=>n.remove(r)))}}let ae=(()=>{var t;class e extends k{constructor(n,r){super(),this.backend=n,this.injector=r,this.chain=null,this.pendingTasks=(0,a.f3M)(a.HDt)}handle(n){if(null===this.chain){const o=Array.from(new Set([...this.injector.get(S),...this.injector.get(oe,[])]));this.chain=o.reduceRight((i,l)=>function Le(t,e,s){return(n,r)=>s.runInContext(()=>e(n,o=>t(o,r)))}(i,l,this.injector),re)}const r=this.pendingTasks.add();return this.chain(n,o=>this.backend.handle(o)).pipe((0,W.x)(()=>this.pendingTasks.remove(r)))}}return(t=e).\u0275fac=function(n){return new(n||t)(a.LFG(I),a.LFG(a.lqb))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac}),e})();const Je=/^\)\]\}',?\n/;let le=(()=>{var t;class e{constructor(n){this.xhrFactory=n}handle(n){if("JSONP"===n.method)throw new a.vHH(-2800,!1);const r=this.xhrFactory;return(r.\u0275loadImpl?(0,Ee.D)(r.\u0275loadImpl()):(0,Z.of)(null)).pipe((0,Re.w)(()=>new Te.y(i=>{const l=r.build();if(l.open(n.method,n.urlWithParams),n.withCredentials&&(l.withCredentials=!0),n.headers.forEach((d,h)=>l.setRequestHeader(d,h.join(","))),n.headers.has("Accept")||l.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){const d=n.detectContentTypeHeader();null!==d&&l.setRequestHeader("Content-Type",d)}if(n.responseType){const d=n.responseType.toLowerCase();l.responseType="json"!==d?d:"text"}const u=n.serializeBody();let c=null;const y=()=>{if(null!==c)return c;const d=l.statusText||"OK",h=new g(l.getAllResponseHeaders()),w=function Xe(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}(l)||n.url;return c=new U({headers:h,status:l.status,statusText:d,url:w}),c},E=()=>{let{headers:d,status:h,statusText:w,url:z}=y(),f=null;204!==h&&(f=typeof l.response>"u"?l.responseText:l.response),0===h&&(h=f?200:0);let H=h>=200&&h<300;if("json"===n.responseType&&"string"==typeof f){const pe=f;f=f.replace(Je,"");try{f=""!==f?JSON.parse(f):null}catch(q){f=pe,H&&(H=!1,f={error:q,text:f})}}H?(i.next(new P({body:f,headers:d,status:h,statusText:w,url:z||void 0})),i.complete()):i.error(new te({error:f,headers:d,status:h,statusText:w,url:z||void 0}))},m=d=>{const{url:h}=y(),w=new te({error:d,status:l.status||0,statusText:l.statusText||"Unknown Error",url:h||void 0});i.error(w)};let x=!1;const B=d=>{x||(i.next(y()),x=!0);let h={type:R.DownloadProgress,loaded:d.loaded};d.lengthComputable&&(h.total=d.total),"text"===n.responseType&&l.responseText&&(h.partialText=l.responseText),i.next(h)},M=d=>{let h={type:R.UploadProgress,loaded:d.loaded};d.lengthComputable&&(h.total=d.total),i.next(h)};return l.addEventListener("load",E),l.addEventListener("error",m),l.addEventListener("timeout",m),l.addEventListener("abort",m),n.reportProgress&&(l.addEventListener("progress",B),null!==u&&l.upload&&l.upload.addEventListener("progress",M)),l.send(u),i.next({type:R.Sent}),()=>{l.removeEventListener("error",m),l.removeEventListener("abort",m),l.removeEventListener("load",E),l.removeEventListener("timeout",m),n.reportProgress&&(l.removeEventListener("progress",B),null!==u&&l.upload&&l.upload.removeEventListener("progress",M)),l.readyState!==l.DONE&&l.abort()}})))}}return(t=e).\u0275fac=function(n){return new(n||t)(a.LFG(O.JF))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac}),e})();const X=new a.OlP("XSRF_ENABLED"),ce=new a.OlP("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>"XSRF-TOKEN"}),ue=new a.OlP("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>"X-XSRF-TOKEN"});class de{}let qe=(()=>{var t;class e{constructor(n,r,o){this.doc=n,this.platform=r,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,O.Mx)(n,this.cookieName),this.lastCookieString=n),this.lastToken}}return(t=e).\u0275fac=function(n){return new(n||t)(a.LFG(O.K0),a.LFG(a.Lbi),a.LFG(ce))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac}),e})();function Ve(t,e){const s=t.url.toLowerCase();if(!(0,a.f3M)(X)||"GET"===t.method||"HEAD"===t.method||s.startsWith("http://")||s.startsWith("https://"))return e(t);const n=(0,a.f3M)(de).getToken(),r=(0,a.f3M)(ue);return null!=n&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,n)})),e(t)}var b=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}(b||{});function C(t,e){return{\u0275kind:t,\u0275providers:e}}function $e(...t){const e=[Ae,le,ae,{provide:k,useExisting:ae},{provide:I,useExisting:le},{provide:S,useValue:Ve,multi:!0},{provide:X,useValue:!0},{provide:de,useClass:qe}];for(const s of t)e.push(...s.\u0275providers);return(0,a.MR2)(e)}const he=new a.OlP("LEGACY_INTERCEPTOR_FN");let Ze=(()=>{var t;class e{}return(t=e).\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({providers:[$e(C(b.LegacyInterceptors,[{provide:he,useFactory:He},{provide:S,useExisting:he,multi:!0}]))]}),e})(),tt=(()=>{var t;class e{}return(t=e).\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({providers:[G],imports:[O.ez,be,T.u5,Ze]}),e})()}}]);