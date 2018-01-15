Template.BasicInfo.onCreated(function(){
	var self = this;
	self.autorun(function (){
		self.subscribe('profile');
	});
});

Template.BasicInfo.helpers({
	profile: ()=> {
		return Profile.find({});
	}
});

Template.BasicInfo.helpers({
	notEmpty: ()=> {
		if(Profile.find({}).count() > 0) {
			return true;
		}
	}
});

Template.BasicInfo.events({
	'click .edit-profile': () => {
		Session.set('editProfile', true);
	}
});

