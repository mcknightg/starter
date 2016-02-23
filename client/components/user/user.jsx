Userinfo = React.createClass({
    render(){
        return (
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="glyphicon glyphicon-user"></i> {this.props.fullname}</a>
                <ul className="dropdown-menu">
                    <li><a href="/profile">Edit Profile</a></li>
                    <li><a href="/signout">Logout</a></li>
                </ul>
            </li>
        )
    }
});