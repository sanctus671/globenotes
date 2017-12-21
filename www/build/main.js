webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__saved_saved__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__saved_saved__["a" /* SavedPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Taylor\Documents\Websites\globenotes\src\pages\tabs\tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Dictate" tabIcon="mic"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Saved" tabIcon="star"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"D:\Taylor\Documents\Websites\globenotes\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SavedPage = (function () {
    function SavedPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SavedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-saved',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\globenotes\src\pages\saved\saved.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Saved\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n`/*ion-inline-end:"D:\Taylor\Documents\Websites\globenotes\src\pages\saved\saved.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SavedPage);
    return SavedPage;
}());

//# sourceMappingURL=saved.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\globenotes\src\pages\settings\settings.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"D:\Taylor\Documents\Websites\globenotes\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, plt, cd, _zone, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.cd = cd;
        this._zone = _zone;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.properties = { isRecording: false, language: "en-US", isIos: this.plt.is('ios'), currentMatch: "", errorRestarting: false };
        this.notes = [];
        this.languages = [];
        this.storage.get("notes").then(function (data) {
            if (data) {
                _this.notes = data;
            }
        });
        this.setSupportedLanguages();
        this.plt.ready().then(function () {
            console.log(window);
            if (window.SpeechRecognition) {
                _this.setupRecognition();
            }
            console.log(audioinput);
            console.log(AudioHandler);
        });
    }
    HomePage.prototype.setupRecognition = function () {
        var _this = this;
        this.recognitionObject = new window.SpeechRecognition();
        this.recognitionObject.continuous = true;
        this.recognitionObject.lang = this.properties.language;
        this.recognitionObject.maxAlternatives = 3;
        this.recognitionObject.onnomatch = (function (event) {
            console.log('No match found.');
        });
        this.recognitionObject.onstart = (function (event) {
            console.log('Started recognition.');
            _this.properties.errorRestarting = false;
        });
        this.recognitionObject.onend = (function (event) {
            console.log('Stopped recognition.');
            if (_this.properties.isRecording) {
                console.log("Attempting to restart.");
                setTimeout(function () { _this.recognitionObject.start(); }, 300);
                var errorCount_1 = 0;
                var errorLoop_1 = setInterval(function () {
                    console.log("is error loop");
                    if (errorCount_1 > 10) {
                        //recognition service crash, restart it
                        console.log("service crashed");
                        //setTimeout(() => {this.recognitionObject.start();},200);
                        clearInterval(errorLoop_1);
                    }
                    else if (_this.properties.errorRestarting) {
                        _this.recognitionObject.start();
                    }
                    else {
                        console.log("closing error loop");
                        clearInterval(errorLoop_1);
                    }
                    errorCount_1 += 1;
                }, 300);
            }
        });
        this.recognitionObject.onerror = (function (event) {
            console.log('Error...' + event.error);
            if (event.error === "RecognitionService busy") {
                console.log("setting error property to true");
                _this.properties.errorRestarting = true;
            }
        });
        this.recognitionObject.onresult = (function (event) {
            if (event.results) {
                console.log("Results found");
                console.log(event);
                var result_1 = event.results[0][0].transcript;
                _this._zone.run(function () {
                    _this.properties.currentMatch = _this.properties.currentMatch ? _this.properties.currentMatch + " " + result_1 + "." : result_1 + ".";
                    console.log(_this.properties.currentMatch);
                });
            }
        });
    };
    HomePage.prototype.toggleListening = function () {
        if (this.properties.isRecording) {
            this.properties.isRecording = false;
            this.properties.errorRestarting = false;
        }
        else {
            if (this.properties.currentMatch) {
                console.log(this.properties.currentMatch);
                this.notes.push(this.properties.currentMatch);
                this.storage.set("notes", this.notes);
                this.properties.currentMatch = "";
            }
            this.properties.isRecording = true;
            this.recognitionObject.start();
        }
    };
    HomePage.prototype.changeLanguage = function () {
        var _this = this;
        var data = {
            title: "Change Language",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log(data);
                        _this.properties.language = data;
                        _this.recognitionObject.lang = _this.properties.language;
                    }
                }
            ],
            inputs: []
        };
        for (var _i = 0, _a = this.languages; _i < _a.length; _i++) {
            var language = _a[_i];
            data.inputs.push({ type: 'radio', label: language.name, value: language.code, checked: language.code === this.properties.language });
        }
        var alert = this.alertCtrl.create(data);
        alert.present();
    };
    HomePage.prototype.formatLanguage = function () {
        var formatted = "";
        for (var _i = 0, _a = this.languages; _i < _a.length; _i++) {
            var language = _a[_i];
            if (language.code === this.properties.language) {
                formatted = language.name;
                break;
            }
        }
        return formatted;
    };
    HomePage.prototype.setSupportedLanguages = function () {
        this.languages = [
            { name: "Romanian", code: "ro-RO" },
            { name: "English (Indian)", code: "en-IN" },
            { name: "Hebrew (Israel)", code: "he-IL" },
            { name: "Turkish", code: "tr-TR" },
            { name: "English (New Zealand)", code: "en-NZ" },
            { name: "Swedish (Sweden)", code: "sv-SE" },
            { name: "French (Belgium)", code: "fr-BE" },
            { name: "Italian (Switzerland)", code: "it-CH" },
            { name: "German (Switzerland)", code: "de-CH" },
            { name: "Polish", code: "pl-PL" },
            { name: "Portuguese", code: "pt-PT" },
            { name: "Ukrainian (Ukraine)", code: "uk-UA" },
            { name: "Finnish (Finland)", code: "fi-FI" },
            { name: "Vietnamese (Viet Nam)", code: "vi-VN" },
            { name: "Arabic (Saudi Arabia)", code: "ar-SA" },
            { name: "Chinese (Taiwan)", code: "zh-TW" },
            { name: "Spanish (Castilian)", code: "es-ES" },
            { name: "English (British)", code: "en-GB" },
            { name: "Traditional Chinese", code: "yue-CN" },
            { name: "Thai", code: "th-TH" },
            { name: "English (Indonesia)", code: "en-ID" },
            { name: "Japanese (Japan)", code: "ja-JP" },
            { name: "English (Saudi Arabia)", code: "en-SA" },
            { name: "English (U.A.E.)", code: "en-AE" },
            { name: "Danish (Denmark)", code: "da-DK" },
            { name: "French (France)", code: "fr-FR" },
            { name: "Slovak", code: "sk-SK" },
            { name: "German (Austria)", code: "de-AT" },
            { name: "Malay", code: "ms-MY" },
            { name: "Hungarian", code: "hu-HU" },
            { name: "Catalan", code: "ca-ES" },
            { name: "Korean", code: "ko-KR" },
            { name: "French (Switzerland)", code: "fr-CH" },
            { name: "Norwegian", code: "nb-NO" },
            { name: "English (Australia)", code: "en-AU" },
            { name: "Greek", code: "el-GR" },
            { name: "Russian", code: "ru-RU" },
            { name: "Chinese (Mainland China)", code: "zh-CN" },
            { name: "English (American)", code: "en-US" },
            { name: "English (Ireland)", code: "en-IE" },
            { name: "Dutch (Belgium)", code: "nl-BE" },
            { name: "Spanish (Colombian)", code: "es-CO" },
            { name: "Portuguese (Brazilian)", code: "pt-BR" },
            { name: "Spanish (American)", code: "es-US" },
            { name: "Croatian", code: "hr-HR" },
            { name: "French (Canada)", code: "fr-CA" },
            { name: "Chinese (Hong Kong)", code: "zh-HK" },
            { name: "Spanish (Mexican)", code: "es-MX" },
            { name: "Indonesian", code: "id-ID" },
            { name: "Italian (Italy)", code: "it-IT" },
            { name: "Dutch (Netherlands)", code: "nl-NL" },
            { name: "Czech (Czech Republic)", code: "cs-CZ" },
            { name: "English (South Africa)", code: "en-ZA" },
            { name: "Spanish (Chile)", code: "es-CL" },
            { name: "English (Philippines)", code: "en-PH" },
            { name: "English (Canadian)", code: "en-CA" },
            { name: "English (Singapore)", code: "en-SG" },
            { name: "German", code: "de-DE" }
        ];
        this.languages.sort(function (a, b) {
            return a.name == b.name ? 0 : +(a.name > b.name) || -1;
            ;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\globenotes\src\pages\home\home.html"*/`<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Globe Notes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card class="dictate-card">\n        <ion-card-header>\n            <a (click)="changeLanguage()">{{formatLanguage()}}</a>\n            <div class="actions">\n                <ion-icon name="star-outline"></ion-icon>\n                <ion-icon name="copy"></ion-icon>\n                <ion-icon name="send"></ion-icon>\n            </div>\n        </ion-card-header>\n        <ion-card-content>\n            <p *ngIf="!properties.currentMatch">Tap the mic to start dictating...</p>\n            <p *ngIf="properties.currentMatch">{{properties.currentMatch}}</p>\n        </ion-card-content>\n        <div class="card-footer">\n            Translate\n        </div>\n        <div class="dictate-button">\n            <button ion-fab (click)="toggleListening()" [color]="properties.isRecording ? \'danger\' : \'primary\'"><ion-icon name="mic"></ion-icon></button>\n        </div>\n    </ion-card>\n    \n    <div class="previous">\n        <ion-card>\n            <ion-card-content *ngFor="let note of notes">\n                <p>{{note}}</p>            \n                <ion-buttons end>\n                    <button ion-button icon-only clear>\n                        <ion-icon name="star-outline"></ion-icon>\n                    </button>                \n                </ion-buttons>\n            </ion-card-content>\n\n        </ion-card>\n    </div>\n    \n    \n</ion-content>\n`/*ion-inline-end:"D:\Taylor\Documents\Websites\globenotes\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_saved_saved__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_saved_saved__["a" /* SavedPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_saved_saved__["a" /* SavedPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Taylor\Documents\Websites\globenotes\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"D:\Taylor\Documents\Websites\globenotes\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map