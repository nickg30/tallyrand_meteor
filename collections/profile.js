Profile = new Mongo.Collection('profile');

Profile.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

// Price = new SimpleSchema({
//     desc: {
//         type: String,
//         label: "Option",
//         optional: true,
//     },
//     amount: {
//         label: "Amount",
//         type: String
//     }
// });

ProfileSchema =  new SimpleSchema({
    storeNumber: {
        type: String,
        label: "Store #"
    },
    businessName: {
        type: String,
        label: "Business Name"
    },
    phoneNumber: {
        type: Number,
        min: 10,
        autoform: {
          afFieldInput: {
            type: "tel"
          }
        }
    },
    email: {
        type: String,
        label: "email"
    },
    address: {
        type: Object
      },
      'address.street': {
        type: String
    },
      'address.street2': {
        type: String,
        optional: true
    },
      'address.city': {
        type: String
    },
    'address.state': {
        type: String,
        allowedValues: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],
        autoform: {
          afFieldInput: {
            firstOption: "(Select a State)"
          }
        }
    },
    'address.postalCode': {
        type: String,
        label: "ZIP"
    },
    tagline: {
        type: String,
        label: "tagline",
        autoform: {
            rows: 2
         }
    },
    desc: {
        type: String,
        label: "About",
        autoform: {
            rows: 5
         }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
        
    }
});


Meteor.methods({
	deleteProfile: function(id){
		Profile.remove(id);
	}
});

Profile.attachSchema(ProfileSchema);