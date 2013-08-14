//Alisha Ukani
//github.com/alishau

//Placeholders for names, updated with user input later
var name1 = "";
var name2 = "";
//Necessary for auspisticism
var needsThirdPerson = false;
//Eventual relationship between user and friends
var relationship = "";
//Types of relationships the user can have
var relationshipTypes = ["matespritship", "auspisticism", "moirallegiance", "kismesissitude", "human romance", "leprechaun"];
//Checks to see if the user is clicking again
var hasClicked = false;

//Randomly chooses which name to use
function randomizeNames () {
	if (Math.random() < 0.5) {
		var temp = name1;
		name1 = name2;
		name2 = temp;
	}
}

//Randomly determines the type of relationship the user will have
function determineRelationship () {
	var typeIndex = Math.floor(Math.random()*relationshipTypes.length);
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
function determineLeprechaunRelationship () {
	//Leprechuan relationship types
	var leprechaunTypes = ["heart", "moon", "star", "clover", "diamond", "horseshoe", "balloon", "rainbow", "pot of gold"];
	//Leprechaun relationships can involve multiple types from the above array
	var numRelationships = Math.floor((Math.random()*4) + 1);

	for (var count = numRelationships; count > 0; count--) {
		//Randomly pick type from above array
		var index = Math.floor(Math.random()*leprechaunTypes.length);
		console.log(index + " is " + leprechaunTypes[index]);
		relationship += leprechaunTypes[index];

		//Formatting for the report
		if (numRelationships > 2) {
			if (count != 1) {
				relationship += ", ";
				if (count === 2) {
					relationship += "and ";
				}
			}
		} else if (numRelationships === 2 && count === 2) {
			relationship += " and ";
		}
		
		//Remove relationship from array
		var updatedArray = leprechaunTypes.splice(0, index);
		console.log(updatedArray);
		leprechaunTypes = leprechaunTypes.splice(1, leprechaunTypes.length);
		console.log(leprechaunTypes);
		var finalArray = updatedArray.concat(leprechaunTypes);
		console.log(finalArray);
		leprechaunTypes = finalArray;
		console.log(leprechaunTypes);
	}
	relationship += " relationship";
}

function reportResults () {
	var report = "You are in a " + relationship + " with " + name1;
	if (relationship === "auspisticism") {
		report += " and " + name2;
	}
	report += ".";

	var textNodeReport = document.createTextNode(report);
	var reportElement = document.createElement("p");
	reportElement.appendChild(textNodeReport);
	var theBody = document.getElementsByTagName('body')[0];
	theBody.appendChild(reportElement);
}

$('#friend_names').submit(function() {
	name1 = $("#friend1").val();
	name2 = $("#friend2").val();
	randomizeNames();
	determineRelationship();

	if (hasClicked) {
		document.body.removeChild(document.body.getElementsByTagName("p")[1]);
	}

	reportResults();
	relationship = "";
	hasClicked = true;
	return false;
});