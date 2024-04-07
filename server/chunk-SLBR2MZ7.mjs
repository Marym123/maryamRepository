import './polyfills.server.mjs';
import{A as b,B as F,C as v,D as y,E as W,F as l,G as I,H as k,I as S,J as x,K as $,L as be,N as Me,S as Ae,U as Ee,V as se,X as we,Y as q,Z as Fe,_ as Ie,a as ye,b as _e,ba as ke,c as Ce,d as U,e as ie,f as m,fa as Se,g as E,ga as xe,h as H,i as h,ia as z,j as g,ja as N,k as M,ka as ae,l as Ve,m as f,n as p,o as ne,p as re,q as L,r as d,s as u,t as oe,u as w,v as P,w as D,x as De,y as a,z as s}from"./chunk-YZZOU64U.mjs";import{a as V,b as A}from"./chunk-VVCT4QZE.mjs";var O=(()=>{let e=class e{constructor(){this.tasks=[{name:"hci",description:"hciiii",dueDate:"4/5/2024",checked:!1},{name:"mariam",description:"mariammm",dueDate:"1/1/2025",checked:!1}]}deletetask(i){this.tasks.splice(i,1)}saveTask(i,r,o,c){this.tasks.push({name:i,description:r,dueDate:o,checked:c})}editTask(i,r){this.tasks[i]=r}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=ie({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Re=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(u(oe),u(re))},e.\u0275dir=M({type:e});let t=e;return t})(),Ue=(()=>{let e=class e extends Re{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ne(e)))(o||e)}})(),e.\u0275dir=M({type:e,features:[w]});let t=e;return t})(),fe=new E(""),st={provide:fe,useExisting:U(()=>pe),multi:!0},pe=(()=>{let e=class e extends Ue{writeValue(i){this.setProperty("checked",i)}};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ne(e)))(o||e)}})(),e.\u0275dir=M({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(r,o){r&1&&v("change",function(C){return o.onChange(C.target.checked)})("blur",function(){return o.onTouched()})},features:[$([st]),w]});let t=e;return t})(),at={provide:fe,useExisting:U(()=>K),multi:!0};function lt(){let t=se()?se().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var ut=new E(""),K=(()=>{let e=class e extends Re{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!lt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(u(oe),u(re),u(ut,8))},e.\u0275dir=M({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&v("input",function(C){return o._handleInput(C.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(C){return o._compositionEnd(C.target.value)})},features:[$([at]),w]});let t=e;return t})();var dt=new E(""),ct=new E("");function He(t){return t!=null}function Le(t){return Me(t)?ye(t):t}function We(t){let e={};return t.forEach(n=>{e=n!=null?V(V({},e),n):e}),Object.keys(e).length===0?null:e}function $e(t,e){return e.map(n=>n(t))}function ht(t){return!t.validate}function qe(t){return t.map(e=>ht(e)?e:n=>e.validate(n))}function ft(t){if(!t)return null;let e=t.filter(He);return e.length==0?null:function(n){return We($e(n,e))}}function ze(t){return t!=null?ft(qe(t)):null}function pt(t){if(!t)return null;let e=t.filter(He);return e.length==0?null:function(n){let i=$e(n,e).map(Le);return Ce(i).pipe(_e(We))}}function Ze(t){return t!=null?pt(qe(t)):null}function Ne(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function mt(t){return t._rawValidators}function gt(t){return t._rawAsyncValidators}function ue(t){return t?Array.isArray(t)?t:[t]:[]}function X(t,e){return Array.isArray(t)?t.includes(e):t===e}function Oe(t,e){let n=ue(e);return ue(t).forEach(r=>{X(n,r)||n.push(r)}),n}function Te(t,e){return ue(e).filter(n=>!X(t,n))}var Y=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ze(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ze(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},de=class extends Y{get formDirective(){return null}get path(){return null}},B=class extends Y{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},ce=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},vt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},di=A(V({},vt),{"[class.ng-submitted]":"isSubmitted"}),J=(()=>{let e=class e extends ce{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(u(B,2))},e.\u0275dir=M({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&De("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[w]});let t=e;return t})();var j="VALID",Z="INVALID",T="PENDING",G="DISABLED";function yt(t){return(Q(t)?t.validators:t)||null}function _t(t){return Array.isArray(t)?ze(t):t||null}function Ct(t,e){return(Q(e)?e.asyncValidators:t)||null}function Vt(t){return Array.isArray(t)?Ze(t):t||null}function Q(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var he=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===j}get invalid(){return this.status===Z}get pending(){return this.status==T}get disabled(){return this.status===G}get enabled(){return this.status!==G}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Oe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Oe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Te(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Te(e,this._rawAsyncValidators))}hasValidator(e){return X(this._rawValidators,e)}hasAsyncValidator(e){return X(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=T,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=G,this.errors=null,this._forEachChild(i=>{i.disable(A(V({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(A(V({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=j,this._forEachChild(i=>{i.enable(A(V({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(A(V({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===j||this.status===T)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?G:j}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=T,this._hasOwnPendingAsyncValidator=!0;let n=Le(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new L,this.statusChanges=new L}_calculateStatus(){return this._allControlsDisabled()?G:this.errors?Z:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(T)?T:this._anyControlsHaveStatus(Z)?Z:j}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=_t(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Vt(this._rawAsyncValidators)}};var Xe=new E("CallSetDisabledState",{providedIn:"root",factory:()=>me}),me="always";function Dt(t,e){return[...e.path,t]}function bt(t,e,n=me){At(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Et(t,e),Ft(t,e),wt(t,e),Mt(t,e)}function Pe(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Mt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function At(t,e){let n=mt(t);e.validator!==null?t.setValidators(Ne(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=gt(t);e.asyncValidator!==null?t.setAsyncValidators(Ne(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Pe(e._rawValidators,r),Pe(e._rawAsyncValidators,r)}function Et(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ye(t,e)})}function wt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ye(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Ye(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ft(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function It(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function kt(t){return Object.getPrototypeOf(t.constructor)===Ue}function St(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===K?n=o:kt(o)?i=o:r=o}),r||i||n||null}function je(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ge(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var xt=class extends he{constructor(e=null,n,i){super(yt(n),Ct(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Q(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ge(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){je(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){je(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ge(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Nt={provide:B,useExisting:U(()=>R)},Be=Promise.resolve(),R=(()=>{let e=class e extends B{constructor(i,r,o,c,C,te){super(),this._changeDetectorRef=C,this.callSetDisabledState=te,this.control=new xt,this._registered=!1,this.name="",this.update=new L,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=St(this,c)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),It(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){bt(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Be.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&Ee(r);Be.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?Dt(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(u(de,9),u(dt,10),u(ct,10),u(fe,10),u(Ae,8),u(Xe,8))},e.\u0275dir=M({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[H.None,"disabled","isDisabled"],model:[H.None,"ngModel","model"],options:[H.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[$([Nt]),w,Ve]});let t=e;return t})();var Ot=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=m({});let t=e;return t})();var Ke=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Xe,useValue:i.callSetDisabledState??me}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=m({imports:[Ot]});let t=e;return t})();var Pt=t=>["/edit-task",t];function jt(t,e){t&1&&(a(0,"div")(1,"p",3),l(2," No tasks "),s()())}function Gt(t,e){if(t&1){let n=F();a(0,"li",6)(1,"strong"),l(2," Name : "),s(),l(3),b(4,"br"),a(5,"strong"),l(6," Description : "),s(),l(7),b(8,"br"),a(9,"strong"),l(10," DueDate : "),s(),l(11),b(12,"br"),a(13,"button",7),v("click",function(){let r=f(n).index,o=y(2);return p(o.deleteTask(r))}),l(14,"Delete"),s(),a(15,"strong"),l(16," Status : "),s(),a(17,"input",8),x("ngModelChange",function(r){let o=f(n).$implicit;return S(o.checked,r)||(o.checked=r),p(r)}),s(),a(18,"div")(19,"a",9),l(20,"Show Task"),s()()()}if(t&2){let n=e.$implicit,i=e.index;d(3),I("",n.name," "),d(4),I(" : ",n.description," "),d(4),I(" : ",n.dueDate," "),d(6),k("ngModel",n.checked),d(2),D("routerLink",be(5,Pt,i))}}function Bt(t,e){if(t&1&&(a(0,"div")(1,"ul",4),P(2,Gt,21,7,"li",5),s()()),t&2){let n=y();d(2),D("ngForOf",n.tasksService.tasks)}}var Qe=(()=>{let e=class e{constructor(i){this.tasksService=i}deleteTask(i){this.tasksService.deletetask(i)}};e.\u0275fac=function(r){return new(r||e)(u(O))},e.\u0275cmp=h({type:e,selectors:[["app-home"]],decls:6,vars:2,consts:[[1,"container"],["routerLink","/add-task",1,"add-task-button","btn","btn-secondary"],[4,"ngIf"],[1,"alert","alert-danger"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"del-button","btn","btn-danger",3,"click"],["type","checkbox","name","Task status",3,"ngModelChange","ngModel"],[1,"btn","btn-secondary",3,"routerLink"]],template:function(r,o){r&1&&(a(0,"div",0)(1,"div")(2,"a",1),l(3,"Add Task"),s()(),P(4,jt,3,0,"div",2)(5,Bt,3,1,"div",2),s()),r&2&&(d(4),D("ngIf",o.tasksService.tasks.length==0),d(),D("ngIf",o.tasksService.tasks.length!=0))},dependencies:[we,q,N,pe,J,R],styles:[".del-button[_ngcontent-%COMP%]{float:right}.add-task-button[_ngcontent-%COMP%]{margin-bottom:10px;margin-top:10px}"]});let t=e;return t})();var et=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-not-found"]],decls:2,vars:0,template:function(r,o){r&1&&(a(0,"p"),l(1,"not-found works!"),s())}});let t=e;return t})();var tt=(()=>{let e=class e{constructor(i,r){this.taskService=i,this.router=r}saveTask(i,r,o){this.taskService.saveTask(i.value,r.value,o.value,!1),this.router.navigate(["/"])}};e.\u0275fac=function(r){return new(r||e)(u(O),u(z))},e.\u0275cmp=h({type:e,selectors:[["app-add-task"]],decls:13,vars:0,consts:[["taskName",""],["taskDescription",""],["taskDueDate",""],[1,"container"],[1,"text-center"],["type","text","placeholder","write the task name here",1,"form-control"],["placeholder","write the Decription",1,"form-control"],["type","text","placeholder","write the task due Date here",1,"form-control"],[1,"btn","btn-success",3,"click"],["routerLink","/",1,"btn","btn-danger"]],template:function(r,o){if(r&1){let c=F();a(0,"div",3)(1,"h2",4),l(2,"Add A New Task"),s(),b(3,"input",5,0)(5,"textarea",6,1)(7,"input",7,2),a(9,"button",8),v("click",function(){f(c);let te=W(4),rt=W(6),ot=W(8);return p(o.saveTask(te,rt,ot))}),l(10,"Save"),s(),a(11,"a",9),l(12," Cancel"),s()()}},dependencies:[N]});let t=e;return t})();function Rt(t,e){t&1&&(a(0,"div")(1,"p",2),l(2," there is no task id "),s()())}function Ut(t,e){if(t&1){let n=F();a(0,"div")(1,"h2",3),l(2),s(),a(3,"input",4),x("ngModelChange",function(r){f(n);let o=y();return S(o.task.name,r)||(o.task.name=r),p(r)}),s(),a(4,"textarea",5),x("ngModelChange",function(r){f(n);let o=y();return S(o.task.description,r)||(o.task.description=r),p(r)}),s(),a(5,"input",6),x("ngModelChange",function(r){f(n);let o=y();return S(o.task.dueDate,r)||(o.task.dueDate=r),p(r)}),s(),a(6,"button",7),v("click",function(){f(n);let r=y();return p(r.editTask())}),l(7,"Edit task"),s(),a(8,"a",8),l(9," Cancel"),s()()}if(t&2){let n=y();d(2),I(" Detials of ",n.task.name," "),d(),k("ngModel",n.task.name),d(),k("ngModel",n.task.description),d(),k("ngModel",n.task.dueDate)}}var ve=(()=>{let e=class e{constructor(i,r,o){this.route=i,this.taskService=r,this.router=o}ngOnInit(){this.taskId=this.route.snapshot.paramMap.get("id"),this.task=this.taskService.tasks[this.taskId]}editTask(){this.taskService.editTask(this.taskId,this.task),this.router.navigate(["/"])}};e.\u0275fac=function(r){return new(r||e)(u(Se),u(O),u(z))},e.\u0275cmp=h({type:e,selectors:[["app-edit-task"]],decls:3,vars:2,consts:[[1,"container"],[4,"ngIf"],[1,"alert","alert-danger"],[1,"text-center"],["type","text","placeholder","Task name",1,"form-control",3,"ngModelChange","ngModel"],["type","text","placeholder","Task description",1,"form-control",3,"ngModelChange","ngModel"],["type","text","placeholder","Task due date",1,"form-control",3,"ngModelChange","ngModel"],[1,"btn","btn-primary",3,"click"],["routerLink","/",1,"btn","btn-info"]],template:function(r,o){r&1&&(a(0,"div",0),P(1,Rt,3,0,"div",1)(2,Ut,10,4,"div",1),s()),r&2&&(d(),D("ngIf",!o.taskId),d(),D("ngIf",o.taskId))},dependencies:[q,N,K,J,R]});let t=e;return t})();var Ht=[{path:"",component:Qe},{path:"add-task",component:tt},{path:"edit-task",component:ve},{path:"edit-task/:id",component:ve},{path:"**",component:et}],it=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=m({imports:[ae.forRoot(Ht),ae]});let t=e;return t})();var ee=(()=>{let e=class e{constructor(){this.title="Hci"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(r,o){r&1&&b(0,"router-outlet")},dependencies:[xe]});let t=e;return t})();var nt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e,bootstrap:[ee]}),e.\u0275inj=m({providers:[Ie()],imports:[Fe,it,Ke]});let t=e;return t})();var Lt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e,bootstrap:[ee]}),e.\u0275inj=m({imports:[nt,ke]});let t=e;return t})();export{Lt as a};
