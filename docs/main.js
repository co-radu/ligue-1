"use strict";
(self["webpackChunkl1_app"] = self["webpackChunkl1_app"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _calendar_results_calendar_results_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-results/calendar-results.component */ 3059);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 7205);
/* harmony import */ var _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ranking/ranking.component */ 8093);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [{
  path: 'ranking',
  component: _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_2__.RankingComponent
}, {
  path: 'calendar_results',
  component: _calendar_results_calendar_results_component__WEBPACK_IMPORTED_MODULE_0__.CalendarResultsComponent
}, {
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/fr */ 8384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);





function AppComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.openMobileSidenav());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function AppComponent_div_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 9)(1, "div", 10)(2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_template_4_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.redirectTo("lfp"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " LFP.FR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_template_4_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.redirectTo("fff"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " FFF.FR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_template_4_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.redirectTo("linkedin"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " LINKEDIN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_template_4_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.redirectTo("github"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " GITHUB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16)(15, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_template_4_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.redirectTo("home"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " ACCUEIL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_template_4_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.redirectTo("ranking"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " CLASSEMENT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_0_ng_template_4_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.redirectTo("calendar_results"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " CALENDRIER / R\u00C9SULTATS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function AppComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_div_0_Template_div_resize_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.onResize($event));
    }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_0_div_3_Template, 3, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_0_ng_template_4_Template, 24, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.windowWidth <= 800)("ngIfElse", _r4);
  }
}
function AppComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.closeMobileSidenav());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " X ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 25)(6, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_1_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.redirectTo("home"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ACCUEIL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.redirectTo("ranking"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " CLASSEMENT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_1_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r22.redirectTo("calendar_results"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " CALENDRIER / R\u00C9SULTATS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_1_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.redirectTo("lfp"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " LFP.FR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_1_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r24.redirectTo("fff"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " FFF.FR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
(0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2__["default"], 'fr');
class AppComponent {
  constructor(router) {
    this.router = router;
    this.windowWidth = window.innerWidth;
    this.mobileSidenavIsOpened = false;
  }
  redirectTo(destination) {
    switch (destination) {
      case 'lfp':
        window.open('https://www.lfp.fr/fr-FR', '_blank');
        break;
      case 'fff':
        window.open('https://www.fff.fr/?home', '_blank');
        break;
      case 'linkedin':
        window.open('https://linkedin.com/in/corentin-radureau-93289a139', '_blank');
        break;
      case 'github':
        window.open('https://github.com/co-radu', '_blank');
        break;
      case 'home':
        this.router.navigate(['']);
        break;
      case 'ranking':
        this.router.navigate(['/ranking']);
        break;
      case 'calendar_results':
        this.router.navigate(['/calendar_results']);
        break;
    }
    if (this.mobileSidenavIsOpened === true) {
      this.mobileSidenavIsOpened = false;
    }
  }
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }
  openMobileSidenav() {
    this.mobileSidenavIsOpened = true;
  }
  closeMobileSidenav() {
    this.mobileSidenavIsOpened = false;
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "header", 3, "resize"], ["src", "assets/ligue1_logo.png", 1, "header__logo"], ["class", "header__mobileBar", 4, "ngIf", "ngIfElse"], [1, "background"], [1, "header__mobileBar"], [1, "header__mobileBar__button", 3, "click"], ["src", "../assets/menu_icon.png", 1, "header__mobileBar__button__icon"], [1, "header__bar"], [1, "header__bar__socialBar"], ["type", "button", 1, "header__bar__socialBar__button", 3, "click"], ["src", "../assets/lfp_logo.jpg", 1, "header__bar__socialBar__button__icon"], ["src", "../assets/fff_logo.png", 1, "header__bar__socialBar__button__icon"], ["src", "../assets/linkedin_logo.png", 1, "header__bar__socialBar__button__icon"], ["src", "../assets/github_logo.png", 1, "header__bar__socialBar__button__icon"], [1, "header__bar__toolbar"], [1, "header__bar__toolbar__button", 3, "click"], ["src", "../assets/home_icon.png", 1, "header__bar__toolbar__button__icon"], ["src", "../assets/ranking_icon.png", 1, "header__bar__toolbar__button__icon"], ["src", "../assets/calendar_icon.png", 1, "header__bar__toolbar__button__icon"], [1, "mobileSidenav"], [1, "mobileSidenav__header"], ["src", "assets/ligue1_logo.png", 1, "mobileSidenav__header__logo"], [1, "mobileSidenav__header__closeButton", 3, "click"], [1, "mobileSidenav__toolbar"], [1, "mobileSidenav__toolbar__button", 3, "click"], ["src", "../assets/home_icon.png", 1, "mobileSidenav__toolbar__button__icon"], ["src", "../assets/ranking_icon.png", 1, "mobileSidenav__toolbar__button__icon"], ["src", "../assets/calendar_icon.png", 1, "mobileSidenav__toolbar__button__icon"], ["type", "button", 1, "mobileSidenav__toolbar__button", 3, "click"], ["src", "../assets/lfp_logo.jpg", 1, "mobileSidenav__toolbar__button__icon"], ["src", "../assets/fff_logo.png", 1, "mobileSidenav__toolbar__button__icon__fff"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 8, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 21, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileSidenavIsOpened == false)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  styles: [".header[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  width: 100%;\n  background: none;\n}\n\n.header__logo[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.header__bar[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.header__bar__socialBar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  height: 50%;\n  background-color: #091c3e;\n}\n\n.header__bar__toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  height: 50%;\n  background-color: #07c26b;\n}\n\n.header__bar__socialBar__button[_ngcontent-%COMP%], .header__bar__toolbar__button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-weight: bold;\n  margin-left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header__bar__socialBar__button__icon[_ngcontent-%COMP%], .header__bar__toolbar__button__icon[_ngcontent-%COMP%] {\n  margin: 0 8px 0 0;\n  height: 25px;\n}\n\n.header__bar__socialBar__button[_ngcontent-%COMP%]:focus, .header__bar__toolbar__button[_ngcontent-%COMP%]:focus, .header__mobileBar__button[_ngcontent-%COMP%]:focus, .mobileSidenav__header__closeButton[_ngcontent-%COMP%]:focus, .mobileSidenav__toolbar__button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.header__bar__socialBar__button[_ngcontent-%COMP%]:last-child {\n  margin-right: 15px;\n}\n\n.header__bar__socialBar__button[_ngcontent-%COMP%]:hover, .mobileSidenav__toolbar__button[_ngcontent-%COMP%]:hover {\n  color: #07c26b;\n}\n\n.header__bar__toolbar__button[_ngcontent-%COMP%]:hover {\n  color: #091c3e;\n}\n\n.background[_ngcontent-%COMP%] {\n  background: url('ligue1_background.jpg') no-repeat;\n  background-size: cover;\n  min-height: 100vh;\n}\n\n.mobileSidenav[_ngcontent-%COMP%] {\n  background-color: #091c3e;\n  background-size: cover;\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n}\n\n.mobileSidenav__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.mobileSidenav__header__logo[_ngcontent-%COMP%] {\n  height: 117px;\n}\n\n.mobileSidenav__header__closeButton[_ngcontent-%COMP%] {\n  justify-self: end;\n  align-self: self-start;\n  margin: 20px 20px 0 0;\n  font-size: 40px;\n  cursor: pointer;\n}\n\n.mobileSidenav__toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 60vh;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.mobileSidenav__toolbar__button[_ngcontent-%COMP%] {\n  font-size: 20px;\n  display: flex;\n  width: 80%;\n  justify-content: flex-start;\n  align-items: center;\n  height: 50px;\n  cursor: pointer;\n}\n\n.mobileSidenav__toolbar__button__icon[_ngcontent-%COMP%], .mobileSidenav__toolbar__button__icon__fff[_ngcontent-%COMP%] {\n  height: 30px;\n  margin: 0 20px 0 0;\n}\n\n.mobileSidenav__toolbar__button__icon__fff[_ngcontent-%COMP%] {\n  margin: 0px 20px 0 -5px;\n}\n\n.mobileSidenav__toolbar__button[_ngcontent-%COMP%], .mobileSidenav__header__closeButton[_ngcontent-%COMP%], .mobileSidenav__toolbar__button__icon__fff[_ngcontent-%COMP%] {\n  font-weight: bold;\n  background: none;\n  color: white;\n  border: none;\n}\n\n@media screen and (max-width: 800px) {\n  .header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .header__logo[_ngcontent-%COMP%] {\n    width: 80px;\n  }\n  .header__mobileBar[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: #091c3e;\n    padding: 15px 0;\n  }\n  .header__mobileBar__button[_ngcontent-%COMP%] {\n    background: none;\n    border: none;\n    cursor: pointer;\n    margin-left: 25px;\n  }\n  .header__mobileBar__button__icon[_ngcontent-%COMP%] {\n    width: 35px;\n  }\n  .background[_ngcontent-%COMP%] {\n    background-image: none;\n    background-color: white;\n  }\n}\n@media screen and (max-width: 800px) and (max-width: 450px) {\n  .header__logo[_ngcontent-%COMP%] {\n    width: 60px;\n  }\n  .header__mobileBar__button[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBOztFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGlCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBOzs7OztFQUtFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0RBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBOzs7RUFHRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQUE7RUFDRjtFQUVBO0lBQ0UsV0FBQTtFQUFGO0VBR0E7SUFDRSxXQUFBO0lBQ0EseUJBQUE7SUFDQSxlQUFBO0VBREY7RUFJQTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQUZGO0VBS0E7SUFDRSxXQUFBO0VBSEY7RUFNQTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7RUFKRjtBQUNGO0FBTUU7RUFDRTtJQUNFLFdBQUE7RUFKSjtFQU9FO0lBQ0UsaUJBQUE7RUFMSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5oZWFkZXJfX2xvZ28ge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5oZWFkZXJfX2JhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaGVhZGVyX19iYXJfX3NvY2lhbEJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGhlaWdodDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkxYzNlO1xufVxuXG4uaGVhZGVyX19iYXJfX3Rvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3YzI2Yjtcbn1cblxuLmhlYWRlcl9fYmFyX19zb2NpYWxCYXJfX2J1dHRvbixcbi5oZWFkZXJfX2Jhcl9fdG9vbGJhcl9fYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyX19iYXJfX3NvY2lhbEJhcl9fYnV0dG9uX19pY29uLFxuLmhlYWRlcl9fYmFyX190b29sYmFyX19idXR0b25fX2ljb24ge1xuICBtYXJnaW46IDAgOHB4IDAgMDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uaGVhZGVyX19iYXJfX3NvY2lhbEJhcl9fYnV0dG9uOmZvY3VzLFxuLmhlYWRlcl9fYmFyX190b29sYmFyX19idXR0b246Zm9jdXMsXG4uaGVhZGVyX19tb2JpbGVCYXJfX2J1dHRvbjpmb2N1cyxcbi5tb2JpbGVTaWRlbmF2X19oZWFkZXJfX2Nsb3NlQnV0dG9uOmZvY3VzLFxuLm1vYmlsZVNpZGVuYXZfX3Rvb2xiYXJfX2J1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5oZWFkZXJfX2Jhcl9fc29jaWFsQmFyX19idXR0b246bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmhlYWRlcl9fYmFyX19zb2NpYWxCYXJfX2J1dHRvbjpob3Zlcixcbi5tb2JpbGVTaWRlbmF2X190b29sYmFyX19idXR0b246aG92ZXIge1xuICBjb2xvcjogIzA3YzI2Yjtcbn1cblxuLmhlYWRlcl9fYmFyX190b29sYmFyX19idXR0b246aG92ZXIge1xuICBjb2xvcjogIzA5MWMzZTtcbn1cblxuLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvbGlndWUxX2JhY2tncm91bmQuanBnXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5tb2JpbGVTaWRlbmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5MWMzZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4ubW9iaWxlU2lkZW5hdl9faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubW9iaWxlU2lkZW5hdl9faGVhZGVyX19sb2dvIHtcbiAgaGVpZ2h0OiAxMTdweDtcbn1cblxuLm1vYmlsZVNpZGVuYXZfX2hlYWRlcl9fY2xvc2VCdXR0b24ge1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgYWxpZ24tc2VsZjogc2VsZi1zdGFydDtcbiAgbWFyZ2luOiAyMHB4IDIwcHggMCAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vYmlsZVNpZGVuYXZfX3Rvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDYwdmg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubW9iaWxlU2lkZW5hdl9fdG9vbGJhcl9fYnV0dG9uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogODAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9iaWxlU2lkZW5hdl9fdG9vbGJhcl9fYnV0dG9uX19pY29uLFxuLm1vYmlsZVNpZGVuYXZfX3Rvb2xiYXJfX2J1dHRvbl9faWNvbl9fZmZmIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDAgMjBweCAwIDA7XG59XG5cbi5tb2JpbGVTaWRlbmF2X190b29sYmFyX19idXR0b25fX2ljb25fX2ZmZiB7XG4gIG1hcmdpbjogMHB4IDIwcHggMCAtNXB4O1xufVxuXG4ubW9iaWxlU2lkZW5hdl9fdG9vbGJhcl9fYnV0dG9uLFxuLm1vYmlsZVNpZGVuYXZfX2hlYWRlcl9fY2xvc2VCdXR0b24sXG4ubW9iaWxlU2lkZW5hdl9fdG9vbGJhcl9fYnV0dG9uX19pY29uX19mZmYge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgLmhlYWRlcl9fbG9nbyB7XG4gICAgd2lkdGg6IDgwcHg7XG4gIH1cblxuICAuaGVhZGVyX19tb2JpbGVCYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTFjM2U7XG4gICAgcGFkZGluZzogMTVweCAwO1xuICB9XG5cbiAgLmhlYWRlcl9fbW9iaWxlQmFyX19idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgfVxuXG4gIC5oZWFkZXJfX21vYmlsZUJhcl9fYnV0dG9uX19pY29uIHtcbiAgICB3aWR0aDogMzVweDtcbiAgfVxuXG4gIC5iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAuaGVhZGVyX19sb2dvIHtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cblxuICAgIC5oZWFkZXJfX21vYmlsZUJhcl9fYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _calendar_results_calendar_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-results/calendar-results.component */ 3059);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 7205);
/* harmony import */ var _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ranking/ranking.component */ 8093);









class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_5__.LOCALE_ID,
    useValue: 'fr'
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _ranking_ranking_component__WEBPACK_IMPORTED_MODULE_4__.RankingComponent, _calendar_results_calendar_results_component__WEBPACK_IMPORTED_MODULE_2__.CalendarResultsComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 3059:
/*!****************************************************************!*\
  !*** ./src/app/calendar-results/calendar-results.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarResultsComponent": () => (/* binding */ CalendarResultsComponent)
/* harmony export */ });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ 7205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_app_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/app-services.service */ 6268);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function CalendarResultsComponent_li_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const match_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 3, match_r1.utcDate, "fullDate", "fr")), " ");
  }
}
function CalendarResultsComponent_li_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const match_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](3, 3, match_r1.utcDate, "mediumDate", "fr")), " ");
  }
}
function CalendarResultsComponent_li_9_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const match_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", match_r1.score.fullTime.homeTeam, " - ", match_r1.score.fullTime.awayTeam, " ");
  }
}
function CalendarResultsComponent_li_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const match_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 1, match_r1.utcDate, "shortTime", "fr"), " ");
  }
}
function CalendarResultsComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CalendarResultsComponent_li_9_div_1_Template, 4, 7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CalendarResultsComponent_li_9_div_2_Template, 4, 7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7)(4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CalendarResultsComponent_li_9_div_7_Template, 2, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CalendarResultsComponent_li_9_div_8_Template, 3, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const match_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.windowWidth >= 800);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.windowWidth < 800);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, match_r1.homeTeam.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", match_r1.status == "FINISHED");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", match_r1.status == "SCHEDULED");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 8, match_r1.awayTeam.name), " ");
  }
}
class CalendarResultsComponent {
  constructor(appServices) {
    this.appServices = appServices;
    this.windowWidth = window.innerWidth;
  }
  ngOnInit() {
    _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent.matches.subscribe(matches => {
      if (matches === null) {
        this.appServices.getMatchDay().subscribe(apiRes => {
          _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent.matches.next(apiRes.matches);
        });
      } else {
        this.totalMatchDayInSeason = matches[matches.length - 1].matchday;
        matches.forEach(match => {
          if (match.status === 'FINISHED') {
            this.matchDaySelector = match.matchday;
          }
        });
        this.filterMatches();
      }
    });
    setInterval(() => {
      this.appServices.getMatchDay().subscribe(apiRes => {
        _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent.matches.next(apiRes.matches);
      });
    }, 300000);
  }
  filterMatches() {
    _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent.matches.subscribe(matches => {
      this.matchDay = matches.filter(match => {
        return match.matchday === this.matchDaySelector;
      });
    });
  }
  nextMatchDay() {
    if (this.matchDaySelector < this.totalMatchDayInSeason) {
      this.matchDaySelector += 1;
      this.filterMatches();
    }
  }
  previousMatchDay() {
    if (this.matchDaySelector > 1) {
      this.matchDaySelector -= 1;
      this.filterMatches();
    }
  }
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }
}
CalendarResultsComponent.ɵfac = function CalendarResultsComponent_Factory(t) {
  return new (t || CalendarResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_app_services_service__WEBPACK_IMPORTED_MODULE_1__.AppServicesService));
};
CalendarResultsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CalendarResultsComponent,
  selectors: [["app-calendar-results"]],
  decls: 10,
  vars: 2,
  consts: [[1, "card", 3, "resize"], [1, "card__matchDaySelector"], [1, "card__matchDaySelector__button", 3, "click"], [1, "card__matchesList"], ["class", "card__matchesList__match", 4, "ngFor", "ngForOf"], [1, "card__matchesList__match"], ["class", "card__matchesList__match__date", 4, "ngIf"], [1, "card__matchesList__match__clubs"], [1, "card__matchesList__match__clubs__homeTeam"], ["class", "card__matchesList__match__clubs__score", 4, "ngIf"], [1, "card__matchesList__match__clubs__awayTeam"], [1, "card__matchesList__match__date"], [1, "card__matchesList__match__clubs__score"]],
  template: function CalendarResultsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function CalendarResultsComponent_Template_div_resize_0_listener($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarResultsComponent_Template_button_click_2_listener() {
        return ctx.previousMatchDay();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " < ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CalendarResultsComponent_Template_button_click_6_listener() {
        return ctx.nextMatchDay();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " > ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CalendarResultsComponent_li_9_Template, 12, 10, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Journ\u00E9e ", ctx.matchDaySelector, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.matchDay);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 85%;\n  margin: 200px 0;\n  border-radius: 10px;\n}\n\n.card__matchDaySelector[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  font-weight: bold;\n  color: white;\n  font-size: 18px;\n  background-color: #091c3e;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.card__matchDaySelector__button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.card__matchDaySelector__button[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.card__matchDaySelector__button[_ngcontent-%COMP%]:hover {\n  color: #07c26b;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.card__matchesList__match[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 30px 0;\n}\n\n.card__matchesList__match__date[_ngcontent-%COMP%] {\n  min-width: 215px;\n  font-size: 12px;\n  color: darkgray;\n  font-weight: bold;\n}\n\n.card__matchesList__match__clubs[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n}\n\n.card__matchesList__match__clubs__homeTeam[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.card__matchesList__match__clubs__homeTeam[_ngcontent-%COMP%], .card__matchesList__match__clubs__awayTeam[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  font-style: italic;\n}\n\n.card__matchesList__match__clubs__score[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 15px;\n  font-weight: bold;\n  min-width: 30px;\n}\n\n@media screen and (max-width: 800px) {\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 117px 0 0 0;\n    border-radius: 0;\n  }\n  ul[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n  .card__matchDaySelector[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .card__matchesList__match__date[_ngcontent-%COMP%] {\n    min-width: 75px;\n    font-size: 10px;\n  }\n  .card__matchesList__match__clubs__homeTeam[_ngcontent-%COMP%], .card__matchesList__match__clubs__awayTeam[_ngcontent-%COMP%], .card__matchesList__match__clubs__score[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 800px) and (max-width: 450px) {\n  .card[_ngcontent-%COMP%] {\n    margin: 88px 0 0 0;\n  }\n  .card__matchesList[_ngcontent-%COMP%] {\n    height: calc(100vh + 88px);\n  }\n  .card__matchesList__match__clubs__homeTeam[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FsZW5kYXItcmVzdWx0cy9jYWxlbmRhci1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTs7RUFFSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VBQ047RUFFRTtJQUNJLGVBQUE7RUFBTjtFQUdFO0lBQ0ksZ0JBQUE7RUFETjtFQUlFO0lBQ0ksZUFBQTtJQUNBLGVBQUE7RUFGTjtFQUtFOzs7SUFHSSxlQUFBO0VBSE47QUFDRjtBQUtJO0VBQ0k7SUFDSSxrQkFBQTtFQUhWO0VBTU07SUFDSSwwQkFBQTtFQUpWO0VBT007SUFDSSwyQkFBQTtFQUxWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXJnaW46IDIwMHB4IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNhcmRfX21hdGNoRGF5U2VsZWN0b3Ige1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MWMzZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4uY2FyZF9fbWF0Y2hEYXlTZWxlY3Rvcl9fYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNhcmRfX21hdGNoRGF5U2VsZWN0b3JfX2J1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNhcmRfX21hdGNoRGF5U2VsZWN0b3JfX2J1dHRvbjpob3ZlciB7XG4gICAgY29sb3I6ICMwN2MyNmI7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uY2FyZF9fbWF0Y2hlc0xpc3RfX21hdGNoIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG59XG5cbi5jYXJkX19tYXRjaGVzTGlzdF9fbWF0Y2hfX2RhdGUge1xuICAgIG1pbi13aWR0aDogMjE1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiBkYXJrZ3JheTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmRfX21hdGNoZXNMaXN0X19tYXRjaF9fY2x1YnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkX19tYXRjaGVzTGlzdF9fbWF0Y2hfX2NsdWJzX19ob21lVGVhbSB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNhcmRfX21hdGNoZXNMaXN0X19tYXRjaF9fY2x1YnNfX2hvbWVUZWFtLFxuLmNhcmRfX21hdGNoZXNMaXN0X19tYXRjaF9fY2x1YnNfX2F3YXlUZWFtIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uY2FyZF9fbWF0Y2hlc0xpc3RfX21hdGNoX19jbHVic19fc2NvcmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWluLXdpZHRoOiAzMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMTE3cHggMCAwIDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgfVxuXG4gICAgLmNhcmRfX21hdGNoRGF5U2VsZWN0b3Ige1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5jYXJkX19tYXRjaGVzTGlzdF9fbWF0Y2hfX2RhdGUge1xuICAgICAgICBtaW4td2lkdGg6IDc1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG5cbiAgICAuY2FyZF9fbWF0Y2hlc0xpc3RfX21hdGNoX19jbHVic19faG9tZVRlYW0sXG4gICAgLmNhcmRfX21hdGNoZXNMaXN0X19tYXRjaF9fY2x1YnNfX2F3YXlUZWFtLFxuICAgIC5jYXJkX19tYXRjaGVzTGlzdF9fbWF0Y2hfX2NsdWJzX19zY29yZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBtYXJnaW46IDg4cHggMCAwIDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZF9fbWF0Y2hlc0xpc3Qge1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoICsgODhweCk7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZF9fbWF0Y2hlc0xpc3RfX21hdGNoX19jbHVic19faG9tZVRlYW0ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7205:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news */ 3540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_app_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/app-services.service */ 6268);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);





function HomeComponent_ul_7_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 11)(1, "div", 12)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const match_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 4, match_r4.homeTeam.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", match_r4.score.fullTime.homeTeam, " - ", match_r4.score.fullTime.awayTeam, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 6, match_r4.awayTeam.name), " ");
  }
}
function HomeComponent_ul_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_ul_7_li_3_Template, 10, 8, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Journ\u00E9e ", ctx_r0.matchDay ? ctx_r0.matchDay[0].matchday : null, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.matchDay);
  }
}
function HomeComponent_table_8_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const headerTab_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, headerTab_r7), " ");
  }
}
function HomeComponent_table_8_tr_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r10 = ctx.$implicit;
    const row_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r8[index_r10], " ");
  }
}
function HomeComponent_table_8_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_table_8_tr_3_td_1_Template, 2, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.indexTab);
  }
}
function HomeComponent_table_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 16)(1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_table_8_th_2_Template, 3, 3, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_table_8_tr_3_Template, 2, 1, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.headersTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.rowsTab);
  }
}
function HomeComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " + ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const actu_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", actu_r12.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", actu_r12.main, " ");
  }
}
const _c0 = function (a0, a1) {
  return {
    "card__buttons__toggle": a0,
    "card__buttons__released": a1
  };
};
class HomeComponent {
  constructor(appServices) {
    this.appServices = appServices;
    this.headersTab = ['pos', 'club', 'j', 'pts'];
    this.indexTab = ['position', 'team', 'playedGames', 'points'];
    this.resultsModeOn = true;
    this.news = _news__WEBPACK_IMPORTED_MODULE_0__.news;
  }
  ngOnInit() {
    HomeComponent.matches.subscribe(matches => {
      if (matches === null) {
        this.appServices.getMatchDay().subscribe(apiRes => {
          HomeComponent.matches.next(apiRes.matches);
        });
      } else {
        matches.forEach(match => {
          if (match.status === 'FINISHED') {
            this.filterMatches(matches, match.matchday);
          }
        });
      }
    });
    HomeComponent.ranking.subscribe(ranking => {
      if (ranking === null) {
        this.appServices.getRanking().subscribe(apiRes => {
          HomeComponent.ranking.next(apiRes.standings[0].table);
        });
      } else {
        this.rowsTab = ranking.map(teamRank => {
          if (typeof teamRank.team !== 'string') {
            teamRank.team = teamRank.team.name.toUpperCase();
          }
          return teamRank;
        });
      }
    });
    setInterval(() => {
      this.appServices.getMatchDay().subscribe(apiRes => {
        HomeComponent.matches.next(apiRes.matches);
      });
      this.appServices.getRanking().subscribe(apiRes => {
        HomeComponent.ranking.next(apiRes.standings[0].table);
      });
    }, 300000);
  }
  filterMatches(allMatchInSeason, matchDaySelector) {
    this.matchDay = allMatchInSeason.filter(match => {
      return match.matchday === matchDaySelector;
    });
  }
}
HomeComponent.matches = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
HomeComponent.ranking = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_app_services_service__WEBPACK_IMPORTED_MODULE_1__.AppServicesService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 11,
  vars: 11,
  consts: [[1, "container"], [1, "card"], [1, "card__buttons"], [3, "ngClass", "click"], ["class", "card__matchesList", 4, "ngIf"], ["class", "card__ranking", 4, "ngIf"], [1, "news-container"], ["class", "news-card", 4, "ngFor", "ngForOf"], [1, "card__matchesList"], [1, "card__matchesList__matchDaySelector"], ["class", "card__matchesList__match", 4, "ngFor", "ngForOf"], [1, "card__matchesList__match"], [1, "card__matchesList__match__clubs"], [1, "card__matchesList__match__clubs__homeTeam"], [1, "card__matchesList__match__clubs__score"], [1, "card__matchesList__match__clubs__awayTeam"], [1, "card__ranking"], [4, "ngFor", "ngForOf"], [1, "news-card"], [1, "news-card__button"], [1, "news-card__image", 3, "src"], [1, "news-card__main"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_3_listener() {
        return ctx.resultsModeOn = true;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " R\u00E9sultats ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_5_listener() {
        return ctx.resultsModeOn = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Classement");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomeComponent_ul_7_Template, 4, 2, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HomeComponent_table_8_Template, 4, 2, "table", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HomeComponent_div_10_Template, 6, 2, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c0, ctx.resultsModeOn == true, ctx.resultsModeOn == false));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c0, ctx.resultsModeOn == false, ctx.resultsModeOn == true));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.resultsModeOn == true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.resultsModeOn == false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.news);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.UpperCasePipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  display: grid;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 550px;\n  height: 675px;\n  margin: 200px 30px 0 30px;\n  border-radius: 10px;\n  overflow: auto;\n}\n\n.card__buttons[_ngcontent-%COMP%] {\n  height: 56px;\n  display: flex;\n}\n\n.card__buttons__toggle[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.card__buttons__released[_ngcontent-%COMP%] {\n  background-color: #091c3e;\n  color: white;\n}\n\n.card__buttons__toggle[_ngcontent-%COMP%], .card__buttons__released[_ngcontent-%COMP%] {\n  width: 50%;\n  border: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n.card__buttons__toggle[_ngcontent-%COMP%]:focus, .card__buttons__released[_ngcontent-%COMP%]:focus, .news-card__button[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.card__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 10px;\n}\n\n.card__buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-top-right-radius: 10px;\n}\n\n.card__matchesList[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n}\n\n.card__matchesList__matchDaySelector[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 56px;\n}\n\n.card__matchesList__match__clubs[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  font-size: 14px;\n  margin: 20px 0;\n}\n\n.card__matchesList__match__clubs__homeTeam[_ngcontent-%COMP%], .card__matchesList__match__clubs__awayTeam[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n}\n\n.card__matchesList__match__clubs__homeTeam[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.card__matchesList__match__clubs__score[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 15px;\n  font-weight: bold;\n  min-width: 30px;\n}\n\n.card__ranking[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.card__ranking[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 56px;\n  font-size: 14px;\n  border-bottom: 1px solid #dddddd;\n}\n\n.card__ranking[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.card__ranking[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, td[_ngcontent-%COMP%]:nth-child(3), td[_ngcontent-%COMP%]:last-child {\n  text-align: center;\n}\n\n.card__ranking[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 380px;\n}\n\n.card__ranking[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2), tr[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #02163c;\n  color: white;\n}\n\n.card__ranking[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child, tr[_ngcontent-%COMP%]:nth-last-child(2) {\n  background-color: #bd0000;\n  color: white;\n}\n\n.card__ranking[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(4), tr[_ngcontent-%COMP%]:nth-child(5) {\n  background-color: #808a9d;\n}\n\n.card__ranking[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-last-child(3) {\n  background-color: #de7f7f;\n}\n\n.news-container[_ngcontent-%COMP%] {\n  width: calc(100vw - 640px);\n  margin: 170px 0 0 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.news-card[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 300px;\n  padding-bottom: 50px;\n  border-radius: 10px;\n  margin: 30px;\n}\n\n.news-card__button[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #091c3e;\n  border: none;\n  width: 40px;\n  height: 35px;\n  color: white;\n  font-weight: bold;\n  font-size: 24px;\n  cursor: pointer;\n  border-top-left-radius: 10px;\n}\n\n.news-card__image[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\n.news-card__main[_ngcontent-%COMP%] {\n  margin: 1em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media screen and (max-width: 800px) {\n  .card[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .news-container[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 117px 0 0 0;\n  }\n  .news-card[_ngcontent-%COMP%] {\n    background-color: #091c3e;\n    color: white;\n  }\n}\n@media screen and (max-width: 800px) and (max-width: 450px) {\n  .news-container[_ngcontent-%COMP%] {\n    margin: 88px 0 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTs7RUFFRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTs7RUFFRSxVQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7O0VBR0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTs7RUFFRSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTs7RUFFRSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTs7RUFFRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFDRjtFQUVBO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0VBQUY7RUFHQTtJQUNFLHlCQUFBO0lBQ0EsWUFBQTtFQURGO0FBQ0Y7QUFHRTtFQUNFO0lBQ0Usa0JBQUE7RUFESjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA1NTBweDtcbiAgaGVpZ2h0OiA2NzVweDtcbiAgbWFyZ2luOiAyMDBweCAzMHB4IDAgMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5jYXJkX19idXR0b25zIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2FyZF9fYnV0dG9uc19fdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkX19idXR0b25zX19yZWxlYXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTFjM2U7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmRfX2J1dHRvbnNfX3RvZ2dsZSxcbi5jYXJkX19idXR0b25zX19yZWxlYXNlZCB7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcmRfX2J1dHRvbnNfX3RvZ2dsZTpmb2N1cyxcbi5jYXJkX19idXR0b25zX19yZWxlYXNlZDpmb2N1cyxcbi5uZXdzLWNhcmRfX2J1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jYXJkX19idXR0b25zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYXJkX19idXR0b25zIGJ1dHRvbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYXJkX19tYXRjaGVzTGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMDtcbn1cblxuLmNhcmRfX21hdGNoZXNMaXN0X19tYXRjaERheVNlbGVjdG9yIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTZweDtcbn1cblxuLmNhcmRfX21hdGNoZXNMaXN0X19tYXRjaF9fY2x1YnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuLmNhcmRfX21hdGNoZXNMaXN0X19tYXRjaF9fY2x1YnNfX2hvbWVUZWFtLFxuLmNhcmRfX21hdGNoZXNMaXN0X19tYXRjaF9fY2x1YnNfX2F3YXlUZWFtIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNhcmRfX21hdGNoZXNMaXN0X19tYXRjaF9fY2x1YnNfX2hvbWVUZWFtIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNhcmRfX21hdGNoZXNMaXN0X19tYXRjaF9fY2x1YnNfX3Njb3JlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuXG4uY2FyZF9fcmFua2luZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uY2FyZF9fcmFua2luZyB0ciB7XG4gIGhlaWdodDogNTZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcbn1cblxuLmNhcmRfX3JhbmtpbmcgdHI6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5jYXJkX19yYW5raW5nIHRkOmZpcnN0LWNoaWxkLFxudGQ6bnRoLWNoaWxkKDMpLFxudGQ6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmRfX3JhbmtpbmcgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgd2lkdGg6IDM4MHB4O1xufVxuXG4uY2FyZF9fcmFua2luZyB0cjpudGgtY2hpbGQoMiksXG50cjpudGgtY2hpbGQoMykge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIxNjNjO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkX19yYW5raW5nIHRyOmxhc3QtY2hpbGQsXG50cjpudGgtbGFzdC1jaGlsZCgyKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZDAwMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcmRfX3JhbmtpbmcgdHI6bnRoLWNoaWxkKDQpLFxudHI6bnRoLWNoaWxkKDUpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwOGE5ZDtcbn1cblxuLmNhcmRfX3JhbmtpbmcgdHI6bnRoLWxhc3QtY2hpbGQoMykge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGU3ZjdmO1xufVxuXG4ubmV3cy1jb250YWluZXIge1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDY0MHB4KTtcbiAgbWFyZ2luOiAxNzBweCAwIDAgMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5ld3MtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDMwcHg7XG59XG5cbi5uZXdzLWNhcmRfX2J1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogIzA5MWMzZTtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLm5ld3MtY2FyZF9faW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG59XG5cbi5uZXdzLWNhcmRfX21haW4ge1xuICBtYXJnaW46IDFlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jYXJkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm5ld3MtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDExN3B4IDAgMCAwO1xuICB9XG5cbiAgLm5ld3MtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA5MWMzZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIC5uZXdzLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW46IDg4cHggMCAwIDA7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3540:
/*!******************************!*\
  !*** ./src/app/home/news.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "news": () => (/* binding */ news)
/* harmony export */ });
const news = [{
  img: `../../assets/ball_image.jpg`,
  main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo eu libero id semper.
        Phasellus
        aliquet bibendum ligula et vestibulum. Nam nec gravida tellus. Fusce consequat placerat ante id
        condimentum.`
}, {
  img: `../../assets/ball_image.jpg`,
  main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo eu libero id semper.
        Phasellus
        aliquet bibendum ligula et vestibulum. Nam nec gravida tellus. Fusce consequat placerat ante id
        condimentum.`
}, {
  img: `../../assets/ball_image.jpg`,
  main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo eu libero id semper.
        Phasellus
        aliquet bibendum ligula et vestibulum. Nam nec gravida tellus. Fusce consequat placerat ante id
        condimentum.`
}, {
  img: `../../assets/ball_image.jpg`,
  main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo eu libero id semper.
        Phasellus
        aliquet bibendum ligula et vestibulum. Nam nec gravida tellus. Fusce consequat placerat ante id
        condimentum.`
}, {
  img: `../../assets/ball_image.jpg`,
  main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo eu libero id semper.
        Phasellus
        aliquet bibendum ligula et vestibulum. Nam nec gravida tellus. Fusce consequat placerat ante id
        condimentum.`
}, {
  img: `../../assets/ball_image.jpg`,
  main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo eu libero id semper.
        Phasellus
        aliquet bibendum ligula et vestibulum. Nam nec gravida tellus. Fusce consequat placerat ante id
        condimentum.`
}];

/***/ }),

/***/ 8093:
/*!**********************************************!*\
  !*** ./src/app/ranking/ranking.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RankingComponent": () => (/* binding */ RankingComponent)
/* harmony export */ });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ 7205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_app_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/app-services.service */ 6268);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function RankingComponent_tr_2_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const headerTab_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, headerTab_r4), " ");
  }
}
function RankingComponent_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RankingComponent_tr_2_th_1_Template, 3, 3, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.headersTab);
  }
}
function RankingComponent_tr_3_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mobileHeaderTab_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, mobileHeaderTab_r6), " ");
  }
}
function RankingComponent_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RankingComponent_tr_3_th_1_Template, 3, 3, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.mobileHeadersTab);
  }
}
function RankingComponent_tr_4_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const index_r9 = ctx.$implicit;
    const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", row_r7[index_r9], " ");
  }
}
function RankingComponent_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RankingComponent_tr_4_td_1_Template, 2, 1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.indexTab);
  }
}
class RankingComponent {
  constructor(appServices) {
    this.appServices = appServices;
    this.headersTab = ['position', 'club', 'joués', 'points', 'victoires', 'nuls', 'défaites', 'buts incrits', 'buts pris', 'différence'];
    this.mobileHeadersTab = ['pos', 'club', 'j', 'pts', 'diff'];
    this.indexTab = ['position', 'team', 'playedGames', 'points', 'won', 'draw', 'lost', 'goalsFor', 'goalsAgainst', 'goalDifference'];
    this.windowWidth = window.innerWidth;
  }
  ngOnInit() {
    _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent.ranking.subscribe(ranking => {
      if (ranking === null) {
        this.appServices.getRanking().subscribe(apiRes => {
          _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent.ranking.next(apiRes.standings[0].table);
        });
      } else {
        this.rowsTab = ranking.map(teamRank => {
          if (typeof teamRank.team !== 'string') {
            teamRank.team = teamRank.team.name.toUpperCase();
          }
          return teamRank;
        });
      }
    });
    setInterval(() => {
      this.appServices.getRanking().subscribe(apiRes => {
        _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent.ranking.next(apiRes.standings[0].table);
      });
    }, 300000);
  }
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }
}
RankingComponent.ɵfac = function RankingComponent_Factory(t) {
  return new (t || RankingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_app_services_service__WEBPACK_IMPORTED_MODULE_1__.AppServicesService));
};
RankingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RankingComponent,
  selectors: [["app-ranking"]],
  decls: 5,
  vars: 3,
  consts: [[1, "card", 3, "resize"], [1, "card__ranking"], [4, "ngIf"], [4, "ngFor", "ngForOf"]],
  template: function RankingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function RankingComponent_Template_div_resize_0_listener($event) {
        return ctx.onResize($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RankingComponent_tr_2_Template, 2, 1, "tr", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RankingComponent_tr_3_Template, 2, 1, "tr", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RankingComponent_tr_4_Template, 2, 1, "tr", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.windowWidth >= 800);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.windowWidth < 800);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.rowsTab);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 85%;\n  margin: 200px 0;\n  border-radius: 10px;\n}\n\n.card__ranking[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  text-align: center;\n  width: 100%;\n  height: 100vh;\n}\n\n.card__ranking[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #dddddd;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.card__ranking[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 11px;\n  font-style: italic;\n  padding: 12px 0;\n}\n\n.card__ranking[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 0;\n  width: 80px;\n}\n\n.card__ranking[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.card__ranking[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  text-align: left;\n  white-space: nowrap;\n}\n\n.card__ranking[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child {\n  border-bottom-left-radius: 10px;\n}\n\n.card__ranking[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 10px;\n}\n\n.card__ranking[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2), tr[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #02163c;\n  color: white;\n}\n\n.card__ranking[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child, tr[_ngcontent-%COMP%]:nth-last-child(2) {\n  background-color: #bd0000;\n  color: white;\n}\n\n.card__ranking[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(4), tr[_ngcontent-%COMP%]:nth-child(5) {\n  background-color: #808a9d;\n}\n\ntr[_ngcontent-%COMP%]:nth-last-child(3) {\n  background-color: #de7f7f;\n}\n\n@media screen and (max-width: 800px) {\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 117px 0 0 0;\n    border-radius: 0;\n  }\n  .card__ranking[_ngcontent-%COMP%] {\n    height: calc(100vh + 117px);\n  }\n  .card__ranking[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .card__ranking[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .card__ranking[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .card__ranking[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2), .card__ranking[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3), .card__ranking[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4), .card__ranking[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, .card__ranking[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .card__ranking[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), .card__ranking[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), .card__ranking[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4), .card__ranking[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n    display: table-cell;\n  }\n  .card__ranking[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:first-child {\n    border-bottom-left-radius: 0;\n  }\n  .card__ranking[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]:last-child {\n    border-bottom-right-radius: 0;\n  }\n}\n@media screen and (max-width: 800px) and (max-width: 450px) {\n  .card[_ngcontent-%COMP%] {\n    margin: 88px 0 0 0;\n  }\n  .card__ranking[_ngcontent-%COMP%] {\n    height: calc(100vh + 88px);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcmFua2luZy9yYW5raW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTs7RUFFRSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTs7RUFFRSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTs7RUFFRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUFDRjtFQUVBO0lBQ0UsMkJBQUE7RUFBRjtFQUdBOztJQUVFLGFBQUE7RUFERjtFQUlBO0lBQ0UsZUFBQTtFQUZGO0VBS0E7Ozs7Ozs7Ozs7SUFVRSxtQkFBQTtFQUhGO0VBTUE7SUFDRSw0QkFBQTtFQUpGO0VBT0E7SUFDRSw2QkFBQTtFQUxGO0FBQ0Y7QUFPRTtFQUNFO0lBQ0Usa0JBQUE7RUFMSjtFQVFFO0lBQ0UsMEJBQUE7RUFOSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA4NSU7XG4gIG1hcmdpbjogMjAwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNhcmRfX3Jhbmtpbmcge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY2FyZF9fcmFua2luZyB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2FyZF9fcmFua2luZyB0aCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBwYWRkaW5nOiAxMnB4IDA7XG59XG5cbi5jYXJkX19yYW5raW5nIHRkIHtcbiAgcGFkZGluZzogMTRweCAwO1xuICB3aWR0aDogODBweDtcbn1cblxuLmNhcmRfX3JhbmtpbmcgdHI6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5jYXJkX19yYW5raW5nIHRkOm50aC1jaGlsZCgyKSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jYXJkX19yYW5raW5nIHRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4uY2FyZF9fcmFua2luZyB0cjpsYXN0LWNoaWxkIHRkOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbn1cblxuLmNhcmRfX3JhbmtpbmcgdHI6bnRoLWNoaWxkKDIpLFxudHI6bnRoLWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMTYzYztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FyZF9fcmFua2luZyB0cjpsYXN0LWNoaWxkLFxudHI6bnRoLWxhc3QtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQwMDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkX19yYW5raW5nIHRyOm50aC1jaGlsZCg0KSxcbnRyOm50aC1jaGlsZCg1KSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDhhOWQ7XG59XG5cbnRyOm50aC1sYXN0LWNoaWxkKDMpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlN2Y3Zjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTE3cHggMCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIC5jYXJkX19yYW5raW5nIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggKyAxMTdweCk7XG4gIH1cblxuICAuY2FyZF9fcmFua2luZyB0ZCxcbiAgdGgge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY2FyZF9fcmFua2luZyB0ZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLmNhcmRfX3JhbmtpbmcgdGQ6Zmlyc3QtY2hpbGQsXG4gIC5jYXJkX19yYW5raW5nIHRkOm50aC1jaGlsZCgyKSxcbiAgLmNhcmRfX3JhbmtpbmcgdGQ6bnRoLWNoaWxkKDMpLFxuICAuY2FyZF9fcmFua2luZyB0ZDpudGgtY2hpbGQoNCksXG4gIC5jYXJkX19yYW5raW5nIHRkOmxhc3QtY2hpbGQsXG4gIC5jYXJkX19yYW5raW5nIHRoOmZpcnN0LWNoaWxkLFxuICAuY2FyZF9fcmFua2luZyB0aDpudGgtY2hpbGQoMiksXG4gIC5jYXJkX19yYW5raW5nIHRoOm50aC1jaGlsZCgzKSxcbiAgLmNhcmRfX3JhbmtpbmcgdGg6bnRoLWNoaWxkKDQpLFxuICAuY2FyZF9fcmFua2luZyB0aDpsYXN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB9XG5cbiAgLmNhcmRfX3JhbmtpbmcgdHI6bGFzdC1jaGlsZCB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxuXG4gIC5jYXJkX19yYW5raW5nIHRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIC5jYXJkIHtcbiAgICAgIG1hcmdpbjogODhweCAwIDAgMDtcbiAgICB9XG5cbiAgICAuY2FyZF9fcmFua2luZyB7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggKyA4OHB4KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6268:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/app-services.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppServicesService": () => (/* binding */ AppServicesService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



class AppServicesService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getRanking() {
    return this.httpClient.get(`${this.apiUrl}standings`);
  }
  getMatchDay() {
    return this.httpClient.get(`${this.apiUrl}matches`);
  }
}
AppServicesService.ɵfac = function AppServicesService_Factory(t) {
  return new (t || AppServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
AppServicesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AppServicesService,
  factory: AppServicesService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: "https://nmkibqmbxc.execute-api.eu-north-1.amazonaws.com/"
};

/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map