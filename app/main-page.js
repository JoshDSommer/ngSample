"use strict";
var core_1 = require('angular2/core');
var MainPage = (function () {
    function MainPage() {
    }
    MainPage = __decorate([
        core_1.Component({
            selector: 'main',
            template: "\n\t\t<StackLayout>\n\t\t\t<Label align=\"center\" text=\"Hello World!\"></Label>\n\t\t</StackLayout>\n\t",
            styles: ["\n\t\tlabel{\n\t\t\ttext-align:center;\n\t\t\tcolor:#010101;\n\t\t\tfont-size: 32\n\t\t\tmaring:25 0;\n\t\t}\n\t"]
        })
    ], MainPage);
    return MainPage;
}());
exports.MainPage = MainPage;
//# sourceMappingURL=main-page.js.map