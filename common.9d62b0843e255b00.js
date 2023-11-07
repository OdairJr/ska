"use strict";(self.webpackChunkska=self.webpackChunkska||[]).push([[592],{4057:(d,o,c)=>{c.d(o,{F:()=>u});var l=c(5879);let u=(()=>{var n;class s{constructor(r){this.el=r}onInput(r){const e=r.target;let t=e.value.replace(/\D/g,"");t.length>5&&(t=t.substring(0,5)+"-"+t.substring(5,8)),e.value=t}}return(n=s).\u0275fac=function(r){return new(r||n)(l.Y36(l.SBq))},n.\u0275dir=l.lG2({type:n,selectors:[["","appCepMask",""]],hostBindings:function(r,e){1&r&&l.NdJ("input",function(i){return e.onInput(i)})},standalone:!0}),s})()},2244:(d,o,c)=>{c.d(o,{o:()=>n});var l=c(1822),u=c(5879);let n=(()=>{var s;class a{constructor(e,t){this.renderer=e,this.el=t}onInput(e){e.target.value.length<=18&&this.renderer.setProperty(this.el.nativeElement,"value",l.e.convertToCpfCnpj(e.target.value))}}return(s=a).\u0275fac=function(e){return new(e||s)(u.Y36(u.Qsj),u.Y36(u.SBq))},s.\u0275dir=u.lG2({type:s,selectors:[["","nccCpfCnpjMask",""]],hostBindings:function(e,t){1&e&&u.NdJ("input",function(p){return t.onInput(p)})},standalone:!0}),a})()},1822:(d,o,c)=>{c.d(o,{e:()=>l});class l{constructor(){}static convertToCpfCnpj(n){if(n=n.toString(),(n=l.getDigitos(n))&&n.length>3&&n.length<=14){const a={4:{searchValue:/(\d+)(\d{3})/,newValue:"$1.$2"},5:{searchValue:/(\d+)(\d{3})/,newValue:"$1.$2"},6:{searchValue:/(\d+)(\d{3})/,newValue:"$1.$2"},7:{searchValue:/(\d+)(\d{3})(\d{3})/,newValue:"$1.$2.$3"},8:{searchValue:/(\d+)(\d{3})(\d{3})/,newValue:"$1.$2.$3"},9:{searchValue:/(\d+)(\d{3})(\d{3})/,newValue:"$1.$2.$3"},10:{searchValue:/(\d+)(\d{3})(\d{3})(\d{1})/,newValue:"$1.$2.$3-$4"},11:{searchValue:/(\d+)(\d{3})(\d{3})(\d{2})/,newValue:"$1.$2.$3-$4"},12:{searchValue:/(\d+)(\d{3})(\d{3})(\d{4})/,newValue:"$1.$2.$3-$4"},13:{searchValue:/(\d+)(\d{3})(\d{3})(\d{4})(\d{2})/,newValue:"$1.$2.$3/$4-$5"},14:{searchValue:/(\d+)(\d{3})(\d{3})(\d{4})(\d{2})/,newValue:"$1.$2.$3/$4-$5"}}[n.length];n=n.replace(a.searchValue,a.newValue)}return n}static getDigitos(n){const s=new RegExp("\\D","g");return n.replace(s,"")}static cpfIsValid(n){if(n.length>0){let s=!1;const a=l.getDigitos(n);if(11===a.length){const r=["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999"];for(let i=0;i<10;i++)if(a===r[i])return s;let e=0;for(let i=0;i<9;i++)e+=parseInt(a.charAt(i),10)*(10-i);let t=0;if(e%11>1&&(t=11-e%11),parseInt(a.charAt(9),10)!==t)return s;e=0;for(let i=0;i<10;i++)e+=parseInt(a.charAt(i),10)*(11-i);if(t=0,e%11>1&&(t=11-e%11),parseInt(a.charAt(10),10)!==t)return s;s=!0}return s}return!0}static cnpjIsValid(n){if(n.length>0){let s=!1;const a=l.getDigitos(n);if(14===a.length){if("00000000000000"===a)return s;let r=0,e=5;for(let i=0;i<12;i++)r+=parseInt(a.charAt(i),10)*e,e--,1===e&&(e=9);let t=0;if(r%11>1&&(t=11-r%11),parseInt(a.charAt(12),10)!==t)return s;r=0,e=6;for(let i=0;i<13;i++)r+=parseInt(a.charAt(i),10)*e,e--,1===e&&(e=9);if(t=0,r%11>1&&(t=11-r%11),parseInt(a.charAt(13),10)!==t)return s;s=!0}return s}return!0}}},6210:(d,o,c)=>{c.d(o,{v:()=>u});var l=c(5879);let u=(()=>{var n;class s{constructor(r){this.el=r}onInput(r){const e=r.target;let t=e.value.replace(/\D/g,"");if(t)if(t.length<=2)e.value=`(${t}`;else if(t.length<=7){const i=t.substring(0,2),p=t.substring(2,7);e.value=`(${i}) ${p}`}else{const i=t.substring(0,2),p=t.substring(2,7),_=t.substring(7,13);e.value=`(${i}) ${p}-${_}`}else e.value=""}}return(n=s).\u0275fac=function(r){return new(r||n)(l.Y36(l.SBq))},n.\u0275dir=l.lG2({type:n,selectors:[["","appPhoneMask",""]],hostBindings:function(r,e){1&r&&l.NdJ("input",function(i){return e.onInput(i)})},standalone:!0}),s})()},6775:(d,o,c)=>{c.d(o,{j:()=>s});var l=c(2866),u=c(5879),n=c(9862);let s=(()=>{var a;class r{constructor(t){this.http=t,this.apiUrlCep=`${l.N.buscaCepUrl}/ws`}getCep(t){return this.http.get(`${this.apiUrlCep}/${t}/json`)}}return(a=r).\u0275fac=function(t){return new(t||a)(u.LFG(n.eN))},a.\u0275prov=u.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),r})()},1355:(d,o,c)=>{c.d(o,{K:()=>u});var l=c(1822);class u{static validate(s){return l.e.cpfIsValid(s.value)?null:{invalid:!1}}}}}]);