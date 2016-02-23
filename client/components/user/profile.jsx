Profile = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData(){
        let data = {};
        data.currentUser = Meteor.user();
        data.departments = ["Development", "Solutions", "Support", "Sales"];
        return data;
    },
    render(){
        var mailto = "mailto:" + this.data.currentUser.emails[0].address;
        return (
            this.data.currentUser ? <div className="container">
                <div className="row">

                    <div
                        className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad">


                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <h3 className="panel-title">{this.data.currentUser.profile.firstname} {this.data.currentUser.profile.lastname}
                                    <span className="pull-right fa fa-pencil fa-lg"></span>
                                </h3>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-3 col-lg-3 " align="center">
                                        <img alt="User Pic"
                                             src="http://placehold.it/300x300"
                                             className="img-circle img-responsive"/></div>


                                    <div className=" col-md-9 col-lg-9 ">
                                        <table className="table table-user-information">
                                            <tbody>
                                            <tr>
                                                <td>Email</td>
                                                <td><a
                                                    href={mailto}>{this.data.currentUser ? this.data.currentUser.emails[0].address:'None'}</a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> : <h1>Loading</h1>
        )
    }
});