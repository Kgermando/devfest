(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+GDw":function(n,t,l){"use strict";l.r(t);var u=l("CcnG"),e={title:"Admin"},o={title:"Call For Papers"},a=function(){return function(){}}();function r(n){return n.length>=1&&n[0].path.match(/\d{4}/)?{consumed:[n[0]]}:null}var i=l("pMnS"),c=l("ZYCi"),d=l("hja+"),p=function(){return function(n,t){n.snapshot.url.length>0&&n.snapshot.url[0].path.match(/\d{4}/)&&t.setYear(parseInt(n.snapshot.url[0].path,10))}}(),h=u.pb({encapsulation:2,styles:[],data:{}});function s(n){return u.Lb(0,[(n()(),u.rb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u.qb(1,212992,null,0,c.q,[c.b,u.Q,u.j,[8,null],u.h],null,null)],function(n,t){n(t,1,0)},null)}function f(n){return u.Lb(0,[(n()(),u.rb(0,0,null,null,1,"ng-component",[],null,null,null,s,h)),u.qb(1,49152,null,0,p,[c.a,d.a],null,null)],null,null)}var b=u.nb("ng-component",p,f,{},{},[]),m=l("Ip0R");l.d(t,"AuthenticatedModuleNgFactory",function(){return y});var y=u.ob(a,[],function(n){return u.yb([u.zb(512,u.j,u.db,[[8,[i.a,b]],[3,u.j],u.y]),u.zb(4608,m.n,m.m,[u.v,[2,m.w]]),u.zb(1073742336,m.c,m.c,[]),u.zb(1073742336,c.p,c.p,[[2,c.v],[2,c.m]]),u.zb(1073742336,a,a,[]),u.zb(1024,c.k,function(){return[[{matcher:r,component:p,loadChildren:"./authenticated.module#AuthenticatedModule"},{path:"admin",loadChildren:"../admin/admin.module#AdminModule",data:e},{path:"cfp",loadChildren:"../cfp/cfp.module#CFPModule",data:o},{path:"",loadChildren:"../main/main.module#MainModule"}]]},[])])})},"hja+":function(n,t,l){"use strict";l.d(t,"a",function(){return o});var u=l("AytR"),e=l("CcnG"),o=function(){function n(){this.reset()}return n.prototype.setYear=function(n){this.year=n},n.prototype.reset=function(){this.year=u.a.defaultYear},n.ngInjectableDef=e.U({factory:function(){return new n},token:n,providedIn:"root"}),n}()}}]);