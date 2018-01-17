if(Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('admin-menu');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}
// FlowRouter.triggers.enter([function(context, redirect){
// 	if(!Meteor.userId()) {
// 		FlowRouter.go('home');
// 	}
// }]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()) {
			FlowRouter.go('/');
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout', {main: 'FrontPage'});
	}
});

FlowRouter.route('/appetizers', {
	name: 'appetizers',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout', {main: 'Appetizers'});
	}
});

FlowRouter.route('/profile', {
	name: 'profile',
	action() {
		if(Meteor.userId()) {
			FlowRouter.go('profile');
		}
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout');
	}
});

FlowRouter.route('/admin-apps', {
	name: 'admin-apps',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('admin-apps');
		}
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Apps'});
	}
});
// SUPPORT
FlowRouter.route('/support', {
	name: 'support',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('support');
		}
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Support'});
	}
});

FlowRouter.route('/basic-info', {
	name: 'basic-info',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('basic-info');
		}
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'BasicInfo'});
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});

FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action() {
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
	}
});