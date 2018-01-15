Template.Appetizers.onCreated(function(){
	var self = this;
	self.autorun(function (){
		self.subscribe('recipes');
	});
});

Template.Appetizers.helpers({
	cat1col1: ()=> {
		return Recipes.find({"column":1, "category":"Appetizers","inMenu": true}, {sort: {"position": 1}});
    },
    cat1col2: ()=> {
		return Recipes.find({"column":2, "category":"Appetizers","inMenu": true}, {sort: {"position": 1}});
    },
    cat1col3: ()=> {
		return Recipes.find({"column":3, "category":"Appetizers","inMenu": true}, {sort: {"position": 1}});
	}
});