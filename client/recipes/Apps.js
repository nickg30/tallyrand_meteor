Template.Apps.onCreated(function(){
	var self = this;
	self.autorun(function() {
		self.subscribe('recipes');
	});
});

Template.Apps.helpers({
	recipes: ()=> {
		return Recipes.find({"category":"Appetizers"});
	}
});

Template.Apps.events({
	'click .new-recipe': () => {
		Session.set('newRecipe', true);
	}
});