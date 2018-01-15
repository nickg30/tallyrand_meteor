Template.FrontPage.onCreated(function(){
	var self = this;
	self.autorun(function (){
		self.subscribe('recipes');
	});
});

Template.FrontPage.events({
	'click .dropdown-toggle': function (e) {
		e.preventDefault();
		$(e.target).find('.dropdown-menu').toggle();
	}
});