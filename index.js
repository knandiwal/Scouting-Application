//
//  index.js
//  SpamProgramming
//
//  Copyright (c) 2013 SPAM Prog. All rights reserved.
//

// Global Variables
//0 = Autonomous, 1 = Tele-Op, 2 = Tier
var aScoreCounter = new Array();
aScoreCounter[0] = 0;
aScoreCounter[1] = 0;
aScoreCounter[2] = 0;

var aScoreAttempt = new Array();
aScoreAttempt[0] = 0;
aScoreAttempt[1] = 0;
aScoreAttempt[2] = 0;

var aScoreReadout = new Array();
aScoreReadout[0] = "#auto_score_readout";
aScoreReadout[1] = "#tele_score_readout";
aScoreReadout[2] = "#pyramid_score_readout";

// Called when js file loaded. Global initialization goes here
(function ()  {

}());

//Goal Scoring Function
function ScoreGoal(scoreType, numPoints) {
    var iType = 0;
    if (scoreType == "Auto") { iType = 0; }
    if (scoreType == "Tele") { iType = 1; }
    if (scoreType == "Pyramid") { iType = 2; }

    aScoreCounter[iType] = aScoreCounter[iType] + numPoints;
    aScoreAttempt[iType] += 1;

    if (scoreType == "Pyramid") { $(aScoreReadout[iType]).html("Score: " + aScoreCounter[iType]); } 
    else { $(aScoreReadout[iType]).html("Score: " + aScoreCounter[iType] + "   Attempts: " + aScoreAttempt[iType]); }
}

////////////////// Dont code below here //////

function Testing()
{
    console.log('Pressed Button');

    var values = $('#form').serialize();
    var myFormData = $('#form').serializeArray();
    console.log(values);
    console.log(myFormData);

    var arr = new Array(3);
    arr[0] = "Zero";
    arr[1] = "One";
    arr[2] = "Two";
    console.log(arr.toString());

    //var name = document.SPAM_Scout_form["team_name"];
    //$('#other').html(name);
    
    return false;
}

function nil () {
    alert('Calling NIL function!');
    return false;
}

