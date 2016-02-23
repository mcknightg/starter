Navbar = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
        let data = {};
        data.currentUser = Meteor.user();
        return data;
    },
    render(){
        var login = this.data.currentUser ? <Userinfo fullname={this.data.currentUser.profile.firstname + " " + this.data.currentUser.profile.lastname } />:<Login/>;
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/dashboard"><img height="25px" src="/images/logo.png" alt="logo"/></a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                {login}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
});