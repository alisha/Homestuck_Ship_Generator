//Alisha Ukani
//github.com/alishau

//Names of user's friends
$('friend_names').submit(function() {
	var name1 = $("#friend1").val();
	var name2 = $("#friend2").val();
});

//Necessary for auspisticism
var needsThirdPerson = false;
//Eventual relationship between user and friends
var relationship = "";
//Types of relationships the user can have
var relationshipTypes = ["matespritship", "auspisticism", "moirallegiance", "kismesissitude", "human romance", "leprechaun"];

//Randomly determines the type of relationship the user will have
var determineRelationship = function () {
	var typeIndex = 5;
	if (typeIndex != 5) {
		relationship = relationshipTypes[typeIndex];
		if (typeIndex === 3) {
			needsThirdPerson = true;
		}
	} else { //Leprechaun relationship
		determineLeprechaunRelationship();
	}
}

//Randomly determines the type of leprechaun relationship the user will have
var determineLeprechaunRelationship = function () {
	//Leprechuan relationship types
	var leprechaunTypes = ["heart", "moon", "star", "clover", "diamond", "horseshoe", "balloon", "rainbow", "pot of gold"];
	//Leprechaun relationships can involve multiple types from the above array
	var numRelationships = Math.floor((Math.random()*4) + 1);
	document.write("The number of leprechaun relationships you have is: " + numRelationships);

	for (var count = numRelationships; count > 0; count++) {
		//Randomly pick type from above array
		document.write(leprechaunTypes.length);
		var index = Math.floor(Math.random()*leprechaunTypes.length);
		document.write(index);
		relationship += leprechaunTypes[index];
		document.write(leprechaunTypes[index]);

		//Formatting for the report
		if (numRelationships > 2) {
			if (count != 1) {
				relationship += ", ";
				if (count === 2) {
					relationship += "and ";
				}
			} else if (numRelationships === 2 && count != 1) {
				relationship += " and ";
			}
		}
		
		//Remove relationship from array
		var updatedArray = leprechaunTypes.splice(0, index);
		leprechaunTypes.splice(1, leprechaunTypes.length);
		updatedArray.concat(leprechaunTypes);
		leprechaunTypes = updatedArray;
	}
}

var reportResults () {
	var report = "You are in a " + relationship + " with " + name1;
	if (relationship === "auspisticism") {
		report += " and " + name2;
	}
	report += ".";
	document.write(report);
}

determineRelationship();
reportResults();