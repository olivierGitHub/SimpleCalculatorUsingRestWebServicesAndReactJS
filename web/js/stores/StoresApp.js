var Reflux = require('reflux');
var $ = require('jquery');
var ActionsApp = require('../actions/ActionsApp.js');


var StoresApp = Reflux.createStore({

    listenables: ActionsApp,
    init: function() {
        //this.res=[];
        this.res={key1:0};
        //this.listenTo(ActionsApp.doOperation,this.onDoOperation);
        //this.listenTo(ActionsApp.doOperation,this.onDoOperationWs);
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
        //return this.res1;//
    },
    onDoOperationWs: function (var1, var2) {
        $.ajax({
            url: 'http://localhost:8080/app/rest/operation/add',
            type: 'GET',
            contentType: 'application/json; charset=utf-8',
            data: {exp1:var1,exp2:var2},
            context:this,
        //})//
        //.done(function (data) {
        success: function(data) {
                console.log(data);
                this.res["key1"] = data;
                this.trigger(this.res);
        }
        });

    }
});

module.exports = StoresApp;