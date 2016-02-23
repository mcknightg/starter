Login = React.createClass({
    getInitialState(){
        return {
            message:'',
            messageClass:'hidden'
        }
    },
    handleSubmit(e){
        e.preventDefault();
        var that = this;
        var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        Meteor.loginWithPassword(email, password, function (e) {
            if (e) {
                that.setState({message:e.reason,messageClass:'alert alert-danger'});
            } else {
                FlowRouter.go('/dashboard');
            }
        });
    },
    render(){
        return (
            <form onSubmit={this.handleSubmit} id="signin" className="navbar-form navbar-right"
                  role="form">
                <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                    <input id="email" type="email" className="form-control" ref="email"
                           name="email"
                           placeholder="Email Address"/>
                </div>

                <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                    <input id="password" type="password" className="form-control" ref="password"
                           name="password"
                           placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-default">Login</button>
                <br/>
                <span className={this.state.messageClass}>{this.state.message}</span>

            </form>
        )
    }
});