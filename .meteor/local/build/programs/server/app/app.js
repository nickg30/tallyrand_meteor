var require = meteorInstall({"lib":{"routes.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/routes.js                                                                                                  //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
if (Meteor.isClient) {                                                                                            // 1
	Accounts.onLogin(function () {                                                                                   // 2
		FlowRouter.go('admin-menu');                                                                                    // 3
	});                                                                                                              // 4
	Accounts.onLogout(function () {                                                                                  // 6
		FlowRouter.go('home');                                                                                          // 7
	});                                                                                                              // 8
} // FlowRouter.triggers.enter([function(context, redirect){                                                      // 9
// 	if(!Meteor.userId()) {                                                                                        // 11
// 		FlowRouter.go('home');                                                                                       // 12
// 	}                                                                                                             // 13
// }]);                                                                                                           // 14
                                                                                                                  //
                                                                                                                  //
FlowRouter.route('/', {                                                                                           // 16
	name: 'home',                                                                                                    // 17
	action: function () {                                                                                            // 18
		if (Meteor.userId()) {                                                                                          // 19
			FlowRouter.go('/');                                                                                            // 20
		}                                                                                                               // 21
                                                                                                                  //
		GAnalytics.pageview();                                                                                          // 22
		BlazeLayout.render('HomeLayout', {                                                                              // 23
			main: 'FrontPage'                                                                                              // 23
		});                                                                                                             // 23
	}                                                                                                                // 24
});                                                                                                               // 16
FlowRouter.route('/appetizers', {                                                                                 // 27
	name: 'appetizers',                                                                                              // 28
	action: function () {                                                                                            // 29
		GAnalytics.pageview();                                                                                          // 30
		BlazeLayout.render('HomeLayout', {                                                                              // 31
			main: 'Appetizers'                                                                                             // 31
		});                                                                                                             // 31
	}                                                                                                                // 32
});                                                                                                               // 27
FlowRouter.route('/profile', {                                                                                    // 35
	name: 'profile',                                                                                                 // 36
	action: function () {                                                                                            // 37
		if (Meteor.userId()) {                                                                                          // 38
			FlowRouter.go('profile');                                                                                      // 39
		}                                                                                                               // 40
                                                                                                                  //
		GAnalytics.pageview();                                                                                          // 41
		BlazeLayout.render('MainLayout');                                                                               // 42
	}                                                                                                                // 43
});                                                                                                               // 35
FlowRouter.route('/admin-menu', {                                                                                 // 46
	name: 'admin-menu',                                                                                              // 47
	action: function () {                                                                                            // 48
		if (Meteor.userId()) {                                                                                          // 49
			FlowRouter.go('admin-menu');                                                                                   // 50
		}                                                                                                               // 51
                                                                                                                  //
		GAnalytics.pageview();                                                                                          // 52
		BlazeLayout.render('MainLayout', {                                                                              // 53
			main: 'Recipes'                                                                                                // 53
		});                                                                                                             // 53
	}                                                                                                                // 54
}); // SUPPORT                                                                                                    // 46
                                                                                                                  //
FlowRouter.route('/support', {                                                                                    // 57
	name: 'support',                                                                                                 // 58
	action: function () {                                                                                            // 59
		if (Meteor.userId()) {                                                                                          // 60
			FlowRouter.go('support');                                                                                      // 61
		}                                                                                                               // 62
                                                                                                                  //
		GAnalytics.pageview();                                                                                          // 63
		BlazeLayout.render('MainLayout', {                                                                              // 64
			main: 'Support'                                                                                                // 64
		});                                                                                                             // 64
	}                                                                                                                // 65
});                                                                                                               // 57
FlowRouter.route('/basic-info', {                                                                                 // 68
	name: 'basic-info',                                                                                              // 69
	action: function () {                                                                                            // 70
		if (Meteor.userId()) {                                                                                          // 71
			FlowRouter.go('basic-info');                                                                                   // 72
		}                                                                                                               // 73
                                                                                                                  //
		GAnalytics.pageview();                                                                                          // 74
		BlazeLayout.render('MainLayout', {                                                                              // 75
			main: 'BasicInfo'                                                                                              // 75
		});                                                                                                             // 75
	}                                                                                                                // 76
});                                                                                                               // 68
FlowRouter.route('/recipe/:id', {                                                                                 // 79
	name: 'recipe',                                                                                                  // 80
	action: function () {                                                                                            // 81
		GAnalytics.pageview();                                                                                          // 82
		BlazeLayout.render('MainLayout', {                                                                              // 83
			main: 'RecipeSingle'                                                                                           // 83
		});                                                                                                             // 83
	}                                                                                                                // 84
});                                                                                                               // 79
FlowRouter.route('/menu', {                                                                                       // 87
	name: 'menu',                                                                                                    // 88
	action: function () {                                                                                            // 89
		BlazeLayout.render('MainLayout', {                                                                              // 90
			main: 'Menu'                                                                                                   // 90
		});                                                                                                             // 90
	}                                                                                                                // 91
});                                                                                                               // 87
FlowRouter.route('/shopping-list', {                                                                              // 94
	name: 'shopping-list',                                                                                           // 95
	action: function () {                                                                                            // 96
		BlazeLayout.render('MainLayout', {                                                                              // 97
			main: 'ShoppingList'                                                                                           // 97
		});                                                                                                             // 97
	}                                                                                                                // 98
});                                                                                                               // 94
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"collections":{"profile.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// collections/profile.js                                                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Profile = new Mongo.Collection('profile');                                                                        // 1
Profile.allow({                                                                                                   // 3
    insert: function (userId, doc) {                                                                              // 4
        return !!userId;                                                                                          // 5
    },                                                                                                            // 6
    update: function (userId, doc) {                                                                              // 7
        return !!userId;                                                                                          // 8
    }                                                                                                             // 9
}); // Price = new SimpleSchema({                                                                                 // 3
//     desc: {                                                                                                    // 13
//         type: String,                                                                                          // 14
//         label: "Option",                                                                                       // 15
//         optional: true,                                                                                        // 16
//     },                                                                                                         // 17
//     amount: {                                                                                                  // 18
//         label: "Amount",                                                                                       // 19
//         type: String                                                                                           // 20
//     }                                                                                                          // 21
// });                                                                                                            // 22
                                                                                                                  //
ProfileSchema = new SimpleSchema({                                                                                // 24
    storeNumber: {                                                                                                // 25
        type: String,                                                                                             // 26
        label: "Store #"                                                                                          // 27
    },                                                                                                            // 25
    businessName: {                                                                                               // 29
        type: String,                                                                                             // 30
        label: "Business Name"                                                                                    // 31
    },                                                                                                            // 29
    phoneNumber: {                                                                                                // 33
        type: Number,                                                                                             // 34
        min: 10,                                                                                                  // 35
        autoform: {                                                                                               // 36
            afFieldInput: {                                                                                       // 37
                type: "tel"                                                                                       // 38
            }                                                                                                     // 37
        }                                                                                                         // 36
    },                                                                                                            // 33
    email: {                                                                                                      // 42
        type: String,                                                                                             // 43
        label: "email"                                                                                            // 44
    },                                                                                                            // 42
    address: {                                                                                                    // 46
        type: Object                                                                                              // 47
    },                                                                                                            // 46
    'address.street': {                                                                                           // 49
        type: String                                                                                              // 50
    },                                                                                                            // 49
    'address.street2': {                                                                                          // 52
        type: String,                                                                                             // 53
        optional: true                                                                                            // 54
    },                                                                                                            // 52
    'address.city': {                                                                                             // 56
        type: String                                                                                              // 57
    },                                                                                                            // 56
    'address.state': {                                                                                            // 59
        type: String,                                                                                             // 60
        allowedValues: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
        autoform: {                                                                                               // 62
            afFieldInput: {                                                                                       // 63
                firstOption: "(Select a State)"                                                                   // 64
            }                                                                                                     // 63
        }                                                                                                         // 62
    },                                                                                                            // 59
    'address.postalCode': {                                                                                       // 68
        type: String,                                                                                             // 69
        label: "ZIP"                                                                                              // 70
    },                                                                                                            // 68
    tagline: {                                                                                                    // 72
        type: String,                                                                                             // 73
        label: "tagline",                                                                                         // 74
        autoform: {                                                                                               // 75
            rows: 2                                                                                               // 76
        }                                                                                                         // 75
    },                                                                                                            // 72
    desc: {                                                                                                       // 79
        type: String,                                                                                             // 80
        label: "About",                                                                                           // 81
        autoform: {                                                                                               // 82
            rows: 5                                                                                               // 83
        }                                                                                                         // 82
    },                                                                                                            // 79
    author: {                                                                                                     // 86
        type: String,                                                                                             // 87
        label: "Author",                                                                                          // 88
        autoValue: function () {                                                                                  // 89
            return this.userId;                                                                                   // 90
        },                                                                                                        // 91
        autoform: {                                                                                               // 92
            type: "hidden"                                                                                        // 93
        }                                                                                                         // 92
    },                                                                                                            // 86
    createdAt: {                                                                                                  // 96
        type: Date,                                                                                               // 97
        label: "Created At",                                                                                      // 98
        autoValue: function () {                                                                                  // 99
            return new Date();                                                                                    // 100
        },                                                                                                        // 101
        autoform: {                                                                                               // 102
            type: "hidden"                                                                                        // 103
        }                                                                                                         // 102
    }                                                                                                             // 96
});                                                                                                               // 24
Meteor.methods({                                                                                                  // 110
    deleteProfile: function (id) {                                                                                // 111
        Profile.remove(id);                                                                                       // 112
    }                                                                                                             // 113
});                                                                                                               // 110
Profile.attachSchema(ProfileSchema);                                                                              // 116
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"recipes.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// collections/recipes.js                                                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Recipes = new Mongo.Collection('recipes');                                                                        // 1
Recipes.allow({                                                                                                   // 3
    insert: function (userId, doc) {                                                                              // 4
        return !!userId;                                                                                          // 5
    },                                                                                                            // 6
    update: function (userId, doc) {                                                                              // 7
        return !!userId;                                                                                          // 8
    }                                                                                                             // 9
});                                                                                                               // 3
Price = new SimpleSchema({                                                                                        // 12
    desc: {                                                                                                       // 13
        type: String,                                                                                             // 14
        label: "Option",                                                                                          // 15
        optional: true                                                                                            // 16
    },                                                                                                            // 13
    amount: {                                                                                                     // 18
        label: "Amount",                                                                                          // 19
        type: String                                                                                              // 20
    }                                                                                                             // 18
});                                                                                                               // 12
RecipeSchema = new SimpleSchema({                                                                                 // 24
    name: {                                                                                                       // 25
        type: String,                                                                                             // 26
        label: "Name"                                                                                             // 27
    },                                                                                                            // 25
    desc: {                                                                                                       // 29
        type: String,                                                                                             // 30
        label: "Description",                                                                                     // 31
        optional: true                                                                                            // 32
    },                                                                                                            // 29
    price: {                                                                                                      // 34
        type: String,                                                                                             // 35
        label: "Price"                                                                                            // 36
    },                                                                                                            // 34
    // Price: {                                                                                                   // 39
    //     type: [Price]                                                                                          // 40
    // },                                                                                                         // 41
    category: {                                                                                                   // 42
        type: String,                                                                                             // 43
        label: "Category",                                                                                        // 44
        allowedValues: ["Appetizers", "Tea Menu", "Category One", "Category One", "Category One", "Category One"]
    },                                                                                                            // 42
    column: {                                                                                                     // 54
        type: Number,                                                                                             // 55
        label: "Column",                                                                                          // 56
        allowedValues: [1, 2, 3]                                                                                  // 57
    },                                                                                                            // 54
    position: {                                                                                                   // 63
        type: Number,                                                                                             // 64
        label: "position",                                                                                        // 65
        allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]                                                            // 66
    },                                                                                                            // 63
    special: {                                                                                                    // 79
        type: Boolean,                                                                                            // 80
        label: "Special",                                                                                         // 81
        defaultValue: false,                                                                                      // 82
        label: "Special Item"                                                                                     // 83
    },                                                                                                            // 79
    inMenu: {                                                                                                     // 85
        type: Boolean,                                                                                            // 86
        defaultValue: false,                                                                                      // 87
        optional: true,                                                                                           // 88
        autoform: {                                                                                               // 89
            type: "hidden"                                                                                        // 90
        }                                                                                                         // 89
    },                                                                                                            // 85
    author: {                                                                                                     // 93
        type: String,                                                                                             // 94
        label: "Author",                                                                                          // 95
        autoValue: function () {                                                                                  // 96
            return this.userId;                                                                                   // 97
        },                                                                                                        // 98
        autoform: {                                                                                               // 99
            type: "hidden"                                                                                        // 100
        }                                                                                                         // 99
    },                                                                                                            // 93
    createdAt: {                                                                                                  // 103
        type: Date,                                                                                               // 104
        label: "Created At",                                                                                      // 105
        autoValue: function () {                                                                                  // 106
            return new Date();                                                                                    // 107
        },                                                                                                        // 108
        autoform: {                                                                                               // 109
            type: "hidden"                                                                                        // 110
        }                                                                                                         // 109
    }                                                                                                             // 103
});                                                                                                               // 24
Meteor.methods({                                                                                                  // 117
    toggleMenuItem: function (id, currentState) {                                                                 // 118
        Recipes.update(id, {                                                                                      // 119
            $set: {                                                                                               // 120
                inMenu: !currentState                                                                             // 121
            }                                                                                                     // 120
        });                                                                                                       // 119
    },                                                                                                            // 124
    deleteRecipe: function (id) {                                                                                 // 125
        Recipes.remove(id);                                                                                       // 126
    }                                                                                                             // 127
});                                                                                                               // 117
Recipes.attachSchema(RecipeSchema);                                                                               // 130
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"init.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/init.js                                                                                                 //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.startup(function () {});                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/publish.js                                                                                              //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish('recipes', function () {                                                                           // 1
	return Recipes.find({});                                                                                         // 2
});                                                                                                               // 3
Meteor.publish('SingleRecipe', function (id) {                                                                    // 5
	check(id, String);                                                                                               // 6
	return Recipes.find({                                                                                            // 7
		_id: id                                                                                                         // 7
	});                                                                                                              // 7
}); // PROFILE                                                                                                    // 8
                                                                                                                  //
Meteor.publish('profile', function () {                                                                           // 10
	return Profile.find({});                                                                                         // 11
});                                                                                                               // 12
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"intermediate.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// intermediate.js                                                                                                //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
if (Meteor.isServer) {                                                                                            // 1
  Meteor.startup(function () {// code to run on server at startup                                                 // 2
  });                                                                                                             // 4
}                                                                                                                 // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./lib/routes.js");
require("./collections/profile.js");
require("./collections/recipes.js");
require("./server/init.js");
require("./server/publish.js");
require("./intermediate.js");
//# sourceMappingURL=app.js.map
