var React = require('react');
var ReactDom = require('react-dom');
var Reflux = require('reflux');
var CheckboxGroup = require('./components/checkboxGroup.js');
var InputTextGroup = require('./components/inputTextGroup.js');
var ActionsApp = require('./actions/ActionsApp.js');
var StoresApp = require('./stores/StoresApp.js');


/*var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main.js');

ReactDom.render((
        <Router>
            <Route path="/" component={Main}>
                <Route path="*" component={Main}/>
            </Route>
        </Router>
    ),document.getElementById('app'));*/

function getResState() {
    return {
        res: StoresApp.getRes()
    };
}

var Main = React.createClass({
    mixins: [Reflux.connect(StoresApp)],
    getInitialState: function () {
        return {
            version: 1.1,
            exp1:0,
            exp2:0,
            res: StoresApp.res
        }
    },
    componentDidMount: function () {
        this.listenTo(StoresApp,this.onChange);
    },
    componentWillUnmount: function () {
        this.listenTo(StoresApp,this.onChange);
    },
    onChange: function () {
        this.setState(getResState());
    },
    handleClick:function(event){
        event.preventDefault();
        //ActionsApp.doOperation(parseInt(this.state.exp1),parseInt(this.state.exp2));
        ActionsApp.doOperationWs(parseInt(this.state.exp1),parseInt(this.state.exp2));
        this.setState({exp1: '0'});
        this.setState({exp2: '0'});
    },

    _onChangeName: function (e) {
        this.setState({exp1: e.target.value});
    },
    _onChangeName1: function (e) {
        this.setState({exp2: e.target.value});
    },
    render: function () {
        return (
            <div>
                <form  onSubmit={this.handleClick}>
                    <input type="text" placeholder="Nom" value={this.state.exp1} onChange={this._onChangeName}/>
                    <input type="text" placeholder="Nom" value={this.state.exp2} onChange={this._onChangeName1}/>
                    <input type="submit" value="Enregistrer" />
                </form>

                <div>{this.state.res.key1}</div>
                </div>
        );
    }
});

/*
 <div>{this.state.res}</div>

 <ul>
 {this.state.res.map((re, index) =>
 <li key={index}>{re}</li>
 )}
 </ul>

render: function () {
 */
 /* var input = this.refs.exp1;
 this.state.version = input.value!==undefined ? this.state.count : 0;*/
/*const styles = {styleContainer: {backgroundColor: 'white', maxWidth:'500px'}
 };
 var checkboxOptions = [
 {id:'add',label:'Add'},
 {id:'sub',label:'Sub'},
 {id:'mul',label:'Mul'},
 {id:'div',label:'Div'}
 ];
 var inputTextOptions = [
 {id:'exp1',label:'Exp 1:',value:'exp1'},
 {id:'exp2',label:'Exp 2:',value:'exp2'}
 ];
 return(
 <div className="container" style={styles.styleContainer}>
 <h2> Calculatrice ReactJS {this.state.version}</h2>
 <form role="form" onSubmit={this.handleClick}>
 <InputTextGroup options={inputTextOptions} />
 <div className="row checkbox">
 <CheckboxGroup options={checkboxOptions} />
 </div>
 <button type="submit" className="btn btn-default">Submit</button>
 </form>
 </div>
 );
 }*/


module.exports = Main;

ReactDom.render(<Main />, document.getElementById('app'));