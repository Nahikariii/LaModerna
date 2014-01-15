var MenuView = require('../../../app/src/views/menu_view');
var jsdom = require('jsdom');

describe('MenuView', function(){
    it('Menu should be inserted in the given element', function(){
        var doc = jsdom.jsdom("<html><body></body></html>");
        console.log(doc)
        var view = new MenuView({el: element});
        expect(1).to.equal(1);
    });
});
