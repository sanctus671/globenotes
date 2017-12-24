webpackJsonp([0],{

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
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
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__saved_saved__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(203);
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

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(103);
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
    function SavedPage(navCtrl, storage, alertCtrl, clipboard, sharer, toastCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.clipboard = clipboard;
        this.sharer = sharer;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.properties = { noteDeleted: false, notePosition: 0 };
        this.languages = [];
        this.storage.get("languages").then(function (data) {
            if (data) {
                _this.languages = data;
            }
        });
    }
    SavedPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get("savedNotes").then(function (notes) {
            _this.notes = notes;
        });
    };
    SavedPage.prototype.copyNote = function (note) {
        var _this = this;
        console.log("copying");
        this.clipboard.copy(note).then(function () {
            var toast = _this.toastCtrl.create({
                message: 'Note copied to clipboard',
                duration: 1000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    SavedPage.prototype.shareNote = function (note) {
        console.log("sharing");
        this.sharer.share(note);
    };
    SavedPage.prototype.dragNote = function (ev, index, note) {
        var _this = this;
        var element = ev._elementRef.nativeElement;
        element.style.opacity = 1 - (ev._openAmount / 200);
        this.properties.notePosition = ev._openAmount;
        if (ev._openAmount >= (100) && !this.properties.noteDeleted) {
            this.properties.noteDeleted = true;
            setTimeout(function () {
                if (_this.properties.notePosition < 100) {
                    return;
                }
                var id = note.id;
                _this.storage.get("notes").then(function (data) {
                    if (data) {
                        console.log(data);
                        console.log(id);
                        for (var index in data) {
                            if (data[index].id === id) {
                                data[index].saved = false;
                                _this.storage.set("notes", data);
                                _this.events.publish('notes:updated', data);
                                break;
                            }
                        }
                    }
                });
                _this.notes.splice(index, 1);
                _this.storage.set("savedNotes", _this.notes);
                var toast = _this.toastCtrl.create({
                    message: 'Note removed',
                    duration: 1000,
                    position: 'bottom'
                });
                toast.present();
                _this.properties.noteDeleted = false;
            }, 500);
        }
    };
    SavedPage.prototype.formatLanguage = function (code) {
        var formatted = "";
        for (var _i = 0, _a = this.languages; _i < _a.length; _i++) {
            var language = _a[_i];
            if (language.code === code) {
                formatted = language.name;
                break;
            }
        }
        return formatted;
    };
    SavedPage.prototype.removeTranslation = function (index, translationArray) {
        translationArray.splice(index, 1);
        this.storage.set("savedNotes", this.notes);
    };
    SavedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-saved',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\globenotes\src\pages\saved\saved.html"*/`<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Saved\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list class="previous saved-notes">\n        <ion-item-sliding #item *ngFor="let note of notes; let i = index" (ionDrag)="dragNote($event, i, note)">\n        <ion-item>\n            <ion-card>\n\n                \n            <ion-card-header>\n                <a>{{formatLanguage(note.language)}}</a>\n                <div class="actions"> \n                    <button ion-button icon-only clear small (click)="copyNote(note.note)">\n                        <ion-icon name="copy"></ion-icon>\n                    </button> \n                    <button ion-button icon-only clear small (click)="shareNote(note.note)">\n                        <ion-icon name="send"></ion-icon>\n                    </button>               \n\n\n\n                </div>\n            </ion-card-header>                \n                \n                  \n            <ion-card-content>\n                <p>{{note.note}}</p>  \n                <div class="language-translations">\n                    <div class="translation" *ngFor="let translation of note.translations;let i = index">\n                        <span class="translation-title">\n                            <span class="language">{{formatLanguage(translation.code)}}</span>\n                            <button ion-button clear small color="danger" (click)="removeTranslation(i, note.translations)">Remove</button>\n                        </span>\n                         <p>{{translation.text}}</p>\n\n                    </div>\n                </div>                \n                \n                \n            </ion-card-content>\n\n        </ion-card>\n            </ion-item>\n    <ion-item-options side="right">\n        <div class="fullwidth-slide"></div>\n    </ion-item-options>\n\n            \n            </ion-item-sliding>\n    </ion-list>  \n    \n    \n    \n</ion-content>\n`/*ion-inline-end:"D:\Taylor\Documents\Websites\globenotes\src\pages\saved\saved.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_clipboard__["a" /* Clipboard */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
    ], SavedPage);
    return SavedPage;
}());

//# sourceMappingURL=saved.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
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
    function SettingsPage(navCtrl, storage, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.events = events;
        this.languages = [];
        this.settings = { language: "EN", translations: [], historyMax: 10 };
        this.storage.get("languages").then(function (data) {
            if (data) {
                _this.languages = data;
                console.log(_this.languages);
            }
        });
        this.storage.get("settings").then(function (data) {
            if (data) {
                _this.settings = data;
            }
        });
    }
    SettingsPage.prototype.updateSettings = function () {
        console.log(this.settings);
        this.storage.set("settings", this.settings);
        this.events.publish('settings:updated', this.settings);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\globenotes\src\pages\settings\settings.html"*/`<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Settings\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    \n<ion-list class="settings-list">\n    <ion-item>\n        <ion-label>Default Language</ion-label>\n        <ion-select [(ngModel)]="settings.language" (ionChange)="updateSettings()">\n            <ion-option *ngFor="let language of languages" value="{{language.code}}">{{language.name}}</ion-option>\n        </ion-select>\n    </ion-item>\n    \n    \n    <ion-item>\n        <ion-label>Default Translations</ion-label>\n        <ion-select [(ngModel)]="settings.translations" multiple="true" (ionChange)="updateSettings()">\n            <ion-option *ngFor="let language of languages" value="{{language.code}}">{{language.name}}</ion-option>\n        </ion-select>\n    </ion-item>   \n    \n  <ion-item>\n    <ion-label>Max Note History</ion-label>\n    <ion-input type="number" [(ngModel)]="settings.historyMax" (change)="updateSettings()"></ion-input>\n  </ion-item>    \n    \n    \n</ion-list>\n    \n    \n</ion-content>\n`/*ion-inline-end:"D:\Taylor\Documents\Websites\globenotes\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _c || Object])
    ], SettingsPage);
    return SettingsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_edit_text_edit_text__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_translate_translate__ = __webpack_require__(205);
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
    function HomePage(navCtrl, plt, cd, _zone, storage, alertCtrl, clipboard, sharer, toastCtrl, events, modalCtrl, translateProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.cd = cd;
        this._zone = _zone;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.clipboard = clipboard;
        this.sharer = sharer;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.translateProvider = translateProvider;
        this.properties = { isRecording: false, language: "EN", isIos: this.plt.is('ios'), previousDelete: false, previousNotePosition: 0,
            translations: [],
            currentMatch: "",
            partialMatch: "", errorRestarting: false, micVolume: 0, currentSaved: false, currentId: false };
        this.notes = [];
        this.languages = [];
        this.settings = { language: "", translations: [], historyMax: 10 };
        this.storage.get("settings").then(function (data) {
            if (data) {
                _this.settings = data;
                _this.properties.language = _this.settings.language;
                _this.updateSettingsTranslations();
            }
        });
        this.storage.get("notes").then(function (data) {
            if (data) {
                _this.notes = data;
                _this.scrollBottom();
            }
        });
        this.setSupportedLanguages();
        this.plt.ready().then(function () {
            console.log(window);
            if (window.SpeechRecognition) {
                _this.setupRecognition();
            }
        });
        events.subscribe('notes:updated', function (notes) {
            _this.notes = notes;
        });
        events.subscribe('settings:updated', function (settings) {
            _this.settings = settings;
            _this.updateSettingsTranslations();
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
            _this.properties.partialMatch = "";
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
            _this.properties.partialMatch = "";
            if (event.error === "RecognitionService busy") {
                console.log("setting error property to true");
                _this.properties.errorRestarting = true;
            }
        });
        this.recognitionObject.onresult = (function (event) {
            if (event.results) {
                console.log("Results found");
                console.log(event);
                _this.properties.partialMatch = "";
                var result_1 = event.results[0][0].transcript;
                _this._zone.run(function () {
                    _this.properties.currentMatch = _this.properties.currentMatch ? _this.properties.currentMatch + " " + (result_1.charAt(0).toUpperCase() + result_1.slice(1)) + "." : result_1 + ".";
                    _this.calculateTranslations();
                    _this.scrollBottom();
                    console.log(_this.properties.currentMatch);
                });
            }
        });
        this.recognitionObject.onpartial = (function (event) {
            if (event.results) {
                console.log("Partial results found");
                console.log(event);
                var result_2 = event.results[0][0].transcript;
                _this._zone.run(function () {
                    _this.properties.partialMatch = result_2;
                    _this.scrollBottom();
                });
            }
        });
    };
    HomePage.prototype.toggleListening = function () {
        if (this.properties.isRecording) {
            this.properties.isRecording = false;
            this.properties.errorRestarting = false;
            setTimeout(function () { AudioHandler.unmuteApp(); }, 500);
        }
        else {
            if (this.properties.currentMatch) {
                console.log(this.properties.currentMatch);
                this.notes.unshift({ note: this.properties.currentMatch, saved: this.properties.currentSaved, id: this.properties.currentId, language: this.properties.language, translations: this.properties.translations });
                if (this.notes.length > this.settings.historyMax) {
                    this.notes.pop();
                }
                this.storage.set("notes", this.notes);
                this.scrollBottom();
                this.properties.currentMatch = "";
                this.properties.translations = [];
                this.updateSettingsTranslations();
                this.properties.currentSaved = false;
                this.properties.currentId = false;
            }
            this.properties.isRecording = true;
            this.recognitionObject.start();
            AudioHandler.muteApp();
        }
    };
    HomePage.prototype.updateSettingsTranslations = function () {
        var requireUpdate = false;
        for (var _i = 0, _a = this.settings.translations; _i < _a.length; _i++) {
            var translation = _a[_i];
            var exists = false;
            for (var _b = 0, _c = this.properties.translations; _b < _c.length; _b++) {
                var propertyTranslation = _c[_b];
                if (propertyTranslation.code === translation) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                this.properties.translations.push({ code: translation, text: this.properties.currentMatch });
                requireUpdate = true;
            }
        }
        if (requireUpdate) {
            this.calculateTranslations();
        }
    };
    HomePage.prototype.openEditMatch = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modals_edit_text_edit_text__["a" /* EditTextModal */], { text: this.properties.currentMatch });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.properties.currentMatch = data;
                _this.calculateTranslations();
            }
        });
        modal.present();
    };
    HomePage.prototype.copyNote = function (note) {
        var _this = this;
        console.log("copying");
        this.clipboard.copy(note).then(function () {
            var toast = _this.toastCtrl.create({
                message: 'Note copied to clipboard',
                duration: 1000,
                position: 'bottom'
            });
            toast.present();
        });
    };
    HomePage.prototype.shareNote = function (note) {
        console.log("sharing");
        this.sharer.share(note);
    };
    HomePage.prototype.saveNote = function (note) {
        var _this = this;
        console.log("saving");
        if (this.properties.currentSaved) {
            this.properties.currentSaved = false;
            this.storage.get("savedNotes").then(function (notes) {
                if (notes) {
                    for (var index in notes) {
                        var savedNote = notes[index];
                        if (savedNote.id === _this.properties.currentId) {
                            notes.splice(index, 1);
                            _this.storage.set("savedNotes", notes);
                            _this.properties.currentId = false;
                            break;
                        }
                    }
                }
                _this.storage.set("savedNotes", notes);
            });
        }
        else {
            this.properties.currentSaved = true;
            this.storage.get("savedNotes").then(function (notes) {
                if (!notes) {
                    notes = [];
                }
                ;
                _this.properties.currentId = notes.length + 1;
                notes.unshift({ note: _this.properties.currentMatch, id: _this.properties.currentId, language: _this.properties.language, translations: _this.properties.translations });
                _this.storage.set("savedNotes", notes);
                var toast = _this.toastCtrl.create({
                    message: 'Note saved',
                    duration: 1000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
    };
    HomePage.prototype.savePreviousNote = function (note) {
        var _this = this;
        if (note.saved) {
            note.saved = false;
            this.storage.get("savedNotes").then(function (notes) {
                if (notes) {
                    for (var index in notes) {
                        var savedNote = notes[index];
                        if (savedNote.id === note.id) {
                            notes.splice(index, 1);
                            _this.storage.set("savedNotes", notes);
                            note.id = false;
                            _this.storage.set("notes", _this.notes);
                            break;
                        }
                    }
                }
            });
        }
        else {
            note.saved = true;
            this.storage.get("savedNotes").then(function (notes) {
                if (!notes) {
                    notes = [];
                }
                ;
                note.id = notes.length + 1;
                notes.unshift({ note: note.note, id: note.id, language: note.language, translations: note.translations });
                _this.storage.set("notes", _this.notes);
                _this.storage.set("savedNotes", notes);
                var toast = _this.toastCtrl.create({
                    message: 'Note saved',
                    duration: 1000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
    };
    HomePage.prototype.scrollBottom = function () {
        var objDiv = document.querySelectorAll(".dictate-card p");
        for (var index in objDiv) {
            console.log(objDiv[index]);
            if (objDiv[index] instanceof HTMLElement) {
                objDiv[index].scrollTop = objDiv[index].scrollHeight;
            }
        }
    };
    HomePage.prototype.dragNote = function (ev, index, note) {
        var _this = this;
        var element = ev._elementRef.nativeElement;
        element.style.opacity = 1 - (ev._openAmount / 200);
        this.properties.previousNotePosition = ev._openAmount;
        if (ev._openAmount >= (100) && !this.properties.previousDeleted) {
            this.properties.previousDeleted = true;
            setTimeout(function () {
                if (_this.properties.previousNotePosition < 100) {
                    return;
                }
                _this.notes.splice(index, 1);
                _this.storage.set("notes", _this.notes);
                var toast = _this.toastCtrl.create({
                    message: 'Note removed',
                    duration: 1000,
                    position: 'bottom'
                });
                toast.present();
                _this.properties.previousDeleted = false;
            }, 500);
        }
    };
    HomePage.prototype.openTranslateLanguage = function () {
        var _this = this;
        var data = {
            title: "Add Translations",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'OK',
                    handler: function (data) {
                        console.log(data);
                        //first check for removed items
                        for (var i = _this.properties.translations.length - 1; i > -1; i--) {
                            var translation = _this.properties.translations[i];
                            if (data.indexOf(translation.code) < 0) {
                                _this.properties.translations.splice(i, 1);
                            }
                        }
                        var requireUpdate = false;
                        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                            var code = data_1[_i];
                            if (!_this.isTranslationChecked(code)) {
                                _this.properties.translations.push({ code: code, text: _this.properties.currentMatch });
                                requireUpdate = true;
                            }
                        }
                        if (requireUpdate) {
                            _this.calculateTranslations();
                        }
                    }
                }
            ],
            inputs: []
        };
        for (var _i = 0, _a = this.languages; _i < _a.length; _i++) {
            var language = _a[_i];
            data.inputs.push({ type: 'checkbox', label: language.name, value: language.code, checked: this.isTranslationChecked(language.code) });
        }
        var alert = this.alertCtrl.create(data);
        alert.present();
    };
    HomePage.prototype.removeTranslation = function (index, translationArray) {
        translationArray.splice(index, 1);
        this.storage.set("notes", this.notes);
    };
    HomePage.prototype.calculateTranslations = function () {
        var _this = this;
        var _loop_1 = function (translation) {
            this_1.translateProvider.translateText(this_1.properties.language, translation.code, this_1.properties.currentMatch).then(function (result) {
                translation.text = result["data"]["translations"][0]["translatedText"];
                _this.scrollBottom();
            }).catch(function (e) {
                console.log(e);
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.properties.translations; _i < _a.length; _i++) {
            var translation = _a[_i];
            _loop_1(translation);
        }
    };
    HomePage.prototype.isTranslationChecked = function (language) {
        var checked = false;
        for (var _i = 0, _a = this.properties.translations; _i < _a.length; _i++) {
            var translation = _a[_i];
            if (translation.code === language) {
                checked = true;
                break;
            }
        }
        return checked;
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
                        if (_this.recognitionObject) {
                            _this.recognitionObject.lang = _this.properties.language;
                        }
                        _this.getLocallyTranslatedLanguages();
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
    HomePage.prototype.formatLanguage = function (code) {
        var formatted = "";
        for (var _i = 0, _a = this.languages; _i < _a.length; _i++) {
            var language = _a[_i];
            if (language.code === code) {
                formatted = language.name;
                break;
            }
        }
        return formatted;
    };
    HomePage.prototype.setSupportedLanguages = function () {
        this.languages = [
            { code: "ZH", name: "Chinese (Mandarin)" },
            { code: "CS", name: "Czech" },
            { code: "DA", name: "Danish" },
            { code: "NL", name: "Dutch" },
            { code: "EN", name: "English" },
            { code: "ET", name: "Estonian" },
            { code: "FR", name: "French" },
            { code: "KA", name: "Georgian" },
            { code: "DE", name: "German" },
            { code: "HI", name: "Hindi" },
            { code: "HU", name: "Hungarian" },
            { code: "LA", name: "Latin" },
            { code: "LV", name: "Latvian" },
            { code: "LT", name: "Lithuanian" },
            { code: "SR", name: "Serbian" },
            { code: "CY", name: "Welsh" },
            { code: "XH", name: "Xhosa" },
        ];
        this.languages.sort(function (a, b) {
            return a.name == b.name ? 0 : +(a.name > b.name) || -1;
            ;
        });
        this.storage.set("languages", this.languages);
        this.getLocallyTranslatedLanguages();
    };
    HomePage.prototype.getLocallyTranslatedLanguages = function () {
        var _this = this;
        this.translateProvider.getLanguages(this.properties.language).then(function (result) {
            console.log(result["data"]["languages"]);
            var languages = [];
            for (var _i = 0, _a = result["data"]["languages"]; _i < _a.length; _i++) {
                var language = _a[_i];
                languages.push({ name: language.name, code: language.language.toUpperCase() });
            }
            console.log(languages);
            _this.languages = languages;
            _this.storage.set("languages", _this.languages);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\globenotes\src\pages\home\home.html"*/`<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Globe Notes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card class="dictate-card">\n        <ion-card-header>\n            <a (click)="changeLanguage()">{{formatLanguage(properties.language)}}</a>\n            <div class="actions" [hidden]="!properties.currentMatch">\n                <button ion-button icon-only clear small (click)="saveNote(properties.currentMatch)">\n                    <ion-icon [name]="properties.currentSaved ? \'star\' :\'star-outline\'"></ion-icon>\n                </button>   \n                <button ion-button icon-only clear small (click)="copyNote(properties.currentMatch)">\n                    <ion-icon name="copy"></ion-icon>\n                </button> \n                <button ion-button icon-only clear small (click)="shareNote(properties.currentMatch)">\n                    <ion-icon name="send"></ion-icon>\n                </button>               \n                \n                \n                \n            </div>\n        </ion-card-header>\n        <ion-card-content>\n            <p class="pre-recording" *ngIf="!properties.currentMatch && !properties.isRecording">Tap the mic to start dictating...</p>\n            <p class="pre-recording" *ngIf="!properties.currentMatch && properties.isRecording">Start talking...</p>\n            <p *ngIf="properties.currentMatch" (press)="openEditMatch()">{{properties.currentMatch}}</p>\n            <div class="language-translations">\n                <div class="translation" *ngFor="let translation of properties.translations;let i = index">\n                    <span class="translation-title">\n                        <span class="language">{{formatLanguage(translation.code)}}</span>\n                        <button ion-button clear small color="danger" (click)="removeTranslation(i, properties.translations)">Remove</button>\n                    </span>\n                     <p>{{translation.text}}</p>\n                    \n                </div>\n            </div>\n        </ion-card-content>\n        <div class="card-footer">\n            <button ion-button clear [hidden]="!properties.currentMatch" (click)="openTranslateLanguage()">Translate</button>\n        </div>\n        <div class="dictate-button">\n            <button ion-fab (click)="toggleListening()" [color]="properties.isRecording ? \'danger\' : \'primary\'"><ion-icon name="mic"></ion-icon></button>\n        </div>\n    </ion-card>\n    \n    <ion-list class="previous">\n        <ion-item-sliding #item *ngFor="let note of notes; let i = index" (ionDrag)="dragNote($event, i, note)">\n        <ion-item>\n            <ion-card>\n\n                \n            <ion-card-header>\n                <a>{{formatLanguage(note.language)}}</a>\n                <div class="actions">\n                    <button ion-button icon-only clear small (click)="savePreviousNote(note)">\n                        <ion-icon [name]="note.saved ? \'star\' :\'star-outline\'"></ion-icon>\n                    </button>   \n                    <button ion-button icon-only clear small (click)="copyNote(note.note)">\n                        <ion-icon name="copy"></ion-icon>\n                    </button> \n                    <button ion-button icon-only clear small (click)="shareNote(note.note)">\n                        <ion-icon name="send"></ion-icon>\n                    </button>               \n\n\n\n                </div>\n            </ion-card-header>                \n                \n                  \n            <ion-card-content>\n                <p>{{note.note}}</p> \n                <div class="language-translations">\n                    <div class="translation" *ngFor="let translation of note.translations;let i = index">\n                        <span class="translation-title">\n                            <span class="language">{{formatLanguage(translation.code)}}</span>\n                            <button ion-button clear small color="danger" (click)="removeTranslation(i, note.translations)">Remove</button>\n                        </span>\n                         <p>{{translation.text}}</p>\n\n                    </div>\n                </div>                \n            </ion-card-content>\n\n        </ion-card>\n            </ion-item>\n    <ion-item-options side="right">\n        <div class="fullwidth-slide"></div>\n    </ion-item-options>\n\n            \n            </ion-item-sliding>\n    </ion-list>\n    \n    \n</ion-content>\n`/*ion-inline-end:"D:\Taylor\Documents\Websites\globenotes\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_6__providers_translate_translate__["a" /* TranslateProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_translate_translate__["a" /* TranslateProvider */]) === "function" && _m || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTextModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditTextModal = (function () {
    function EditTextModal(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.text = params.data.text;
    }
    EditTextModal.prototype.saveText = function () {
        this.viewCtrl.dismiss(this.text);
    };
    EditTextModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditTextModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'edit-text',template:/*ion-inline-start:"D:\Taylor\Documents\Websites\globenotes\src\modals\edit-text\edit-text.html"*/`<ion-header>\n    <ion-toolbar color="primary">\n        <ion-title>\n            Edit Text\n        </ion-title>\n        <ion-buttons start>\n            <button icon-start ion-button (click)="saveText()" showWhen="android, windows">\n                <ion-icon name="md-checkmark"></ion-icon>\n                Save\n            </button>       \n           \n            \n            <button ion-button (click)="dismiss()">\n                <span ion-text showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n            </button>\n        </ion-buttons>\n        \n        <ion-buttons showWhen="ios" end>\n            <button ion-button (click)="saveText()">\n                <span ion-text>Save</span>\n            </button>              \n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content>\n    \n    <ion-list class="edit-text">\n      <ion-item>\n        <ion-label floating>Dictated Text</ion-label>\n        <ion-textarea [(ngModel)]="text" autosize></ion-textarea>\n      </ion-item>\n    </ion-list>    \n\n    \n</ion-content>`/*ion-inline-end:"D:\Taylor\Documents\Websites\globenotes\src\modals\edit-text\edit-text.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]])
    ], EditTextModal);
    return EditTextModal;
}());

//# sourceMappingURL=edit-text.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthenticationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TranslateProvider = (function () {
    function TranslateProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    TranslateProvider.prototype.translateText = function (srcLanguage, targetLanguage, text) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = { source: srcLanguage, target: targetLanguage, format: "text", q: text, key: "AIzaSyDqS-gcwHt33Z-8aFAPQYLlxolrJ_Knr_8" };
            _this.http.post("https://translation.googleapis.com/language/translate/v2?key=AIzaSyDqS-gcwHt33Z-8aFAPQYLlxolrJ_Knr_8", data).subscribe(function (res) {
                resolve(res);
            }, function (e) {
                reject(e);
            });
        });
    };
    TranslateProvider.prototype.getLanguages = function (srcLanguage) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = { key: "AIzaSyDqS-gcwHt33Z-8aFAPQYLlxolrJ_Knr_8", target: srcLanguage };
            _this.http.post("https://translation.googleapis.com/language/translate/v2/languages?key=AIzaSyDqS-gcwHt33Z-8aFAPQYLlxolrJ_Knr_8", data).subscribe(function (res) {
                resolve(res);
            }, function (e) {
                reject(e);
            });
        });
    };
    TranslateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object])
    ], TranslateProvider);
    return TranslateProvider;
    var _a, _b;
}());

//# sourceMappingURL=translate.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_saved_saved__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modals_edit_text_edit_text__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_translate_translate__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_clipboard__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_autosize_autosize__ = __webpack_require__(288);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_saved_saved__["a" /* SavedPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__modals_edit_text_edit_text__["a" /* EditTextModal */],
                __WEBPACK_IMPORTED_MODULE_16__components_autosize_autosize__["a" /* Autosize */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_saved_saved__["a" /* SavedPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__modals_edit_text_edit_text__["a" /* EditTextModal */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_10__providers_translate_translate__["a" /* TranslateProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(200);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Autosize; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Autosize = (function () {
    function Autosize(element) {
        this.element = element;
    }
    Autosize.prototype.onInput = function (textArea) {
        this.adjust();
    };
    Autosize.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.adjust(); }, 0);
    };
    Autosize.prototype.adjust = function () {
        var textArea = this.element.nativeElement.getElementsByTagName('textarea')[0];
        textArea.style.overflow = 'hidden';
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + "px";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('input', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [HTMLTextAreaElement]),
        __metadata("design:returntype", void 0)
    ], Autosize.prototype, "onInput", null);
    Autosize = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: 'ion-textarea[autosize]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], Autosize);
    return Autosize;
}());

//# sourceMappingURL=autosize.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map