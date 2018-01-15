Template.Heading.onCreated(function(){
	var self = this;
	self.autorun(function (){
		self.subscribe('profile');
	});
});

// Category One
Template.Heading.helpers({
	profile: ()=> {
		return Profile.find({});
	}
});