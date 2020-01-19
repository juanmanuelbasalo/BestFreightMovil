import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var HomePage = /** @class */ (function () {
    function HomePage() {
        this.text = 'Starting text';
    }
    HomePage.prototype.onChangeText = function () {
        this.text = 'Changed!';
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map