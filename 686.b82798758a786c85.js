"use strict";(self.webpackChunkska=self.webpackChunkska||[]).push([[686],{686:(S,v,r)=>{r.r(v),r.d(v,{CreateEstablishmentComponent:()=>L});var C=r(6814),o=r(95),f=r(3781),Z=r(4057),T=r(2244),A=r(6210),F=r(9862),U=r(1355),P=r(4716),q=r(975),e=r(5879),O=r(6775),M=r(6240),y=r(9758);function D(i,l){1&i&&(e.TgZ(0,"div",44),e._uU(1," Nome \xe9 obrigat\xf3rio. "),e.qZA())}function I(i,l){1&i&&(e.TgZ(0,"div",44),e._uU(1," Por favor, digite um CPF ou CNPJ v\xe1lido. "),e.qZA())}function N(i,l){1&i&&(e.TgZ(0,"div",44),e._uU(1," Descri\xe7\xe3o \xe9 obrigat\xf3ria. "),e.qZA())}function x(i,l){1&i&&(e.TgZ(0,"div",44),e._uU(1," Por favor, digite um n\xfamero de telefone v\xe1lido. "),e.qZA())}function J(i,l){1&i&&(e.TgZ(0,"div",44),e._uU(1," Tipo de servi\xe7o \xe9 obrigat\xf3rio. "),e.qZA())}function k(i,l){1&i&&(e.TgZ(0,"div",44),e._uU(1," Por favor, digite um CEP v\xe1lido. "),e.qZA())}function Y(i,l){1&i&&(e.TgZ(0,"div",44),e._uU(1," O nome da rua \xe9 obrigat\xf3rio. "),e.qZA())}function j(i,l){1&i&&(e.TgZ(0,"div",44),e._uU(1," O n\xfamero \xe9 obrigat\xf3rio. "),e.qZA())}function R(i,l){1&i&&(e.TgZ(0,"div",44),e._uU(1," O bairro \xe9 obrigat\xf3rio. "),e.qZA())}function z(i,l){1&i&&(e.TgZ(0,"div",44),e._uU(1," A cidade \xe9 obrigat\xf3ria. "),e.qZA())}function B(i,l){1&i&&(e.TgZ(0,"div",44),e._uU(1," O estado \xe9 obrigat\xf3rio. "),e.qZA())}let L=(()=>{var i;class l{constructor(n,t,a,s,u,m){this.fb=n,this.establishmentService=t,this.router=a,this.findCEPService=s,this.storage=u,this.alertService=m,this.imageName="Selecione uma foto",this.establishmentForm=this.fb.group({name:["",[o.kI.required]],cpfCnpj:["",[o.kI.required,U.K.validate]],description:["",[o.kI.required]],street:["",o.kI.required],number:["",o.kI.required],complement:[""],neighborhood:["",o.kI.required],city:["",o.kI.required],state:["",o.kI.required],zipCode:["",[o.kI.required,o.kI.pattern(/^[0-9]{5}-[0-9]{3}$/)]],phone:["",[o.kI.required,o.kI.pattern(/^\(\d{2}\)\s\d{4,5}-\d{4}$/)]],serviceType:["",[o.kI.required]],image:[""]})}onSubmit(){if(this.establishmentForm?.valid){const n=this.mapFormToEstablishment();this.establishmentService.create(n).subscribe({next:()=>{this.alertService.showAlert({isOpned:!0,message:"Estabelecimento criado com sucesso!",type:"success"}),this.router.navigate(["/establishment"])}})}}mapFormToEstablishment(){return{name:this.establishmentForm?.get("name")?.value,cpfCnpj:this.establishmentForm?.get("cpfCnpj")?.value,description:this.establishmentForm?.get("description")?.value,address:{street:this.establishmentForm?.get("street")?.value,number:this.establishmentForm?.get("number")?.value,complement:this.establishmentForm?.get("complement")?.value,neighborhood:this.establishmentForm?.get("neighborhood")?.value,city:this.establishmentForm?.get("city")?.value,state:this.establishmentForm?.get("state")?.value,zipCode:this.establishmentForm?.get("zipCode")?.value},phone:this.establishmentForm?.get("phone")?.value,serviceType:this.establishmentForm?.get("serviceType")?.value,image:this.establishmentForm?.get("image")?.value}}searchCep(){const n=this.establishmentForm?.get("zipCode")?.value;this.findCEPService.getCep(n).subscribe(t=>{t&&this.populateAddressFields(t)})}populateAddressFields(n){this.establishmentForm.patchValue({street:n.logradouro,complement:n.complemento,neighborhood:n.bairro,city:n.localidade,state:n.uf,zipCode:n.cep})}uploadFile(n){const t=n.target.files[0],a=`uploads/${(new Date).getTime()}_${t.name}`,s=this.storage.ref(a);this.storage.upload(a,t).snapshotChanges().pipe((0,P.x)(()=>{s.getDownloadURL().subscribe(m=>{this.imageName=t.name,this.establishmentForm.get("image").setValue(m)})})).subscribe()}}return(i=l).\u0275fac=function(n){return new(n||i)(e.Y36(o.qu),e.Y36(q.u),e.Y36(f.F0),e.Y36(O.j),e.Y36(M.Q1),e.Y36(y.c))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-create-establishment"]],standalone:!0,features:[e.jDz],decls:87,vars:14,consts:[[1,"navbar"],[1,"navbar-left"],["routerLink","/establishment"],[1,"fas","fa-chevron-left","navbar-icon"],[1,"navbar-brand"],[1,"navbar-right"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name",1,"form-label"],["type","text","id","name","formControlName","name","placeholder","Digite o nome",1,"form-control"],["class","text-danger",4,"ngIf"],["for","cpfCnpj",1,"form-label"],["name","cpfCnpj","type","text","nccCpfCnpjValidator","","nccCpfCnpjMask","","type","text","id","cpfCnpj","formControlName","cpfCnpj","maxlength","16","placeholder","Digite o CPF ou CNPJ",1,"form-control"],["for","description",1,"form-label"],["id","description","formControlName","description","placeholder","Digite a descri\xe7\xe3o",1,"form-control"],["for","phone",1,"form-label"],["type","text","id","phone","formControlName","phone","placeholder","Digite o n\xfamero de telefone","appPhoneMask","","maxlength","15",1,"form-control"],["for","serviceType",1,"form-label"],["id","serviceType","formControlName","serviceType","aria-label","Selecione o tipo de servi\xe7o",1,"form-select"],["selected",""],["value","0"],["value","1"],["value","2"],["value","3"],[1,"file","mt-4"],["type","file","id","file","accept","image/*",1,"form-label",3,"change"],[1,"file-custom"],[2,"color","white"],["for","zipCode",1,"form-label"],["appCepMask","","type","text","id","zipCode","formControlName","zipCode","placeholder","Digite o CEP","required","",1,"form-control",3,"blur"],["for","street",1,"form-label"],["type","text","id","street","formControlName","street","placeholder","Digite o nome da Rua","required","",1,"form-control"],["for","number",1,"form-label"],["type","text","id","number","formControlName","number","placeholder","Digite o n\xfamero","required","",1,"form-control"],["for","complement",1,"form-label"],["type","text","id","complement","formControlName","complement","placeholder","Digite o complemento",1,"form-control"],["for","neighborhood",1,"form-label"],["type","text","id","neighborhood","formControlName","neighborhood","placeholder","Digite o Bairro","required","",1,"form-control"],["for","city",1,"form-label"],["type","text","id","city","formControlName","city","placeholder","Digite a cidade","required","",1,"form-control"],["for","state",1,"form-label"],["type","text","id","state","formControlName","state","placeholder","Digite o Estado","required","",1,"form-control"],[1,"d-flex","justify-content-center","mt-2","pb-2"],[1,"btn","btn-primary",3,"disabled","click"],[1,"text-danger"]],template:function(n,t){if(1&n&&(e.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),e._UZ(3,"i",3),e.qZA()(),e.TgZ(4,"label",4),e._uU(5,"Cadastrar estabelecimento"),e.qZA(),e._UZ(6,"div",5),e.qZA(),e.TgZ(7,"form",6),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(8,"div",7)(9,"label",8),e._uU(10,"Nome:"),e.qZA(),e._UZ(11,"input",9),e.YNc(12,D,2,0,"div",10),e.qZA(),e.TgZ(13,"div",7)(14,"label",11),e._uU(15,"CPF/CNPJ:"),e.qZA(),e._UZ(16,"input",12),e.YNc(17,I,2,0,"div",10),e.qZA(),e.TgZ(18,"div",7)(19,"label",13),e._uU(20,"Descri\xe7\xe3o:"),e.qZA(),e._UZ(21,"textarea",14),e.YNc(22,N,2,0,"div",10),e.qZA(),e.TgZ(23,"div",7)(24,"label",15),e._uU(25,"Telefone:"),e.qZA(),e._UZ(26,"input",16),e.YNc(27,x,2,0,"div",10),e.qZA(),e.TgZ(28,"div",7)(29,"label",17),e._uU(30,"Tipo de Servi\xe7o:"),e.qZA(),e.TgZ(31,"select",18)(32,"option",19),e._uU(33,"Selecione o tipo de servi\xe7o"),e.qZA(),e.TgZ(34,"option",20),e._uU(35,"Mecanica"),e.qZA(),e.TgZ(36,"option",21),e._uU(37,"Oficina"),e.qZA(),e.TgZ(38,"option",22),e._uU(39,"Funilaria"),e.qZA(),e.TgZ(40,"option",23),e._uU(41,"Autope\xe7as"),e.qZA()(),e.YNc(42,J,2,0,"div",10),e.qZA(),e.TgZ(43,"label",24)(44,"input",25),e.NdJ("change",function(s){return t.uploadFile(s)}),e.qZA(),e.TgZ(45,"span",26),e._uU(46),e.qZA()(),e._UZ(47,"hr",27),e.TgZ(48,"h3"),e._uU(49,"Endere\xe7o"),e.qZA(),e.TgZ(50,"div",7)(51,"label",28),e._uU(52,"CEP:"),e.qZA(),e.TgZ(53,"input",29),e.NdJ("blur",function(){return t.searchCep()}),e.qZA(),e.YNc(54,k,2,0,"div",10),e.qZA(),e.TgZ(55,"div",7)(56,"label",30),e._uU(57,"Rua:"),e.qZA(),e._UZ(58,"input",31),e.YNc(59,Y,2,0,"div",10),e.qZA(),e.TgZ(60,"div",7)(61,"label",32),e._uU(62,"N\xfamero:"),e.qZA(),e._UZ(63,"input",33),e.YNc(64,j,2,0,"div",10),e.qZA(),e.TgZ(65,"div",7)(66,"label",34),e._uU(67,"Complemento:"),e.qZA(),e._UZ(68,"input",35),e.qZA(),e.TgZ(69,"div",7)(70,"label",36),e._uU(71,"Bairro:"),e.qZA(),e._UZ(72,"input",37),e.YNc(73,R,2,0,"div",10),e.qZA(),e.TgZ(74,"div",7)(75,"label",38),e._uU(76,"Cidade:"),e.qZA(),e._UZ(77,"input",39),e.YNc(78,z,2,0,"div",10),e.qZA(),e.TgZ(79,"div",7)(80,"label",40),e._uU(81,"Estado:"),e.qZA(),e._UZ(82,"input",41),e.YNc(83,B,2,0,"div",10),e.qZA()(),e.TgZ(84,"div",42)(85,"button",43),e.NdJ("click",function(){return t.onSubmit()}),e._uU(86,"Cadastrar"),e.qZA()()),2&n){let a,s,u,m,d,p,c,_,h,g,b;e.xp6(7),e.Q6J("formGroup",t.establishmentForm),e.xp6(5),e.Q6J("ngIf",(null==(a=t.establishmentForm.get("name"))?null:a.invalid)&&(null==(a=t.establishmentForm.get("name"))?null:a.touched)),e.xp6(5),e.Q6J("ngIf",(null==(s=t.establishmentForm.get("cpfCnpj"))?null:s.invalid)&&(null==(s=t.establishmentForm.get("cpfCnpj"))?null:s.touched)),e.xp6(5),e.Q6J("ngIf",(null==(u=t.establishmentForm.get("description"))?null:u.invalid)&&(null==(u=t.establishmentForm.get("description"))?null:u.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=t.establishmentForm.get("phone"))?null:m.invalid)&&(null==(m=t.establishmentForm.get("phone"))?null:m.touched)),e.xp6(15),e.Q6J("ngIf",(null==(d=t.establishmentForm.get("serviceType"))?null:d.invalid)&&(null==(d=t.establishmentForm.get("serviceType"))?null:d.touched)),e.xp6(4),e.Oqu(t.imageName),e.xp6(8),e.Q6J("ngIf",(null==(p=t.establishmentForm.get("zipCode"))?null:p.invalid)&&(null==(p=t.establishmentForm.get("zipCode"))?null:p.touched)),e.xp6(5),e.Q6J("ngIf",(null==(c=t.establishmentForm.get("street"))?null:c.invalid)&&(null==(c=t.establishmentForm.get("street"))?null:c.touched)),e.xp6(5),e.Q6J("ngIf",(null==(_=t.establishmentForm.get("number"))?null:_.invalid)&&(null==(_=t.establishmentForm.get("number"))?null:_.touched)),e.xp6(9),e.Q6J("ngIf",(null==(h=t.establishmentForm.get("neighborhood"))?null:h.invalid)&&(null==(h=t.establishmentForm.get("neighborhood"))?null:h.touched)),e.xp6(5),e.Q6J("ngIf",(null==(g=t.establishmentForm.get("city"))?null:g.invalid)&&(null==(g=t.establishmentForm.get("city"))?null:g.touched)),e.xp6(5),e.Q6J("ngIf",(null==(b=t.establishmentForm.get("state"))?null:b.invalid)&&(null==(b=t.establishmentForm.get("state"))?null:b.touched)),e.xp6(2),e.Q6J("disabled",t.establishmentForm.invalid)}},dependencies:[C.ez,C.O5,f.Bz,f.rH,o.u5,o._Y,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.JL,o.Q7,o.nD,o.UX,o.sg,o.u,F.JF,T.o,A.v,Z.F],styles:['.navbar[_ngcontent-%COMP%]{padding:8px 0}.navbar[_ngcontent-%COMP%]   .navbar-left[_ngcontent-%COMP%]{margin-left:10px}.navbar[_ngcontent-%COMP%]   .navbar-right[_ngcontent-%COMP%]{margin-right:10px}.navbar[_ngcontent-%COMP%]   .navbar-icon[_ngcontent-%COMP%]{font-size:25px;color:#000;padding:8px 0}.file[_ngcontent-%COMP%]{position:relative;display:inline-block;cursor:pointer;height:2.5rem}.file[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{min-width:14rem;margin:0;filter:alpha(opacity=0);opacity:0}.file-custom[_ngcontent-%COMP%]{position:absolute;top:0;right:0;left:0;z-index:5;height:2.5rem;padding:.5rem 1rem;line-height:1.5;color:#555;background-color:#fff;border:.075rem solid #ddd;border-radius:.25rem;box-shadow:inset 0 .2rem .4rem #0000000d;-webkit-user-select:none;user-select:none}.file-custom[_ngcontent-%COMP%]:before{position:absolute;top:-.075rem;right:-.075rem;bottom:-.075rem;z-index:6;display:block;content:"Selecionar";height:2.5rem;padding:.5rem 1rem;line-height:1.5;color:#555;background-color:#eee;border:.075rem solid #ddd;border-radius:0 .25rem .25rem 0}.file[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus ~ .file-custom[_ngcontent-%COMP%]{box-shadow:0 0 0 .075rem #fff,0 0 0 .2rem #0074d9}']}),l})()}}]);