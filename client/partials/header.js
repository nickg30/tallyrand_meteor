Template.Header.onCreated(function(){
	var self = this;
	self.autorun(function (){
		self.subscribe('profile');
	});
});

Template.Header.helpers({
	profile: ()=> {
		return Profile.find({});
	}
});