var Reflux = require('reflux');
var ActionsApp = require('../actions/ActionsApp.js');


var StoresApp = Reflux.createStore({

    //listenables: ActionsApp,
    init: function() {
        //this.res=[];
        this.res={key1:0};
        this.listenTo(ActionsApp.doOperation,this.onDoOperation);
    },
    getRes : function () {
        return this.res;
    },
    onDoOperation: function (var1, var2) {
        //this.res1.push(var1);
        //this.res1.push(var2);//Math.random()*100;
        this.res["key1"] = var1+var2
        //this.res.push(var1+var2);
        this.trigger(this.res)
        //return this.res1;
    }
});

module.exports = StoresApp;