(function () {

	"use strict";

	// global variable
	var TEMPS = {};

	// station metadata filename
	TEMPS.metadataFilename = './data/USHCN-network-metadata.clean.crop.means.txt';


	// region names/labels
	TEMPS.regions = [ {region: "wc", label: "West Coast"}, 
					{region: "mtw", label: "Mountain",}, 
					{region: "sw", label: "Southwest", },
				    {region: "miw", label: "Midwest", },
					{region: "gc", label: "Gulf Coast",},
					{region: "ec", label: "East Coast",} ];


	// hand-picked list of representative stations in each region
	TEMPS.roadTrip = [

		{id: "172765", text: "Farmington", region: "ec"},
		{id: "374266", text: "Kingston", region: "ec"},
		{id: "280325", text: "Atlantic City", region: "ec"},
		{id: "381549", text: "Charleston", region: "ec"},
		{id: "83186", text: "Fort Meyers", region: "gc"},
		{id: "410639", text: "Beeville", region: "gc"},
		{id: "291469", text: "Carlsbad", region: "sw"},
		{id: "29287", text: "Wickenburg", region: "sw"},
		{id: "46719", text: "Pasadena", region: "wc"},
		{id: "47916", text: "Santa Cruz", region: "wc"},
		{id: "450008", text: "Aberdeen", region: "wc"},
		{id: "241044", text: "Bozeman", region: "mtw"},
		{id: "52281", text: "Dillon", region: "mtw"},
		{id: "50848", text: "Boulder", region: "mtw"},
		{id: "138296", text: "Toledo", region: "miw"},
		{id: "112193", text: "Decatur", region: "miw"},
		{id: "48758", text: "Tahoe City", region: "wc"}
	];


	// definition of tabs/parts 
	TEMPS.tabs = [{
					header: "Part 1",
					id: "highs-lows", 
					method: "loadTab1", 
					text: "Highs and lows",
					mapHeader: "The stations",
					histogramHeader: "Visualizing individual stations",
					mapText: "These long-running stations are scattered throughout the US. Click on one of the map's dots to view its data, or click on one of the representative station locations listed below.",
 				    histogramText: "To visualize the distribution of daily highs and lows throughout the year, we can construct a radial histogram in which angle corresponds to season and radial distance to temperature. Daily highs are in red; daily lows in blue.",
				}, 
	          	{
	              	header: "Part 2", 
	              	id: "changes", 
	              	method: "loadTab2", 
	              	text: "Changes over time",
	              	mapHeader: "Where have temperatures changed?",
	              	histogramHeader: "Visualizing temperature changes",
	              	mapText: "Use the sliders on the right to select two time intervals to compare; the histogram bins are colored according to the change in counts between the two intervals.",
	              	histogramText: "Histogram bins with fewer counts coming from the more recent interval are colored orange; those with more are colored green. A rise in temperature therefore appears as an inner 'ring' of red bins surrounded by a ring of green bins.",
	          	},
	          	{
	              	header: "Part 3", 
	              	id: "changes-regional", 
	              	method: "loadTab3", 
	              	text: "Regional averages",
	              	mapHeader: "Coming soon...",
	              	histogramHeader: "Coming soon...",
	              	mapText: "Coming soon..."
	              },];


	window.TEMPS = TEMPS;

}());

