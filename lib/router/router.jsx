publicRoutes = FlowRouter.group({
    name: 'publicroute'
});
privateRoutes = FlowRouter.group({
    name: 'privateroute',
    triggersEnter: [function (context, redirect) {
        if (!Meteor.userId()) {
            return FlowRouter.go('/');
        }
    }]
});
publicRoutes.route('/', {
    name: 'Home',
    action: function () {
        ReactLayout.render(Layout, {
            content:<Signup/>,
            header:<Navbar/>
        });
    }
});
publicRoutes.route('/signout', {
    name: 'Signout',
    action: function () {
        Meteor.logout(function () {
            FlowRouter.go('/');
        })
    }
});
privateRoutes.route('/dashboard', {
    name: 'Home',
    action: function () {
        ReactLayout.render(Layout, {
            content:<Dashboard/>,
            header:<Navbar/>
        });
    }
});