(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/demo/$$_lazy_route_resource lazy recursive":
/*!***************************************************************!*\
  !*** ./src/demo/$$_lazy_route_resource lazy namespace object ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/demo/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/demo/app/ace-editor.directive.ts":
/*!**********************************************!*\
  !*** ./src/demo/app/ace-editor.directive.ts ***!
  \**********************************************/
/*! exports provided: AceEditorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AceEditorDirective", function() { return AceEditorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! brace */ "./node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var brace_theme_sqlserver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! brace/theme/sqlserver */ "./node_modules/brace/theme/sqlserver.js");
/* harmony import */ var brace_theme_sqlserver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(brace_theme_sqlserver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brace_mode_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! brace/mode/json */ "./node_modules/brace/mode/json.js");
/* harmony import */ var brace_mode_json__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brace_mode_json__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AceEditorDirective = (function () {
    function AceEditorDirective(elementRef) {
        this._options = {};
        this._highlightActiveLine = false;
        this._showGutter = false;
        this._readOnly = false;
        this._theme = 'sqlserver';
        this._mode = 'json';
        this._autoUpdateContent = true;
        this.textChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var el = elementRef.nativeElement;
        ace.config.set('basePath', '/node_modules/brace');
        this.editor = ace['edit'](el);
        this.init();
        this.initEvents();
    }
    AceEditorDirective.prototype.init = function () {
        this.editor.getSession().setUseWorker(false);
        this.editor.setOptions(this._options);
        this.editor.setTheme("ace/theme/" + this._theme);
        this.editor.getSession().setMode("ace/mode/" + this._mode);
        this.editor.setHighlightActiveLine(this._highlightActiveLine);
        this.editor.renderer.setShowGutter(this._showGutter);
        this.editor.setReadOnly(this._readOnly);
        this.editor.$blockScrolling = Infinity;
    };
    AceEditorDirective.prototype.initEvents = function () {
        var _this = this;
        this.editor.on('change', function () {
            var newVal = _this.editor.getValue();
            if (newVal === _this.oldText) {
                return;
            }
            if (typeof _this.oldText !== 'undefined') {
                _this.textChanged.emit(newVal);
            }
            _this.oldText = newVal;
        });
    };
    Object.defineProperty(AceEditorDirective.prototype, "options", {
        set: function (options) {
            this._options = options;
            this.editor.setOptions(options || {});
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "readOnly", {
        set: function (readOnly) {
            this._readOnly = readOnly;
            this.editor.setReadOnly(readOnly);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "theme", {
        set: function (theme) {
            this._theme = theme;
            this.editor.setTheme("ace/theme/" + theme);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "mode", {
        set: function (mode) {
            this._mode = mode;
            this.editor.getSession().setMode("ace/mode/" + mode);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "text", {
        set: function (text) {
            if (!text) {
                text = '';
            }
            if (this._autoUpdateContent === true) {
                this.editor.setValue(text);
                this.editor.clearSelection();
                this.editor.focus();
                this.editor.moveCursorTo(0, 0);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "autoUpdateContent", {
        set: function (status) {
            this._autoUpdateContent = status;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('textChanged'),
        __metadata("design:type", Object)
    ], AceEditorDirective.prototype, "textChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AceEditorDirective.prototype, "options", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AceEditorDirective.prototype, "readOnly", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AceEditorDirective.prototype, "theme", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AceEditorDirective.prototype, "mode", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AceEditorDirective.prototype, "text", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AceEditorDirective.prototype, "autoUpdateContent", null);
    AceEditorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[ace-editor]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AceEditorDirective);
    return AceEditorDirective;
}());



/***/ }),

/***/ "./src/demo/app/demo-root.component.ts":
/*!*********************************************!*\
  !*** ./src/demo/app/demo-root.component.ts ***!
  \*********************************************/
/*! exports provided: DemoRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoRootComponent", function() { return DemoRootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoRootComponent = (function () {
    function DemoRootComponent() {
    }
    DemoRootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'demo-root',
            template: "<router-outlet></router-outlet>"
        })
    ], DemoRootComponent);
    return DemoRootComponent;
}());



/***/ }),

/***/ "./src/demo/app/demo.component.html":
/*!******************************************!*\
  !*** ./src/demo/app/demo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-page-header\">\r\n  <mat-toolbar class=\"mat-elevation-z4 mat-medium\" color=\"primary\">\r\n    Angular JSON Schema Form — Demonstration Playground\r\n  </mat-toolbar>\r\n  <div class=\"header-content\">\r\n    An Angular <a href=\"http://json-schema.org/\">JSON Schema</a> Form builder\r\n    for Angular 4 and 5, similar to, and mostly API compatible with,\r\n    <span class=\"avoidwrap\">\r\n      <!-- JSON Schema Form's Angular Schema Form -->\r\n      <!-- https://github.com/json-schema-form -->\r\n      <!-- http://schemaform.io -->\r\n      <a href=\"http://schemaform.io/examples/bootstrap-example.html\">Angular Schema Form</a>,\r\n      <!-- Mozilla's React JSON Schema Form -->\r\n      <!-- https://github.com/mozilla-services/react-jsonschema-form -->\r\n      <a href=\"https://mozilla-services.github.io/react-jsonschema-form/\">React JSON Schema Form</a>,\r\n      and\r\n      <!-- Joshfire's JSON Form -->\r\n      <!-- http://factory.joshfire.com/ -->\r\n      <!-- http://github.com/joshfire/jsonform/wiki -->\r\n      <a href=\"http://ulion.github.io/jsonform/playground/\">JSON Form</a>.\r\n    </span><br>\r\n    Choose an example, or create your own, and check out the generated form.<br><br>\r\n\r\n    <span class=\"menu-label\">Current example:</span>\r\n    <button mat-raised-button\r\n      color=\"primary\"\r\n      [matMenuTriggerFor]=\"exampleMenu\">\r\n      <mat-icon>menu</mat-icon> {{selectedSetName}} {{selectedExampleName}}\r\n    </button>\r\n    <mat-menu #exampleMenu=\"matMenu\" class=\"example-menu\">\r\n      <button mat-menu-item class=\"mat-medium\"\r\n        *ngFor=\"let example of examples['ng-jsf'].schemas\"\r\n        (click)=\"loadSelectedExample('ng-jsf', '', example.file, example.name)\">\r\n        {{example.name}}\r\n      </button>\r\n      <button mat-menu-item class=\"mat-medium\" [matMenuTriggerFor]=\"asfMenu\">\r\n        <span>Angular Schema Form (AngularJS) examples</span>\r\n      </button>\r\n      <mat-menu #asfMenu=\"matMenu\" class=\"example-menu\">\r\n        <button mat-menu-item class=\"mat-medium\"\r\n          *ngFor=\"let example of examples.asf.schemas\"\r\n          (click)=\"loadSelectedExample('asf', 'Angular Schema Form:', example.file, example.name)\">\r\n          {{example.name}}\r\n        </button>\r\n      </mat-menu>\r\n      <button mat-menu-item class=\"mat-medium\" [matMenuTriggerFor]=\"rjsfMenu\">\r\n        <span>React JSON Schema Form examples</span>\r\n      </button>\r\n      <mat-menu #rjsfMenu=\"matMenu\" class=\"example-menu\">\r\n        <button mat-menu-item class=\"mat-medium\"\r\n          *ngFor=\"let example of examples.rjsf.schemas\"\r\n          (click)=\"loadSelectedExample('rjsf', 'React JSON Schema Form:', example.file, example.name)\">\r\n          {{example.name}}\r\n        </button>\r\n      </mat-menu>\r\n      <button mat-menu-item class=\"mat-medium\" [matMenuTriggerFor]=\"jsfMenu\">\r\n        <span>JSONForm (jQuery) examples</span>\r\n      </button>\r\n      <mat-menu #jsfMenu=\"matMenu\" class=\"example-menu\">\r\n        <button mat-menu-item class=\"mat-medium\"\r\n          *ngFor=\"let example of examples.jsf.schemas\"\r\n          (click)=\"loadSelectedExample('jsf', 'JSONForm:', example.file, example.name)\">\r\n          {{example.name}}\r\n        </button>\r\n      </mat-menu>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"space-around start\"\r\n  fxLayout.lt-sm=\"column\" fxLayoutAlign.lt-sm=\"flex-start center\">\r\n\r\n  <mat-card fxFlex=\"0 0 calc(50% - 12px)\">\r\n    <h4 class=\"default-cursor\" (click)=\"toggleVisible('options')\">\r\n      {{visible.options ? '▼' : '▶'}} Selected Framework and Options\r\n    </h4>\r\n    <div *ngIf=\"visible.options\" fxLayout=\"column\" [@expandSection]=\"true\">\r\n      <mat-form-field>\r\n        <mat-select\r\n          [(ngModel)]=\"selectedFramework\"\r\n          name=\"framework\"\r\n          placeholder=\"Framework\">\r\n          <mat-option\r\n            *ngFor=\"let framework of frameworkList\"\r\n            [value]=\"framework\">\r\n            {{frameworks[framework]}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <mat-select\r\n          [(ngModel)]=\"selectedLanguage\"\r\n          (selectionChange)=\"loadSelectedLanguage()\"\r\n          name=\"language\"\r\n          placeholder=\"Language\">\r\n          <mat-option\r\n            *ngFor=\"let language of languageList\"\r\n            [value]=\"language\">\r\n            {{languages[language]}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <div class=\"check-row\">\r\n        <mat-checkbox color=\"primary\" [(ngModel)]=\"jsonFormOptions.returnEmptyFields\">\r\n          Return empty fields?\r\n        </mat-checkbox>\r\n        (default = true)\r\n      </div>\r\n      <div class=\"check-row\">\r\n        <mat-checkbox color=\"primary\" [(ngModel)]=\"jsonFormOptions.addSubmit\">\r\n          Add submit button?\r\n        </mat-checkbox>\r\n        (default = only add if no layout is defined)\r\n      </div>\r\n      <div class=\"check-row\">\r\n        <mat-checkbox color=\"primary\" [(ngModel)]=\"jsonFormOptions.defautWidgetOptions.feedback\">\r\n          Show inline fedback?\r\n        </mat-checkbox>\r\n        (default = false)\r\n      </div>\r\n      <div class=\"check-row\">\r\n        <mat-checkbox color=\"primary\" [(ngModel)]=\"jsonFormOptions.debug\">\r\n          Show debuging information?\r\n        </mat-checkbox>\r\n        (default = false)\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <h4 class=\"default-cursor\" (click)=\"toggleVisible('schema')\">\r\n      {{visible.schema ? '▼' : '▶'}} Input JSON Schema and Form Layout\r\n    </h4>\r\n    <div *ngIf=\"visible.schema\" [@expandSection]=\"true\"\r\n      ace-editor\r\n      [text]=\"jsonFormSchema\"\r\n      [options]=\"aceEditorOptions\"\r\n      [readOnly]=\"false\"\r\n      [autoUpdateContent]=\"true\"\r\n      (textChanged)=\"generateForm($event)\"\r\n      style=\"width:100%; overflow: auto; border: 1px solid black;\">\r\n      (loading form specification...)\r\n    </div>\r\n  </mat-card>\r\n\r\n  <mat-card fxFlex=\"0 0 calc(50% - 12px)\">\r\n    <h4 class=\"default-cursor\" (click)=\"toggleVisible('form')\">\r\n      {{visible.form ? '▼' : '▶'}} Generated Form\r\n    </h4>\r\n    <div *ngIf=\"visible.form\" class=\"json-schema-form\" [@expandSection]=\"true\">\r\n      <div *ngIf=\"!formActive\">{{jsonFormStatusMessage}}</div>\r\n\r\n      <!-- This is the form! -->\r\n      <json-schema-form\r\n        *ngIf=\"formActive\"\r\n        loadExternalAssets=\"true\"\r\n        [form]=\"jsonFormObject\"\r\n        [options]=\"jsonFormOptions\"\r\n        [framework]=\"selectedFramework\"\r\n        [language]=\"selectedLanguage\"\r\n        (onChanges)=\"onChanges($event)\"\r\n        (onSubmit)=\"onSubmit($event)\"\r\n        (isValid)=\"isValid($event)\"\r\n        (validationErrors)=\"validationErrors($event)\">\r\n      </json-schema-form>\r\n\r\n    </div>\r\n    <hr>\r\n    <h4 class=\"default-cursor\" (click)=\"toggleVisible('output')\">\r\n      {{visible.output ? '▼' : '▶'}} Form Output\r\n    </h4>\r\n    <div *ngIf=\"visible.output\" fxLayout=\"column\" [@expandSection]=\"true\">\r\n      <div>\r\n        Valid?:\r\n        <strong *ngIf=\"formIsValid || prettyValidationErrors\"\r\n          [class.text-success]=\"formIsValid\"\r\n          [class.text-danger]=\"!formIsValid\">\r\n          {{formIsValid ? 'Yes' : 'No'}}\r\n        </strong>\r\n        <span *ngIf=\"!formIsValid && !prettyValidationErrors\">n/a</span>\r\n        <span *ngIf=\"prettyValidationErrors\">— errors from validationErrors():</span>\r\n        <div *ngIf=\"prettyValidationErrors\"\r\n          class=\"data-bad\"\r\n          [innerHTML]=\"prettyValidationErrors\"></div>\r\n      </div><br>\r\n      <div>\r\n        Live data — from onChanges():\r\n        <pre\r\n          [class.data-good]=\"!prettyValidationErrors && prettyLiveFormData !== '{}'\"\r\n          [class.data-bad]=\"prettyValidationErrors\">{{prettyLiveFormData}}</pre>\r\n      </div><br>\r\n      <div>\r\n        Submitted data — from onSubmit():\r\n        <pre [class.data-good]=\"prettySubmittedFormData !== 'null'\">{{prettySubmittedFormData}}</pre>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/demo/app/demo.component.ts":
/*!****************************************!*\
  !*** ./src/demo/app/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _example_schemas_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example-schemas.model */ "./src/demo/app/example-schemas.model.ts");
/* harmony import */ var _lib_src_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/src/shared */ "./src/lib/src/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DemoComponent = (function () {
    function DemoComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.examples = _example_schemas_model__WEBPACK_IMPORTED_MODULE_6__["Examples"];
        this.languageList = ['en', 'fr'];
        this.languages = {
            'en': 'English',
            'fr': 'French',
        };
        this.frameworkList = ['material-design', 'bootstrap-3', 'bootstrap-4', 'no-framework'];
        this.frameworks = {
            'material-design': 'Material Design',
            'bootstrap-3': 'Bootstrap 3',
            'bootstrap-4': 'Bootstrap 4',
            'no-framework': 'None (plain HTML)',
        };
        this.selectedSet = 'ng-jsf';
        this.selectedSetName = '';
        this.selectedExample = 'ng-jsf-flex-layout';
        this.selectedExampleName = 'Flexbox layout';
        this.selectedFramework = 'material-design';
        this.selectedLanguage = 'en';
        this.visible = {
            options: true,
            schema: true,
            form: true,
            output: true
        };
        this.formActive = false;
        this.jsonFormValid = false;
        this.jsonFormStatusMessage = 'Loading form...';
        this.jsonFormOptions = {
            addSubmit: true,
            debug: false,
            loadExternalAssets: true,
            returnEmptyFields: false,
            setSchemaDefaults: true,
            defautWidgetOptions: { feedback: true },
        };
        this.liveFormData = {};
        this.formIsValid = null;
        this.submittedFormData = null;
        this.aceEditorOptions = {
            highlightActiveLine: true,
            maxLines: 1000,
            printMargin: false,
            autoScrollEditorIntoView: true,
        };
    }
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (params['set']) {
                _this.selectedSet = params['set'];
                _this.selectedSetName = ({
                    'ng-jsf': '',
                    'asf': 'Angular Schema Form:',
                    'rsf': 'React Schema Form:',
                    'jsf': 'JSONForm:'
                })[_this.selectedSet];
            }
            if (params['example']) {
                _this.selectedExample = params['example'];
                _this.selectedExampleName = _this.examples[_this.selectedSet].schemas
                    .find(function (schema) { return schema.file === _this.selectedExample; }).name;
            }
            if (params['framework']) {
                _this.selectedFramework = params['framework'];
            }
            if (params['language']) {
                _this.selectedLanguage = params['language'];
            }
            _this.loadSelectedExample();
        });
    };
    DemoComponent.prototype.onSubmit = function (data) {
        this.submittedFormData = data;
    };
    Object.defineProperty(DemoComponent.prototype, "prettySubmittedFormData", {
        get: function () {
            return JSON.stringify(this.submittedFormData, null, 2);
        },
        enumerable: true,
        configurable: true
    });
    DemoComponent.prototype.onChanges = function (data) {
        this.liveFormData = data;
    };
    Object.defineProperty(DemoComponent.prototype, "prettyLiveFormData", {
        get: function () {
            return JSON.stringify(this.liveFormData, null, 2);
        },
        enumerable: true,
        configurable: true
    });
    DemoComponent.prototype.isValid = function (isValid) {
        this.formIsValid = isValid;
    };
    DemoComponent.prototype.validationErrors = function (data) {
        this.formValidationErrors = data;
    };
    Object.defineProperty(DemoComponent.prototype, "prettyValidationErrors", {
        get: function () {
            if (!this.formValidationErrors) {
                return null;
            }
            var errorArray = [];
            for (var _i = 0, _a = this.formValidationErrors; _i < _a.length; _i++) {
                var error = _a[_i];
                var message = error.message;
                var dataPathArray = _lib_src_shared__WEBPACK_IMPORTED_MODULE_7__["JsonPointer"].parse(error.dataPath);
                if (dataPathArray.length) {
                    var field = dataPathArray[0];
                    for (var i = 1; i < dataPathArray.length; i++) {
                        var key = dataPathArray[i];
                        field += /^\d+$/.test(key) ? "[" + key + "]" : "." + key;
                    }
                    errorArray.push(field + ": " + message);
                }
                else {
                    errorArray.push(message);
                }
            }
            return errorArray.join('<br>');
        },
        enumerable: true,
        configurable: true
    });
    DemoComponent.prototype.loadSelectedExample = function (selectedSet, selectedSetName, selectedExample, selectedExampleName) {
        var _this = this;
        if (selectedSet === void 0) { selectedSet = this.selectedSet; }
        if (selectedSetName === void 0) { selectedSetName = this.selectedSetName; }
        if (selectedExample === void 0) { selectedExample = this.selectedExample; }
        if (selectedExampleName === void 0) { selectedExampleName = this.selectedExampleName; }
        if (this.menuTrigger.menuOpen) {
            this.menuTrigger.closeMenu();
        }
        if (selectedExample !== this.selectedExample) {
            this.formActive = false;
            this.selectedSet = selectedSet;
            this.selectedSetName = selectedSetName;
            this.selectedExample = selectedExample;
            this.selectedExampleName = selectedExampleName;
            this.router.navigateByUrl('/?set=' + selectedSet +
                '&example=' + selectedExample +
                '&framework=' + this.selectedFramework +
                '&language=' + this.selectedLanguage);
            this.liveFormData = {};
            this.submittedFormData = null;
            this.formIsValid = null;
            this.formValidationErrors = null;
        }
        var exampleURL = "assets/example-schemas/" + this.selectedExample + ".json";
        this.http
            .get(exampleURL, { responseType: 'text' })
            .subscribe(function (schema) {
            _this.jsonFormSchema = schema;
            _this.generateForm(_this.jsonFormSchema);
        });
    };
    DemoComponent.prototype.loadSelectedLanguage = function () {
        window.location.href =
            '/?set=' + this.selectedSet +
                '&example=' + this.selectedExample +
                '&framework=' + this.selectedFramework +
                '&language=' + this.selectedLanguage;
    };
    DemoComponent.prototype.generateForm = function (newFormString) {
        if (!newFormString) {
            return;
        }
        this.jsonFormStatusMessage = 'Loading form...';
        this.formActive = false;
        this.liveFormData = {};
        this.submittedFormData = null;
        try {
            this.jsonFormObject = JSON.parse(newFormString);
            this.jsonFormValid = true;
        }
        catch (jsonError) {
            try {
                var newFormObject = null;
                eval('newFormObject = ' + newFormString);
                this.jsonFormObject = newFormObject;
                this.jsonFormValid = true;
            }
            catch (javascriptError) {
                this.jsonFormValid = false;
                this.jsonFormStatusMessage =
                    'Entered content is not currently a valid JSON Form object.\n' +
                        'As soon as it is, you will see your form here. So keep typing. :-)\n\n' +
                        'JavaScript parser returned:\n\n' + jsonError;
                return;
            }
        }
        this.formActive = true;
    };
    DemoComponent.prototype.toggleVisible = function (item) {
        this.visible[item] = !this.visible[item];
    };
    DemoComponent.prototype.toggleFormOption = function (option) {
        if (option === 'feedback') {
            this.jsonFormOptions.defautWidgetOptions.feedback =
                !this.jsonFormOptions.defautWidgetOptions.feedback;
        }
        else {
            this.jsonFormOptions[option] = !this.jsonFormOptions[option];
        }
        this.generateForm(this.jsonFormSchema);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
    ], DemoComponent.prototype, "menuTrigger", void 0);
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/demo/app/demo.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('expandSection', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(100),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: 0 })),
                    ]),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/demo/app/demo.module.ts":
/*!*************************************!*\
  !*** ./src/demo/app/demo.module.ts ***!
  \*************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib */ "./src/lib/index.ts");
/* harmony import */ var _ace_editor_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ace-editor.directive */ "./src/demo/app/ace-editor.directive.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demo.component */ "./src/demo/app/demo.component.ts");
/* harmony import */ var _demo_root_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo-root.component */ "./src/demo/app/demo-root.component.ts");
/* harmony import */ var _demo_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demo.routes */ "./src/demo/app/demo.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DemoModule = (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_ace_editor_directive__WEBPACK_IMPORTED_MODULE_9__["AceEditorDirective"], _demo_component__WEBPACK_IMPORTED_MODULE_10__["DemoComponent"], _demo_root_component__WEBPACK_IMPORTED_MODULE_11__["DemoRootComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_demo_routes__WEBPACK_IMPORTED_MODULE_12__["routes"]),
                _lib__WEBPACK_IMPORTED_MODULE_8__["NoFrameworkModule"], _lib__WEBPACK_IMPORTED_MODULE_8__["MaterialDesignFrameworkModule"],
                _lib__WEBPACK_IMPORTED_MODULE_8__["Bootstrap3FrameworkModule"], _lib__WEBPACK_IMPORTED_MODULE_8__["Bootstrap4FrameworkModule"],
                _lib__WEBPACK_IMPORTED_MODULE_8__["JsonSchemaFormModule"].forRoot(_lib__WEBPACK_IMPORTED_MODULE_8__["NoFrameworkModule"], _lib__WEBPACK_IMPORTED_MODULE_8__["MaterialDesignFrameworkModule"], _lib__WEBPACK_IMPORTED_MODULE_8__["Bootstrap3FrameworkModule"], _lib__WEBPACK_IMPORTED_MODULE_8__["Bootstrap4FrameworkModule"])
            ],
            bootstrap: [_demo_root_component__WEBPACK_IMPORTED_MODULE_11__["DemoRootComponent"]]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/demo/app/demo.routes.ts":
/*!*************************************!*\
  !*** ./src/demo/app/demo.routes.ts ***!
  \*************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo.component */ "./src/demo/app/demo.component.ts");

var routes = [
    { path: '', component: _demo_component__WEBPACK_IMPORTED_MODULE_0__["DemoComponent"] },
    { path: '**', component: _demo_component__WEBPACK_IMPORTED_MODULE_0__["DemoComponent"] }
];


/***/ }),

/***/ "./src/demo/app/example-schemas.model.ts":
/*!***********************************************!*\
  !*** ./src/demo/app/example-schemas.model.ts ***!
  \***********************************************/
/*! exports provided: Examples */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Examples", function() { return Examples; });
var Examples = {
    'ng-jsf': {
        name: 'Angular JSON Schema Form examples',
        schemas: [
            { name: 'Flexbox layout', file: 'ng-jsf-flex-layout', },
            { name: 'Nested Arrays', file: 'ng-jsf-nested-arrays', },
            { name: 'Deep Recursive References', file: 'ng-jsf-deep-ref', },
            { name: 'Select Control Lists', file: 'ng-jsf-select-list-examples', },
            { name: 'Data Only (no Schema or Layout)', file: 'ng-jsf-data-only', },
        ]
    },
    'asf': {
        name: 'Angular Schema Form (AngularJS) examples',
        url: 'http://schemaform.io/examples/bootstrap-example.html',
        schemas: [
            { name: 'Simple', file: 'asf-simple', },
            { name: 'Basic JSON Schema Type', file: 'asf-basic-json-schema-type', },
            { name: 'Bootstrap Grid', file: 'asf-bootstrap-grid', },
            { name: 'Complex Key Support', file: 'asf-complex-key-support', },
            { name: 'Array', file: 'asf-array', },
            { name: 'Tab Array', file: 'asf-tab-array', },
            { name: 'TitleMap Examples', file: 'asf-titlemap-examples', },
            { name: 'Kitchen Sink', file: 'asf-kitchen-sink', },
            { name: 'Hack: Conditional Required', file: 'asf-hack-conditional-required', },
        ]
    },
    'rjsf': {
        name: 'React JSON Schema Form examples',
        url: 'https://mozilla-services.github.io/react-jsonschema-form/',
        schemas: [
            { name: 'Simple', file: 'rjsf-simple', },
            { name: 'Nested', file: 'rjsf-nested', },
            { name: 'Arrays', file: 'rjsf-arrays', },
            { name: 'Numbers', file: 'rjsf-numbers', },
            { name: 'Widgets', file: 'rjsf-widgets', },
            { name: 'Ordering', file: 'rjsf-ordering', },
            { name: 'References', file: 'rjsf-references', },
            { name: 'Custom', file: 'rjsf-custom', },
            { name: 'Errors', file: 'rjsf-errors', },
            { name: 'Large', file: 'rjsf-large', },
            { name: 'Date & Time', file: 'rjsf-date-and-time', },
            { name: 'Validation', file: 'rjsf-validation', },
            { name: 'Files', file: 'rjsf-files', },
            { name: 'Single', file: 'rjsf-single', },
            { name: 'Alternatives', file: 'rjsf-alternatives', },
        ]
    },
    'jsf': {
        name: 'JSONForm (jQuery) examples',
        url: 'http://ulion.github.io/jsonform/playground/',
        schemas: [
            { name: 'Getting started',
                file: 'jsf-gettingstarted', urlParameters: '?example=gettingstarted' },
            { name: 'JSON Schema - A basic example',
                file: 'jsf-schema-basic', urlParameters: '?example=schema-basic', },
            { name: 'JSON Schema - Slightly more complex example',
                file: 'jsf-schema-morecomplex', urlParameters: '?example=schema-morecomplex', },
            { name: 'JSON Schema - Arrays',
                file: 'jsf-schema-array', urlParameters: '?example=schema-array', },
            { name: 'JSON Schema - Required field',
                file: 'jsf-schema-required', urlParameters: '?example=schema-required', },
            { name: 'JSON Schema - Default values',
                file: 'jsf-schema-default', urlParameters: '?example=schema-default', },
            { name: 'JSON Schema - Inline $ref to definitions',
                file: 'jsf-schema-inlineref', urlParameters: '?example=schema-inlineref', },
            { name: 'Fields - Common properties',
                file: 'jsf-fields-common', urlParameters: '?example=fields-common', },
            { name: 'Fields - Gathering secrets: the password type',
                file: 'jsf-fields-password', urlParameters: '?example=fields-password', },
            { name: 'Fields - Large text: the textarea type',
                file: 'jsf-fields-textarea', urlParameters: '?example=fields-textarea', },
            { name: 'Fields - text field with jquery-ui autocomplete',
                file: 'jsf-fields-autocomplete', urlParameters: '?example=fields-autocomplete', },
            { name: 'Fields - Code (JavaScript, JSON...): the ace type',
                file: 'jsf-fields-ace', urlParameters: '?example=fields-ace', },
            { name: 'Fields - Color picker: the color type',
                file: 'jsf-fields-color', urlParameters: '?example=fields-color', },
            { name: 'Fields - Boolean flag: the checkbox type',
                file: 'jsf-fields-checkbox', urlParameters: '?example=fields-checkbox', },
            { name: 'Fields - Multiple options: the checkboxes type',
                file: 'jsf-fields-checkboxes', urlParameters: '?example=fields-checkboxes', },
            { name: 'Fields - Selection list: the select type',
                file: 'jsf-fields-select', urlParameters: '?example=fields-select', },
            { name: 'Fields - A list of radio buttons: the radios type',
                file: 'jsf-fields-radios', urlParameters: '?example=fields-radios', },
            { name: 'Fields - Radio buttons as real buttons: the radio buttons type',
                file: 'jsf-fields-radiobuttons', urlParameters: '?example=fields-radiobuttons', },
            { name: 'Fields - Checkbox buttons: the checkbox buttons type',
                file: 'jsf-fields-checkboxbuttons', urlParameters: '?example=fields-checkboxbuttons', },
            { name: 'Fields - Number: the range type',
                file: 'jsf-fields-range', urlParameters: '?example=fields-range', },
            { name: 'Fields - Image selector: the imageselect type',
                file: 'jsf-fields-imageselect', urlParameters: '?example=fields-imageselect', },
            { name: 'Fields - Icon selector: the iconselect type',
                file: 'jsf-fields-iconselect', urlParameters: '?example=fields-iconselect', },
            { name: 'Fields - Grouping: the fieldset type',
                file: 'jsf-fields-fieldset', urlParameters: '?example=fields-fieldset', },
            { name: 'Fields - Advanced options section: the advancedfieldset type',
                file: 'jsf-fields-advancedfieldset', urlParameters: '?example=fields-advancedfieldset', },
            { name: 'Fields - Authentication settings section: the authfieldset type',
                file: 'jsf-fields-authfieldset', urlParameters: '?example=fields-authfieldset', },
            { name: 'Fields - Generic group: the section type',
                file: 'jsf-fields-section', urlParameters: '?example=fields-section', },
            { name: 'Fields - Group of buttons: the actions type',
                file: 'jsf-fields-actions', urlParameters: '?example=fields-actions', },
            { name: 'Fields - Generic array: the array type (complex)',
                file: 'jsf-fields-array', urlParameters: '?example=fields-array', },
            { name: 'Fields - Generic array: the array type (simple)',
                file: 'jsf-fields-array-simple', urlParameters: '?example=fields-array-simple', },
            { name: 'Fields - Arrays with tabs: the tabarray type',
                file: 'jsf-fields-tabarray', urlParameters: '?example=fields-tabarray', },
            { name: 'Fields - Arrays with tabs: the tabarray type w/ maxItems',
                file: 'jsf-fields-tabarray-maxitems', urlParameters: '?example=fields-tabarray-maxitems', },
            { name: 'Fields - Arrays with tabs: the tabarray type w/ default & legend',
                file: 'jsf-fields-tabarray-value', urlParameters: '?example=fields-tabarray-value', },
            { name: 'Fields - Alternative: the selectfieldset type',
                file: 'jsf-fields-selectfieldset', urlParameters: '?example=fields-selectfieldset', },
            { name: 'Fields - Alternative with schema key',
                file: 'jsf-fields-selectfieldset-key', urlParameters: '?example=fields-selectfieldset-key', },
            { name: 'Fields - Submit the form: the submit type',
                file: 'jsf-fields-submit', urlParameters: '?example=fields-submit', },
            { name: 'Fields - Guide users: the help type',
                file: 'jsf-fields-help', urlParameters: '?example=fields-help', },
            { name: 'Fields - Hidden form values: the hidden type',
                file: 'jsf-fields-hidden', urlParameters: '?example=fields-hidden', },
            { name: 'Fields - Series of questions: the questions type',
                file: 'jsf-fields-questions', urlParameters: '?example=fields-questions', },
            { name: 'Templating - item index with idx',
                file: 'jsf-templating-idx', urlParameters: '?example=templating-idx', },
            { name: 'Templating - tab legend with value and valueInLegend',
                file: 'jsf-templating-value', urlParameters: '?example=templating-value', },
            { name: 'Templating - values.xxx to reference another field',
                file: 'jsf-templating-values', urlParameters: '?example=templating-values', },
            { name: 'Templating - Using the tpldata property',
                file: 'jsf-templating-tpldata', urlParameters: '?example=templating-tpldata', },
            { name: 'Using event handlers',
                file: 'jsf-events', urlParameters: '?example=events', },
            { name: 'Using previously submitted values',
                file: 'jsf-previousvalues', urlParameters: '?example=previousvalues', },
            { name: 'Using previously submitted values - Multidimensional arrays',
                file: 'jsf-previousvalues-multidimensional', urlParameters: '?example=previousvalues-multidimensional', },
        ]
    }
};


/***/ }),

/***/ "./src/demo/environments/environment.ts":
/*!**********************************************!*\
  !*** ./src/demo/environments/environment.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = { production: false };


/***/ }),

/***/ "./src/demo/main.ts":
/*!**************************!*\
  !*** ./src/demo/main.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_demo_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/demo.module */ "./src/demo/app/demo.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/demo/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_demo_module__WEBPACK_IMPORTED_MODULE_2__["DemoModule"]);


/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/*! exports provided: _executeValidators, _executeAsyncValidators, _mergeObjects, _mergeErrors, isDefined, hasValue, isEmpty, isString, isNumber, isInteger, isBoolean, isFunction, isObject, isArray, isDate, isMap, isSet, isPromise, isObservable, getType, isType, isPrimitive, toJavaScriptType, toSchemaType, _toPromise, toObservable, inArray, xor, addClasses, copy, forEach, forEachCopy, hasOwn, mergeFilteredObject, uniqueItems, commonItems, fixTitle, toTitleCase, JsonPointer, JsonValidators, buildSchemaFromLayout, buildSchemaFromData, getFromSchema, removeRecursiveReferences, getInputType, checkInlineType, isInputRequired, updateInputOptions, getTitleMapFromOneOf, getControlValidators, resolveSchemaReferences, getSubSchema, combineAllOf, fixRequiredArrayProperties, convertSchemaToDraft6, mergeSchemas, buildFormGroupTemplate, buildFormGroup, formatFormData, getControl, setRequiredFields, buildLayout, buildLayoutFromSchema, mapLayout, getLayoutNode, buildTitleMap, dateToString, stringToDate, findDate, OrderableDirective, JsonSchemaFormComponent, JsonSchemaFormService, JsonSchemaFormModule, WidgetLibraryService, WidgetLibraryModule, AddReferenceComponent, OneOfComponent, ButtonComponent, CheckboxComponent, CheckboxesComponent, FileComponent, HiddenComponent, InputComponent, MessageComponent, NoneComponent, NumberComponent, RadiosComponent, RootComponent, SectionComponent, SelectComponent, SelectFrameworkComponent, SelectWidgetComponent, SubmitComponent, TabComponent, TabsComponent, TemplateComponent, TextareaComponent, FrameworkLibraryService, Framework, NoFramework, NoFrameworkComponent, NoFrameworkModule, MaterialDesignFramework, FlexLayoutRootComponent, FlexLayoutSectionComponent, MaterialAddReferenceComponent, MaterialOneOfComponent, MaterialButtonComponent, MaterialButtonGroupComponent, MaterialCheckboxComponent, MaterialCheckboxesComponent, MaterialChipListComponent, MaterialDatepickerComponent, MaterialFileComponent, MaterialInputComponent, MaterialNumberComponent, MaterialRadiosComponent, MaterialSelectComponent, MaterialSliderComponent, MaterialStepperComponent, MaterialTabsComponent, MaterialTextareaComponent, MaterialDesignFrameworkComponent, MaterialDesignFrameworkModule, Bootstrap3Framework, Bootstrap3FrameworkComponent, Bootstrap3FrameworkModule, Bootstrap4Framework, Bootstrap4FrameworkComponent, Bootstrap4FrameworkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/shared/validator.functions */ "./src/lib/src/shared/validator.functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_executeValidators", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["_executeValidators"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_executeAsyncValidators", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["_executeAsyncValidators"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_mergeObjects", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["_mergeObjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_mergeErrors", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["_mergeErrors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["hasValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isInteger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isObservable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["getType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toJavaScriptType", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["toJavaScriptType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSchemaType", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["toSchemaType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_toPromise", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["_toPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toObservable", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["toObservable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inArray", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["inArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xor", function() { return _src_shared_validator_functions__WEBPACK_IMPORTED_MODULE_0__["xor"]; });

/* harmony import */ var _src_shared_utility_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/shared/utility.functions */ "./src/lib/src/shared/utility.functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClasses", function() { return _src_shared_utility_functions__WEBPACK_IMPORTED_MODULE_1__["addClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _src_shared_utility_functions__WEBPACK_IMPORTED_MODULE_1__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _src_shared_utility_functions__WEBPACK_IMPORTED_MODULE_1__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEachCopy", function() { return _src_shared_utility_functions__WEBPACK_IMPORTED_MODULE_1__["forEachCopy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return _src_shared_utility_functions__WEBPACK_IMPORTED_MODULE_1__["hasOwn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeFilteredObject", function() { return _src_shared_utility_functions__WEBPACK_IMPORTED_MODULE_1__["mergeFilteredObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueItems", function() { return _src_shared_utility_functions__WEBPACK_IMPORTED_MODULE_1__["uniqueItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commonItems", function() { return _src_shared_utility_functions__WEBPACK_IMPORTED_MODULE_1__["commonItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fixTitle", function() { return _src_shared_utility_functions__WEBPACK_IMPORTED_MODULE_1__["fixTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toTitleCase", function() { return _src_shared_utility_functions__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"]; });

/* harmony import */ var _src_shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/shared/jsonpointer.functions */ "./src/lib/src/shared/jsonpointer.functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonPointer", function() { return _src_shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_2__["JsonPointer"]; });

/* harmony import */ var _src_shared_json_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/shared/json.validators */ "./src/lib/src/shared/json.validators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonValidators", function() { return _src_shared_json_validators__WEBPACK_IMPORTED_MODULE_3__["JsonValidators"]; });

/* harmony import */ var _src_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/shared/json-schema.functions */ "./src/lib/src/shared/json-schema.functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildSchemaFromLayout", function() { return _src_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["buildSchemaFromLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildSchemaFromData", function() { return _src_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["buildSchemaFromData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFromSchema", function() { return _src_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["getFromSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeRecursiveReferences", function() { return _src_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["removeRecursiveReferences"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInputType", function() { return _src_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["getInputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkInlineType", function() { return _src_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["checkInlineType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInputRequired", function() { return _src_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["isInputRequired"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateInputOptions", function() { return _src_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["updateInputOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTitleMapFromOneOf", function() { return _src_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["getTitleMapFromOneOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getControlValidators", function() { return _src_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["getControlValidators"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveSchemaReferences", function() { return _src_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["resolveSchemaReferences"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSubSchema", function() { return _src_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["getSubSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineAllOf", function() { return _src_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["combineAllOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fixRequiredArrayProperties", function() { return _src_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["fixRequiredArrayProperties"]; });

/* harmony import */ var _src_shared_convert_schema_to_draft6_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/shared/convert-schema-to-draft6.function */ "./src/lib/src/shared/convert-schema-to-draft6.function.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertSchemaToDraft6", function() { return _src_shared_convert_schema_to_draft6_function__WEBPACK_IMPORTED_MODULE_5__["convertSchemaToDraft6"]; });

/* harmony import */ var _src_shared_merge_schemas_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/shared/merge-schemas.function */ "./src/lib/src/shared/merge-schemas.function.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeSchemas", function() { return _src_shared_merge_schemas_function__WEBPACK_IMPORTED_MODULE_6__["mergeSchemas"]; });

/* harmony import */ var _src_shared_form_group_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/shared/form-group.functions */ "./src/lib/src/shared/form-group.functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildFormGroupTemplate", function() { return _src_shared_form_group_functions__WEBPACK_IMPORTED_MODULE_7__["buildFormGroupTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildFormGroup", function() { return _src_shared_form_group_functions__WEBPACK_IMPORTED_MODULE_7__["buildFormGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatFormData", function() { return _src_shared_form_group_functions__WEBPACK_IMPORTED_MODULE_7__["formatFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getControl", function() { return _src_shared_form_group_functions__WEBPACK_IMPORTED_MODULE_7__["getControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRequiredFields", function() { return _src_shared_form_group_functions__WEBPACK_IMPORTED_MODULE_7__["setRequiredFields"]; });

/* harmony import */ var _src_shared_layout_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/shared/layout.functions */ "./src/lib/src/shared/layout.functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildLayout", function() { return _src_shared_layout_functions__WEBPACK_IMPORTED_MODULE_8__["buildLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildLayoutFromSchema", function() { return _src_shared_layout_functions__WEBPACK_IMPORTED_MODULE_8__["buildLayoutFromSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapLayout", function() { return _src_shared_layout_functions__WEBPACK_IMPORTED_MODULE_8__["mapLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLayoutNode", function() { return _src_shared_layout_functions__WEBPACK_IMPORTED_MODULE_8__["getLayoutNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildTitleMap", function() { return _src_shared_layout_functions__WEBPACK_IMPORTED_MODULE_8__["buildTitleMap"]; });

/* harmony import */ var _src_shared_date_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/shared/date.functions */ "./src/lib/src/shared/date.functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateToString", function() { return _src_shared_date_functions__WEBPACK_IMPORTED_MODULE_9__["dateToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringToDate", function() { return _src_shared_date_functions__WEBPACK_IMPORTED_MODULE_9__["stringToDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDate", function() { return _src_shared_date_functions__WEBPACK_IMPORTED_MODULE_9__["findDate"]; });

/* harmony import */ var _src_shared_orderable_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/shared/orderable.directive */ "./src/lib/src/shared/orderable.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderableDirective", function() { return _src_shared_orderable_directive__WEBPACK_IMPORTED_MODULE_10__["OrderableDirective"]; });

/* harmony import */ var _src_json_schema_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/json-schema-form.component */ "./src/lib/src/json-schema-form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaFormComponent", function() { return _src_json_schema_form_component__WEBPACK_IMPORTED_MODULE_11__["JsonSchemaFormComponent"]; });

/* harmony import */ var _src_json_schema_form_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaFormService", function() { return _src_json_schema_form_service__WEBPACK_IMPORTED_MODULE_12__["JsonSchemaFormService"]; });

/* harmony import */ var _src_json_schema_form_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/json-schema-form.module */ "./src/lib/src/json-schema-form.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaFormModule", function() { return _src_json_schema_form_module__WEBPACK_IMPORTED_MODULE_13__["JsonSchemaFormModule"]; });

/* harmony import */ var _src_widget_library_widget_library_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/widget-library/widget-library.service */ "./src/lib/src/widget-library/widget-library.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WidgetLibraryService", function() { return _src_widget_library_widget_library_service__WEBPACK_IMPORTED_MODULE_14__["WidgetLibraryService"]; });

/* harmony import */ var _src_widget_library_widget_library_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/widget-library/widget-library.module */ "./src/lib/src/widget-library/widget-library.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WidgetLibraryModule", function() { return _src_widget_library_widget_library_module__WEBPACK_IMPORTED_MODULE_15__["WidgetLibraryModule"]; });

/* harmony import */ var _src_widget_library_add_reference_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/widget-library/add-reference.component */ "./src/lib/src/widget-library/add-reference.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddReferenceComponent", function() { return _src_widget_library_add_reference_component__WEBPACK_IMPORTED_MODULE_16__["AddReferenceComponent"]; });

/* harmony import */ var _src_widget_library_one_of_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/widget-library/one-of.component */ "./src/lib/src/widget-library/one-of.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OneOfComponent", function() { return _src_widget_library_one_of_component__WEBPACK_IMPORTED_MODULE_17__["OneOfComponent"]; });

/* harmony import */ var _src_widget_library_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/widget-library/button.component */ "./src/lib/src/widget-library/button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return _src_widget_library_button_component__WEBPACK_IMPORTED_MODULE_18__["ButtonComponent"]; });

/* harmony import */ var _src_widget_library_checkbox_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/widget-library/checkbox.component */ "./src/lib/src/widget-library/checkbox.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return _src_widget_library_checkbox_component__WEBPACK_IMPORTED_MODULE_19__["CheckboxComponent"]; });

/* harmony import */ var _src_widget_library_checkboxes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/widget-library/checkboxes.component */ "./src/lib/src/widget-library/checkboxes.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxesComponent", function() { return _src_widget_library_checkboxes_component__WEBPACK_IMPORTED_MODULE_20__["CheckboxesComponent"]; });

/* harmony import */ var _src_widget_library_file_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/widget-library/file.component */ "./src/lib/src/widget-library/file.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return _src_widget_library_file_component__WEBPACK_IMPORTED_MODULE_21__["FileComponent"]; });

/* harmony import */ var _src_widget_library_hidden_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./src/widget-library/hidden.component */ "./src/lib/src/widget-library/hidden.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HiddenComponent", function() { return _src_widget_library_hidden_component__WEBPACK_IMPORTED_MODULE_22__["HiddenComponent"]; });

/* harmony import */ var _src_widget_library_input_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./src/widget-library/input.component */ "./src/lib/src/widget-library/input.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return _src_widget_library_input_component__WEBPACK_IMPORTED_MODULE_23__["InputComponent"]; });

/* harmony import */ var _src_widget_library_message_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./src/widget-library/message.component */ "./src/lib/src/widget-library/message.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return _src_widget_library_message_component__WEBPACK_IMPORTED_MODULE_24__["MessageComponent"]; });

/* harmony import */ var _src_widget_library_none_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./src/widget-library/none.component */ "./src/lib/src/widget-library/none.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoneComponent", function() { return _src_widget_library_none_component__WEBPACK_IMPORTED_MODULE_25__["NoneComponent"]; });

/* harmony import */ var _src_widget_library_number_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./src/widget-library/number.component */ "./src/lib/src/widget-library/number.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberComponent", function() { return _src_widget_library_number_component__WEBPACK_IMPORTED_MODULE_26__["NumberComponent"]; });

/* harmony import */ var _src_widget_library_radios_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./src/widget-library/radios.component */ "./src/lib/src/widget-library/radios.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadiosComponent", function() { return _src_widget_library_radios_component__WEBPACK_IMPORTED_MODULE_27__["RadiosComponent"]; });

/* harmony import */ var _src_widget_library_root_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./src/widget-library/root.component */ "./src/lib/src/widget-library/root.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return _src_widget_library_root_component__WEBPACK_IMPORTED_MODULE_28__["RootComponent"]; });

/* harmony import */ var _src_widget_library_section_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./src/widget-library/section.component */ "./src/lib/src/widget-library/section.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return _src_widget_library_section_component__WEBPACK_IMPORTED_MODULE_29__["SectionComponent"]; });

/* harmony import */ var _src_widget_library_select_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./src/widget-library/select.component */ "./src/lib/src/widget-library/select.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return _src_widget_library_select_component__WEBPACK_IMPORTED_MODULE_30__["SelectComponent"]; });

/* harmony import */ var _src_widget_library_select_framework_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./src/widget-library/select-framework.component */ "./src/lib/src/widget-library/select-framework.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectFrameworkComponent", function() { return _src_widget_library_select_framework_component__WEBPACK_IMPORTED_MODULE_31__["SelectFrameworkComponent"]; });

/* harmony import */ var _src_widget_library_select_widget_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./src/widget-library/select-widget.component */ "./src/lib/src/widget-library/select-widget.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectWidgetComponent", function() { return _src_widget_library_select_widget_component__WEBPACK_IMPORTED_MODULE_32__["SelectWidgetComponent"]; });

/* harmony import */ var _src_widget_library_submit_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./src/widget-library/submit.component */ "./src/lib/src/widget-library/submit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitComponent", function() { return _src_widget_library_submit_component__WEBPACK_IMPORTED_MODULE_33__["SubmitComponent"]; });

/* harmony import */ var _src_widget_library_tab_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./src/widget-library/tab.component */ "./src/lib/src/widget-library/tab.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return _src_widget_library_tab_component__WEBPACK_IMPORTED_MODULE_34__["TabComponent"]; });

/* harmony import */ var _src_widget_library_tabs_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./src/widget-library/tabs.component */ "./src/lib/src/widget-library/tabs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return _src_widget_library_tabs_component__WEBPACK_IMPORTED_MODULE_35__["TabsComponent"]; });

/* harmony import */ var _src_widget_library_template_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./src/widget-library/template.component */ "./src/lib/src/widget-library/template.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return _src_widget_library_template_component__WEBPACK_IMPORTED_MODULE_36__["TemplateComponent"]; });

/* harmony import */ var _src_widget_library_textarea_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./src/widget-library/textarea.component */ "./src/lib/src/widget-library/textarea.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextareaComponent", function() { return _src_widget_library_textarea_component__WEBPACK_IMPORTED_MODULE_37__["TextareaComponent"]; });

/* harmony import */ var _src_framework_library_framework_library_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./src/framework-library/framework-library.service */ "./src/lib/src/framework-library/framework-library.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrameworkLibraryService", function() { return _src_framework_library_framework_library_service__WEBPACK_IMPORTED_MODULE_38__["FrameworkLibraryService"]; });

/* harmony import */ var _src_framework_library_framework__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./src/framework-library/framework */ "./src/lib/src/framework-library/framework.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Framework", function() { return _src_framework_library_framework__WEBPACK_IMPORTED_MODULE_39__["Framework"]; });

/* harmony import */ var _src_framework_library_no_framework_no_framework__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./src/framework-library/no-framework/no.framework */ "./src/lib/src/framework-library/no-framework/no.framework.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoFramework", function() { return _src_framework_library_no_framework_no_framework__WEBPACK_IMPORTED_MODULE_40__["NoFramework"]; });

/* harmony import */ var _src_framework_library_no_framework_no_framework_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./src/framework-library/no-framework/no-framework.component */ "./src/lib/src/framework-library/no-framework/no-framework.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoFrameworkComponent", function() { return _src_framework_library_no_framework_no_framework_component__WEBPACK_IMPORTED_MODULE_41__["NoFrameworkComponent"]; });

/* harmony import */ var _src_framework_library_no_framework_no_framework_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./src/framework-library/no-framework/no-framework.module */ "./src/lib/src/framework-library/no-framework/no-framework.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoFrameworkModule", function() { return _src_framework_library_no_framework_no_framework_module__WEBPACK_IMPORTED_MODULE_42__["NoFrameworkModule"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_design_framework__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-design.framework */ "./src/lib/src/framework-library/material-design-framework/material-design.framework.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignFramework", function() { return _src_framework_library_material_design_framework_material_design_framework__WEBPACK_IMPORTED_MODULE_43__["MaterialDesignFramework"]; });

/* harmony import */ var _src_framework_library_material_design_framework_flex_layout_root_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/flex-layout-root.component */ "./src/lib/src/framework-library/material-design-framework/flex-layout-root.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexLayoutRootComponent", function() { return _src_framework_library_material_design_framework_flex_layout_root_component__WEBPACK_IMPORTED_MODULE_44__["FlexLayoutRootComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_flex_layout_section_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/flex-layout-section.component */ "./src/lib/src/framework-library/material-design-framework/flex-layout-section.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexLayoutSectionComponent", function() { return _src_framework_library_material_design_framework_flex_layout_section_component__WEBPACK_IMPORTED_MODULE_45__["FlexLayoutSectionComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_add_reference_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-add-reference.component */ "./src/lib/src/framework-library/material-design-framework/material-add-reference.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialAddReferenceComponent", function() { return _src_framework_library_material_design_framework_material_add_reference_component__WEBPACK_IMPORTED_MODULE_46__["MaterialAddReferenceComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_one_of_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-one-of.component */ "./src/lib/src/framework-library/material-design-framework/material-one-of.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialOneOfComponent", function() { return _src_framework_library_material_design_framework_material_one_of_component__WEBPACK_IMPORTED_MODULE_47__["MaterialOneOfComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_button_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-button.component */ "./src/lib/src/framework-library/material-design-framework/material-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialButtonComponent", function() { return _src_framework_library_material_design_framework_material_button_component__WEBPACK_IMPORTED_MODULE_48__["MaterialButtonComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_button_group_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-button-group.component */ "./src/lib/src/framework-library/material-design-framework/material-button-group.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialButtonGroupComponent", function() { return _src_framework_library_material_design_framework_material_button_group_component__WEBPACK_IMPORTED_MODULE_49__["MaterialButtonGroupComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_checkbox_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-checkbox.component */ "./src/lib/src/framework-library/material-design-framework/material-checkbox.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialCheckboxComponent", function() { return _src_framework_library_material_design_framework_material_checkbox_component__WEBPACK_IMPORTED_MODULE_50__["MaterialCheckboxComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_checkboxes_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-checkboxes.component */ "./src/lib/src/framework-library/material-design-framework/material-checkboxes.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialCheckboxesComponent", function() { return _src_framework_library_material_design_framework_material_checkboxes_component__WEBPACK_IMPORTED_MODULE_51__["MaterialCheckboxesComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_chip_list_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-chip-list.component */ "./src/lib/src/framework-library/material-design-framework/material-chip-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialChipListComponent", function() { return _src_framework_library_material_design_framework_material_chip_list_component__WEBPACK_IMPORTED_MODULE_52__["MaterialChipListComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_datepicker_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-datepicker.component */ "./src/lib/src/framework-library/material-design-framework/material-datepicker.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDatepickerComponent", function() { return _src_framework_library_material_design_framework_material_datepicker_component__WEBPACK_IMPORTED_MODULE_53__["MaterialDatepickerComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_file_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-file.component */ "./src/lib/src/framework-library/material-design-framework/material-file.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialFileComponent", function() { return _src_framework_library_material_design_framework_material_file_component__WEBPACK_IMPORTED_MODULE_54__["MaterialFileComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_input_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-input.component */ "./src/lib/src/framework-library/material-design-framework/material-input.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialInputComponent", function() { return _src_framework_library_material_design_framework_material_input_component__WEBPACK_IMPORTED_MODULE_55__["MaterialInputComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_number_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-number.component */ "./src/lib/src/framework-library/material-design-framework/material-number.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialNumberComponent", function() { return _src_framework_library_material_design_framework_material_number_component__WEBPACK_IMPORTED_MODULE_56__["MaterialNumberComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_radios_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-radios.component */ "./src/lib/src/framework-library/material-design-framework/material-radios.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialRadiosComponent", function() { return _src_framework_library_material_design_framework_material_radios_component__WEBPACK_IMPORTED_MODULE_57__["MaterialRadiosComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_select_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-select.component */ "./src/lib/src/framework-library/material-design-framework/material-select.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialSelectComponent", function() { return _src_framework_library_material_design_framework_material_select_component__WEBPACK_IMPORTED_MODULE_58__["MaterialSelectComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_slider_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-slider.component */ "./src/lib/src/framework-library/material-design-framework/material-slider.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialSliderComponent", function() { return _src_framework_library_material_design_framework_material_slider_component__WEBPACK_IMPORTED_MODULE_59__["MaterialSliderComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_stepper_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-stepper.component */ "./src/lib/src/framework-library/material-design-framework/material-stepper.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialStepperComponent", function() { return _src_framework_library_material_design_framework_material_stepper_component__WEBPACK_IMPORTED_MODULE_60__["MaterialStepperComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_tabs_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-tabs.component */ "./src/lib/src/framework-library/material-design-framework/material-tabs.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialTabsComponent", function() { return _src_framework_library_material_design_framework_material_tabs_component__WEBPACK_IMPORTED_MODULE_61__["MaterialTabsComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_textarea_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-textarea.component */ "./src/lib/src/framework-library/material-design-framework/material-textarea.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialTextareaComponent", function() { return _src_framework_library_material_design_framework_material_textarea_component__WEBPACK_IMPORTED_MODULE_62__["MaterialTextareaComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_design_framework_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-design-framework.component */ "./src/lib/src/framework-library/material-design-framework/material-design-framework.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignFrameworkComponent", function() { return _src_framework_library_material_design_framework_material_design_framework_component__WEBPACK_IMPORTED_MODULE_63__["MaterialDesignFrameworkComponent"]; });

/* harmony import */ var _src_framework_library_material_design_framework_material_design_framework_module__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./src/framework-library/material-design-framework/material-design-framework.module */ "./src/lib/src/framework-library/material-design-framework/material-design-framework.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignFrameworkModule", function() { return _src_framework_library_material_design_framework_material_design_framework_module__WEBPACK_IMPORTED_MODULE_64__["MaterialDesignFrameworkModule"]; });

/* harmony import */ var _src_framework_library_bootstrap_3_framework_bootstrap_3_framework__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./src/framework-library/bootstrap-3-framework/bootstrap-3.framework */ "./src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3.framework.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bootstrap3Framework", function() { return _src_framework_library_bootstrap_3_framework_bootstrap_3_framework__WEBPACK_IMPORTED_MODULE_65__["Bootstrap3Framework"]; });

/* harmony import */ var _src_framework_library_bootstrap_3_framework_bootstrap_3_framework_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./src/framework-library/bootstrap-3-framework/bootstrap-3-framework.component */ "./src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3-framework.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bootstrap3FrameworkComponent", function() { return _src_framework_library_bootstrap_3_framework_bootstrap_3_framework_component__WEBPACK_IMPORTED_MODULE_66__["Bootstrap3FrameworkComponent"]; });

/* harmony import */ var _src_framework_library_bootstrap_3_framework_bootstrap_3_framework_module__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./src/framework-library/bootstrap-3-framework/bootstrap-3-framework.module */ "./src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3-framework.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bootstrap3FrameworkModule", function() { return _src_framework_library_bootstrap_3_framework_bootstrap_3_framework_module__WEBPACK_IMPORTED_MODULE_67__["Bootstrap3FrameworkModule"]; });

/* harmony import */ var _src_framework_library_bootstrap_4_framework_bootstrap_4_framework__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./src/framework-library/bootstrap-4-framework/bootstrap-4.framework */ "./src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4.framework.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bootstrap4Framework", function() { return _src_framework_library_bootstrap_4_framework_bootstrap_4_framework__WEBPACK_IMPORTED_MODULE_68__["Bootstrap4Framework"]; });

/* harmony import */ var _src_framework_library_bootstrap_4_framework_bootstrap_4_framework_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./src/framework-library/bootstrap-4-framework/bootstrap-4-framework.component */ "./src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4-framework.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bootstrap4FrameworkComponent", function() { return _src_framework_library_bootstrap_4_framework_bootstrap_4_framework_component__WEBPACK_IMPORTED_MODULE_69__["Bootstrap4FrameworkComponent"]; });

/* harmony import */ var _src_framework_library_bootstrap_4_framework_bootstrap_4_framework_module__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./src/framework-library/bootstrap-4-framework/bootstrap-4-framework.module */ "./src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4-framework.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bootstrap4FrameworkModule", function() { return _src_framework_library_bootstrap_4_framework_bootstrap_4_framework_module__WEBPACK_IMPORTED_MODULE_70__["Bootstrap4FrameworkModule"]; });










































































/***/ }),

/***/ "./src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3-framework.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3-framework.component.ts ***!
  \************************************************************************************************/
/*! exports provided: Bootstrap3FrameworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bootstrap3FrameworkComponent", function() { return Bootstrap3FrameworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/lib/src/shared/index.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Bootstrap3FrameworkComponent = (function () {
    function Bootstrap3FrameworkComponent(changeDetector, jsf) {
        this.changeDetector = changeDetector;
        this.jsf = jsf;
        this.frameworkInitialized = false;
        this.formControl = null;
        this.debugOutput = '';
        this.debug = '';
        this.parentArray = null;
        this.isOrderable = false;
    }
    Object.defineProperty(Bootstrap3FrameworkComponent.prototype, "showRemoveButton", {
        get: function () {
            if (!this.options.removable || this.options.readonly ||
                this.layoutNode.type === '$ref') {
                return false;
            }
            if (this.layoutNode.recursiveReference) {
                return true;
            }
            if (!this.layoutNode.arrayItem || !this.parentArray) {
                return false;
            }
            return this.parentArray.items.length - 1 <= this.parentArray.options.minItems ? false :
                this.layoutNode.arrayItemType === 'list' ? true :
                    this.layoutIndex[this.layoutIndex.length - 1] === this.parentArray.items.length - 2;
        },
        enumerable: true,
        configurable: true
    });
    Bootstrap3FrameworkComponent.prototype.ngOnInit = function () {
        this.initializeFramework();
        if (this.layoutNode.arrayItem && this.layoutNode.type !== '$ref') {
            this.parentArray = this.jsf.getParentNode(this);
            if (this.parentArray) {
                this.isOrderable = this.layoutNode.arrayItemType === 'list' &&
                    !this.options.readonly && this.parentArray.options.orderable;
            }
        }
    };
    Bootstrap3FrameworkComponent.prototype.ngOnChanges = function () {
        if (!this.frameworkInitialized) {
            this.initializeFramework();
        }
    };
    Bootstrap3FrameworkComponent.prototype.initializeFramework = function () {
        var _this = this;
        if (this.layoutNode) {
            this.options = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.layoutNode.options);
            this.widgetLayoutNode = __assign({}, this.layoutNode, { options: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.layoutNode.options) });
            this.widgetOptions = this.widgetLayoutNode.options;
            this.formControl = this.jsf.getFormControl(this);
            this.options.isInputWidget = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["inArray"])(this.layoutNode.type, [
                'button', 'checkbox', 'checkboxes-inline', 'checkboxes', 'color',
                'date', 'datetime-local', 'datetime', 'email', 'file', 'hidden',
                'image', 'integer', 'month', 'number', 'password', 'radio',
                'radiobuttons', 'radios-inline', 'radios', 'range', 'reset', 'search',
                'select', 'submit', 'tel', 'text', 'textarea', 'time', 'url', 'week'
            ]);
            this.options.title = this.setTitle();
            this.options.htmlClass =
                Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.options.htmlClass, 'schema-form-' + this.layoutNode.type);
            if (this.layoutNode.type !== 'flex') {
                this.options.htmlClass =
                    this.layoutNode.type === 'array' ?
                        Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.options.htmlClass, 'list-group') :
                        this.layoutNode.arrayItem && this.layoutNode.type !== '$ref' ?
                            Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.options.htmlClass, 'list-group-item') :
                            Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.options.htmlClass, 'form-group');
            }
            this.widgetOptions.htmlClass = '';
            this.options.labelHtmlClass =
                Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.options.labelHtmlClass, 'control-label');
            this.widgetOptions.activeClass =
                Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.activeClass, 'active');
            this.options.fieldAddonLeft =
                this.options.fieldAddonLeft || this.options.prepend;
            this.options.fieldAddonRight =
                this.options.fieldAddonRight || this.options.append;
            if (this.options.title && this.layoutNode.type !== 'tab' &&
                !this.options.notitle && this.options.required &&
                !this.options.title.includes('*')) {
                this.options.title += ' <strong class="text-danger">*</strong>';
            }
            switch (this.layoutNode.type) {
                case 'checkbox':
                case 'checkboxes':
                    this.widgetOptions.htmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.htmlClass, 'checkbox');
                    break;
                case 'checkboxes-inline':
                    this.widgetOptions.htmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.htmlClass, 'checkbox');
                    this.widgetOptions.itemLabelHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.itemLabelHtmlClass, 'checkbox-inline');
                    break;
                case 'radio':
                case 'radios':
                    this.widgetOptions.htmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.htmlClass, 'radio');
                    break;
                case 'radios-inline':
                    this.widgetOptions.htmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.htmlClass, 'radio');
                    this.widgetOptions.itemLabelHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.itemLabelHtmlClass, 'radio-inline');
                    break;
                case 'checkboxbuttons':
                case 'radiobuttons':
                    this.widgetOptions.htmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.htmlClass, 'btn-group');
                    this.widgetOptions.itemLabelHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.itemLabelHtmlClass, 'btn');
                    this.widgetOptions.itemLabelHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.itemLabelHtmlClass, this.options.style || 'btn-default');
                    this.widgetOptions.fieldHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.fieldHtmlClass, 'sr-only');
                    break;
                case 'button':
                case 'submit':
                    this.widgetOptions.fieldHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.fieldHtmlClass, 'btn');
                    this.widgetOptions.fieldHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.fieldHtmlClass, this.options.style || 'btn-info');
                    break;
                case 'array':
                case 'fieldset':
                case 'section':
                case 'conditional':
                case 'advancedfieldset':
                case 'authfieldset':
                case 'selectfieldset':
                case 'optionfieldset':
                    this.options.messageLocation = 'top';
                    break;
                case 'tabarray':
                case 'tabs':
                    this.widgetOptions.htmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.htmlClass, 'tab-content');
                    this.widgetOptions.fieldHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.fieldHtmlClass, 'tab-pane');
                    this.widgetOptions.labelHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.labelHtmlClass, 'nav nav-tabs');
                    break;
                case '$ref':
                    this.widgetOptions.fieldHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.fieldHtmlClass, 'btn pull-right');
                    this.widgetOptions.fieldHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.fieldHtmlClass, this.options.style || 'btn-default');
                    this.options.icon = 'glyphicon glyphicon-plus';
                    break;
                default:
                    this.widgetOptions.fieldHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.fieldHtmlClass, 'form-control');
            }
            if (this.formControl) {
                this.updateHelpBlock(this.formControl.status);
                this.formControl.statusChanges.subscribe(function (status) { return _this.updateHelpBlock(status); });
                if (this.options.debug) {
                    var vars = [];
                    this.debugOutput = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(vars, function (thisVar) { return JSON.stringify(thisVar, null, 2); }).join('\n');
                }
            }
            this.frameworkInitialized = true;
        }
    };
    Bootstrap3FrameworkComponent.prototype.updateHelpBlock = function (status) {
        this.options.helpBlock = status === 'INVALID' &&
            this.options.enableErrorState && this.formControl.errors &&
            (this.formControl.dirty || this.options.feedbackOnRender) ?
            this.jsf.formatErrors(this.formControl.errors, this.options.validationMessages) :
            this.options.description || this.options.help || null;
    };
    Bootstrap3FrameworkComponent.prototype.setTitle = function () {
        switch (this.layoutNode.type) {
            case 'button':
            case 'checkbox':
            case 'section':
            case 'help':
            case 'msg':
            case 'submit':
            case 'message':
            case 'tabarray':
            case 'tabs':
            case '$ref':
                return null;
            case 'advancedfieldset':
                this.widgetOptions.expandable = true;
                this.widgetOptions.title = 'Advanced options';
                return null;
            case 'authfieldset':
                this.widgetOptions.expandable = true;
                this.widgetOptions.title = 'Authentication settings';
                return null;
            case 'fieldset':
                this.widgetOptions.title = this.options.title;
                return null;
            default:
                this.widgetOptions.title = null;
                return this.jsf.setItemTitle(this);
        }
    };
    Bootstrap3FrameworkComponent.prototype.removeItem = function () {
        this.jsf.removeItem(this);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Bootstrap3FrameworkComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], Bootstrap3FrameworkComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], Bootstrap3FrameworkComponent.prototype, "dataIndex", void 0);
    Bootstrap3FrameworkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bootstrap-3-framework',
            template: "\n    <div\n      [class]=\"options?.htmlClass || ''\"\n      [class.has-feedback]=\"options?.feedback && options?.isInputWidget &&\n        (formControl?.dirty || options?.feedbackOnRender)\"\n      [class.has-error]=\"options?.enableErrorState && formControl?.errors &&\n        (formControl?.dirty || options?.feedbackOnRender)\"\n      [class.has-success]=\"options?.enableSuccessState && !formControl?.errors &&\n        (formControl?.dirty || options?.feedbackOnRender)\">\n\n      <button *ngIf=\"showRemoveButton\"\n        class=\"close pull-right\"\n        type=\"button\"\n        (click)=\"removeItem()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n      <div *ngIf=\"options?.messageLocation === 'top'\">\n          <p *ngIf=\"options?.helpBlock\"\n          class=\"help-block\"\n          [innerHTML]=\"options?.helpBlock\"></p>\n      </div>\n\n      <label *ngIf=\"options?.title && layoutNode?.type !== 'tab'\"\n        [attr.for]=\"'control' + layoutNode?._id\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [class.sr-only]=\"options?.notitle\"\n        [innerHTML]=\"options?.title\"></label>\n      <p *ngIf=\"layoutNode?.type === 'submit' && jsf?.formOptions?.fieldsRequired\">\n        <strong class=\"text-danger\">*</strong> = required fields\n      </p>\n      <div [class.input-group]=\"options?.fieldAddonLeft || options?.fieldAddonRight\">\n        <span *ngIf=\"options?.fieldAddonLeft\"\n          class=\"input-group-addon\"\n          [innerHTML]=\"options?.fieldAddonLeft\"></span>\n\n        <select-widget-widget\n          [layoutNode]=\"widgetLayoutNode\"\n          [dataIndex]=\"dataIndex\"\n          [layoutIndex]=\"layoutIndex\"></select-widget-widget>\n\n        <span *ngIf=\"options?.fieldAddonRight\"\n          class=\"input-group-addon\"\n          [innerHTML]=\"options?.fieldAddonRight\"></span>\n      </div>\n\n      <span *ngIf=\"options?.feedback && options?.isInputWidget &&\n          !options?.fieldAddonRight && !layoutNode.arrayItem &&\n          (formControl?.dirty || options?.feedbackOnRender)\"\n        [class.glyphicon-ok]=\"options?.enableSuccessState && !formControl?.errors\"\n        [class.glyphicon-remove]=\"options?.enableErrorState && formControl?.errors\"\n        aria-hidden=\"true\"\n        class=\"form-control-feedback glyphicon\"></span>\n      <div *ngIf=\"options?.messageLocation !== 'top'\">\n        <p *ngIf=\"options?.helpBlock\"\n          class=\"help-block\"\n          [innerHTML]=\"options?.helpBlock\"></p>\n      </div>\n    </div>\n\n    <div *ngIf=\"debug && debugOutput\">debug: <pre>{{debugOutput}}</pre></div>\n  ",
            styles: ["\n    :host /deep/ .list-group-item .form-control-feedback { top: 40; }\n    :host /deep/ .checkbox,\n    :host /deep/ .radio { margin-top: 0; margin-bottom: 0; }\n    :host /deep/ .checkbox-inline,\n    :host /deep/ .checkbox-inline + .checkbox-inline,\n    :host /deep/ .checkbox-inline + .radio-inline,\n    :host /deep/ .radio-inline,\n    :host /deep/ .radio-inline + .radio-inline,\n    :host /deep/ .radio-inline + .checkbox-inline { margin-left: 0; margin-right: 10px; }\n    :host /deep/ .checkbox-inline:last-child,\n    :host /deep/ .radio-inline:last-child { margin-right: 0; }\n    :host /deep/ .ng-invalid.ng-touched { border: 1px solid #f44336; }\n  "],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _json_schema_form_service__WEBPACK_IMPORTED_MODULE_2__["JsonSchemaFormService"]])
    ], Bootstrap3FrameworkComponent);
    return Bootstrap3FrameworkComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3-framework.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3-framework.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: Bootstrap3FrameworkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bootstrap3FrameworkModule", function() { return Bootstrap3FrameworkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _widget_library_widget_library_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widget-library/widget-library.module */ "./src/lib/src/widget-library/widget-library.module.ts");
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../framework */ "./src/lib/src/framework-library/framework.ts");
/* harmony import */ var _bootstrap_3_framework_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap-3-framework.component */ "./src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3-framework.component.ts");
/* harmony import */ var _bootstrap_3_framework__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bootstrap-3.framework */ "./src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3.framework.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Bootstrap3FrameworkModule = (function () {
    function Bootstrap3FrameworkModule() {
    }
    Bootstrap3FrameworkModule_1 = Bootstrap3FrameworkModule;
    Bootstrap3FrameworkModule.forRoot = function () {
        return {
            ngModule: Bootstrap3FrameworkModule_1,
            providers: [
                { provide: _framework__WEBPACK_IMPORTED_MODULE_3__["Framework"], useClass: _bootstrap_3_framework__WEBPACK_IMPORTED_MODULE_5__["Bootstrap3Framework"], multi: true }
            ]
        };
    };
    Bootstrap3FrameworkModule = Bootstrap3FrameworkModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _widget_library_widget_library_module__WEBPACK_IMPORTED_MODULE_2__["WidgetLibraryModule"]],
            declarations: [_bootstrap_3_framework_component__WEBPACK_IMPORTED_MODULE_4__["Bootstrap3FrameworkComponent"]],
            exports: [_bootstrap_3_framework_component__WEBPACK_IMPORTED_MODULE_4__["Bootstrap3FrameworkComponent"]],
            entryComponents: [_bootstrap_3_framework_component__WEBPACK_IMPORTED_MODULE_4__["Bootstrap3FrameworkComponent"]]
        })
    ], Bootstrap3FrameworkModule);
    return Bootstrap3FrameworkModule;
    var Bootstrap3FrameworkModule_1;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3.framework.ts":
/*!**************************************************************************************!*\
  !*** ./src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3.framework.ts ***!
  \**************************************************************************************/
/*! exports provided: Bootstrap3Framework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bootstrap3Framework", function() { return Bootstrap3Framework; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework */ "./src/lib/src/framework-library/framework.ts");
/* harmony import */ var _bootstrap_3_framework_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap-3-framework.component */ "./src/lib/src/framework-library/bootstrap-3-framework/bootstrap-3-framework.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Bootstrap3Framework = (function (_super) {
    __extends(Bootstrap3Framework, _super);
    function Bootstrap3Framework() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'bootstrap-3';
        _this.framework = _bootstrap_3_framework_component__WEBPACK_IMPORTED_MODULE_2__["Bootstrap3FrameworkComponent"];
        _this.stylesheets = [
            '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
            '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css',
        ];
        _this.scripts = [
            '//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js',
            '//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js',
            '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
        ];
        return _this;
    }
    Bootstrap3Framework = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Bootstrap3Framework);
    return Bootstrap3Framework;
}(_framework__WEBPACK_IMPORTED_MODULE_1__["Framework"]));



/***/ }),

/***/ "./src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4-framework.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4-framework.component.ts ***!
  \************************************************************************************************/
/*! exports provided: Bootstrap4FrameworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bootstrap4FrameworkComponent", function() { return Bootstrap4FrameworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/lib/src/shared/index.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Bootstrap4FrameworkComponent = (function () {
    function Bootstrap4FrameworkComponent(changeDetector, jsf) {
        this.changeDetector = changeDetector;
        this.jsf = jsf;
        this.frameworkInitialized = false;
        this.formControl = null;
        this.debugOutput = '';
        this.debug = '';
        this.parentArray = null;
        this.isOrderable = false;
    }
    Object.defineProperty(Bootstrap4FrameworkComponent.prototype, "showRemoveButton", {
        get: function () {
            if (!this.options.removable || this.options.readonly ||
                this.layoutNode.type === '$ref') {
                return false;
            }
            if (this.layoutNode.recursiveReference) {
                return true;
            }
            if (!this.layoutNode.arrayItem || !this.parentArray) {
                return false;
            }
            return this.parentArray.items.length - 1 <= this.parentArray.options.minItems ? false :
                this.layoutNode.arrayItemType === 'list' ? true :
                    this.layoutIndex[this.layoutIndex.length - 1] === this.parentArray.items.length - 2;
        },
        enumerable: true,
        configurable: true
    });
    Bootstrap4FrameworkComponent.prototype.ngOnInit = function () {
        this.initializeFramework();
        if (this.layoutNode.arrayItem && this.layoutNode.type !== '$ref') {
            this.parentArray = this.jsf.getParentNode(this);
            if (this.parentArray) {
                this.isOrderable = this.layoutNode.arrayItemType === 'list' &&
                    !this.options.readonly && this.parentArray.options.orderable;
            }
        }
    };
    Bootstrap4FrameworkComponent.prototype.ngOnChanges = function () {
        if (!this.frameworkInitialized) {
            this.initializeFramework();
        }
    };
    Bootstrap4FrameworkComponent.prototype.initializeFramework = function () {
        var _this = this;
        if (this.layoutNode) {
            this.options = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.layoutNode.options);
            this.widgetLayoutNode = __assign({}, this.layoutNode, { options: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.layoutNode.options) });
            this.widgetOptions = this.widgetLayoutNode.options;
            this.formControl = this.jsf.getFormControl(this);
            this.options.isInputWidget = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["inArray"])(this.layoutNode.type, [
                'button', 'checkbox', 'checkboxes-inline', 'checkboxes', 'color',
                'date', 'datetime-local', 'datetime', 'email', 'file', 'hidden',
                'image', 'integer', 'month', 'number', 'password', 'radio',
                'radiobuttons', 'radios-inline', 'radios', 'range', 'reset', 'search',
                'select', 'submit', 'tel', 'text', 'textarea', 'time', 'url', 'week'
            ]);
            this.options.title = this.setTitle();
            this.options.htmlClass =
                Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.options.htmlClass, 'schema-form-' + this.layoutNode.type);
            this.options.htmlClass =
                this.layoutNode.type === 'array' ?
                    Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.options.htmlClass, 'list-group') :
                    this.layoutNode.arrayItem && this.layoutNode.type !== '$ref' ?
                        Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.options.htmlClass, 'list-group-item') :
                        Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.options.htmlClass, 'form-group');
            this.widgetOptions.htmlClass = '';
            this.options.labelHtmlClass =
                Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.options.labelHtmlClass, 'control-label');
            this.widgetOptions.activeClass =
                Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.activeClass, 'active');
            this.options.fieldAddonLeft =
                this.options.fieldAddonLeft || this.options.prepend;
            this.options.fieldAddonRight =
                this.options.fieldAddonRight || this.options.append;
            if (this.options.title && this.layoutNode.type !== 'tab' &&
                !this.options.notitle && this.options.required &&
                !this.options.title.includes('*')) {
                this.options.title += ' <strong class="text-danger">*</strong>';
            }
            switch (this.layoutNode.type) {
                case 'checkbox':
                case 'checkboxes':
                    this.widgetOptions.htmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.htmlClass, 'checkbox');
                    break;
                case 'checkboxes-inline':
                    this.widgetOptions.htmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.htmlClass, 'checkbox');
                    this.widgetOptions.itemLabelHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.itemLabelHtmlClass, 'checkbox-inline');
                    break;
                case 'radio':
                case 'radios':
                    this.widgetOptions.htmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.htmlClass, 'radio');
                    break;
                case 'radios-inline':
                    this.widgetOptions.htmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.htmlClass, 'radio');
                    this.widgetOptions.itemLabelHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.itemLabelHtmlClass, 'radio-inline');
                    break;
                case 'checkboxbuttons':
                case 'radiobuttons':
                    this.widgetOptions.htmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.htmlClass, 'btn-group');
                    this.widgetOptions.itemLabelHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.itemLabelHtmlClass, 'btn');
                    this.widgetOptions.itemLabelHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.itemLabelHtmlClass, this.options.style || 'btn-default');
                    this.widgetOptions.fieldHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.fieldHtmlClass, 'sr-only');
                    break;
                case 'button':
                case 'submit':
                    this.widgetOptions.fieldHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.fieldHtmlClass, 'btn');
                    this.widgetOptions.fieldHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.fieldHtmlClass, this.options.style || 'btn-info');
                    break;
                case 'array':
                case 'fieldset':
                case 'section':
                case 'conditional':
                case 'advancedfieldset':
                case 'authfieldset':
                case 'selectfieldset':
                case 'optionfieldset':
                    this.options.messageLocation = 'top';
                    break;
                case 'tabarray':
                case 'tabs':
                    this.widgetOptions.htmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.htmlClass, 'tab-content');
                    this.widgetOptions.fieldHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.fieldHtmlClass, 'tab-pane');
                    this.widgetOptions.labelHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.labelHtmlClass, 'nav nav-tabs');
                    break;
                case '$ref':
                    this.widgetOptions.fieldHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.fieldHtmlClass, 'btn pull-right');
                    this.widgetOptions.fieldHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.fieldHtmlClass, this.options.style || 'btn-default');
                    this.options.icon = 'glyphicon glyphicon-plus';
                    break;
                default:
                    this.widgetOptions.fieldHtmlClass = Object(_shared__WEBPACK_IMPORTED_MODULE_3__["addClasses"])(this.widgetOptions.fieldHtmlClass, 'form-control');
            }
            if (this.formControl) {
                this.updateHelpBlock(this.formControl.status);
                this.formControl.statusChanges.subscribe(function (status) { return _this.updateHelpBlock(status); });
                if (this.options.debug) {
                    var vars = [];
                    this.debugOutput = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(vars, function (thisVar) { return JSON.stringify(thisVar, null, 2); }).join('\n');
                }
            }
            this.frameworkInitialized = true;
        }
    };
    Bootstrap4FrameworkComponent.prototype.updateHelpBlock = function (status) {
        this.options.helpBlock = status === 'INVALID' &&
            this.options.enableErrorState && this.formControl.errors &&
            (this.formControl.dirty || this.options.feedbackOnRender) ?
            this.jsf.formatErrors(this.formControl.errors, this.options.validationMessages) :
            this.options.description || this.options.help || null;
    };
    Bootstrap4FrameworkComponent.prototype.setTitle = function () {
        switch (this.layoutNode.type) {
            case 'button':
            case 'checkbox':
            case 'section':
            case 'help':
            case 'msg':
            case 'submit':
            case 'message':
            case 'tabarray':
            case 'tabs':
            case '$ref':
                return null;
            case 'advancedfieldset':
                this.widgetOptions.expandable = true;
                this.widgetOptions.title = 'Advanced options';
                return null;
            case 'authfieldset':
                this.widgetOptions.expandable = true;
                this.widgetOptions.title = 'Authentication settings';
                return null;
            case 'fieldset':
                this.widgetOptions.title = this.options.title;
                return null;
            default:
                this.widgetOptions.title = null;
                return this.jsf.setItemTitle(this);
        }
    };
    Bootstrap4FrameworkComponent.prototype.removeItem = function () {
        this.jsf.removeItem(this);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], Bootstrap4FrameworkComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], Bootstrap4FrameworkComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], Bootstrap4FrameworkComponent.prototype, "dataIndex", void 0);
    Bootstrap4FrameworkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bootstrap-4-framework',
            template: "\n    <div\n      [class]=\"options?.htmlClass || ''\"\n      [class.has-feedback]=\"options?.feedback && options?.isInputWidget &&\n        (formControl?.dirty || options?.feedbackOnRender)\"\n      [class.has-error]=\"options?.enableErrorState && formControl?.errors &&\n        (formControl?.dirty || options?.feedbackOnRender)\"\n      [class.has-success]=\"options?.enableSuccessState && !formControl?.errors &&\n        (formControl?.dirty || options?.feedbackOnRender)\">\n\n      <button *ngIf=\"showRemoveButton\"\n        class=\"close pull-right\"\n        type=\"button\"\n        (click)=\"removeItem()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n      <div *ngIf=\"options?.messageLocation === 'top'\">\n        <p *ngIf=\"options?.helpBlock\"\n          class=\"help-block\"\n          [innerHTML]=\"options?.helpBlock\"></p>\n      </div>\n\n      <label *ngIf=\"options?.title && layoutNode?.type !== 'tab'\"\n        [attr.for]=\"'control' + layoutNode?._id\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [class.sr-only]=\"options?.notitle\"\n        [innerHTML]=\"options?.title\"></label>\n      <p *ngIf=\"layoutNode?.type === 'submit' && jsf?.formOptions?.fieldsRequired\">\n        <strong class=\"text-danger\">*</strong> = required fields\n      </p>\n      <div [class.input-group]=\"options?.fieldAddonLeft || options?.fieldAddonRight\">\n        <span *ngIf=\"options?.fieldAddonLeft\"\n          class=\"input-group-addon\"\n          [innerHTML]=\"options?.fieldAddonLeft\"></span>\n\n        <select-widget-widget\n          [layoutNode]=\"widgetLayoutNode\"\n          [dataIndex]=\"dataIndex\"\n          [layoutIndex]=\"layoutIndex\"></select-widget-widget>\n\n        <span *ngIf=\"options?.fieldAddonRight\"\n          class=\"input-group-addon\"\n          [innerHTML]=\"options?.fieldAddonRight\"></span>\n      </div>\n\n      <span *ngIf=\"options?.feedback && options?.isInputWidget &&\n          !options?.fieldAddonRight && !layoutNode.arrayItem &&\n          (formControl?.dirty || options?.feedbackOnRender)\"\n        [class.glyphicon-ok]=\"options?.enableSuccessState && !formControl?.errors\"\n        [class.glyphicon-remove]=\"options?.enableErrorState && formControl?.errors\"\n        aria-hidden=\"true\"\n        class=\"form-control-feedback glyphicon\"></span>\n      <div *ngIf=\"options?.messageLocation !== 'top'\">\n        <p *ngIf=\"options?.helpBlock\"\n          class=\"help-block\"\n          [innerHTML]=\"options?.helpBlock\"></p>\n      </div>\n    </div>\n\n    <div *ngIf=\"debug && debugOutput\">debug: <pre>{{debugOutput}}</pre></div>\n  ",
            styles: ["\n    :host /deep/ .list-group-item .form-control-feedback { top: 40px; }\n    :host /deep/ .checkbox,\n    :host /deep/ .radio { margin-top: 0; margin-bottom: 0; }\n    :host /deep/ .checkbox-inline,\n    :host /deep/ .checkbox-inline + .checkbox-inline,\n    :host /deep/ .checkbox-inline + .radio-inline,\n    :host /deep/ .radio-inline,\n    :host /deep/ .radio-inline + .radio-inline,\n    :host /deep/ .radio-inline + .checkbox-inline { margin-left: 0; margin-right: 10px; }\n    :host /deep/ .checkbox-inline:last-child,\n    :host /deep/ .radio-inline:last-child { margin-right: 0; }\n    :host /deep/ .ng-invalid.ng-touched { border: 1px solid #f44336; }\n  "],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _json_schema_form_service__WEBPACK_IMPORTED_MODULE_2__["JsonSchemaFormService"]])
    ], Bootstrap4FrameworkComponent);
    return Bootstrap4FrameworkComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4-framework.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4-framework.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: Bootstrap4FrameworkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bootstrap4FrameworkModule", function() { return Bootstrap4FrameworkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _widget_library_widget_library_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widget-library/widget-library.module */ "./src/lib/src/widget-library/widget-library.module.ts");
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../framework */ "./src/lib/src/framework-library/framework.ts");
/* harmony import */ var _bootstrap_4_framework_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap-4-framework.component */ "./src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4-framework.component.ts");
/* harmony import */ var _bootstrap_4_framework__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bootstrap-4.framework */ "./src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4.framework.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Bootstrap4FrameworkModule = (function () {
    function Bootstrap4FrameworkModule() {
    }
    Bootstrap4FrameworkModule_1 = Bootstrap4FrameworkModule;
    Bootstrap4FrameworkModule.forRoot = function () {
        return {
            ngModule: Bootstrap4FrameworkModule_1,
            providers: [
                { provide: _framework__WEBPACK_IMPORTED_MODULE_3__["Framework"], useClass: _bootstrap_4_framework__WEBPACK_IMPORTED_MODULE_5__["Bootstrap4Framework"], multi: true }
            ]
        };
    };
    Bootstrap4FrameworkModule = Bootstrap4FrameworkModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _widget_library_widget_library_module__WEBPACK_IMPORTED_MODULE_2__["WidgetLibraryModule"]],
            declarations: [_bootstrap_4_framework_component__WEBPACK_IMPORTED_MODULE_4__["Bootstrap4FrameworkComponent"]],
            exports: [_bootstrap_4_framework_component__WEBPACK_IMPORTED_MODULE_4__["Bootstrap4FrameworkComponent"]],
            entryComponents: [_bootstrap_4_framework_component__WEBPACK_IMPORTED_MODULE_4__["Bootstrap4FrameworkComponent"]]
        })
    ], Bootstrap4FrameworkModule);
    return Bootstrap4FrameworkModule;
    var Bootstrap4FrameworkModule_1;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4.framework.ts":
/*!**************************************************************************************!*\
  !*** ./src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4.framework.ts ***!
  \**************************************************************************************/
/*! exports provided: Bootstrap4Framework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bootstrap4Framework", function() { return Bootstrap4Framework; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework */ "./src/lib/src/framework-library/framework.ts");
/* harmony import */ var _bootstrap_4_framework_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap-4-framework.component */ "./src/lib/src/framework-library/bootstrap-4-framework/bootstrap-4-framework.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Bootstrap4Framework = (function (_super) {
    __extends(Bootstrap4Framework, _super);
    function Bootstrap4Framework() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'bootstrap-4';
        _this.framework = _bootstrap_4_framework_component__WEBPACK_IMPORTED_MODULE_2__["Bootstrap4FrameworkComponent"];
        _this.stylesheets = [
            '//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css'
        ];
        _this.scripts = [
            '//code.jquery.com/jquery-3.2.1.slim.min.js',
            '//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js',
            '//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js',
        ];
        return _this;
    }
    Bootstrap4Framework = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Bootstrap4Framework);
    return Bootstrap4Framework;
}(_framework__WEBPACK_IMPORTED_MODULE_1__["Framework"]));



/***/ }),

/***/ "./src/lib/src/framework-library/framework-library.service.ts":
/*!********************************************************************!*\
  !*** ./src/lib/src/framework-library/framework-library.service.ts ***!
  \********************************************************************/
/*! exports provided: FrameworkLibraryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkLibraryService", function() { return FrameworkLibraryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _widget_library_widget_library_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widget-library/widget-library.service */ "./src/lib/src/widget-library/widget-library.service.ts");
/* harmony import */ var _shared_utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utility.functions */ "./src/lib/src/shared/utility.functions.ts");
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./framework */ "./src/lib/src/framework-library/framework.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FrameworkLibraryService = (function () {
    function FrameworkLibraryService(frameworks, widgetLibrary) {
        var _this = this;
        this.frameworks = frameworks;
        this.widgetLibrary = widgetLibrary;
        this.activeFramework = null;
        this.loadExternalAssets = false;
        this.frameworkLibrary = {};
        this.frameworks.forEach(function (framework) {
            return _this.frameworkLibrary[framework.name] = framework;
        });
        this.defaultFramework = this.frameworks[0].name;
        this.setFramework(this.defaultFramework);
    }
    FrameworkLibraryService.prototype.setLoadExternalAssets = function (loadExternalAssets) {
        if (loadExternalAssets === void 0) { loadExternalAssets = true; }
        this.loadExternalAssets = !!loadExternalAssets;
    };
    FrameworkLibraryService.prototype.setFramework = function (framework, loadExternalAssets) {
        if (framework === void 0) { framework = this.defaultFramework; }
        if (loadExternalAssets === void 0) { loadExternalAssets = this.loadExternalAssets; }
        this.activeFramework =
            typeof framework === 'string' && this.hasFramework(framework) ?
                this.frameworkLibrary[framework] :
                typeof framework === 'object' && Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(framework, 'framework') ?
                    framework :
                    this.frameworkLibrary[this.defaultFramework];
        return this.registerFrameworkWidgets(this.activeFramework);
    };
    FrameworkLibraryService.prototype.registerFrameworkWidgets = function (framework) {
        return Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(framework, 'widgets') ?
            this.widgetLibrary.registerFrameworkWidgets(framework.widgets) :
            this.widgetLibrary.unRegisterFrameworkWidgets();
    };
    FrameworkLibraryService.prototype.hasFramework = function (type) {
        return Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(this.frameworkLibrary, type);
    };
    FrameworkLibraryService.prototype.getFramework = function () {
        if (!this.activeFramework) {
            this.setFramework('default', true);
        }
        return this.activeFramework.framework;
    };
    FrameworkLibraryService.prototype.getFrameworkWidgets = function () {
        return this.activeFramework.widgets || {};
    };
    FrameworkLibraryService.prototype.getFrameworkStylesheets = function (load) {
        if (load === void 0) { load = this.loadExternalAssets; }
        return (load && this.activeFramework.stylesheets) || [];
    };
    FrameworkLibraryService.prototype.getFrameworkScripts = function (load) {
        if (load === void 0) { load = this.loadExternalAssets; }
        return (load && this.activeFramework.scripts) || [];
    };
    FrameworkLibraryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_framework__WEBPACK_IMPORTED_MODULE_3__["Framework"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_widget_library_widget_library_service__WEBPACK_IMPORTED_MODULE_1__["WidgetLibraryService"])),
        __metadata("design:paramtypes", [Array, _widget_library_widget_library_service__WEBPACK_IMPORTED_MODULE_1__["WidgetLibraryService"]])
    ], FrameworkLibraryService);
    return FrameworkLibraryService;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/framework.ts":
/*!****************************************************!*\
  !*** ./src/lib/src/framework-library/framework.ts ***!
  \****************************************************/
/*! exports provided: Framework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Framework", function() { return Framework; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Framework = (function () {
    function Framework() {
        this.widgets = {};
        this.stylesheets = [];
        this.scripts = [];
    }
    Framework = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Framework);
    return Framework;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/flex-layout-root.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/flex-layout-root.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: FlexLayoutRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexLayoutRootComponent", function() { return FlexLayoutRootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlexLayoutRootComponent = (function () {
    function FlexLayoutRootComponent(jsf) {
        this.jsf = jsf;
        this.isFlexItem = false;
    }
    FlexLayoutRootComponent.prototype.removeItem = function (item) {
        this.jsf.removeItem(item);
    };
    FlexLayoutRootComponent.prototype.getFlexAttribute = function (node, attribute) {
        var index = ['flex-grow', 'flex-shrink', 'flex-basis'].indexOf(attribute);
        return ((node.options || {}).flex || '').split(/\s+/)[index] ||
            (node.options || {})[attribute] || ['1', '1', 'auto'][index];
    };
    FlexLayoutRootComponent.prototype.showWidget = function (layoutNode) {
        return this.jsf.evaluateCondition(layoutNode, this.dataIndex);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FlexLayoutRootComponent.prototype, "dataIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FlexLayoutRootComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FlexLayoutRootComponent.prototype, "layout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlexLayoutRootComponent.prototype, "isFlexItem", void 0);
    FlexLayoutRootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flex-layout-root-widget',
            template: "\n    <div *ngFor=\"let layoutNode of layout; let i = index\"\n      [class.form-flex-item]=\"isFlexItem\"\n      [style.flex-grow]=\"getFlexAttribute(layoutNode, 'flex-grow')\"\n      [style.flex-shrink]=\"getFlexAttribute(layoutNode, 'flex-shrink')\"\n      [style.flex-basis]=\"getFlexAttribute(layoutNode, 'flex-basis')\"\n      [style.align-self]=\"(layoutNode?.options || {})['align-self']\"\n      [style.order]=\"layoutNode?.options?.order\"\n      [fxFlex]=\"layoutNode?.options?.fxFlex\"\n      [fxFlexOrder]=\"layoutNode?.options?.fxFlexOrder\"\n      [fxFlexOffset]=\"layoutNode?.options?.fxFlexOffset\"\n      [fxFlexAlign]=\"layoutNode?.options?.fxFlexAlign\">\n      <select-framework-widget *ngIf=\"showWidget(layoutNode)\"\n        [dataIndex]=\"layoutNode?.arrayItem ? (dataIndex || []).concat(i) : (dataIndex || [])\"\n        [layoutIndex]=\"(layoutIndex || []).concat(i)\"\n        [layoutNode]=\"layoutNode\"></select-framework-widget>\n    <div>",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], FlexLayoutRootComponent);
    return FlexLayoutRootComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/flex-layout-section.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/flex-layout-section.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: FlexLayoutSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexLayoutSectionComponent", function() { return FlexLayoutSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlexLayoutSectionComponent = (function () {
    function FlexLayoutSectionComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.expanded = true;
        this.containerType = 'div';
    }
    Object.defineProperty(FlexLayoutSectionComponent.prototype, "sectionTitle", {
        get: function () {
            return this.options.notitle ? null : this.jsf.setItemTitle(this);
        },
        enumerable: true,
        configurable: true
    });
    FlexLayoutSectionComponent.prototype.ngOnInit = function () {
        this.jsf.initializeControl(this);
        this.options = this.layoutNode.options || {};
        this.expanded = typeof this.options.expanded === 'boolean' ?
            this.options.expanded : !this.options.expandable;
        switch (this.layoutNode.type) {
            case 'section':
            case 'array':
            case 'fieldset':
            case 'advancedfieldset':
            case 'authfieldset':
            case 'optionfieldset':
            case 'selectfieldset':
                this.containerType = 'fieldset';
                break;
            case 'card':
                this.containerType = 'card';
                break;
            case 'expansion-panel':
                this.containerType = 'expansion-panel';
                break;
            default:
                this.containerType = 'div';
        }
    };
    FlexLayoutSectionComponent.prototype.toggleExpanded = function () {
        if (this.options.expandable) {
            this.expanded = !this.expanded;
        }
    };
    FlexLayoutSectionComponent.prototype.getFlexAttribute = function (attribute) {
        var flexActive = this.layoutNode.type === 'flex' ||
            !!this.options.displayFlex ||
            this.options.display === 'flex';
        switch (attribute) {
            case 'is-flex':
                return flexActive;
            case 'display':
                return flexActive ? 'flex' : 'initial';
            case 'flex-direction':
            case 'flex-wrap':
                var index = ['flex-direction', 'flex-wrap'].indexOf(attribute);
                return (this.options['flex-flow'] || '').split(/\s+/)[index] ||
                    this.options[attribute] || ['column', 'nowrap'][index];
            case 'justify-content':
            case 'align-items':
            case 'align-content':
                return this.options[attribute];
            case 'layout':
                return (this.options.fxLayout || 'row') +
                    this.options.fxLayoutWrap ? ' ' + this.options.fxLayoutWrap : '';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlexLayoutSectionComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FlexLayoutSectionComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FlexLayoutSectionComponent.prototype, "dataIndex", void 0);
    FlexLayoutSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flex-layout-section-widget',
            template: "\n    <div *ngIf=\"containerType === 'div'\"\n      [class]=\"options?.htmlClass || ''\"\n      [class.expandable]=\"options?.expandable && !expanded\"\n      [class.expanded]=\"options?.expandable && expanded\">\n      <label *ngIf=\"sectionTitle\"\n        [class]=\"'legend ' + (options?.labelHtmlClass || '')\"\n        [innerHTML]=\"sectionTitle\"\n        (click)=\"toggleExpanded()\"></label>\n      <flex-layout-root-widget *ngIf=\"expanded\"\n        [layout]=\"layoutNode.items\"\n        [dataIndex]=\"dataIndex\"\n        [layoutIndex]=\"layoutIndex\"\n        [isFlexItem]=\"getFlexAttribute('is-flex')\"\n        [class.form-flex-column]=\"getFlexAttribute('flex-direction') === 'column'\"\n        [class.form-flex-row]=\"getFlexAttribute('flex-direction') === 'row'\"\n        [style.display]=\"getFlexAttribute('display')\"\n        [style.flex-direction]=\"getFlexAttribute('flex-direction')\"\n        [style.flex-wrap]=\"getFlexAttribute('flex-wrap')\"\n        [style.justify-content]=\"getFlexAttribute('justify-content')\"\n        [style.align-items]=\"getFlexAttribute('align-items')\"\n        [style.align-content]=\"getFlexAttribute('align-content')\"\n        [fxLayout]=\"getFlexAttribute('layout')\"\n        [fxLayoutGap]=\"options?.fxLayoutGap\"\n        [fxLayoutAlign]=\"options?.fxLayoutAlign\"\n        [attr.fxFlexFill]=\"options?.fxLayoutAlign\"></flex-layout-root-widget>\n      <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n        [innerHTML]=\"options?.errorMessage\"></mat-error>\n    </div>\n\n    <fieldset *ngIf=\"containerType === 'fieldset'\"\n      [class]=\"options?.htmlClass || ''\"\n      [class.expandable]=\"options?.expandable && !expanded\"\n      [class.expanded]=\"options?.expandable && expanded\"\n      [disabled]=\"options?.readonly\">\n      <legend *ngIf=\"sectionTitle\"\n        [class]=\"'legend ' + (options?.labelHtmlClass || '')\"\n        [innerHTML]=\"sectionTitle\"\n        (click)=\"toggleExpanded()\"></legend>\n      <flex-layout-root-widget *ngIf=\"expanded\"\n        [layout]=\"layoutNode.items\"\n        [dataIndex]=\"dataIndex\"\n        [layoutIndex]=\"layoutIndex\"\n        [isFlexItem]=\"getFlexAttribute('is-flex')\"\n        [class.form-flex-column]=\"getFlexAttribute('flex-direction') === 'column'\"\n        [class.form-flex-row]=\"getFlexAttribute('flex-direction') === 'row'\"\n        [style.display]=\"getFlexAttribute('display')\"\n        [style.flex-direction]=\"getFlexAttribute('flex-direction')\"\n        [style.flex-wrap]=\"getFlexAttribute('flex-wrap')\"\n        [style.justify-content]=\"getFlexAttribute('justify-content')\"\n        [style.align-items]=\"getFlexAttribute('align-items')\"\n        [style.align-content]=\"getFlexAttribute('align-content')\"\n        [fxLayout]=\"getFlexAttribute('layout')\"\n        [fxLayoutGap]=\"options?.fxLayoutGap\"\n        [fxLayoutAlign]=\"options?.fxLayoutAlign\"\n        [attr.fxFlexFill]=\"options?.fxLayoutAlign\"></flex-layout-root-widget>\n      <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n        [innerHTML]=\"options?.errorMessage\"></mat-error>\n    </fieldset>\n\n    <mat-card *ngIf=\"containerType === 'card'\"\n      [class]=\"options?.htmlClass || ''\"\n      [class.expandable]=\"options?.expandable && !expanded\"\n      [class.expanded]=\"options?.expandable && expanded\">\n      <mat-card-header *ngIf=\"sectionTitle\">\n        <legend\n          [class]=\"'legend ' + (options?.labelHtmlClass || '')\"\n          [innerHTML]=\"sectionTitle\"\n          (click)=\"toggleExpanded()\"></legend>\n      </mat-card-header>\n      <mat-card-content *ngIf=\"expanded\">\n        <fieldset [disabled]=\"options?.readonly\">\n          <flex-layout-root-widget *ngIf=\"expanded\"\n            [layout]=\"layoutNode.items\"\n            [dataIndex]=\"dataIndex\"\n            [layoutIndex]=\"layoutIndex\"\n            [isFlexItem]=\"getFlexAttribute('is-flex')\"\n            [class.form-flex-column]=\"getFlexAttribute('flex-direction') === 'column'\"\n            [class.form-flex-row]=\"getFlexAttribute('flex-direction') === 'row'\"\n            [style.display]=\"getFlexAttribute('display')\"\n            [style.flex-direction]=\"getFlexAttribute('flex-direction')\"\n            [style.flex-wrap]=\"getFlexAttribute('flex-wrap')\"\n            [style.justify-content]=\"getFlexAttribute('justify-content')\"\n            [style.align-items]=\"getFlexAttribute('align-items')\"\n            [style.align-content]=\"getFlexAttribute('align-content')\"\n            [fxLayout]=\"getFlexAttribute('layout')\"\n            [fxLayoutGap]=\"options?.fxLayoutGap\"\n            [fxLayoutAlign]=\"options?.fxLayoutAlign\"\n            [attr.fxFlexFill]=\"options?.fxLayoutAlign\"></flex-layout-root-widget>\n          </fieldset>\n      </mat-card-content>\n      <mat-card-footer>\n        <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n          [innerHTML]=\"options?.errorMessage\"></mat-error>\n      </mat-card-footer>\n    </mat-card>\n\n    <mat-expansion-panel *ngIf=\"containerType === 'expansion-panel'\"\n      [expanded]=\"expanded\"\n      [hideToggle]=\"!options?.expandable\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <legend *ngIf=\"sectionTitle\"\n            [class]=\"options?.labelHtmlClass\"\n            [innerHTML]=\"sectionTitle\"\n            (click)=\"toggleExpanded()\"></legend>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <fieldset [disabled]=\"options?.readonly\">\n        <flex-layout-root-widget *ngIf=\"expanded\"\n          [layout]=\"layoutNode.items\"\n          [dataIndex]=\"dataIndex\"\n          [layoutIndex]=\"layoutIndex\"\n          [isFlexItem]=\"getFlexAttribute('is-flex')\"\n          [class.form-flex-column]=\"getFlexAttribute('flex-direction') === 'column'\"\n          [class.form-flex-row]=\"getFlexAttribute('flex-direction') === 'row'\"\n          [style.display]=\"getFlexAttribute('display')\"\n          [style.flex-direction]=\"getFlexAttribute('flex-direction')\"\n          [style.flex-wrap]=\"getFlexAttribute('flex-wrap')\"\n          [style.justify-content]=\"getFlexAttribute('justify-content')\"\n          [style.align-items]=\"getFlexAttribute('align-items')\"\n          [style.align-content]=\"getFlexAttribute('align-content')\"\n          [fxLayout]=\"getFlexAttribute('layout')\"\n          [fxLayoutGap]=\"options?.fxLayoutGap\"\n          [fxLayoutAlign]=\"options?.fxLayoutAlign\"\n          [attr.fxFlexFill]=\"options?.fxLayoutAlign\"></flex-layout-root-widget>\n      </fieldset>\n      <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n        [innerHTML]=\"options?.errorMessage\"></mat-error>\n    </mat-expansion-panel>",
            styles: ["\n    fieldset { border: 0; margin: 0; padding: 0; }\n    .legend { font-weight: bold; }\n    .expandable > .legend:before { content: '\u25B6'; padding-right: .3em; }\n    .expanded > .legend:before { content: '\u25BC'; padding-right: .2em; }\n  "],
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], FlexLayoutSectionComponent);
    return FlexLayoutSectionComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/index.ts":
/*!**************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/index.ts ***!
  \**************************************************************************/
/*! exports provided: MATERIAL_FRAMEWORK_COMPONENTS, FlexLayoutRootComponent, FlexLayoutSectionComponent, MaterialAddReferenceComponent, MaterialOneOfComponent, MaterialButtonComponent, MaterialButtonGroupComponent, MaterialCheckboxComponent, MaterialCheckboxesComponent, MaterialChipListComponent, MaterialDatepickerComponent, MaterialFileComponent, MaterialInputComponent, MaterialNumberComponent, MaterialRadiosComponent, MaterialSelectComponent, MaterialSliderComponent, MaterialStepperComponent, MaterialTabsComponent, MaterialTextareaComponent, MaterialDesignFrameworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_FRAMEWORK_COMPONENTS", function() { return MATERIAL_FRAMEWORK_COMPONENTS; });
/* harmony import */ var _flex_layout_root_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flex-layout-root.component */ "./src/lib/src/framework-library/material-design-framework/flex-layout-root.component.ts");
/* harmony import */ var _flex_layout_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flex-layout-section.component */ "./src/lib/src/framework-library/material-design-framework/flex-layout-section.component.ts");
/* harmony import */ var _material_add_reference_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-add-reference.component */ "./src/lib/src/framework-library/material-design-framework/material-add-reference.component.ts");
/* harmony import */ var _material_one_of_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-one-of.component */ "./src/lib/src/framework-library/material-design-framework/material-one-of.component.ts");
/* harmony import */ var _material_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material-button.component */ "./src/lib/src/framework-library/material-design-framework/material-button.component.ts");
/* harmony import */ var _material_button_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material-button-group.component */ "./src/lib/src/framework-library/material-design-framework/material-button-group.component.ts");
/* harmony import */ var _material_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-checkbox.component */ "./src/lib/src/framework-library/material-design-framework/material-checkbox.component.ts");
/* harmony import */ var _material_checkboxes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material-checkboxes.component */ "./src/lib/src/framework-library/material-design-framework/material-checkboxes.component.ts");
/* harmony import */ var _material_chip_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material-chip-list.component */ "./src/lib/src/framework-library/material-design-framework/material-chip-list.component.ts");
/* harmony import */ var _material_datepicker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material-datepicker.component */ "./src/lib/src/framework-library/material-design-framework/material-datepicker.component.ts");
/* harmony import */ var _material_file_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material-file.component */ "./src/lib/src/framework-library/material-design-framework/material-file.component.ts");
/* harmony import */ var _material_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material-input.component */ "./src/lib/src/framework-library/material-design-framework/material-input.component.ts");
/* harmony import */ var _material_number_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material-number.component */ "./src/lib/src/framework-library/material-design-framework/material-number.component.ts");
/* harmony import */ var _material_radios_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material-radios.component */ "./src/lib/src/framework-library/material-design-framework/material-radios.component.ts");
/* harmony import */ var _material_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material-select.component */ "./src/lib/src/framework-library/material-design-framework/material-select.component.ts");
/* harmony import */ var _material_slider_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material-slider.component */ "./src/lib/src/framework-library/material-design-framework/material-slider.component.ts");
/* harmony import */ var _material_stepper_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material-stepper.component */ "./src/lib/src/framework-library/material-design-framework/material-stepper.component.ts");
/* harmony import */ var _material_tabs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./material-tabs.component */ "./src/lib/src/framework-library/material-design-framework/material-tabs.component.ts");
/* harmony import */ var _material_textarea_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./material-textarea.component */ "./src/lib/src/framework-library/material-design-framework/material-textarea.component.ts");
/* harmony import */ var _material_design_framework_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./material-design-framework.component */ "./src/lib/src/framework-library/material-design-framework/material-design-framework.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexLayoutRootComponent", function() { return _flex_layout_root_component__WEBPACK_IMPORTED_MODULE_0__["FlexLayoutRootComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexLayoutSectionComponent", function() { return _flex_layout_section_component__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutSectionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialAddReferenceComponent", function() { return _material_add_reference_component__WEBPACK_IMPORTED_MODULE_2__["MaterialAddReferenceComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialOneOfComponent", function() { return _material_one_of_component__WEBPACK_IMPORTED_MODULE_3__["MaterialOneOfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialButtonComponent", function() { return _material_button_component__WEBPACK_IMPORTED_MODULE_4__["MaterialButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialButtonGroupComponent", function() { return _material_button_group_component__WEBPACK_IMPORTED_MODULE_5__["MaterialButtonGroupComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialCheckboxComponent", function() { return _material_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["MaterialCheckboxComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialCheckboxesComponent", function() { return _material_checkboxes_component__WEBPACK_IMPORTED_MODULE_7__["MaterialCheckboxesComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialChipListComponent", function() { return _material_chip_list_component__WEBPACK_IMPORTED_MODULE_8__["MaterialChipListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDatepickerComponent", function() { return _material_datepicker_component__WEBPACK_IMPORTED_MODULE_9__["MaterialDatepickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialFileComponent", function() { return _material_file_component__WEBPACK_IMPORTED_MODULE_10__["MaterialFileComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialInputComponent", function() { return _material_input_component__WEBPACK_IMPORTED_MODULE_11__["MaterialInputComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialNumberComponent", function() { return _material_number_component__WEBPACK_IMPORTED_MODULE_12__["MaterialNumberComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialRadiosComponent", function() { return _material_radios_component__WEBPACK_IMPORTED_MODULE_13__["MaterialRadiosComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialSelectComponent", function() { return _material_select_component__WEBPACK_IMPORTED_MODULE_14__["MaterialSelectComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialSliderComponent", function() { return _material_slider_component__WEBPACK_IMPORTED_MODULE_15__["MaterialSliderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialStepperComponent", function() { return _material_stepper_component__WEBPACK_IMPORTED_MODULE_16__["MaterialStepperComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialTabsComponent", function() { return _material_tabs_component__WEBPACK_IMPORTED_MODULE_17__["MaterialTabsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialTextareaComponent", function() { return _material_textarea_component__WEBPACK_IMPORTED_MODULE_18__["MaterialTextareaComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignFrameworkComponent", function() { return _material_design_framework_component__WEBPACK_IMPORTED_MODULE_19__["MaterialDesignFrameworkComponent"]; });





















var MATERIAL_FRAMEWORK_COMPONENTS = [
    _flex_layout_root_component__WEBPACK_IMPORTED_MODULE_0__["FlexLayoutRootComponent"], _flex_layout_section_component__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutSectionComponent"],
    _material_add_reference_component__WEBPACK_IMPORTED_MODULE_2__["MaterialAddReferenceComponent"], _material_one_of_component__WEBPACK_IMPORTED_MODULE_3__["MaterialOneOfComponent"],
    _material_button_component__WEBPACK_IMPORTED_MODULE_4__["MaterialButtonComponent"], _material_button_group_component__WEBPACK_IMPORTED_MODULE_5__["MaterialButtonGroupComponent"],
    _material_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["MaterialCheckboxComponent"], _material_checkboxes_component__WEBPACK_IMPORTED_MODULE_7__["MaterialCheckboxesComponent"],
    _material_chip_list_component__WEBPACK_IMPORTED_MODULE_8__["MaterialChipListComponent"], _material_datepicker_component__WEBPACK_IMPORTED_MODULE_9__["MaterialDatepickerComponent"],
    _material_file_component__WEBPACK_IMPORTED_MODULE_10__["MaterialFileComponent"], _material_input_component__WEBPACK_IMPORTED_MODULE_11__["MaterialInputComponent"], _material_number_component__WEBPACK_IMPORTED_MODULE_12__["MaterialNumberComponent"],
    _material_radios_component__WEBPACK_IMPORTED_MODULE_13__["MaterialRadiosComponent"], _material_select_component__WEBPACK_IMPORTED_MODULE_14__["MaterialSelectComponent"], _material_slider_component__WEBPACK_IMPORTED_MODULE_15__["MaterialSliderComponent"],
    _material_stepper_component__WEBPACK_IMPORTED_MODULE_16__["MaterialStepperComponent"], _material_tabs_component__WEBPACK_IMPORTED_MODULE_17__["MaterialTabsComponent"], _material_textarea_component__WEBPACK_IMPORTED_MODULE_18__["MaterialTextareaComponent"],
    _material_design_framework_component__WEBPACK_IMPORTED_MODULE_19__["MaterialDesignFrameworkComponent"]
];






















/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-add-reference.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-add-reference.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: MaterialAddReferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialAddReferenceComponent", function() { return MaterialAddReferenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialAddReferenceComponent = (function () {
    function MaterialAddReferenceComponent(jsf) {
        this.jsf = jsf;
    }
    MaterialAddReferenceComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
    };
    Object.defineProperty(MaterialAddReferenceComponent.prototype, "showAddButton", {
        get: function () {
            return !this.layoutNode.arrayItem ||
                this.layoutIndex[this.layoutIndex.length - 1] < this.options.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    MaterialAddReferenceComponent.prototype.addItem = function (event) {
        event.preventDefault();
        this.jsf.addItem(this);
    };
    Object.defineProperty(MaterialAddReferenceComponent.prototype, "buttonText", {
        get: function () {
            var parent = {
                dataIndex: this.dataIndex.slice(0, -1),
                layoutIndex: this.layoutIndex.slice(0, -1),
                layoutNode: this.jsf.getParentNode(this),
            };
            return parent.layoutNode.add ||
                this.jsf.setArrayItemTitle(parent, this.layoutNode, this.itemCount);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialAddReferenceComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialAddReferenceComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialAddReferenceComponent.prototype, "dataIndex", void 0);
    MaterialAddReferenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-add-reference-widget',
            template: "\n    <section [class]=\"options?.htmlClass || ''\" align=\"end\">\n      <button mat-raised-button *ngIf=\"showAddButton\"\n        [color]=\"options?.color || 'accent'\"\n        [disabled]=\"options?.readonly\"\n        (click)=\"addItem($event)\">\n        <span *ngIf=\"options?.icon\" [class]=\"options?.icon\"></span>\n        <span *ngIf=\"options?.title\" [innerHTML]=\"buttonText\"></span>\n      </button>\n    </section>",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialAddReferenceComponent);
    return MaterialAddReferenceComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-button-group.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-button-group.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: MaterialButtonGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialButtonGroupComponent", function() { return MaterialButtonGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/lib/src/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialButtonGroupComponent = (function () {
    function MaterialButtonGroupComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.radiosList = [];
        this.vertical = false;
    }
    MaterialButtonGroupComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.radiosList = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["buildTitleMap"])(this.options.titleMap || this.options.enumNames, this.options.enum, true);
        this.jsf.initializeControl(this);
    };
    MaterialButtonGroupComponent.prototype.updateValue = function (value) {
        this.options.showErrors = true;
        this.jsf.updateValue(this, value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialButtonGroupComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialButtonGroupComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialButtonGroupComponent.prototype, "dataIndex", void 0);
    MaterialButtonGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-button-group-widget',
            template: "\n    <div>\n      <div *ngIf=\"options?.title\">\n        <label\n          [attr.for]=\"'control' + layoutNode?._id\"\n          [class]=\"options?.labelHtmlClass || ''\"\n          [style.display]=\"options?.notitle ? 'none' : ''\"\n          [innerHTML]=\"options?.title\"></label>\n      </div>\n      <mat-button-toggle-group\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.required]=\"options?.required\"\n        [disabled]=\"controlDisabled || options?.readonly\"\n        [name]=\"controlName\"\n        [value]=\"controlValue\"\n        [vertical]=\"!!options.vertical\">\n        <mat-button-toggle *ngFor=\"let radioItem of radiosList\"\n          [id]=\"'control' + layoutNode?._id + '/' + radioItem?.name\"\n          [value]=\"radioItem?.value\"\n          (click)=\"updateValue(radioItem?.value)\">\n          <span [innerHTML]=\"radioItem?.name\"></span>\n        </mat-button-toggle>\n      </mat-button-toggle-group>\n      <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n        [innerHTML]=\"options?.errorMessage\"></mat-error>\n    </div>",
            styles: [" mat-error { font-size: 75%; } "],
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialButtonGroupComponent);
    return MaterialButtonGroupComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-button.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-button.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MaterialButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialButtonComponent", function() { return MaterialButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony import */ var _shared_utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/utility.functions */ "./src/lib/src/shared/utility.functions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialButtonComponent = (function () {
    function MaterialButtonComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    MaterialButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        if (Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(this.options, 'disabled')) {
            this.controlDisabled = this.options.disabled;
        }
        else if (this.jsf.formOptions.disableInvalidSubmit) {
            this.controlDisabled = !this.jsf.isValid;
            this.jsf.isValidChanges.subscribe(function (isValid) { return _this.controlDisabled = !isValid; });
        }
    };
    MaterialButtonComponent.prototype.updateValue = function (event) {
        if (typeof this.options.onClick === 'function') {
            this.options.onClick(event);
        }
        else {
            this.jsf.updateValue(this, event.target.value);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialButtonComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialButtonComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialButtonComponent.prototype, "dataIndex", void 0);
    MaterialButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-button-widget',
            template: "\n    <div class=\"button-row\" [class]=\"options?.htmlClass || ''\">\n      <button mat-raised-button\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [color]=\"options?.color || 'primary'\"\n        [disabled]=\"controlDisabled || options?.readonly\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [type]=\"layoutNode?.type\"\n        [value]=\"controlValue\"\n        (click)=\"updateValue($event)\">\n        <mat-icon *ngIf=\"options?.icon\" class=\"mat-24\">{{options?.icon}}</mat-icon>\n        <span *ngIf=\"options?.title\" [innerHTML]=\"options?.title\"></span>\n      </button>\n    </div>",
            styles: [" button { margin-top: 10px; } "],
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialButtonComponent);
    return MaterialButtonComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-checkbox.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-checkbox.component.ts ***!
  \************************************************************************************************/
/*! exports provided: MaterialCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialCheckboxComponent", function() { return MaterialCheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialCheckboxComponent = (function () {
    function MaterialCheckboxComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.trueValue = true;
        this.falseValue = false;
        this.showSlideToggle = false;
    }
    MaterialCheckboxComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this, !this.options.readonly);
        if (this.controlValue === null || this.controlValue === undefined) {
            this.controlValue = false;
            this.jsf.updateValue(this, this.falseValue);
        }
        if (this.layoutNode.type === 'slide-toggle' ||
            this.layoutNode.format === 'slide-toggle') {
            this.showSlideToggle = true;
        }
    };
    MaterialCheckboxComponent.prototype.updateValue = function (event) {
        this.options.showErrors = true;
        this.jsf.updateValue(this, event.checked ? this.trueValue : this.falseValue);
    };
    Object.defineProperty(MaterialCheckboxComponent.prototype, "isChecked", {
        get: function () {
            return this.jsf.getFormControlValue(this) === this.trueValue;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialCheckboxComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialCheckboxComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialCheckboxComponent.prototype, "dataIndex", void 0);
    MaterialCheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-checkbox-widget',
            template: "\n    <mat-checkbox *ngIf=\"boundControl && !showSlideToggle\"\n      [formControl]=\"formControl\"\n      labelPosition=\"left\"\n      [color]=\"options?.color || 'primary'\"\n      [id]=\"'control' + layoutNode?._id\"\n      labelPosition=\"after\"\n      [name]=\"controlName\"\n      (blur)=\"options.showErrors = true\">\n      <span *ngIf=\"options?.title\"\n        class=\"checkbox-name\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></span>\n    </mat-checkbox>\n    <mat-checkbox *ngIf=\"!boundControl && !showSlideToggle\"\n      labelPosition=\"left\"\n      [color]=\"options?.color || 'primary'\"\n      [disabled]=\"controlDisabled || options?.readonly\"\n      [id]=\"'control' + layoutNode?._id\"\n      labelPosition=\"after\"\n      [name]=\"controlName\"\n      [checked]=\"isChecked\"\n      (blur)=\"options.showErrors = true\"\n      (change)=\"updateValue($event)\">\n      <span *ngIf=\"options?.title\"\n        class=\"checkbox-name\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></span>\n    </mat-checkbox>\n    <mat-slide-toggle *ngIf=\"boundControl && showSlideToggle\"\n      [formControl]=\"formControl\"\n      align=\"left\"\n      [color]=\"options?.color || 'primary'\"\n      [id]=\"'control' + layoutNode?._id\"\n      labelPosition=\"after\"\n      [name]=\"controlName\"\n      (blur)=\"options.showErrors = true\">\n      <span *ngIf=\"options?.title\"\n        class=\"checkbox-name\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></span>\n    </mat-slide-toggle>\n    <mat-slide-toggle *ngIf=\"!boundControl && showSlideToggle\"\n      align=\"left\"\n      [color]=\"options?.color || 'primary'\"\n      [disabled]=\"controlDisabled || options?.readonly\"\n      [id]=\"'control' + layoutNode?._id\"\n      labelPosition=\"after\"\n      [name]=\"controlName\"\n      [checked]=\"isChecked\"\n      (blur)=\"options.showErrors = true\"\n      (change)=\"updateValue($event)\">\n      <span *ngIf=\"options?.title\"\n        class=\"checkbox-name\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></span>\n    </mat-slide-toggle>\n    <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n      [innerHTML]=\"options?.errorMessage\"></mat-error>",
            styles: ["\n    .checkbox-name { white-space: nowrap; }\n    mat-error { font-size: 75%; }\n  "],
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialCheckboxComponent);
    return MaterialCheckboxComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-checkboxes.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-checkboxes.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: MaterialCheckboxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialCheckboxesComponent", function() { return MaterialCheckboxesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/lib/src/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialCheckboxesComponent = (function () {
    function MaterialCheckboxesComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.horizontalList = false;
        this.checkboxList = [];
    }
    MaterialCheckboxesComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.horizontalList = this.layoutNode.type === 'checkboxes-inline' ||
            this.layoutNode.type === 'checkboxbuttons';
        this.jsf.initializeControl(this);
        this.checkboxList = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["buildTitleMap"])(this.options.titleMap || this.options.enumNames, this.options.enum, true);
        if (this.boundControl) {
            var formArray = this.jsf.getFormControl(this);
            for (var _i = 0, _a = this.checkboxList; _i < _a.length; _i++) {
                var checkboxItem = _a[_i];
                checkboxItem.checked = formArray.value.includes(checkboxItem.value);
            }
        }
    };
    Object.defineProperty(MaterialCheckboxesComponent.prototype, "allChecked", {
        get: function () {
            return this.checkboxList.filter(function (t) { return t.checked; }).length === this.checkboxList.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaterialCheckboxesComponent.prototype, "someChecked", {
        get: function () {
            var checkedItems = this.checkboxList.filter(function (t) { return t.checked; }).length;
            return checkedItems > 0 && checkedItems < this.checkboxList.length;
        },
        enumerable: true,
        configurable: true
    });
    MaterialCheckboxesComponent.prototype.updateValue = function () {
        this.options.showErrors = true;
        if (this.boundControl) {
            this.jsf.updateArrayCheckboxList(this, this.checkboxList);
        }
    };
    MaterialCheckboxesComponent.prototype.updateAllValues = function (event) {
        this.options.showErrors = true;
        this.checkboxList.forEach(function (t) { return t.checked = event.checked; });
        this.updateValue();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialCheckboxesComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialCheckboxesComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialCheckboxesComponent.prototype, "dataIndex", void 0);
    MaterialCheckboxesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-checkboxes-widget',
            template: "\n    <div>\n      <mat-checkbox type=\"checkbox\"\n        [checked]=\"allChecked\"\n        [color]=\"options?.color || 'primary'\"\n        [disabled]=\"controlDisabled || options?.readonly\"\n        [indeterminate]=\"someChecked\"\n        [name]=\"options?.name\"\n        (blur)=\"options.showErrors = true\"\n        (change)=\"updateAllValues($event)\">\n        <span class=\"checkbox-name\" [innerHTML]=\"options?.name\"></span>\n      </mat-checkbox>\n      <label *ngIf=\"options?.title\"\n        class=\"title\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></label>\n      <ul class=\"checkbox-list\" [class.horizontal-list]=\"horizontalList\">\n        <li *ngFor=\"let checkboxItem of checkboxList\"\n          [class]=\"options?.htmlClass || ''\">\n          <mat-checkbox type=\"checkbox\"\n            [(ngModel)]=\"checkboxItem.checked\"\n            [color]=\"options?.color || 'primary'\"\n            [disabled]=\"controlDisabled || options?.readonly\"\n            [name]=\"checkboxItem?.name\"\n            (blur)=\"options.showErrors = true\"\n            (change)=\"updateValue()\">\n            <span class=\"checkbox-name\" [innerHTML]=\"checkboxItem?.name\"></span>\n          </mat-checkbox>\n        </li>\n      </ul>\n      <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n        [innerHTML]=\"options?.errorMessage\"></mat-error>\n    </div>",
            styles: ["\n    .title { font-weight: bold; }\n    .checkbox-list { list-style-type: none; }\n    .horizontal-list > li { display: inline-block; margin-right: 10px; zoom: 1; }\n    .checkbox-name { white-space: nowrap; }\n    mat-error { font-size: 75%; }\n  "],
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialCheckboxesComponent);
    return MaterialCheckboxesComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-chip-list.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-chip-list.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: MaterialChipListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialChipListComponent", function() { return MaterialChipListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialChipListComponent = (function () {
    function MaterialChipListComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    MaterialChipListComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    MaterialChipListComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialChipListComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialChipListComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialChipListComponent.prototype, "dataIndex", void 0);
    MaterialChipListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-chip-list-widget',
            template: "",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialChipListComponent);
    return MaterialChipListComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-datepicker.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-datepicker.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: MaterialDatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDatepickerComponent", function() { return MaterialDatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/lib/src/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialDatepickerComponent = (function () {
    function MaterialDatepickerComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.autoCompleteList = [];
    }
    MaterialDatepickerComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this, !this.options.readonly);
        this.setControlDate(this.controlValue);
        if (!this.options.notitle && !this.options.description && this.options.placeholder) {
            this.options.description = this.options.placeholder;
        }
    };
    MaterialDatepickerComponent.prototype.ngOnChanges = function () {
        this.setControlDate(this.controlValue);
    };
    MaterialDatepickerComponent.prototype.setControlDate = function (dateString) {
        this.dateValue = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["stringToDate"])(dateString);
    };
    MaterialDatepickerComponent.prototype.updateValue = function (event) {
        this.options.showErrors = true;
        this.jsf.updateValue(this, Object(_shared__WEBPACK_IMPORTED_MODULE_2__["dateToString"])(event, this.options));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialDatepickerComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialDatepickerComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialDatepickerComponent.prototype, "dataIndex", void 0);
    MaterialDatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-datepicker-widget',
            template: "\n    <mat-form-field [style.width]=\"'100%'\">\n      <span matPrefix *ngIf=\"options?.prefix || options?.fieldAddonLeft\"\n        [innerHTML]=\"options?.prefix || options?.fieldAddonLeft\"></span>\n      <input matInput *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [id]=\"'control' + layoutNode?._id\"\n        [max]=\"options?.maximum\"\n        [matDatepicker]=\"picker\"\n        [min]=\"options?.minimum\"\n        [name]=\"controlName\"\n        [placeholder]=\"options?.title\"\n        [required]=\"options?.required\"\n        [style.width]=\"'100%'\"\n        (blur)=\"options.showErrors = true\">\n      <input matInput *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [disabled]=\"controlDisabled || options?.readonly\"\n        [id]=\"'control' + layoutNode?._id\"\n        [max]=\"options?.maximum\"\n        [matDatepicker]=\"picker\"\n        [min]=\"options?.minimum\"\n        [name]=\"controlName\"\n        [placeholder]=\"options?.title\"\n        [required]=\"options?.required\"\n        [style.width]=\"'100%'\"\n        [value]=\"dateValue\"\n        (blur)=\"options.showErrors = true\"\n        (change)=\"updateValue($event)\"\n        (input)=\"updateValue($event)\">\n      <span matSuffix *ngIf=\"options?.suffix || options?.fieldAddonRight\"\n        [innerHTML]=\"options?.suffix || options?.fieldAddonRight\"></span>\n      <mat-hint *ngIf=\"options?.description && (!options?.showErrors || !options?.errorMessage)\"\n        align=\"end\" [innerHTML]=\"options?.description\"></mat-hint>\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n    <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n      [innerHTML]=\"options?.errorMessage\"></mat-error>",
            styles: ["\n    mat-error { font-size: 75%; margin-top: -1rem; margin-bottom: 0.5rem; }\n    ::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex\n      .mat-form-field-infix { width: initial; }\n  "],
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialDatepickerComponent);
    return MaterialDatepickerComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-design-framework.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-design-framework.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: MaterialDesignFrameworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignFrameworkComponent", function() { return MaterialDesignFrameworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/lib/src/shared/index.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaterialDesignFrameworkComponent = (function () {
    function MaterialDesignFrameworkComponent(changeDetector, jsf) {
        this.changeDetector = changeDetector;
        this.jsf = jsf;
        this.frameworkInitialized = false;
        this.formControl = null;
        this.parentArray = null;
        this.isOrderable = false;
        this.dynamicTitle = null;
    }
    Object.defineProperty(MaterialDesignFrameworkComponent.prototype, "showRemoveButton", {
        get: function () {
            if (!this.layoutNode || !this.widgetOptions.removable ||
                this.widgetOptions.readonly || this.layoutNode.type === '$ref') {
                return false;
            }
            if (this.layoutNode.recursiveReference) {
                return true;
            }
            if (!this.layoutNode.arrayItem || !this.parentArray) {
                return false;
            }
            return this.parentArray.items.length - 1 <= this.parentArray.options.minItems ? false :
                this.layoutNode.arrayItemType === 'list' ? true :
                    this.layoutIndex[this.layoutIndex.length - 1] === this.parentArray.items.length - 2;
        },
        enumerable: true,
        configurable: true
    });
    MaterialDesignFrameworkComponent.prototype.ngOnInit = function () {
        this.initializeFramework();
    };
    MaterialDesignFrameworkComponent.prototype.ngOnChanges = function () {
        if (!this.frameworkInitialized) {
            this.initializeFramework();
        }
        if (this.dynamicTitle) {
            this.updateTitle();
        }
    };
    MaterialDesignFrameworkComponent.prototype.initializeFramework = function () {
        if (this.layoutNode) {
            this.options = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.layoutNode.options || {});
            this.widgetLayoutNode = __assign({}, this.layoutNode, { options: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.layoutNode.options || {}) });
            this.widgetOptions = this.widgetLayoutNode.options;
            this.formControl = this.jsf.getFormControl(this);
            if (Object(_shared__WEBPACK_IMPORTED_MODULE_3__["isDefined"])(this.widgetOptions.minimum) &&
                Object(_shared__WEBPACK_IMPORTED_MODULE_3__["isDefined"])(this.widgetOptions.maximum) &&
                this.widgetOptions.multipleOf >= 1) {
                this.layoutNode.type = 'range';
            }
            if (!['$ref', 'advancedfieldset', 'authfieldset', 'button', 'card',
                'checkbox', 'expansion-panel', 'help', 'message', 'msg', 'section',
                'submit', 'tabarray', 'tabs'].includes(this.layoutNode.type) &&
                /{{.+?}}/.test(this.widgetOptions.title || '')) {
                this.dynamicTitle = this.widgetOptions.title;
                this.updateTitle();
            }
            if (this.layoutNode.arrayItem && this.layoutNode.type !== '$ref') {
                this.parentArray = this.jsf.getParentNode(this);
                if (this.parentArray) {
                    this.isOrderable =
                        this.parentArray.type.slice(0, 3) !== 'tab' &&
                            this.layoutNode.arrayItemType === 'list' &&
                            !this.widgetOptions.readonly &&
                            this.parentArray.options.orderable;
                }
            }
            this.frameworkInitialized = true;
        }
        else {
            this.options = {};
        }
    };
    MaterialDesignFrameworkComponent.prototype.updateTitle = function () {
        this.widgetLayoutNode.options.title = this.jsf.parseText(this.dynamicTitle, this.jsf.getFormControlValue(this), this.jsf.getFormControlGroup(this).value, this.dataIndex[this.dataIndex.length - 1]);
    };
    MaterialDesignFrameworkComponent.prototype.removeItem = function () {
        this.jsf.removeItem(this);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialDesignFrameworkComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialDesignFrameworkComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialDesignFrameworkComponent.prototype, "dataIndex", void 0);
    MaterialDesignFrameworkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-design-framework',
            template: "\n    <div\n      [class.array-item]=\"widgetLayoutNode?.arrayItem && widgetLayoutNode?.type !== '$ref'\"\n      [orderable]=\"isOrderable\"\n      [dataIndex]=\"dataIndex\"\n      [layoutIndex]=\"layoutIndex\"\n      [layoutNode]=\"widgetLayoutNode\">\n      <svg *ngIf=\"showRemoveButton\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        height=\"18\" width=\"18\" viewBox=\"0 0 24 24\"\n        class=\"close-button\"\n        (click)=\"removeItem()\">\n        <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z\"/>\n      </svg>\n      <select-widget-widget\n        [dataIndex]=\"dataIndex\"\n        [layoutIndex]=\"layoutIndex\"\n        [layoutNode]=\"widgetLayoutNode\"></select-widget-widget>\n    </div>\n    <div class=\"spacer\" *ngIf=\"widgetLayoutNode?.arrayItem && widgetLayoutNode?.type !== '$ref'\"></div>",
            styles: ["\n    .array-item {\n      border-radius: 2px;\n      box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),\n                  0 2px 2px  0   rgba(0,0,0,.14),\n                  0 1px 5px  0   rgba(0,0,0,.12);\n      padding: 6px;\n      position: relative;\n      transition: all 280ms cubic-bezier(.4, 0, .2, 1);\n    }\n    .close-button {\n      cursor: pointer;\n      position: absolute;\n      top: 6px;\n      right: 6px;\n      fill: rgba(0,0,0,.4);\n      visibility: hidden;\n      z-index: 500;\n    }\n    .close-button:hover { fill: rgba(0,0,0,.8); }\n    .array-item:hover > .close-button { visibility: visible; }\n    .spacer { margin: 6px 0; }\n    [draggable=true]:hover {\n      box-shadow: 0 5px 5px -3px rgba(0,0,0,.2),\n                  0 8px 10px 1px rgba(0,0,0,.14),\n                  0 3px 14px 2px rgba(0,0,0,.12);\n      cursor: move;\n      z-index: 10;\n    }\n    [draggable=true].drag-target-top {\n      box-shadow: 0 -2px 0 #000;\n      position: relative; z-index: 20;\n    }\n    [draggable=true].drag-target-bottom {\n      box-shadow: 0 2px 0 #000;\n      position: relative; z-index: 20;\n    }\n  "],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _json_schema_form_service__WEBPACK_IMPORTED_MODULE_2__["JsonSchemaFormService"]])
    ], MaterialDesignFrameworkComponent);
    return MaterialDesignFrameworkComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-design-framework.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-design-framework.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ANGULAR_MATERIAL_MODULES, MaterialDesignFrameworkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANGULAR_MATERIAL_MODULES", function() { return ANGULAR_MATERIAL_MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignFrameworkModule", function() { return MaterialDesignFrameworkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _widget_library_widget_library_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widget-library/widget-library.module */ "./src/lib/src/widget-library/widget-library.module.ts");
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../framework */ "./src/lib/src/framework-library/framework.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index */ "./src/lib/src/framework-library/material-design-framework/index.ts");
/* harmony import */ var _material_design_framework__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material-design.framework */ "./src/lib/src/framework-library/material-design-framework/material-design.framework.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ANGULAR_MATERIAL_MODULES = [
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
];




var MaterialDesignFrameworkModule = (function () {
    function MaterialDesignFrameworkModule() {
    }
    MaterialDesignFrameworkModule_1 = MaterialDesignFrameworkModule;
    MaterialDesignFrameworkModule.forRoot = function () {
        return {
            ngModule: MaterialDesignFrameworkModule_1,
            providers: [
                { provide: _framework__WEBPACK_IMPORTED_MODULE_6__["Framework"], useClass: _material_design_framework__WEBPACK_IMPORTED_MODULE_8__["MaterialDesignFramework"], multi: true }
            ]
        };
    };
    MaterialDesignFrameworkModule = MaterialDesignFrameworkModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]
            ].concat(ANGULAR_MATERIAL_MODULES, [
                _widget_library_widget_library_module__WEBPACK_IMPORTED_MODULE_5__["WidgetLibraryModule"]
            ]),
            declarations: _index__WEBPACK_IMPORTED_MODULE_7__["MATERIAL_FRAMEWORK_COMPONENTS"].slice(),
            exports: _index__WEBPACK_IMPORTED_MODULE_7__["MATERIAL_FRAMEWORK_COMPONENTS"].slice(),
            entryComponents: _index__WEBPACK_IMPORTED_MODULE_7__["MATERIAL_FRAMEWORK_COMPONENTS"].slice()
        })
    ], MaterialDesignFrameworkModule);
    return MaterialDesignFrameworkModule;
    var MaterialDesignFrameworkModule_1;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-design.framework.ts":
/*!**********************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-design.framework.ts ***!
  \**********************************************************************************************/
/*! exports provided: MaterialDesignFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignFramework", function() { return MaterialDesignFramework; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework */ "./src/lib/src/framework-library/framework.ts");
/* harmony import */ var _flex_layout_root_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flex-layout-root.component */ "./src/lib/src/framework-library/material-design-framework/flex-layout-root.component.ts");
/* harmony import */ var _flex_layout_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flex-layout-section.component */ "./src/lib/src/framework-library/material-design-framework/flex-layout-section.component.ts");
/* harmony import */ var _material_add_reference_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material-add-reference.component */ "./src/lib/src/framework-library/material-design-framework/material-add-reference.component.ts");
/* harmony import */ var _material_one_of_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material-one-of.component */ "./src/lib/src/framework-library/material-design-framework/material-one-of.component.ts");
/* harmony import */ var _material_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-button.component */ "./src/lib/src/framework-library/material-design-framework/material-button.component.ts");
/* harmony import */ var _material_button_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material-button-group.component */ "./src/lib/src/framework-library/material-design-framework/material-button-group.component.ts");
/* harmony import */ var _material_checkbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material-checkbox.component */ "./src/lib/src/framework-library/material-design-framework/material-checkbox.component.ts");
/* harmony import */ var _material_checkboxes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material-checkboxes.component */ "./src/lib/src/framework-library/material-design-framework/material-checkboxes.component.ts");
/* harmony import */ var _material_chip_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material-chip-list.component */ "./src/lib/src/framework-library/material-design-framework/material-chip-list.component.ts");
/* harmony import */ var _material_datepicker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material-datepicker.component */ "./src/lib/src/framework-library/material-design-framework/material-datepicker.component.ts");
/* harmony import */ var _material_file_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material-file.component */ "./src/lib/src/framework-library/material-design-framework/material-file.component.ts");
/* harmony import */ var _material_input_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material-input.component */ "./src/lib/src/framework-library/material-design-framework/material-input.component.ts");
/* harmony import */ var _material_number_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./material-number.component */ "./src/lib/src/framework-library/material-design-framework/material-number.component.ts");
/* harmony import */ var _material_radios_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./material-radios.component */ "./src/lib/src/framework-library/material-design-framework/material-radios.component.ts");
/* harmony import */ var _material_select_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material-select.component */ "./src/lib/src/framework-library/material-design-framework/material-select.component.ts");
/* harmony import */ var _material_slider_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./material-slider.component */ "./src/lib/src/framework-library/material-design-framework/material-slider.component.ts");
/* harmony import */ var _material_stepper_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./material-stepper.component */ "./src/lib/src/framework-library/material-design-framework/material-stepper.component.ts");
/* harmony import */ var _material_tabs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./material-tabs.component */ "./src/lib/src/framework-library/material-design-framework/material-tabs.component.ts");
/* harmony import */ var _material_textarea_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./material-textarea.component */ "./src/lib/src/framework-library/material-design-framework/material-textarea.component.ts");
/* harmony import */ var _material_design_framework_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./material-design-framework.component */ "./src/lib/src/framework-library/material-design-framework/material-design-framework.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var MaterialDesignFramework = (function (_super) {
    __extends(MaterialDesignFramework, _super);
    function MaterialDesignFramework() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'material-design';
        _this.framework = _material_design_framework_component__WEBPACK_IMPORTED_MODULE_21__["MaterialDesignFrameworkComponent"];
        _this.stylesheets = [
            '//fonts.googleapis.com/icon?family=Material+Icons',
            '//fonts.googleapis.com/css?family=Roboto:300,400,500,700',
        ];
        _this.widgets = {
            'root': _flex_layout_root_component__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutRootComponent"],
            'section': _flex_layout_section_component__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutSectionComponent"],
            '$ref': _material_add_reference_component__WEBPACK_IMPORTED_MODULE_4__["MaterialAddReferenceComponent"],
            'button': _material_button_component__WEBPACK_IMPORTED_MODULE_6__["MaterialButtonComponent"],
            'button-group': _material_button_group_component__WEBPACK_IMPORTED_MODULE_7__["MaterialButtonGroupComponent"],
            'checkbox': _material_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["MaterialCheckboxComponent"],
            'checkboxes': _material_checkboxes_component__WEBPACK_IMPORTED_MODULE_9__["MaterialCheckboxesComponent"],
            'chip-list': _material_chip_list_component__WEBPACK_IMPORTED_MODULE_10__["MaterialChipListComponent"],
            'date': _material_datepicker_component__WEBPACK_IMPORTED_MODULE_11__["MaterialDatepickerComponent"],
            'file': _material_file_component__WEBPACK_IMPORTED_MODULE_12__["MaterialFileComponent"],
            'number': _material_number_component__WEBPACK_IMPORTED_MODULE_14__["MaterialNumberComponent"],
            'one-of': _material_one_of_component__WEBPACK_IMPORTED_MODULE_5__["MaterialOneOfComponent"],
            'radios': _material_radios_component__WEBPACK_IMPORTED_MODULE_15__["MaterialRadiosComponent"],
            'select': _material_select_component__WEBPACK_IMPORTED_MODULE_16__["MaterialSelectComponent"],
            'slider': _material_slider_component__WEBPACK_IMPORTED_MODULE_17__["MaterialSliderComponent"],
            'stepper': _material_stepper_component__WEBPACK_IMPORTED_MODULE_18__["MaterialStepperComponent"],
            'tabs': _material_tabs_component__WEBPACK_IMPORTED_MODULE_19__["MaterialTabsComponent"],
            'text': _material_input_component__WEBPACK_IMPORTED_MODULE_13__["MaterialInputComponent"],
            'textarea': _material_textarea_component__WEBPACK_IMPORTED_MODULE_20__["MaterialTextareaComponent"],
            'alt-date': 'date',
            'any-of': 'one-of',
            'card': 'section',
            'color': 'text',
            'expansion-panel': 'section',
            'hidden': 'none',
            'image': 'none',
            'integer': 'number',
            'radiobuttons': 'button-group',
            'range': 'slider',
            'submit': 'button',
            'tagsinput': 'chip-list',
            'wizard': 'stepper',
        };
        return _this;
    }
    MaterialDesignFramework = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MaterialDesignFramework);
    return MaterialDesignFramework;
}(_framework__WEBPACK_IMPORTED_MODULE_1__["Framework"]));



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-file.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-file.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MaterialFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialFileComponent", function() { return MaterialFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialFileComponent = (function () {
    function MaterialFileComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    MaterialFileComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    MaterialFileComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialFileComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialFileComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialFileComponent.prototype, "dataIndex", void 0);
    MaterialFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-file-widget',
            template: "",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialFileComponent);
    return MaterialFileComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-input.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-input.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MaterialInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialInputComponent", function() { return MaterialInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialInputComponent = (function () {
    function MaterialInputComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.autoCompleteList = [];
    }
    MaterialInputComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        if (!this.options.notitle && !this.options.description && this.options.placeholder) {
            this.options.description = this.options.placeholder;
        }
    };
    MaterialInputComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialInputComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialInputComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialInputComponent.prototype, "dataIndex", void 0);
    MaterialInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-input-widget',
            template: "\n    <mat-form-field\n      [class]=\"options?.htmlClass || ''\"\n      [floatLabel]=\"options?.floatPlaceholder || (options?.notitle ? 'never' : 'auto')\"\n      [style.width]=\"'100%'\">\n      <span matPrefix *ngIf=\"options?.prefix || options?.fieldAddonLeft\"\n        [innerHTML]=\"options?.prefix || options?.fieldAddonLeft\"></span>\n      <input matInput *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\"\n        [attr.maxlength]=\"options?.maxLength\"\n        [attr.minlength]=\"options?.minLength\"\n        [attr.pattern]=\"options?.pattern\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [placeholder]=\"options?.notitle ? options?.placeholder : options?.title\"\n        [required]=\"options?.required\"\n        [style.width]=\"'100%'\"\n        [type]=\"layoutNode?.type\"\n        (blur)=\"options.showErrors = true\">\n      <input matInput *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\"\n        [attr.maxlength]=\"options?.maxLength\"\n        [attr.minlength]=\"options?.minLength\"\n        [attr.pattern]=\"options?.pattern\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [placeholder]=\"options?.notitle ? options?.placeholder : options?.title\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [required]=\"options?.required\"\n        [style.width]=\"'100%'\"\n        [type]=\"layoutNode?.type\"\n        [value]=\"controlValue\"\n        (input)=\"updateValue($event)\"\n        (blur)=\"options.showErrors = true\">\n      <span matSuffix *ngIf=\"options?.suffix || options?.fieldAddonRight\"\n        [innerHTML]=\"options?.suffix || options?.fieldAddonRight\"></span>\n      <mat-hint *ngIf=\"options?.description && (!options?.showErrors || !options?.errorMessage)\"\n        align=\"end\" [innerHTML]=\"options?.description\"></mat-hint>\n      <mat-autocomplete *ngIf=\"options?.typeahead?.source\">\n        <mat-option *ngFor=\"let word of options?.typeahead?.source\"\n          [value]=\"word\">{{word}}</mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n    <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n      [innerHTML]=\"options?.errorMessage\"></mat-error>",
            styles: ["\n    mat-error { font-size: 75%; margin-top: -1rem; margin-bottom: 0.5rem; }\n    ::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex\n      .mat-form-field-infix { width: initial; }\n  "],
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialInputComponent);
    return MaterialInputComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-number.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-number.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MaterialNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialNumberComponent", function() { return MaterialNumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialNumberComponent = (function () {
    function MaterialNumberComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.allowNegative = true;
        this.allowDecimal = true;
        this.allowExponents = false;
        this.lastValidNumber = '';
    }
    MaterialNumberComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        if (this.layoutNode.dataType === 'integer') {
            this.allowDecimal = false;
        }
        if (!this.options.notitle && !this.options.description && this.options.placeholder) {
            this.options.description = this.options.placeholder;
        }
    };
    MaterialNumberComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialNumberComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialNumberComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialNumberComponent.prototype, "dataIndex", void 0);
    MaterialNumberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-number-widget',
            template: "\n    <mat-form-field\n      [class]=\"options?.htmlClass || ''\"\n      [floatLabel]=\"options?.floatPlaceholder || (options?.notitle ? 'never' : 'auto')\"\n      [style.width]=\"'100%'\">\n      <span matPrefix *ngIf=\"options?.prefix || options?.fieldAddonLeft\"\n        [innerHTML]=\"options?.prefix || options?.fieldAddonLeft\"></span>\n      <input matInput *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.max]=\"options?.maximum\"\n        [attr.min]=\"options?.minimum\"\n        [attr.step]=\"options?.multipleOf || options?.step || 'any'\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [placeholder]=\"options?.notitle ? options?.placeholder : options?.title\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [required]=\"options?.required\"\n        [style.width]=\"'100%'\"\n        [type]=\"'number'\"\n        (blur)=\"options.showErrors = true\">\n      <input matInput *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.max]=\"options?.maximum\"\n        [attr.min]=\"options?.minimum\"\n        [attr.step]=\"options?.multipleOf || options?.step || 'any'\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [placeholder]=\"options?.notitle ? options?.placeholder : options?.title\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [required]=\"options?.required\"\n        [style.width]=\"'100%'\"\n        [type]=\"'number'\"\n        [value]=\"controlValue\"\n        (input)=\"updateValue($event)\"\n        (blur)=\"options.showErrors = true\">\n      <span matSuffix *ngIf=\"options?.suffix || options?.fieldAddonRight\"\n        [innerHTML]=\"options?.suffix || options?.fieldAddonRight\"></span>\n      <mat-hint *ngIf=\"layoutNode?.type === 'range'\" align=\"start\"\n        [innerHTML]=\"controlValue\"></mat-hint>\n      <mat-hint *ngIf=\"options?.description && (!options?.showErrors || !options?.errorMessage)\"\n        align=\"end\" [innerHTML]=\"options?.description\"></mat-hint>\n    </mat-form-field>\n    <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n      [innerHTML]=\"options?.errorMessage\"></mat-error>",
            styles: ["\n    mat-error { font-size: 75%; margin-top: -1rem; margin-bottom: 0.5rem; }\n    ::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex\n      .mat-form-field-infix { width: initial; }\n  "],
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialNumberComponent);
    return MaterialNumberComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-one-of.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-one-of.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MaterialOneOfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialOneOfComponent", function() { return MaterialOneOfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialOneOfComponent = (function () {
    function MaterialOneOfComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    MaterialOneOfComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    MaterialOneOfComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialOneOfComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialOneOfComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialOneOfComponent.prototype, "dataIndex", void 0);
    MaterialOneOfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-one-of-widget',
            template: "",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialOneOfComponent);
    return MaterialOneOfComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-radios.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-radios.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MaterialRadiosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialRadiosComponent", function() { return MaterialRadiosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/lib/src/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialRadiosComponent = (function () {
    function MaterialRadiosComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.flexDirection = 'column';
        this.radiosList = [];
    }
    MaterialRadiosComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        if (this.layoutNode.type === 'radios-inline') {
            this.flexDirection = 'row';
        }
        this.radiosList = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["buildTitleMap"])(this.options.titleMap || this.options.enumNames, this.options.enum, true);
        this.jsf.initializeControl(this, !this.options.readonly);
    };
    MaterialRadiosComponent.prototype.updateValue = function (value) {
        this.options.showErrors = true;
        this.jsf.updateValue(this, value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialRadiosComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialRadiosComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialRadiosComponent.prototype, "dataIndex", void 0);
    MaterialRadiosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-radios-widget',
            template: "\n    <div>\n      <div *ngIf=\"options?.title\">\n        <label\n          [attr.for]=\"'control' + layoutNode?._id\"\n          [class]=\"options?.labelHtmlClass || ''\"\n          [style.display]=\"options?.notitle ? 'none' : ''\"\n          [innerHTML]=\"options?.title\"></label>\n      </div>\n      <mat-radio-group *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.required]=\"options?.required\"\n        [style.flex-direction]=\"flexDirection\"\n        [name]=\"controlName\"\n        (blur)=\"options.showErrors = true\">\n        <mat-radio-button *ngFor=\"let radioItem of radiosList\"\n          [id]=\"'control' + layoutNode?._id + '/' + radioItem?.name\"\n          [value]=\"radioItem?.value\">\n          <span [innerHTML]=\"radioItem?.name\"></span>\n        </mat-radio-button>\n      </mat-radio-group>\n      <mat-radio-group *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.required]=\"options?.required\"\n        [style.flex-direction]=\"flexDirection\"\n        [disabled]=\"controlDisabled || options?.readonly\"\n        [name]=\"controlName\"\n        [value]=\"controlValue\">\n        <mat-radio-button *ngFor=\"let radioItem of radiosList\"\n          [id]=\"'control' + layoutNode?._id + '/' + radioItem?.name\"\n          [value]=\"radioItem?.value\"\n          (click)=\"updateValue(radioItem?.value)\">\n          <span [innerHTML]=\"radioItem?.name\"></span>\n        </mat-radio-button>\n      </mat-radio-group>\n      <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n        [innerHTML]=\"options?.errorMessage\"></mat-error>\n    </div>",
            styles: ["\n    mat-radio-group { display: inline-flex; }\n    mat-radio-button { margin: 2px; }\n    mat-error { font-size: 75%; }\n  "]
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialRadiosComponent);
    return MaterialRadiosComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-select.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-select.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MaterialSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialSelectComponent", function() { return MaterialSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared */ "./src/lib/src/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MaterialSelectComponent = (function () {
    function MaterialSelectComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.selectList = [];
        this.isArray = _shared__WEBPACK_IMPORTED_MODULE_2__["isArray"];
    }
    MaterialSelectComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.selectList = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["buildTitleMap"])(this.options.titleMap || this.options.enumNames, this.options.enum, !!this.options.required, !!this.options.flatList);
        this.jsf.initializeControl(this, !this.options.readonly);
        if (!this.options.notitle && !this.options.description && this.options.placeholder) {
            this.options.description = this.options.placeholder;
        }
    };
    MaterialSelectComponent.prototype.updateValue = function (event) {
        this.options.showErrors = true;
        this.jsf.updateValue(this, event.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialSelectComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialSelectComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialSelectComponent.prototype, "dataIndex", void 0);
    MaterialSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-select-widget',
            template: "\n    <mat-form-field\n      [class]=\"options?.htmlClass || ''\"\n      [floatLabel]=\"options?.floatPlaceholder || (options?.notitle ? 'never' : 'auto')\"\n      [style.width]=\"'100%'\">\n      <span matPrefix *ngIf=\"options?.prefix || options?.fieldAddonLeft\"\n        [innerHTML]=\"options?.prefix || options?.fieldAddonLeft\"></span>\n      <mat-select *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.name]=\"controlName\"\n        [id]=\"'control' + layoutNode?._id\"\n        [multiple]=\"options?.multiple\"\n        [placeholder]=\"options?.notitle ? options?.placeholder : options?.title\"\n        [required]=\"options?.required\"\n        [style.width]=\"'100%'\"\n        (blur)=\"options.showErrors = true\">\n        <ng-template ngFor let-selectItem [ngForOf]=\"selectList\">\n          <mat-option *ngIf=\"!isArray(selectItem?.items)\"\n            [value]=\"selectItem?.value\">\n            <span [innerHTML]=\"selectItem?.name\"></span>\n          </mat-option>\n          <mat-optgroup *ngIf=\"isArray(selectItem?.items)\"\n            [label]=\"selectItem?.group\">\n            <mat-option *ngFor=\"let subItem of selectItem.items\"\n              [value]=\"subItem?.value\">\n              <span [innerHTML]=\"subItem?.name\"></span>\n            </mat-option>\n          </mat-optgroup>\n        </ng-template>\n      </mat-select>\n      <mat-select *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.name]=\"controlName\"\n        [disabled]=\"controlDisabled || options?.readonly\"\n        [id]=\"'control' + layoutNode?._id\"\n        [multiple]=\"options?.multiple\"\n        [placeholder]=\"options?.notitle ? options?.placeholder : options?.title\"\n        [required]=\"options?.required\"\n        [style.width]=\"'100%'\"\n        [value]=\"controlValue\"\n        (blur)=\"options.showErrors = true\"\n        (selectionChange)=\"updateValue($event)\">\n        <ng-template ngFor let-selectItem [ngForOf]=\"selectList\">\n          <mat-option *ngIf=\"!isArray(selectItem?.items)\"\n            [attr.selected]=\"selectItem?.value === controlValue\"\n            [value]=\"selectItem?.value\">\n            <span [innerHTML]=\"selectItem?.name\"></span>\n          </mat-option>\n          <mat-optgroup *ngIf=\"isArray(selectItem?.items)\"\n            [label]=\"selectItem?.group\">\n            <mat-option *ngFor=\"let subItem of selectItem.items\"\n              [attr.selected]=\"subItem?.value === controlValue\"\n              [value]=\"subItem?.value\">\n              <span [innerHTML]=\"subItem?.name\"></span>\n            </mat-option>\n          </mat-optgroup>\n        </ng-template>\n      </mat-select>\n      <span matSuffix *ngIf=\"options?.suffix || options?.fieldAddonRight\"\n        [innerHTML]=\"options?.suffix || options?.fieldAddonRight\"></span>\n      <mat-hint *ngIf=\"options?.description && (!options?.showErrors || !options?.errorMessage)\"\n        align=\"end\" [innerHTML]=\"options?.description\"></mat-hint>\n    </mat-form-field>\n    <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n      [innerHTML]=\"options?.errorMessage\"></mat-error>",
            styles: ["\n    mat-error { font-size: 75%; margin-top: -1rem; margin-bottom: 0.5rem; }\n    ::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex\n      .mat-form-field-infix { width: initial; }\n  "],
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialSelectComponent);
    return MaterialSelectComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-slider.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-slider.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MaterialSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialSliderComponent", function() { return MaterialSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialSliderComponent = (function () {
    function MaterialSliderComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.allowNegative = true;
        this.allowDecimal = true;
        this.allowExponents = false;
        this.lastValidNumber = '';
    }
    MaterialSliderComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this, !this.options.readonly);
    };
    MaterialSliderComponent.prototype.updateValue = function (event) {
        this.options.showErrors = true;
        this.jsf.updateValue(this, event.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialSliderComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialSliderComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialSliderComponent.prototype, "dataIndex", void 0);
    MaterialSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-slider-widget',
            template: "\n    <mat-slider thumbLabel *ngIf=\"boundControl\"\n      [formControl]=\"formControl\"\n      [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n      [id]=\"'control' + layoutNode?._id\"\n      [max]=\"options?.maximum\"\n      [min]=\"options?.minimum\"\n      [step]=\"options?.multipleOf || options?.step || 'any'\"\n      [style.width]=\"'100%'\"\n      (blur)=\"options.showErrors = true\"></mat-slider>\n    <mat-slider thumbLabel *ngIf=\"!boundControl\"\n      [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n      [disabled]=\"controlDisabled || options?.readonly\"\n      [id]=\"'control' + layoutNode?._id\"\n      [max]=\"options?.maximum\"\n      [min]=\"options?.minimum\"\n      [step]=\"options?.multipleOf || options?.step || 'any'\"\n      [style.width]=\"'100%'\"\n      [value]=\"controlValue\"\n      (blur)=\"options.showErrors = true\"\n      (change)=\"updateValue($event)\"></mat-slider>\n    <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n      [innerHTML]=\"options?.errorMessage\"></mat-error>",
            styles: [" mat-error { font-size: 75%; } "],
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialSliderComponent);
    return MaterialSliderComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-stepper.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-stepper.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MaterialStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialStepperComponent", function() { return MaterialStepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialStepperComponent = (function () {
    function MaterialStepperComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    MaterialStepperComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    MaterialStepperComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialStepperComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialStepperComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialStepperComponent.prototype, "dataIndex", void 0);
    MaterialStepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-stepper-widget',
            template: "",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialStepperComponent);
    return MaterialStepperComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-tabs.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-tabs.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MaterialTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialTabsComponent", function() { return MaterialTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialTabsComponent = (function () {
    function MaterialTabsComponent(jsf) {
        this.jsf = jsf;
        this.selectedItem = 0;
        this.showAddTab = true;
    }
    MaterialTabsComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.itemCount = this.layoutNode.items.length - 1;
        this.updateControl();
    };
    MaterialTabsComponent.prototype.select = function (index) {
        if (this.layoutNode.items[index].type === '$ref') {
            this.jsf.addItem({
                layoutNode: this.layoutNode.items[index],
                layoutIndex: this.layoutIndex.concat(index),
                dataIndex: this.dataIndex.concat(index)
            });
            this.updateControl();
        }
        this.selectedItem = index;
    };
    MaterialTabsComponent.prototype.updateControl = function () {
        this.itemCount = this.layoutNode.items.length - 1;
        var lastItem = this.layoutNode.items[this.layoutNode.items.length - 1];
        this.showAddTab = lastItem.type === '$ref' &&
            this.itemCount < (lastItem.options.maxItems || 1000);
    };
    MaterialTabsComponent.prototype.setTabTitle = function (item, index) {
        return this.jsf.setArrayItemTitle(this, item, index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialTabsComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialTabsComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialTabsComponent.prototype, "dataIndex", void 0);
    MaterialTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-tabs-widget',
            template: "\n    <nav mat-tab-nav-bar\n      [attr.aria-label]=\"options?.label || options?.title || ''\"\n      [style.width]=\"'100%'\">\n        <a mat-tab-link *ngFor=\"let item of layoutNode?.items; let i = index\"\n          [active]=\"selectedItem === i\"\n          (click)=\"select(i)\">\n          <span *ngIf=\"showAddTab || item.type !== '$ref'\"\n            [innerHTML]=\"setTabTitle(item, i)\"></span>\n        </a>\n    </nav>\n    <div *ngFor=\"let layoutItem of layoutNode?.items; let i = index\"\n      [class]=\"options?.htmlClass || ''\">\n      <select-framework-widget *ngIf=\"selectedItem === i\"\n        [class]=\"(options?.fieldHtmlClass || '') + ' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')\"\n        [dataIndex]=\"layoutNode?.dataType === 'array' ? (dataIndex || []).concat(i) : dataIndex\"\n        [layoutIndex]=\"(layoutIndex || []).concat(i)\"\n        [layoutNode]=\"layoutItem\"></select-framework-widget>\n    </div>",
            styles: [" a { cursor: pointer; } "],
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialTabsComponent);
    return MaterialTabsComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/material-design-framework/material-textarea.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/lib/src/framework-library/material-design-framework/material-textarea.component.ts ***!
  \************************************************************************************************/
/*! exports provided: MaterialTextareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialTextareaComponent", function() { return MaterialTextareaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialTextareaComponent = (function () {
    function MaterialTextareaComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    MaterialTextareaComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        if (!this.options.notitle && !this.options.description && this.options.placeholder) {
            this.options.description = this.options.placeholder;
        }
    };
    MaterialTextareaComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MaterialTextareaComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialTextareaComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MaterialTextareaComponent.prototype, "dataIndex", void 0);
    MaterialTextareaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-textarea-widget',
            template: "\n    <mat-form-field\n      [class]=\"options?.htmlClass || ''\"\n      [floatLabel]=\"options?.floatPlaceholder || (options?.notitle ? 'never' : 'auto')\"\n      [style.width]=\"'100%'\">\n      <span matPrefix *ngIf=\"options?.prefix || options?.fieldAddonLeft\"\n        [innerHTML]=\"options?.prefix || options?.fieldAddonLeft\"></span>\n      <textarea matInput *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\"\n        [attr.maxlength]=\"options?.maxLength\"\n        [attr.minlength]=\"options?.minLength\"\n        [attr.pattern]=\"options?.pattern\"\n        [required]=\"options?.required\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [placeholder]=\"options?.notitle ? options?.placeholder : options?.title\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [style.width]=\"'100%'\"\n        (blur)=\"options.showErrors = true\"></textarea>\n      <textarea matInput *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\"\n        [attr.maxlength]=\"options?.maxLength\"\n        [attr.minlength]=\"options?.minLength\"\n        [attr.pattern]=\"options?.pattern\"\n        [required]=\"options?.required\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [placeholder]=\"options?.notitle ? options?.placeholder : options?.title\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [style.width]=\"'100%'\"\n        [value]=\"controlValue\"\n        (input)=\"updateValue($event)\"\n        (blur)=\"options.showErrors = true\"></textarea>\n      <span matSuffix *ngIf=\"options?.suffix || options?.fieldAddonRight\"\n        [innerHTML]=\"options?.suffix || options?.fieldAddonRight\"></span>\n      <mat-hint *ngIf=\"options?.description && (!options?.showErrors || !options?.errorMessage)\"\n        align=\"end\" [innerHTML]=\"options?.description\"></mat-hint>\n    </mat-form-field>\n    <mat-error *ngIf=\"options?.showErrors && options?.errorMessage\"\n      [innerHTML]=\"options?.errorMessage\"></mat-error>",
            styles: ["\n    mat-error { font-size: 75%; margin-top: -1rem; margin-bottom: 0.5rem; }\n    ::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex\n      .mat-form-field-infix { width: initial; }\n  "],
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MaterialTextareaComponent);
    return MaterialTextareaComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/no-framework/no-framework.component.ts":
/*!******************************************************************************!*\
  !*** ./src/lib/src/framework-library/no-framework/no-framework.component.ts ***!
  \******************************************************************************/
/*! exports provided: NoFrameworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoFrameworkComponent", function() { return NoFrameworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoFrameworkComponent = (function () {
    function NoFrameworkComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NoFrameworkComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NoFrameworkComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NoFrameworkComponent.prototype, "dataIndex", void 0);
    NoFrameworkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'no-framework',
            template: "\n    <select-widget-widget\n      [dataIndex]=\"dataIndex\"\n      [layoutIndex]=\"layoutIndex\"\n      [layoutNode]=\"layoutNode\"></select-widget-widget>",
        })
    ], NoFrameworkComponent);
    return NoFrameworkComponent;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/no-framework/no-framework.module.ts":
/*!***************************************************************************!*\
  !*** ./src/lib/src/framework-library/no-framework/no-framework.module.ts ***!
  \***************************************************************************/
/*! exports provided: NoFrameworkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoFrameworkModule", function() { return NoFrameworkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _widget_library_widget_library_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../widget-library/widget-library.module */ "./src/lib/src/widget-library/widget-library.module.ts");
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../framework */ "./src/lib/src/framework-library/framework.ts");
/* harmony import */ var _no_framework_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./no-framework.component */ "./src/lib/src/framework-library/no-framework/no-framework.component.ts");
/* harmony import */ var _no_framework__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./no.framework */ "./src/lib/src/framework-library/no-framework/no.framework.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NoFrameworkModule = (function () {
    function NoFrameworkModule() {
    }
    NoFrameworkModule_1 = NoFrameworkModule;
    NoFrameworkModule.forRoot = function () {
        return {
            ngModule: NoFrameworkModule_1,
            providers: [
                { provide: _framework__WEBPACK_IMPORTED_MODULE_3__["Framework"], useClass: _no_framework__WEBPACK_IMPORTED_MODULE_5__["NoFramework"], multi: true }
            ]
        };
    };
    NoFrameworkModule = NoFrameworkModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _widget_library_widget_library_module__WEBPACK_IMPORTED_MODULE_2__["WidgetLibraryModule"]],
            declarations: [_no_framework_component__WEBPACK_IMPORTED_MODULE_4__["NoFrameworkComponent"]],
            exports: [_no_framework_component__WEBPACK_IMPORTED_MODULE_4__["NoFrameworkComponent"]],
            entryComponents: [_no_framework_component__WEBPACK_IMPORTED_MODULE_4__["NoFrameworkComponent"]]
        })
    ], NoFrameworkModule);
    return NoFrameworkModule;
    var NoFrameworkModule_1;
}());



/***/ }),

/***/ "./src/lib/src/framework-library/no-framework/no.framework.ts":
/*!********************************************************************!*\
  !*** ./src/lib/src/framework-library/no-framework/no.framework.ts ***!
  \********************************************************************/
/*! exports provided: NoFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoFramework", function() { return NoFramework; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework */ "./src/lib/src/framework-library/framework.ts");
/* harmony import */ var _no_framework_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-framework.component */ "./src/lib/src/framework-library/no-framework/no-framework.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NoFramework = (function (_super) {
    __extends(NoFramework, _super);
    function NoFramework() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'no-framework';
        _this.framework = _no_framework_component__WEBPACK_IMPORTED_MODULE_2__["NoFrameworkComponent"];
        return _this;
    }
    NoFramework = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NoFramework);
    return NoFramework;
}(_framework__WEBPACK_IMPORTED_MODULE_1__["Framework"]));



/***/ }),

/***/ "./src/lib/src/json-schema-form.component.ts":
/*!***************************************************!*\
  !*** ./src/lib/src/json-schema-form.component.ts ***!
  \***************************************************/
/*! exports provided: JSON_SCHEMA_FORM_VALUE_ACCESSOR, JsonSchemaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSON_SCHEMA_FORM_VALUE_ACCESSOR", function() { return JSON_SCHEMA_FORM_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaFormComponent", function() { return JsonSchemaFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _framework_library_framework_library_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./framework-library/framework-library.service */ "./src/lib/src/framework-library/framework-library.service.ts");
/* harmony import */ var _widget_library_widget_library_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widget-library/widget-library.service */ "./src/lib/src/widget-library/widget-library.service.ts");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony import */ var _shared_convert_schema_to_draft6_function__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/convert-schema-to-draft6.function */ "./src/lib/src/shared/convert-schema-to-draft6.function.ts");
/* harmony import */ var _shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/json-schema.functions */ "./src/lib/src/shared/json-schema.functions.ts");
/* harmony import */ var _shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/validator.functions */ "./src/lib/src/shared/validator.functions.ts");
/* harmony import */ var _shared_utility_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/utility.functions */ "./src/lib/src/shared/utility.functions.ts");
/* harmony import */ var _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/jsonpointer.functions */ "./src/lib/src/shared/jsonpointer.functions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var JSON_SCHEMA_FORM_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return JsonSchemaFormComponent; }),
    multi: true,
};
var JsonSchemaFormComponent = (function () {
    function JsonSchemaFormComponent(changeDetector, frameworkLibrary, widgetLibrary, jsf, sanitizer) {
        this.changeDetector = changeDetector;
        this.frameworkLibrary = frameworkLibrary;
        this.widgetLibrary = widgetLibrary;
        this.jsf = jsf;
        this.sanitizer = sanitizer;
        this.formValueSubscription = null;
        this.formInitialized = false;
        this.objectWrap = false;
        this.previousInputs = {
            schema: null, layout: null, data: null, options: null, framework: null,
            widgets: null, form: null, model: null, JSONSchema: null, UISchema: null,
            formData: null, loadExternalAssets: null, debug: null,
        };
        this.onChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.validationErrors = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formSchema = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formLayout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formDataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(JsonSchemaFormComponent.prototype, "value", {
        get: function () {
            return this.objectWrap ? this.jsf.data['1'] : this.jsf.data;
        },
        set: function (value) {
            this.setFormValues(value, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonSchemaFormComponent.prototype, "stylesheets", {
        get: function () {
            var stylesheets = this.frameworkLibrary.getFrameworkStylesheets();
            var load = this.sanitizer.bypassSecurityTrustResourceUrl;
            return stylesheets.map(function (stylesheet) { return load(stylesheet); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonSchemaFormComponent.prototype, "scripts", {
        get: function () {
            var scripts = this.frameworkLibrary.getFrameworkScripts();
            var load = this.sanitizer.bypassSecurityTrustResourceUrl;
            return scripts.map(function (script) { return load(script); });
        },
        enumerable: true,
        configurable: true
    });
    JsonSchemaFormComponent.prototype.ngOnInit = function () {
        this.updateForm();
    };
    JsonSchemaFormComponent.prototype.ngOnChanges = function (changes) {
        var update = false;
        Object.keys(changes).forEach(function (key) {
            var change = changes[key];
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(change.currentValue, change.previousValue)) {
                update = true;
            }
            else {
            }
        });
        if (update) {
            this.updateForm();
        }
    };
    JsonSchemaFormComponent.prototype.writeValue = function (value) {
        this.setFormValues(value, false);
        if (!this.formValuesInput) {
            this.formValuesInput = 'ngModel';
        }
    };
    JsonSchemaFormComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    JsonSchemaFormComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    JsonSchemaFormComponent.prototype.setDisabledState = function (isDisabled) {
        if (this.jsf.formOptions.formDisabled !== !!isDisabled) {
            this.jsf.formOptions.formDisabled = !!isDisabled;
            this.initializeForm();
        }
    };
    JsonSchemaFormComponent.prototype.updateForm = function () {
        var _this = this;
        if (!this.formInitialized || !this.formValuesInput ||
            (this.language && this.language !== this.jsf.language)) {
            this.initializeForm();
        }
        else {
            if (this.language && this.language !== this.jsf.language) {
                this.jsf.setLanguage(this.language);
            }
            var changedInput = Object.keys(this.previousInputs)
                .filter(function (input) { return _this.previousInputs[input] !== _this[input]; });
            var resetFirst = false;
            if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isEmpty"])(this.jsf.formValues)) {
                resetFirst = true;
            }
            if (changedInput.length === 1 && changedInput[0] === 'form' &&
                this.formValuesInput.startsWith('form.')) {
                changedInput = Object.keys(this.previousInputs.form || {})
                    .filter(function (key) { return !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(_this.previousInputs.form[key], _this.form[key]); })
                    .map(function (key) { return "form." + key; });
                resetFirst = false;
            }
            if (changedInput.length === 1 && changedInput[0] === this.formValuesInput) {
                if (this.formValuesInput.indexOf('.') === -1) {
                    this.setFormValues(this[this.formValuesInput], resetFirst);
                }
                else {
                    var _a = this.formValuesInput.split('.'), input = _a[0], key = _a[1];
                    this.setFormValues(this[input][key], resetFirst);
                }
            }
            else if (changedInput.length) {
                this.initializeForm();
                if (this.onChange) {
                    this.onChange(this.jsf.formValues);
                }
                if (this.onTouched) {
                    this.onTouched(this.jsf.formValues);
                }
            }
            Object.keys(this.previousInputs)
                .filter(function (input) { return _this.previousInputs[input] !== _this[input]; })
                .forEach(function (input) { return _this.previousInputs[input] = _this[input]; });
        }
    };
    JsonSchemaFormComponent.prototype.setFormValues = function (formValues, resetFirst) {
        if (resetFirst === void 0) { resetFirst = false; }
        if (formValues) {
            var newFormValues = this.objectWrap ? formValues['1'] : formValues;
            if (!this.jsf.formGroup) {
                this.jsf.formValues = formValues;
                this.activateForm();
            }
            else if (resetFirst) {
                this.jsf.formGroup.reset();
            }
            if (this.jsf.formGroup) {
                this.jsf.formGroup.patchValue(newFormValues);
            }
            if (this.onChange) {
                this.onChange(newFormValues);
            }
            if (this.onTouched) {
                this.onTouched(newFormValues);
            }
        }
        else {
            this.jsf.formGroup.reset();
        }
    };
    JsonSchemaFormComponent.prototype.submitForm = function () {
        var validData = this.jsf.validData;
        this.onSubmit.emit(this.objectWrap ? validData['1'] : validData);
    };
    JsonSchemaFormComponent.prototype.initializeForm = function () {
        if (this.schema || this.layout || this.data || this.form || this.model ||
            this.JSONSchema || this.UISchema || this.formData || this.ngModel ||
            this.jsf.data) {
            this.jsf.resetAllValues();
            this.initializeOptions();
            this.initializeSchema();
            this.initializeLayout();
            this.initializeData();
            this.activateForm();
            if (this.debug || this.jsf.formOptions.debug) {
                var vars = [];
                this.debugOutput = vars.map(function (v) { return JSON.stringify(v, null, 2); }).join('\n');
            }
            this.formInitialized = true;
        }
    };
    JsonSchemaFormComponent.prototype.initializeOptions = function () {
        if (this.language && this.language !== this.jsf.language) {
            this.jsf.setLanguage(this.language);
        }
        this.jsf.setOptions({ debug: !!this.debug });
        var loadExternalAssets = this.loadExternalAssets || false;
        var framework = this.framework || 'default';
        if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.options)) {
            this.jsf.setOptions(this.options);
            loadExternalAssets = this.options.loadExternalAssets || loadExternalAssets;
            framework = this.options.framework || framework;
        }
        if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.form) && Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.form.options)) {
            this.jsf.setOptions(this.form.options);
            loadExternalAssets = this.form.options.loadExternalAssets || loadExternalAssets;
            framework = this.form.options.framework || framework;
        }
        if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.widgets)) {
            this.jsf.setOptions({ widgets: this.widgets });
        }
        this.frameworkLibrary.setLoadExternalAssets(loadExternalAssets);
        this.frameworkLibrary.setFramework(framework);
        this.jsf.framework = this.frameworkLibrary.getFramework();
        if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.jsf.formOptions.widgets)) {
            for (var _i = 0, _a = Object.keys(this.jsf.formOptions.widgets); _i < _a.length; _i++) {
                var widget = _a[_i];
                this.widgetLibrary.registerWidget(widget, this.jsf.formOptions.widgets[widget]);
            }
        }
        if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.form) && Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.form.tpldata)) {
            this.jsf.setTpldata(this.form.tpldata);
        }
    };
    JsonSchemaFormComponent.prototype.initializeSchema = function () {
        var _this = this;
        console.log('JsonSchemaFormComponent.initializeSchema()', 'this.ngModel', this.ngModel, 'this.jsf.formValues', this.jsf.formValues, 'this.jsf.schema', this.jsf.schema, 'this.data', this.data, 'this.schema', this.schema, 'this.form', this.form);
        if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.schema)) {
            this.jsf.AngularSchemaFormCompatibility = true;
            this.jsf.schema = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.schema);
        }
        else if (Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_10__["hasOwn"])(this.form, 'schema') && Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.form.schema)) {
            this.jsf.schema = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.form.schema);
        }
        else if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.JSONSchema)) {
            this.jsf.ReactJsonSchemaFormCompatibility = true;
            this.jsf.schema = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.JSONSchema);
        }
        else if (Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_10__["hasOwn"])(this.form, 'JSONSchema') && Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.form.JSONSchema)) {
            this.jsf.ReactJsonSchemaFormCompatibility = true;
            this.jsf.schema = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.form.JSONSchema);
        }
        else if (Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_10__["hasOwn"])(this.form, 'properties') && Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.form.properties)) {
            this.jsf.schema = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.form);
        }
        else if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.form)) {
        }
        else if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["hasValue"])(this.ngModel)) {
            console.log(' hasValue(ngModel)');
            var schema_1 = {};
            if (typeof this.ngModel === 'object') {
                schema_1['type'] = 'object';
            }
            else if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isArray"])(this.ngModel)) {
                schema_1['type'] = 'array';
            }
            schema_1['properties'] = {};
            Object.keys(this.ngModel).forEach(function (key) {
                schema_1['properties'][key] = {};
                schema_1['properties'][key].type = (typeof _this.ngModel[key]);
            });
            this.jsf.schema = schema_1;
        }
        if (!Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isEmpty"])(this.jsf.schema)) {
            if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["inArray"])('object', this.jsf.schema.type)) {
                this.jsf.schema.type = 'object';
            }
            if (Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_10__["hasOwn"])(this.jsf.schema, 'type') && this.jsf.schema.type !== 'object') {
                this.jsf.schema = {
                    'type': 'object',
                    'properties': { 1: this.jsf.schema }
                };
                this.objectWrap = true;
            }
            else if (!Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_10__["hasOwn"])(this.jsf.schema, 'type')) {
                if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.jsf.schema.properties) ||
                    Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.jsf.schema.patternProperties) ||
                    Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.jsf.schema.additionalProperties)) {
                    this.jsf.schema.type = 'object';
                }
                else {
                    this.jsf.JsonFormCompatibility = true;
                    this.jsf.schema = {
                        'type': 'object',
                        'properties': this.jsf.schema
                    };
                }
            }
            this.jsf.schema = Object(_shared_convert_schema_to_draft6_function__WEBPACK_IMPORTED_MODULE_7__["convertSchemaToDraft6"])(this.jsf.schema);
            this.jsf.compileAjvSchema();
            this.jsf.schema = Object(_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_8__["resolveSchemaReferences"])(this.jsf.schema, this.jsf.schemaRefLibrary, this.jsf.schemaRecursiveRefMap, this.jsf.dataRecursiveRefMap, this.jsf.arrayMap);
            if (Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_10__["hasOwn"])(this.jsf.schemaRefLibrary, '')) {
                this.jsf.hasRootReference = true;
            }
        }
    };
    JsonSchemaFormComponent.prototype.initializeData = function () {
        if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["hasValue"])(this.data)) {
            this.jsf.formValues = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.data);
            this.formValuesInput = 'data';
        }
        else if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["hasValue"])(this.model)) {
            this.jsf.AngularSchemaFormCompatibility = true;
            this.jsf.formValues = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.model);
            this.formValuesInput = 'model';
        }
        else if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["hasValue"])(this.ngModel)) {
            this.jsf.AngularSchemaFormCompatibility = true;
            this.jsf.formValues = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.ngModel);
            this.formValuesInput = 'ngModel';
        }
        else if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.form) && Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["hasValue"])(this.form.value)) {
            this.jsf.JsonFormCompatibility = true;
            this.jsf.formValues = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.form.value);
            this.formValuesInput = 'form.value';
        }
        else if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.form) && Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["hasValue"])(this.form.data)) {
            this.jsf.formValues = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.form.data);
            this.formValuesInput = 'form.data';
        }
        else if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["hasValue"])(this.formData)) {
            this.jsf.ReactJsonSchemaFormCompatibility = true;
            this.formValuesInput = 'formData';
        }
        else if (Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_10__["hasOwn"])(this.form, 'formData') && Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["hasValue"])(this.form.formData)) {
            this.jsf.ReactJsonSchemaFormCompatibility = true;
            this.jsf.formValues = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.form.formData);
            this.formValuesInput = 'form.formData';
        }
        else {
            this.formValuesInput = null;
        }
    };
    JsonSchemaFormComponent.prototype.initializeLayout = function () {
        var _this = this;
        var fixJsonFormOptions = function (layout) {
            if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(layout) || Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isArray"])(layout)) {
                Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_10__["forEach"])(layout, function (value, key) {
                    if (Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_10__["hasOwn"])(value, 'options') && Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(value.options)) {
                        value.titleMap = value.options;
                        delete value.options;
                    }
                }, 'top-down');
            }
            return layout;
        };
        if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isArray"])(this.layout)) {
            this.jsf.layout = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.layout);
        }
        else if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isArray"])(this.form)) {
            this.jsf.AngularSchemaFormCompatibility = true;
            this.jsf.layout = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.form);
        }
        else if (this.form && Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isArray"])(this.form.form)) {
            this.jsf.JsonFormCompatibility = true;
            this.jsf.layout = fixJsonFormOptions(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.form.form));
        }
        else if (this.form && Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isArray"])(this.form.layout)) {
            this.jsf.layout = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.form.layout);
        }
        else {
            this.jsf.layout = ['*'];
        }
        var alternateLayout = null;
        if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isObject"])(this.UISchema)) {
            this.jsf.ReactJsonSchemaFormCompatibility = true;
            alternateLayout = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.UISchema);
        }
        else if (Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_10__["hasOwn"])(this.form, 'UISchema')) {
            this.jsf.ReactJsonSchemaFormCompatibility = true;
            alternateLayout = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.form.UISchema);
        }
        else if (Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_10__["hasOwn"])(this.form, 'uiSchema')) {
            this.jsf.ReactJsonSchemaFormCompatibility = true;
            alternateLayout = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.form.uiSchema);
        }
        else if (Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_10__["hasOwn"])(this.form, 'customFormItems')) {
            this.jsf.JsonFormCompatibility = true;
            alternateLayout = fixJsonFormOptions(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.form.customFormItems));
        }
        if (alternateLayout) {
            _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_11__["JsonPointer"].forEachDeep(alternateLayout, function (value, pointer) {
                var schemaPointer = pointer
                    .replace(/\//g, '/properties/')
                    .replace(/\/properties\/items\/properties\//g, '/items/properties/')
                    .replace(/\/properties\/titleMap\/properties\//g, '/titleMap/properties/');
                if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["hasValue"])(value) && Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["hasValue"])(pointer)) {
                    var key = _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_11__["JsonPointer"].toKey(pointer);
                    var groupPointer = (_shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_11__["JsonPointer"].parse(schemaPointer) || []).slice(0, -2);
                    var itemPointer = void 0;
                    if (key.toLowerCase() === 'ui:order') {
                        itemPointer = groupPointer.concat(['ui:order']);
                    }
                    else {
                        if (key.slice(0, 3).toLowerCase() === 'ui:') {
                            key = key.slice(3);
                        }
                        itemPointer = groupPointer.concat(['x-schema-form', key]);
                    }
                    if (_shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_11__["JsonPointer"].has(_this.jsf.schema, groupPointer) &&
                        !_shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_11__["JsonPointer"].has(_this.jsf.schema, itemPointer)) {
                        _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_11__["JsonPointer"].set(_this.jsf.schema, itemPointer, value);
                    }
                }
            });
        }
    };
    JsonSchemaFormComponent.prototype.activateForm = function () {
        var _this = this;
        if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isEmpty"])(this.jsf.schema)) {
            if (!Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isEmpty"])(this.jsf.formValues)) {
                this.jsf.buildSchemaFromData();
            }
        }
        if (!Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isEmpty"])(this.jsf.schema)) {
            this.jsf.compileAjvSchema();
            this.jsf.buildLayout(this.widgetLibrary);
            this.jsf.buildFormGroupTemplate(this.jsf.formValues);
            this.jsf.buildFormGroup();
        }
        if (this.jsf.formGroup) {
            if (!Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["isEmpty"])(this.jsf.formValues) &&
                this.jsf.formOptions.setSchemaDefaults !== true &&
                this.jsf.formOptions.setLayoutDefaults !== true) {
                this.setFormValues(this.jsf.formValues);
            }
            this.jsf.dataChanges.subscribe(function (data) {
                _this.onChanges.emit(_this.objectWrap ? data['1'] : data);
                if (_this.formValuesInput && _this.formValuesInput.indexOf('.') === -1) {
                    _this[_this.formValuesInput + "Change"].emit(_this.objectWrap ? data['1'] : data);
                }
            });
            this.jsf.formGroup.statusChanges.subscribe(function () { return _this.changeDetector.markForCheck(); });
            this.jsf.isValidChanges.subscribe(function (isValid) { return _this.isValid.emit(isValid); });
            this.jsf.validationErrorChanges.subscribe(function (err) { return _this.validationErrors.emit(err); });
            this.formSchema.emit(this.jsf.schema);
            this.formLayout.emit(this.jsf.layout);
            this.onChanges.emit(this.objectWrap ? this.jsf.data['1'] : this.jsf.data);
            var validateOnRender_1 = _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_11__["JsonPointer"].get(this.jsf, '/formOptions/validateOnRender');
            if (validateOnRender_1) {
                var touchAll_1 = function (control) {
                    if (validateOnRender_1 === true || Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_9__["hasValue"])(control.value)) {
                        control.markAsTouched();
                    }
                    Object.keys(control.controls || {})
                        .forEach(function (key) { return touchAll_1(control.controls[key]); });
                };
                touchAll_1(this.jsf.formGroup);
                this.isValid.emit(this.jsf.isValid);
                this.validationErrors.emit(this.jsf.ajvErrors);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "schema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], JsonSchemaFormComponent.prototype, "layout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "options", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "framework", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "widgets", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "JSONSchema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "UISchema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "formData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "ngModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], JsonSchemaFormComponent.prototype, "language", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], JsonSchemaFormComponent.prototype, "loadExternalAssets", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], JsonSchemaFormComponent.prototype, "debug", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], JsonSchemaFormComponent.prototype, "value", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "onChanges", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "onSubmit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "isValid", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "validationErrors", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "formSchema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "formLayout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "dataChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "modelChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "formDataChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], JsonSchemaFormComponent.prototype, "ngModelChange", void 0);
    JsonSchemaFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'json-schema-form',
            template: "\n    <div *ngFor=\"let stylesheet of stylesheets\">\n      <link rel=\"stylesheet\" [href]=\"stylesheet\">\n    </div>\n    <div *ngFor=\"let script of scripts\">\n      <script type=\"text/javascript\" [src]=\"script\"></script>\n    </div>\n    <form class=\"json-schema-form\" (ngSubmit)=\"submitForm()\">\n      <root-widget [layout]=\"jsf?.layout\"></root-widget>\n    </form>\n    <div *ngIf=\"debug || jsf?.formOptions?.debug\">\n      Debug output: <pre>{{debugOutput}}</pre>\n    </div>",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            providers: [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_6__["JsonSchemaFormService"], JSON_SCHEMA_FORM_VALUE_ACCESSOR],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _framework_library_framework_library_service__WEBPACK_IMPORTED_MODULE_4__["FrameworkLibraryService"],
            _widget_library_widget_library_service__WEBPACK_IMPORTED_MODULE_5__["WidgetLibraryService"],
            _json_schema_form_service__WEBPACK_IMPORTED_MODULE_6__["JsonSchemaFormService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], JsonSchemaFormComponent);
    return JsonSchemaFormComponent;
}());



/***/ }),

/***/ "./src/lib/src/json-schema-form.module.ts":
/*!************************************************!*\
  !*** ./src/lib/src/json-schema-form.module.ts ***!
  \************************************************/
/*! exports provided: JsonSchemaFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaFormModule", function() { return JsonSchemaFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _framework_library_framework_library_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./framework-library/framework-library.service */ "./src/lib/src/framework-library/framework-library.service.ts");
/* harmony import */ var _widget_library_widget_library_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widget-library/widget-library.module */ "./src/lib/src/widget-library/widget-library.module.ts");
/* harmony import */ var _widget_library_widget_library_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widget-library/widget-library.service */ "./src/lib/src/widget-library/widget-library.service.ts");
/* harmony import */ var _json_schema_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./json-schema-form.component */ "./src/lib/src/json-schema-form.component.ts");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony import */ var _framework_library_framework__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./framework-library/framework */ "./src/lib/src/framework-library/framework.ts");
/* harmony import */ var _framework_library_no_framework_no_framework__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./framework-library/no-framework/no.framework */ "./src/lib/src/framework-library/no-framework/no.framework.ts");
/* harmony import */ var _framework_library_no_framework_no_framework_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./framework-library/no-framework/no-framework.module */ "./src/lib/src/framework-library/no-framework/no-framework.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var JsonSchemaFormModule = (function () {
    function JsonSchemaFormModule() {
    }
    JsonSchemaFormModule_1 = JsonSchemaFormModule;
    JsonSchemaFormModule.forRoot = function () {
        var frameworks = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            frameworks[_i] = arguments[_i];
        }
        var loadFrameworks = frameworks.length ?
            frameworks.map(function (framework) { return framework.forRoot().providers[0]; }) :
            [{ provide: _framework_library_framework__WEBPACK_IMPORTED_MODULE_8__["Framework"], useClass: _framework_library_no_framework_no_framework__WEBPACK_IMPORTED_MODULE_9__["NoFramework"], multi: true }];
        return {
            ngModule: JsonSchemaFormModule_1,
            providers: [
                _json_schema_form_service__WEBPACK_IMPORTED_MODULE_7__["JsonSchemaFormService"], _framework_library_framework_library_service__WEBPACK_IMPORTED_MODULE_3__["FrameworkLibraryService"], _widget_library_widget_library_service__WEBPACK_IMPORTED_MODULE_5__["WidgetLibraryService"]
            ].concat(loadFrameworks)
        };
    };
    JsonSchemaFormModule = JsonSchemaFormModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _widget_library_widget_library_module__WEBPACK_IMPORTED_MODULE_4__["WidgetLibraryModule"], _framework_library_no_framework_no_framework_module__WEBPACK_IMPORTED_MODULE_10__["NoFrameworkModule"]
            ],
            declarations: [_json_schema_form_component__WEBPACK_IMPORTED_MODULE_6__["JsonSchemaFormComponent"]],
            exports: [_json_schema_form_component__WEBPACK_IMPORTED_MODULE_6__["JsonSchemaFormComponent"], _widget_library_widget_library_module__WEBPACK_IMPORTED_MODULE_4__["WidgetLibraryModule"]]
        })
    ], JsonSchemaFormModule);
    return JsonSchemaFormModule;
    var JsonSchemaFormModule_1;
}());



/***/ }),

/***/ "./src/lib/src/json-schema-form.service.ts":
/*!*************************************************!*\
  !*** ./src/lib/src/json-schema-form.service.ts ***!
  \*************************************************/
/*! exports provided: JsonSchemaFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaFormService", function() { return JsonSchemaFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ajv */ "./node_modules/ajv/lib/ajv.js");
/* harmony import */ var ajv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ajv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/validator.functions */ "./src/lib/src/shared/validator.functions.ts");
/* harmony import */ var _shared_utility_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/utility.functions */ "./src/lib/src/shared/utility.functions.ts");
/* harmony import */ var _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/jsonpointer.functions */ "./src/lib/src/shared/jsonpointer.functions.ts");
/* harmony import */ var _shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/json-schema.functions */ "./src/lib/src/shared/json-schema.functions.ts");
/* harmony import */ var _shared_form_group_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/form-group.functions */ "./src/lib/src/shared/form-group.functions.ts");
/* harmony import */ var _shared_layout_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/layout.functions */ "./src/lib/src/shared/layout.functions.ts");
/* harmony import */ var _locale_en_validation_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locale/en-validation-messages */ "./src/lib/src/locale/en-validation-messages.ts");
/* harmony import */ var _locale_fr_validation_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locale/fr-validation-messages */ "./src/lib/src/locale/fr-validation-messages.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var JsonSchemaFormService = (function () {
    function JsonSchemaFormService() {
        this.JsonFormCompatibility = false;
        this.ReactJsonSchemaFormCompatibility = false;
        this.AngularSchemaFormCompatibility = false;
        this.tpldata = {};
        this.ajvOptions = { allErrors: true, jsonPointers: true, unknownFormats: 'ignore' };
        this.ajv = new ajv__WEBPACK_IMPORTED_MODULE_2__(this.ajvOptions);
        this.validateFormData = null;
        this.formValues = {};
        this.data = {};
        this.schema = {};
        this.layout = [];
        this.formGroupTemplate = {};
        this.formGroup = null;
        this.framework = null;
        this.validData = null;
        this.isValid = null;
        this.ajvErrors = null;
        this.validationErrors = null;
        this.dataErrors = new Map();
        this.formValueSubscription = null;
        this.dataChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isValidChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.validationErrorChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.arrayMap = new Map();
        this.dataMap = new Map();
        this.dataRecursiveRefMap = new Map();
        this.schemaRecursiveRefMap = new Map();
        this.schemaRefLibrary = {};
        this.layoutRefLibrary = { '': null };
        this.templateRefLibrary = {};
        this.hasRootReference = false;
        this.language = 'en-US';
        this.defaultFormOptions = {
            addSubmit: 'auto',
            debug: false,
            disableInvalidSubmit: true,
            formDisabled: false,
            formReadonly: false,
            fieldsRequired: false,
            framework: 'no-framework',
            loadExternalAssets: false,
            pristine: { errors: true, success: true },
            supressPropertyTitles: false,
            setSchemaDefaults: 'auto',
            setLayoutDefaults: 'auto',
            validateOnRender: 'auto',
            widgets: {},
            defautWidgetOptions: {
                listItems: 1,
                addable: true,
                orderable: true,
                removable: true,
                enableErrorState: true,
                enableSuccessState: true,
                feedback: false,
                feedbackOnRender: false,
                notitle: false,
                disabled: false,
                readonly: false,
                returnEmptyFields: true,
                validationMessages: {}
            },
        };
        this.setLanguage(this.language);
    }
    JsonSchemaFormService.prototype.setLanguage = function (language) {
        if (language === void 0) { language = 'en-US'; }
        this.language = language;
        var validationMessages = language.slice(0, 2) === 'fr' ?
            _locale_fr_validation_messages__WEBPACK_IMPORTED_MODULE_11__["frValidationMessages"] : _locale_en_validation_messages__WEBPACK_IMPORTED_MODULE_10__["enValidationMessages"];
        this.defaultFormOptions.defautWidgetOptions.validationMessages =
            Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(validationMessages);
    };
    JsonSchemaFormService.prototype.getData = function () { return this.data; };
    JsonSchemaFormService.prototype.getSchema = function () { return this.schema; };
    JsonSchemaFormService.prototype.getLayout = function () { return this.layout; };
    JsonSchemaFormService.prototype.resetAllValues = function () {
        this.JsonFormCompatibility = false;
        this.ReactJsonSchemaFormCompatibility = false;
        this.AngularSchemaFormCompatibility = false;
        this.tpldata = {};
        this.validateFormData = null;
        this.formValues = {};
        this.schema = {};
        this.layout = [];
        this.formGroupTemplate = {};
        this.formGroup = null;
        this.framework = null;
        this.data = {};
        this.validData = null;
        this.isValid = null;
        this.validationErrors = null;
        this.arrayMap = new Map();
        this.dataMap = new Map();
        this.dataRecursiveRefMap = new Map();
        this.schemaRecursiveRefMap = new Map();
        this.layoutRefLibrary = {};
        this.schemaRefLibrary = {};
        this.templateRefLibrary = {};
        this.formOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.defaultFormOptions);
    };
    JsonSchemaFormService.prototype.buildRemoteError = function (errors) {
        var _this = this;
        Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_5__["forEach"])(errors, function (value, key) {
            if (key in _this.formGroup.controls) {
                for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                    var error = value_1[_i];
                    var err = {};
                    err[error['code']] = error['message'];
                    _this.formGroup.get(key).setErrors(err, { emitEvent: true });
                }
            }
        });
    };
    JsonSchemaFormService.prototype.validateData = function (newValue, updateSubscriptions) {
        if (updateSubscriptions === void 0) { updateSubscriptions = true; }
        this.data = Object(_shared_form_group_functions__WEBPACK_IMPORTED_MODULE_8__["formatFormData"])(newValue, this.dataMap, this.dataRecursiveRefMap, this.arrayMap, this.formOptions.returnEmptyFields);
        this.isValid = this.validateFormData(this.data);
        this.validData = this.isValid ? this.data : null;
        var compileErrors = function (errors) {
            var compiledErrors = {};
            (errors || []).forEach(function (error) {
                if (!compiledErrors[error.dataPath]) {
                    compiledErrors[error.dataPath] = [];
                }
                compiledErrors[error.dataPath].push(error.message);
            });
            return compiledErrors;
        };
        this.ajvErrors = this.validateFormData.errors;
        this.validationErrors = compileErrors(this.validateFormData.errors);
        if (updateSubscriptions) {
            this.dataChanges.next(this.data);
            this.isValidChanges.next(this.isValid);
            this.validationErrorChanges.next(this.ajvErrors);
        }
    };
    JsonSchemaFormService.prototype.buildFormGroupTemplate = function (formValues, setValues) {
        if (formValues === void 0) { formValues = null; }
        if (setValues === void 0) { setValues = true; }
        this.formGroupTemplate = Object(_shared_form_group_functions__WEBPACK_IMPORTED_MODULE_8__["buildFormGroupTemplate"])(this, formValues, setValues);
    };
    JsonSchemaFormService.prototype.buildFormGroup = function () {
        var _this = this;
        this.formGroup = Object(_shared_form_group_functions__WEBPACK_IMPORTED_MODULE_8__["buildFormGroup"])(this.formGroupTemplate);
        if (this.formGroup) {
            this.compileAjvSchema();
            this.validateData(this.formGroup.value);
            if (this.formValueSubscription) {
                this.formValueSubscription.unsubscribe();
            }
            this.formValueSubscription = this.formGroup.valueChanges
                .subscribe(function (formValue) { return _this.validateData(formValue); });
        }
    };
    JsonSchemaFormService.prototype.buildLayout = function (widgetLibrary) {
        this.layout = Object(_shared_layout_functions__WEBPACK_IMPORTED_MODULE_9__["buildLayout"])(this, widgetLibrary);
    };
    JsonSchemaFormService.prototype.setOptions = function (newOptions) {
        if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isObject"])(newOptions)) {
            var addOptions = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(newOptions);
            if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isObject"])(addOptions.defaultOptions)) {
                Object.assign(this.formOptions.defautWidgetOptions, addOptions.defaultOptions);
                delete addOptions.defaultOptions;
            }
            if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isObject"])(addOptions.defautWidgetOptions)) {
                Object.assign(this.formOptions.defautWidgetOptions, addOptions.defautWidgetOptions);
                delete addOptions.defautWidgetOptions;
            }
            Object.assign(this.formOptions, addOptions);
            var globalDefaults_1 = this.formOptions.defautWidgetOptions;
            ['ErrorState', 'SuccessState']
                .filter(function (suffix) { return Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_5__["hasOwn"])(globalDefaults_1, 'disable' + suffix); })
                .forEach(function (suffix) {
                globalDefaults_1['enable' + suffix] = !globalDefaults_1['disable' + suffix];
                delete globalDefaults_1['disable' + suffix];
            });
        }
    };
    JsonSchemaFormService.prototype.compileAjvSchema = function () {
        if (!this.validateFormData) {
            if (Array.isArray(this.schema.properties['ui:order'])) {
                this.schema['ui:order'] = this.schema.properties['ui:order'];
                delete this.schema.properties['ui:order'];
            }
            this.ajv.removeSchema(this.schema);
            this.validateFormData = this.ajv.compile(this.schema);
        }
    };
    JsonSchemaFormService.prototype.buildSchemaFromData = function (data, requireAllFields) {
        if (requireAllFields === void 0) { requireAllFields = false; }
        if (data) {
            return Object(_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_7__["buildSchemaFromData"])(data, requireAllFields);
        }
        this.schema = Object(_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_7__["buildSchemaFromData"])(this.formValues, requireAllFields);
    };
    JsonSchemaFormService.prototype.buildSchemaFromLayout = function (layout) {
        if (layout) {
            return Object(_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_7__["buildSchemaFromLayout"])(layout);
        }
        this.schema = Object(_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_7__["buildSchemaFromLayout"])(this.layout);
    };
    JsonSchemaFormService.prototype.setTpldata = function (newTpldata) {
        if (newTpldata === void 0) { newTpldata = {}; }
        this.tpldata = newTpldata;
    };
    JsonSchemaFormService.prototype.parseText = function (text, value, values, key) {
        var _this = this;
        if (text === void 0) { text = ''; }
        if (value === void 0) { value = {}; }
        if (values === void 0) { values = {}; }
        if (key === void 0) { key = null; }
        if (!text || !/{{.+?}}/.test(text)) {
            return text;
        }
        return text.replace(/{{(.+?)}}/g, function () {
            var a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                a[_i] = arguments[_i];
            }
            return _this.parseExpression(a[1], value, values, key, _this.tpldata);
        });
    };
    JsonSchemaFormService.prototype.parseExpression = function (expression, value, values, key, tpldata) {
        var _this = this;
        if (expression === void 0) { expression = ''; }
        if (value === void 0) { value = {}; }
        if (values === void 0) { values = {}; }
        if (key === void 0) { key = null; }
        if (tpldata === void 0) { tpldata = null; }
        if (typeof expression !== 'string') {
            return '';
        }
        var index = typeof key === 'number' ? (key + 1) + '' : (key || '');
        expression = expression.trim();
        if ((expression[0] === '\'' || expression[0] === '"') &&
            expression[0] === expression[expression.length - 1] &&
            expression.slice(1, expression.length - 1).indexOf(expression[0]) === -1) {
            return expression.slice(1, expression.length - 1);
        }
        if (expression === 'idx' || expression === '$index') {
            return index;
        }
        if (expression === 'value' && !Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_5__["hasOwn"])(values, 'value')) {
            return value;
        }
        if (['"', '\'', ' ', '||', '&&', '+'].every(function (delim) { return expression.indexOf(delim) === -1; })) {
            var pointer = _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].parseObjectPath(expression);
            return pointer[0] === 'value' && _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].has(value, pointer.slice(1)) ?
                _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].get(value, pointer.slice(1)) :
                pointer[0] === 'values' && _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].has(values, pointer.slice(1)) ?
                    _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].get(values, pointer.slice(1)) :
                    pointer[0] === 'tpldata' && _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].has(tpldata, pointer.slice(1)) ?
                        _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].get(tpldata, pointer.slice(1)) :
                        _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].has(values, pointer) ? _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].get(values, pointer) : '';
        }
        if (expression.indexOf('[idx]') > -1) {
            expression = expression.replace(/\[idx\]/g, index);
        }
        if (expression.indexOf('[$index]') > -1) {
            expression = expression.replace(/\[$index\]/g, index);
        }
        if (expression.indexOf('||') > -1) {
            return expression.split('||').reduce(function (all, term) {
                return all || _this.parseExpression(term, value, values, key, tpldata);
            }, '');
        }
        if (expression.indexOf('&&') > -1) {
            return expression.split('&&').reduce(function (all, term) {
                return all && _this.parseExpression(term, value, values, key, tpldata);
            }, ' ').trim();
        }
        if (expression.indexOf('+') > -1) {
            return expression.split('+')
                .map(function (term) { return _this.parseExpression(term, value, values, key, tpldata); })
                .join('');
        }
        return '';
    };
    JsonSchemaFormService.prototype.setArrayItemTitle = function (parentCtx, childNode, index) {
        if (parentCtx === void 0) { parentCtx = {}; }
        if (childNode === void 0) { childNode = null; }
        if (index === void 0) { index = null; }
        var parentNode = parentCtx.layoutNode;
        var parentValues = this.getFormControlValue(parentCtx);
        var isArrayItem = (parentNode.type || '').slice(-5) === 'array' && Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isArray"])(parentValues);
        var text = _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].getFirst(isArrayItem && childNode.type !== '$ref' ? [
            [childNode, '/options/legend'],
            [childNode, '/options/title'],
            [parentNode, '/options/title'],
            [parentNode, '/options/legend'],
        ] : [
            [childNode, '/options/title'],
            [childNode, '/options/legend'],
            [parentNode, '/options/title'],
            [parentNode, '/options/legend']
        ]);
        if (!text) {
            return text;
        }
        var childValue = Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isArray"])(parentValues) && index < parentValues.length ?
            parentValues[index] : parentValues;
        return this.parseText(text, childValue, parentValues, index);
    };
    JsonSchemaFormService.prototype.setItemTitle = function (ctx) {
        return !ctx.options.title && /^(\d+|-)$/.test(ctx.layoutNode.name) ?
            null :
            this.parseText(ctx.options.title || Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_5__["toTitleCase"])(ctx.layoutNode.name), this.getFormControlValue(this), (this.getFormControlGroup(this) || {}).value, ctx.dataIndex[ctx.dataIndex.length - 1]);
    };
    JsonSchemaFormService.prototype.evaluateCondition = function (layoutNode, dataIndex) {
        var arrayIndex = dataIndex && dataIndex[dataIndex.length - 1];
        var result = true;
        if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["hasValue"])((layoutNode.options || {}).condition)) {
            if (typeof layoutNode.options.condition === 'string') {
                var pointer = layoutNode.options.condition;
                if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["hasValue"])(arrayIndex)) {
                    pointer = pointer.replace('[arrayIndex]', "[" + arrayIndex + "]");
                }
                pointer = _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].parseObjectPath(pointer);
                result = !!_shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].get(this.data, pointer);
                if (!result && pointer[0] === 'model') {
                    result = !!_shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].get({ model: this.data }, pointer);
                }
            }
            else if (typeof layoutNode.options.condition === 'function') {
                result = layoutNode.options.condition(this.data);
            }
            else if (typeof layoutNode.options.condition.functionBody === 'string') {
                try {
                    var dynFn = new Function('model', 'arrayIndices', layoutNode.options.condition.functionBody);
                    result = dynFn(this.data, dataIndex);
                }
                catch (e) {
                    result = true;
                    console.error("condition functionBody errored out on evaluation: " + layoutNode.options.condition.functionBody);
                }
            }
        }
        return result;
    };
    JsonSchemaFormService.prototype.initializeControl = function (ctx, bind) {
        var _this = this;
        if (bind === void 0) { bind = true; }
        if (!Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isObject"])(ctx)) {
            return false;
        }
        if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(ctx.options)) {
            ctx.options = !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])((ctx.layoutNode || {}).options) ?
                ctx.layoutNode.options : Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.formOptions);
        }
        ctx.formControl = this.getFormControl(ctx);
        ctx.boundControl = bind && !!ctx.formControl;
        if (ctx.formControl) {
            ctx.controlName = this.getFormControlName(ctx);
            ctx.controlValue = ctx.formControl.value;
            ctx.controlDisabled = ctx.formControl.disabled;
            ctx.options.errorMessage = ctx.formControl.status === 'VALID' ? null :
                this.formatErrors(ctx.formControl.errors, ctx.options.validationMessages);
            ctx.options.showErrors = this.formOptions.validateOnRender === true ||
                (this.formOptions.validateOnRender === 'auto' && Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["hasValue"])(ctx.controlValue));
            ctx.formControl.statusChanges.subscribe(function (status) {
                return ctx.options.errorMessage = status === 'VALID' ? null :
                    _this.formatErrors(ctx.formControl.errors, ctx.options.validationMessages);
            });
            ctx.formControl.valueChanges.subscribe(function (value) {
                if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(ctx.controlValue, value)) {
                    ctx.controlValue = value;
                }
            });
        }
        else {
            ctx.controlName = ctx.layoutNode.name;
            ctx.controlValue = ctx.layoutNode.value || null;
            var dataPointer = this.getDataPointer(ctx);
            if (bind && dataPointer) {
                console.error("warning: control \"" + dataPointer + "\" is not bound to the Angular FormGroup.");
            }
        }
        return ctx.boundControl;
    };
    JsonSchemaFormService.prototype.formatErrors = function (errors, validationMessages) {
        if (validationMessages === void 0) { validationMessages = {}; }
        if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isEmpty"])(errors)) {
            return null;
        }
        if (!Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isObject"])(validationMessages)) {
            validationMessages = {};
        }
        var addSpaces = function (string) { return string[0].toUpperCase() + (string.slice(1) || '')
            .replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' '); };
        var formatError = function (error) { return typeof error === 'object' ?
            Object.keys(error).map(function (key) {
                return error[key] === true ? addSpaces(key) :
                    error[key] === false ? 'Not ' + addSpaces(key) :
                        addSpaces(key) + ': ' + formatError(error[key]);
            }).join(', ') :
            addSpaces(error.toString()); };
        var messages = [];
        return Object.keys(errors)
            .filter(function (errorKey) { return errorKey !== 'required' || Object.keys(errors).length === 1; })
            .map(function (errorKey) {
            return typeof validationMessages === 'string' ? validationMessages :
                typeof validationMessages[errorKey] === 'function' ?
                    validationMessages[errorKey](errors[errorKey]) :
                    typeof validationMessages[errorKey] === 'string' ?
                        !/{{.+?}}/.test(validationMessages[errorKey]) ?
                            validationMessages[errorKey] :
                            Object.keys(errors[errorKey])
                                .reduce(function (errorMessage, errorProperty) { return errorMessage.replace(new RegExp('{{' + errorProperty + '}}', 'g'), errors[errorKey][errorProperty]); }, validationMessages[errorKey]) :
                        addSpaces(errorKey) + ' Error: ' + formatError(errors[errorKey]);
        }).join('<br>');
    };
    JsonSchemaFormService.prototype.updateValue = function (ctx, value) {
        ctx.controlValue = value;
        if (ctx.boundControl) {
            ctx.formControl.setValue(value);
            ctx.formControl.markAsDirty();
        }
        ctx.layoutNode.value = value;
        if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isArray"])(ctx.options.copyValueTo)) {
            for (var _i = 0, _a = ctx.options.copyValueTo; _i < _a.length; _i++) {
                var item = _a[_i];
                var targetControl = Object(_shared_form_group_functions__WEBPACK_IMPORTED_MODULE_8__["getControl"])(this.formGroup, item);
                if (Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isObject"])(targetControl) && typeof targetControl.setValue === 'function') {
                    targetControl.setValue(value);
                    targetControl.markAsDirty();
                }
            }
        }
    };
    JsonSchemaFormService.prototype.updateArrayCheckboxList = function (ctx, checkboxList) {
        var formArray = this.getFormControl(ctx);
        while (formArray.value.length) {
            formArray.removeAt(0);
        }
        var refPointer = Object(_shared_json_schema_functions__WEBPACK_IMPORTED_MODULE_7__["removeRecursiveReferences"])(ctx.layoutNode.dataPointer + '/-', this.dataRecursiveRefMap, this.arrayMap);
        for (var _i = 0, checkboxList_1 = checkboxList; _i < checkboxList_1.length; _i++) {
            var checkboxItem = checkboxList_1[_i];
            if (checkboxItem.checked) {
                var newFormControl = Object(_shared_form_group_functions__WEBPACK_IMPORTED_MODULE_8__["buildFormGroup"])(this.templateRefLibrary[refPointer]);
                newFormControl.setValue(checkboxItem.value);
                formArray.push(newFormControl);
            }
        }
        formArray.markAsDirty();
    };
    JsonSchemaFormService.prototype.getFormControl = function (ctx) {
        if (!ctx.layoutNode || !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(ctx.layoutNode.dataPointer) ||
            ctx.layoutNode.type === '$ref') {
            return null;
        }
        return Object(_shared_form_group_functions__WEBPACK_IMPORTED_MODULE_8__["getControl"])(this.formGroup, this.getDataPointer(ctx));
    };
    JsonSchemaFormService.prototype.getFormControlValue = function (ctx) {
        if (!ctx.layoutNode || !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(ctx.layoutNode.dataPointer) ||
            ctx.layoutNode.type === '$ref') {
            return null;
        }
        var control = Object(_shared_form_group_functions__WEBPACK_IMPORTED_MODULE_8__["getControl"])(this.formGroup, this.getDataPointer(ctx));
        return control ? control.value : null;
    };
    JsonSchemaFormService.prototype.getFormControlGroup = function (ctx) {
        if (!ctx.layoutNode || !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(ctx.layoutNode.dataPointer)) {
            return null;
        }
        return Object(_shared_form_group_functions__WEBPACK_IMPORTED_MODULE_8__["getControl"])(this.formGroup, this.getDataPointer(ctx), true);
    };
    JsonSchemaFormService.prototype.getFormControlName = function (ctx) {
        if (!ctx.layoutNode || !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(ctx.layoutNode.dataPointer) || !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["hasValue"])(ctx.dataIndex)) {
            return null;
        }
        return _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].toKey(this.getDataPointer(ctx));
    };
    JsonSchemaFormService.prototype.getLayoutArray = function (ctx) {
        return _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].get(this.layout, this.getLayoutPointer(ctx), 0, -1);
    };
    JsonSchemaFormService.prototype.getParentNode = function (ctx) {
        return _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].get(this.layout, this.getLayoutPointer(ctx), 0, -2);
    };
    JsonSchemaFormService.prototype.getDataPointer = function (ctx) {
        if (!ctx.layoutNode || !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(ctx.layoutNode.dataPointer) || !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["hasValue"])(ctx.dataIndex)) {
            return null;
        }
        return _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].toIndexedPointer(ctx.layoutNode.dataPointer, ctx.dataIndex, this.arrayMap);
    };
    JsonSchemaFormService.prototype.getLayoutPointer = function (ctx) {
        if (!Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["hasValue"])(ctx.layoutIndex)) {
            return null;
        }
        return '/' + ctx.layoutIndex.join('/items/');
    };
    JsonSchemaFormService.prototype.isControlBound = function (ctx) {
        if (!ctx.layoutNode || !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(ctx.layoutNode.dataPointer) || !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["hasValue"])(ctx.dataIndex)) {
            return false;
        }
        var controlGroup = this.getFormControlGroup(ctx);
        var name = this.getFormControlName(ctx);
        return controlGroup ? Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_5__["hasOwn"])(controlGroup.controls, name) : false;
    };
    JsonSchemaFormService.prototype.addItem = function (ctx, name) {
        if (!ctx.layoutNode || !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(ctx.layoutNode.$ref) ||
            !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["hasValue"])(ctx.dataIndex) || !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["hasValue"])(ctx.layoutIndex)) {
            return false;
        }
        var newFormGroup = Object(_shared_form_group_functions__WEBPACK_IMPORTED_MODULE_8__["buildFormGroup"])(this.templateRefLibrary[ctx.layoutNode.$ref]);
        if (ctx.layoutNode.arrayItem) {
            this.getFormControlGroup(ctx).push(newFormGroup);
        }
        else {
            this.getFormControlGroup(ctx)
                .addControl(name || this.getFormControlName(ctx), newFormGroup);
        }
        var newLayoutNode = Object(_shared_layout_functions__WEBPACK_IMPORTED_MODULE_9__["getLayoutNode"])(ctx.layoutNode, this);
        newLayoutNode.arrayItem = ctx.layoutNode.arrayItem;
        if (ctx.layoutNode.arrayItemType) {
            newLayoutNode.arrayItemType = ctx.layoutNode.arrayItemType;
        }
        else {
            delete newLayoutNode.arrayItemType;
        }
        if (name) {
            newLayoutNode.name = name;
            newLayoutNode.dataPointer += '/' + _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].escape(name);
            newLayoutNode.options.title = Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_5__["fixTitle"])(name);
        }
        _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].insert(this.layout, this.getLayoutPointer(ctx), newLayoutNode);
        return true;
    };
    JsonSchemaFormService.prototype.moveArrayItem = function (ctx, oldIndex, newIndex) {
        if (!ctx.layoutNode || !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(ctx.layoutNode.dataPointer) ||
            !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["hasValue"])(ctx.dataIndex) || !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["hasValue"])(ctx.layoutIndex) ||
            !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(oldIndex) || !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(newIndex) || oldIndex === newIndex) {
            return false;
        }
        var formArray = this.getFormControlGroup(ctx);
        var arrayItem = formArray.at(oldIndex);
        formArray.removeAt(oldIndex);
        formArray.insert(newIndex, arrayItem);
        formArray.updateValueAndValidity();
        var layoutArray = this.getLayoutArray(ctx);
        layoutArray.splice(newIndex, 0, layoutArray.splice(oldIndex, 1)[0]);
        return true;
    };
    JsonSchemaFormService.prototype.removeItem = function (ctx) {
        if (!ctx.layoutNode || !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["isDefined"])(ctx.layoutNode.dataPointer) ||
            !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["hasValue"])(ctx.dataIndex) || !Object(_shared_validator_functions__WEBPACK_IMPORTED_MODULE_4__["hasValue"])(ctx.layoutIndex)) {
            return false;
        }
        if (ctx.layoutNode.arrayItem) {
            this.getFormControlGroup(ctx)
                .removeAt(ctx.dataIndex[ctx.dataIndex.length - 1]);
        }
        else {
            this.getFormControlGroup(ctx)
                .removeControl(this.getFormControlName(ctx));
        }
        _shared_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_6__["JsonPointer"].remove(this.layout, this.getLayoutPointer(ctx));
        return true;
    };
    JsonSchemaFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JsonSchemaFormService);
    return JsonSchemaFormService;
}());



/***/ }),

/***/ "./src/lib/src/locale/en-validation-messages.ts":
/*!******************************************************!*\
  !*** ./src/lib/src/locale/en-validation-messages.ts ***!
  \******************************************************/
/*! exports provided: enValidationMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enValidationMessages", function() { return enValidationMessages; });
var enValidationMessages = {
    required: 'This field is required.',
    minLength: 'Must be {{minimumLength}} characters or longer (current length: {{currentLength}})',
    maxLength: 'Must be {{maximumLength}} characters or shorter (current length: {{currentLength}})',
    pattern: 'Must match pattern: {{requiredPattern}}',
    format: function (error) {
        switch (error.requiredFormat) {
            case 'date':
                return 'Must be a date, like "2000-12-31"';
            case 'time':
                return 'Must be a time, like "16:20" or "03:14:15.9265"';
            case 'date-time':
                return 'Must be a date-time, like "2000-03-14T01:59" or "2000-03-14T01:59:26.535Z"';
            case 'email':
                return 'Must be an email address, like "name@example.com"';
            case 'hostname':
                return 'Must be a hostname, like "example.com"';
            case 'ipv4':
                return 'Must be an IPv4 address, like "127.0.0.1"';
            case 'ipv6':
                return 'Must be an IPv6 address, like "1234:5678:9ABC:DEF0:1234:5678:9ABC:DEF0"';
            case 'url':
                return 'Must be a url, like "http://www.example.com/page.html"';
            case 'uuid':
                return 'Must be a uuid, like "12345678-9ABC-DEF0-1234-56789ABCDEF0"';
            case 'color':
                return 'Must be a color, like "#FFFFFF" or "rgb(255, 255, 255)"';
            case 'json-pointer':
                return 'Must be a JSON Pointer, like "/pointer/to/something"';
            case 'relative-json-pointer':
                return 'Must be a relative JSON Pointer, like "2/pointer/to/something"';
            case 'regex':
                return 'Must be a regular expression, like "(1-)?\\d{3}-\\d{3}-\\d{4}"';
            default:
                return 'Must be a correctly formatted ' + error.requiredFormat;
        }
    },
    minimum: 'Must be {{minimumValue}} or more',
    exclusiveMinimum: 'Must be more than {{exclusiveMinimumValue}}',
    maximum: 'Must be {{maximumValue}} or less',
    exclusiveMaximum: 'Must be less than {{exclusiveMaximumValue}}',
    multipleOf: function (error) {
        if ((1 / error.multipleOfValue) % 10 === 0) {
            var decimals = Math.log10(1 / error.multipleOfValue);
            return "Must have " + decimals + " or fewer decimal places.";
        }
        else {
            return "Must be a multiple of " + error.multipleOfValue + ".";
        }
    },
    minProperties: 'Must have {{minimumProperties}} or more items (current items: {{currentProperties}})',
    maxProperties: 'Must have {{maximumProperties}} or fewer items (current items: {{currentProperties}})',
    minItems: 'Must have {{minimumItems}} or more items (current items: {{currentItems}})',
    maxItems: 'Must have {{maximumItems}} or fewer items (current items: {{currentItems}})',
    uniqueItems: 'All items must be unique',
};


/***/ }),

/***/ "./src/lib/src/locale/fr-validation-messages.ts":
/*!******************************************************!*\
  !*** ./src/lib/src/locale/fr-validation-messages.ts ***!
  \******************************************************/
/*! exports provided: frValidationMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frValidationMessages", function() { return frValidationMessages; });
var frValidationMessages = {
    required: 'Est obligatoire.',
    minLength: 'Doit avoir minimum {{minimumLength}} caractères (actuellement: {{currentLength}})',
    maxLength: 'Doit avoir maximum {{maximumLength}} caractères (actuellement: {{currentLength}})',
    pattern: 'Doit respecter: {{requiredPattern}}',
    format: function (error) {
        switch (error.requiredFormat) {
            case 'date':
                return 'Doit être une date, tel que "2000-12-31"';
            case 'time':
                return 'Doit être une heure, tel que "16:20" ou "03:14:15.9265"';
            case 'date-time':
                return 'Doit être une date et une heure, tel que "2000-03-14T01:59" ou "2000-03-14T01:59:26.535Z"';
            case 'email':
                return 'Doit être une adresse e-mail, tel que "name@example.com"';
            case 'hostname':
                return 'Doit être un nom de domaine, tel que "example.com"';
            case 'ipv4':
                return 'Doit être une adresse IPv4, tel que "127.0.0.1"';
            case 'ipv6':
                return 'Doit être une adresse IPv6, tel que "1234:5678:9ABC:DEF0:1234:5678:9ABC:DEF0"';
            case 'url':
                return 'Doit être une URL, tel que "http://www.example.com/page.html"';
            case 'uuid':
                return 'Doit être un UUID, tel que "12345678-9ABC-DEF0-1234-56789ABCDEF0"';
            case 'color':
                return 'Doit être une couleur, tel que "#FFFFFF" or "rgb(255, 255, 255)"';
            case 'json-pointer':
                return 'Doit être un JSON Pointer, tel que "/pointer/to/something"';
            case 'relative-json-pointer':
                return 'Doit être un relative JSON Pointer, tel que "2/pointer/to/something"';
            case 'regex':
                return 'Doit être une expression régulière, tel que "(1-)?\\d{3}-\\d{3}-\\d{4}"';
            default:
                return 'Doit être avoir le format correct: ' + error.requiredFormat;
        }
    },
    minimum: 'Doit être supérieur à {{minimumValue}}',
    exclusiveMinimum: 'Doit avoir minimum {{exclusiveMinimumValue}} charactères',
    maximum: 'Doit être inférieur à {{maximumValue}}',
    exclusiveMaximum: 'Doit avoir maximum {{exclusiveMaximumValue}} charactères',
    multipleOf: function (error) {
        if ((1 / error.multipleOfValue) % 10 === 0) {
            var decimals = Math.log10(1 / error.multipleOfValue);
            return "Doit comporter " + decimals + " ou moins de decimales.";
        }
        else {
            return "Doit \u00EAtre un multiple de " + error.multipleOfValue + ".";
        }
    },
    minProperties: 'Doit comporter au minimum {{minimumProperties}} éléments',
    maxProperties: 'Doit comporter au maximum {{maximumProperties}} éléments',
    minItems: 'Doit comporter au minimum {{minimumItems}} éléments',
    maxItems: 'Doit comporter au maximum {{minimumItems}} éléments',
    uniqueItems: 'Tous les éléments doivent être uniques',
};


/***/ }),

/***/ "./src/lib/src/shared/convert-schema-to-draft6.function.ts":
/*!*****************************************************************!*\
  !*** ./src/lib/src/shared/convert-schema-to-draft6.function.ts ***!
  \*****************************************************************/
/*! exports provided: convertSchemaToDraft6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertSchemaToDraft6", function() { return convertSchemaToDraft6; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function convertSchemaToDraft6(schema, options) {
    if (options === void 0) { options = {}; }
    var draft = options.draft || null;
    var changed = options.changed || false;
    if (typeof schema !== 'object') {
        return schema;
    }
    if (typeof schema.map === 'function') {
        return schema.map(function (subSchema) { return convertSchemaToDraft6(subSchema, { changed: changed, draft: draft }); }).slice();
    }
    var newSchema = __assign({}, schema);
    var simpleTypes = ['array', 'boolean', 'integer', 'null', 'number', 'object', 'string'];
    if (typeof newSchema.$schema === 'string' &&
        /http\:\/\/json\-schema\.org\/draft\-0\d\/schema\#/.test(newSchema.$schema)) {
        draft = newSchema.$schema[30];
    }
    if (newSchema.contentEncoding) {
        newSchema.media = { binaryEncoding: newSchema.contentEncoding };
        delete newSchema.contentEncoding;
        changed = true;
    }
    if (typeof newSchema.extends === 'object') {
        newSchema.allOf = typeof newSchema.extends.map === 'function' ?
            newSchema.extends.map(function (subSchema) { return convertSchemaToDraft6(subSchema, { changed: changed, draft: draft }); }) :
            [convertSchemaToDraft6(newSchema.extends, { changed: changed, draft: draft })];
        delete newSchema.extends;
        changed = true;
    }
    if (newSchema.disallow) {
        if (typeof newSchema.disallow === 'string') {
            newSchema.not = { type: newSchema.disallow };
        }
        else if (typeof newSchema.disallow.map === 'function') {
            newSchema.not = {
                anyOf: newSchema.disallow
                    .map(function (type) { return typeof type === 'object' ? type : { type: type }; })
            };
        }
        delete newSchema.disallow;
        changed = true;
    }
    if (typeof newSchema.dependencies === 'object' &&
        Object.keys(newSchema.dependencies)
            .some(function (key) { return typeof newSchema.dependencies[key] === 'string'; })) {
        newSchema.dependencies = __assign({}, newSchema.dependencies);
        Object.keys(newSchema.dependencies)
            .filter(function (key) { return typeof newSchema.dependencies[key] === 'string'; })
            .forEach(function (key) { return newSchema.dependencies[key] = [newSchema.dependencies[key]]; });
        changed = true;
    }
    if (typeof newSchema.maxDecimal === 'number') {
        newSchema.multipleOf = 1 / Math.pow(10, newSchema.maxDecimal);
        delete newSchema.divisibleBy;
        changed = true;
        if (!draft || draft === 2) {
            draft = 1;
        }
    }
    if (typeof newSchema.divisibleBy === 'number') {
        newSchema.multipleOf = newSchema.divisibleBy;
        delete newSchema.divisibleBy;
        changed = true;
    }
    if (typeof newSchema.minimum === 'number' && newSchema.minimumCanEqual === false) {
        newSchema.exclusiveMinimum = newSchema.minimum;
        delete newSchema.minimum;
        changed = true;
        if (!draft) {
            draft = 2;
        }
    }
    else if (typeof newSchema.minimumCanEqual === 'boolean') {
        delete newSchema.minimumCanEqual;
        changed = true;
        if (!draft) {
            draft = 2;
        }
    }
    if (typeof newSchema.minimum === 'number' && newSchema.exclusiveMinimum === true) {
        newSchema.exclusiveMinimum = newSchema.minimum;
        delete newSchema.minimum;
        changed = true;
    }
    else if (typeof newSchema.exclusiveMinimum === 'boolean') {
        delete newSchema.exclusiveMinimum;
        changed = true;
    }
    if (typeof newSchema.maximum === 'number' && newSchema.maximumCanEqual === false) {
        newSchema.exclusiveMaximum = newSchema.maximum;
        delete newSchema.maximum;
        changed = true;
        if (!draft) {
            draft = 2;
        }
    }
    else if (typeof newSchema.maximumCanEqual === 'boolean') {
        delete newSchema.maximumCanEqual;
        changed = true;
        if (!draft) {
            draft = 2;
        }
    }
    if (typeof newSchema.maximum === 'number' && newSchema.exclusiveMaximum === true) {
        newSchema.exclusiveMaximum = newSchema.maximum;
        delete newSchema.maximum;
        changed = true;
    }
    else if (typeof newSchema.exclusiveMaximum === 'boolean') {
        delete newSchema.exclusiveMaximum;
        changed = true;
    }
    if (typeof newSchema.properties === 'object') {
        var properties_1 = __assign({}, newSchema.properties);
        var requiredKeys_1 = Array.isArray(newSchema.required) ?
            new Set(newSchema.required) : new Set();
        if (draft === 1 || draft === 2 ||
            Object.keys(properties_1).some(function (key) { return properties_1[key].optional === true; })) {
            Object.keys(properties_1)
                .filter(function (key) { return properties_1[key].optional !== true; })
                .forEach(function (key) { return requiredKeys_1.add(key); });
            changed = true;
            if (!draft) {
                draft = 2;
            }
        }
        if (Object.keys(properties_1).some(function (key) { return properties_1[key].required === true; })) {
            Object.keys(properties_1)
                .filter(function (key) { return properties_1[key].required === true; })
                .forEach(function (key) { return requiredKeys_1.add(key); });
            changed = true;
        }
        if (requiredKeys_1.size) {
            newSchema.required = Array.from(requiredKeys_1);
        }
        if (Object.keys(properties_1).some(function (key) { return properties_1[key].requires; })) {
            var dependencies_1 = typeof newSchema.dependencies === 'object' ? __assign({}, newSchema.dependencies) : {};
            Object.keys(properties_1)
                .filter(function (key) { return properties_1[key].requires; })
                .forEach(function (key) { return dependencies_1[key] =
                typeof properties_1[key].requires === 'string' ?
                    [properties_1[key].requires] : properties_1[key].requires; });
            newSchema.dependencies = dependencies_1;
            changed = true;
            if (!draft) {
                draft = 2;
            }
        }
        newSchema.properties = properties_1;
    }
    if (typeof newSchema.optional === 'boolean') {
        delete newSchema.optional;
        changed = true;
        if (!draft) {
            draft = 2;
        }
    }
    if (newSchema.requires) {
        delete newSchema.requires;
    }
    if (typeof newSchema.required === 'boolean') {
        delete newSchema.required;
    }
    if (typeof newSchema.id === 'string' && !newSchema.$id) {
        if (newSchema.id.slice(-1) === '#') {
            newSchema.id = newSchema.id.slice(0, -1);
        }
        newSchema.$id = newSchema.id + '-CONVERTED-TO-DRAFT-06#';
        delete newSchema.id;
        changed = true;
    }
    if (newSchema.type && (typeof newSchema.type.every === 'function' ?
        !newSchema.type.every(function (type) { return simpleTypes.includes(type); }) :
        !simpleTypes.includes(newSchema.type))) {
        changed = true;
    }
    if (typeof newSchema.$schema === 'string' &&
        /http\:\/\/json\-schema\.org\/draft\-0[1-4]\/schema\#/.test(newSchema.$schema)) {
        newSchema.$schema = 'http://json-schema.org/draft-06/schema#';
        changed = true;
    }
    else if (changed && typeof newSchema.$schema === 'string') {
        var addToDescription = 'Converted to draft 6 from ' + newSchema.$schema;
        if (typeof newSchema.description === 'string' && newSchema.description.length) {
            newSchema.description += '\n' + addToDescription;
        }
        else {
            newSchema.description = addToDescription;
        }
        delete newSchema.$schema;
    }
    if (newSchema.type && (typeof newSchema.type.every === 'function' ?
        !newSchema.type.every(function (type) { return simpleTypes.includes(type); }) :
        !simpleTypes.includes(newSchema.type))) {
        if (newSchema.type.length === 1) {
            newSchema.type = newSchema.type[0];
        }
        if (typeof newSchema.type === 'string') {
            if (newSchema.type === 'any') {
                newSchema.type = simpleTypes;
            }
            else {
                delete newSchema.type;
            }
        }
        else if (typeof newSchema.type === 'object') {
            if (typeof newSchema.type.every === 'function') {
                if (newSchema.type.every(function (type) { return typeof type === 'string'; })) {
                    newSchema.type = newSchema.type.some(function (type) { return type === 'any'; }) ?
                        newSchema.type = simpleTypes :
                        newSchema.type.filter(function (type) { return simpleTypes.includes(type); });
                }
                else if (newSchema.type.length > 1) {
                    var arrayKeys = ['additionalItems', 'items', 'maxItems', 'minItems', 'uniqueItems', 'contains'];
                    var numberKeys = ['multipleOf', 'maximum', 'exclusiveMaximum', 'minimum', 'exclusiveMinimum'];
                    var objectKeys = ['maxProperties', 'minProperties', 'required', 'additionalProperties',
                        'properties', 'patternProperties', 'dependencies', 'propertyNames'];
                    var stringKeys = ['maxLength', 'minLength', 'pattern', 'format'];
                    var filterKeys_1 = {
                        'array': numberKeys.concat(objectKeys, stringKeys),
                        'integer': arrayKeys.concat(objectKeys, stringKeys),
                        'number': arrayKeys.concat(objectKeys, stringKeys),
                        'object': arrayKeys.concat(numberKeys, stringKeys),
                        'string': arrayKeys.concat(numberKeys, objectKeys),
                        'all': arrayKeys.concat(numberKeys, objectKeys, stringKeys),
                    };
                    var anyOf = [];
                    var _loop_1 = function (type) {
                        var newType = typeof type === 'string' ? { type: type } : __assign({}, type);
                        Object.keys(newSchema)
                            .filter(function (key) { return !newType.hasOwnProperty(key) &&
                            !(filterKeys_1[newType.type] || filterKeys_1.all).concat(['type', 'default']).includes(key); })
                            .forEach(function (key) { return newType[key] = newSchema[key]; });
                        anyOf.push(newType);
                    };
                    for (var _i = 0, _a = newSchema.type; _i < _a.length; _i++) {
                        var type = _a[_i];
                        _loop_1(type);
                    }
                    newSchema = newSchema.hasOwnProperty('default') ?
                        { anyOf: anyOf, default: newSchema.default } : { anyOf: anyOf };
                }
                else {
                    var typeSchema = newSchema.type;
                    delete newSchema.type;
                    Object.assign(newSchema, typeSchema);
                }
            }
        }
        else {
            delete newSchema.type;
        }
    }
    Object.keys(newSchema)
        .filter(function (key) { return typeof newSchema[key] === 'object'; })
        .forEach(function (key) {
        if (['definitions', 'dependencies', 'properties', 'patternProperties']
            .includes(key) && typeof newSchema[key].map !== 'function') {
            var newKey_1 = {};
            Object.keys(newSchema[key]).forEach(function (subKey) { return newKey_1[subKey] =
                convertSchemaToDraft6(newSchema[key][subKey], { changed: changed, draft: draft }); });
            newSchema[key] = newKey_1;
        }
        else if (['items', 'additionalItems', 'additionalProperties',
            'allOf', 'anyOf', 'oneOf', 'not'].includes(key)) {
            newSchema[key] = convertSchemaToDraft6(newSchema[key], { changed: changed, draft: draft });
        }
        else {
            newSchema[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(newSchema[key]);
        }
    });
    return newSchema;
}


/***/ }),

/***/ "./src/lib/src/shared/date.functions.ts":
/*!**********************************************!*\
  !*** ./src/lib/src/shared/date.functions.ts ***!
  \**********************************************/
/*! exports provided: dateToString, ordinal, stringToDate, findDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToString", function() { return dateToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinal", function() { return ordinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToDate", function() { return stringToDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDate", function() { return findDate; });
function dateToString(date, options) {
    if (options === void 0) { options = {}; }
    var dateFormat = options.dateFormat || 'YYYY-MM-DD';
    if (typeof date === 'string') {
        date = stringToDate(date);
    }
    if (Object.prototype.toString.call(date) !== '[object Date]') {
        return null;
    }
    var longMonths = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    var shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var longDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return dateFormat
        .replace(/YYYY/ig, date.getFullYear() + '')
        .replace(/YY/ig, (date.getFullYear() + '').slice(-2))
        .replace(/MMMM/ig, longMonths[date.getMonth()])
        .replace(/MMM/ig, shortMonths[date.getMonth()])
        .replace(/MM/ig, ('0' + (date.getMonth() + 1)).slice(-2))
        .replace(/M/ig, (date.getMonth() + 1) + '')
        .replace(/DDDD/ig, longDays[date.getDay()])
        .replace(/DDD/ig, shortDays[date.getDay()])
        .replace(/DD/ig, ('0' + date.getDate()).slice(-2))
        .replace(/D/ig, date.getDate() + '')
        .replace(/S/ig, ordinal(date.getDate()));
}
function ordinal(number) {
    if (typeof number === 'number') {
        number = number + '';
    }
    var last = number.slice(-1);
    var nextToLast = number.slice(-2, 1);
    return (nextToLast !== '1' && { '1': 'st', '2': 'nd', '3': 'rd' }[last]) || 'th';
}
function stringToDate(dateString) {
    var getDate = findDate(dateString);
    if (!getDate) {
        return null;
    }
    var dateParts = [];
    if (/^\d+[^\d]\d+[^\d]\d+$/.test(getDate)) {
        dateParts = getDate.split(/[^\d]/).map(function (part) { return +part; });
    }
    else if (/^\d{8}$/.test(getDate)) {
        dateParts = [+getDate.slice(0, 4), +getDate.slice(4, 6), +getDate.slice(6)];
    }
    var thisYear = +(new Date().getFullYear() + '').slice(-2);
    if (dateParts[0] > 1000 && dateParts[0] < 2100 && dateParts[1] <= 12 && dateParts[2] <= 31) {
        return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    }
    else if (dateParts[0] <= 12 && dateParts[1] <= 31 && dateParts[2] > 1000 && dateParts[2] < 2100) {
        return new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
    }
    else if (dateParts[0] <= 12 && dateParts[1] <= 31 && dateParts[2] < 100) {
        var year = (dateParts[2] <= thisYear ? 2000 : 1900) + dateParts[2];
        return new Date(year, dateParts[0] - 1, dateParts[1]);
    }
    else if (dateParts[0] < 100 && dateParts[1] <= 12 && dateParts[2] <= 31) {
        var year = (dateParts[0] <= thisYear ? 2000 : 1900) + dateParts[0];
        return new Date(year, dateParts[1] - 1, dateParts[2]);
    }
    return null;
}
function findDate(text) {
    if (!text) {
        return null;
    }
    var foundDate;
    foundDate = text.match(/(?:19|20)\d\d[-_\\\/\. ](?:0?\d|1[012])[-_\\\/\. ](?:[012]?\d|3[01])(?!\d)/);
    if (foundDate) {
        return foundDate[0];
    }
    foundDate = text.match(/(?:[012]?\d|3[01])[-_\\\/\. ](?:0?\d|1[012])[-_\\\/\. ](?:19|20)\d\d(?!\d)/);
    if (foundDate) {
        return foundDate[0];
    }
    foundDate = text.match(/^(?:[012]?\d|3[01])[-_\\\/\. ](?:0?\d|1[012])[-_\\\/\. ]\d\d(?!\d)/);
    if (foundDate) {
        return foundDate[0];
    }
    foundDate = text.match(/^\d\d[-_\\\/\. ](?:[012]?\d|3[01])[-_\\\/\. ](?:0?\d|1[012])(?!\d)/);
    if (foundDate) {
        return foundDate[0];
    }
    foundDate = text.match(/^(?:19|20)\d\d(?:0\d|1[012])(?:[012]\d|3[01])/);
    if (foundDate) {
        return foundDate[0];
    }
}


/***/ }),

/***/ "./src/lib/src/shared/form-group.functions.ts":
/*!****************************************************!*\
  !*** ./src/lib/src/shared/form-group.functions.ts ***!
  \****************************************************/
/*! exports provided: buildFormGroupTemplate, buildFormGroup, mergeValues, setRequiredFields, formatFormData, getControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildFormGroupTemplate", function() { return buildFormGroupTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildFormGroup", function() { return buildFormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeValues", function() { return mergeValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRequiredFields", function() { return setRequiredFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatFormData", function() { return formatFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getControl", function() { return getControl; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validator_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validator.functions */ "./src/lib/src/shared/validator.functions.ts");
/* harmony import */ var _utility_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility.functions */ "./src/lib/src/shared/utility.functions.ts");
/* harmony import */ var _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jsonpointer.functions */ "./src/lib/src/shared/jsonpointer.functions.ts");
/* harmony import */ var _json_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./json.validators */ "./src/lib/src/shared/json.validators.ts");
/* harmony import */ var _json_schema_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./json-schema.functions */ "./src/lib/src/shared/json-schema.functions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};







function buildFormGroupTemplate(jsf, nodeValue, setValues, schemaPointer, dataPointer, templatePointer) {
    if (nodeValue === void 0) { nodeValue = null; }
    if (setValues === void 0) { setValues = true; }
    if (schemaPointer === void 0) { schemaPointer = ''; }
    if (dataPointer === void 0) { dataPointer = ''; }
    if (templatePointer === void 0) { templatePointer = ''; }
    var schema = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].get(jsf.schema, schemaPointer);
    if (setValues) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(nodeValue) && (jsf.formOptions.setSchemaDefaults === true ||
            (jsf.formOptions.setSchemaDefaults === 'auto' && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(jsf.formValues)))) {
            nodeValue = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].get(jsf.schema, schemaPointer + '/default');
        }
    }
    else {
        nodeValue = null;
    }
    var schemaType = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].get(schema, '/type');
    var controlType = (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(schema, 'properties') || Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(schema, 'additionalProperties')) &&
        schemaType === 'object' ? 'FormGroup' :
        (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(schema, 'items') || Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(schema, 'additionalItems')) &&
            schemaType === 'array' ? 'FormArray' :
            !schemaType && Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(schema, '$ref') ? '$ref' : 'FormControl';
    var shortDataPointer = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_6__["removeRecursiveReferences"])(dataPointer, jsf.dataRecursiveRefMap, jsf.arrayMap);
    if (!jsf.dataMap.has(shortDataPointer)) {
        jsf.dataMap.set(shortDataPointer, new Map());
    }
    var nodeOptions = jsf.dataMap.get(shortDataPointer);
    if (!nodeOptions.has('schemaType')) {
        nodeOptions.set('schemaPointer', schemaPointer);
        nodeOptions.set('schemaType', schema.type);
        if (schema.format) {
            nodeOptions.set('schemaFormat', schema.format);
            if (!schema.type) {
                nodeOptions.set('schemaType', 'string');
            }
        }
        if (controlType) {
            nodeOptions.set('templatePointer', templatePointer);
            nodeOptions.set('templateType', controlType);
        }
    }
    var controls;
    var validators = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_6__["getControlValidators"])(schema);
    switch (controlType) {
        case 'FormGroup':
            controls = {};
            if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(schema, 'ui:order') || Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(schema, 'properties')) {
                var propertyKeys_1 = schema['ui:order'] || Object.keys(schema.properties);
                if (propertyKeys_1.includes('*') && !Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(schema.properties, '*')) {
                    var unnamedKeys = Object.keys(schema.properties)
                        .filter(function (key) { return !propertyKeys_1.includes(key); });
                    for (var i = propertyKeys_1.length - 1; i >= 0; i--) {
                        if (propertyKeys_1[i] === '*') {
                            propertyKeys_1.splice.apply(propertyKeys_1, [i, 1].concat(unnamedKeys));
                        }
                    }
                }
                propertyKeys_1
                    .filter(function (key) { return Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(schema.properties, key) ||
                    Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(schema, 'additionalProperties'); })
                    .forEach(function (key) { return controls[key] = buildFormGroupTemplate(jsf, _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].get(nodeValue, [key]), setValues, schemaPointer + (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(schema.properties, key) ?
                    '/properties/' + key : '/additionalProperties'), dataPointer + '/' + key, templatePointer + '/controls/' + key); });
                jsf.formOptions.fieldsRequired = setRequiredFields(schema, controls);
            }
            return { controlType: controlType, controls: controls, validators: validators };
        case 'FormArray':
            controls = [];
            var minItems = Math.max(schema.minItems || 0, nodeOptions.get('minItems') || 0);
            var maxItems = Math.min(schema.maxItems || 1000, nodeOptions.get('maxItems') || 1000);
            var additionalItemsPointer = null;
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isArray"])(schema.items)) {
                var tupleItems = nodeOptions.get('tupleItems') ||
                    (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isArray"])(schema.items) ? Math.min(schema.items.length, maxItems) : 0);
                for (var i = 0; i < tupleItems; i++) {
                    if (i < minItems) {
                        controls.push(buildFormGroupTemplate(jsf, Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isArray"])(nodeValue) ? nodeValue[i] : nodeValue, setValues, schemaPointer + '/items/' + i, dataPointer + '/' + i, templatePointer + '/controls/' + i));
                    }
                    else {
                        var schemaRefPointer = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_6__["removeRecursiveReferences"])(schemaPointer + '/items/' + i, jsf.schemaRecursiveRefMap);
                        var itemRefPointer = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_6__["removeRecursiveReferences"])(shortDataPointer + '/' + i, jsf.dataRecursiveRefMap, jsf.arrayMap);
                        var itemRecursive = itemRefPointer !== shortDataPointer + '/' + i;
                        if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(jsf.templateRefLibrary, itemRefPointer)) {
                            jsf.templateRefLibrary[itemRefPointer] = null;
                            jsf.templateRefLibrary[itemRefPointer] = buildFormGroupTemplate(jsf, null, setValues, schemaRefPointer, itemRefPointer, templatePointer + '/controls/' + i);
                        }
                        controls.push(Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isArray"])(nodeValue) ?
                            buildFormGroupTemplate(jsf, nodeValue[i], setValues, schemaPointer + '/items/' + i, dataPointer + '/' + i, templatePointer + '/controls/' + i) :
                            itemRecursive ?
                                null : Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(jsf.templateRefLibrary[itemRefPointer]));
                    }
                }
                if (schema.items.length < maxItems && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isObject"])(schema.additionalItems)) {
                    additionalItemsPointer = schemaPointer + '/additionalItems';
                }
            }
            else {
                additionalItemsPointer = schemaPointer + '/items';
            }
            if (additionalItemsPointer) {
                var schemaRefPointer = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_6__["removeRecursiveReferences"])(additionalItemsPointer, jsf.schemaRecursiveRefMap);
                var itemRefPointer = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_6__["removeRecursiveReferences"])(shortDataPointer + '/-', jsf.dataRecursiveRefMap, jsf.arrayMap);
                var itemRecursive = itemRefPointer !== shortDataPointer + '/-';
                if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(jsf.templateRefLibrary, itemRefPointer)) {
                    jsf.templateRefLibrary[itemRefPointer] = null;
                    jsf.templateRefLibrary[itemRefPointer] = buildFormGroupTemplate(jsf, null, setValues, schemaRefPointer, itemRefPointer, templatePointer + '/controls/-');
                }
                var itemOptions = nodeOptions;
                if (!itemRecursive || Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(validators, 'required')) {
                    var arrayLength = Math.min(Math.max(itemRecursive ? 0 :
                        (itemOptions.get('tupleItems') + itemOptions.get('listItems')) || 0, Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isArray"])(nodeValue) ? nodeValue.length : 0), maxItems);
                    for (var i = controls.length; i < arrayLength; i++) {
                        controls.push(Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isArray"])(nodeValue) ?
                            buildFormGroupTemplate(jsf, nodeValue[i], setValues, schemaRefPointer, dataPointer + '/-', templatePointer + '/controls/-') :
                            itemRecursive ?
                                null : Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(jsf.templateRefLibrary[itemRefPointer]));
                    }
                }
            }
            return { controlType: controlType, controls: controls, validators: validators };
        case '$ref':
            var schemaRef = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].compile(schema.$ref);
            var dataRef = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].toDataPointer(schemaRef, schema);
            var refPointer = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_6__["removeRecursiveReferences"])(dataRef, jsf.dataRecursiveRefMap, jsf.arrayMap);
            if (refPointer && !Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(jsf.templateRefLibrary, refPointer)) {
                jsf.templateRefLibrary[refPointer] = null;
                var newTemplate = buildFormGroupTemplate(jsf, setValues, setValues, schemaRef);
                if (newTemplate) {
                    jsf.templateRefLibrary[refPointer] = newTemplate;
                }
                else {
                    delete jsf.templateRefLibrary[refPointer];
                }
            }
            return null;
        case 'FormControl':
            var value = {
                value: setValues && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isPrimitive"])(nodeValue) ? nodeValue : null,
                disabled: nodeOptions.get('disabled') || false
            };
            return { controlType: controlType, value: value, validators: validators };
        default:
            return null;
    }
}
function buildFormGroup(template) {
    var validatorFns = [];
    var validatorFn = null;
    if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(template, 'validators')) {
        Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["forEach"])(template.validators, function (parameters, validator) {
            if (typeof _json_validators__WEBPACK_IMPORTED_MODULE_5__["JsonValidators"][validator] === 'function') {
                validatorFns.push(_json_validators__WEBPACK_IMPORTED_MODULE_5__["JsonValidators"][validator].apply(null, parameters));
            }
        });
        if (validatorFns.length &&
            Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["inArray"])(template.controlType, ['FormGroup', 'FormArray'])) {
            validatorFn = validatorFns.length > 1 ?
                _json_validators__WEBPACK_IMPORTED_MODULE_5__["JsonValidators"].compose(validatorFns) : validatorFns[0];
        }
    }
    if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(template, 'controlType')) {
        switch (template.controlType) {
            case 'FormGroup':
                var groupControls_1 = {};
                Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["forEach"])(template.controls, function (controls, key) {
                    var newControl = buildFormGroup(controls);
                    if (newControl) {
                        groupControls_1[key] = newControl;
                    }
                });
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"](groupControls_1, validatorFn);
            case 'FormArray':
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormArray"](Object(lodash__WEBPACK_IMPORTED_MODULE_1__["filter"])(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["map"])(template.controls, function (controls) { return buildFormGroup(controls); })), validatorFn);
            case 'FormControl':
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](template.value, validatorFns);
        }
    }
    return null;
}
function mergeValues() {
    var valuesToMerge = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        valuesToMerge[_i] = arguments[_i];
    }
    var mergedValues = null;
    for (var _a = 0, valuesToMerge_1 = valuesToMerge; _a < valuesToMerge_1.length; _a++) {
        var currentValue = valuesToMerge_1[_a];
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(currentValue)) {
            if (typeof currentValue === 'object' &&
                (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(mergedValues) || typeof mergedValues !== 'object')) {
                if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isArray"])(currentValue)) {
                    mergedValues = currentValue.slice();
                }
                else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isObject"])(currentValue)) {
                    mergedValues = __assign({}, currentValue);
                }
            }
            else if (typeof currentValue !== 'object') {
                mergedValues = currentValue;
            }
            else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isObject"])(mergedValues) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isObject"])(currentValue)) {
                Object.assign(mergedValues, currentValue);
            }
            else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isObject"])(mergedValues) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isArray"])(currentValue)) {
                var newValues = [];
                for (var _b = 0, currentValue_1 = currentValue; _b < currentValue_1.length; _b++) {
                    var value = currentValue_1[_b];
                    newValues.push(mergeValues(mergedValues, value));
                }
                mergedValues = newValues;
            }
            else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isArray"])(mergedValues) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isObject"])(currentValue)) {
                var newValues = [];
                for (var _c = 0, mergedValues_1 = mergedValues; _c < mergedValues_1.length; _c++) {
                    var value = mergedValues_1[_c];
                    newValues.push(mergeValues(value, currentValue));
                }
                mergedValues = newValues;
            }
            else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isArray"])(mergedValues) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isArray"])(currentValue)) {
                var newValues = [];
                for (var i = 0; i < Math.max(mergedValues.length, currentValue.length); i++) {
                    if (i < mergedValues.length && i < currentValue.length) {
                        newValues.push(mergeValues(mergedValues[i], currentValue[i]));
                    }
                    else if (i < mergedValues.length) {
                        newValues.push(mergedValues[i]);
                    }
                    else if (i < currentValue.length) {
                        newValues.push(currentValue[i]);
                    }
                }
                mergedValues = newValues;
            }
        }
    }
    return mergedValues;
}
function setRequiredFields(schema, formControlTemplate) {
    var fieldsRequired = false;
    if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(schema, 'required') && !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(schema.required)) {
        fieldsRequired = true;
        var requiredArray = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isArray"])(schema.required) ? schema.required : [schema.required];
        requiredArray = Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["forEach"])(requiredArray, function (key) { return _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].set(formControlTemplate, '/' + key + '/validators/required', []); });
    }
    return fieldsRequired;
}
function formatFormData(formData, dataMap, recursiveRefMap, arrayMap, returnEmptyFields, fixErrors) {
    if (returnEmptyFields === void 0) { returnEmptyFields = false; }
    if (fixErrors === void 0) { fixErrors = false; }
    if (formData === null || typeof formData !== 'object') {
        return formData;
    }
    var formattedData = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isArray"])(formData) ? [] : {};
    _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].forEachDeep(formData, function (value, dataPointer) {
        if (returnEmptyFields && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isArray"])(value)) {
            _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].set(formattedData, dataPointer, []);
        }
        else if (returnEmptyFields && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isObject"])(value) && !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isDate"])(value)) {
            _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].set(formattedData, dataPointer, {});
        }
        else {
            var genericPointer_1 = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].has(dataMap, [dataPointer, 'schemaType']) ? dataPointer :
                Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_6__["removeRecursiveReferences"])(dataPointer, recursiveRefMap, arrayMap);
            if (_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].has(dataMap, [genericPointer_1, 'schemaType'])) {
                var schemaType = dataMap.get(genericPointer_1).get('schemaType');
                if (schemaType === 'null') {
                    _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].set(formattedData, dataPointer, null);
                }
                else if ((Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["hasValue"])(value) || returnEmptyFields) &&
                    Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["inArray"])(schemaType, ['string', 'integer', 'number', 'boolean'])) {
                    var newValue = (fixErrors || (value === null && returnEmptyFields)) ?
                        Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["toSchemaType"])(value, schemaType) : Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["toJavaScriptType"])(value, schemaType);
                    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(newValue) || returnEmptyFields) {
                        _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].set(formattedData, dataPointer, newValue);
                    }
                }
                else if (schemaType === 'object' && !returnEmptyFields) {
                    if (!Array.from(dataMap.keys()).some(function (item) { return item.includes(dataPointer + '/'); })) {
                        _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].set(formattedData, dataPointer, value);
                    }
                    (dataMap.get(genericPointer_1).get('required') || []).forEach(function (key) {
                        var keySchemaType = dataMap.get(genericPointer_1 + "/" + key).get('schemaType');
                        if (keySchemaType === 'array') {
                            _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].set(formattedData, dataPointer + "/" + key, []);
                        }
                        else if (keySchemaType === 'object') {
                            _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].set(formattedData, dataPointer + "/" + key, {});
                        }
                    });
                }
                if (dataMap.get(genericPointer_1).get('schemaFormat') === 'date-time') {
                    if (/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?$/i.test(value)) {
                        _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].set(formattedData, dataPointer, value + "Z");
                    }
                    else if (/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d$/i.test(value)) {
                        _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].set(formattedData, dataPointer, value + ":00Z");
                    }
                    else if (fixErrors && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(value)) {
                        _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].set(formattedData, dataPointer, value + ":00:00:00Z");
                    }
                }
            }
            else if (typeof value !== 'object' || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isDate"])(value) ||
                (value === null && returnEmptyFields)) {
                console.error('formatFormData error: ' +
                    ("Schema type not found for form value at " + genericPointer_1));
                console.error('dataMap', dataMap);
                console.error('recursiveRefMap', recursiveRefMap);
                console.error('genericPointer', genericPointer_1);
            }
        }
    });
    return formattedData;
}
function getControl(formGroup, dataPointer, returnGroup) {
    if (returnGroup === void 0) { returnGroup = false; }
    if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isObject"])(formGroup) || !_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].isJsonPointer(dataPointer)) {
        if (!_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].isJsonPointer(dataPointer)) {
            if (typeof dataPointer === 'string') {
                var formControl = formGroup.get(dataPointer);
                if (formControl) {
                    return formControl;
                }
            }
            console.error("getControl error: Invalid JSON Pointer: " + dataPointer);
        }
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isObject"])(formGroup)) {
            console.error("getControl error: Invalid formGroup: " + formGroup);
        }
        return null;
    }
    var dataPointerArray = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].parse(dataPointer);
    if (returnGroup) {
        dataPointerArray = dataPointerArray.slice(0, -1);
    }
    if (typeof formGroup.get === 'function' &&
        dataPointerArray.every(function (key) { return key.indexOf('.') === -1; })) {
        var formControl = formGroup.get(dataPointerArray.join('.'));
        if (formControl) {
            return formControl;
        }
    }
    var subGroup = formGroup;
    for (var _i = 0, dataPointerArray_1 = dataPointerArray; _i < dataPointerArray_1.length; _i++) {
        var key = dataPointerArray_1[_i];
        if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(subGroup, 'controls')) {
            subGroup = subGroup.controls;
        }
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_2__["isArray"])(subGroup) && (key === '-')) {
            subGroup = subGroup[subGroup.length - 1];
        }
        else if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__["hasOwn"])(subGroup, key)) {
            subGroup = subGroup[key];
        }
        else {
            console.error("getControl error: Unable to find \"" + key + "\" item in FormGroup.");
            console.error(dataPointer);
            console.error(formGroup);
            return;
        }
    }
    return subGroup;
}


/***/ }),

/***/ "./src/lib/src/shared/format-regex.constants.ts":
/*!******************************************************!*\
  !*** ./src/lib/src/shared/format-regex.constants.ts ***!
  \******************************************************/
/*! exports provided: jsonSchemaFormatTests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonSchemaFormatTests", function() { return jsonSchemaFormatTests; });
var jsonSchemaFormatTests = {
    'date': /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
    'time': /^[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
    'date-time': /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d(?::[0-5]\d)?(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
    'email': /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    'hostname': /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i,
    'ipv4': /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    'ipv6': /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
    'uri': /^(?:[a-z][a-z0-9+-.]*)(?::|\/)\/?[^\s]*$/i,
    'uri-reference': /^(?:(?:[a-z][a-z0-9+-.]*:)?\/\/)?[^\s]*$/i,
    'uri-template': /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
    'url': /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,
    'uuid': /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
    'color': /^\s*(#(?:[\da-f]{3}){1,2}|rgb\((?:\d{1,3},\s*){2}\d{1,3}\)|rgba\((?:\d{1,3},\s*){3}\d*\.?\d+\)|hsl\(\d{1,3}(?:,\s*\d{1,3}%){2}\)|hsla\(\d{1,3}(?:,\s*\d{1,3}%){2},\s*\d*\.?\d+\))\s*$/gi,
    'json-pointer': /^(?:\/(?:[^~/]|~0|~1)*)*$|^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
    'relative-json-pointer': /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
    'regex': function (str) {
        if (/[^\\]\\Z/.test(str)) {
            return false;
        }
        try {
            new RegExp(str);
            return true;
        }
        catch (e) {
            return false;
        }
    }
};


/***/ }),

/***/ "./src/lib/src/shared/index.ts":
/*!*************************************!*\
  !*** ./src/lib/src/shared/index.ts ***!
  \*************************************/
/*! exports provided: _executeValidators, _executeAsyncValidators, _mergeObjects, _mergeErrors, isDefined, hasValue, isEmpty, isString, isNumber, isInteger, isBoolean, isFunction, isObject, isArray, isDate, isMap, isSet, isPromise, isObservable, getType, isType, isPrimitive, toJavaScriptType, toSchemaType, _toPromise, toObservable, inArray, xor, addClasses, copy, forEach, forEachCopy, hasOwn, mergeFilteredObject, uniqueItems, commonItems, fixTitle, toTitleCase, JsonPointer, JsonValidators, buildSchemaFromLayout, buildSchemaFromData, getFromSchema, removeRecursiveReferences, getInputType, checkInlineType, isInputRequired, updateInputOptions, getTitleMapFromOneOf, getControlValidators, resolveSchemaReferences, getSubSchema, combineAllOf, fixRequiredArrayProperties, convertSchemaToDraft6, mergeSchemas, buildFormGroupTemplate, buildFormGroup, formatFormData, getControl, setRequiredFields, buildLayout, buildLayoutFromSchema, mapLayout, getLayoutNode, buildTitleMap, dateToString, stringToDate, findDate, OrderableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator.functions */ "./src/lib/src/shared/validator.functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_executeValidators", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["_executeValidators"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_executeAsyncValidators", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["_executeAsyncValidators"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_mergeObjects", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["_mergeObjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_mergeErrors", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["_mergeErrors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["hasValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["isEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["isInteger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["isMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["isSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["isPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["isObservable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["getType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["isType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["isPrimitive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toJavaScriptType", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["toJavaScriptType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toSchemaType", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["toSchemaType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_toPromise", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["_toPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toObservable", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["toObservable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inArray", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["inArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xor", function() { return _validator_functions__WEBPACK_IMPORTED_MODULE_0__["xor"]; });

/* harmony import */ var _utility_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility.functions */ "./src/lib/src/shared/utility.functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addClasses", function() { return _utility_functions__WEBPACK_IMPORTED_MODULE_1__["addClasses"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _utility_functions__WEBPACK_IMPORTED_MODULE_1__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _utility_functions__WEBPACK_IMPORTED_MODULE_1__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEachCopy", function() { return _utility_functions__WEBPACK_IMPORTED_MODULE_1__["forEachCopy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return _utility_functions__WEBPACK_IMPORTED_MODULE_1__["hasOwn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeFilteredObject", function() { return _utility_functions__WEBPACK_IMPORTED_MODULE_1__["mergeFilteredObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueItems", function() { return _utility_functions__WEBPACK_IMPORTED_MODULE_1__["uniqueItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commonItems", function() { return _utility_functions__WEBPACK_IMPORTED_MODULE_1__["commonItems"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fixTitle", function() { return _utility_functions__WEBPACK_IMPORTED_MODULE_1__["fixTitle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toTitleCase", function() { return _utility_functions__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"]; });

/* harmony import */ var _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsonpointer.functions */ "./src/lib/src/shared/jsonpointer.functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonPointer", function() { return _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_2__["JsonPointer"]; });

/* harmony import */ var _json_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json.validators */ "./src/lib/src/shared/json.validators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonValidators", function() { return _json_validators__WEBPACK_IMPORTED_MODULE_3__["JsonValidators"]; });

/* harmony import */ var _json_schema_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json-schema.functions */ "./src/lib/src/shared/json-schema.functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildSchemaFromLayout", function() { return _json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["buildSchemaFromLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildSchemaFromData", function() { return _json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["buildSchemaFromData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFromSchema", function() { return _json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["getFromSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeRecursiveReferences", function() { return _json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["removeRecursiveReferences"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInputType", function() { return _json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["getInputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkInlineType", function() { return _json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["checkInlineType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInputRequired", function() { return _json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["isInputRequired"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateInputOptions", function() { return _json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["updateInputOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTitleMapFromOneOf", function() { return _json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["getTitleMapFromOneOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getControlValidators", function() { return _json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["getControlValidators"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolveSchemaReferences", function() { return _json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["resolveSchemaReferences"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSubSchema", function() { return _json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["getSubSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineAllOf", function() { return _json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["combineAllOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fixRequiredArrayProperties", function() { return _json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["fixRequiredArrayProperties"]; });

/* harmony import */ var _convert_schema_to_draft6_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./convert-schema-to-draft6.function */ "./src/lib/src/shared/convert-schema-to-draft6.function.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertSchemaToDraft6", function() { return _convert_schema_to_draft6_function__WEBPACK_IMPORTED_MODULE_5__["convertSchemaToDraft6"]; });

/* harmony import */ var _merge_schemas_function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./merge-schemas.function */ "./src/lib/src/shared/merge-schemas.function.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeSchemas", function() { return _merge_schemas_function__WEBPACK_IMPORTED_MODULE_6__["mergeSchemas"]; });

/* harmony import */ var _form_group_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-group.functions */ "./src/lib/src/shared/form-group.functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildFormGroupTemplate", function() { return _form_group_functions__WEBPACK_IMPORTED_MODULE_7__["buildFormGroupTemplate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildFormGroup", function() { return _form_group_functions__WEBPACK_IMPORTED_MODULE_7__["buildFormGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatFormData", function() { return _form_group_functions__WEBPACK_IMPORTED_MODULE_7__["formatFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getControl", function() { return _form_group_functions__WEBPACK_IMPORTED_MODULE_7__["getControl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRequiredFields", function() { return _form_group_functions__WEBPACK_IMPORTED_MODULE_7__["setRequiredFields"]; });

/* harmony import */ var _layout_functions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout.functions */ "./src/lib/src/shared/layout.functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildLayout", function() { return _layout_functions__WEBPACK_IMPORTED_MODULE_8__["buildLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildLayoutFromSchema", function() { return _layout_functions__WEBPACK_IMPORTED_MODULE_8__["buildLayoutFromSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapLayout", function() { return _layout_functions__WEBPACK_IMPORTED_MODULE_8__["mapLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLayoutNode", function() { return _layout_functions__WEBPACK_IMPORTED_MODULE_8__["getLayoutNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildTitleMap", function() { return _layout_functions__WEBPACK_IMPORTED_MODULE_8__["buildTitleMap"]; });

/* harmony import */ var _date_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./date.functions */ "./src/lib/src/shared/date.functions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dateToString", function() { return _date_functions__WEBPACK_IMPORTED_MODULE_9__["dateToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringToDate", function() { return _date_functions__WEBPACK_IMPORTED_MODULE_9__["stringToDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDate", function() { return _date_functions__WEBPACK_IMPORTED_MODULE_9__["findDate"]; });

/* harmony import */ var _orderable_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./orderable.directive */ "./src/lib/src/shared/orderable.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderableDirective", function() { return _orderable_directive__WEBPACK_IMPORTED_MODULE_10__["OrderableDirective"]; });














/***/ }),

/***/ "./src/lib/src/shared/json-schema.functions.ts":
/*!*****************************************************!*\
  !*** ./src/lib/src/shared/json-schema.functions.ts ***!
  \*****************************************************/
/*! exports provided: buildSchemaFromLayout, buildSchemaFromData, getFromSchema, removeRecursiveReferences, getInputType, checkInlineType, isInputRequired, updateInputOptions, getTitleMapFromOneOf, getControlValidators, resolveSchemaReferences, getSubSchema, combineAllOf, fixRequiredArrayProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSchemaFromLayout", function() { return buildSchemaFromLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSchemaFromData", function() { return buildSchemaFromData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFromSchema", function() { return getFromSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRecursiveReferences", function() { return removeRecursiveReferences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputType", function() { return getInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInlineType", function() { return checkInlineType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInputRequired", function() { return isInputRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateInputOptions", function() { return updateInputOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTitleMapFromOneOf", function() { return getTitleMapFromOneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getControlValidators", function() { return getControlValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveSchemaReferences", function() { return resolveSchemaReferences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubSchema", function() { return getSubSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineAllOf", function() { return combineAllOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixRequiredArrayProperties", function() { return fixRequiredArrayProperties; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validator_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator.functions */ "./src/lib/src/shared/validator.functions.ts");
/* harmony import */ var _utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.functions */ "./src/lib/src/shared/utility.functions.ts");
/* harmony import */ var _merge_schemas_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./merge-schemas.function */ "./src/lib/src/shared/merge-schemas.function.ts");
/* harmony import */ var _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jsonpointer.functions */ "./src/lib/src/shared/jsonpointer.functions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





function buildSchemaFromLayout(layout) {
    return;
}
function buildSchemaFromData(data, requireAllFields, isRoot) {
    if (requireAllFields === void 0) { requireAllFields = false; }
    if (isRoot === void 0) { isRoot = true; }
    var newSchema = {};
    var getFieldType = function (value) {
        var fieldType = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["getType"])(value, 'strict');
        return { integer: 'number', null: 'string' }[fieldType] || fieldType;
    };
    var buildSubSchema = function (value) {
        return buildSchemaFromData(value, requireAllFields, false);
    };
    if (isRoot) {
        newSchema.$schema = 'http://json-schema.org/draft-06/schema#';
    }
    newSchema.type = getFieldType(data);
    if (newSchema.type === 'object') {
        newSchema.properties = {};
        if (requireAllFields) {
            newSchema.required = [];
        }
        for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
            var key = _a[_i];
            newSchema.properties[key] = buildSubSchema(data[key]);
            if (requireAllFields) {
                newSchema.required.push(key);
            }
        }
    }
    else if (newSchema.type === 'array') {
        newSchema.items = data.map(buildSubSchema);
        if ((new Set(data.map(getFieldType))).size === 1) {
            newSchema.items = newSchema.items.reduce(function (a, b) { return (__assign({}, a, b)); }, {});
        }
        if (requireAllFields) {
            newSchema.minItems = 1;
        }
    }
    return newSchema;
}
function getFromSchema(schema, dataPointer, returnType) {
    if (returnType === void 0) { returnType = 'schema'; }
    var dataPointerArray = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].parse(dataPointer);
    if (dataPointerArray === null) {
        console.error("getFromSchema error: Invalid JSON Pointer: " + dataPointer);
        return null;
    }
    var subSchema = schema;
    var schemaPointer = [];
    var length = dataPointerArray.length;
    if (returnType.slice(0, 6) === 'parent') {
        dataPointerArray.length--;
    }
    for (var i = 0; i < length; ++i) {
        var parentSchema = subSchema;
        var key = dataPointerArray[i];
        var subSchemaFound = false;
        if (typeof subSchema !== 'object') {
            console.error("getFromSchema error: Unable to find \"" + key + "\" key in schema.");
            console.error(schema);
            console.error(dataPointer);
            return null;
        }
        if (subSchema.type === 'array' && (!isNaN(key) || key === '-')) {
            if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(subSchema, 'items')) {
                if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(subSchema.items)) {
                    subSchemaFound = true;
                    subSchema = subSchema.items;
                    schemaPointer.push('items');
                }
                else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(subSchema.items)) {
                    if (!isNaN(key) && subSchema.items.length >= +key) {
                        subSchemaFound = true;
                        subSchema = subSchema.items[+key];
                        schemaPointer.push('items', key);
                    }
                }
            }
            if (!subSchemaFound && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(subSchema.additionalItems)) {
                subSchemaFound = true;
                subSchema = subSchema.additionalItems;
                schemaPointer.push('additionalItems');
            }
            else if (subSchema.additionalItems !== false) {
                subSchemaFound = true;
                subSchema = {};
                schemaPointer.push('additionalItems');
            }
        }
        else if (subSchema.type === 'object') {
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(subSchema.properties) && Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(subSchema.properties, key)) {
                subSchemaFound = true;
                subSchema = subSchema.properties[key];
                schemaPointer.push('properties', key);
            }
            else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(subSchema.additionalProperties)) {
                subSchemaFound = true;
                subSchema = subSchema.additionalProperties;
                schemaPointer.push('additionalProperties');
            }
            else if (subSchema.additionalProperties !== false) {
                subSchemaFound = true;
                subSchema = {};
                schemaPointer.push('additionalProperties');
            }
        }
        if (!subSchemaFound) {
            console.error("getFromSchema error: Unable to find \"" + key + "\" item in schema.");
            console.error(schema);
            console.error(dataPointer);
            return;
        }
    }
    return returnType.slice(-7) === 'Pointer' ? schemaPointer : subSchema;
}
function removeRecursiveReferences(pointer, recursiveRefMap, arrayMap) {
    if (arrayMap === void 0) { arrayMap = new Map(); }
    if (!pointer) {
        return '';
    }
    var genericPointer = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].toGenericPointer(_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].compile(pointer), arrayMap);
    if (genericPointer.indexOf('/') === -1) {
        return genericPointer;
    }
    var possibleReferences = true;
    while (possibleReferences) {
        possibleReferences = false;
        recursiveRefMap.forEach(function (toPointer, fromPointer) {
            if (_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].isSubPointer(toPointer, fromPointer)) {
                while (_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].isSubPointer(fromPointer, genericPointer, true)) {
                    genericPointer = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].toGenericPointer(toPointer + genericPointer.slice(fromPointer.length), arrayMap);
                    possibleReferences = true;
                }
            }
        });
    }
    return genericPointer;
}
function getInputType(schema, layoutNode) {
    if (layoutNode === void 0) { layoutNode = null; }
    var controlType = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].getFirst([
        [schema, '/x-schema-form/type'],
        [schema, '/x-schema-form/widget/component'],
        [schema, '/x-schema-form/widget'],
        [schema, '/widget/component'],
        [schema, '/widget']
    ]);
    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isString"])(controlType)) {
        return checkInlineType(controlType, schema, layoutNode);
    }
    var schemaType = schema.type;
    if (schemaType) {
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schemaType)) {
            schemaType =
                Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["inArray"])('object', schemaType) && Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, 'properties') ? 'object' :
                    Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["inArray"])('array', schemaType) && Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, 'items') ? 'array' :
                        Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["inArray"])('array', schemaType) && Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, 'additionalItems') ? 'array' :
                            Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["inArray"])('string', schemaType) ? 'string' :
                                Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["inArray"])('number', schemaType) ? 'number' :
                                    Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["inArray"])('integer', schemaType) ? 'integer' :
                                        Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["inArray"])('boolean', schemaType) ? 'boolean' : 'unknown';
        }
        if (schemaType === 'boolean') {
            return 'checkbox';
        }
        if (schemaType === 'object') {
            if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, 'properties') || Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, 'additionalProperties')) {
                return 'section';
            }
            if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, '$ref')) {
                return '$ref';
            }
        }
        if (schemaType === 'array') {
            var itemsObject = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].getFirst([
                [schema, '/items'],
                [schema, '/additionalItems']
            ]) || {};
            return Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(itemsObject, 'enum') && schema.maxItems !== 1 ?
                checkInlineType('checkboxes', schema, layoutNode) : 'array';
        }
        if (schemaType === 'null') {
            return 'none';
        }
        if (_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].has(layoutNode, '/options/titleMap') ||
            Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, 'enum') || getTitleMapFromOneOf(schema, null, true)) {
            return 'select';
        }
        if (schemaType === 'number' || schemaType === 'integer') {
            return (schemaType === 'integer' || Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, 'multipleOf')) &&
                Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, 'maximum') && Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, 'minimum') ? 'range' : schemaType;
        }
        if (schemaType === 'string') {
            return {
                'color': 'color',
                'date': 'date',
                'date-time': 'datetime-local',
                'email': 'email',
                'uri': 'url',
            }[schema.format] || 'text';
        }
    }
    if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, '$ref')) {
        return '$ref';
    }
    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schema.oneOf) || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schema.anyOf)) {
        return 'one-of';
    }
    console.error("getInputType error: Unable to determine input type for " + schemaType);
    console.error('schema', schema);
    if (layoutNode) {
        console.error('layoutNode', layoutNode);
    }
    return 'none';
}
function checkInlineType(controlType, schema, layoutNode) {
    if (layoutNode === void 0) { layoutNode = null; }
    if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isString"])(controlType) || (controlType.slice(0, 8) !== 'checkbox' && controlType.slice(0, 5) !== 'radio')) {
        return controlType;
    }
    if (_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].getFirst([
        [layoutNode, '/inline'],
        [layoutNode, '/options/inline'],
        [schema, '/inline'],
        [schema, '/x-schema-form/inline'],
        [schema, '/x-schema-form/options/inline'],
        [schema, '/x-schema-form/widget/inline'],
        [schema, '/x-schema-form/widget/component/inline'],
        [schema, '/x-schema-form/widget/component/options/inline'],
        [schema, '/widget/inline'],
        [schema, '/widget/component/inline'],
        [schema, '/widget/component/options/inline'],
    ]) === true) {
        return controlType.slice(0, 5) === 'radio' ?
            'radios-inline' : 'checkboxes-inline';
    }
    else {
        return controlType;
    }
}
function isInputRequired(schema, schemaPointer) {
    if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema)) {
        console.error('isInputRequired error: Input schema must be an object.');
        return false;
    }
    var listPointerArray = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].parse(schemaPointer);
    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(listPointerArray)) {
        if (!listPointerArray.length) {
            return schema.required === true;
        }
        var keyName = listPointerArray.pop();
        var nextToLastKey = listPointerArray[listPointerArray.length - 1];
        if (['properties', 'additionalProperties', 'patternProperties', 'items', 'additionalItems']
            .includes(nextToLastKey)) {
            listPointerArray.pop();
        }
        var parentSchema = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].get(schema, listPointerArray) || {};
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(parentSchema.required)) {
            return parentSchema.required.includes(keyName);
        }
        if (parentSchema.type === 'array') {
            return Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(parentSchema, 'minItems') &&
                Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(keyName) &&
                +parentSchema.minItems > +keyName;
        }
    }
    return false;
}
function updateInputOptions(layoutNode, schema, jsf) {
    if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(layoutNode) || !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(layoutNode.options)) {
        return;
    }
    var newOptions = {};
    var fixUiKeys = function (key) { return key.slice(0, 3).toLowerCase() === 'ui:' ? key.slice(3) : key; };
    Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["mergeFilteredObject"])(newOptions, jsf.formOptions.defautWidgetOptions, [], fixUiKeys);
    [[_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].get(schema, '/ui:widget/options'), []],
        [_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].get(schema, '/ui:widget'), []],
        [schema, [
                'additionalProperties', 'additionalItems', 'properties', 'items',
                'required', 'type', 'x-schema-form', '$ref'
            ]],
        [_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].get(schema, '/x-schema-form/options'), []],
        [_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].get(schema, '/x-schema-form'), ['items', 'options']],
        [layoutNode, [
                '_id', '$ref', 'arrayItem', 'arrayItemType', 'dataPointer', 'dataType',
                'items', 'key', 'name', 'options', 'recursiveReference', 'type', 'widget'
            ]],
        [layoutNode.options, []],
    ].forEach(function (_a) {
        var object = _a[0], excludeKeys = _a[1];
        return Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["mergeFilteredObject"])(newOptions, object, excludeKeys, fixUiKeys);
    });
    if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newOptions, 'titleMap')) {
        var newTitleMap = null;
        newTitleMap = getTitleMapFromOneOf(schema, newOptions.flatList);
        if (newTitleMap) {
            newOptions.titleMap = newTitleMap;
        }
        if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newOptions, 'titleMap') && !Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newOptions, 'enum') && Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, 'items')) {
            if (_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].has(schema, '/items/titleMap')) {
                newOptions.titleMap = schema.items.titleMap;
            }
            else if (_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].has(schema, '/items/enum')) {
                newOptions.enum = schema.items.enum;
                if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newOptions, 'enumNames') && _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].has(schema, '/items/enumNames')) {
                    newOptions.enumNames = schema.items.enumNames;
                }
            }
            else if (_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].has(schema, '/items/oneOf')) {
                newTitleMap = getTitleMapFromOneOf(schema.items, newOptions.flatList);
                if (newTitleMap) {
                    newOptions.titleMap = newTitleMap;
                }
            }
        }
    }
    if (schema.type === 'integer' && !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["hasValue"])(newOptions.multipleOf)) {
        newOptions.multipleOf = 1;
    }
    if (_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].has(newOptions, '/autocomplete/source')) {
        newOptions.typeahead = newOptions.autocomplete;
    }
    else if (_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].has(newOptions, '/tagsinput/source')) {
        newOptions.typeahead = newOptions.tagsinput;
    }
    else if (_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].has(newOptions, '/tagsinput/typeahead/source')) {
        newOptions.typeahead = newOptions.tagsinput.typeahead;
    }
    layoutNode.options = newOptions;
}
function getTitleMapFromOneOf(schema, flatList, validateOnly) {
    if (schema === void 0) { schema = {}; }
    if (flatList === void 0) { flatList = null; }
    if (validateOnly === void 0) { validateOnly = false; }
    var titleMap = null;
    var oneOf = schema.oneOf || schema.anyOf || null;
    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(oneOf) && oneOf.every(function (item) { return item.title; })) {
        if (oneOf.every(function (item) { return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(item.enum) && item.enum.length === 1; })) {
            if (validateOnly) {
                return true;
            }
            titleMap = oneOf.map(function (item) { return ({ name: item.title, value: item.enum[0] }); });
        }
        else if (oneOf.every(function (item) { return item.const; })) {
            if (validateOnly) {
                return true;
            }
            titleMap = oneOf.map(function (item) { return ({ name: item.title, value: item.const }); });
        }
        if (flatList !== false && (titleMap || [])
            .filter(function (title) { return ((title || {}).name || '').indexOf(': '); }).length > 1) {
            var newTitleMap_1 = titleMap.map(function (title) {
                var _a = title.name.split(/: (.+)/), group = _a[0], name = _a[1];
                return group && name ? __assign({}, title, { group: group, name: name }) : title;
            });
            if (flatList === true || newTitleMap_1.some(function (title, index) { return index &&
                Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(title, 'group') && title.group === newTitleMap_1[index - 1].group; })) {
                titleMap = newTitleMap_1;
            }
        }
    }
    return validateOnly ? false : titleMap;
}
function getControlValidators(schema) {
    if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema)) {
        return null;
    }
    var validators = {};
    if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, 'type')) {
        switch (schema.type) {
            case 'string':
                Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["forEach"])(['pattern', 'format', 'minLength', 'maxLength'], function (prop) {
                    if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, prop)) {
                        validators[prop] = [schema[prop]];
                    }
                });
                break;
            case 'number':
            case 'integer':
                Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["forEach"])(['Minimum', 'Maximum'], function (ucLimit) {
                    var eLimit = 'exclusive' + ucLimit;
                    var limit = ucLimit.toLowerCase();
                    if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, limit)) {
                        var exclusive = Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, eLimit) && schema[eLimit] === true;
                        validators[limit] = [schema[limit], exclusive];
                    }
                });
                Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["forEach"])(['multipleOf', 'type'], function (prop) {
                    if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, prop)) {
                        validators[prop] = [schema[prop]];
                    }
                });
                break;
            case 'object':
                Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["forEach"])(['minProperties', 'maxProperties', 'dependencies'], function (prop) {
                    if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, prop)) {
                        validators[prop] = [schema[prop]];
                    }
                });
                break;
            case 'array':
                Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["forEach"])(['minItems', 'maxItems', 'uniqueItems'], function (prop) {
                    if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, prop)) {
                        validators[prop] = [schema[prop]];
                    }
                });
                break;
        }
    }
    if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, 'enum')) {
        validators.enum = [schema.enum];
    }
    return validators;
}
function resolveSchemaReferences(schema, schemaRefLibrary, schemaRecursiveRefMap, dataRecursiveRefMap, arrayMap) {
    if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema)) {
        console.error('resolveSchemaReferences error: schema must be an object.');
        return;
    }
    var refLinks = new Set();
    var refMapSet = new Set();
    var refMap = new Map();
    var recursiveRefMap = new Map();
    var refLibrary = {};
    _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].forEachDeep(schema, function (subSchema, subSchemaPointer) {
        if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(subSchema, '$ref') && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isString"])(subSchema['$ref'])) {
            var refPointer = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].compile(subSchema['$ref']);
            refLinks.add(refPointer);
            refMapSet.add(subSchemaPointer + '~~' + refPointer);
            refMap.set(subSchemaPointer, refPointer);
        }
    });
    refLinks.forEach(function (ref) { return refLibrary[ref] = getSubSchema(schema, ref); });
    var checkRefLinks = true;
    while (checkRefLinks) {
        checkRefLinks = false;
        Array.from(refMap).forEach(function (_a) {
            var fromRef1 = _a[0], toRef1 = _a[1];
            return Array.from(refMap)
                .filter(function (_a) {
                var fromRef2 = _a[0], toRef2 = _a[1];
                return _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].isSubPointer(toRef1, fromRef2, true) &&
                    !_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].isSubPointer(toRef2, toRef1, true) &&
                    !refMapSet.has(fromRef1 + fromRef2.slice(toRef1.length) + '~~' + toRef2);
            })
                .forEach(function (_a) {
                var fromRef2 = _a[0], toRef2 = _a[1];
                refMapSet.add(fromRef1 + fromRef2.slice(toRef1.length) + '~~' + toRef2);
                checkRefLinks = true;
            });
        });
    }
    Array.from(refMapSet)
        .map(function (refLink) { return refLink.split('~~'); })
        .filter(function (_a) {
        var fromRef = _a[0], toRef = _a[1];
        return _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].isSubPointer(toRef, fromRef);
    })
        .forEach(function (_a) {
        var fromRef = _a[0], toRef = _a[1];
        return recursiveRefMap.set(fromRef, toRef);
    });
    Array.from(refMap)
        .filter(function (_a) {
        var fromRef1 = _a[0], toRef1 = _a[1];
        return Array.from(recursiveRefMap.keys())
            .every(function (fromRef2) { return !_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].isSubPointer(fromRef1, fromRef2, true); });
    })
        .forEach(function (_a) {
        var fromRef1 = _a[0], toRef1 = _a[1];
        return Array.from(recursiveRefMap)
            .filter(function (_a) {
            var fromRef2 = _a[0], toRef2 = _a[1];
            return !recursiveRefMap.has(fromRef1 + fromRef2.slice(toRef1.length)) &&
                _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].isSubPointer(toRef1, fromRef2, true) &&
                !_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].isSubPointer(toRef1, fromRef1, true);
        })
            .forEach(function (_a) {
            var fromRef2 = _a[0], toRef2 = _a[1];
            return recursiveRefMap.set(fromRef1 + fromRef2.slice(toRef1.length), fromRef1 + toRef2.slice(toRef1.length));
        });
    });
    var compiledSchema = __assign({}, schema);
    delete compiledSchema.definitions;
    compiledSchema =
        getSubSchema(compiledSchema, '', refLibrary, recursiveRefMap);
    _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].forEachDeep(compiledSchema, function (subSchema, subSchemaPointer) {
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isString"])(subSchema['$ref'])) {
            var refPointer = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].compile(subSchema['$ref']);
            if (!_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].isSubPointer(refPointer, subSchemaPointer, true)) {
                refPointer = removeRecursiveReferences(subSchemaPointer, recursiveRefMap);
                _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].set(compiledSchema, subSchemaPointer, { $ref: "#" + refPointer });
            }
            if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schemaRefLibrary, 'refPointer')) {
                schemaRefLibrary[refPointer] = !refPointer.length ? compiledSchema :
                    getSubSchema(compiledSchema, refPointer, schemaRefLibrary, recursiveRefMap);
            }
            if (!schemaRecursiveRefMap.has(subSchemaPointer)) {
                schemaRecursiveRefMap.set(subSchemaPointer, refPointer);
            }
            var fromDataRef = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].toDataPointer(subSchemaPointer, compiledSchema);
            if (!dataRecursiveRefMap.has(fromDataRef)) {
                var toDataRef = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].toDataPointer(refPointer, compiledSchema);
                dataRecursiveRefMap.set(fromDataRef, toDataRef);
            }
        }
        if (subSchema.type === 'array' &&
            (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(subSchema, 'items') || Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(subSchema, 'additionalItems'))) {
            var dataPointer = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].toDataPointer(subSchemaPointer, compiledSchema);
            if (!arrayMap.has(dataPointer)) {
                var tupleItems = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(subSchema.items) ? subSchema.items.length : 0;
                arrayMap.set(dataPointer, tupleItems);
            }
        }
    }, true);
    return compiledSchema;
}
function getSubSchema(schema, pointer, schemaRefLibrary, schemaRecursiveRefMap, usedPointers) {
    if (schemaRefLibrary === void 0) { schemaRefLibrary = null; }
    if (schemaRecursiveRefMap === void 0) { schemaRecursiveRefMap = null; }
    if (usedPointers === void 0) { usedPointers = []; }
    if (!schemaRefLibrary || !schemaRecursiveRefMap) {
        return _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].getCopy(schema, pointer);
    }
    if (typeof pointer !== 'string') {
        pointer = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].compile(pointer);
    }
    usedPointers = usedPointers.concat([pointer]);
    var newSchema = null;
    if (pointer === '') {
        newSchema = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(schema);
    }
    else {
        var shortPointer = removeRecursiveReferences(pointer, schemaRecursiveRefMap);
        if (shortPointer !== pointer) {
            usedPointers = usedPointers.concat([shortPointer]);
        }
        newSchema = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].getFirstCopy([
            [schemaRefLibrary, [shortPointer]],
            [schema, pointer],
            [schema, shortPointer]
        ]);
    }
    return _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].forEachDeepCopy(newSchema, function (subSchema, subPointer) {
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(subSchema)) {
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isString"])(subSchema.$ref)) {
                var refPointer_1 = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].compile(subSchema.$ref);
                if (refPointer_1.length && usedPointers.every(function (ptr) {
                    return !_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_4__["JsonPointer"].isSubPointer(refPointer_1, ptr, true);
                })) {
                    var refSchema = getSubSchema(schema, refPointer_1, schemaRefLibrary, schemaRecursiveRefMap, usedPointers);
                    if (Object.keys(subSchema).length === 1) {
                        return refSchema;
                    }
                    else {
                        var extraKeys = __assign({}, subSchema);
                        delete extraKeys.$ref;
                        return Object(_merge_schemas_function__WEBPACK_IMPORTED_MODULE_3__["mergeSchemas"])(refSchema, extraKeys);
                    }
                }
            }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(subSchema.allOf)) {
                return combineAllOf(subSchema);
            }
            if (subSchema.type === 'array' && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(subSchema.required)) {
                return fixRequiredArrayProperties(subSchema);
            }
        }
        return subSchema;
    }, true, pointer);
}
function combineAllOf(schema) {
    if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema) || !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schema.allOf)) {
        return schema;
    }
    var mergedSchema = _merge_schemas_function__WEBPACK_IMPORTED_MODULE_3__["mergeSchemas"].apply(void 0, schema.allOf);
    if (Object.keys(schema).length > 1) {
        var extraKeys = __assign({}, schema);
        delete extraKeys.allOf;
        mergedSchema = Object(_merge_schemas_function__WEBPACK_IMPORTED_MODULE_3__["mergeSchemas"])(mergedSchema, extraKeys);
    }
    return mergedSchema;
}
function fixRequiredArrayProperties(schema) {
    if (schema.type === 'array' && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schema.required)) {
        var itemsObject_1 = Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema.items, 'properties') ? 'items' :
            Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema.additionalItems, 'properties') ? 'additionalItems' : null;
        if (itemsObject_1 && !Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema[itemsObject_1], 'required') && (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema[itemsObject_1], 'additionalProperties') ||
            schema.required.every(function (key) { return Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema[itemsObject_1].properties, key); }))) {
            schema = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(schema);
            schema[itemsObject_1].required = schema.required;
            delete schema.required;
        }
    }
    return schema;
}


/***/ }),

/***/ "./src/lib/src/shared/json.validators.ts":
/*!***********************************************!*\
  !*** ./src/lib/src/shared/json.validators.ts ***!
  \***********************************************/
/*! exports provided: JsonValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonValidators", function() { return JsonValidators; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _validator_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validator.functions */ "./src/lib/src/shared/validator.functions.ts");
/* harmony import */ var _utility_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utility.functions */ "./src/lib/src/shared/utility.functions.ts");
/* harmony import */ var _format_regex_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./format-regex.constants */ "./src/lib/src/shared/format-regex.constants.ts");






var JsonValidators = (function () {
    function JsonValidators() {
    }
    JsonValidators.required = function (input) {
        if (input === undefined) {
            input = true;
        }
        switch (input) {
            case true:
                return function (control, invert) {
                    if (invert === void 0) { invert = false; }
                    if (invert) {
                        return null;
                    }
                    return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(control.value) ? null : { 'required': true };
                };
            case false:
                return JsonValidators.nullValidator;
            default:
                return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(input.value) ? null : { 'required': true };
        }
    };
    JsonValidators.type = function (requiredType) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(requiredType)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value)) {
                return null;
            }
            var currentValue = control.value;
            var isValid = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isArray"])(requiredType) ?
                requiredType.some(function (type) { return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isType"])(currentValue, type); }) :
                Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isType"])(currentValue, requiredType);
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'type': { requiredType: requiredType, currentValue: currentValue } };
        };
    };
    JsonValidators.enum = function (allowedValues) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isArray"])(allowedValues)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value)) {
                return null;
            }
            var currentValue = control.value;
            var isEquals = function (enumValue, inputValue) {
                return enumValue === inputValue ||
                    (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(enumValue) && +inputValue === +enumValue) ||
                    (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isBoolean"])(enumValue, 'strict') &&
                        Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["toJavaScriptType"])(inputValue, 'boolean') === enumValue) ||
                    (enumValue === null && !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(inputValue)) ||
                    Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(enumValue, inputValue);
            };
            var isValid = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isArray"])(currentValue) ?
                currentValue.every(function (inputValue) { return allowedValues.some(function (enumValue) {
                    return isEquals(enumValue, inputValue);
                }); }) :
                allowedValues.some(function (enumValue) { return isEquals(enumValue, currentValue); });
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'enum': { allowedValues: allowedValues, currentValue: currentValue } };
        };
    };
    JsonValidators.const = function (requiredValue) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(requiredValue)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value)) {
                return null;
            }
            var currentValue = control.value;
            var isEquals = function (constValue, inputValue) {
                return constValue === inputValue ||
                    Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(constValue) && +inputValue === +constValue ||
                    Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isBoolean"])(constValue, 'strict') &&
                        Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["toJavaScriptType"])(inputValue, 'boolean') === constValue ||
                    constValue === null && !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(inputValue);
            };
            var isValid = isEquals(requiredValue, currentValue);
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'const': { requiredValue: requiredValue, currentValue: currentValue } };
        };
    };
    JsonValidators.minLength = function (minimumLength) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(minimumLength)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value)) {
                return null;
            }
            var currentLength = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isString"])(control.value) ? control.value.length : 0;
            var isValid = currentLength >= minimumLength;
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'minLength': { minimumLength: minimumLength, currentLength: currentLength } };
        };
    };
    JsonValidators.maxLength = function (maximumLength) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(maximumLength)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            var currentLength = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isString"])(control.value) ? control.value.length : 0;
            var isValid = currentLength <= maximumLength;
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'maxLength': { maximumLength: maximumLength, currentLength: currentLength } };
        };
    };
    JsonValidators.pattern = function (pattern, wholeString) {
        if (wholeString === void 0) { wholeString = false; }
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(pattern)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value)) {
                return null;
            }
            var regex;
            var requiredPattern;
            if (typeof pattern === 'string') {
                requiredPattern = (wholeString) ? "^" + pattern + "$" : pattern;
                regex = new RegExp(requiredPattern);
            }
            else {
                requiredPattern = pattern.toString();
                regex = pattern;
            }
            var currentValue = control.value;
            var isValid = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isString"])(currentValue) ? regex.test(currentValue) : false;
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'pattern': { requiredPattern: requiredPattern, currentValue: currentValue } };
        };
    };
    JsonValidators.format = function (requiredFormat) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(requiredFormat)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value)) {
                return null;
            }
            var isValid;
            var currentValue = control.value;
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isString"])(currentValue)) {
                var formatTest = _format_regex_constants__WEBPACK_IMPORTED_MODULE_5__["jsonSchemaFormatTests"][requiredFormat];
                if (typeof formatTest === 'object') {
                    isValid = formatTest.test(currentValue);
                }
                else if (typeof formatTest === 'function') {
                    isValid = formatTest(currentValue);
                }
                else {
                    console.error("format validator error: \"" + requiredFormat + "\" is not a recognized format.");
                    isValid = true;
                }
            }
            else {
                isValid = ['date', 'time', 'date-time'].includes(requiredFormat) &&
                    Object.prototype.toString.call(currentValue) === '[object Date]';
            }
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'format': { requiredFormat: requiredFormat, currentValue: currentValue } };
        };
    };
    JsonValidators.minimum = function (minimumValue) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(minimumValue)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value)) {
                return null;
            }
            var currentValue = control.value;
            var isValid = !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(currentValue) || currentValue >= minimumValue;
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'minimum': { minimumValue: minimumValue, currentValue: currentValue } };
        };
    };
    JsonValidators.exclusiveMinimum = function (exclusiveMinimumValue) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(exclusiveMinimumValue)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value)) {
                return null;
            }
            var currentValue = control.value;
            var isValid = !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(currentValue) || +currentValue < exclusiveMinimumValue;
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'exclusiveMinimum': { exclusiveMinimumValue: exclusiveMinimumValue, currentValue: currentValue } };
        };
    };
    JsonValidators.maximum = function (maximumValue) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(maximumValue)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value)) {
                return null;
            }
            var currentValue = control.value;
            var isValid = !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(currentValue) || +currentValue <= maximumValue;
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'maximum': { maximumValue: maximumValue, currentValue: currentValue } };
        };
    };
    JsonValidators.exclusiveMaximum = function (exclusiveMaximumValue) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(exclusiveMaximumValue)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value)) {
                return null;
            }
            var currentValue = control.value;
            var isValid = !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(currentValue) || +currentValue < exclusiveMaximumValue;
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'exclusiveMaximum': { exclusiveMaximumValue: exclusiveMaximumValue, currentValue: currentValue } };
        };
    };
    JsonValidators.multipleOf = function (multipleOfValue) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(multipleOfValue)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value)) {
                return null;
            }
            var currentValue = control.value;
            var isValid = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isNumber"])(currentValue) &&
                currentValue % multipleOfValue === 0;
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'multipleOf': { multipleOfValue: multipleOfValue, currentValue: currentValue } };
        };
    };
    JsonValidators.minProperties = function (minimumProperties) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(minimumProperties)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value)) {
                return null;
            }
            var currentProperties = Object.keys(control.value).length || 0;
            var isValid = currentProperties >= minimumProperties;
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'minProperties': { minimumProperties: minimumProperties, currentProperties: currentProperties } };
        };
    };
    JsonValidators.maxProperties = function (maximumProperties) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(maximumProperties)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            var currentProperties = Object.keys(control.value).length || 0;
            var isValid = currentProperties <= maximumProperties;
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'maxProperties': { maximumProperties: maximumProperties, currentProperties: currentProperties } };
        };
    };
    JsonValidators.dependencies = function (dependencies) {
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["getType"])(dependencies) !== 'object' || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(dependencies)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value)) {
                return null;
            }
            var allErrors = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["_mergeObjects"])(Object(_utility_functions__WEBPACK_IMPORTED_MODULE_4__["forEachCopy"])(dependencies, function (value, requiringField) {
                if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(control.value[requiringField])) {
                    return null;
                }
                var requiringFieldErrors = {};
                var requiredFields;
                var properties = {};
                if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["getType"])(dependencies[requiringField]) === 'array') {
                    requiredFields = dependencies[requiringField];
                }
                else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["getType"])(dependencies[requiringField]) === 'object') {
                    requiredFields = dependencies[requiringField]['required'] || [];
                    properties = dependencies[requiringField]['properties'] || {};
                }
                for (var _i = 0, requiredFields_1 = requiredFields; _i < requiredFields_1.length; _i++) {
                    var requiredField = requiredFields_1[_i];
                    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(control.value[requiredField]), invert)) {
                        requiringFieldErrors[requiredField] = { 'required': true };
                    }
                }
                requiringFieldErrors = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["_mergeObjects"])(requiringFieldErrors, Object(_utility_functions__WEBPACK_IMPORTED_MODULE_4__["forEachCopy"])(properties, function (requirements, requiredField) {
                    var requiredFieldErrors = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["_mergeObjects"])(Object(_utility_functions__WEBPACK_IMPORTED_MODULE_4__["forEachCopy"])(requirements, function (requirement, parameter) {
                        var validator = null;
                        if (requirement === 'maximum' || requirement === 'minimum') {
                            var exclusive = !!requirements['exclusiveM' + requirement.slice(1)];
                            validator = JsonValidators[requirement](parameter, exclusive);
                        }
                        else if (typeof JsonValidators[requirement] === 'function') {
                            validator = JsonValidators[requirement](parameter);
                        }
                        return !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isDefined"])(validator) ?
                            null : validator(control.value[requiredField]);
                    }));
                    return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(requiredFieldErrors) ?
                        null : (_a = {}, _a[requiredField] = requiredFieldErrors, _a);
                    var _a;
                }));
                return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(requiringFieldErrors) ?
                    null : (_a = {}, _a[requiringField] = requiringFieldErrors, _a);
                var _a;
            }));
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(allErrors) ? null : allErrors;
        };
    };
    JsonValidators.minItems = function (minimumItems) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(minimumItems)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value)) {
                return null;
            }
            var currentItems = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isArray"])(control.value) ? control.value.length : 0;
            var isValid = currentItems >= minimumItems;
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'minItems': { minimumItems: minimumItems, currentItems: currentItems } };
        };
    };
    JsonValidators.maxItems = function (maximumItems) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(maximumItems)) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            var currentItems = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isArray"])(control.value) ? control.value.length : 0;
            var isValid = currentItems <= maximumItems;
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'maxItems': { maximumItems: maximumItems, currentItems: currentItems } };
        };
    };
    JsonValidators.uniqueItems = function (unique) {
        if (unique === void 0) { unique = true; }
        if (!unique) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value)) {
                return null;
            }
            var sorted = control.value.slice().sort();
            var duplicateItems = [];
            for (var i = 1; i < sorted.length; i++) {
                if (sorted[i - 1] === sorted[i] && duplicateItems.includes(sorted[i])) {
                    duplicateItems.push(sorted[i]);
                }
            }
            var isValid = !duplicateItems.length;
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'uniqueItems': { duplicateItems: duplicateItems } };
        };
    };
    JsonValidators.contains = function (requiredItem) {
        if (requiredItem === void 0) { requiredItem = true; }
        if (!requiredItem) {
            return JsonValidators.nullValidator;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value) || !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isArray"])(control.value)) {
                return null;
            }
            var currentItems = control.value;
            var isValid = true;
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : { 'contains': { requiredItem: requiredItem, currentItems: currentItems } };
        };
    };
    JsonValidators.nullValidator = function (control) {
        return null;
    };
    JsonValidators.composeAnyOf = function (validators) {
        if (!validators) {
            return null;
        }
        var presentValidators = validators.filter(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isDefined"]);
        if (presentValidators.length === 0) {
            return null;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            var arrayOfErrors = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["_executeValidators"])(control, presentValidators, invert).filter(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isDefined"]);
            var isValid = validators.length > arrayOfErrors.length;
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert) ?
                null : _validator_functions__WEBPACK_IMPORTED_MODULE_3__["_mergeObjects"].apply(void 0, arrayOfErrors.concat([{ 'anyOf': !invert }]));
        };
    };
    JsonValidators.composeOneOf = function (validators) {
        if (!validators) {
            return null;
        }
        var presentValidators = validators.filter(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isDefined"]);
        if (presentValidators.length === 0) {
            return null;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            var arrayOfErrors = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["_executeValidators"])(control, presentValidators);
            var validControls = validators.length - arrayOfErrors.filter(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isDefined"]).length;
            var isValid = validControls === 1;
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert)) {
                return null;
            }
            var arrayOfValids = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["_executeValidators"])(control, presentValidators, invert);
            return _validator_functions__WEBPACK_IMPORTED_MODULE_3__["_mergeObjects"].apply(void 0, arrayOfErrors.concat(arrayOfValids, [{ 'oneOf': !invert }]));
        };
    };
    JsonValidators.composeAllOf = function (validators) {
        if (!validators) {
            return null;
        }
        var presentValidators = validators.filter(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isDefined"]);
        if (presentValidators.length === 0) {
            return null;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            var combinedErrors = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["_mergeErrors"])(Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["_executeValidators"])(control, presentValidators, invert));
            var isValid = combinedErrors === null;
            return (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert)) ?
                null : Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["_mergeObjects"])(combinedErrors, { 'allOf': !invert });
        };
    };
    JsonValidators.composeNot = function (validator) {
        if (!validator) {
            return null;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value)) {
                return null;
            }
            var error = validator(control, !invert);
            var isValid = error === null;
            return (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["xor"])(isValid, invert)) ?
                null : Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["_mergeObjects"])(error, { 'not': !invert });
        };
    };
    JsonValidators.compose = function (validators) {
        if (!validators) {
            return null;
        }
        var presentValidators = validators.filter(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isDefined"]);
        if (presentValidators.length === 0) {
            return null;
        }
        return function (control, invert) {
            if (invert === void 0) { invert = false; }
            return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["_mergeErrors"])(Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["_executeValidators"])(control, presentValidators, invert));
        };
    };
    JsonValidators.composeAsync = function (validators) {
        if (!validators) {
            return null;
        }
        var presentValidators = validators.filter(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isDefined"]);
        if (presentValidators.length === 0) {
            return null;
        }
        return function (control) {
            var observables = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["_executeAsyncValidators"])(control, presentValidators).map(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["toObservable"]);
            return rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"].call(Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])(observables), _validator_functions__WEBPACK_IMPORTED_MODULE_3__["_mergeErrors"]);
        };
    };
    JsonValidators.min = function (min) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(min)) {
            return JsonValidators.nullValidator;
        }
        return function (control) {
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value) || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(min)) {
                return null;
            }
            var value = parseFloat(control.value);
            var actual = control.value;
            return isNaN(value) || value >= min ? null : { 'min': { min: min, actual: actual } };
        };
    };
    JsonValidators.max = function (max) {
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["hasValue"])(max)) {
            return JsonValidators.nullValidator;
        }
        return function (control) {
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(control.value) || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(max)) {
                return null;
            }
            var value = parseFloat(control.value);
            var actual = control.value;
            return isNaN(value) || value <= max ? null : { 'max': { max: max, actual: actual } };
        };
    };
    JsonValidators.requiredTrue = function (control) {
        if (!control) {
            return JsonValidators.nullValidator;
        }
        return control.value === true ? null : { 'required': true };
    };
    JsonValidators.email = function (control) {
        if (!control) {
            return JsonValidators.nullValidator;
        }
        var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
    };
    return JsonValidators;
}());



/***/ }),

/***/ "./src/lib/src/shared/jsonpointer.functions.ts":
/*!*****************************************************!*\
  !*** ./src/lib/src/shared/jsonpointer.functions.ts ***!
  \*****************************************************/
/*! exports provided: JsonPointer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonPointer", function() { return JsonPointer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _validator_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator.functions */ "./src/lib/src/shared/validator.functions.ts");
/* harmony import */ var _utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.functions */ "./src/lib/src/shared/utility.functions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JsonPointer = (function () {
    function JsonPointer() {
    }
    JsonPointer.get = function (object, pointer, startSlice, endSlice, getBoolean, errors) {
        if (startSlice === void 0) { startSlice = 0; }
        if (endSlice === void 0) { endSlice = null; }
        if (getBoolean === void 0) { getBoolean = false; }
        if (errors === void 0) { errors = false; }
        if (object === null) {
            return getBoolean ? false : undefined;
        }
        var keyArray = this.parse(pointer, errors);
        if (typeof object === 'object' && keyArray !== null) {
            var subObject = object;
            if (startSlice >= keyArray.length || endSlice <= -keyArray.length) {
                return object;
            }
            if (startSlice <= -keyArray.length) {
                startSlice = 0;
            }
            if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(endSlice) || endSlice >= keyArray.length) {
                endSlice = keyArray.length;
            }
            keyArray = keyArray.slice(startSlice, endSlice);
            for (var _i = 0, keyArray_1 = keyArray; _i < keyArray_1.length; _i++) {
                var key = keyArray_1[_i];
                if (key === '-' && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(subObject) && subObject.length) {
                    key = subObject.length - 1;
                }
                if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isMap"])(subObject) && subObject.has(key)) {
                    subObject = subObject.get(key);
                }
                else if (typeof subObject === 'object' && subObject !== null &&
                    Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(subObject, key)) {
                    subObject = subObject[key];
                }
                else {
                    if (errors) {
                        console.error("get error: \"" + key + "\" key not found in object.");
                        console.error(pointer);
                        console.error(object);
                    }
                    return getBoolean ? false : undefined;
                }
            }
            return getBoolean ? true : subObject;
        }
        if (errors && keyArray === null) {
            console.error("get error: Invalid JSON Pointer: " + pointer);
        }
        if (errors && typeof object !== 'object') {
            console.error('get error: Invalid object:');
            console.error(object);
        }
        return getBoolean ? false : undefined;
    };
    JsonPointer.getCopy = function (object, pointer, startSlice, endSlice, getBoolean, errors) {
        if (startSlice === void 0) { startSlice = 0; }
        if (endSlice === void 0) { endSlice = null; }
        if (getBoolean === void 0) { getBoolean = false; }
        if (errors === void 0) { errors = false; }
        var objectToCopy = this.get(object, pointer, startSlice, endSlice, getBoolean, errors);
        return this.forEachDeepCopy(objectToCopy);
    };
    JsonPointer.getFirst = function (items, defaultValue, getCopy) {
        if (defaultValue === void 0) { defaultValue = null; }
        if (getCopy === void 0) { getCopy = false; }
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(items)) {
            return;
        }
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(items)) {
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(item)) {
                    continue;
                }
                if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(item) && item.length >= 2) {
                    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(item[0]) || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(item[1])) {
                        continue;
                    }
                    var value = getCopy ?
                        this.getCopy(item[0], item[1]) :
                        this.get(item[0], item[1]);
                    if (value) {
                        return value;
                    }
                    continue;
                }
                console.error('getFirst error: Input not in correct format.\n' +
                    'Should be: [ [ object1, pointer1 ], [ object 2, pointer2 ], etc... ]');
                return;
            }
            return defaultValue;
        }
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isMap"])(items)) {
            for (var _a = 0, items_2 = items; _a < items_2.length; _a++) {
                var _b = items_2[_a], object = _b[0], pointer = _b[1];
                if (object === null || !this.isJsonPointer(pointer)) {
                    continue;
                }
                var value = getCopy ?
                    this.getCopy(object, pointer) :
                    this.get(object, pointer);
                if (value) {
                    return value;
                }
            }
            return defaultValue;
        }
        console.error('getFirst error: Input not in correct format.\n' +
            'Should be: [ [ object1, pointer1 ], [ object 2, pointer2 ], etc... ]');
        return defaultValue;
    };
    JsonPointer.getFirstCopy = function (items, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var firstCopy = this.getFirst(items, defaultValue, true);
        return firstCopy;
    };
    JsonPointer.set = function (object, pointer, value, insert) {
        if (insert === void 0) { insert = false; }
        var keyArray = this.parse(pointer);
        if (keyArray !== null && keyArray.length) {
            var subObject = object;
            for (var i = 0; i < keyArray.length - 1; ++i) {
                var key = keyArray[i];
                if (key === '-' && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(subObject)) {
                    key = subObject.length;
                }
                if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isMap"])(subObject) && subObject.has(key)) {
                    subObject = subObject.get(key);
                }
                else {
                    if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(subObject, key)) {
                        subObject[key] = (keyArray[i + 1].match(/^(\d+|-)$/)) ? [] : {};
                    }
                    subObject = subObject[key];
                }
            }
            var lastKey = keyArray[keyArray.length - 1];
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(subObject) && lastKey === '-') {
                subObject.push(value);
            }
            else if (insert && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(subObject) && !isNaN(+lastKey)) {
                subObject.splice(lastKey, 0, value);
            }
            else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isMap"])(subObject)) {
                subObject.set(lastKey, value);
            }
            else {
                subObject[lastKey] = value;
            }
            return object;
        }
        console.error("set error: Invalid JSON Pointer: " + pointer);
        return object;
    };
    JsonPointer.setCopy = function (object, pointer, value, insert) {
        if (insert === void 0) { insert = false; }
        var keyArray = this.parse(pointer);
        if (keyArray !== null) {
            var newObject = Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["copy"])(object);
            var subObject = newObject;
            for (var i = 0; i < keyArray.length - 1; ++i) {
                var key = keyArray[i];
                if (key === '-' && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(subObject)) {
                    key = subObject.length;
                }
                if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isMap"])(subObject) && subObject.has(key)) {
                    subObject.set(key, Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["copy"])(subObject.get(key)));
                    subObject = subObject.get(key);
                }
                else {
                    if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(subObject, key)) {
                        subObject[key] = (keyArray[i + 1].match(/^(\d+|-)$/)) ? [] : {};
                    }
                    subObject[key] = Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["copy"])(subObject[key]);
                    subObject = subObject[key];
                }
            }
            var lastKey = keyArray[keyArray.length - 1];
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(subObject) && lastKey === '-') {
                subObject.push(value);
            }
            else if (insert && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(subObject) && !isNaN(+lastKey)) {
                subObject.splice(lastKey, 0, value);
            }
            else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isMap"])(subObject)) {
                subObject.set(lastKey, value);
            }
            else {
                subObject[lastKey] = value;
            }
            return newObject;
        }
        console.error("setCopy error: Invalid JSON Pointer: " + pointer);
        return object;
    };
    JsonPointer.insert = function (object, pointer, value) {
        var updatedObject = this.set(object, pointer, value, true);
        return updatedObject;
    };
    JsonPointer.insertCopy = function (object, pointer, value) {
        var updatedObject = this.setCopy(object, pointer, value, true);
        return updatedObject;
    };
    JsonPointer.remove = function (object, pointer) {
        var keyArray = this.parse(pointer);
        if (keyArray !== null && keyArray.length) {
            var lastKey = keyArray.pop();
            var parentObject = this.get(object, keyArray);
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(parentObject)) {
                if (lastKey === '-') {
                    lastKey = parentObject.length - 1;
                }
                parentObject.splice(lastKey, 1);
            }
            else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(parentObject)) {
                delete parentObject[lastKey];
            }
            return object;
        }
        console.error("remove error: Invalid JSON Pointer: " + pointer);
        return object;
    };
    JsonPointer.has = function (object, pointer) {
        var hasValue = this.get(object, pointer, 0, null, true);
        return hasValue;
    };
    JsonPointer.dict = function (object) {
        var results = {};
        this.forEachDeep(object, function (value, pointer) {
            if (typeof value !== 'object') {
                results[pointer] = value;
            }
        });
        return results;
    };
    JsonPointer.forEachDeep = function (object, fn, bottomUp, pointer, rootObject) {
        if (fn === void 0) { fn = function (v) { return v; }; }
        if (bottomUp === void 0) { bottomUp = false; }
        if (pointer === void 0) { pointer = ''; }
        if (rootObject === void 0) { rootObject = object; }
        if (typeof fn !== 'function') {
            console.error("forEachDeep error: Iterator is not a function:", fn);
            return;
        }
        if (!bottomUp) {
            fn(object, pointer, rootObject);
        }
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(object) || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(object)) {
            for (var _i = 0, _a = Object.keys(object); _i < _a.length; _i++) {
                var key = _a[_i];
                var newPointer = pointer + '/' + this.escape(key);
                this.forEachDeep(object[key], fn, bottomUp, newPointer, rootObject);
            }
        }
        if (bottomUp) {
            fn(object, pointer, rootObject);
        }
    };
    JsonPointer.forEachDeepCopy = function (object, fn, bottomUp, pointer, rootObject) {
        if (fn === void 0) { fn = function (v) { return v; }; }
        if (bottomUp === void 0) { bottomUp = false; }
        if (pointer === void 0) { pointer = ''; }
        if (rootObject === void 0) { rootObject = object; }
        if (typeof fn !== 'function') {
            console.error("forEachDeepCopy error: Iterator is not a function:", fn);
            return null;
        }
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(object) || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(object)) {
            var newObject = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(object) ? object.slice() : __assign({}, object);
            if (!bottomUp) {
                newObject = fn(newObject, pointer, rootObject);
            }
            for (var _i = 0, _a = Object.keys(newObject); _i < _a.length; _i++) {
                var key = _a[_i];
                var newPointer = pointer + '/' + this.escape(key);
                newObject[key] = this.forEachDeepCopy(newObject[key], fn, bottomUp, newPointer, rootObject);
            }
            if (bottomUp) {
                newObject = fn(newObject, pointer, rootObject);
            }
            return newObject;
        }
        else {
            return fn(object, pointer, rootObject);
        }
    };
    JsonPointer.escape = function (key) {
        var escaped = key.toString().replace(/~/g, '~0').replace(/\//g, '~1');
        return escaped;
    };
    JsonPointer.unescape = function (key) {
        var unescaped = key.toString().replace(/~1/g, '/').replace(/~0/g, '~');
        return unescaped;
    };
    JsonPointer.parse = function (pointer, errors) {
        if (errors === void 0) { errors = false; }
        if (!this.isJsonPointer(pointer)) {
            if (errors) {
                console.error("parse error: Invalid JSON Pointer: " + pointer);
            }
            return null;
        }
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(pointer)) {
            return pointer;
        }
        if (typeof pointer === 'string') {
            if (pointer[0] === '#') {
                pointer = pointer.slice(1);
            }
            if (pointer === '' || pointer === '/') {
                return [];
            }
            return pointer.slice(1).split('/').map(this.unescape);
        }
    };
    JsonPointer.compile = function (pointer, defaultValue, errors) {
        var _this = this;
        if (defaultValue === void 0) { defaultValue = ''; }
        if (errors === void 0) { errors = false; }
        if (pointer === '#') {
            return '';
        }
        if (!this.isJsonPointer(pointer)) {
            if (errors) {
                console.error("compile error: Invalid JSON Pointer: " + pointer);
            }
            return null;
        }
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(pointer)) {
            if (pointer.length === 0) {
                return '';
            }
            return '/' + pointer.map(function (key) { return key === '' ? defaultValue : _this.escape(key); }).join('/');
        }
        if (typeof pointer === 'string') {
            if (pointer[0] === '#') {
                pointer = pointer.slice(1);
            }
            return pointer;
        }
    };
    JsonPointer.toKey = function (pointer, errors) {
        if (errors === void 0) { errors = false; }
        var keyArray = this.parse(pointer, errors);
        if (keyArray === null) {
            return null;
        }
        if (!keyArray.length) {
            return '';
        }
        return keyArray[keyArray.length - 1];
    };
    JsonPointer.isJsonPointer = function (value) {
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(value)) {
            return value.every(function (key) { return typeof key === 'string'; });
        }
        else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isString"])(value)) {
            if (value === '' || value === '#') {
                return true;
            }
            if (value[0] === '/' || value.slice(0, 2) === '#/') {
                return !/(~[^01]|~$)/g.test(value);
            }
        }
        return false;
    };
    JsonPointer.isSubPointer = function (shortPointer, longPointer, trueIfMatching, errors) {
        if (trueIfMatching === void 0) { trueIfMatching = false; }
        if (errors === void 0) { errors = false; }
        if (!this.isJsonPointer(shortPointer) || !this.isJsonPointer(longPointer)) {
            if (errors) {
                var invalid = '';
                if (!this.isJsonPointer(shortPointer)) {
                    invalid += " 1: " + shortPointer;
                }
                if (!this.isJsonPointer(longPointer)) {
                    invalid += " 2: " + longPointer;
                }
                console.error("isSubPointer error: Invalid JSON Pointer " + invalid);
            }
            return;
        }
        shortPointer = this.compile(shortPointer, '', errors);
        longPointer = this.compile(longPointer, '', errors);
        return shortPointer === longPointer ? trueIfMatching :
            shortPointer + "/" === longPointer.slice(0, shortPointer.length + 1);
    };
    JsonPointer.toIndexedPointer = function (genericPointer, indexArray, arrayMap) {
        if (arrayMap === void 0) { arrayMap = null; }
        if (this.isJsonPointer(genericPointer) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(indexArray)) {
            var indexedPointer_1 = this.compile(genericPointer);
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isMap"])(arrayMap)) {
                var arrayIndex_1 = 0;
                return indexedPointer_1.replace(/\/\-(?=\/|$)/g, function (key, stringIndex) {
                    return arrayMap.has(indexedPointer_1.slice(0, stringIndex)) ?
                        '/' + indexArray[arrayIndex_1++] : key;
                });
            }
            else {
                for (var _i = 0, indexArray_1 = indexArray; _i < indexArray_1.length; _i++) {
                    var pointerIndex = indexArray_1[_i];
                    indexedPointer_1 = indexedPointer_1.replace('/-', '/' + pointerIndex);
                }
                return indexedPointer_1;
            }
        }
        if (!this.isJsonPointer(genericPointer)) {
            console.error("toIndexedPointer error: Invalid JSON Pointer: " + genericPointer);
        }
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(indexArray)) {
            console.error("toIndexedPointer error: Invalid indexArray: " + indexArray);
        }
    };
    JsonPointer.toGenericPointer = function (indexedPointer, arrayMap) {
        if (arrayMap === void 0) { arrayMap = new Map(); }
        if (this.isJsonPointer(indexedPointer) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isMap"])(arrayMap)) {
            var pointerArray = this.parse(indexedPointer);
            for (var i = 1; i < pointerArray.length; i++) {
                var subPointer = this.compile(pointerArray.slice(0, i));
                if (arrayMap.has(subPointer) &&
                    arrayMap.get(subPointer) <= +pointerArray[i]) {
                    pointerArray[i] = '-';
                }
            }
            return this.compile(pointerArray);
        }
        if (!this.isJsonPointer(indexedPointer)) {
            console.error("toGenericPointer error: invalid JSON Pointer: " + indexedPointer);
        }
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isMap"])(arrayMap)) {
            console.error("toGenericPointer error: invalid arrayMap: " + arrayMap);
        }
    };
    JsonPointer.toControlPointer = function (dataPointer, formGroup, controlMustExist) {
        if (controlMustExist === void 0) { controlMustExist = false; }
        var dataPointerArray = this.parse(dataPointer);
        var controlPointerArray = [];
        var subGroup = formGroup;
        if (dataPointerArray !== null) {
            for (var _i = 0, dataPointerArray_1 = dataPointerArray; _i < dataPointerArray_1.length; _i++) {
                var key = dataPointerArray_1[_i];
                if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(subGroup, 'controls')) {
                    controlPointerArray.push('controls');
                    subGroup = subGroup.controls;
                }
                if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(subGroup) && (key === '-')) {
                    controlPointerArray.push((subGroup.length - 1).toString());
                    subGroup = subGroup[subGroup.length - 1];
                }
                else if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(subGroup, key)) {
                    controlPointerArray.push(key);
                    subGroup = subGroup[key];
                }
                else if (controlMustExist) {
                    console.error("toControlPointer error: Unable to find \"" + key + "\" item in FormGroup.");
                    console.error(dataPointer);
                    console.error(formGroup);
                    return;
                }
                else {
                    controlPointerArray.push(key);
                    subGroup = { controls: {} };
                }
            }
            return this.compile(controlPointerArray);
        }
        console.error("toControlPointer error: Invalid JSON Pointer: " + dataPointer);
    };
    JsonPointer.toSchemaPointer = function (dataPointer, schema) {
        if (this.isJsonPointer(dataPointer) && typeof schema === 'object') {
            var pointerArray = this.parse(dataPointer);
            if (!pointerArray.length) {
                return '';
            }
            var firstKey = pointerArray.shift();
            if (schema.type === 'object' || schema.properties || schema.additionalProperties) {
                if ((schema.properties || {})[firstKey]) {
                    return "/properties/" + this.escape(firstKey) +
                        this.toSchemaPointer(pointerArray, schema.properties[firstKey]);
                }
                else if (schema.additionalProperties) {
                    return '/additionalProperties' +
                        this.toSchemaPointer(pointerArray, schema.additionalProperties);
                }
            }
            if ((schema.type === 'array' || schema.items) &&
                (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(firstKey) || firstKey === '-' || firstKey === '')) {
                var arrayItem = firstKey === '-' || firstKey === '' ? 0 : +firstKey;
                if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schema.items)) {
                    if (arrayItem < schema.items.length) {
                        return '/items/' + arrayItem +
                            this.toSchemaPointer(pointerArray, schema.items[arrayItem]);
                    }
                    else if (schema.additionalItems) {
                        return '/additionalItems' +
                            this.toSchemaPointer(pointerArray, schema.additionalItems);
                    }
                }
                else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema.items)) {
                    return '/items' + this.toSchemaPointer(pointerArray, schema.items);
                }
                else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema.additionalItems)) {
                    return '/additionalItems' +
                        this.toSchemaPointer(pointerArray, schema.additionalItems);
                }
            }
            console.error("toSchemaPointer error: Data pointer " + dataPointer + " " +
                ("not compatible with schema " + schema));
            return null;
        }
        if (!this.isJsonPointer(dataPointer)) {
            console.error("toSchemaPointer error: Invalid JSON Pointer: " + dataPointer);
        }
        if (typeof schema !== 'object') {
            console.error("toSchemaPointer error: Invalid JSON Schema: " + schema);
        }
        return null;
    };
    JsonPointer.toDataPointer = function (schemaPointer, schema, errors) {
        if (errors === void 0) { errors = false; }
        if (this.isJsonPointer(schemaPointer) && typeof schema === 'object' &&
            this.has(schema, schemaPointer)) {
            var pointerArray = this.parse(schemaPointer);
            if (!pointerArray.length) {
                return '';
            }
            var dataPointer = '';
            var firstKey = pointerArray.shift();
            if (firstKey === 'properties' ||
                (firstKey === 'items' && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schema.items))) {
                var secondKey = pointerArray.shift();
                var pointerSuffix = this.toDataPointer(pointerArray, schema[firstKey][secondKey]);
                return pointerSuffix === null ? null : '/' + secondKey + pointerSuffix;
            }
            else if (firstKey === 'additionalItems' ||
                (firstKey === 'items' && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema.items))) {
                var pointerSuffix = this.toDataPointer(pointerArray, schema[firstKey]);
                return pointerSuffix === null ? null : '/-' + pointerSuffix;
            }
            else if (['allOf', 'anyOf', 'oneOf'].includes(firstKey)) {
                var secondKey = pointerArray.shift();
                return this.toDataPointer(pointerArray, schema[firstKey][secondKey]);
            }
            else if (firstKey === 'not') {
                return this.toDataPointer(pointerArray, schema[firstKey]);
            }
            else if (['contains', 'definitions', 'dependencies', 'additionalItems',
                'additionalProperties', 'patternProperties', 'propertyNames'].includes(firstKey)) {
                if (errors) {
                    console.error("toDataPointer error: Ambiguous location");
                }
            }
            return '';
        }
        if (errors) {
            if (!this.isJsonPointer(schemaPointer)) {
                console.error("toDataPointer error: Invalid JSON Pointer: " + schemaPointer);
            }
            if (typeof schema !== 'object') {
                console.error("toDataPointer error: Invalid JSON Schema: " + schema);
            }
            if (typeof schema !== 'object') {
                console.error("toDataPointer error: Pointer " + schemaPointer + " invalid for Schema: " + schema);
            }
        }
        return null;
    };
    JsonPointer.parseObjectPath = function (path) {
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(path)) {
            return path;
        }
        if (this.isJsonPointer(path)) {
            return this.parse(path);
        }
        if (typeof path === 'string') {
            var index = 0;
            var parts = [];
            while (index < path.length) {
                var nextDot = path.indexOf('.', index);
                var nextOB = path.indexOf('[', index);
                if (nextDot === -1 && nextOB === -1) {
                    parts.push(path.slice(index));
                    index = path.length;
                }
                else if (nextDot !== -1 && (nextDot < nextOB || nextOB === -1)) {
                    parts.push(path.slice(index, nextDot));
                    index = nextDot + 1;
                }
                else {
                    if (nextOB > index) {
                        parts.push(path.slice(index, nextOB));
                        index = nextOB;
                    }
                    var quote = path.charAt(nextOB + 1);
                    if (quote === '"' || quote === '\'') {
                        var nextCB = path.indexOf(quote + ']', nextOB);
                        while (nextCB !== -1 && path.charAt(nextCB - 1) === '\\') {
                            nextCB = path.indexOf(quote + ']', nextCB + 2);
                        }
                        if (nextCB === -1) {
                            nextCB = path.length;
                        }
                        parts.push(path.slice(index + 2, nextCB)
                            .replace(new RegExp('\\' + quote, 'g'), quote));
                        index = nextCB + 2;
                    }
                    else {
                        var nextCB = path.indexOf(']', nextOB);
                        if (nextCB === -1) {
                            nextCB = path.length;
                        }
                        parts.push(path.slice(index + 1, nextCB));
                        index = nextCB + 1;
                    }
                    if (path.charAt(index) === '.') {
                        index++;
                    }
                }
            }
            return parts;
        }
        console.error('parseObjectPath error: Input object path must be a string.');
    };
    JsonPointer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JsonPointer);
    return JsonPointer;
}());



/***/ }),

/***/ "./src/lib/src/shared/layout.functions.ts":
/*!************************************************!*\
  !*** ./src/lib/src/shared/layout.functions.ts ***!
  \************************************************/
/*! exports provided: buildLayout, buildLayoutFromSchema, mapLayout, getLayoutNode, buildTitleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildLayout", function() { return buildLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildLayoutFromSchema", function() { return buildLayoutFromSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapLayout", function() { return mapLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayoutNode", function() { return getLayoutNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTitleMap", function() { return buildTitleMap; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validator_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator.functions */ "./src/lib/src/shared/validator.functions.ts");
/* harmony import */ var _utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.functions */ "./src/lib/src/shared/utility.functions.ts");
/* harmony import */ var _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsonpointer.functions */ "./src/lib/src/shared/jsonpointer.functions.ts");
/* harmony import */ var _json_schema_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json-schema.functions */ "./src/lib/src/shared/json-schema.functions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





function buildLayout(jsf, widgetLibrary) {
    var hasSubmitButton = !_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].get(jsf, '/formOptions/addSubmit');
    var formLayout = mapLayout(jsf.layout, function (layoutItem, index, layoutPointer) {
        var currentIndex = index;
        var newNode = {
            _id: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniqueId"])(),
            options: {},
        };
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(layoutItem)) {
            Object.assign(newNode, layoutItem);
            Object.keys(newNode)
                .filter(function (option) { return !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["inArray"])(option, [
                '_id', '$ref', 'arrayItem', 'arrayItemType', 'dataPointer', 'dataType',
                'items', 'key', 'name', 'options', 'recursiveReference', 'type', 'widget'
            ]); })
                .forEach(function (option) {
                newNode.options[option] = newNode[option];
                delete newNode[option];
            });
            if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode, 'type') && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isString"])(newNode.widget)) {
                newNode.type = newNode.widget;
                delete newNode.widget;
            }
            if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode.options, 'title')) {
                if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode.options, 'legend')) {
                    newNode.options.title = newNode.options.legend;
                    delete newNode.options.legend;
                }
            }
            if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode.options, 'validationMessages')) {
                if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode.options, 'errorMessages')) {
                    newNode.options.validationMessages = newNode.options.errorMessages;
                    delete newNode.options.errorMessages;
                }
                else if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode.options, 'validationMessage')) {
                    if (typeof newNode.options.validationMessage === 'string') {
                        newNode.options.validationMessages = newNode.options.validationMessage;
                    }
                    else {
                        newNode.options.validationMessages = {};
                        Object.keys(newNode.options.validationMessage).forEach(function (key) {
                            var code = key + '';
                            var newKey = code === '0' ? 'type' :
                                code === '1' ? 'enum' :
                                    code === '100' ? 'multipleOf' :
                                        code === '101' ? 'minimum' :
                                            code === '102' ? 'exclusiveMinimum' :
                                                code === '103' ? 'maximum' :
                                                    code === '104' ? 'exclusiveMaximum' :
                                                        code === '200' ? 'minLength' :
                                                            code === '201' ? 'maxLength' :
                                                                code === '202' ? 'pattern' :
                                                                    code === '300' ? 'minProperties' :
                                                                        code === '301' ? 'maxProperties' :
                                                                            code === '302' ? 'required' :
                                                                                code === '304' ? 'dependencies' :
                                                                                    code === '400' ? 'minItems' :
                                                                                        code === '401' ? 'maxItems' :
                                                                                            code === '402' ? 'uniqueItems' :
                                                                                                code === '500' ? 'format' : code + '';
                            newNode.options.validationMessages[newKey] = newNode.options.validationMessage[key];
                        });
                    }
                    delete newNode.options.validationMessage;
                }
            }
        }
        else if (_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].isJsonPointer(layoutItem)) {
            newNode.dataPointer = layoutItem;
        }
        else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isString"])(layoutItem)) {
            newNode.key = layoutItem;
        }
        else {
            console.error('buildLayout error: Form layout element not recognized:');
            console.error(layoutItem);
            return null;
        }
        var nodeSchema = null;
        if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode, 'dataPointer')) {
            if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode, 'key')) {
                newNode.dataPointer = newNode.key === '*' ? newNode.key :
                    _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].compile(_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].parseObjectPath(newNode.key), '-');
                delete newNode.key;
            }
            else if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode, 'type') && newNode.type.slice(-5) === 'array') {
                var findDataPointer_1 = function (items) {
                    if (items === null || typeof items !== 'object') {
                        return;
                    }
                    if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(items, 'dataPointer')) {
                        return items.dataPointer;
                    }
                    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(items.items)) {
                        for (var _i = 0, _a = items.items; _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(item, 'dataPointer') && item.dataPointer.indexOf('/-') !== -1) {
                                return item.dataPointer;
                            }
                            if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(item, 'items')) {
                                var searchItem = findDataPointer_1(item);
                                if (searchItem) {
                                    return searchItem;
                                }
                            }
                        }
                    }
                };
                var childDataPointer = findDataPointer_1(newNode);
                if (childDataPointer) {
                    newNode.dataPointer =
                        childDataPointer.slice(0, childDataPointer.lastIndexOf('/-'));
                }
            }
        }
        if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode, 'dataPointer')) {
            if (newNode.dataPointer === '*') {
                return buildLayoutFromSchema(jsf, widgetLibrary, jsf.formValues);
            }
            var nodeValue = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].get(jsf.formValues, newNode.dataPointer.replace(/\/-/g, '/1'));
            newNode.dataPointer =
                _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].toGenericPointer(newNode.dataPointer, jsf.arrayMap);
            var LastKey = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].toKey(newNode.dataPointer);
            if (!newNode.name && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isString"])(LastKey) && LastKey !== '-') {
                newNode.name = LastKey;
            }
            var shortDataPointer = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["removeRecursiveReferences"])(newNode.dataPointer, jsf.dataRecursiveRefMap, jsf.arrayMap);
            var recursive_1 = !shortDataPointer.length ||
                shortDataPointer !== newNode.dataPointer;
            var schemaPointer = void 0;
            if (!jsf.dataMap.has(shortDataPointer)) {
                jsf.dataMap.set(shortDataPointer, new Map());
            }
            var nodeDataMap = jsf.dataMap.get(shortDataPointer);
            if (nodeDataMap.has('schemaPointer')) {
                schemaPointer = nodeDataMap.get('schemaPointer');
            }
            else {
                schemaPointer = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].toSchemaPointer(shortDataPointer, jsf.schema);
                nodeDataMap.set('schemaPointer', schemaPointer);
            }
            nodeDataMap.set('disabled', !!newNode.options.disabled);
            nodeSchema = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].get(jsf.schema, schemaPointer);
            if (nodeSchema) {
                if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode, 'type')) {
                    newNode.type = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["getInputType"])(nodeSchema, newNode);
                }
                else if (!widgetLibrary.hasWidget(newNode.type)) {
                    var oldWidgetType = newNode.type;
                    newNode.type = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["getInputType"])(nodeSchema, newNode);
                    console.error("error: widget type \"" + oldWidgetType + "\" " +
                        ("not found in library. Replacing with \"" + newNode.type + "\"."));
                }
                else {
                    newNode.type = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["checkInlineType"])(newNode.type, nodeSchema, newNode);
                }
                if (nodeSchema.type === 'object' && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(nodeSchema.required)) {
                    nodeDataMap.set('required', nodeSchema.required);
                }
                newNode.dataType =
                    nodeSchema.type || (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(nodeSchema, '$ref') ? '$ref' : null);
                Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["updateInputOptions"])(newNode, nodeSchema, jsf);
                if (newNode.type === 'checkboxes' && Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(nodeSchema, 'items')) {
                    Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["updateInputOptions"])(newNode, nodeSchema.items, jsf);
                }
                else if (newNode.dataType === 'array') {
                    newNode.options.maxItems = Math.min(nodeSchema.maxItems || 1000, newNode.options.maxItems || 1000);
                    newNode.options.minItems = Math.max(nodeSchema.minItems || 0, newNode.options.minItems || 0);
                    newNode.options.listItems = Math.max(newNode.options.listItems || 0, Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(nodeValue) ? nodeValue.length : 0);
                    newNode.options.tupleItems =
                        Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(nodeSchema.items) ? nodeSchema.items.length : 0;
                    if (newNode.options.maxItems < newNode.options.tupleItems) {
                        newNode.options.tupleItems = newNode.options.maxItems;
                        newNode.options.listItems = 0;
                    }
                    else if (newNode.options.maxItems <
                        newNode.options.tupleItems + newNode.options.listItems) {
                        newNode.options.listItems =
                            newNode.options.maxItems - newNode.options.tupleItems;
                    }
                    else if (newNode.options.minItems >
                        newNode.options.tupleItems + newNode.options.listItems) {
                        newNode.options.listItems =
                            newNode.options.minItems - newNode.options.tupleItems;
                    }
                    if (!nodeDataMap.has('maxItems')) {
                        nodeDataMap.set('maxItems', newNode.options.maxItems);
                        nodeDataMap.set('minItems', newNode.options.minItems);
                        nodeDataMap.set('tupleItems', newNode.options.tupleItems);
                        nodeDataMap.set('listItems', newNode.options.listItems);
                    }
                    if (!jsf.arrayMap.has(shortDataPointer)) {
                        jsf.arrayMap.set(shortDataPointer, newNode.options.tupleItems);
                    }
                }
                if (Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["isInputRequired"])(jsf.schema, schemaPointer)) {
                    newNode.options.required = true;
                    jsf.fieldsRequired = true;
                }
            }
            else {
                Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["updateInputOptions"])(newNode, {}, jsf);
            }
            if (!newNode.options.title && !/^\d+$/.test(newNode.name)) {
                newNode.options.title = Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["fixTitle"])(newNode.name);
            }
            if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode.options, 'copyValueTo')) {
                if (typeof newNode.options.copyValueTo === 'string') {
                    newNode.options.copyValueTo = [newNode.options.copyValueTo];
                }
                if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(newNode.options.copyValueTo)) {
                    newNode.options.copyValueTo = newNode.options.copyValueTo.map(function (item) {
                        return _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].compile(_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].parseObjectPath(item), '-');
                    });
                }
            }
            newNode.widget = widgetLibrary.getWidget(newNode.type);
            nodeDataMap.set('inputType', newNode.type);
            nodeDataMap.set('widget', newNode.widget);
            if (newNode.dataType === 'array' &&
                (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode, 'items') || Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode, 'additionalItems'))) {
                var itemRefPointer_1 = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["removeRecursiveReferences"])(newNode.dataPointer + '/-', jsf.dataRecursiveRefMap, jsf.arrayMap);
                if (!jsf.dataMap.has(itemRefPointer_1)) {
                    jsf.dataMap.set(itemRefPointer_1, new Map());
                }
                jsf.dataMap.get(itemRefPointer_1).set('inputType', 'section');
                if (newNode.items.length > 1) {
                    var arrayItemGroup = [];
                    var arrayItemGroupTemplate = [];
                    var newIndex = 0;
                    for (var i = newNode.items.length - 1; i >= 0; i--) {
                        var subItem = newNode.items[i];
                        if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(subItem, 'dataPointer') &&
                            subItem.dataPointer.slice(0, itemRefPointer_1.length) === itemRefPointer_1) {
                            var arrayItem = newNode.items.splice(i, 1)[0];
                            arrayItem.dataPointer = newNode.dataPointer + '/-' +
                                arrayItem.dataPointer.slice(itemRefPointer_1.length);
                            arrayItemGroup.unshift(arrayItem);
                            newIndex++;
                        }
                        else {
                            subItem.arrayItem = true;
                            subItem.arrayItemType = 'list';
                            subItem.removable = newNode.options.removable !== false;
                        }
                    }
                    if (arrayItemGroup.length) {
                        newNode.items.push({
                            _id: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniqueId"])(),
                            arrayItem: true,
                            arrayItemType: newNode.options.tupleItems > newNode.items.length ?
                                'tuple' : 'list',
                            items: arrayItemGroup,
                            options: { removable: newNode.options.removable !== false, },
                            dataPointer: newNode.dataPointer + '/-',
                            type: 'section',
                            widget: widgetLibrary.getWidget('section'),
                        });
                    }
                }
                else {
                    newNode.items[0].arrayItem = true;
                    if (!newNode.items[0].dataPointer) {
                        newNode.items[0].dataPointer =
                            _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].toGenericPointer(itemRefPointer_1, jsf.arrayMap);
                    }
                    if (!_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].has(newNode, '/items/0/options/removable')) {
                        newNode.items[0].options.removable = true;
                    }
                    if (newNode.options.orderable === false) {
                        newNode.items[0].options.orderable = false;
                    }
                    newNode.items[0].arrayItemType =
                        newNode.options.tupleItems ? 'tuple' : 'list';
                }
                if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(newNode.items)) {
                    var arrayListItems = newNode.items.filter(function (item) { return item.type !== '$ref'; }).length -
                        newNode.options.tupleItems;
                    if (arrayListItems > newNode.options.listItems) {
                        newNode.options.listItems = arrayListItems;
                        nodeDataMap.set('listItems', arrayListItems);
                    }
                }
                if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(jsf.layoutRefLibrary, itemRefPointer_1)) {
                    jsf.layoutRefLibrary[itemRefPointer_1] =
                        Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(newNode.items[newNode.items.length - 1]);
                    if (recursive_1) {
                        jsf.layoutRefLibrary[itemRefPointer_1].recursiveReference = true;
                    }
                    Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["forEach"])(jsf.layoutRefLibrary[itemRefPointer_1], function (item, key) {
                        if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(item, '_id')) {
                            item._id = null;
                        }
                        if (recursive_1) {
                            if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(item, 'dataPointer')) {
                                item.dataPointer = item.dataPointer.slice(itemRefPointer_1.length);
                            }
                        }
                    }, 'top-down');
                }
                if (!newNode.recursiveReference || newNode.options.required) {
                    var arrayLength = Math.min(Math.max(newNode.options.tupleItems + newNode.options.listItems, Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(nodeValue) ? nodeValue.length : 0), newNode.options.maxItems);
                    for (var i = newNode.items.length; i < arrayLength; i++) {
                        newNode.items.push(getLayoutNode({
                            $ref: itemRefPointer_1,
                            dataPointer: newNode.dataPointer,
                            recursiveReference: newNode.recursiveReference,
                        }, jsf, widgetLibrary));
                    }
                }
                if (newNode.options.addable !== false &&
                    newNode.options.minItems < newNode.options.maxItems &&
                    (newNode.items[newNode.items.length - 1] || {}).type !== '$ref') {
                    var buttonText = 'Add';
                    if (newNode.options.title) {
                        if (/^add\b/i.test(newNode.options.title)) {
                            buttonText = newNode.options.title;
                        }
                        else {
                            buttonText += ' ' + newNode.options.title;
                        }
                    }
                    else if (newNode.name && !/^\d+$/.test(newNode.name)) {
                        if (/^add\b/i.test(newNode.name)) {
                            buttonText += ' ' + Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["fixTitle"])(newNode.name);
                        }
                        else {
                            buttonText = Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["fixTitle"])(newNode.name);
                        }
                    }
                    else {
                        var parentSchema = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["getFromSchema"])(jsf.schema, newNode.dataPointer, 'parentSchema');
                        if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(parentSchema, 'title')) {
                            buttonText += ' to ' + parentSchema.title;
                        }
                        else {
                            var pointerArray = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].parse(newNode.dataPointer);
                            buttonText += ' to ' + Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["fixTitle"])(pointerArray[pointerArray.length - 2]);
                        }
                    }
                    newNode.items.push({
                        _id: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniqueId"])(),
                        arrayItem: true,
                        arrayItemType: 'list',
                        dataPointer: newNode.dataPointer + '/-',
                        options: {
                            listItems: newNode.options.listItems,
                            maxItems: newNode.options.maxItems,
                            minItems: newNode.options.minItems,
                            removable: false,
                            title: buttonText,
                            tupleItems: newNode.options.tupleItems,
                        },
                        recursiveReference: recursive_1,
                        type: '$ref',
                        widget: widgetLibrary.getWidget('$ref'),
                        $ref: itemRefPointer_1,
                    });
                    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isString"])(_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].get(newNode, '/style/add'))) {
                        newNode.items[newNode.items.length - 1].options.fieldStyle =
                            newNode.style.add;
                        delete newNode.style.add;
                        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(newNode.style)) {
                            delete newNode.style;
                        }
                    }
                }
            }
            else {
                newNode.arrayItem = false;
            }
        }
        else if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode, 'type') || Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode, 'items')) {
            var parentType = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].get(jsf.layout, layoutPointer, 0, -2).type;
            if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode, 'type')) {
                newNode.type =
                    Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["inArray"])(parentType, ['tabs', 'tabarray']) ? 'tab' : 'array';
            }
            newNode.arrayItem = parentType === 'array';
            newNode.widget = widgetLibrary.getWidget(newNode.type);
            Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["updateInputOptions"])(newNode, {}, jsf);
        }
        if (newNode.type === 'submit') {
            hasSubmitButton = true;
        }
        return newNode;
    });
    if (jsf.hasRootReference) {
        var fullLayout = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(formLayout);
        if (fullLayout[fullLayout.length - 1].type === 'submit') {
            fullLayout.pop();
        }
        jsf.layoutRefLibrary[''] = {
            _id: null,
            dataPointer: '',
            dataType: 'object',
            items: fullLayout,
            name: '',
            options: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(jsf.formOptions.defautWidgetOptions),
            recursiveReference: true,
            required: false,
            type: 'section',
            widget: widgetLibrary.getWidget('section'),
        };
    }
    if (!hasSubmitButton) {
        formLayout.push({
            _id: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniqueId"])(),
            options: { title: 'Submit' },
            type: 'submit',
            widget: widgetLibrary.getWidget('submit'),
        });
    }
    return formLayout;
}
function buildLayoutFromSchema(jsf, widgetLibrary, nodeValue, schemaPointer, dataPointer, arrayItem, arrayItemType, removable, forRefLibrary, dataPointerPrefix) {
    if (nodeValue === void 0) { nodeValue = null; }
    if (schemaPointer === void 0) { schemaPointer = ''; }
    if (dataPointer === void 0) { dataPointer = ''; }
    if (arrayItem === void 0) { arrayItem = false; }
    if (arrayItemType === void 0) { arrayItemType = null; }
    if (removable === void 0) { removable = null; }
    if (forRefLibrary === void 0) { forRefLibrary = false; }
    if (dataPointerPrefix === void 0) { dataPointerPrefix = ''; }
    var schema = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].get(jsf.schema, schemaPointer);
    if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, 'type') && !Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, '$ref') &&
        !Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, 'x-schema-form')) {
        return null;
    }
    var newNodeType = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["getInputType"])(schema);
    if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(nodeValue) && (jsf.formOptions.setSchemaDefaults === true ||
        (jsf.formOptions.setSchemaDefaults === 'auto' && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(jsf.formValues)))) {
        nodeValue = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].get(jsf.schema, schemaPointer + '/default');
    }
    var newNode = {
        _id: forRefLibrary ? null : Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniqueId"])(),
        arrayItem: arrayItem,
        dataPointer: _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].toGenericPointer(dataPointer, jsf.arrayMap),
        dataType: schema.type || (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, '$ref') ? '$ref' : null),
        options: {},
        required: Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["isInputRequired"])(jsf.schema, schemaPointer),
        type: newNodeType,
        widget: widgetLibrary.getWidget(newNodeType),
    };
    var lastDataKey = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].toKey(newNode.dataPointer);
    if (lastDataKey !== '-') {
        newNode.name = lastDataKey;
    }
    if (newNode.arrayItem) {
        newNode.arrayItemType = arrayItemType;
        newNode.options.removable = removable !== false;
    }
    var shortDataPointer = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["removeRecursiveReferences"])(dataPointerPrefix + dataPointer, jsf.dataRecursiveRefMap, jsf.arrayMap);
    var recursive = !shortDataPointer.length ||
        shortDataPointer !== dataPointerPrefix + dataPointer;
    if (!jsf.dataMap.has(shortDataPointer)) {
        jsf.dataMap.set(shortDataPointer, new Map());
    }
    var nodeDataMap = jsf.dataMap.get(shortDataPointer);
    if (!nodeDataMap.has('inputType')) {
        nodeDataMap.set('schemaPointer', schemaPointer);
        nodeDataMap.set('inputType', newNode.type);
        nodeDataMap.set('widget', newNode.widget);
        nodeDataMap.set('disabled', !!newNode.options.disabled);
    }
    Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["updateInputOptions"])(newNode, schema, jsf);
    if (!newNode.options.title && newNode.name && !/^\d+$/.test(newNode.name)) {
        newNode.options.title = Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["fixTitle"])(newNode.name);
    }
    if (newNode.dataType === 'object') {
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schema.required) && !nodeDataMap.has('required')) {
            nodeDataMap.set('required', schema.required);
        }
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema.properties)) {
            var newSection_1 = [];
            var propertyKeys_1 = schema['ui:order'] || Object.keys(schema.properties);
            if (propertyKeys_1.includes('*') && !Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema.properties, '*')) {
                var unnamedKeys = Object.keys(schema.properties)
                    .filter(function (key) { return !propertyKeys_1.includes(key); });
                for (var i = propertyKeys_1.length - 1; i >= 0; i--) {
                    if (propertyKeys_1[i] === '*') {
                        propertyKeys_1.splice.apply(propertyKeys_1, [i, 1].concat(unnamedKeys));
                    }
                }
            }
            propertyKeys_1
                .filter(function (key) { return Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema.properties, key) ||
                Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema, 'additionalProperties'); })
                .forEach(function (key) {
                var keySchemaPointer = Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schema.properties, key) ?
                    '/properties/' + key : '/additionalProperties';
                var innerItem = buildLayoutFromSchema(jsf, widgetLibrary, Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(nodeValue) ? nodeValue[key] : null, schemaPointer + keySchemaPointer, dataPointer + '/' + key, false, null, null, forRefLibrary, dataPointerPrefix);
                if (innerItem) {
                    if (Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["isInputRequired"])(schema, '/' + key)) {
                        innerItem.options.required = true;
                        jsf.fieldsRequired = true;
                    }
                    newSection_1.push(innerItem);
                }
            });
            if (dataPointer === '' && !forRefLibrary) {
                newNode = newSection_1;
            }
            else {
                newNode.items = newSection_1;
            }
        }
    }
    else if (newNode.dataType === 'array') {
        newNode.items = [];
        var templateArray = [];
        newNode.options.maxItems = Math.min(schema.maxItems || 1000, newNode.options.maxItems || 1000);
        newNode.options.minItems = Math.max(schema.minItems || 0, newNode.options.minItems || 0);
        if (!newNode.options.minItems && Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["isInputRequired"])(jsf.schema, schemaPointer)) {
            newNode.options.minItems = 1;
        }
        if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(newNode.options, 'listItems')) {
            newNode.options.listItems = 1;
        }
        newNode.options.tupleItems = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schema.items) ? schema.items.length : 0;
        if (newNode.options.maxItems <= newNode.options.tupleItems) {
            newNode.options.tupleItems = newNode.options.maxItems;
            newNode.options.listItems = 0;
        }
        else if (newNode.options.maxItems <
            newNode.options.tupleItems + newNode.options.listItems) {
            newNode.options.listItems = newNode.options.maxItems - newNode.options.tupleItems;
        }
        else if (newNode.options.minItems >
            newNode.options.tupleItems + newNode.options.listItems) {
            newNode.options.listItems = newNode.options.minItems - newNode.options.tupleItems;
        }
        if (!nodeDataMap.has('maxItems')) {
            nodeDataMap.set('maxItems', newNode.options.maxItems);
            nodeDataMap.set('minItems', newNode.options.minItems);
            nodeDataMap.set('tupleItems', newNode.options.tupleItems);
            nodeDataMap.set('listItems', newNode.options.listItems);
        }
        if (!jsf.arrayMap.has(shortDataPointer)) {
            jsf.arrayMap.set(shortDataPointer, newNode.options.tupleItems);
        }
        removable = newNode.options.removable !== false;
        var additionalItemsSchemaPointer = null;
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schema.items)) {
            newNode.items = [];
            for (var i = 0; i < newNode.options.tupleItems; i++) {
                var newItem = void 0;
                var itemRefPointer = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["removeRecursiveReferences"])(shortDataPointer + '/' + i, jsf.dataRecursiveRefMap, jsf.arrayMap);
                var itemRecursive = !itemRefPointer.length ||
                    itemRefPointer !== shortDataPointer + '/' + i;
                if (removable && i >= newNode.options.minItems) {
                    if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(jsf.layoutRefLibrary, itemRefPointer)) {
                        jsf.layoutRefLibrary[itemRefPointer] = null;
                        jsf.layoutRefLibrary[itemRefPointer] = buildLayoutFromSchema(jsf, widgetLibrary, Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(nodeValue) ? nodeValue[i] : null, schemaPointer + '/items/' + i, itemRecursive ? '' : dataPointer + '/' + i, true, 'tuple', true, true, itemRecursive ? dataPointer + '/' + i : '');
                        if (itemRecursive) {
                            jsf.layoutRefLibrary[itemRefPointer].recursiveReference = true;
                        }
                    }
                    newItem = getLayoutNode({
                        $ref: itemRefPointer,
                        dataPointer: dataPointer + '/' + i,
                        recursiveReference: itemRecursive,
                    }, jsf, widgetLibrary, Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(nodeValue) ? nodeValue[i] : null);
                }
                else {
                    newItem = buildLayoutFromSchema(jsf, widgetLibrary, Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(nodeValue) ? nodeValue[i] : null, schemaPointer + '/items/' + i, dataPointer + '/' + i, true, 'tuple', false, forRefLibrary, dataPointerPrefix);
                }
                if (newItem) {
                    newNode.items.push(newItem);
                }
            }
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema.additionalItems)) {
                additionalItemsSchemaPointer = schemaPointer + '/additionalItems';
            }
        }
        else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema.items)) {
            additionalItemsSchemaPointer = schemaPointer + '/items';
        }
        if (additionalItemsSchemaPointer) {
            var itemRefPointer = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["removeRecursiveReferences"])(shortDataPointer + '/-', jsf.dataRecursiveRefMap, jsf.arrayMap);
            var itemRecursive = !itemRefPointer.length ||
                itemRefPointer !== shortDataPointer + '/-';
            var itemSchemaPointer = Object(_json_schema_functions__WEBPACK_IMPORTED_MODULE_4__["removeRecursiveReferences"])(additionalItemsSchemaPointer, jsf.schemaRecursiveRefMap, jsf.arrayMap);
            if (itemRefPointer.length && !Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(jsf.layoutRefLibrary, itemRefPointer)) {
                jsf.layoutRefLibrary[itemRefPointer] = null;
                jsf.layoutRefLibrary[itemRefPointer] = buildLayoutFromSchema(jsf, widgetLibrary, null, itemSchemaPointer, itemRecursive ? '' : dataPointer + '/-', true, 'list', removable, true, itemRecursive ? dataPointer + '/-' : '');
                if (itemRecursive) {
                    jsf.layoutRefLibrary[itemRefPointer].recursiveReference = true;
                }
            }
            if (!itemRecursive || newNode.options.required) {
                var arrayLength = Math.min(Math.max(itemRecursive ? 0 :
                    newNode.options.tupleItems + newNode.options.listItems, Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(nodeValue) ? nodeValue.length : 0), newNode.options.maxItems);
                if (newNode.items.length < arrayLength) {
                    for (var i = newNode.items.length; i < arrayLength; i++) {
                        newNode.items.push(getLayoutNode({
                            $ref: itemRefPointer,
                            dataPointer: dataPointer + '/-',
                            recursiveReference: itemRecursive,
                        }, jsf, widgetLibrary, Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(nodeValue) ? nodeValue[i] : null));
                    }
                }
            }
            if (newNode.options.addable !== false &&
                newNode.options.minItems < newNode.options.maxItems &&
                (newNode.items[newNode.items.length - 1] || {}).type !== '$ref') {
                var buttonText = ((jsf.layoutRefLibrary[itemRefPointer] || {}).options || {}).title;
                var prefix = buttonText ? 'Add ' : 'Add to ';
                if (!buttonText) {
                    buttonText = schema.title || Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["fixTitle"])(_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].toKey(dataPointer));
                }
                if (!/^add\b/i.test(buttonText)) {
                    buttonText = prefix + buttonText;
                }
                newNode.items.push({
                    _id: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniqueId"])(),
                    arrayItem: true,
                    arrayItemType: 'list',
                    dataPointer: newNode.dataPointer + '/-',
                    options: {
                        listItems: newNode.options.listItems,
                        maxItems: newNode.options.maxItems,
                        minItems: newNode.options.minItems,
                        removable: false,
                        title: buttonText,
                        tupleItems: newNode.options.tupleItems,
                    },
                    recursiveReference: itemRecursive,
                    type: '$ref',
                    widget: widgetLibrary.getWidget('$ref'),
                    $ref: itemRefPointer,
                });
            }
        }
    }
    else if (newNode.dataType === '$ref') {
        var schemaRef = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].compile(schema.$ref);
        var dataRef = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].toDataPointer(schemaRef, jsf.schema);
        var buttonText = '';
        if (newNode.options.add) {
            buttonText = newNode.options.add;
        }
        else if (newNode.name && !/^\d+$/.test(newNode.name)) {
            buttonText =
                (/^add\b/i.test(newNode.name) ? '' : 'Add ') + Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["fixTitle"])(newNode.name);
        }
        else {
            var parentSchema = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].get(jsf.schema, schemaPointer, 0, -1);
            if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(parentSchema, 'title')) {
                buttonText = 'Add to ' + parentSchema.title;
            }
            else {
                var pointerArray = _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].parse(newNode.dataPointer);
                buttonText = 'Add to ' + Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["fixTitle"])(pointerArray[pointerArray.length - 2]);
            }
        }
        Object.assign(newNode, {
            recursiveReference: true,
            widget: widgetLibrary.getWidget('$ref'),
            $ref: dataRef,
        });
        Object.assign(newNode.options, {
            removable: false,
            title: buttonText,
        });
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(_jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].get(jsf.schema, schemaPointer, 0, -1).maxItems)) {
            newNode.options.maxItems =
                _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].get(jsf.schema, schemaPointer, 0, -1).maxItems;
        }
        if (dataRef.length) {
            if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(jsf.layoutRefLibrary, dataRef)) {
                jsf.layoutRefLibrary[dataRef] = null;
                var newLayout = buildLayoutFromSchema(jsf, widgetLibrary, null, schemaRef, '', newNode.arrayItem, newNode.arrayItemType, true, true, dataPointer);
                if (newLayout) {
                    newLayout.recursiveReference = true;
                    jsf.layoutRefLibrary[dataRef] = newLayout;
                }
                else {
                    delete jsf.layoutRefLibrary[dataRef];
                }
            }
            else if (!jsf.layoutRefLibrary[dataRef].recursiveReference) {
                jsf.layoutRefLibrary[dataRef].recursiveReference = true;
            }
        }
    }
    return newNode;
}
function mapLayout(layout, fn, layoutPointer, rootLayout) {
    if (layoutPointer === void 0) { layoutPointer = ''; }
    if (rootLayout === void 0) { rootLayout = layout; }
    var indexPad = 0;
    var newLayout = [];
    Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["forEach"])(layout, function (item, index) {
        var realIndex = +index + indexPad;
        var newLayoutPointer = layoutPointer + '/' + realIndex;
        var newNode = Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["copy"])(item);
        var itemsArray = [];
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(item)) {
            if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(item, 'tabs')) {
                item.items = item.tabs;
                delete item.tabs;
            }
            if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(item, 'items')) {
                itemsArray = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(item.items) ? item.items : [item.items];
            }
        }
        if (itemsArray.length) {
            newNode.items = mapLayout(itemsArray, fn, newLayoutPointer + '/items', rootLayout);
        }
        newNode = fn(newNode, realIndex, newLayoutPointer, rootLayout);
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(newNode)) {
            indexPad--;
        }
        else {
            if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(newNode)) {
                indexPad += newNode.length - 1;
            }
            newLayout = newLayout.concat(newNode);
        }
    });
    return newLayout;
}
function getLayoutNode(refNode, jsf, widgetLibrary, nodeValue) {
    if (widgetLibrary === void 0) { widgetLibrary = null; }
    if (nodeValue === void 0) { nodeValue = null; }
    if (refNode.recursiveReference && widgetLibrary) {
        var newLayoutNode = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(refNode);
        if (!newLayoutNode.options) {
            newLayoutNode.options = {};
        }
        Object.assign(newLayoutNode, {
            recursiveReference: true,
            widget: widgetLibrary.getWidget('$ref'),
        });
        Object.assign(newLayoutNode.options, {
            removable: false,
            title: 'Add ' + newLayoutNode.$ref,
        });
        return newLayoutNode;
    }
    else {
        var newLayoutNode = jsf.layoutRefLibrary[refNode.$ref];
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isDefined"])(nodeValue)) {
            newLayoutNode = buildLayoutFromSchema(jsf, widgetLibrary, nodeValue, _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].toSchemaPointer(refNode.$ref, jsf.schema), refNode.$ref, newLayoutNode.arrayItem, newLayoutNode.arrayItemType, newLayoutNode.options.removable, false);
        }
        else {
            newLayoutNode = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(newLayoutNode);
            _jsonpointer_functions__WEBPACK_IMPORTED_MODULE_3__["JsonPointer"].forEachDeep(newLayoutNode, function (subNode, pointer) {
                if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(subNode, '_id')) {
                    subNode._id = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniqueId"])();
                }
                if (refNode.recursiveReference && Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(subNode, 'dataPointer')) {
                    subNode.dataPointer = refNode.dataPointer + subNode.dataPointer;
                }
            });
        }
        return newLayoutNode;
    }
}
function buildTitleMap(titleMap, enumList, fieldRequired, flatList) {
    if (fieldRequired === void 0) { fieldRequired = true; }
    if (flatList === void 0) { flatList = true; }
    var newTitleMap = [];
    var hasEmptyValue = false;
    if (titleMap) {
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(titleMap)) {
            if (enumList) {
                for (var _i = 0, _a = Object.keys(titleMap); _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(titleMap[i])) {
                        var value = titleMap[i].value;
                        if (enumList.includes(value)) {
                            var name_1 = titleMap[i].name;
                            newTitleMap.push({ name: name_1, value: value });
                            if (value === undefined || value === null) {
                                hasEmptyValue = true;
                            }
                        }
                    }
                    else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isString"])(titleMap[i])) {
                        if (i < enumList.length) {
                            var name_2 = titleMap[i];
                            var value = enumList[i];
                            newTitleMap.push({ name: name_2, value: value });
                            if (value === undefined || value === null) {
                                hasEmptyValue = true;
                            }
                        }
                    }
                }
            }
            else {
                newTitleMap = titleMap;
                if (!fieldRequired) {
                    hasEmptyValue = !!newTitleMap
                        .filter(function (i) { return i.value === undefined || i.value === null; })
                        .length;
                }
            }
        }
        else if (enumList) {
            for (var _b = 0, _c = Object.keys(enumList); _b < _c.length; _b++) {
                var i = _c[_b];
                var value = enumList[i];
                if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(titleMap, value)) {
                    var name_3 = titleMap[value];
                    newTitleMap.push({ name: name_3, value: value });
                    if (value === undefined || value === null) {
                        hasEmptyValue = true;
                    }
                }
            }
        }
        else {
            for (var _d = 0, _e = Object.keys(titleMap); _d < _e.length; _d++) {
                var value = _e[_d];
                var name_4 = titleMap[value];
                newTitleMap.push({ name: name_4, value: value });
                if (value === undefined || value === null) {
                    hasEmptyValue = true;
                }
            }
        }
    }
    else if (enumList) {
        for (var _f = 0, _g = Object.keys(enumList); _f < _g.length; _f++) {
            var i = _g[_f];
            var name_5 = enumList[i];
            var value = enumList[i];
            newTitleMap.push({ name: name_5, value: value });
            if (value === undefined || value === null) {
                hasEmptyValue = true;
            }
        }
    }
    else {
        newTitleMap = [{ name: 'True', value: true }, { name: 'False', value: false }];
    }
    if (newTitleMap.some(function (title) { return Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(title, 'group'); })) {
        hasEmptyValue = false;
        if (flatList) {
            newTitleMap = newTitleMap.reduce(function (groupTitleMap, title) {
                if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(title, 'group')) {
                    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(title.items)) {
                        groupTitleMap = groupTitleMap.concat(title.items.map(function (item) {
                            return (__assign({}, item, { name: title.group + ": " + item.name }));
                        }));
                        if (title.items.some(function (item) { return item.value === undefined || item.value === null; })) {
                            hasEmptyValue = true;
                        }
                    }
                    if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(title, 'name') && Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(title, 'value')) {
                        title.name = title.group + ": " + title.name;
                        delete title.group;
                        groupTitleMap.push(title);
                        if (title.value === undefined || title.value === null) {
                            hasEmptyValue = true;
                        }
                    }
                }
                else {
                    groupTitleMap.push(title);
                    if (title.value === undefined || title.value === null) {
                        hasEmptyValue = true;
                    }
                }
                return groupTitleMap;
            }, []);
        }
        else {
            newTitleMap = newTitleMap.reduce(function (groupTitleMap, title) {
                if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(title, 'group')) {
                    if (title.group !== (groupTitleMap[groupTitleMap.length - 1] || {}).group) {
                        groupTitleMap.push({ group: title.group, items: title.items || [] });
                    }
                    if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(title, 'name') && Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(title, 'value')) {
                        groupTitleMap[groupTitleMap.length - 1].items
                            .push({ name: title.name, value: title.value });
                        if (title.value === undefined || title.value === null) {
                            hasEmptyValue = true;
                        }
                    }
                }
                else {
                    groupTitleMap.push(title);
                    if (title.value === undefined || title.value === null) {
                        hasEmptyValue = true;
                    }
                }
                return groupTitleMap;
            }, []);
        }
    }
    if (!fieldRequired && !hasEmptyValue) {
        newTitleMap.unshift({ name: '<em>None</em>', value: null });
    }
    return newTitleMap;
}


/***/ }),

/***/ "./src/lib/src/shared/merge-schemas.function.ts":
/*!******************************************************!*\
  !*** ./src/lib/src/shared/merge-schemas.function.ts ***!
  \******************************************************/
/*! exports provided: mergeSchemas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeSchemas", function() { return mergeSchemas; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _validator_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator.functions */ "./src/lib/src/shared/validator.functions.ts");
/* harmony import */ var _utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.functions */ "./src/lib/src/shared/utility.functions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



function mergeSchemas() {
    var schemas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        schemas[_i] = arguments[_i];
    }
    schemas = schemas.filter(function (schema) { return !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isEmpty"])(schema); });
    if (schemas.some(function (schema) { return !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schema); })) {
        return null;
    }
    var combinedSchema = {};
    for (var _a = 0, schemas_1 = schemas; _a < schemas_1.length; _a++) {
        var schema = schemas_1[_a];
        var _loop_1 = function (key) {
            var combinedValue = combinedSchema[key];
            var schemaValue = schema[key];
            if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(combinedSchema, key) || Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(combinedValue, schemaValue)) {
                combinedSchema[key] = schemaValue;
            }
            else {
                switch (key) {
                    case 'allOf':
                        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(combinedValue) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schemaValue)) {
                            combinedSchema.allOf = mergeSchemas.apply(void 0, combinedValue.concat(schemaValue));
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'additionalItems':
                    case 'additionalProperties':
                    case 'contains':
                    case 'propertyNames':
                        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(combinedValue) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schemaValue)) {
                            combinedSchema[key] = mergeSchemas(combinedValue, schemaValue);
                        }
                        else if (key === 'additionalProperties' &&
                            (combinedValue === false || schemaValue === false)) {
                            combinedSchema.combinedSchema = false;
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'anyOf':
                    case 'oneOf':
                    case 'enum':
                        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(combinedValue) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schemaValue)) {
                            combinedSchema[key] = combinedValue.filter(function (item1) {
                                return schemaValue.findIndex(function (item2) { return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(item1, item2); }) > -1;
                            });
                            if (!combinedSchema[key].length) {
                                return { value: { allOf: schemas.slice() } };
                            }
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'definitions':
                        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(combinedValue) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schemaValue)) {
                            var combinedObject = __assign({}, combinedValue);
                            for (var _i = 0, _a = Object.keys(schemaValue); _i < _a.length; _i++) {
                                var subKey = _a[_i];
                                if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(combinedObject, subKey) ||
                                    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(combinedObject[subKey], schemaValue[subKey])) {
                                    combinedObject[subKey] = schemaValue[subKey];
                                }
                                else {
                                    return { value: { allOf: schemas.slice() } };
                                }
                            }
                            combinedSchema.definitions = combinedObject;
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'dependencies':
                        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(combinedValue) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schemaValue)) {
                            var combinedObject = __assign({}, combinedValue);
                            for (var _b = 0, _c = Object.keys(schemaValue); _b < _c.length; _b++) {
                                var subKey = _c[_b];
                                if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(combinedObject, subKey) ||
                                    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(combinedObject[subKey], schemaValue[subKey])) {
                                    combinedObject[subKey] = schemaValue[subKey];
                                }
                                else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schemaValue[subKey]) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(combinedObject[subKey])) {
                                    combinedObject[subKey] = _utility_functions__WEBPACK_IMPORTED_MODULE_2__["uniqueItems"].apply(void 0, combinedObject[subKey].concat(schemaValue[subKey]));
                                }
                                else if ((Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schemaValue[subKey]) || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schemaValue[subKey])) &&
                                    (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(combinedObject[subKey]) || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(combinedObject[subKey]))) {
                                    var required = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(combinedSchema.required) ?
                                        combinedSchema.required : [];
                                    var combinedDependency = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(combinedObject[subKey]) ?
                                        { required: _utility_functions__WEBPACK_IMPORTED_MODULE_2__["uniqueItems"].apply(void 0, required.concat([combinedObject[subKey]])) } :
                                        combinedObject[subKey];
                                    var schemaDependency = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schemaValue[subKey]) ?
                                        { required: _utility_functions__WEBPACK_IMPORTED_MODULE_2__["uniqueItems"].apply(void 0, required.concat([schemaValue[subKey]])) } :
                                        schemaValue[subKey];
                                    combinedObject[subKey] =
                                        mergeSchemas(combinedDependency, schemaDependency);
                                }
                                else {
                                    return { value: { allOf: schemas.slice() } };
                                }
                            }
                            combinedSchema.dependencies = combinedObject;
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'items':
                        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(combinedValue) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schemaValue)) {
                            combinedSchema.items = combinedValue.filter(function (item1) {
                                return schemaValue.findIndex(function (item2) { return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(item1, item2); }) > -1;
                            });
                            if (!combinedSchema.items.length) {
                                return { value: { allOf: schemas.slice() } };
                            }
                        }
                        else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(combinedValue) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schemaValue)) {
                            combinedSchema.items = mergeSchemas(combinedValue, schemaValue);
                        }
                        else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(combinedValue) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schemaValue)) {
                            combinedSchema.items =
                                combinedValue.map(function (item) { return mergeSchemas(item, schemaValue); });
                        }
                        else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(combinedValue) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schemaValue)) {
                            combinedSchema.items =
                                schemaValue.map(function (item) { return mergeSchemas(item, combinedValue); });
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'multipleOf':
                        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(combinedValue) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(schemaValue)) {
                            var gcd_1 = function (x, y) { return !y ? x : gcd_1(y, x % y); };
                            var lcm = function (x, y) { return (x * y) / gcd_1(x, y); };
                            combinedSchema.multipleOf = lcm(combinedValue, schemaValue);
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'maximum':
                    case 'exclusiveMaximum':
                    case 'maxLength':
                    case 'maxItems':
                    case 'maxProperties':
                        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(combinedValue) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(schemaValue)) {
                            combinedSchema[key] = Math.min(combinedValue, schemaValue);
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'minimum':
                    case 'exclusiveMinimum':
                    case 'minLength':
                    case 'minItems':
                    case 'minProperties':
                        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(combinedValue) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(schemaValue)) {
                            combinedSchema[key] = Math.max(combinedValue, schemaValue);
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'not':
                        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(combinedValue) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schemaValue)) {
                            var notAnyOf = [combinedValue, schemaValue]
                                .reduce(function (notAnyOfArray, notSchema) {
                                return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(notSchema.anyOf) &&
                                    Object.keys(notSchema).length === 1 ? notAnyOfArray.concat(notSchema.anyOf) : notAnyOfArray.concat([notSchema]);
                            }, []);
                            combinedSchema.not = { anyOf: notAnyOf };
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'patternProperties':
                        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(combinedValue) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schemaValue)) {
                            var combinedObject = __assign({}, combinedValue);
                            for (var _d = 0, _e = Object.keys(schemaValue); _d < _e.length; _d++) {
                                var subKey = _e[_d];
                                if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(combinedObject, subKey) ||
                                    Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(combinedObject[subKey], schemaValue[subKey])) {
                                    combinedObject[subKey] = schemaValue[subKey];
                                }
                                else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schemaValue[subKey]) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(combinedObject[subKey])) {
                                    combinedObject[subKey] =
                                        mergeSchemas(combinedObject[subKey], schemaValue[subKey]);
                                }
                                else {
                                    return { value: { allOf: schemas.slice() } };
                                }
                            }
                            combinedSchema.patternProperties = combinedObject;
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'properties':
                        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(combinedValue) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schemaValue)) {
                            var combinedObject_1 = __assign({}, combinedValue);
                            if (Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(schemaValue, 'additionalProperties')) {
                                Object.keys(combinedValue)
                                    .filter(function (combinedKey) { return !Object.keys(schemaValue).includes(combinedKey); })
                                    .forEach(function (nonMatchingKey) {
                                    if (schemaValue.additionalProperties === false) {
                                        delete combinedObject_1[nonMatchingKey];
                                    }
                                    else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schemaValue.additionalProperties)) {
                                        combinedObject_1[nonMatchingKey] = mergeSchemas(combinedObject_1[nonMatchingKey], schemaValue.additionalProperties);
                                    }
                                });
                            }
                            for (var _f = 0, _g = Object.keys(schemaValue); _f < _g.length; _f++) {
                                var subKey = _g[_f];
                                if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(combinedObject_1[subKey], schemaValue[subKey]) || (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(combinedObject_1, subKey) &&
                                    !Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(combinedObject_1, 'additionalProperties'))) {
                                    combinedObject_1[subKey] = schemaValue[subKey];
                                }
                                else if (!Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(combinedObject_1, subKey) &&
                                    Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(combinedObject_1, 'additionalProperties')) {
                                    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(combinedObject_1.additionalProperties)) {
                                        combinedObject_1[subKey] = mergeSchemas(combinedObject_1.additionalProperties, schemaValue[subKey]);
                                    }
                                }
                                else if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(schemaValue[subKey]) &&
                                    Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isObject"])(combinedObject_1[subKey])) {
                                    combinedObject_1[subKey] =
                                        mergeSchemas(combinedObject_1[subKey], schemaValue[subKey]);
                                }
                                else {
                                    return { value: { allOf: schemas.slice() } };
                                }
                            }
                            combinedSchema.properties = combinedObject_1;
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'required':
                        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(combinedValue) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schemaValue)) {
                            combinedSchema.required = _utility_functions__WEBPACK_IMPORTED_MODULE_2__["uniqueItems"].apply(void 0, combinedValue.concat(schemaValue));
                        }
                        else if (typeof schemaValue === 'boolean' &&
                            typeof combinedValue === 'boolean') {
                            combinedSchema.required = !!combinedValue || !!schemaValue;
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case '$schema':
                    case '$id':
                    case 'id':
                        break;
                    case 'title':
                    case 'description':
                        combinedSchema[key] = schemaValue;
                        break;
                    case 'type':
                        if ((Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(schemaValue) || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isString"])(schemaValue)) &&
                            (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isArray"])(combinedValue) || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_1__["isString"])(combinedValue))) {
                            var combinedTypes = Object(_utility_functions__WEBPACK_IMPORTED_MODULE_2__["commonItems"])(combinedValue, schemaValue);
                            if (!combinedTypes.length) {
                                return { value: { allOf: schemas.slice() } };
                            }
                            combinedSchema.type = combinedTypes.length > 1 ? combinedTypes : combinedTypes[0];
                        }
                        else {
                            return { value: { allOf: schemas.slice() } };
                        }
                        break;
                    case 'uniqueItems':
                        combinedSchema.uniqueItems = !!combinedValue || !!schemaValue;
                        break;
                    default: return { value: { allOf: schemas.slice() } };
                }
            }
        };
        for (var _b = 0, _c = Object.keys(schema); _b < _c.length; _b++) {
            var key = _c[_b];
            var state_1 = _loop_1(key);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    }
    return combinedSchema;
}


/***/ }),

/***/ "./src/lib/src/shared/orderable.directive.ts":
/*!***************************************************!*\
  !*** ./src/lib/src/shared/orderable.directive.ts ***!
  \***************************************************/
/*! exports provided: OrderableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderableDirective", function() { return OrderableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderableDirective = (function () {
    function OrderableDirective(elementRef, jsf, ngZone) {
        this.elementRef = elementRef;
        this.jsf = jsf;
        this.ngZone = ngZone;
        this.overParentElement = false;
        this.overChildElement = false;
    }
    OrderableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.orderable && this.layoutNode && this.layoutIndex && this.dataIndex) {
            this.element = this.elementRef.nativeElement;
            this.element.draggable = true;
            this.arrayLayoutIndex = 'move:' + this.layoutIndex.slice(0, -1).toString();
            this.ngZone.runOutsideAngular(function () {
                _this.element.addEventListener('dragstart', function (event) {
                    event.dataTransfer.effectAllowed = 'move';
                    var sourceArrayIndex = _this.dataIndex[_this.dataIndex.length - 1];
                    sessionStorage.setItem(_this.arrayLayoutIndex, sourceArrayIndex + '');
                });
                _this.element.addEventListener('dragover', function (event) {
                    if (event.preventDefault) {
                        event.preventDefault();
                    }
                    event.dataTransfer.dropEffect = 'move';
                    return false;
                });
                _this.element.addEventListener('dragenter', function (event) {
                    if (_this.overParentElement) {
                        return _this.overChildElement = true;
                    }
                    else {
                        _this.overParentElement = true;
                    }
                    var sourceArrayIndex = sessionStorage.getItem(_this.arrayLayoutIndex);
                    if (sourceArrayIndex !== null) {
                        if (_this.dataIndex[_this.dataIndex.length - 1] < +sourceArrayIndex) {
                            _this.element.classList.add('drag-target-top');
                        }
                        else if (_this.dataIndex[_this.dataIndex.length - 1] > +sourceArrayIndex) {
                            _this.element.classList.add('drag-target-bottom');
                        }
                    }
                });
                _this.element.addEventListener('dragleave', function (event) {
                    if (_this.overChildElement) {
                        _this.overChildElement = false;
                    }
                    else if (_this.overParentElement) {
                        _this.overParentElement = false;
                    }
                    var sourceArrayIndex = sessionStorage.getItem(_this.arrayLayoutIndex);
                    if (!_this.overParentElement && !_this.overChildElement && sourceArrayIndex !== null) {
                        _this.element.classList.remove('drag-target-top');
                        _this.element.classList.remove('drag-target-bottom');
                    }
                });
                _this.element.addEventListener('drop', function (event) {
                    _this.element.classList.remove('drag-target-top');
                    _this.element.classList.remove('drag-target-bottom');
                    var sourceArrayIndex = sessionStorage.getItem(_this.arrayLayoutIndex);
                    var destArrayIndex = _this.dataIndex[_this.dataIndex.length - 1];
                    if (sourceArrayIndex !== null && +sourceArrayIndex !== destArrayIndex) {
                        _this.jsf.moveArrayItem(_this, +sourceArrayIndex, destArrayIndex);
                    }
                    sessionStorage.removeItem(_this.arrayLayoutIndex);
                    return false;
                });
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OrderableDirective.prototype, "orderable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrderableDirective.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OrderableDirective.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OrderableDirective.prototype, "dataIndex", void 0);
    OrderableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[orderable]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], OrderableDirective);
    return OrderableDirective;
}());



/***/ }),

/***/ "./src/lib/src/shared/utility.functions.ts":
/*!*************************************************!*\
  !*** ./src/lib/src/shared/utility.functions.ts ***!
  \*************************************************/
/*! exports provided: addClasses, copy, forEach, forEachCopy, hasOwn, mergeFilteredObject, uniqueItems, commonItems, fixTitle, toTitleCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClasses", function() { return addClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEachCopy", function() { return forEachCopy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeFilteredObject", function() { return mergeFilteredObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueItems", function() { return uniqueItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonItems", function() { return commonItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixTitle", function() { return fixTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTitleCase", function() { return toTitleCase; });
/* harmony import */ var _validator_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator.functions */ "./src/lib/src/shared/validator.functions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function addClasses(oldClasses, newClasses) {
    var badType = function (i) { return !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isSet"])(i) && !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isArray"])(i) && !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isString"])(i); };
    if (badType(newClasses)) {
        return oldClasses;
    }
    if (badType(oldClasses)) {
        oldClasses = '';
    }
    var toSet = function (i) { return Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isSet"])(i) ? i : Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isArray"])(i) ? new Set(i) : new Set(i.split(' ')); };
    var combinedSet = toSet(oldClasses);
    var newSet = toSet(newClasses);
    newSet.forEach(function (c) { return combinedSet.add(c); });
    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isSet"])(oldClasses)) {
        return combinedSet;
    }
    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isArray"])(oldClasses)) {
        return Array.from(combinedSet);
    }
    return Array.from(combinedSet).join(' ');
}
function copy(object, errors) {
    if (errors === void 0) { errors = false; }
    if (typeof object !== 'object' || object === null) {
        return object;
    }
    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isMap"])(object)) {
        return new Map(object);
    }
    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isSet"])(object)) {
        return new Set(object);
    }
    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isArray"])(object)) {
        return object.slice();
    }
    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isObject"])(object)) {
        return __assign({}, object);
    }
    if (errors) {
        console.error('copy error: Object to copy must be a JavaScript object or value.');
    }
    return object;
}
function forEach(object, fn, recurse, rootObject, errors) {
    if (recurse === void 0) { recurse = false; }
    if (rootObject === void 0) { rootObject = object; }
    if (errors === void 0) { errors = false; }
    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(object)) {
        return;
    }
    if ((Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isObject"])(object) || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isArray"])(object)) && typeof fn === 'function') {
        for (var _i = 0, _a = Object.keys(object); _i < _a.length; _i++) {
            var key = _a[_i];
            var value = object[key];
            if (recurse === 'bottom-up' && (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value))) {
                forEach(value, fn, recurse, rootObject);
            }
            fn(value, key, object, rootObject);
            if (recurse === 'top-down' && (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isObject"])(value) || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value))) {
                forEach(value, fn, recurse, rootObject);
            }
        }
    }
    if (errors) {
        if (typeof fn !== 'function') {
            console.error('forEach error: Iterator must be a function.');
            console.error('function', fn);
        }
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isObject"])(object) && !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isArray"])(object)) {
            console.error('forEach error: Input object must be an object or array.');
            console.error('object', object);
        }
    }
}
function forEachCopy(object, fn, errors) {
    if (errors === void 0) { errors = false; }
    if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["hasValue"])(object)) {
        return;
    }
    if ((Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isObject"])(object) || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isArray"])(object)) && typeof object !== 'function') {
        var newObject = Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isArray"])(object) ? [] : {};
        for (var _i = 0, _a = Object.keys(object); _i < _a.length; _i++) {
            var key = _a[_i];
            newObject[key] = fn(object[key], key, object);
        }
        return newObject;
    }
    if (errors) {
        if (typeof fn !== 'function') {
            console.error('forEachCopy error: Iterator must be a function.');
            console.error('function', fn);
        }
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isObject"])(object) && !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isArray"])(object)) {
            console.error('forEachCopy error: Input object must be an object or array.');
            console.error('object', object);
        }
    }
}
function hasOwn(object, property) {
    if (!object || !['number', 'string', 'symbol'].includes(typeof property) ||
        (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isObject"])(object) && !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isArray"])(object) && !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isMap"])(object) && !Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isSet"])(object))) {
        return false;
    }
    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isMap"])(object) || Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isSet"])(object)) {
        return object.has(property);
    }
    if (typeof property === 'number') {
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isArray"])(object)) {
            return object[property];
        }
        property = property + '';
    }
    return object.hasOwnProperty(property);
}
function mergeFilteredObject(targetObject, sourceObject, excludeKeys, keyFn, valFn) {
    if (excludeKeys === void 0) { excludeKeys = []; }
    if (keyFn === void 0) { keyFn = function (key) { return key; }; }
    if (valFn === void 0) { valFn = function (val) { return val; }; }
    if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isObject"])(sourceObject)) {
        return targetObject;
    }
    if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isObject"])(targetObject)) {
        targetObject = {};
    }
    for (var _i = 0, _a = Object.keys(sourceObject); _i < _a.length; _i++) {
        var key = _a[_i];
        if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["inArray"])(key, excludeKeys) && Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(sourceObject[key])) {
            targetObject[keyFn(key)] = valFn(sourceObject[key]);
        }
    }
    return targetObject;
}
function uniqueItems() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var returnItems = [];
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        if (!returnItems.includes(item)) {
            returnItems.push(item);
        }
    }
    return returnItems;
}
function commonItems() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var returnItems = null;
    var _loop_1 = function (array) {
        if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isString"])(array)) {
            array = [array];
        }
        returnItems = returnItems === null ? array.slice() :
            returnItems.filter(function (item) { return array.includes(item); });
        if (!returnItems.length) {
            return { value: [] };
        }
    };
    for (var _a = 0, arrays_1 = arrays; _a < arrays_1.length; _a++) {
        var array = arrays_1[_a];
        var state_1 = _loop_1(array);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return returnItems;
}
function fixTitle(name) {
    return name && toTitleCase(name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' '));
}
function toTitleCase(input, forceWords) {
    if (!Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isString"])(input)) {
        return input;
    }
    var forceArray = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'en',
        'for', 'if', 'in', 'nor', 'of', 'on', 'or', 'per', 'the', 'to', 'v', 'v.',
        'vs', 'vs.', 'via'];
    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isString"])(forceWords)) {
        forceWords = forceWords.split('|');
    }
    if (Object(_validator_functions__WEBPACK_IMPORTED_MODULE_0__["isArray"])(forceWords)) {
        forceArray = forceArray.concat(forceWords);
    }
    var forceArrayLower = forceArray.map(function (w) { return w.toLowerCase(); });
    var noInitialCase = input === input.toUpperCase() || input === input.toLowerCase();
    var prevLastChar = '';
    input = input.trim();
    return input.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (word, idx) {
        if (!noInitialCase && word.slice(1).search(/[A-Z]|\../) !== -1) {
            return word;
        }
        else {
            var newWord = void 0;
            var forceWord = forceArray[forceArrayLower.indexOf(word.toLowerCase())];
            if (!forceWord) {
                if (noInitialCase) {
                    if (word.slice(1).search(/\../) !== -1) {
                        newWord = word.toLowerCase();
                    }
                    else {
                        newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
                    }
                }
                else {
                    newWord = word[0].toUpperCase() + word.slice(1);
                }
            }
            else if (forceWord === forceWord.toLowerCase() && (idx === 0 || idx + word.length === input.length ||
                prevLastChar === ':' || input[idx - 1].search(/[^\s-]/) !== -1 ||
                (input[idx - 1] !== '-' && input[idx + word.length] === '-'))) {
                newWord = forceWord[0].toUpperCase() + forceWord.slice(1);
            }
            else {
                newWord = forceWord;
            }
            prevLastChar = word.slice(-1);
            return newWord;
        }
    });
}


/***/ }),

/***/ "./src/lib/src/shared/validator.functions.ts":
/*!***************************************************!*\
  !*** ./src/lib/src/shared/validator.functions.ts ***!
  \***************************************************/
/*! exports provided: _executeValidators, _executeAsyncValidators, _mergeObjects, _mergeErrors, isDefined, hasValue, isEmpty, isString, isNumber, isInteger, isBoolean, isFunction, isObject, isArray, isDate, isMap, isSet, isSymbol, getType, isType, isPrimitive, toJavaScriptType, toSchemaType, isPromise, isObservable, _toPromise, toObservable, inArray, xor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_executeValidators", function() { return _executeValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_executeAsyncValidators", function() { return _executeAsyncValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_mergeObjects", function() { return _mergeObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_mergeErrors", function() { return _mergeErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return hasValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return isInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return isMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return isSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return isType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJavaScriptType", function() { return toJavaScriptType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSchemaType", function() { return toSchemaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_toPromise", function() { return _toPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toObservable", function() { return toObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inArray", function() { return inArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xor", function() { return xor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var toPromise = function (obs) {
    return new Promise(function (resolve, reject) {
        obs.subscribe({
            complete: resolve,
            error: reject
        });
    });
};
function _executeValidators(control, validators, invert) {
    if (invert === void 0) { invert = false; }
    return validators.map(function (validator) { return validator(control, invert); });
}
function _executeAsyncValidators(control, validators, invert) {
    if (invert === void 0) { invert = false; }
    return validators.map(function (validator) { return validator(control, invert); });
}
function _mergeObjects() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var mergedObject = {};
    for (var _a = 0, objects_1 = objects; _a < objects_1.length; _a++) {
        var currentObject = objects_1[_a];
        if (isObject(currentObject)) {
            for (var _b = 0, _c = Object.keys(currentObject); _b < _c.length; _b++) {
                var key = _c[_b];
                var currentValue = currentObject[key];
                var mergedValue = mergedObject[key];
                mergedObject[key] = !isDefined(mergedValue) ? currentValue :
                    key === 'not' && isBoolean(mergedValue, 'strict') &&
                        isBoolean(currentValue, 'strict') ? xor(mergedValue, currentValue) :
                        getType(mergedValue) === 'object' && getType(currentValue) === 'object' ?
                            _mergeObjects(mergedValue, currentValue) :
                            currentValue;
            }
        }
    }
    return mergedObject;
}
function _mergeErrors(arrayOfErrors) {
    var mergedErrors = _mergeObjects.apply(void 0, arrayOfErrors);
    return isEmpty(mergedErrors) ? null : mergedErrors;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function hasValue(value) {
    return value !== undefined && value !== null && value !== '';
}
function isEmpty(value) {
    if (isArray(value)) {
        return !value.length;
    }
    if (isObject(value)) {
        return !Object.keys(value).length;
    }
    return value === undefined || value === null || value === '';
}
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value, strict) {
    if (strict === void 0) { strict = false; }
    if (strict && typeof value !== 'number') {
        return false;
    }
    return !isNaN(value) && value !== value / 0;
}
function isInteger(value, strict) {
    if (strict === void 0) { strict = false; }
    if (strict && typeof value !== 'number') {
        return false;
    }
    return !isNaN(value) && value !== value / 0 && value % 1 === 0;
}
function isBoolean(value, option) {
    if (option === void 0) { option = null; }
    if (option === 'strict') {
        return value === true || value === false;
    }
    if (option === true) {
        return value === true || value === 1 || value === 'true' || value === '1';
    }
    if (option === false) {
        return value === false || value === 0 || value === 'false' || value === '0';
    }
    return value === true || value === 1 || value === 'true' || value === '1' ||
        value === false || value === 0 || value === 'false' || value === '0';
}
function isFunction(item) {
    return typeof item === 'function';
}
function isObject(item) {
    return item !== null && typeof item === 'object' &&
        Object.prototype.toString.call(item) === '[object Object]';
}
function isArray(item) {
    return Array.isArray(item) ||
        Object.prototype.toString.call(item) === '[object Array]';
}
function isDate(item) {
    return typeof item === 'object' &&
        Object.prototype.toString.call(item) === '[object Date]';
}
function isMap(item) {
    return typeof item === 'object' &&
        Object.prototype.toString.call(item) === '[object Map]';
}
function isSet(item) {
    return typeof item === 'object' &&
        Object.prototype.toString.call(item) === '[object Set]';
}
function isSymbol(item) {
    return typeof item === 'symbol';
}
function getType(value, strict) {
    if (strict === void 0) { strict = false; }
    if (!isDefined(value)) {
        return 'null';
    }
    if (isArray(value)) {
        return 'array';
    }
    if (isObject(value)) {
        return 'object';
    }
    if (isBoolean(value, 'strict')) {
        return 'boolean';
    }
    if (isInteger(value, strict)) {
        return 'integer';
    }
    if (isNumber(value, strict)) {
        return 'number';
    }
    if (isString(value) || (!strict && isDate(value))) {
        return 'string';
    }
    return null;
}
function isType(value, type) {
    switch (type) {
        case 'string':
            return isString(value) || isDate(value);
        case 'number':
            return isNumber(value);
        case 'integer':
            return isInteger(value);
        case 'boolean':
            return isBoolean(value);
        case 'null':
            return !hasValue(value);
        default:
            console.error("isType error: \"" + type + "\" is not a recognized type.");
            return null;
    }
}
function isPrimitive(value) {
    return (isString(value) || isNumber(value) ||
        isBoolean(value, 'strict') || value === null);
}
function toJavaScriptType(value, types, strictIntegers) {
    if (strictIntegers === void 0) { strictIntegers = true; }
    if (!isDefined(value)) {
        return null;
    }
    if (isString(types)) {
        types = [types];
    }
    if (strictIntegers && inArray('integer', types)) {
        if (isInteger(value, 'strict')) {
            return value;
        }
        if (isInteger(value)) {
            return parseInt(value, 10);
        }
    }
    if (inArray('number', types) || (!strictIntegers && inArray('integer', types))) {
        if (isNumber(value, 'strict')) {
            return value;
        }
        if (isNumber(value)) {
            return parseFloat(value);
        }
    }
    if (inArray('string', types)) {
        if (isString(value)) {
            return value;
        }
        if (isDate(value)) {
            return value.toISOString().slice(0, 10);
        }
        if (isNumber(value)) {
            return value.toString();
        }
    }
    if (isDate(value) && (inArray('integer', types) || inArray('number', types))) {
        return value.getTime();
    }
    if (inArray('boolean', types)) {
        if (isBoolean(value, true)) {
            return true;
        }
        if (isBoolean(value, false)) {
            return false;
        }
    }
    return null;
}
function toSchemaType(value, types) {
    if (!isArray(types)) {
        types = [types];
    }
    if (types.includes('null') && !hasValue(value)) {
        return null;
    }
    if (types.includes('boolean') && !isBoolean(value, 'strict')) {
        return value;
    }
    if (types.includes('integer')) {
        var testValue = toJavaScriptType(value, 'integer');
        if (testValue !== null) {
            return +testValue;
        }
    }
    if (types.includes('number')) {
        var testValue = toJavaScriptType(value, 'number');
        if (testValue !== null) {
            return +testValue;
        }
    }
    if ((isString(value) || isNumber(value, 'strict')) &&
        types.includes('string')) {
        return toJavaScriptType(value, 'string');
    }
    if (types.includes('boolean') && isBoolean(value)) {
        return toJavaScriptType(value, 'boolean');
    }
    if (types.includes('string')) {
        if (value === null) {
            return '';
        }
        var testValue = toJavaScriptType(value, 'string');
        if (testValue !== null) {
            return testValue;
        }
    }
    if ((types.includes('number') ||
        types.includes('integer'))) {
        if (value === true) {
            return 1;
        }
        if (value === false || value === null || value === '') {
            return 0;
        }
    }
    if (types.includes('number')) {
        var testValue = parseFloat(value);
        if (!!testValue) {
            return testValue;
        }
    }
    if (types.includes('integer')) {
        var testValue = parseInt(value, 10);
        if (!!testValue) {
            return testValue;
        }
    }
    if (types.includes('boolean')) {
        return !!value;
    }
    if ((types.includes('number') ||
        types.includes('integer')) && !types.includes('null')) {
        return 0;
    }
}
function isPromise(object) {
    return !!object && typeof object.then === 'function';
}
function isObservable(object) {
    return !!object && typeof object.subscribe === 'function';
}
function _toPromise(object) {
    return isPromise(object) ? object : toPromise.call(object);
}
function toObservable(object) {
    var observable = isPromise(object) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["from"])(object) : object;
    if (isObservable(observable)) {
        return observable;
    }
    console.error('toObservable error: Expected validator to return Promise or Observable.');
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
}
function inArray(item, array, allIn) {
    if (allIn === void 0) { allIn = false; }
    if (!isDefined(item) || !isArray(array)) {
        return false;
    }
    return isArray(item) ?
        item[allIn ? 'every' : 'some'](function (subItem) { return array.includes(subItem); }) :
        array.includes(item);
}
function xor(value1, value2) {
    return (!!value1 && !value2) || (!value1 && !!value2);
}


/***/ }),

/***/ "./src/lib/src/widget-library/add-reference.component.ts":
/*!***************************************************************!*\
  !*** ./src/lib/src/widget-library/add-reference.component.ts ***!
  \***************************************************************/
/*! exports provided: AddReferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReferenceComponent", function() { return AddReferenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddReferenceComponent = (function () {
    function AddReferenceComponent(jsf) {
        this.jsf = jsf;
    }
    AddReferenceComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
    };
    Object.defineProperty(AddReferenceComponent.prototype, "showAddButton", {
        get: function () {
            return !this.layoutNode.arrayItem ||
                this.layoutIndex[this.layoutIndex.length - 1] < this.options.maxItems;
        },
        enumerable: true,
        configurable: true
    });
    AddReferenceComponent.prototype.addItem = function (event) {
        event.preventDefault();
        this.jsf.addItem(this);
    };
    Object.defineProperty(AddReferenceComponent.prototype, "buttonText", {
        get: function () {
            var parent = {
                dataIndex: this.dataIndex.slice(0, -1),
                layoutIndex: this.layoutIndex.slice(0, -1),
                layoutNode: this.jsf.getParentNode(this)
            };
            return parent.layoutNode.add ||
                this.jsf.setArrayItemTitle(parent, this.layoutNode, this.itemCount);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddReferenceComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AddReferenceComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AddReferenceComponent.prototype, "dataIndex", void 0);
    AddReferenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-reference-widget',
            template: "\n    <button *ngIf=\"showAddButton\"\n      [class]=\"options?.fieldHtmlClass || ''\"\n      [disabled]=\"options?.readonly\"\n      (click)=\"addItem($event)\">\n      <span *ngIf=\"options?.icon\" [class]=\"options?.icon\"></span>\n      <span *ngIf=\"options?.title\" [innerHTML]=\"buttonText\"></span>\n    </button>",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], AddReferenceComponent);
    return AddReferenceComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/button.component.ts":
/*!********************************************************!*\
  !*** ./src/lib/src/widget-library/button.component.ts ***!
  \********************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonComponent = (function () {
    function ButtonComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    ButtonComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    ButtonComponent.prototype.updateValue = function (event) {
        if (typeof this.options.onClick === 'function') {
            this.options.onClick(event);
        }
        else {
            this.jsf.updateValue(this, event.target.value);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ButtonComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ButtonComponent.prototype, "dataIndex", void 0);
    ButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'button-widget',
            template: "\n    <div\n      [class]=\"options?.htmlClass || ''\">\n      <button\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [disabled]=\"controlDisabled\"\n        [name]=\"controlName\"\n        [type]=\"layoutNode?.type\"\n        [value]=\"controlValue\"\n        (click)=\"updateValue($event)\">\n        <span *ngIf=\"options?.icon || options?.title\"\n          [class]=\"options?.icon\"\n          [innerHTML]=\"options?.title\"></span>\n      </button>\n    </div>",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/checkbox.component.ts":
/*!**********************************************************!*\
  !*** ./src/lib/src/widget-library/checkbox.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckboxComponent = (function () {
    function CheckboxComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.trueValue = true;
        this.falseValue = false;
    }
    CheckboxComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        if (this.controlValue === null || this.controlValue === undefined) {
            this.controlValue = this.options.title;
        }
    };
    CheckboxComponent.prototype.updateValue = function (event) {
        event.preventDefault();
        this.jsf.updateValue(this, event.target.checked ? this.trueValue : this.falseValue);
    };
    Object.defineProperty(CheckboxComponent.prototype, "isChecked", {
        get: function () {
            return this.jsf.getFormControlValue(this) === this.trueValue;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CheckboxComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CheckboxComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CheckboxComponent.prototype, "dataIndex", void 0);
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'checkbox-widget',
            template: "\n    <label\n      [attr.for]=\"'control' + layoutNode?._id\"\n      [class]=\"options?.itemLabelHtmlClass || ''\">\n      <input *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [class]=\"(options?.fieldHtmlClass || '') + (isChecked ?\n          (' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')) :\n          (' ' + (options?.style?.unselected || '')))\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        type=\"checkbox\">\n      <input *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [checked]=\"isChecked ? 'checked' : null\"\n        [class]=\"(options?.fieldHtmlClass || '') + (isChecked ?\n          (' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')) :\n          (' ' + (options?.style?.unselected || '')))\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [value]=\"controlValue\"\n        type=\"checkbox\"\n        (change)=\"updateValue($event)\">\n      <span *ngIf=\"options?.title\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></span>\n    </label>",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/checkboxes.component.ts":
/*!************************************************************!*\
  !*** ./src/lib/src/widget-library/checkboxes.component.ts ***!
  \************************************************************/
/*! exports provided: CheckboxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxesComponent", function() { return CheckboxesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./src/lib/src/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckboxesComponent = (function () {
    function CheckboxesComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.checkboxList = [];
    }
    CheckboxesComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.layoutOrientation = (this.layoutNode.type === 'checkboxes-inline' ||
            this.layoutNode.type === 'checkboxbuttons') ? 'horizontal' : 'vertical';
        this.jsf.initializeControl(this);
        this.checkboxList = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["buildTitleMap"])(this.options.titleMap || this.options.enumNames, this.options.enum, true);
        if (this.boundControl) {
            var formArray_1 = this.jsf.getFormControl(this);
            this.checkboxList.forEach(function (checkboxItem) {
                return checkboxItem.checked = formArray_1.value.includes(checkboxItem.value);
            });
        }
    };
    CheckboxesComponent.prototype.updateValue = function (event) {
        for (var _i = 0, _a = this.checkboxList; _i < _a.length; _i++) {
            var checkboxItem = _a[_i];
            if (event.target.value === checkboxItem.value) {
                checkboxItem.checked = event.target.checked;
            }
        }
        if (this.boundControl) {
            this.jsf.updateArrayCheckboxList(this, this.checkboxList);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CheckboxesComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CheckboxesComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CheckboxesComponent.prototype, "dataIndex", void 0);
    CheckboxesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'checkboxes-widget',
            template: "\n    <label *ngIf=\"options?.title\"\n      [class]=\"options?.labelHtmlClass || ''\"\n      [style.display]=\"options?.notitle ? 'none' : ''\"\n      [innerHTML]=\"options?.title\"></label>\n\n    <!-- 'horizontal' = checkboxes-inline or checkboxbuttons -->\n    <div *ngIf=\"layoutOrientation === 'horizontal'\" [class]=\"options?.htmlClass || ''\">\n      <label *ngFor=\"let checkboxItem of checkboxList\"\n        [attr.for]=\"'control' + layoutNode?._id + '/' + checkboxItem.value\"\n        [class]=\"(options?.itemLabelHtmlClass || '') + (checkboxItem.checked ?\n          (' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')) :\n          (' ' + (options?.style?.unselected || '')))\">\n        <input type=\"checkbox\"\n          [attr.required]=\"options?.required\"\n          [checked]=\"checkboxItem.checked\"\n          [class]=\"options?.fieldHtmlClass || ''\"\n          [disabled]=\"controlDisabled\"\n          [id]=\"'control' + layoutNode?._id + '/' + checkboxItem.value\"\n          [name]=\"checkboxItem?.name\"\n          [readonly]=\"options?.readonly ? 'readonly' : null\"\n          [value]=\"checkboxItem.value\"\n          (change)=\"updateValue($event)\">\n        <span [innerHTML]=\"checkboxItem.name\"></span>\n      </label>\n    </div>\n\n    <!-- 'vertical' = regular checkboxes -->\n    <div *ngIf=\"layoutOrientation === 'vertical'\">\n      <div *ngFor=\"let checkboxItem of checkboxList\" [class]=\"options?.htmlClass || ''\">\n        <label\n          [attr.for]=\"'control' + layoutNode?._id + '/' + checkboxItem.value\"\n          [class]=\"(options?.itemLabelHtmlClass || '') + (checkboxItem.checked ?\n            (' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')) :\n            (' ' + (options?.style?.unselected || '')))\">\n          <input type=\"checkbox\"\n            [attr.required]=\"options?.required\"\n            [checked]=\"checkboxItem.checked\"\n            [class]=\"options?.fieldHtmlClass || ''\"\n            [disabled]=\"controlDisabled\"\n            [id]=\"options?.name + '/' + checkboxItem.value\"\n            [name]=\"checkboxItem?.name\"\n            [readonly]=\"options?.readonly ? 'readonly' : null\"\n            [value]=\"checkboxItem.value\"\n            (change)=\"updateValue($event)\">\n          <span [innerHTML]=\"checkboxItem?.name\"></span>\n        </label>\n      </div>\n    </div>",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], CheckboxesComponent);
    return CheckboxesComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/file.component.ts":
/*!******************************************************!*\
  !*** ./src/lib/src/widget-library/file.component.ts ***!
  \******************************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileComponent = (function () {
    function FileComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    FileComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    FileComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FileComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FileComponent.prototype, "dataIndex", void 0);
    FileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'file-widget',
            template: "",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/hidden.component.ts":
/*!********************************************************!*\
  !*** ./src/lib/src/widget-library/hidden.component.ts ***!
  \********************************************************/
/*! exports provided: HiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiddenComponent", function() { return HiddenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HiddenComponent = (function () {
    function HiddenComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    HiddenComponent.prototype.ngOnInit = function () {
        this.jsf.initializeControl(this);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HiddenComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HiddenComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], HiddenComponent.prototype, "dataIndex", void 0);
    HiddenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hidden-widget',
            template: "\n    <input *ngIf=\"boundControl\"\n      [formControl]=\"formControl\"\n      [id]=\"'control' + layoutNode?._id\"\n      [name]=\"controlName\"\n      type=\"hidden\">\n    <input *ngIf=\"!boundControl\"\n      [disabled]=\"controlDisabled\"\n      [name]=\"controlName\"\n      [id]=\"'control' + layoutNode?._id\"\n      type=\"hidden\"\n      [value]=\"controlValue\">",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], HiddenComponent);
    return HiddenComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/index.ts":
/*!*********************************************!*\
  !*** ./src/lib/src/widget-library/index.ts ***!
  \*********************************************/
/*! exports provided: BASIC_WIDGETS, AddReferenceComponent, OneOfComponent, ButtonComponent, CheckboxComponent, CheckboxesComponent, FileComponent, HiddenComponent, InputComponent, MessageComponent, NoneComponent, NumberComponent, RadiosComponent, RootComponent, SectionComponent, SelectComponent, SelectFrameworkComponent, SelectWidgetComponent, SubmitComponent, TabComponent, TabsComponent, TemplateComponent, TextareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASIC_WIDGETS", function() { return BASIC_WIDGETS; });
/* harmony import */ var _add_reference_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-reference.component */ "./src/lib/src/widget-library/add-reference.component.ts");
/* harmony import */ var _one_of_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./one-of.component */ "./src/lib/src/widget-library/one-of.component.ts");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.component */ "./src/lib/src/widget-library/button.component.ts");
/* harmony import */ var _checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkbox.component */ "./src/lib/src/widget-library/checkbox.component.ts");
/* harmony import */ var _checkboxes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkboxes.component */ "./src/lib/src/widget-library/checkboxes.component.ts");
/* harmony import */ var _file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file.component */ "./src/lib/src/widget-library/file.component.ts");
/* harmony import */ var _hidden_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hidden.component */ "./src/lib/src/widget-library/hidden.component.ts");
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input.component */ "./src/lib/src/widget-library/input.component.ts");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message.component */ "./src/lib/src/widget-library/message.component.ts");
/* harmony import */ var _none_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./none.component */ "./src/lib/src/widget-library/none.component.ts");
/* harmony import */ var _number_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./number.component */ "./src/lib/src/widget-library/number.component.ts");
/* harmony import */ var _radios_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./radios.component */ "./src/lib/src/widget-library/radios.component.ts");
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./root.component */ "./src/lib/src/widget-library/root.component.ts");
/* harmony import */ var _section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./section.component */ "./src/lib/src/widget-library/section.component.ts");
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./select.component */ "./src/lib/src/widget-library/select.component.ts");
/* harmony import */ var _select_framework_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./select-framework.component */ "./src/lib/src/widget-library/select-framework.component.ts");
/* harmony import */ var _select_widget_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./select-widget.component */ "./src/lib/src/widget-library/select-widget.component.ts");
/* harmony import */ var _submit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./submit.component */ "./src/lib/src/widget-library/submit.component.ts");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tab.component */ "./src/lib/src/widget-library/tab.component.ts");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tabs.component */ "./src/lib/src/widget-library/tabs.component.ts");
/* harmony import */ var _template_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./template.component */ "./src/lib/src/widget-library/template.component.ts");
/* harmony import */ var _textarea_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./textarea.component */ "./src/lib/src/widget-library/textarea.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddReferenceComponent", function() { return _add_reference_component__WEBPACK_IMPORTED_MODULE_0__["AddReferenceComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OneOfComponent", function() { return _one_of_component__WEBPACK_IMPORTED_MODULE_1__["OneOfComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return _button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return _checkbox_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxesComponent", function() { return _checkboxes_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxesComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return _file_component__WEBPACK_IMPORTED_MODULE_5__["FileComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HiddenComponent", function() { return _hidden_component__WEBPACK_IMPORTED_MODULE_6__["HiddenComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return _input_component__WEBPACK_IMPORTED_MODULE_7__["InputComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return _message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoneComponent", function() { return _none_component__WEBPACK_IMPORTED_MODULE_9__["NoneComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberComponent", function() { return _number_component__WEBPACK_IMPORTED_MODULE_10__["NumberComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadiosComponent", function() { return _radios_component__WEBPACK_IMPORTED_MODULE_11__["RadiosComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return _root_component__WEBPACK_IMPORTED_MODULE_12__["RootComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return _section_component__WEBPACK_IMPORTED_MODULE_13__["SectionComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return _select_component__WEBPACK_IMPORTED_MODULE_14__["SelectComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectFrameworkComponent", function() { return _select_framework_component__WEBPACK_IMPORTED_MODULE_15__["SelectFrameworkComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectWidgetComponent", function() { return _select_widget_component__WEBPACK_IMPORTED_MODULE_16__["SelectWidgetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitComponent", function() { return _submit_component__WEBPACK_IMPORTED_MODULE_17__["SubmitComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return _tab_component__WEBPACK_IMPORTED_MODULE_18__["TabComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return _tabs_component__WEBPACK_IMPORTED_MODULE_19__["TabsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return _template_component__WEBPACK_IMPORTED_MODULE_20__["TemplateComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextareaComponent", function() { return _textarea_component__WEBPACK_IMPORTED_MODULE_21__["TextareaComponent"]; });























var BASIC_WIDGETS = [
    _add_reference_component__WEBPACK_IMPORTED_MODULE_0__["AddReferenceComponent"], _one_of_component__WEBPACK_IMPORTED_MODULE_1__["OneOfComponent"], _button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _checkbox_component__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"],
    _checkboxes_component__WEBPACK_IMPORTED_MODULE_4__["CheckboxesComponent"], _file_component__WEBPACK_IMPORTED_MODULE_5__["FileComponent"], _hidden_component__WEBPACK_IMPORTED_MODULE_6__["HiddenComponent"], _input_component__WEBPACK_IMPORTED_MODULE_7__["InputComponent"],
    _message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"], _none_component__WEBPACK_IMPORTED_MODULE_9__["NoneComponent"], _number_component__WEBPACK_IMPORTED_MODULE_10__["NumberComponent"], _radios_component__WEBPACK_IMPORTED_MODULE_11__["RadiosComponent"],
    _root_component__WEBPACK_IMPORTED_MODULE_12__["RootComponent"], _section_component__WEBPACK_IMPORTED_MODULE_13__["SectionComponent"], _select_component__WEBPACK_IMPORTED_MODULE_14__["SelectComponent"], _select_framework_component__WEBPACK_IMPORTED_MODULE_15__["SelectFrameworkComponent"],
    _select_widget_component__WEBPACK_IMPORTED_MODULE_16__["SelectWidgetComponent"], _submit_component__WEBPACK_IMPORTED_MODULE_17__["SubmitComponent"], _tab_component__WEBPACK_IMPORTED_MODULE_18__["TabComponent"], _tabs_component__WEBPACK_IMPORTED_MODULE_19__["TabsComponent"],
    _template_component__WEBPACK_IMPORTED_MODULE_20__["TemplateComponent"], _textarea_component__WEBPACK_IMPORTED_MODULE_21__["TextareaComponent"]
];
























/***/ }),

/***/ "./src/lib/src/widget-library/input.component.ts":
/*!*******************************************************!*\
  !*** ./src/lib/src/widget-library/input.component.ts ***!
  \*******************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputComponent = (function () {
    function InputComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.autoCompleteList = [];
    }
    InputComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    InputComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InputComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InputComponent.prototype, "dataIndex", void 0);
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'input-widget',
            template: "\n    <div [class]=\"options?.htmlClass || ''\">\n      <label *ngIf=\"options?.title\"\n        [attr.for]=\"'control' + layoutNode?._id\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></label>\n      <input *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\"\n        [attr.maxlength]=\"options?.maxLength\"\n        [attr.minlength]=\"options?.minLength\"\n        [attr.pattern]=\"options?.pattern\"\n        [attr.placeholder]=\"options?.placeholder\"\n        [attr.required]=\"options?.required\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [type]=\"layoutNode?.type\">\n      <input *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.list]=\"'control' + layoutNode?._id + 'Autocomplete'\"\n        [attr.maxlength]=\"options?.maxLength\"\n        [attr.minlength]=\"options?.minLength\"\n        [attr.pattern]=\"options?.pattern\"\n        [attr.placeholder]=\"options?.placeholder\"\n        [attr.required]=\"options?.required\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [type]=\"layoutNode?.type\"\n        [value]=\"controlValue\"\n        (input)=\"updateValue($event)\">\n        <datalist *ngIf=\"options?.typeahead?.source\"\n          [id]=\"'control' + layoutNode?._id + 'Autocomplete'\">\n          <option *ngFor=\"let word of options?.typeahead?.source\" [value]=\"word\">\n        </datalist>\n    </div>",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/message.component.ts":
/*!*********************************************************!*\
  !*** ./src/lib/src/widget-library/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = (function () {
    function MessageComponent(jsf) {
        this.jsf = jsf;
        this.message = null;
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.message = this.options.help || this.options.helpvalue ||
            this.options.msg || this.options.message;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MessageComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MessageComponent.prototype, "dataIndex", void 0);
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'message-widget',
            template: "\n    <span *ngIf=\"message\"\n      [class]=\"options?.labelHtmlClass || ''\"\n      [innerHTML]=\"message\"></span>",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/none.component.ts":
/*!******************************************************!*\
  !*** ./src/lib/src/widget-library/none.component.ts ***!
  \******************************************************/
/*! exports provided: NoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoneComponent", function() { return NoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoneComponent = (function () {
    function NoneComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NoneComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NoneComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NoneComponent.prototype, "dataIndex", void 0);
    NoneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'none-widget',
            template: "",
        })
    ], NoneComponent);
    return NoneComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/number.component.ts":
/*!********************************************************!*\
  !*** ./src/lib/src/widget-library/number.component.ts ***!
  \********************************************************/
/*! exports provided: NumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberComponent", function() { return NumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NumberComponent = (function () {
    function NumberComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.allowNegative = true;
        this.allowDecimal = true;
        this.allowExponents = false;
        this.lastValidNumber = '';
    }
    NumberComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        if (this.layoutNode.dataType === 'integer') {
            this.allowDecimal = false;
        }
    };
    NumberComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NumberComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NumberComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NumberComponent.prototype, "dataIndex", void 0);
    NumberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'number-widget',
            template: "\n    <div [class]=\"options?.htmlClass || ''\">\n      <label *ngIf=\"options?.title\"\n        [attr.for]=\"'control' + layoutNode?._id\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></label>\n      <input *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.max]=\"options?.maximum\"\n        [attr.min]=\"options?.minimum\"\n        [attr.placeholder]=\"options?.placeholder\"\n        [attr.required]=\"options?.required\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.step]=\"options?.multipleOf || options?.step || 'any'\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [title]=\"lastValidNumber\"\n        [type]=\"layoutNode?.type === 'range' ? 'range' : 'number'\">\n      <input *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.max]=\"options?.maximum\"\n        [attr.min]=\"options?.minimum\"\n        [attr.placeholder]=\"options?.placeholder\"\n        [attr.required]=\"options?.required\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.step]=\"options?.multipleOf || options?.step || 'any'\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [readonly]=\"options?.readonly ? 'readonly' : null\"\n        [title]=\"lastValidNumber\"\n        [type]=\"layoutNode?.type === 'range' ? 'range' : 'number'\"\n        [value]=\"controlValue\"\n        (input)=\"updateValue($event)\">\n      <span *ngIf=\"layoutNode?.type === 'range'\" [innerHTML]=\"controlValue\"></span>\n    </div>",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], NumberComponent);
    return NumberComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/one-of.component.ts":
/*!********************************************************!*\
  !*** ./src/lib/src/widget-library/one-of.component.ts ***!
  \********************************************************/
/*! exports provided: OneOfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneOfComponent", function() { return OneOfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OneOfComponent = (function () {
    function OneOfComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    OneOfComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    OneOfComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OneOfComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OneOfComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], OneOfComponent.prototype, "dataIndex", void 0);
    OneOfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'one-of-widget',
            template: "",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], OneOfComponent);
    return OneOfComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/radios.component.ts":
/*!********************************************************!*\
  !*** ./src/lib/src/widget-library/radios.component.ts ***!
  \********************************************************/
/*! exports provided: RadiosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiosComponent", function() { return RadiosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./src/lib/src/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RadiosComponent = (function () {
    function RadiosComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.layoutOrientation = 'vertical';
        this.radiosList = [];
    }
    RadiosComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        if (this.layoutNode.type === 'radios-inline' ||
            this.layoutNode.type === 'radiobuttons') {
            this.layoutOrientation = 'horizontal';
        }
        this.radiosList = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["buildTitleMap"])(this.options.titleMap || this.options.enumNames, this.options.enum, true);
        this.jsf.initializeControl(this);
    };
    RadiosComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RadiosComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RadiosComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RadiosComponent.prototype, "dataIndex", void 0);
    RadiosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'radios-widget',
            template: "\n    <label *ngIf=\"options?.title\"\n      [attr.for]=\"'control' + layoutNode?._id\"\n      [class]=\"options?.labelHtmlClass || ''\"\n      [style.display]=\"options?.notitle ? 'none' : ''\"\n      [innerHTML]=\"options?.title\"></label>\n\n    <!-- 'horizontal' = radios-inline or radiobuttons -->\n    <div *ngIf=\"layoutOrientation === 'horizontal'\"\n      [class]=\"options?.htmlClass || ''\">\n      <label *ngFor=\"let radioItem of radiosList\"\n        [attr.for]=\"'control' + layoutNode?._id + '/' + radioItem?.value\"\n        [class]=\"(options?.itemLabelHtmlClass || '') +\n          ((controlValue + '' === radioItem?.value + '') ?\n          (' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')) :\n          (' ' + (options?.style?.unselected || '')))\">\n        <input type=\"radio\"\n          [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n          [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n          [attr.required]=\"options?.required\"\n          [checked]=\"radioItem?.value === controlValue\"\n          [class]=\"options?.fieldHtmlClass || ''\"\n          [disabled]=\"controlDisabled\"\n          [id]=\"'control' + layoutNode?._id + '/' + radioItem?.value\"\n          [name]=\"controlName\"\n          [value]=\"radioItem?.value\"\n          (change)=\"updateValue($event)\">\n        <span [innerHTML]=\"radioItem?.name\"></span>\n      </label>\n    </div>\n\n    <!-- 'vertical' = regular radios -->\n    <div *ngIf=\"layoutOrientation !== 'horizontal'\">\n      <div *ngFor=\"let radioItem of radiosList\"\n        [class]=\"options?.htmlClass || ''\">\n        <label\n          [attr.for]=\"'control' + layoutNode?._id + '/' + radioItem?.value\"\n          [class]=\"(options?.itemLabelHtmlClass || '') +\n            ((controlValue + '' === radioItem?.value + '') ?\n            (' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')) :\n            (' ' + (options?.style?.unselected || '')))\">\n          <input type=\"radio\"\n            [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n            [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n            [attr.required]=\"options?.required\"\n            [checked]=\"radioItem?.value === controlValue\"\n            [class]=\"options?.fieldHtmlClass || ''\"\n            [disabled]=\"controlDisabled\"\n            [id]=\"'control' + layoutNode?._id + '/' + radioItem?.value\"\n            [name]=\"controlName\"\n            [value]=\"radioItem?.value\"\n            (change)=\"updateValue($event)\">\n          <span [innerHTML]=\"radioItem?.name\"></span>\n        </label>\n      </div>\n    </div>",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], RadiosComponent);
    return RadiosComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/root.component.ts":
/*!******************************************************!*\
  !*** ./src/lib/src/widget-library/root.component.ts ***!
  \******************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RootComponent = (function () {
    function RootComponent(jsf) {
        this.jsf = jsf;
        this.isFlexItem = false;
    }
    RootComponent.prototype.isDraggable = function (node) {
        return node.arrayItem && node.type !== '$ref' &&
            node.arrayItemType === 'list' && this.isOrderable !== false;
    };
    RootComponent.prototype.getFlexAttribute = function (node, attribute) {
        var index = ['flex-grow', 'flex-shrink', 'flex-basis'].indexOf(attribute);
        return ((node.options || {}).flex || '').split(/\s+/)[index] ||
            (node.options || {})[attribute] || ['1', '1', 'auto'][index];
    };
    RootComponent.prototype.showWidget = function (layoutNode) {
        return this.jsf.evaluateCondition(layoutNode, this.dataIndex);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RootComponent.prototype, "dataIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RootComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], RootComponent.prototype, "layout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RootComponent.prototype, "isOrderable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RootComponent.prototype, "isFlexItem", void 0);
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'root-widget',
            template: "\n    <div *ngFor=\"let layoutItem of layout; let i = index\"\n      [class.form-flex-item]=\"isFlexItem\"\n      [style.align-self]=\"(layoutItem.options || {})['align-self']\"\n      [style.flex-basis]=\"getFlexAttribute(layoutItem, 'flex-basis')\"\n      [style.flex-grow]=\"getFlexAttribute(layoutItem, 'flex-grow')\"\n      [style.flex-shrink]=\"getFlexAttribute(layoutItem, 'flex-shrink')\"\n      [style.order]=\"(layoutItem.options || {}).order\">\n      <div\n        [dataIndex]=\"layoutItem?.arrayItem ? (dataIndex || []).concat(i) : (dataIndex || [])\"\n        [layoutIndex]=\"(layoutIndex || []).concat(i)\"\n        [layoutNode]=\"layoutItem\"\n        [orderable]=\"isDraggable(layoutItem)\">\n        <select-framework-widget *ngIf=\"showWidget(layoutItem)\"\n          [dataIndex]=\"layoutItem?.arrayItem ? (dataIndex || []).concat(i) : (dataIndex || [])\"\n          [layoutIndex]=\"(layoutIndex || []).concat(i)\"\n          [layoutNode]=\"layoutItem\"></select-framework-widget>\n      </div>\n    </div>",
            styles: ["\n    [draggable=true] {\n      transition: all 150ms cubic-bezier(.4, 0, .2, 1);\n    }\n    [draggable=true]:hover {\n      cursor: move;\n      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);\n      position: relative; z-index: 10;\n      margin-top: -1px;\n      margin-left: -1px;\n      margin-right: 1px;\n      margin-bottom: 1px;\n    }\n    [draggable=true].drag-target-top {\n      box-shadow: 0 -2px 0 #000;\n      position: relative; z-index: 20;\n    }\n    [draggable=true].drag-target-bottom {\n      box-shadow: 0 2px 0 #000;\n      position: relative; z-index: 20;\n    }\n  "],
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/section.component.ts":
/*!*********************************************************!*\
  !*** ./src/lib/src/widget-library/section.component.ts ***!
  \*********************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectionComponent = (function () {
    function SectionComponent(jsf) {
        this.jsf = jsf;
        this.expanded = true;
    }
    Object.defineProperty(SectionComponent.prototype, "sectionTitle", {
        get: function () {
            return this.options.notitle ? null : this.jsf.setItemTitle(this);
        },
        enumerable: true,
        configurable: true
    });
    SectionComponent.prototype.ngOnInit = function () {
        this.jsf.initializeControl(this);
        this.options = this.layoutNode.options || {};
        this.expanded = typeof this.options.expanded === 'boolean' ?
            this.options.expanded : !this.options.expandable;
        switch (this.layoutNode.type) {
            case 'fieldset':
            case 'array':
            case 'tab':
            case 'advancedfieldset':
            case 'authfieldset':
            case 'optionfieldset':
            case 'selectfieldset':
                this.containerType = 'fieldset';
                break;
            default:
                this.containerType = 'div';
                break;
        }
    };
    SectionComponent.prototype.toggleExpanded = function () {
        if (this.options.expandable) {
            this.expanded = !this.expanded;
        }
    };
    SectionComponent.prototype.getFlexAttribute = function (attribute) {
        var flexActive = this.layoutNode.type === 'flex' ||
            !!this.options.displayFlex ||
            this.options.display === 'flex';
        if (attribute !== 'flex' && !flexActive) {
            return null;
        }
        switch (attribute) {
            case 'is-flex':
                return flexActive;
            case 'display':
                return flexActive ? 'flex' : 'initial';
            case 'flex-direction':
            case 'flex-wrap':
                var index = ['flex-direction', 'flex-wrap'].indexOf(attribute);
                return (this.options['flex-flow'] || '').split(/\s+/)[index] ||
                    this.options[attribute] || ['column', 'nowrap'][index];
            case 'justify-content':
            case 'align-items':
            case 'align-content':
                return this.options[attribute];
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SectionComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SectionComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SectionComponent.prototype, "dataIndex", void 0);
    SectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'section-widget',
            template: "\n    <div *ngIf=\"containerType === 'div'\"\n      [class]=\"options?.htmlClass || ''\"\n      [class.expandable]=\"options?.expandable && !expanded\"\n      [class.expanded]=\"options?.expandable && expanded\">\n      <label *ngIf=\"sectionTitle\"\n        class=\"legend\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [innerHTML]=\"sectionTitle\"\n        (click)=\"toggleExpanded()\"></label>\n      <root-widget *ngIf=\"expanded\"\n        [dataIndex]=\"dataIndex\"\n        [layout]=\"layoutNode.items\"\n        [layoutIndex]=\"layoutIndex\"\n        [isFlexItem]=\"getFlexAttribute('is-flex')\"\n        [isOrderable]=\"options?.orderable\"\n        [class.form-flex-column]=\"getFlexAttribute('flex-direction') === 'column'\"\n        [class.form-flex-row]=\"getFlexAttribute('flex-direction') === 'row'\"\n        [style.align-content]=\"getFlexAttribute('align-content')\"\n        [style.align-items]=\"getFlexAttribute('align-items')\"\n        [style.display]=\"getFlexAttribute('display')\"\n        [style.flex-direction]=\"getFlexAttribute('flex-direction')\"\n        [style.flex-wrap]=\"getFlexAttribute('flex-wrap')\"\n        [style.justify-content]=\"getFlexAttribute('justify-content')\"></root-widget>\n    </div>\n    <fieldset *ngIf=\"containerType === 'fieldset'\"\n      [class]=\"options?.htmlClass || ''\"\n      [class.expandable]=\"options?.expandable && !expanded\"\n      [class.expanded]=\"options?.expandable && expanded\"\n      [disabled]=\"options?.readonly\">\n      <legend *ngIf=\"sectionTitle\"\n        class=\"legend\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [innerHTML]=\"sectionTitle\"\n        (click)=\"toggleExpanded()\"></legend>\n      <div *ngIf=\"options?.messageLocation !== 'bottom'\">\n        <p *ngIf=\"options?.description\"\n        class=\"help-block\"\n        [class]=\"options?.labelHelpBlockClass || ''\"\n        [innerHTML]=\"options?.description\"></p>\n      </div>\n      <root-widget *ngIf=\"expanded\"\n        [dataIndex]=\"dataIndex\"\n        [layout]=\"layoutNode.items\"\n        [layoutIndex]=\"layoutIndex\"\n        [isFlexItem]=\"getFlexAttribute('is-flex')\"\n        [isOrderable]=\"options?.orderable\"\n        [class.form-flex-column]=\"getFlexAttribute('flex-direction') === 'column'\"\n        [class.form-flex-row]=\"getFlexAttribute('flex-direction') === 'row'\"\n        [style.align-content]=\"getFlexAttribute('align-content')\"\n        [style.align-items]=\"getFlexAttribute('align-items')\"\n        [style.display]=\"getFlexAttribute('display')\"\n        [style.flex-direction]=\"getFlexAttribute('flex-direction')\"\n        [style.flex-wrap]=\"getFlexAttribute('flex-wrap')\"\n        [style.justify-content]=\"getFlexAttribute('justify-content')\"></root-widget>\n      <div *ngIf=\"options?.messageLocation === 'bottom'\">\n        <p *ngIf=\"options?.description\"\n        class=\"help-block\"\n        [class]=\"options?.labelHelpBlockClass || ''\"\n        [innerHTML]=\"options?.description\"></p>\n      </div>\n    </fieldset>",
            styles: ["\n    .legend { font-weight: bold; }\n    .expandable > legend:before, .expandable > label:before  { content: '\u25B6'; padding-right: .3em; }\n    .expanded > legend:before, .expanded > label:before  { content: '\u25BC'; padding-right: .2em; }\n  "],
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], SectionComponent);
    return SectionComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/select-framework.component.ts":
/*!******************************************************************!*\
  !*** ./src/lib/src/widget-library/select-framework.component.ts ***!
  \******************************************************************/
/*! exports provided: SelectFrameworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFrameworkComponent", function() { return SelectFrameworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectFrameworkComponent = (function () {
    function SelectFrameworkComponent(componentFactory, jsf) {
        this.componentFactory = componentFactory;
        this.jsf = jsf;
        this.newComponent = null;
    }
    SelectFrameworkComponent.prototype.ngOnInit = function () {
        this.updateComponent();
    };
    SelectFrameworkComponent.prototype.ngOnChanges = function () {
        this.updateComponent();
    };
    SelectFrameworkComponent.prototype.updateComponent = function () {
        if (!this.newComponent && this.jsf.framework) {
            this.newComponent = this.widgetContainer.createComponent(this.componentFactory.resolveComponentFactory(this.jsf.framework));
        }
        if (this.newComponent) {
            for (var _i = 0, _a = ['layoutNode', 'layoutIndex', 'dataIndex']; _i < _a.length; _i++) {
                var input = _a[_i];
                this.newComponent.instance[input] = this[input];
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectFrameworkComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SelectFrameworkComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SelectFrameworkComponent.prototype, "dataIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('widgetContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], SelectFrameworkComponent.prototype, "widgetContainer", void 0);
    SelectFrameworkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-framework-widget',
            template: "<div #widgetContainer></div>",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], SelectFrameworkComponent);
    return SelectFrameworkComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/select-widget.component.ts":
/*!***************************************************************!*\
  !*** ./src/lib/src/widget-library/select-widget.component.ts ***!
  \***************************************************************/
/*! exports provided: SelectWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectWidgetComponent", function() { return SelectWidgetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectWidgetComponent = (function () {
    function SelectWidgetComponent(componentFactory, jsf) {
        this.componentFactory = componentFactory;
        this.jsf = jsf;
        this.newComponent = null;
    }
    SelectWidgetComponent.prototype.ngOnInit = function () {
        this.updateComponent();
    };
    SelectWidgetComponent.prototype.ngOnChanges = function () {
        this.updateComponent();
    };
    SelectWidgetComponent.prototype.updateComponent = function () {
        if (!this.newComponent && (this.layoutNode || {}).widget) {
            this.newComponent = this.widgetContainer.createComponent(this.componentFactory.resolveComponentFactory(this.layoutNode.widget));
        }
        if (this.newComponent) {
            for (var _i = 0, _a = ['layoutNode', 'layoutIndex', 'dataIndex']; _i < _a.length; _i++) {
                var input = _a[_i];
                this.newComponent.instance[input] = this[input];
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectWidgetComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SelectWidgetComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SelectWidgetComponent.prototype, "dataIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('widgetContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], SelectWidgetComponent.prototype, "widgetContainer", void 0);
    SelectWidgetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-widget-widget',
            template: "<div #widgetContainer></div>",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], SelectWidgetComponent);
    return SelectWidgetComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/select.component.ts":
/*!********************************************************!*\
  !*** ./src/lib/src/widget-library/select.component.ts ***!
  \********************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./src/lib/src/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectComponent = (function () {
    function SelectComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
        this.selectList = [];
        this.isArray = _shared__WEBPACK_IMPORTED_MODULE_2__["isArray"];
    }
    SelectComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.selectList = Object(_shared__WEBPACK_IMPORTED_MODULE_2__["buildTitleMap"])(this.options.titleMap || this.options.enumNames, this.options.enum, !!this.options.required, !!this.options.flatList);
        this.jsf.initializeControl(this);
    };
    SelectComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SelectComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SelectComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SelectComponent.prototype, "dataIndex", void 0);
    SelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-widget',
            template: "\n    <div\n      [class]=\"options?.htmlClass || ''\">\n      <label *ngIf=\"options?.title\"\n        [attr.for]=\"'control' + layoutNode?._id\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></label>\n      <select *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.required]=\"options?.required\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\">\n        <ng-template ngFor let-selectItem [ngForOf]=\"selectList\">\n          <option *ngIf=\"!isArray(selectItem?.items)\"\n            [value]=\"selectItem?.value\">\n            <span [innerHTML]=\"selectItem?.name\"></span>\n          </option>\n          <optgroup *ngIf=\"isArray(selectItem?.items)\"\n            [label]=\"selectItem?.group\">\n            <option *ngFor=\"let subItem of selectItem.items\"\n              [value]=\"subItem?.value\">\n              <span [innerHTML]=\"subItem?.name\"></span>\n            </option>\n          </optgroup>\n        </ng-template>\n      </select>\n      <select *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.required]=\"options?.required\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        (change)=\"updateValue($event)\">\n        <ng-template ngFor let-selectItem [ngForOf]=\"selectList\">\n          <option *ngIf=\"!isArray(selectItem?.items)\"\n            [selected]=\"selectItem?.value === controlValue\"\n            [value]=\"selectItem?.value\">\n            <span [innerHTML]=\"selectItem?.name\"></span>\n          </option>\n          <optgroup *ngIf=\"isArray(selectItem?.items)\"\n            [label]=\"selectItem?.group\">\n            <option *ngFor=\"let subItem of selectItem.items\"\n              [attr.selected]=\"subItem?.value === controlValue\"\n              [value]=\"subItem?.value\">\n              <span [innerHTML]=\"subItem?.name\"></span>\n            </option>\n          </optgroup>\n        </ng-template>\n      </select>\n    </div>",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/submit.component.ts":
/*!********************************************************!*\
  !*** ./src/lib/src/widget-library/submit.component.ts ***!
  \********************************************************/
/*! exports provided: SubmitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitComponent", function() { return SubmitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony import */ var _shared_utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utility.functions */ "./src/lib/src/shared/utility.functions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubmitComponent = (function () {
    function SubmitComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    SubmitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
        if (Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_2__["hasOwn"])(this.options, 'disabled')) {
            this.controlDisabled = this.options.disabled;
        }
        else if (this.jsf.formOptions.disableInvalidSubmit) {
            this.controlDisabled = !this.jsf.isValid;
            this.jsf.isValidChanges.subscribe(function (isValid) { return _this.controlDisabled = !isValid; });
        }
        if (this.controlValue === null || this.controlValue === undefined) {
            this.controlValue = this.options.title;
        }
    };
    SubmitComponent.prototype.updateValue = function (event) {
        if (typeof this.options.onClick === 'function') {
            this.options.onClick(event);
        }
        else {
            this.jsf.updateValue(this, event.target.value);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SubmitComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SubmitComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SubmitComponent.prototype, "dataIndex", void 0);
    SubmitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'submit-widget',
            template: "\n    <div\n      [class]=\"options?.htmlClass || ''\">\n      <input\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.required]=\"options?.required\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [type]=\"layoutNode?.type\"\n        [value]=\"controlValue\"\n        (click)=\"updateValue($event)\">\n    </div>",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], SubmitComponent);
    return SubmitComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/tab.component.ts":
/*!*****************************************************!*\
  !*** ./src/lib/src/widget-library/tab.component.ts ***!
  \*****************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabComponent = (function () {
    function TabComponent(jsf) {
        this.jsf = jsf;
    }
    TabComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TabComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TabComponent.prototype, "dataIndex", void 0);
    TabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tab-widget',
            template: "\n    <div [class]=\"options?.htmlClass || ''\">\n      <root-widget\n        [dataIndex]=\"dataIndex\"\n        [layoutIndex]=\"layoutIndex\"\n        [layout]=\"layoutNode.items\"></root-widget>\n    </div>",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/tabs.component.ts":
/*!******************************************************!*\
  !*** ./src/lib/src/widget-library/tabs.component.ts ***!
  \******************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = (function () {
    function TabsComponent(jsf) {
        this.jsf = jsf;
        this.selectedItem = 0;
        this.showAddTab = true;
    }
    TabsComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.itemCount = this.layoutNode.items.length - 1;
        this.updateControl();
    };
    TabsComponent.prototype.select = function (index) {
        if (this.layoutNode.items[index].type === '$ref') {
            this.itemCount = this.layoutNode.items.length;
            this.jsf.addItem({
                layoutNode: this.layoutNode.items[index],
                layoutIndex: this.layoutIndex.concat(index),
                dataIndex: this.dataIndex.concat(index)
            });
            this.updateControl();
        }
        this.selectedItem = index;
    };
    TabsComponent.prototype.updateControl = function () {
        var lastItem = this.layoutNode.items[this.layoutNode.items.length - 1];
        if (lastItem.type === '$ref' &&
            this.itemCount >= (lastItem.options.maxItems || 1000)) {
            this.showAddTab = false;
        }
    };
    TabsComponent.prototype.setTabTitle = function (item, index) {
        return this.jsf.setArrayItemTitle(this, item, index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabsComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TabsComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TabsComponent.prototype, "dataIndex", void 0);
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tabs-widget',
            template: "\n    <ul\n      [class]=\"options?.labelHtmlClass || ''\">\n      <li *ngFor=\"let item of layoutNode?.items; let i = index\"\n        [class]=\"(options?.itemLabelHtmlClass || '') + (selectedItem === i ?\n          (' ' + (options?.activeClass || '') + ' ' + (options?.style?.selected || '')) :\n          (' ' + options?.style?.unselected))\"\n        role=\"presentation\"\n        data-tabs>\n        <a *ngIf=\"showAddTab || item.type !== '$ref'\"\n           [class]=\"'nav-link' + (selectedItem === i ? (' ' + options?.activeClass + ' ' + options?.style?.selected) :\n            (' ' + options?.style?.unselected))\"\n          [innerHTML]=\"setTabTitle(item, i)\"\n          (click)=\"select(i)\"></a>\n      </li>\n    </ul>\n\n    <div *ngFor=\"let layoutItem of layoutNode?.items; let i = index\"\n      [class]=\"options?.htmlClass || ''\">\n\n      <select-framework-widget *ngIf=\"selectedItem === i\"\n        [class]=\"(options?.fieldHtmlClass || '') +\n          ' ' + (options?.activeClass || '') +\n          ' ' + (options?.style?.selected || '')\"\n        [dataIndex]=\"layoutNode?.dataType === 'array' ? (dataIndex || []).concat(i) : dataIndex\"\n        [layoutIndex]=\"(layoutIndex || []).concat(i)\"\n        [layoutNode]=\"layoutItem\"></select-framework-widget>\n\n    </div>",
            styles: [" a { cursor: pointer; } "],
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/template.component.ts":
/*!**********************************************************!*\
  !*** ./src/lib/src/widget-library/template.component.ts ***!
  \**********************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemplateComponent = (function () {
    function TemplateComponent(componentFactory, jsf) {
        this.componentFactory = componentFactory;
        this.jsf = jsf;
        this.newComponent = null;
    }
    TemplateComponent.prototype.ngOnInit = function () {
        this.updateComponent();
    };
    TemplateComponent.prototype.ngOnChanges = function () {
        this.updateComponent();
    };
    TemplateComponent.prototype.updateComponent = function () {
        if (!this.newComponent && this.layoutNode.options.template) {
            this.newComponent = this.widgetContainer.createComponent(this.componentFactory.resolveComponentFactory(this.layoutNode.options.template));
        }
        if (this.newComponent) {
            for (var _i = 0, _a = ['layoutNode', 'layoutIndex', 'dataIndex']; _i < _a.length; _i++) {
                var input = _a[_i];
                this.newComponent.instance[input] = this[input];
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemplateComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TemplateComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TemplateComponent.prototype, "dataIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('widgetContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], TemplateComponent.prototype, "widgetContainer", void 0);
    TemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'template-widget',
            template: "<div #widgetContainer></div>",
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/textarea.component.ts":
/*!**********************************************************!*\
  !*** ./src/lib/src/widget-library/textarea.component.ts ***!
  \**********************************************************/
/*! exports provided: TextareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaComponent", function() { return TextareaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextareaComponent = (function () {
    function TextareaComponent(jsf) {
        this.jsf = jsf;
        this.controlDisabled = false;
        this.boundControl = false;
    }
    TextareaComponent.prototype.ngOnInit = function () {
        this.options = this.layoutNode.options || {};
        this.jsf.initializeControl(this);
    };
    TextareaComponent.prototype.updateValue = function (event) {
        this.jsf.updateValue(this, event.target.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TextareaComponent.prototype, "layoutNode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TextareaComponent.prototype, "layoutIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TextareaComponent.prototype, "dataIndex", void 0);
    TextareaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'textarea-widget',
            template: "\n    <div\n      [class]=\"options?.htmlClass || ''\">\n      <label *ngIf=\"options?.title\"\n        [attr.for]=\"'control' + layoutNode?._id\"\n        [class]=\"options?.labelHtmlClass || ''\"\n        [style.display]=\"options?.notitle ? 'none' : ''\"\n        [innerHTML]=\"options?.title\"></label>\n      <textarea *ngIf=\"boundControl\"\n        [formControl]=\"formControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.maxlength]=\"options?.maxLength\"\n        [attr.minlength]=\"options?.minLength\"\n        [attr.pattern]=\"options?.pattern\"\n        [attr.placeholder]=\"options?.placeholder\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.required]=\"options?.required\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"></textarea>\n      <textarea *ngIf=\"!boundControl\"\n        [attr.aria-describedby]=\"'control' + layoutNode?._id + 'Status'\"\n        [attr.maxlength]=\"options?.maxLength\"\n        [attr.minlength]=\"options?.minLength\"\n        [attr.pattern]=\"options?.pattern\"\n        [attr.placeholder]=\"options?.placeholder\"\n        [attr.readonly]=\"options?.readonly ? 'readonly' : null\"\n        [attr.required]=\"options?.required\"\n        [class]=\"options?.fieldHtmlClass || ''\"\n        [disabled]=\"controlDisabled\"\n        [id]=\"'control' + layoutNode?._id\"\n        [name]=\"controlName\"\n        [value]=\"controlValue\"\n        (input)=\"updateValue($event)\">{{controlValue}}</textarea>\n    </div>",
        }),
        __metadata("design:paramtypes", [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_1__["JsonSchemaFormService"]])
    ], TextareaComponent);
    return TextareaComponent;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/widget-library.module.ts":
/*!*************************************************************!*\
  !*** ./src/lib/src/widget-library/widget-library.module.ts ***!
  \*************************************************************/
/*! exports provided: WidgetLibraryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetLibraryModule", function() { return WidgetLibraryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_orderable_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/orderable.directive */ "./src/lib/src/shared/orderable.directive.ts");
/* harmony import */ var _json_schema_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../json-schema-form.service */ "./src/lib/src/json-schema-form.service.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index */ "./src/lib/src/widget-library/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WidgetLibraryModule = (function () {
    function WidgetLibraryModule() {
    }
    WidgetLibraryModule_1 = WidgetLibraryModule;
    WidgetLibraryModule.forRoot = function () {
        return {
            ngModule: WidgetLibraryModule_1,
            providers: [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_4__["JsonSchemaFormService"]]
        };
    };
    WidgetLibraryModule = WidgetLibraryModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
            declarations: _index__WEBPACK_IMPORTED_MODULE_5__["BASIC_WIDGETS"].concat([_shared_orderable_directive__WEBPACK_IMPORTED_MODULE_3__["OrderableDirective"]]),
            exports: _index__WEBPACK_IMPORTED_MODULE_5__["BASIC_WIDGETS"].concat([_shared_orderable_directive__WEBPACK_IMPORTED_MODULE_3__["OrderableDirective"]]),
            entryComponents: _index__WEBPACK_IMPORTED_MODULE_5__["BASIC_WIDGETS"].slice(),
            providers: [_json_schema_form_service__WEBPACK_IMPORTED_MODULE_4__["JsonSchemaFormService"]]
        })
    ], WidgetLibraryModule);
    return WidgetLibraryModule;
    var WidgetLibraryModule_1;
}());



/***/ }),

/***/ "./src/lib/src/widget-library/widget-library.service.ts":
/*!**************************************************************!*\
  !*** ./src/lib/src/widget-library/widget-library.service.ts ***!
  \**************************************************************/
/*! exports provided: WidgetLibraryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetLibraryService", function() { return WidgetLibraryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_utility_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utility.functions */ "./src/lib/src/shared/utility.functions.ts");
/* harmony import */ var _add_reference_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-reference.component */ "./src/lib/src/widget-library/add-reference.component.ts");
/* harmony import */ var _one_of_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./one-of.component */ "./src/lib/src/widget-library/one-of.component.ts");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.component */ "./src/lib/src/widget-library/button.component.ts");
/* harmony import */ var _checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkbox.component */ "./src/lib/src/widget-library/checkbox.component.ts");
/* harmony import */ var _checkboxes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkboxes.component */ "./src/lib/src/widget-library/checkboxes.component.ts");
/* harmony import */ var _file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file.component */ "./src/lib/src/widget-library/file.component.ts");
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input.component */ "./src/lib/src/widget-library/input.component.ts");
/* harmony import */ var _message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./message.component */ "./src/lib/src/widget-library/message.component.ts");
/* harmony import */ var _none_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./none.component */ "./src/lib/src/widget-library/none.component.ts");
/* harmony import */ var _number_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./number.component */ "./src/lib/src/widget-library/number.component.ts");
/* harmony import */ var _radios_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./radios.component */ "./src/lib/src/widget-library/radios.component.ts");
/* harmony import */ var _root_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./root.component */ "./src/lib/src/widget-library/root.component.ts");
/* harmony import */ var _section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./section.component */ "./src/lib/src/widget-library/section.component.ts");
/* harmony import */ var _select_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./select.component */ "./src/lib/src/widget-library/select.component.ts");
/* harmony import */ var _select_framework_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./select-framework.component */ "./src/lib/src/widget-library/select-framework.component.ts");
/* harmony import */ var _select_widget_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./select-widget.component */ "./src/lib/src/widget-library/select-widget.component.ts");
/* harmony import */ var _submit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./submit.component */ "./src/lib/src/widget-library/submit.component.ts");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tabs.component */ "./src/lib/src/widget-library/tabs.component.ts");
/* harmony import */ var _template_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./template.component */ "./src/lib/src/widget-library/template.component.ts");
/* harmony import */ var _textarea_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./textarea.component */ "./src/lib/src/widget-library/textarea.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var WidgetLibraryService = (function () {
    function WidgetLibraryService() {
        this.defaultWidget = 'text';
        this.widgetLibrary = {
            'none': _none_component__WEBPACK_IMPORTED_MODULE_10__["NoneComponent"],
            'root': _root_component__WEBPACK_IMPORTED_MODULE_13__["RootComponent"],
            'select-framework': _select_framework_component__WEBPACK_IMPORTED_MODULE_16__["SelectFrameworkComponent"],
            'select-widget': _select_widget_component__WEBPACK_IMPORTED_MODULE_17__["SelectWidgetComponent"],
            '$ref': _add_reference_component__WEBPACK_IMPORTED_MODULE_2__["AddReferenceComponent"],
            'email': 'text',
            'integer': 'number',
            'number': _number_component__WEBPACK_IMPORTED_MODULE_11__["NumberComponent"],
            'password': 'text',
            'search': 'text',
            'tel': 'text',
            'text': _input_component__WEBPACK_IMPORTED_MODULE_8__["InputComponent"],
            'url': 'text',
            'color': 'text',
            'date': 'text',
            'datetime': 'text',
            'datetime-local': 'text',
            'month': 'text',
            'range': 'number',
            'time': 'text',
            'week': 'text',
            'checkbox': _checkbox_component__WEBPACK_IMPORTED_MODULE_5__["CheckboxComponent"],
            'file': _file_component__WEBPACK_IMPORTED_MODULE_7__["FileComponent"],
            'hidden': 'text',
            'image': 'text',
            'radio': 'radios',
            'reset': 'submit',
            'submit': _submit_component__WEBPACK_IMPORTED_MODULE_18__["SubmitComponent"],
            'button': _button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
            'select': _select_component__WEBPACK_IMPORTED_MODULE_15__["SelectComponent"],
            'textarea': _textarea_component__WEBPACK_IMPORTED_MODULE_21__["TextareaComponent"],
            'checkboxes': _checkboxes_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxesComponent"],
            'checkboxes-inline': 'checkboxes',
            'checkboxbuttons': 'checkboxes',
            'radios': _radios_component__WEBPACK_IMPORTED_MODULE_12__["RadiosComponent"],
            'radios-inline': 'radios',
            'radiobuttons': 'radios',
            'section': _section_component__WEBPACK_IMPORTED_MODULE_14__["SectionComponent"],
            'div': 'section',
            'fieldset': 'section',
            'flex': 'section',
            'one-of': _one_of_component__WEBPACK_IMPORTED_MODULE_3__["OneOfComponent"],
            'array': 'section',
            'tabarray': 'tabs',
            'tab': 'section',
            'tabs': _tabs_component__WEBPACK_IMPORTED_MODULE_19__["TabsComponent"],
            'message': _message_component__WEBPACK_IMPORTED_MODULE_9__["MessageComponent"],
            'help': 'message',
            'msg': 'message',
            'html': 'message',
            'template': _template_component__WEBPACK_IMPORTED_MODULE_20__["TemplateComponent"],
            'advancedfieldset': 'section',
            'authfieldset': 'section',
            'optionfieldset': 'one-of',
            'selectfieldset': 'one-of',
            'conditional': 'section',
            'actions': 'section',
            'tagsinput': 'section',
            'updown': 'number',
            'date-time': 'datetime-local',
            'alt-datetime': 'datetime-local',
            'alt-date': 'date',
            'wizard': 'section',
            'textline': 'text',
        };
        this.registeredWidgets = {};
        this.frameworkWidgets = {};
        this.activeWidgets = {};
        this.setActiveWidgets();
    }
    WidgetLibraryService.prototype.setActiveWidgets = function () {
        this.activeWidgets = Object.assign({}, this.widgetLibrary, this.frameworkWidgets, this.registeredWidgets);
        for (var _i = 0, _a = Object.keys(this.activeWidgets); _i < _a.length; _i++) {
            var widgetName = _a[_i];
            var widget = this.activeWidgets[widgetName];
            if (typeof widget === 'string') {
                var usedAliases = [];
                while (typeof widget === 'string' && !usedAliases.includes(widget)) {
                    usedAliases.push(widget);
                    widget = this.activeWidgets[widget];
                }
                if (typeof widget !== 'string') {
                    this.activeWidgets[widgetName] = widget;
                }
            }
        }
        return true;
    };
    WidgetLibraryService.prototype.setDefaultWidget = function (type) {
        if (!this.hasWidget(type)) {
            return false;
        }
        this.defaultWidget = type;
        return true;
    };
    WidgetLibraryService.prototype.hasWidget = function (type, widgetSet) {
        if (widgetSet === void 0) { widgetSet = 'activeWidgets'; }
        if (!type || typeof type !== 'string') {
            return false;
        }
        return Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(this[widgetSet], type);
    };
    WidgetLibraryService.prototype.hasDefaultWidget = function (type) {
        return this.hasWidget(type, 'widgetLibrary');
    };
    WidgetLibraryService.prototype.registerWidget = function (type, widget) {
        if (!type || !widget || typeof type !== 'string') {
            return false;
        }
        this.registeredWidgets[type] = widget;
        return this.setActiveWidgets();
    };
    WidgetLibraryService.prototype.unRegisterWidget = function (type) {
        if (!Object(_shared_utility_functions__WEBPACK_IMPORTED_MODULE_1__["hasOwn"])(this.registeredWidgets, type)) {
            return false;
        }
        delete this.registeredWidgets[type];
        return this.setActiveWidgets();
    };
    WidgetLibraryService.prototype.unRegisterAllWidgets = function (unRegisterFrameworkWidgets) {
        if (unRegisterFrameworkWidgets === void 0) { unRegisterFrameworkWidgets = true; }
        this.registeredWidgets = {};
        if (unRegisterFrameworkWidgets) {
            this.frameworkWidgets = {};
        }
        return this.setActiveWidgets();
    };
    WidgetLibraryService.prototype.registerFrameworkWidgets = function (widgets) {
        if (widgets === null || typeof widgets !== 'object') {
            widgets = {};
        }
        this.frameworkWidgets = widgets;
        return this.setActiveWidgets();
    };
    WidgetLibraryService.prototype.unRegisterFrameworkWidgets = function () {
        if (Object.keys(this.frameworkWidgets).length) {
            this.frameworkWidgets = {};
            return this.setActiveWidgets();
        }
        return false;
    };
    WidgetLibraryService.prototype.getWidget = function (type, widgetSet) {
        if (widgetSet === void 0) { widgetSet = 'activeWidgets'; }
        if (this.hasWidget(type, widgetSet)) {
            return this[widgetSet][type];
        }
        else if (this.hasWidget(this.defaultWidget, widgetSet)) {
            return this[widgetSet][this.defaultWidget];
        }
        else {
            return null;
        }
    };
    WidgetLibraryService.prototype.getAllWidgets = function () {
        return {
            widgetLibrary: this.widgetLibrary,
            registeredWidgets: this.registeredWidgets,
            frameworkWidgets: this.frameworkWidgets,
            activeWidgets: this.activeWidgets,
        };
    };
    WidgetLibraryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WidgetLibraryService);
    return WidgetLibraryService;
}());



/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/demo/main.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Incredi\src\angulardynamic\SchemaForm\src\demo\main.ts */"./src/demo/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map