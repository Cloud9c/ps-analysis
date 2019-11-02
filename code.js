/* Gets data and stores in dict object*/
var table = document.getElementById('scoreTable');
var dict = new Object();
for (var r = 1, n = table.rows.length; r < n; r++) {
	try {
		if (table.rows[r].cells[9].innerHTML.includes("div")) {
			continue;
		}
        var category= table.rows[r].cells[1].innerHTML;
        var tmp = document.createElement("DIV");
        tmp.innerHTML = category;
        category= tmp.textContent || tmp.innerText || "";
        category = category.replace(/\s+/g,' ').trim();

        var score = table.rows[r].cells[10].innerHTML;
        var tmp = document.createElement("DIV");
        tmp.innerHTML = score;
        score = tmp.textContent || tmp.innerText || "";
        score = score.replace(/\s+/g,' ').trim();
        score = score.split('/');

        if (score[0] == "--" || score[0] == undefined || score[1] == "--" || score[1] == undefined) {
        	continue;
        }
        if (category in dict) {
        	dict[category] = [+dict[category][0] + +score[0], +dict[category][1] + +score[1]];
        } else {
        	dict[category] = [+score[0], +score[1]];
        }
    } catch(err) {}
}

/* Adds Element AFTER NeighborElement */
Element.prototype.appendAfter = function(element) {
  element.parentNode.insertBefore(this, element.nextSibling);
}, false;

// Start our HTML
var html = "<tbody><thead><th>Category</th><th>Score</th><th>%</th><th>Grade</th></thead>";
// Loop through members of the object
for ( var key in dict ) {
	var numberGrade = +dict[key][0] / +dict[key][1] * 100;

    if (Math.round(numberGrade) >= 97) {
        letterGrade = "A+";
    } else if (Math.round(numberGrade) >= 93) {
    	letterGrade = "A";
    } else if (Math.round(numberGrade) >= 90) {
    	letterGrade = "A-";
    } else if (Math.round(numberGrade) >= 87) {
    	letterGrade = "B+";
    } else if (Math.round(numberGrade) >= 83) {
    	letterGrade = "B";
    } else if (Math.round(numberGrade) >= 80) {
    	letterGrade = "B-";
    } else if (Math.round(numberGrade) >= 77) {
    	letterGrade = "C+";
    } else if (Math.round(numberGrade) >= 73) {
    	letterGrade = "C";
    } else if (Math.round(numberGrade) >= 70) {
    	letterGrade = "C-";
    } else if (Math.round(numberGrade) >= 67) {
    	letterGrade = "D+";
    } else if (Math.round(numberGrade) >= 63) {
    	letterGrade = "D";
    } else if (Math.round(numberGrade) >= 60) {
    	letterGrade = "D-";
    } else {
    	letterGrade = "F";
    }

    html += "<tr><td>" + key + "</td><td>" + dict[key][0] + "/" + dict[key][1] + "</td><td>" + numberGrade.toFixed(2) + "</td><td>" + letterGrade + "</td></tr>";
}
// Finish the table:
html += "</tbody>";

/* Typical Creation and Setup A New Orphaned Element Object */
var NewElement = document.createElement('TABLE');
NewElement.className = "zebra grid table ng-scope";
NewElement.innerHTML = html;

/* Add NewElement AFTER Using the Prototypes */
NewElement.appendAfter(document.getElementById('scoreTable'));
