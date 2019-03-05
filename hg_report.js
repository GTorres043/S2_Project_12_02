"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Gabriel Torres
   Date:   2/4/19
   
   Filename: hg_report.js
	
*/
//this creates a table for the product information
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By:" + itemManufacturer + "</h2>" + "<img src='hg_" + itemID + ".png' alt='id' id='gameImg'/>" + "<table>" + "<tr><th>Product ID</th><td>" + itemID + "</td></tr>" + "<tr><th>List price</th><td>" + itemPrice + "</td></tr>" + "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>" + "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>" + "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>" + "<tr><th>Release</th><td>" + itemRelease + "</td></tr>" + "</table>" + itemSummary;

//calls in the report of the game and details about the game that is being sold
document.getElementsByTagName("article")[0].innerHTML = gameReport;

var ratingSum = 0;
var ratingCount = ratings.length;

for (var i = 0; i < ratingCount; i++) {
    ratingSum += ratings[i];
}

var ratingsAvg = ratingSum / ratingCount;

var ratingReport = "<h1>Customer Review</h1><h2>" + ratingsAvg + "out of 5 stars (" + ratingCount + " reviews)</h2>";

for (var i = 0; i <= 2; i++) {
    ratingReport += "<div class='review'><h1>" + ratingTitles[i] + "</h1><table><tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>" + "<tr><th>Review Dates</th><td>" + ratingDates[i] + "</td></tr> <tr><th>Rating</th><td>";
    for (var j = 1; j <= ratings[i]; j++) {
        ratingReport += "<img src='hg_star.png' />";
    }
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

document.getElementsByTagName('aside')[0].innerHTML = ratingReport;