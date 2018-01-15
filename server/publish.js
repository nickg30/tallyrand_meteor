Meteor.publish('recipes', function(){
	return Recipes.find({});
});

Meteor.publish('SingleRecipe', function(id){
	check(id, String);
	return Recipes.find({_id: id});
});
// PROFILE
Meteor.publish('profile', function(){
	return Profile.find({});
});
