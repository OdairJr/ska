"use strict";(self.webpackChunkska=self.webpackChunkska||[]).push([[407],{2407:(B,Z,m)=>{m.r(Z),m.d(Z,{CreateEstablishmentComponent:()=>w});var F=m(6814),u=m(95),_=m(3781),e=m(5879);let A=(()=>{var i;class o{constructor(t){this.el=t}onInput(t){const n=t.target;let r=n.value.replace(/\D/g,"");r.length>5&&(r=r.substring(0,5)+"-"+r.substring(5,8)),n.value=r}}return(i=o).\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq))},i.\u0275dir=e.lG2({type:i,selectors:[["","appCepMask",""]],hostBindings:function(t,n){1&t&&e.NdJ("input",function(a){return n.onInput(a)})},standalone:!0}),o})();class c{constructor(){}static convertToCpfCnpj(o){if(o=o.toString(),(o=c.getDigitos(o))&&o.length>3&&o.length<=14){const t={4:{searchValue:/(\d+)(\d{3})/,newValue:"$1.$2"},5:{searchValue:/(\d+)(\d{3})/,newValue:"$1.$2"},6:{searchValue:/(\d+)(\d{3})/,newValue:"$1.$2"},7:{searchValue:/(\d+)(\d{3})(\d{3})/,newValue:"$1.$2.$3"},8:{searchValue:/(\d+)(\d{3})(\d{3})/,newValue:"$1.$2.$3"},9:{searchValue:/(\d+)(\d{3})(\d{3})/,newValue:"$1.$2.$3"},10:{searchValue:/(\d+)(\d{3})(\d{3})(\d{1})/,newValue:"$1.$2.$3-$4"},11:{searchValue:/(\d+)(\d{3})(\d{3})(\d{2})/,newValue:"$1.$2.$3-$4"},12:{searchValue:/(\d+)(\d{3})(\d{3})(\d{4})/,newValue:"$1.$2.$3-$4"},13:{searchValue:/(\d+)(\d{3})(\d{3})(\d{4})(\d{2})/,newValue:"$1.$2.$3/$4-$5"},14:{searchValue:/(\d+)(\d{3})(\d{3})(\d{4})(\d{2})/,newValue:"$1.$2.$3/$4-$5"}}[o.length];o=o.replace(t.searchValue,t.newValue)}return o}static getDigitos(o){const s=new RegExp("\\D","g");return o.replace(s,"")}static cpfIsValid(o){if(o.length>0){let s=!1;const t=c.getDigitos(o);if(11===t.length){const n=["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999"];for(let l=0;l<10;l++)if(t===n[l])return s;let r=0;for(let l=0;l<9;l++)r+=parseInt(t.charAt(l),10)*(10-l);let a=0;if(r%11>1&&(a=11-r%11),parseInt(t.charAt(9),10)!==a)return s;r=0;for(let l=0;l<10;l++)r+=parseInt(t.charAt(l),10)*(11-l);if(a=0,r%11>1&&(a=11-r%11),parseInt(t.charAt(10),10)!==a)return s;s=!0}return s}return!0}static cnpjIsValid(o){if(o.length>0){let s=!1;const t=c.getDigitos(o);if(14===t.length){if("00000000000000"===t)return s;let n=0,r=5;for(let l=0;l<12;l++)n+=parseInt(t.charAt(l),10)*r,r--,1===r&&(r=9);let a=0;if(n%11>1&&(a=11-n%11),parseInt(t.charAt(12),10)!==a)return s;n=0,r=6;for(let l=0;l<13;l++)n+=parseInt(t.charAt(l),10)*r,r--,1===r&&(r=9);if(a=0,n%11>1&&(a=11-n%11),parseInt(t.charAt(13),10)!==a)return s;s=!0}return s}return!0}}let q=(()=>{var i;class o{constructor(t,n){this.renderer=t,this.el=n}onInput(t){t.target.value.length<=18&&this.renderer.setProperty(this.el.nativeElement,"value",c.convertToCpfCnpj(t.target.value))}}return(i=o).\u0275fac=function(t){return new(t||i)(e.Y36(e.Qsj),e.Y36(e.SBq))},i.\u0275dir=e.lG2({type:i,selectors:[["","nccCpfCnpjMask",""]],hostBindings:function(t,n){1&t&&e.NdJ("input",function(a){return n.onInput(a)})},standalone:!0}),o})(),E=(()=>{var i;class o{constructor(t){this.el=t}onInput(t){const n=t.target;let r=n.value.replace(/\D/g,"");if(r)if(r.length<=2)n.value=`(${r}`;else if(r.length<=7){const a=r.substring(0,2),l=r.substring(2,7);n.value=`(${a}) ${l}`}else{const a=r.substring(0,2),l=r.substring(2,7),d=r.substring(7,13);n.value=`(${a}) ${l}-${d}`}else n.value=""}}return(i=o).\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq))},i.\u0275dir=e.lG2({type:i,selectors:[["","appPhoneMask",""]],hostBindings:function(t,n){1&t&&e.NdJ("input",function(a){return n.onInput(a)})},standalone:!0}),o})();var T=m(9862);class U{static validate(o){return c.cpfIsValid(o.value)?null:{invalid:!1}}}var $=m(4716),y=m(3930),I=m(553);let k=(()=>{var i;class o{constructor(t){this.http=t,this.apiUrlCep=`${I.N.buscaCepUrl}/ws`}getCep(t){return this.http.get(`${this.apiUrlCep}/${t}/json`)}}return(i=o).\u0275fac=function(t){return new(t||i)(e.LFG(T.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),o})();var P=m(6240);function N(i,o){1&i&&(e.TgZ(0,"div",44),e._uU(1," Nome \xe9 obrigat\xf3rio. "),e.qZA())}function M(i,o){1&i&&(e.TgZ(0,"div",44),e._uU(1," Por favor, digite um CPF ou CNPJ v\xe1lido. "),e.qZA())}function D(i,o){1&i&&(e.TgZ(0,"div",44),e._uU(1," Descri\xe7\xe3o \xe9 obrigat\xf3ria. "),e.qZA())}function V(i,o){1&i&&(e.TgZ(0,"div",44),e._uU(1," Por favor, digite um n\xfamero de telefone v\xe1lido. "),e.qZA())}function J(i,o){1&i&&(e.TgZ(0,"div",44),e._uU(1," Tipo de servi\xe7o \xe9 obrigat\xf3rio. "),e.qZA())}function x(i,o){1&i&&(e.TgZ(0,"div",44),e._uU(1," Por favor, digite um CEP v\xe1lido. "),e.qZA())}function j(i,o){1&i&&(e.TgZ(0,"div",44),e._uU(1," O nome da rua \xe9 obrigat\xf3rio. "),e.qZA())}function O(i,o){1&i&&(e.TgZ(0,"div",44),e._uU(1," O n\xfamero \xe9 obrigat\xf3rio. "),e.qZA())}function Y(i,o){1&i&&(e.TgZ(0,"div",44),e._uU(1," O bairro \xe9 obrigat\xf3rio. "),e.qZA())}function S(i,o){1&i&&(e.TgZ(0,"div",44),e._uU(1," A cidade \xe9 obrigat\xf3ria. "),e.qZA())}function z(i,o){1&i&&(e.TgZ(0,"div",44),e._uU(1," O estado \xe9 obrigat\xf3rio. "),e.qZA())}let w=(()=>{var i;class o{constructor(t,n,r,a,l){this.fb=t,this.establishmentService=n,this.router=r,this.findCEPService=a,this.storage=l,this.imageName="Selecione uma foto",this.establishmentForm=this.fb.group({name:["",[u.kI.required]],cpfCnpj:["",[u.kI.required,U.validate]],description:["",[u.kI.required]],street:["",u.kI.required],number:["",u.kI.required],complement:[""],neighborhood:["",u.kI.required],city:["",u.kI.required],state:["",u.kI.required],zipCode:["",[u.kI.required,u.kI.pattern(/^[0-9]{5}-[0-9]{3}$/)]],phone:["",[u.kI.required,u.kI.pattern(/^\(\d{2}\)\s\d{4,5}-\d{4}$/)]],serviceType:["",[u.kI.required]],image:[""]})}onSubmit(){if(this.establishmentForm?.valid){const t=this.mapFormToEstablishment();this.establishmentService.create(t).subscribe({next:()=>{this.router.navigate(["/establishment"])}})}}mapFormToEstablishment(){return{name:this.establishmentForm?.get("name")?.value,cpfCnpj:this.establishmentForm?.get("cpfCnpj")?.value,description:this.establishmentForm?.get("description")?.value,address:{street:this.establishmentForm?.get("street")?.value,number:this.establishmentForm?.get("number")?.value,complement:this.establishmentForm?.get("complement")?.value,neighborhood:this.establishmentForm?.get("neighborhood")?.value,city:this.establishmentForm?.get("city")?.value,state:this.establishmentForm?.get("state")?.value,zipCode:this.establishmentForm?.get("zipCode")?.value},phone:this.establishmentForm?.get("phone")?.value,serviceType:this.establishmentForm?.get("serviceType")?.value,image:this.establishmentForm?.get("image")?.value}}searchCep(){const t=this.establishmentForm?.get("zipCode")?.value;this.findCEPService.getCep(t).subscribe(n=>{n&&this.populateAddressFields(n)})}populateAddressFields(t){this.establishmentForm.patchValue({street:t.logradouro,complement:t.complemento,neighborhood:t.bairro,city:t.localidade,state:t.uf,zipCode:t.cep})}uploadFile(t){const n=t.target.files[0],r=`uploads/${(new Date).getTime()}_${n.name}`,a=this.storage.ref(r);this.storage.upload(r,n).snapshotChanges().pipe((0,$.x)(()=>{a.getDownloadURL().subscribe(d=>{this.imageName=n.name,this.establishmentForm.get("image").setValue(d)})})).subscribe()}}return(i=o).\u0275fac=function(t){return new(t||i)(e.Y36(u.qu),e.Y36(y.d),e.Y36(_.F0),e.Y36(k),e.Y36(P.Q1))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-create-establishment"]],standalone:!0,features:[e.jDz],decls:87,vars:14,consts:[[1,"navbar"],[1,"navbar-left"],["routerLink","/establishment"],[1,"fas","fa-chevron-left","navbar-icon"],[1,"navbar-brand"],[1,"navbar-right"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name",1,"form-label"],["type","text","id","name","formControlName","name","placeholder","Digite o nome",1,"form-control"],["class","text-danger",4,"ngIf"],["for","cpfCnpj",1,"form-label"],["name","cpfCnpj","type","text","nccCpfCnpjValidator","","nccCpfCnpjMask","","type","text","id","cpfCnpj","formControlName","cpfCnpj","maxlength","16","placeholder","Digite o CPF ou CNPJ",1,"form-control"],["for","description",1,"form-label"],["id","description","formControlName","description","placeholder","Digite a descri\xe7\xe3o",1,"form-control"],["for","phone",1,"form-label"],["type","text","id","phone","formControlName","phone","placeholder","Digite o n\xfamero de telefone","appPhoneMask","","maxlength","15",1,"form-control"],["for","serviceType",1,"form-label"],["id","serviceType","formControlName","serviceType","aria-label","Selecione o tipo de servi\xe7o",1,"form-select"],["selected",""],["value","0"],["value","1"],["value","2"],["value","3"],[1,"file","mt-4"],["type","file","id","file","accept","image/*",1,"form-label",3,"change"],[1,"file-custom"],[2,"color","white"],["for","zipCode",1,"form-label"],["appCepMask","","type","text","id","zipCode","formControlName","zipCode","placeholder","Digite o CEP","required","",1,"form-control",3,"blur"],["for","street",1,"form-label"],["type","text","id","street","formControlName","street","placeholder","Digite o nome da Rua","required","",1,"form-control"],["for","number",1,"form-label"],["type","text","id","number","formControlName","number","placeholder","Digite o n\xfamero","required","",1,"form-control"],["for","complement",1,"form-label"],["type","text","id","complement","formControlName","complement","placeholder","Digite o complemento",1,"form-control"],["for","neighborhood",1,"form-label"],["type","text","id","neighborhood","formControlName","neighborhood","placeholder","Digite o Bairro","required","",1,"form-control"],["for","city",1,"form-label"],["type","text","id","city","formControlName","city","placeholder","Digite a cidade","required","",1,"form-control"],["for","state",1,"form-label"],["type","text","id","state","formControlName","state","placeholder","Digite o Estado","required","",1,"form-control"],[1,"d-flex","justify-content-center","mt-2","pb-2"],[1,"btn","btn-primary",3,"disabled","click"],[1,"text-danger"]],template:function(t,n){if(1&t&&(e.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),e._UZ(3,"i",3),e.qZA()(),e.TgZ(4,"label",4),e._uU(5,"Cadastrar estabelecimento"),e.qZA(),e._UZ(6,"div",5),e.qZA(),e.TgZ(7,"form",6),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(8,"div",7)(9,"label",8),e._uU(10,"Nome:"),e.qZA(),e._UZ(11,"input",9),e.YNc(12,N,2,0,"div",10),e.qZA(),e.TgZ(13,"div",7)(14,"label",11),e._uU(15,"CPF/CNPJ:"),e.qZA(),e._UZ(16,"input",12),e.YNc(17,M,2,0,"div",10),e.qZA(),e.TgZ(18,"div",7)(19,"label",13),e._uU(20,"Descri\xe7\xe3o:"),e.qZA(),e._UZ(21,"textarea",14),e.YNc(22,D,2,0,"div",10),e.qZA(),e.TgZ(23,"div",7)(24,"label",15),e._uU(25,"Telefone:"),e.qZA(),e._UZ(26,"input",16),e.YNc(27,V,2,0,"div",10),e.qZA(),e.TgZ(28,"div",7)(29,"label",17),e._uU(30,"Tipo de Servi\xe7o:"),e.qZA(),e.TgZ(31,"select",18)(32,"option",19),e._uU(33,"Selecione o tipo de servi\xe7o"),e.qZA(),e.TgZ(34,"option",20),e._uU(35,"Mecanica"),e.qZA(),e.TgZ(36,"option",21),e._uU(37,"Oficina"),e.qZA(),e.TgZ(38,"option",22),e._uU(39,"Funilaria"),e.qZA(),e.TgZ(40,"option",23),e._uU(41,"Autope\xe7as"),e.qZA()(),e.YNc(42,J,2,0,"div",10),e.qZA(),e.TgZ(43,"label",24)(44,"input",25),e.NdJ("change",function(a){return n.uploadFile(a)}),e.qZA(),e.TgZ(45,"span",26),e._uU(46),e.qZA()(),e._UZ(47,"hr",27),e.TgZ(48,"h3"),e._uU(49,"Endere\xe7o"),e.qZA(),e.TgZ(50,"div",7)(51,"label",28),e._uU(52,"CEP:"),e.qZA(),e.TgZ(53,"input",29),e.NdJ("blur",function(){return n.searchCep()}),e.qZA(),e.YNc(54,x,2,0,"div",10),e.qZA(),e.TgZ(55,"div",7)(56,"label",30),e._uU(57,"Rua:"),e.qZA(),e._UZ(58,"input",31),e.YNc(59,j,2,0,"div",10),e.qZA(),e.TgZ(60,"div",7)(61,"label",32),e._uU(62,"N\xfamero:"),e.qZA(),e._UZ(63,"input",33),e.YNc(64,O,2,0,"div",10),e.qZA(),e.TgZ(65,"div",7)(66,"label",34),e._uU(67,"Complemento:"),e.qZA(),e._UZ(68,"input",35),e.qZA(),e.TgZ(69,"div",7)(70,"label",36),e._uU(71,"Bairro:"),e.qZA(),e._UZ(72,"input",37),e.YNc(73,Y,2,0,"div",10),e.qZA(),e.TgZ(74,"div",7)(75,"label",38),e._uU(76,"Cidade:"),e.qZA(),e._UZ(77,"input",39),e.YNc(78,S,2,0,"div",10),e.qZA(),e.TgZ(79,"div",7)(80,"label",40),e._uU(81,"Estado:"),e.qZA(),e._UZ(82,"input",41),e.YNc(83,z,2,0,"div",10),e.qZA()(),e.TgZ(84,"div",42)(85,"button",43),e.NdJ("click",function(){return n.onSubmit()}),e._uU(86,"Cadastrar"),e.qZA()()),2&t){let r,a,l,d,p,h,g,f,b,v,C;e.xp6(7),e.Q6J("formGroup",n.establishmentForm),e.xp6(5),e.Q6J("ngIf",(null==(r=n.establishmentForm.get("name"))?null:r.invalid)&&(null==(r=n.establishmentForm.get("name"))?null:r.touched)),e.xp6(5),e.Q6J("ngIf",(null==(a=n.establishmentForm.get("cpfCnpj"))?null:a.invalid)&&(null==(a=n.establishmentForm.get("cpfCnpj"))?null:a.touched)),e.xp6(5),e.Q6J("ngIf",(null==(l=n.establishmentForm.get("description"))?null:l.invalid)&&(null==(l=n.establishmentForm.get("description"))?null:l.touched)),e.xp6(5),e.Q6J("ngIf",(null==(d=n.establishmentForm.get("phone"))?null:d.invalid)&&(null==(d=n.establishmentForm.get("phone"))?null:d.touched)),e.xp6(15),e.Q6J("ngIf",(null==(p=n.establishmentForm.get("serviceType"))?null:p.invalid)&&(null==(p=n.establishmentForm.get("serviceType"))?null:p.touched)),e.xp6(4),e.Oqu(n.imageName),e.xp6(8),e.Q6J("ngIf",(null==(h=n.establishmentForm.get("zipCode"))?null:h.invalid)&&(null==(h=n.establishmentForm.get("zipCode"))?null:h.touched)),e.xp6(5),e.Q6J("ngIf",(null==(g=n.establishmentForm.get("street"))?null:g.invalid)&&(null==(g=n.establishmentForm.get("street"))?null:g.touched)),e.xp6(5),e.Q6J("ngIf",(null==(f=n.establishmentForm.get("number"))?null:f.invalid)&&(null==(f=n.establishmentForm.get("number"))?null:f.touched)),e.xp6(9),e.Q6J("ngIf",(null==(b=n.establishmentForm.get("neighborhood"))?null:b.invalid)&&(null==(b=n.establishmentForm.get("neighborhood"))?null:b.touched)),e.xp6(5),e.Q6J("ngIf",(null==(v=n.establishmentForm.get("city"))?null:v.invalid)&&(null==(v=n.establishmentForm.get("city"))?null:v.touched)),e.xp6(5),e.Q6J("ngIf",(null==(C=n.establishmentForm.get("state"))?null:C.invalid)&&(null==(C=n.establishmentForm.get("state"))?null:C.touched)),e.xp6(2),e.Q6J("disabled",n.establishmentForm.invalid)}},dependencies:[F.ez,F.O5,_.Bz,_.rH,u.u5,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.Q7,u.nD,u.UX,u.sg,u.u,T.JF,q,E,A],styles:['.navbar[_ngcontent-%COMP%]{padding:8px 0}.navbar[_ngcontent-%COMP%]   .navbar-left[_ngcontent-%COMP%]{margin-left:10px}.navbar[_ngcontent-%COMP%]   .navbar-right[_ngcontent-%COMP%]{margin-right:10px}.navbar[_ngcontent-%COMP%]   .navbar-icon[_ngcontent-%COMP%]{font-size:25px;color:#000;padding:8px 0}.file[_ngcontent-%COMP%]{position:relative;display:inline-block;cursor:pointer;height:2.5rem}.file[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{min-width:14rem;margin:0;filter:alpha(opacity=0);opacity:0}.file-custom[_ngcontent-%COMP%]{position:absolute;top:0;right:0;left:0;z-index:5;height:2.5rem;padding:.5rem 1rem;line-height:1.5;color:#555;background-color:#fff;border:.075rem solid #ddd;border-radius:.25rem;box-shadow:inset 0 .2rem .4rem #0000000d;-webkit-user-select:none;user-select:none}.file-custom[_ngcontent-%COMP%]:before{position:absolute;top:-.075rem;right:-.075rem;bottom:-.075rem;z-index:6;display:block;content:"Selecionar";height:2.5rem;padding:.5rem 1rem;line-height:1.5;color:#555;background-color:#eee;border:.075rem solid #ddd;border-radius:0 .25rem .25rem 0}.file[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ .file-custom[_ngcontent-%COMP%]{box-shadow:0 0 0 .075rem #fff,0 0 0 .2rem #0074d9}']}),o})()}}]);