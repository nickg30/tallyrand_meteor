var require = meteorInstall({"client":{"web":{"partials":{"template.Heading.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/web/partials/template.Heading.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("Heading");                                                                                      // 2
Template["Heading"] = new Template("Template.Heading", (function() {                                                  // 3
  var view = this;                                                                                                    // 4
  return Blaze.Each(function() {                                                                                      // 5
    return Spacebars.call(view.lookup("profile"));                                                                    // 6
  }, function() {                                                                                                     // 7
    return [ "\n        ", HTML.DIV({                                                                                 // 8
      class: "billboard"                                                                                              // 9
    }, "\n            ", HTML.DIV({                                                                                   // 10
      class: "billboard-text"                                                                                         // 11
    }, "\n                ", HTML.Comment(" <h1>57th Anniversary</h1> "), "\n            "), "\n            ", HTML.SECTION({
      class: "page-section clearfix"                                                                                  // 13
    }, "\n                ", HTML.DIV({                                                                               // 14
      class: "container"                                                                                              // 15
    }, "\n                  ", HTML.DIV({                                                                             // 16
      class: "intro"                                                                                                  // 17
    }, "\n                    ", HTML.IMG({                                                                           // 18
      class: "intro-img img-fluid mb-3 mb-lg-0 rounded shadow",                                                       // 19
      src: "img/bar2.jpg",                                                                                            // 20
      alt: ""                                                                                                         // 21
    }), "\n                    ", HTML.DIV({                                                                          // 22
      class: "intro-text left-0 text-center bg-faded p-5 rounded shadow"                                              // 23
    }, "\n                      ", HTML.H2({                                                                          // 24
      class: "section-heading mb-4"                                                                                   // 25
    }, "\n                        ", HTML.SPAN({                                                                      // 26
      class: "section-heading-upper"                                                                                  // 27
    }, "*Newly remodeled*"), "\n                        ", HTML.SPAN({                                                // 28
      class: "section-heading-lower"                                                                                  // 29
    }, "Bar and Lounge"), "\n                      "), "\n                      ", HTML.P({                           // 30
      class: "mb-3"                                                                                                   // 31
    }, "Enjoy a handmade cocktail or a refreshing draft beer with one of our classic appetizers in our newly remodeled bar!"), "\n                      ", HTML.DIV({
      class: "intro-button mx-auto"                                                                                   // 33
    }, "\n                        ", HTML.A({                                                                         // 34
      class: "btn btn-primary btn-xl shadow",                                                                         // 35
      href: "#"                                                                                                       // 36
    }, "Check out the menu..."), "\n                      "), "\n                    "), "\n                  "), "\n                "), "\n              "), "\n        "), "\n    " ];
  });                                                                                                                 // 38
}));                                                                                                                  // 39
                                                                                                                      // 40
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.WebFooter.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/web/partials/template.WebFooter.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("WebFooter");                                                                                    // 2
Template["WebFooter"] = new Template("Template.WebFooter", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return HTML.Raw('<footer class="footer">\n        <ul class="footer-icons">\n\t\t\t<li><a href="tel:5555555555"><i class="fa fa-phone"></i></a></li>\n            <li><a href="https://www.google.com/maps/place/Tallyrand+Restaurant/@34.1668047,-118.3251777,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2bfde1c253133:0x300b8b2c7284495e!8m2!3d34.1668047!4d-118.322989"><i class="fa fa-map-marker"></i></a></li>\n        </ul>\n    </footer>');
}));                                                                                                                  // 6
                                                                                                                      // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.WebHeader.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/web/partials/template.WebHeader.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("WebHeader");                                                                                    // 2
Template["WebHeader"] = new Template("Template.WebHeader", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    class: "navbar navbar-default navbar-fixed-top",                                                                  // 6
    role: "navigation"                                                                                                // 7
  }, "\n        ", HTML.DIV({                                                                                         // 8
    class: "navbar-header"                                                                                            // 9
  }, "\n            ", HTML.A({                                                                                       // 10
    class: "navbar-brand",                                                                                            // 11
    href: "/"                                                                                                         // 12
  }, "\n                ", Blaze.Each(function() {                                                                    // 13
    return Spacebars.call(view.lookup("profile"));                                                                    // 14
  }, function() {                                                                                                     // 15
    return [ "\n                    ", Blaze.View("lookup:businessName", function() {                                 // 16
      return Spacebars.mustache(view.lookup("businessName"));                                                         // 17
    }), "\n                " ];                                                                                       // 18
  }), "\n            "), "\n            ", HTML.Raw('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>'), "\n        "), "\n        ", HTML.DIV({
    class: "navbar-collapse collapse"                                                                                 // 20
  }, "\n            ", HTML.UL({                                                                                      // 21
    class: "nav navbar-nav navbar-right"                                                                              // 22
  }, "\n                ", Blaze.If(function() {                                                                      // 23
    return Spacebars.call(view.lookup("currentUser"));                                                                // 24
  }, function() {                                                                                                     // 25
    return [ "\n                ", HTML.LI({                                                                          // 26
      class: "active",                                                                                                // 27
      id: "admin-active"                                                                                              // 28
    }, HTML.A({                                                                                                       // 29
      href: "/admin-menu"                                                                                             // 30
    }, "Admin")), "\n                " ];                                                                             // 31
  }), "\n                ", HTML.Raw('<li><a href="/appetizers">Appetizers</a></li>'), "\n                ", HTML.Raw('<li><a href="#">Breakfast</a></li>'), "\n                ", HTML.Raw('<li><a href="#">Lunch/Dinner</a></li>'), "\n                ", HTML.Raw('<li><a href="#">Dessert</a></li>'), "\n                ", HTML.Raw('<li><a href="#">From the Bar</a></li>'), "\n                ", HTML.Raw('<li><a href="#">History</a></li>'), "\n            "), "\n            ", HTML.UL({
    class: "nav navbar-nav"                                                                                           // 33
  }, "\n                ", Spacebars.include(view.lookupTemplate("loginButtons")), " ", HTML.Raw("<!-- here -->"), "\n            "), "\n        "), "\n    ");
}));                                                                                                                  // 35
                                                                                                                      // 36
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"heading.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/web/partials/heading.js                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.Heading.onCreated(function () {                                                                              // 1
	var self = this;                                                                                                     // 2
	self.autorun(function () {                                                                                           // 3
		self.subscribe('profile');                                                                                          // 4
	});                                                                                                                  // 5
}); // Category One                                                                                                   // 6
                                                                                                                      //
Template.Heading.helpers({                                                                                            // 9
	profile: function () {                                                                                               // 10
		return Profile.find({});                                                                                            // 11
	}                                                                                                                    // 12
});                                                                                                                   // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"webheader.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/web/partials/webheader.js                                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.WebHeader.onCreated(function () {                                                                            // 1
	var self = this;                                                                                                     // 2
	self.autorun(function () {                                                                                           // 3
		self.subscribe('profile');                                                                                          // 4
	});                                                                                                                  // 5
});                                                                                                                   // 6
Template.WebHeader.onRendered(function () {                                                                           // 8
	$("#slideshow > div:gt(0)").hide();                                                                                  // 9
	setInterval(function () {                                                                                            // 11
		$('#slideshow > div:first').fadeOut(3000).next().fadeIn(3000).end().appendTo('#slideshow');                         // 12
	}, 5000);                                                                                                            // 18
}); // Category One                                                                                                   // 19
                                                                                                                      //
Template.WebHeader.helpers({                                                                                          // 22
	profile: function () {                                                                                               // 23
		return Profile.find({});                                                                                            // 24
	}                                                                                                                    // 25
});                                                                                                                   // 22
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"template.Appetizers.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/web/template.Appetizers.js                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("Appetizers");                                                                                   // 2
Template["Appetizers"] = new Template("Template.Appetizers", (function() {                                            // 3
  var view = this;                                                                                                    // 4
  return [ HTML.Raw('<!-- Section 1 -->\n    <div class="web-menu-heading">Appetizers</div>\n    '), HTML.DIV({       // 5
    class: "web-menu-container"                                                                                       // 6
  }, "\n        ", HTML.DIV({                                                                                         // 7
    class: "category-container"                                                                                       // 8
  }, "\n        ", HTML.Raw("<!-- Column 1 -->"), "\n            ", HTML.DIV({                                        // 9
    class: "col-md-4 col-sm-4"                                                                                        // 10
  }, "\n            ", Blaze.Each(function() {                                                                        // 11
    return Spacebars.call(view.lookup("cat1col1"));                                                                   // 12
  }, function() {                                                                                                     // 13
    return [ "\n                ", Spacebars.include(view.lookupTemplate("WebMenuCol")), "\n            " ];          // 14
  }, function() {                                                                                                     // 15
    return [ "\n                ", HTML.H1(), "\n            " ];                                                     // 16
  }), "\n            "), "\n            ", HTML.Raw("<!-- Column 2 -->"), "\n            ", HTML.DIV({                // 17
    class: "col-md-4 col-sm-4"                                                                                        // 18
  }, "\n            ", Blaze.Each(function() {                                                                        // 19
    return Spacebars.call(view.lookup("cat1col2"));                                                                   // 20
  }, function() {                                                                                                     // 21
    return [ "\n                ", Spacebars.include(view.lookupTemplate("WebMenuCol")), "\n            " ];          // 22
  }, function() {                                                                                                     // 23
    return [ "\n                ", HTML.H1(), "\n            " ];                                                     // 24
  }), "\n            "), "\n            ", HTML.Raw("<!-- Column 3 -->"), "\n            ", HTML.DIV({                // 25
    class: "col-md-4 col-sm-4"                                                                                        // 26
  }, "\n            ", Blaze.Each(function() {                                                                        // 27
    return Spacebars.call(view.lookup("cat1col3"));                                                                   // 28
  }, function() {                                                                                                     // 29
    return [ "\n                ", Spacebars.include(view.lookupTemplate("WebMenuCol")), "\n            " ];          // 30
  }, function() {                                                                                                     // 31
    return [ "\n                ", HTML.H1(), "\n            " ];                                                     // 32
  }), "\n            "), "\n        "), "\n    ") ];                                                                  // 33
}));                                                                                                                  // 34
                                                                                                                      // 35
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.FrontPage.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/web/template.FrontPage.js                                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("FrontPage");                                                                                    // 2
Template["FrontPage"] = new Template("Template.FrontPage", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return [ Spacebars.include(view.lookupTemplate("Heading")), HTML.Raw('\n    <section class="bg-primary border-top" id="about">\n      <div class="container">\n        <div class="row">\n          <div class="mx-auto text-center">\n            <h2 class="section-heading text-white">Something Special, Every Day of the Week!</h2>\n            <hr class="light my-4">\n            <p class="text-faded mb-4">At Tallyrand, we strive to provide you with a one-of-a kind dining experience.  As a family owned and operated establishment, we strive to maintain the principles a family should be built on: trust, happiness, and of course, great food!\n            </p>\n            <p>\n            We begin our day roasting 200 pounds of fresh turkey DAILY! \n            Our breakfasts have won "Best of Burbank" for years with our famous Buttermilk Pancakes, Omelette’s, Cinnamon Roll French Toast and our homemade muffins! Our menu includes a variety of fabulous sandwiches, large salads, seafood, top quality Angus Steaks, delicious juicy burgers and fabulous daily specials such as Fresh Atlantic Salmon, \n            BBQ Pork Ribs, Pot Roast au jus, and more!</p>\n            <p style="font-size:1rem;padding-top:4px;">*Subject to change*</p>\n            <!-- <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a> -->\n          </div>\n          <img class="dad" src="/img/dad.jpg">\n        </div>\n      </div>\n    </section>\n    <section class="showcase">\n        <div class="container-fluid p-0">\n          <div class="row no-gutters border-bottom">\n            <div class="col-lg-6 my-auto showcase-text">\n              <h2>Monday</h2>\n              <ul class="lead mb-0">\n                <li>Pot Roast Dinner</li>\n                <li>Pot Roast French Dip</li>\n                <li>Pot Roast Twister</li>\n                <li>Chicken Fried Steak with Country gravy</li>\n                <li>Pork Chops with Country gravy</li>\n              </ul>\n            </div>\n            <div class="col-lg-6 text-white showcase-img" style="background-image: url(\'img/country-fried.jpg\');"></div>\n          </div>\n          <div class="row no-gutters border-bottom">\n            <div class="col-lg-6 text-white showcase-img" style="background-image: url(\'img/pot_roast.jpg\');"></div>\n            <div class="col-lg-6 my-auto showcase-text">\n              <h2>Tuesday</h2>\n              <ul class="lead mb-0">\n                  <li>Pot Roast Dinner</li>\n                  <li>Pot Roast French Dip</li>\n                  <li>Pot Roast Twister</li>\n              </ul>\n            </div>\n          </div>\n          <div class="row no-gutters border-bottom">\n            <div class="col-lg-6 my-auto showcase-text">\n              <h2>Wednesday</h2>\n              <ul class="lead mb-0">\n                <li>Roast Pork Dinner</li>\n                <li>Hot Pork Sandwich</li>\n                <li>BBQ Pork Sandwich</li>\n                <li>Pork Twister</li>\n              </ul>\n            </div>\n            <div class="col-lg-6 text-white showcase-img" style="background-image: url(\'img/pork.jpg\');"></div>\n          </div>\n          <div class="row no-gutters">\n            <div class="col-lg-6 text-white showcase-img" style="background-image: url(\'img/meatloaf.jpg\');"></div>\n            <div class="col-lg-6 my-auto showcase-text">\n              <h2>Thursday</h2>\n              <ul class="lead mb-0">\n                <li>Meatloaf Dinner</li>\n                <li>Hot Meatloaf Sandwich</li>\n                <li>Cold Meatloaf Sandwich</li>\n                <li>Navajo Meatloaf Sandwich</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </section>  \n    '), Spacebars.include(view.lookupTemplate("WebFooter")) ];
}));                                                                                                                  // 6
                                                                                                                      // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.WebMenuCol.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/web/template.WebMenuCol.js                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("WebMenuCol");                                                                                   // 2
Template["WebMenuCol"] = new Template("Template.WebMenuCol", (function() {                                            // 3
  var view = this;                                                                                                    // 4
  return Blaze.If(function() {                                                                                        // 5
    return Spacebars.call(view.lookup("special"));                                                                    // 6
  }, function() {                                                                                                     // 7
    return [ "\n        ", HTML.DIV({                                                                                 // 8
      class: "special"                                                                                                // 9
    }, "\n            ", HTML.DIV({                                                                                   // 10
      class: "menu-content"                                                                                           // 11
    }, "\n                ", HTML.DIV({                                                                               // 12
      class: "menu-heading"                                                                                           // 13
    }, Blaze.View("lookup:name", function() {                                                                         // 14
      return Spacebars.mustache(view.lookup("name"));                                                                 // 15
    })), "\n                ", HTML.DIV({                                                                             // 16
      class: "description"                                                                                            // 17
    }, Blaze.View("lookup:desc", function() {                                                                         // 18
      return Spacebars.mustache(view.lookup("desc"));                                                                 // 19
    }), "\n                ", HTML.DIV({                                                                              // 20
      class: "price"                                                                                                  // 21
    }, Blaze.View("lookup:price", function() {                                                                        // 22
      return Spacebars.mustache(view.lookup("price"));                                                                // 23
    })), "\n                "), "\n            "), "\n        "), "\n        " ];                                     // 24
  }, function() {                                                                                                     // 25
    return [ "\n            ", HTML.DIV({                                                                             // 26
      class: "menu-content"                                                                                           // 27
    }, "\n                ", HTML.DIV({                                                                               // 28
      class: "menu-heading"                                                                                           // 29
    }, Blaze.View("lookup:name", function() {                                                                         // 30
      return Spacebars.mustache(view.lookup("name"));                                                                 // 31
    })), "\n                ", HTML.DIV({                                                                             // 32
      class: "description"                                                                                            // 33
    }, Blaze.View("lookup:desc", function() {                                                                         // 34
      return Spacebars.mustache(view.lookup("desc"));                                                                 // 35
    }), "\n                ", HTML.DIV({                                                                              // 36
      class: "price"                                                                                                  // 37
    }, Blaze.View("lookup:price", function() {                                                                        // 38
      return Spacebars.mustache(view.lookup("price"));                                                                // 39
    })), "\n                "), "\n            "), "\n    " ];                                                        // 40
  });                                                                                                                 // 41
}));                                                                                                                  // 42
                                                                                                                      // 43
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"appetizers.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/web/appetizers.js                                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.Appetizers.onCreated(function () {                                                                           // 1
	var self = this;                                                                                                     // 2
	self.autorun(function () {                                                                                           // 3
		self.subscribe('recipes');                                                                                          // 4
	});                                                                                                                  // 5
});                                                                                                                   // 6
Template.Appetizers.helpers({                                                                                         // 8
	cat1col1: function () {                                                                                              // 9
		return Recipes.find({                                                                                               // 10
			"column": 1,                                                                                                       // 10
			"category": "Appetizers",                                                                                          // 10
			"inMenu": true                                                                                                     // 10
		}, {                                                                                                                // 10
			sort: {                                                                                                            // 10
				"position": 1                                                                                                     // 10
			}                                                                                                                  // 10
		});                                                                                                                 // 10
	},                                                                                                                   // 11
	cat1col2: function () {                                                                                              // 12
		return Recipes.find({                                                                                               // 13
			"column": 2,                                                                                                       // 13
			"category": "Appetizers",                                                                                          // 13
			"inMenu": true                                                                                                     // 13
		}, {                                                                                                                // 13
			sort: {                                                                                                            // 13
				"position": 1                                                                                                     // 13
			}                                                                                                                  // 13
		});                                                                                                                 // 13
	},                                                                                                                   // 14
	cat1col3: function () {                                                                                              // 15
		return Recipes.find({                                                                                               // 16
			"column": 3,                                                                                                       // 16
			"category": "Appetizers",                                                                                          // 16
			"inMenu": true                                                                                                     // 16
		}, {                                                                                                                // 16
			sort: {                                                                                                            // 16
				"position": 1                                                                                                     // 16
			}                                                                                                                  // 16
		});                                                                                                                 // 16
	}                                                                                                                    // 17
});                                                                                                                   // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"frontpage.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/web/frontpage.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.FrontPage.onCreated(function () {                                                                            // 1
	var self = this;                                                                                                     // 2
	self.autorun(function () {                                                                                           // 3
		self.subscribe('recipes');                                                                                          // 4
	});                                                                                                                  // 5
});                                                                                                                   // 6
Template.FrontPage.events({                                                                                           // 8
	'click .dropdown-toggle': function (e) {                                                                             // 9
		e.preventDefault();                                                                                                 // 10
		$(e.target).find('.dropdown-menu').toggle();                                                                        // 11
	}                                                                                                                    // 12
});                                                                                                                   // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"basicinfo":{"template.BasicInfo.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/basicinfo/template.BasicInfo.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("BasicInfo");                                                                                    // 2
Template["BasicInfo"] = new Template("Template.BasicInfo", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return [ HTML.Raw("<h1>Business Information</h1>\n        "), Blaze.If(function() {                                 // 5
    return Spacebars.dataMustache(Spacebars.dot(view.lookup("$"), "Session", "get"), "editProfile");                  // 6
  }, function() {                                                                                                     // 7
    return [ "\n            ", Spacebars.include(view.lookupTemplate("EditProfile")), "\n        " ];                 // 8
  }, function() {                                                                                                     // 9
    return "\n        ";                                                                                              // 10
  }), "\n    ", HTML.SECTION({                                                                                        // 11
    class: "recipes"                                                                                                  // 12
  }, "\n        ", Blaze.If(function() {                                                                              // 13
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                              // 14
  }, function() {                                                                                                     // 15
    return [ "\n            ", Blaze.If(function() {                                                                  // 16
      return Spacebars.call(view.lookup("notEmpty"));                                                                 // 17
    }, function() {                                                                                                   // 18
      return [ "\n                ", Blaze.Each(function() {                                                          // 19
        return Spacebars.call(view.lookup("profile"));                                                                // 20
      }, function() {                                                                                                 // 21
        return [ "\n                    ", Spacebars.include(view.lookupTemplate("Profile")), "\n                " ];
      }), "\n            " ];                                                                                         // 23
    }, function() {                                                                                                   // 24
      return [ "\n                ", Spacebars.include(view.lookupTemplate("EditProfile")), "\n            " ];       // 25
    }), "\n        " ];                                                                                               // 26
  }, function() {                                                                                                     // 27
    return [ "\n            ", HTML.P("Loading"), "\n        " ];                                                     // 28
  }), "\n    ") ];                                                                                                    // 29
}));                                                                                                                  // 30
                                                                                                                      // 31
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.EditProfile.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/basicinfo/template.EditProfile.js                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("EditProfile");                                                                                  // 2
Template["EditProfile"] = new Template("Template.EditProfile", (function() {                                          // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    class: "new-recipe-container"                                                                                     // 6
  }, HTML.Raw('\n            <i class="fa fa-close"></i>\n            '), Blaze._TemplateWith(function() {            // 7
    return {                                                                                                          // 8
      collection: Spacebars.call("Profile"),                                                                          // 9
      id: Spacebars.call("insertProfileForm"),                                                                        // 10
      type: Spacebars.call("insert"),                                                                                 // 11
      class: Spacebars.call("new-recipe-form")                                                                        // 12
    };                                                                                                                // 13
  }, function() {                                                                                                     // 14
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                       // 15
  }), "\n        ");                                                                                                  // 16
}));                                                                                                                  // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Profile.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/basicinfo/template.Profile.js                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("Profile");                                                                                      // 2
Template["Profile"] = new Template("Template.Profile", (function() {                                                  // 3
  var view = this;                                                                                                    // 4
  return HTML.ARTICLE({                                                                                               // 5
    class: "recipe"                                                                                                   // 6
  }, "\n            \n            ", HTML.H3(Blaze.View("lookup:businessName", function() {                           // 7
    return Spacebars.mustache(view.lookup("businessName"));                                                           // 8
  })), "\n            ", HTML.H2(Blaze.View("lookup:address.city", function() {                                       // 9
    return Spacebars.mustache(Spacebars.dot(view.lookup("address"), "city"));                                         // 10
  }), HTML.SPAN({                                                                                                     // 11
    class: "storeNumber"                                                                                              // 12
  }, "store #", Blaze.View("lookup:storeNumber", function() {                                                         // 13
    return Spacebars.mustache(view.lookup("storeNumber"));                                                            // 14
  }))), "\n            ", HTML.DIV({                                                                                  // 15
    class: "profile-links"                                                                                            // 16
  }, "\n                ", HTML.A({                                                                                   // 17
    href: function() {                                                                                                // 18
      return [ "tel:", Spacebars.mustache(view.lookup("phoneNumber")) ];                                              // 19
    }                                                                                                                 // 20
  }, HTML.Raw('<i class="fa fa-phone"></i>')), "\n                ", HTML.A({                                         // 21
    href: function() {                                                                                                // 22
      return [ "mailto:", Spacebars.mustache(view.lookup("email")) ];                                                 // 23
    }                                                                                                                 // 24
  }, HTML.Raw('<i class="fa fa-paper-plane"></i>')), "\n            "), "\n            ", Blaze.If(function() {       // 25
    return Spacebars.call(view.lookup("editMode"));                                                                   // 26
  }, function() {                                                                                                     // 27
    return [ "\n                ", Blaze._TemplateWith(function() {                                                   // 28
      return {                                                                                                        // 29
        collection: Spacebars.call("Profile"),                                                                        // 30
        id: Spacebars.call(view.lookup("updateProfileId")),                                                           // 31
        type: Spacebars.call("update"),                                                                               // 32
        doc: Spacebars.call(view.lookup(".")),                                                                        // 33
        autosave: Spacebars.call(true)                                                                                // 34
      };                                                                                                              // 35
    }, function() {                                                                                                   // 36
      return Spacebars.include(view.lookupTemplate("quickForm"));                                                     // 37
    }), "\n            " ];                                                                                           // 38
  }), HTML.Raw('\n                <i class="fa fa-trash"></i>\n                <i class="fa fa-pencil"></i>\n        '));
}));                                                                                                                  // 40
                                                                                                                      // 41
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"basicinfo.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/basicinfo/basicinfo.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.BasicInfo.onCreated(function () {                                                                            // 1
	var self = this;                                                                                                     // 2
	self.autorun(function () {                                                                                           // 3
		self.subscribe('profile');                                                                                          // 4
	});                                                                                                                  // 5
});                                                                                                                   // 6
Template.BasicInfo.helpers({                                                                                          // 8
	profile: function () {                                                                                               // 9
		return Profile.find({});                                                                                            // 10
	}                                                                                                                    // 11
});                                                                                                                   // 8
Template.BasicInfo.helpers({                                                                                          // 14
	notEmpty: function () {                                                                                              // 15
		if (Profile.find({}).count() > 0) {                                                                                 // 16
			return true;                                                                                                       // 17
		}                                                                                                                   // 18
	}                                                                                                                    // 19
});                                                                                                                   // 14
Template.BasicInfo.events({                                                                                           // 22
	'click .edit-profile': function () {                                                                                 // 23
		Session.set('editProfile', true);                                                                                   // 24
	}                                                                                                                    // 25
});                                                                                                                   // 22
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"editprofile.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/basicinfo/editprofile.js                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.EditProfile.events({                                                                                         // 1
	'click .fa-close': function () {                                                                                     // 2
		Session.set('editProfile', false);                                                                                  // 3
	}                                                                                                                    // 4
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"profile.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/basicinfo/profile.js                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.Profile.onCreated(function () {                                                                              // 1
	this.editMode = new ReactiveVar(false); //	this.editMode = new ReactiveVar();                                        // 2
	// this.editMode.set(false);                                                                                         // 4
});                                                                                                                   // 5
Template.Profile.helpers({                                                                                            // 7
	updateProfileId: function () {                                                                                       // 8
		return this._id;                                                                                                    // 9
	},                                                                                                                   // 10
	editMode: function () {                                                                                              // 11
		return Template.instance().editMode.get();                                                                          // 12
	}                                                                                                                    // 13
});                                                                                                                   // 7
Template.Profile.events({                                                                                             // 16
	'click .fa-trash': function () {                                                                                     // 17
		Meteor.call('deleteProfile', this._id);                                                                             // 18
	},                                                                                                                   // 19
	'click .fa-pencil': function (event, template) {                                                                     // 20
		template.editMode.set(!template.editMode.get());                                                                    // 21
	}                                                                                                                    // 22
});                                                                                                                   // 16
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"layouts":{"template.HomeLayout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/layouts/template.HomeLayout.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("HomeLayout");                                                                                   // 2
Template["HomeLayout"] = new Template("Template.HomeLayout", (function() {                                            // 3
  var view = this;                                                                                                    // 4
  return [ HTML.HEAD("\n\t\t\t", HTML.Raw('<meta name="viewport" content="user-scalable=no, width=device-width, maximum-scale=1, initial-scale=1, minimum-scale=1">'), "\n\t\t\t", HTML.SCRIPT({
    src: "https://use.typekit.net/bwy8ugg.js"                                                                         // 6
  }), "\n\t\t\t", HTML.SCRIPT("try{Typekit.load({ async: true });}catch(e){}"), "\t\t\t\n\t"), "\n\t", Spacebars.include(view.lookupTemplate("WebHeader")), "\n\t\t", HTML.MAIN({
    class: "web-main-layout"                                                                                          // 8
  }, "\n\t\t\t", Blaze._TemplateWith(function() {                                                                     // 9
    return {                                                                                                          // 10
      template: Spacebars.call(view.lookup("main"))                                                                   // 11
    };                                                                                                                // 12
  }, function() {                                                                                                     // 13
    return Spacebars.include(function() {                                                                             // 14
      return Spacebars.call(Template.__dynamic);                                                                      // 15
    });                                                                                                               // 16
  }), "\n\t\t"), "\n\t", Spacebars.include(view.lookupTemplate("WebFooter")) ];                                       // 17
}));                                                                                                                  // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.MainLayout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/layouts/template.MainLayout.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("MainLayout");                                                                                   // 2
Template["MainLayout"] = new Template("Template.MainLayout", (function() {                                            // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    class: "main-container"                                                                                           // 6
  }, "\n\t\t", Spacebars.include(view.lookupTemplate("Header")), "\n\t\t", Spacebars.include(view.lookupTemplate("SideNav")), "\n\t\t", HTML.MAIN({
    class: "main-layout"                                                                                              // 8
  }, "\n\t\t\t", Blaze._TemplateWith(function() {                                                                     // 9
    return {                                                                                                          // 10
      template: Spacebars.call(view.lookup("main"))                                                                   // 11
    };                                                                                                                // 12
  }, function() {                                                                                                     // 13
    return Spacebars.include(function() {                                                                             // 14
      return Spacebars.call(Template.__dynamic);                                                                      // 15
    });                                                                                                               // 16
  }), "\n\t\t"), "\n\t");                                                                                             // 17
}));                                                                                                                  // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"partials":{"template.Header.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/partials/template.Header.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("Header");                                                                                       // 2
Template["Header"] = new Template("Template.Header", (function() {                                                    // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    class: "admin-links"                                                                                              // 6
  }, "\n\t    ", HTML.NAV({                                                                                           // 7
    class: "navbar navbar-default admin-nav",                                                                         // 8
    id: "admin-nav"                                                                                                   // 9
  }, "\n\t\t\t\t", HTML.DIV({                                                                                         // 10
    class: "container-fluid"                                                                                          // 11
  }, "\n\t\t\t\t\t", HTML.Raw("<!-- Brand and toggle get grouped for better mobile display. -->"), "\n\t\t\t\t\t", HTML.DIV({
    class: "navbar-header"                                                                                            // 13
  }, "\n\t\t\t\t\t", HTML.Raw('<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n\t\t\t\t\t\t<span class="sr-only">Toggle navigation</span>\n\t\t\t\t\t\t<span class="icon-bar"></span>\n\t\t\t\t\t\t<span class="icon-bar"></span>\n\t\t\t\t\t\t<span class="icon-bar"></span>\n\t\t\t\t\t</button>'), "\n\t\t\t\t\t", HTML.A({
    class: "navbar-brand",                                                                                            // 15
    href: "/"                                                                                                         // 16
  }, "\n\t\t\t\t\t", Blaze.Each(function() {                                                                          // 17
    return Spacebars.call(view.lookup("profile"));                                                                    // 18
  }, function() {                                                                                                     // 19
    return [ "\t\n\t\t\t\t\t\t", Blaze.View("lookup:businessName", function() {                                       // 20
      return Spacebars.mustache(view.lookup("businessName"));                                                         // 21
    }), "\n\t\t\t\t\t" ];                                                                                             // 22
  }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\n\t\t\t\t\t", HTML.Raw("<!-- Collect the nav links, forms, and other content for toggling -->"), "\n\t\t\t\t\t", HTML.DIV({
    class: "collapse navbar-collapse",                                                                                // 24
    id: "bs-example-navbar-collapse-1"                                                                                // 25
  }, "\n\t\t\t\t\t", HTML.Raw('<ul class="nav navbar-nav">\n\t\t\t\t\t\t<li class="dropdown">\n\t\t\t\t\t\t<a id="admin-actions" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Actions<span class="caret"></span></a>\n\t\t\t\t\t\t<ul class="dropdown-menu">\n\t\t\t\t\t\t\t<li><a href="/admin-menu">Admin</a></li>\n\t\t\t\t\t\t\t<li role="separator" class="divider"></li>\n\t\t\t\t\t\t\t<li><a href="/">Website</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>'), "\n\t\t\t\t\t", HTML.UL({
    class: "nav navbar-nav navbar-right"                                                                              // 27
  }, "\n\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("loginButtons")), "\n\t\t\t\t\t"), "\n\t\t\t\t\t"), HTML.Raw("<!-- /.navbar-collapse -->"), "\n\t\t\t\t"), HTML.Raw("<!-- /.container-flid -->"), "\n\t\t\t"), "\n\t\t");
}));                                                                                                                  // 29
                                                                                                                      // 30
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.SideNav.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/partials/template.SideNav.js                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("SideNav");                                                                                      // 2
Template["SideNav"] = new Template("Template.SideNav", (function() {                                                  // 3
  var view = this;                                                                                                    // 4
  return HTML.Raw('<nav class="side-nav">\n\t\t<ul>\n\t\t\t<li><a href="/basic-info"><i class="fa fa-home"></i>Basic Info</a></li>\n\t\t\t<li><a href="/admin-menu"><i class="fa fa-cutlery"></i>Appetizers</a></li>\n\t\t\t<li><a href="/admin-menu"><i class="fa fa-cutlery"></i>Breakfast</a></li>\n\t\t\t<li><a href="/admin-menu"><i class="fa fa-cutlery"></i>Lunch/Dinner</a></li>\n\t\t\t<li><a href="/admin-menu"><i class="fa fa-apple"></i>Dessert</a></li>\n\t\t\t<li><a href="/admin-menu"><i class="fa fa-glass"></i>From the Bar</a></li>\n\t\t\t<li><a href="/support"><i class="fa fa-life-ring"></i>Support</a></li>\n\t\t</ul>\n\t</nav>');
}));                                                                                                                  // 6
                                                                                                                      // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/partials/header.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.Header.onCreated(function () {                                                                               // 1
	var self = this;                                                                                                     // 2
	self.autorun(function () {                                                                                           // 3
		self.subscribe('profile');                                                                                          // 4
	});                                                                                                                  // 5
});                                                                                                                   // 6
Template.Header.helpers({                                                                                             // 8
	profile: function () {                                                                                               // 9
		return Profile.find({});                                                                                            // 10
	}                                                                                                                    // 11
});                                                                                                                   // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"recipes":{"template.Menu.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/template.Menu.js                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("Menu");                                                                                         // 2
Template["Menu"] = new Template("Template.Menu", (function() {                                                        // 3
  var view = this;                                                                                                    // 4
  return [ HTML.Raw('<h1 class="page-title">My Current Menu</h1>\n\t'), Blaze.Each(function() {                       // 5
    return Spacebars.call(view.lookup("recipes"));                                                                    // 6
  }, function() {                                                                                                     // 7
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("MenuItem")), "\n\t" ];                                  // 8
  }, function() {                                                                                                     // 9
    return [ "\n\t\t", HTML.H2("Please add ", HTML.A({                                                                // 10
      href: "/recipe-book"                                                                                            // 11
    }, "items"), " to your menu."), "\n\t" ];                                                                         // 12
  }) ];                                                                                                               // 13
}));                                                                                                                  // 14
                                                                                                                      // 15
Template.__checkName("MenuItem");                                                                                     // 16
Template["MenuItem"] = new Template("Template.MenuItem", (function() {                                                // 17
  var view = this;                                                                                                    // 18
  return HTML.DIV({                                                                                                   // 19
    class: "menu-item"                                                                                                // 20
  }, "\n\t\t", HTML.SPAN({                                                                                            // 21
    class: "boxPriceMenu"                                                                                             // 22
  }, Blaze.View("lookup:price", function() {                                                                          // 23
    return Spacebars.mustache(view.lookup("price"));                                                                  // 24
  })), "\n\t\t", HTML.H3(Blaze.View("lookup:name", function() {                                                       // 25
    return Spacebars.mustache(view.lookup("name"));                                                                   // 26
  })), "\n\t\t", HTML.P(Blaze.View("lookup:desc", function() {                                                        // 27
    return Spacebars.mustache(view.lookup("desc"));                                                                   // 28
  })), "\n\t");                                                                                                       // 29
}));                                                                                                                  // 30
                                                                                                                      // 31
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.NewRecipe.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/template.NewRecipe.js                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("NewRecipe");                                                                                    // 2
Template["NewRecipe"] = new Template("Template.NewRecipe", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    class: "new-recipe-container"                                                                                     // 6
  }, HTML.Raw('\n\t\t<i class="fa fa-close"></i>\n\t\t'), Blaze._TemplateWith(function() {                            // 7
    return {                                                                                                          // 8
      collection: Spacebars.call("Recipes"),                                                                          // 9
      id: Spacebars.call("insertRecipeForm"),                                                                         // 10
      type: Spacebars.call("insert"),                                                                                 // 11
      class: Spacebars.call("new-recipe-form")                                                                        // 12
    };                                                                                                                // 13
  }, function() {                                                                                                     // 14
    return Spacebars.include(view.lookupTemplate("quickForm"));                                                       // 15
  }), "\n\t");                                                                                                        // 16
}));                                                                                                                  // 17
                                                                                                                      // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Recipe.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/template.Recipe.js                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("Recipe");                                                                                       // 2
Template["Recipe"] = new Template("Template.Recipe", (function() {                                                    // 3
  var view = this;                                                                                                    // 4
  return HTML.ARTICLE({                                                                                               // 5
    class: function() {                                                                                               // 6
      return [ "recipe ", Blaze.If(function() {                                                                       // 7
        return Spacebars.call(view.lookup("inMenu"));                                                                 // 8
      }, function() {                                                                                                 // 9
        return "in-menu";                                                                                             // 10
      }) ];                                                                                                           // 11
    }                                                                                                                 // 12
  }, "\n\t\t", HTML.H3(Blaze.View("lookup:name", function() {                                                         // 13
    return Spacebars.mustache(view.lookup("name"));                                                                   // 14
  })), "\n\t\t", Blaze.If(function() {                                                                                // 15
    return Spacebars.call(view.lookup("editMode"));                                                                   // 16
  }, function() {                                                                                                     // 17
    return [ "\n\t\t\t", Blaze._TemplateWith(function() {                                                             // 18
      return {                                                                                                        // 19
        collection: Spacebars.call("Recipes"),                                                                        // 20
        id: Spacebars.call(view.lookup("updateRecipeId")),                                                            // 21
        type: Spacebars.call("update"),                                                                               // 22
        doc: Spacebars.call(view.lookup(".")),                                                                        // 23
        autosave: Spacebars.call(true)                                                                                // 24
      };                                                                                                              // 25
    }, function() {                                                                                                   // 26
      return Spacebars.include(view.lookupTemplate("quickForm"));                                                     // 27
    }), "\n\t\t" ];                                                                                                   // 28
  }, function() {                                                                                                     // 29
    return [ "\n\t\t\t", HTML.Comment(' <a href="/recipe/{{_id}}">View Details</a> '), "\n\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("inMenu"));                                                                   // 31
    }, function() {                                                                                                   // 32
      return [ "\n\t\t\t\t", HTML.BUTTON({                                                                            // 33
        class: "btn-deny toggle-menu"                                                                                 // 34
      }, "Remove from Menu"), "\n\t\t\t" ];                                                                           // 35
    }, function() {                                                                                                   // 36
      return [ "\n\t\t\t \t", HTML.BUTTON({                                                                           // 37
        class: "btn-primary toggle-menu"                                                                              // 38
      }, "Add to Menu"), "\n\t\t\t" ];                                                                                // 39
    }), "\n\t\t" ];                                                                                                   // 40
  }), HTML.Raw('\n\t\t\t<i class="fa fa-trash"></i>\n\t\t\t<i class="fa fa-pencil"></i>\n\t'));                       // 41
}));                                                                                                                  // 42
                                                                                                                      // 43
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.RecipeSingle.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/template.RecipeSingle.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("RecipeSingle");                                                                                 // 2
Template["RecipeSingle"] = new Template("Template.RecipeSingle", (function() {                                        // 3
  var view = this;                                                                                                    // 4
  return HTML.H1(Blaze.View("lookup:recipe.name", function() {                                                        // 5
    return Spacebars.mustache(Spacebars.dot(view.lookup("recipe"), "name"));                                          // 6
  }));                                                                                                                // 7
}));                                                                                                                  // 8
                                                                                                                      // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Recipes.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/template.Recipes.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("Recipes");                                                                                      // 2
Template["Recipes"] = new Template("Template.Recipes", (function() {                                                  // 3
  var view = this;                                                                                                    // 4
  return [ Blaze.If(function() {                                                                                      // 5
    return Spacebars.dataMustache(Spacebars.dot(view.lookup("$"), "Session", "get"), "newRecipe");                    // 6
  }, function() {                                                                                                     // 7
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("NewRecipe")), "\n\t" ];                                 // 8
  }, function() {                                                                                                     // 9
    return [ "\n\t\t", HTML.BUTTON({                                                                                  // 10
      class: "new-recipe"                                                                                             // 11
    }, "New Menu Item"), "\n\t" ];                                                                                    // 12
  }), "\t\n\t", HTML.SECTION({                                                                                        // 13
    class: "recipes"                                                                                                  // 14
  }, "\n\t\t", Blaze.If(function() {                                                                                  // 15
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                              // 16
  }, function() {                                                                                                     // 17
    return [ "\n\t\t\t", Blaze.Each(function() {                                                                      // 18
      return Spacebars.call(view.lookup("recipes"));                                                                  // 19
    }, function() {                                                                                                   // 20
      return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("Recipe")), "\n\t\t\t" ];                          // 21
    }), "\n\t\t" ];                                                                                                   // 22
  }, function() {                                                                                                     // 23
    return [ "\n\t\t\t", HTML.P("Loading"), "\n\t\t" ];                                                               // 24
  }), "\n\t") ];                                                                                                      // 25
}));                                                                                                                  // 26
                                                                                                                      // 27
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.ShoppingList.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/template.ShoppingList.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("ShoppingList");                                                                                 // 2
Template["ShoppingList"] = new Template("Template.ShoppingList", (function() {                                        // 3
  var view = this;                                                                                                    // 4
  return [ HTML.Raw('<h1 class="page-title">Review and Purchase</h1>\n\t'), HTML.UL({                                 // 5
    class: "shopping-list"                                                                                            // 6
  }, "\n\t\t", Blaze.Each(function() {                                                                                // 7
    return Spacebars.call(view.lookup("shoppingList"));                                                               // 8
  }, function() {                                                                                                     // 9
    return [ "\n\t\t\t", Blaze.Each(function() {                                                                      // 10
      return Spacebars.call(view.lookup("ingredients"));                                                              // 11
    }, function() {                                                                                                   // 12
      return [ "\n\t\t\t\t", HTML.LI(Blaze.View("lookup:name", function() {                                           // 13
        return Spacebars.mustache(view.lookup("name"));                                                               // 14
      }), " - ", HTML.SPAN({                                                                                          // 15
        class: "amount"                                                                                               // 16
      }, Blaze.View("lookup:amount", function() {                                                                     // 17
        return Spacebars.mustache(view.lookup("amount"));                                                             // 18
      }))), "\n\t\t\t" ];                                                                                             // 19
    }), "\n\n\t\t" ];                                                                                                 // 20
  }, function() {                                                                                                     // 21
    return [ "\n\t\t\t", HTML.LI("Uh, oh. Please add ", HTML.A({                                                      // 22
      href: "/recipe-book"                                                                                            // 23
    }, "entrees"), " to your box."), "\n\t\t" ];                                                                      // 24
  }), "\n\t\t", Blaze.If(function() {                                                                                 // 25
    return Spacebars.call(view.lookup("checkoutButton"));                                                             // 26
  }, function() {                                                                                                     // 27
    return [ "\n\t\t", HTML.BUTTON("checkout"), "\n\t\t" ];                                                           // 28
  }), "\n\t") ];                                                                                                      // 29
}));                                                                                                                  // 30
                                                                                                                      // 31
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NewRecipe.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/NewRecipe.js                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.NewRecipe.events({                                                                                           // 1
	'click .fa-close': function () {                                                                                     // 2
		Session.set('newRecipe', false);                                                                                    // 3
	}                                                                                                                    // 4
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"RecipeSingle.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/RecipeSingle.js                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.RecipeSingle.onCreated(function () {                                                                         // 1
	var self = this;                                                                                                     // 2
	self.autorun(function () {                                                                                           // 3
		var id = FlowRouter.getParam('id');                                                                                 // 4
		self.subscribe('SingleRecipe', id);                                                                                 // 5
	});                                                                                                                  // 6
});                                                                                                                   // 7
Template.RecipeSingle.helpers({                                                                                       // 9
	recipe: function () {                                                                                                // 10
		var id = FlowRouter.getParam('id');                                                                                 // 11
		return Recipes.findOne({                                                                                            // 12
			_id: id                                                                                                            // 12
		});                                                                                                                 // 12
	}                                                                                                                    // 13
});                                                                                                                   // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ShoppingList.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/ShoppingList.js                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.ShoppingList.onCreated(function () {                                                                         // 1
	var self = this;                                                                                                     // 2
	self.autorun(function () {                                                                                           // 3
		self.subscribe('recipes');                                                                                          // 4
	});                                                                                                                  // 5
});                                                                                                                   // 6
Template.ShoppingList.helpers({                                                                                       // 8
	shoppingList: function () {                                                                                          // 9
		return Recipes.find({                                                                                               // 10
			inMenu: true                                                                                                       // 10
		});                                                                                                                 // 10
	},                                                                                                                   // 11
	checkoutButton: function () {                                                                                        // 12
		return Recipes.findOne({                                                                                            // 13
			inMenu: true                                                                                                       // 13
		});                                                                                                                 // 13
	}                                                                                                                    // 14
});                                                                                                                   // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"menu.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/menu.js                                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.Menu.onCreated(function () {                                                                                 // 1
	var self = this;                                                                                                     // 2
	self.autorun(function () {                                                                                           // 3
		self.subscribe('recipes');                                                                                          // 4
	});                                                                                                                  // 5
});                                                                                                                   // 6
Template.Menu.helpers({                                                                                               // 8
	recipes: function () {                                                                                               // 9
		return Recipes.find({                                                                                               // 10
			inMenu: true                                                                                                       // 10
		});                                                                                                                 // 10
	}                                                                                                                    // 11
});                                                                                                                   // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"recipe.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/recipe.js                                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.Recipe.onCreated(function () {                                                                               // 1
	this.editMode = new ReactiveVar(false); //	this.editMode = new ReactiveVar();                                        // 2
	// this.editMode.set(false);                                                                                         // 4
});                                                                                                                   // 5
Template.Recipe.helpers({                                                                                             // 7
	updateRecipeId: function () {                                                                                        // 8
		return this._id;                                                                                                    // 9
	},                                                                                                                   // 10
	editMode: function () {                                                                                              // 11
		return Template.instance().editMode.get();                                                                          // 12
	}                                                                                                                    // 13
});                                                                                                                   // 7
Template.Recipe.events({                                                                                              // 16
	'click .toggle-menu': function () {                                                                                  // 17
		Meteor.call('toggleMenuItem', this._id, this.inMenu, this.menuCount);                                               // 18
	},                                                                                                                   // 19
	'click .fa-trash': function () {                                                                                     // 20
		Meteor.call('deleteRecipe', this._id);                                                                              // 21
	},                                                                                                                   // 22
	'click .fa-pencil': function (event, template) {                                                                     // 23
		template.editMode.set(!template.editMode.get());                                                                    // 24
	}                                                                                                                    // 25
});                                                                                                                   // 16
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"recipes.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/recipes/recipes.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.Recipes.onCreated(function () {                                                                              // 1
	var self = this;                                                                                                     // 2
	self.autorun(function () {                                                                                           // 3
		self.subscribe('recipes');                                                                                          // 4
	});                                                                                                                  // 5
});                                                                                                                   // 6
Template.Recipes.helpers({                                                                                            // 8
	recipes: function () {                                                                                               // 9
		return Recipes.find({                                                                                               // 10
			"category": "Appetizers"                                                                                           // 10
		});                                                                                                                 // 10
	}                                                                                                                    // 11
});                                                                                                                   // 8
Template.Recipes.events({                                                                                             // 14
	'click .new-recipe': function () {                                                                                   // 15
		Session.set('newRecipe', true);                                                                                     // 16
	}                                                                                                                    // 17
});                                                                                                                   // 14
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"support":{"template.Support.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/support/template.Support.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("Support");                                                                                      // 2
Template["Support"] = new Template("Template.Support", (function() {                                                  // 3
  var view = this;                                                                                                    // 4
  return HTML.Raw("<h1>Support</h1>");                                                                                // 5
}));                                                                                                                  // 6
                                                                                                                      // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"config":{"accounts-config.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/config/accounts-config.js                                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Accounts.config({                                                                                                     // 1
    forbidClientAccountCreation: true                                                                                 // 2
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"lib":{"routes.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/routes.js                                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
if (Meteor.isClient) {                                                                                                // 1
	Accounts.onLogin(function () {                                                                                       // 2
		FlowRouter.go('admin-menu');                                                                                        // 3
	});                                                                                                                  // 4
	Accounts.onLogout(function () {                                                                                      // 6
		FlowRouter.go('home');                                                                                              // 7
	});                                                                                                                  // 8
} // FlowRouter.triggers.enter([function(context, redirect){                                                          // 9
// 	if(!Meteor.userId()) {                                                                                            // 11
// 		FlowRouter.go('home');                                                                                           // 12
// 	}                                                                                                                 // 13
// }]);                                                                                                               // 14
                                                                                                                      //
                                                                                                                      //
FlowRouter.route('/', {                                                                                               // 16
	name: 'home',                                                                                                        // 17
	action: function () {                                                                                                // 18
		if (Meteor.userId()) {                                                                                              // 19
			FlowRouter.go('/');                                                                                                // 20
		}                                                                                                                   // 21
                                                                                                                      //
		GAnalytics.pageview();                                                                                              // 22
		BlazeLayout.render('HomeLayout', {                                                                                  // 23
			main: 'FrontPage'                                                                                                  // 23
		});                                                                                                                 // 23
	}                                                                                                                    // 24
});                                                                                                                   // 16
FlowRouter.route('/appetizers', {                                                                                     // 27
	name: 'appetizers',                                                                                                  // 28
	action: function () {                                                                                                // 29
		GAnalytics.pageview();                                                                                              // 30
		BlazeLayout.render('HomeLayout', {                                                                                  // 31
			main: 'Appetizers'                                                                                                 // 31
		});                                                                                                                 // 31
	}                                                                                                                    // 32
});                                                                                                                   // 27
FlowRouter.route('/profile', {                                                                                        // 35
	name: 'profile',                                                                                                     // 36
	action: function () {                                                                                                // 37
		if (Meteor.userId()) {                                                                                              // 38
			FlowRouter.go('profile');                                                                                          // 39
		}                                                                                                                   // 40
                                                                                                                      //
		GAnalytics.pageview();                                                                                              // 41
		BlazeLayout.render('MainLayout');                                                                                   // 42
	}                                                                                                                    // 43
});                                                                                                                   // 35
FlowRouter.route('/admin-menu', {                                                                                     // 46
	name: 'admin-menu',                                                                                                  // 47
	action: function () {                                                                                                // 48
		if (Meteor.userId()) {                                                                                              // 49
			FlowRouter.go('admin-menu');                                                                                       // 50
		}                                                                                                                   // 51
                                                                                                                      //
		GAnalytics.pageview();                                                                                              // 52
		BlazeLayout.render('MainLayout', {                                                                                  // 53
			main: 'Recipes'                                                                                                    // 53
		});                                                                                                                 // 53
	}                                                                                                                    // 54
}); // SUPPORT                                                                                                        // 46
                                                                                                                      //
FlowRouter.route('/support', {                                                                                        // 57
	name: 'support',                                                                                                     // 58
	action: function () {                                                                                                // 59
		if (Meteor.userId()) {                                                                                              // 60
			FlowRouter.go('support');                                                                                          // 61
		}                                                                                                                   // 62
                                                                                                                      //
		GAnalytics.pageview();                                                                                              // 63
		BlazeLayout.render('MainLayout', {                                                                                  // 64
			main: 'Support'                                                                                                    // 64
		});                                                                                                                 // 64
	}                                                                                                                    // 65
});                                                                                                                   // 57
FlowRouter.route('/basic-info', {                                                                                     // 68
	name: 'basic-info',                                                                                                  // 69
	action: function () {                                                                                                // 70
		if (Meteor.userId()) {                                                                                              // 71
			FlowRouter.go('basic-info');                                                                                       // 72
		}                                                                                                                   // 73
                                                                                                                      //
		GAnalytics.pageview();                                                                                              // 74
		BlazeLayout.render('MainLayout', {                                                                                  // 75
			main: 'BasicInfo'                                                                                                  // 75
		});                                                                                                                 // 75
	}                                                                                                                    // 76
});                                                                                                                   // 68
FlowRouter.route('/recipe/:id', {                                                                                     // 79
	name: 'recipe',                                                                                                      // 80
	action: function () {                                                                                                // 81
		GAnalytics.pageview();                                                                                              // 82
		BlazeLayout.render('MainLayout', {                                                                                  // 83
			main: 'RecipeSingle'                                                                                               // 83
		});                                                                                                                 // 83
	}                                                                                                                    // 84
});                                                                                                                   // 79
FlowRouter.route('/menu', {                                                                                           // 87
	name: 'menu',                                                                                                        // 88
	action: function () {                                                                                                // 89
		BlazeLayout.render('MainLayout', {                                                                                  // 90
			main: 'Menu'                                                                                                       // 90
		});                                                                                                                 // 90
	}                                                                                                                    // 91
});                                                                                                                   // 87
FlowRouter.route('/shopping-list', {                                                                                  // 94
	name: 'shopping-list',                                                                                               // 95
	action: function () {                                                                                                // 96
		BlazeLayout.render('MainLayout', {                                                                                  // 97
			main: 'ShoppingList'                                                                                               // 97
		});                                                                                                                 // 97
	}                                                                                                                    // 98
});                                                                                                                   // 94
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"collections":{"profile.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// collections/profile.js                                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Profile = new Mongo.Collection('profile');                                                                            // 1
Profile.allow({                                                                                                       // 3
    insert: function (userId, doc) {                                                                                  // 4
        return !!userId;                                                                                              // 5
    },                                                                                                                // 6
    update: function (userId, doc) {                                                                                  // 7
        return !!userId;                                                                                              // 8
    }                                                                                                                 // 9
}); // Price = new SimpleSchema({                                                                                     // 3
//     desc: {                                                                                                        // 13
//         type: String,                                                                                              // 14
//         label: "Option",                                                                                           // 15
//         optional: true,                                                                                            // 16
//     },                                                                                                             // 17
//     amount: {                                                                                                      // 18
//         label: "Amount",                                                                                           // 19
//         type: String                                                                                               // 20
//     }                                                                                                              // 21
// });                                                                                                                // 22
                                                                                                                      //
ProfileSchema = new SimpleSchema({                                                                                    // 24
    storeNumber: {                                                                                                    // 25
        type: String,                                                                                                 // 26
        label: "Store #"                                                                                              // 27
    },                                                                                                                // 25
    businessName: {                                                                                                   // 29
        type: String,                                                                                                 // 30
        label: "Business Name"                                                                                        // 31
    },                                                                                                                // 29
    phoneNumber: {                                                                                                    // 33
        type: Number,                                                                                                 // 34
        min: 10,                                                                                                      // 35
        autoform: {                                                                                                   // 36
            afFieldInput: {                                                                                           // 37
                type: "tel"                                                                                           // 38
            }                                                                                                         // 37
        }                                                                                                             // 36
    },                                                                                                                // 33
    email: {                                                                                                          // 42
        type: String,                                                                                                 // 43
        label: "email"                                                                                                // 44
    },                                                                                                                // 42
    address: {                                                                                                        // 46
        type: Object                                                                                                  // 47
    },                                                                                                                // 46
    'address.street': {                                                                                               // 49
        type: String                                                                                                  // 50
    },                                                                                                                // 49
    'address.street2': {                                                                                              // 52
        type: String,                                                                                                 // 53
        optional: true                                                                                                // 54
    },                                                                                                                // 52
    'address.city': {                                                                                                 // 56
        type: String                                                                                                  // 57
    },                                                                                                                // 56
    'address.state': {                                                                                                // 59
        type: String,                                                                                                 // 60
        allowedValues: ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
        autoform: {                                                                                                   // 62
            afFieldInput: {                                                                                           // 63
                firstOption: "(Select a State)"                                                                       // 64
            }                                                                                                         // 63
        }                                                                                                             // 62
    },                                                                                                                // 59
    'address.postalCode': {                                                                                           // 68
        type: String,                                                                                                 // 69
        label: "ZIP"                                                                                                  // 70
    },                                                                                                                // 68
    tagline: {                                                                                                        // 72
        type: String,                                                                                                 // 73
        label: "tagline",                                                                                             // 74
        autoform: {                                                                                                   // 75
            rows: 2                                                                                                   // 76
        }                                                                                                             // 75
    },                                                                                                                // 72
    desc: {                                                                                                           // 79
        type: String,                                                                                                 // 80
        label: "About",                                                                                               // 81
        autoform: {                                                                                                   // 82
            rows: 5                                                                                                   // 83
        }                                                                                                             // 82
    },                                                                                                                // 79
    author: {                                                                                                         // 86
        type: String,                                                                                                 // 87
        label: "Author",                                                                                              // 88
        autoValue: function () {                                                                                      // 89
            return this.userId;                                                                                       // 90
        },                                                                                                            // 91
        autoform: {                                                                                                   // 92
            type: "hidden"                                                                                            // 93
        }                                                                                                             // 92
    },                                                                                                                // 86
    createdAt: {                                                                                                      // 96
        type: Date,                                                                                                   // 97
        label: "Created At",                                                                                          // 98
        autoValue: function () {                                                                                      // 99
            return new Date();                                                                                        // 100
        },                                                                                                            // 101
        autoform: {                                                                                                   // 102
            type: "hidden"                                                                                            // 103
        }                                                                                                             // 102
    }                                                                                                                 // 96
});                                                                                                                   // 24
Meteor.methods({                                                                                                      // 110
    deleteProfile: function (id) {                                                                                    // 111
        Profile.remove(id);                                                                                           // 112
    }                                                                                                                 // 113
});                                                                                                                   // 110
Profile.attachSchema(ProfileSchema);                                                                                  // 116
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"recipes.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// collections/recipes.js                                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Recipes = new Mongo.Collection('recipes');                                                                            // 1
Recipes.allow({                                                                                                       // 3
    insert: function (userId, doc) {                                                                                  // 4
        return !!userId;                                                                                              // 5
    },                                                                                                                // 6
    update: function (userId, doc) {                                                                                  // 7
        return !!userId;                                                                                              // 8
    }                                                                                                                 // 9
});                                                                                                                   // 3
Price = new SimpleSchema({                                                                                            // 12
    desc: {                                                                                                           // 13
        type: String,                                                                                                 // 14
        label: "Option",                                                                                              // 15
        optional: true                                                                                                // 16
    },                                                                                                                // 13
    amount: {                                                                                                         // 18
        label: "Amount",                                                                                              // 19
        type: String                                                                                                  // 20
    }                                                                                                                 // 18
});                                                                                                                   // 12
RecipeSchema = new SimpleSchema({                                                                                     // 24
    name: {                                                                                                           // 25
        type: String,                                                                                                 // 26
        label: "Name"                                                                                                 // 27
    },                                                                                                                // 25
    desc: {                                                                                                           // 29
        type: String,                                                                                                 // 30
        label: "Description",                                                                                         // 31
        optional: true                                                                                                // 32
    },                                                                                                                // 29
    price: {                                                                                                          // 34
        type: String,                                                                                                 // 35
        label: "Price"                                                                                                // 36
    },                                                                                                                // 34
    // Price: {                                                                                                       // 39
    //     type: [Price]                                                                                              // 40
    // },                                                                                                             // 41
    category: {                                                                                                       // 42
        type: String,                                                                                                 // 43
        label: "Category",                                                                                            // 44
        allowedValues: ["Appetizers", "Tea Menu", "Category One", "Category One", "Category One", "Category One"]     // 45
    },                                                                                                                // 42
    column: {                                                                                                         // 54
        type: Number,                                                                                                 // 55
        label: "Column",                                                                                              // 56
        allowedValues: [1, 2, 3]                                                                                      // 57
    },                                                                                                                // 54
    position: {                                                                                                       // 63
        type: Number,                                                                                                 // 64
        label: "position",                                                                                            // 65
        allowedValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]                                                                // 66
    },                                                                                                                // 63
    special: {                                                                                                        // 79
        type: Boolean,                                                                                                // 80
        label: "Special",                                                                                             // 81
        defaultValue: false,                                                                                          // 82
        label: "Special Item"                                                                                         // 83
    },                                                                                                                // 79
    inMenu: {                                                                                                         // 85
        type: Boolean,                                                                                                // 86
        defaultValue: false,                                                                                          // 87
        optional: true,                                                                                               // 88
        autoform: {                                                                                                   // 89
            type: "hidden"                                                                                            // 90
        }                                                                                                             // 89
    },                                                                                                                // 85
    author: {                                                                                                         // 93
        type: String,                                                                                                 // 94
        label: "Author",                                                                                              // 95
        autoValue: function () {                                                                                      // 96
            return this.userId;                                                                                       // 97
        },                                                                                                            // 98
        autoform: {                                                                                                   // 99
            type: "hidden"                                                                                            // 100
        }                                                                                                             // 99
    },                                                                                                                // 93
    createdAt: {                                                                                                      // 103
        type: Date,                                                                                                   // 104
        label: "Created At",                                                                                          // 105
        autoValue: function () {                                                                                      // 106
            return new Date();                                                                                        // 107
        },                                                                                                            // 108
        autoform: {                                                                                                   // 109
            type: "hidden"                                                                                            // 110
        }                                                                                                             // 109
    }                                                                                                                 // 103
});                                                                                                                   // 24
Meteor.methods({                                                                                                      // 117
    toggleMenuItem: function (id, currentState) {                                                                     // 118
        Recipes.update(id, {                                                                                          // 119
            $set: {                                                                                                   // 120
                inMenu: !currentState                                                                                 // 121
            }                                                                                                         // 120
        });                                                                                                           // 119
    },                                                                                                                // 124
    deleteRecipe: function (id) {                                                                                     // 125
        Recipes.remove(id);                                                                                           // 126
    }                                                                                                                 // 127
});                                                                                                                   // 117
Recipes.attachSchema(RecipeSchema);                                                                                   // 130
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"intermediate.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// intermediate.js                                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 1
  Meteor.startup(function () {// code to run on server at startup                                                     // 2
  });                                                                                                                 // 4
}                                                                                                                     // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});
require("./client/web/partials/template.Heading.js");
require("./client/web/partials/template.WebFooter.js");
require("./client/web/partials/template.WebHeader.js");
require("./client/basicinfo/template.BasicInfo.js");
require("./client/basicinfo/template.EditProfile.js");
require("./client/basicinfo/template.Profile.js");
require("./client/layouts/template.HomeLayout.js");
require("./client/layouts/template.MainLayout.js");
require("./client/partials/template.Header.js");
require("./client/partials/template.SideNav.js");
require("./client/recipes/template.Menu.js");
require("./client/recipes/template.NewRecipe.js");
require("./client/recipes/template.Recipe.js");
require("./client/recipes/template.RecipeSingle.js");
require("./client/recipes/template.Recipes.js");
require("./client/recipes/template.ShoppingList.js");
require("./client/support/template.Support.js");
require("./client/web/template.Appetizers.js");
require("./client/web/template.FrontPage.js");
require("./client/web/template.WebMenuCol.js");
require("./lib/routes.js");
require("./client/web/partials/heading.js");
require("./client/web/partials/webheader.js");
require("./client/basicinfo/basicinfo.js");
require("./client/basicinfo/editprofile.js");
require("./client/basicinfo/profile.js");
require("./client/config/accounts-config.js");
require("./client/partials/header.js");
require("./client/recipes/NewRecipe.js");
require("./client/recipes/RecipeSingle.js");
require("./client/recipes/ShoppingList.js");
require("./client/recipes/menu.js");
require("./client/recipes/recipe.js");
require("./client/recipes/recipes.js");
require("./client/web/appetizers.js");
require("./client/web/frontpage.js");
require("./collections/profile.js");
require("./collections/recipes.js");
require("./intermediate.js");