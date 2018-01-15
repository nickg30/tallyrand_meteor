Template.Profile.onCreated(function(){
	this.editMode = new ReactiveVar(false);
	//	this.editMode = new ReactiveVar();
	// this.editMode.set(false);
});

Template.Profile.helpers({
	updateProfileId: function() {
		return this._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
	}
});

Template.Profile.events({
	'click .fa-trash': function () {
		Meteor.call('deleteProfile', this._id);
	},
	'click .fa-pencil': function (event, template) {
		template.editMode.set(!template.editMode.get());
	}
});