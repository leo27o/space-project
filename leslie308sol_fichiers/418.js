(self.webpackChunkwebapp=self.webpackChunkwebapp||[]).push([[418],{10418:(e,t,a)=>{"use strict";a.r(t),a.d(t,{SpaHostModule:()=>g});var n=a(1560),r=a(57053),i=a(88002),s=a(12195);class o{canDeactivate(e,t,a,n){return(null==e?void 0:e.appName)!==this.extractAppDataFromRouteTree(n.root)&&e?e.unmount().pipe((0,i.U)((e=>!0))):(null==e||e.updateRouterDataParams(n.root.children[0]),!0)}extractAppDataFromRouteTree(e){return e.params&&e.params.addonUUID?e.params.addonUUID:e.children.length?e.children.map((e=>this.extractAppDataFromRouteTree(e))).find((e=>null!==e)):null}}o.ɵfac=function(e){return new(e||o)},o.ɵprov=s["ɵɵdefineInjectable"]({token:o,factory:o.ɵfac,providedIn:"root"});var d=a(87259),p=a(69412),u=a(25917),c=a(68307);class h{constructor(){this.loadedParcels={}}get parcels(){return this.loadedParcels}mount(e,t){return(0,p.D)(System.import(e)).pipe((0,c.b)((a=>{this.loadedParcels[e]||(this.loadedParcels[e]=(0,d.BP)(a,t))})))}unmount(e){return this.loadedParcels[e]?(0,p.D)(this.loadedParcels[e].unmount()).pipe((0,c.b)((()=>delete this.loadedParcels[e]))):(0,u.of)(!0)}update(e,t){const a=this.loadedParcels[e];return a&&a.update?(0,p.D)(a.update({addon:t.addon,user:t.user,route:t.route})).pipe((0,c.b)((()=>null))):(0,u.of)(null)}}h.ɵfac=function(e){return new(e||h)},h.ɵprov=s["ɵɵdefineInjectable"]({token:h,factory:h.ɵfac,providedIn:"root"});var l=a(44022);const m=["appContainer"];class f{constructor(e,t,a,n,r){this.singleSpaService=e,this.renderer=t,this.router=a,this.route=n,this.user=r,this.addPadding=!0}setPaddingFromRouteSnapshot(e){var t;(null==e?void 0:e.data)&&(this.addPadding=null===(t=e.data.addPadding)||void 0===t||t,this.renderer.setStyle(this.appContainerRef.nativeElement,"padding-inline",this.addPadding?"1rem":"0"))}ngOnInit(){this.route.params.subscribe((e=>{this.user.getLoggedInUser().then((e=>{if(this.oidcUser=e,this.route.pathFromRoot.forEach((e=>{this.setPaddingFromRouteSnapshot(e.snapshot);const t=e.snapshot.data;if(t.AppName&&t.Addon)return this.appName=t.AppName,this.appData=t.Addon,void(this.routeSnapshot=this.route.snapshot)})),this.appName&&this.appData){this.singleSpaService.parcels[this.appName]?this.update().subscribe():this.mount().subscribe()}}))}))}mount(){return this.singleSpaService.mount(this.appName,{domElement:this.appContainerRef.nativeElement,addon:this.appData,user:this.oidcUser,route:this.routeSnapshot})}unmount(){return this.singleSpaService.unmount(this.appName)}update(){return this.singleSpaService.update(this.appName,{domElement:this.appContainerRef.nativeElement,addon:this.appData,user:this.oidcUser,route:this.routeSnapshot})}updateRouterDataParams(e){this.setPaddingFromRouteSnapshot(e)}}f.ɵfac=function(e){return new(e||f)(s["ɵɵdirectiveInject"](h),s["ɵɵdirectiveInject"](s.Renderer2),s["ɵɵdirectiveInject"](n.Router),s["ɵɵdirectiveInject"](n.ActivatedRoute),s["ɵɵdirectiveInject"](l.KD))},f.ɵcmp=s["ɵɵdefineComponent"]({type:f,selectors:[["app-spa-host"]],viewQuery:function(e,t){if(1&e&&s["ɵɵviewQuery"](m,7),2&e){let e;s["ɵɵqueryRefresh"](e=s["ɵɵloadQuery"]())&&(t.appContainerRef=e.first)}},decls:2,vars:0,consts:[[2,"height","inherit"],["appContainer",""]],template:function(e,t){1&e&&s["ɵɵelement"](0,"div",0,1)},styles:["[_nghost-%COMP%] { width:100%; height: inherit }"],changeDetection:0});const v=[{path:"",canDeactivate:[o],component:f}];class g{}g.ɵfac=function(e){return new(e||g)},g.ɵmod=s["ɵɵdefineNgModule"]({type:g}),g.ɵinj=s["ɵɵdefineInjector"]({providers:[o],imports:[[r.CommonModule,n.RouterModule.forChild(v)]]})}}]);