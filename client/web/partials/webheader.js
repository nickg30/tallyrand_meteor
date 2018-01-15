Template.WebHeader.onCreated(function(){
	var self = this;
	self.autorun(function (){
		self.subscribe('profile');
	});
});

Template.WebHeader.onRendered(function() {
	$("#slideshow > div:gt(0)").hide();

	setInterval(function() { 
	$('#slideshow > div:first')
		.fadeOut(3000)
		.next()
		.fadeIn(3000)
		.end()
		.appendTo('#slideshow');
	},  5000);
});

// Category One
Template.WebHeader.helpers({
	profile: ()=> {
		return Profile.find({});
	}
});