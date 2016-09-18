"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MyOutputComponent = (function () {
    function MyOutputComponent() {
        this.agreed = 0;
        this.disagreed = 0;
        this.voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
    }
    MyOutputComponent.prototype.onVotedTest = function (agreed) {
        agreed ? this.agreed++ : this.disagreed++;
    };
    MyOutputComponent = __decorate([
        core_1.Component({
            selector: 'my-output-page',
            template: "\n    <h2>Should mankind colonize the Universe?</h2>\n    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>\n    <my-voter *ngFor=\"let voter of voters\"\n      [name]=\"voter\"\n      (onVoted)=\"onVotedTest($event)\">\n    </my-voter>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], MyOutputComponent);
    return MyOutputComponent;
}());
exports.MyOutputComponent = MyOutputComponent;
//# sourceMappingURL=app.outputtest.js.map