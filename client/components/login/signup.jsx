Signup = React.createClass({
    getInitialState(){
            return {
                message:'',
                messageClass:'hidden'
            }
    },
    signUp(e){
        e.preventDefault();
        this.setState({message: '', messageClass: 'hidden'});
        var that = this;
        var first_name = ReactDOM.findDOMNode(this.refs.first_name).value.trim();
        var last_name = ReactDOM.findDOMNode(this.refs.last_name).value.trim();
        var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        var user = {email: email, password: password, profile: {firstname: first_name, lastname: last_name,avatar:'http://placehold.it/150x150'}};
        Accounts.createUser(user, function (e) {
            FlowRouter.go('/dashboard');

            if (e) {
                that.setState({message:e.reason,messageClass:'alert alert-danger'})
            }
        })
    },
    render(){
        return (
            <div className="container">
                <div className="col-md-4 col-md-offset-8 ">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Sign Up
                        </div>
                        <div className="panel-body">
                            <form onSubmit={this.signUp}>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input ref="first_name" type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input ref="last_name" type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input ref="email" type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input ref="password" type="password" className="form-control"/>
                                </div>
                                <input value="Sign Up" type="submit"/>
                                <br/>
                                <div className={this.state.messageClass}>{this.state.message}</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});