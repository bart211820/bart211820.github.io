$(document).ready(function(){
	
	$('body').on('click','#showHeaderLinksButton',function(){
		$( "#secretHeader" ).toggleClass("displayNone");
	});
	
	$('body').on('click','#goFilterButton',function(){
		
		newHtml = '';
		pages.forEach(addPageToHtmlIfNeeded);
		
		if(newHtml == '') {
			$("#filterResultsHolder").html('<p id="filterMessage">No results for these filters found, try again.</p>');
		} else {
			$("#filterResultsHolder").html(newHtml);
		}
		
	});

	function addPageToHtmlIfNeeded(page, index) {

		if($("#selectTopic").val() != page.topic && $("#selectTopic").val() != "0") {
			return;
		}
		console.log("1");
		if($('#light').is(":checked") && $('#medium').is(":checked") && $('#dark').is(":checked")){

		}
		else if(!$('#light').is(":checked") && !$('#medium').is(":checked") && !$('#dark').is(":checked")){
			return;
		}
		else if(($('#light').is(":checked") && $('#medium').is(":checked")) && (page.shadeL == "false") && page.shadeM == "false"){
			return;
		}
		else if(($('#light').is(":checked") && $('#dark').is(":checked")) && (page.shadeL == "false") && page.shadeD == "false"){
			return;
		}
		else if(($('#medium').is(":checked") && $('#dark').is(":checked")) && (page.shadeM == "false") && page.shadeD == "false"){
			return;
		}
		else if($('#light').is(":checked") && page.shadeL == "false") {
			return;
		}
		else if($('#medium').is(":checked") && page.shadeM == "false") {
			return;
		}
		else if($('#dark').is(":checked") && page.shadeD == "false") {
			return;
		}

		console.log("2");
		if($('#mental').is(":checked") && $('#physical').is(":checked")) {

		}
		else if(!$('#mental').is(":checked") && !$('#physical').is(":checked")){
			return;
		}
		else if($('#mental').is(":checked") && page.subjectM == "false") {
			return;
		}
		else if($('#physical').is(":checked") && page.subjectP == "false") {
			return;
		}
		
		console.log("3");
		if($('#positive').is(":checked") && $('#negative').is(":checked") && $('#neutral').is(":checked")){

		}
		else if(!$('#positive').is(":checked") && !$('#negative').is(":checked") && !$('#neutral').is(":checked")){
			return;
		}
		else if(($('#positive').is(":checked") && $('#negative').is(":checked")) && (page.feelingsPo == "false") && page.feelingsNe == "false"){
			return;
		}
		else if(($('#positive').is(":checked") && $('#neutral').is(":checked")) && (page.feelingsPo == "false") && page.feelingsNl == "false"){
			return;
		}
		else if(($('#negative').is(":checked") && $('#neutral').is(":checked")) && (page.feelingsNe == "false") && page.feelingsNl == "false"){
			return;
		}
		else if($('#positive').is(":checked") && page.feelingsPo == "false") {
			return;
		}
		else if($('#negative').is(":checked") && page.feelingsNe == "false") {
			return;
		}
		else if($('#neutral').is(":checked") && page.feelingsNl == "false") {
			return;
		}
		

		if($('#available').is(":checked") && page.available == "false") {
			return;
		}

		newHtml += constructHTMLforThisResult(page);
	}

	function constructHTMLforThisResult(page) {
		var thisHtml = "";
		if(page.available == "true") {
			thisHtml += '<a href="' + page.link +'.html">';
		} else {
			thisHtml += '<a class="falseLink">';
		}
		thisHtml += '<div class="filterResult">';
		thisHtml += '<h5 class="headerFont">' + page.title + '</h5>';
		if(page.picture != "") {
			thisHtml += '<div class="filterResultImage" style="background-image: url(img/' + page.picture + '.png);"></div>';
		} else {
			thisHtml += '<div class="filterResultImage"></div>';
		}
		thisHtml += '</div></a>';
		return thisHtml;
	}

	var newHtml = '';
});



pages = [
// {"title" : "", "available" : "", "link" : "", "picture" : "", "topic" : "", "shadeL" : "", "shadeM" : "", "shadeD" : "", "subjectM" : "", "subjectP" : "", "feelingsPo" : "", "feelingsNe" : "", "feelingsNl" : ""},

{"title" : "Emotion", "available" : "true", "link" : "emotion", "picture" : "emotion", "topic" : "2", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "true", "subjectP" : "false", "feelingsPo" : "true", "feelingsNe" : "true", "feelingsNl" : "false"},
{"title" : "Mystery", "available" : "false", "link" : "", "picture" : "lurkingCat", "topic" : "1", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "true", "subjectP" : "true", "feelingsPo" : "true", "feelingsNe" : "true", "feelingsNl" : "true"},
{"title" : "Industrial", "available" : "false", "link" : "", "picture" : "industrial", "topic" : "3", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "false", "subjectP" : "true", "feelingsPo" : "true", "feelingsNe" : "true", "feelingsNl" : "true"},

{"title" : "Questionable", "available" : "true", "link" : "mysteryQuestionability", "picture" : "questionability", "topic" : "1", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "true", "subjectP" : "true", "feelingsPo" : "false", "feelingsNe" : "true", "feelingsNl" : "false"},
{"title" : "Indevisive", "available" : "true", "link" : "mysteryQuestionabilityIndecisiveness", "picture" : "indecisiveness", "topic" : "1", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "true", "subjectP" : "false", "feelingsPo" : "false", "feelingsNe" : "true", "feelingsNl" : "false"},
{"title" : "Ambiguity", "available" : "false", "link" : "", "picture" : "ambiguity", "topic" : "1", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "true", "subjectP" : "true", "feelingsPo" : "false", "feelingsNe" : "false", "feelingsNl" : "true"},
{"title" : "Secrets", "available" : "false", "link" : "", "picture" : "", "topic" : "1", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "true", "subjectP" : "true", "feelingsPo" : "false", "feelingsNe" : "true", "feelingsNl" : "true"},
{"title" : "Fog", "available" : "false", "link" : "", "picture" : "", "topic" : "1", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "false", "subjectP" : "true", "feelingsPo" : "false", "feelingsNe" : "false", "feelingsNl" : "true"},
{"title" : "Truth", "available" : "false", "link" : "", "picture" : "", "topic" : "1", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "true", "subjectP" : "true", "feelingsPo" : "true", "feelingsNe" : "false", "feelingsNl" : "true"},

{"title" : "Depressing", "available" : "true", "link" : "emotionDepression", "picture" : "depressing", "topic" : "2", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "true", "subjectP" : "false", "feelingsPo" : "false", "feelingsNe" : "true", "feelingsNl" : "false"},
{"title" : "Disconnected", "available" : "true", "link" : "emotionDepressionDisconnected", "picture" : "disconnected", "topic" : "2", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "true", "subjectP" : "false", "feelingsPo" : "false", "feelingsNe" : "true", "feelingsNl" : "false"},
{"title" : "Sadness", "available" : "false", "link" : "", "picture" : "sad", "topic" : "2", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "true", "subjectP" : "false", "feelingsPo" : "false", "feelingsNe" : "true", "feelingsNl" : "false"},
{"title" : "Despair", "available" : "false", "link" : "", "picture" : "despair", "topic" : "2", "shadeL" : "false", "shadeM" : "true", "shadeD" : "true", "subjectM" : "true", "subjectP" : "false", "feelingsPo" : "false", "feelingsNe" : "true", "feelingsNl" : "false"},
{"title" : "Dispassionate", "available" : "false", "link" : "", "picture" : "dispassionate", "topic" : "2", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "true", "subjectP" : "false", "feelingsPo" : "false", "feelingsNe" : "true", "feelingsNl" : "false"},
{"title" : "Calmness", "available" : "true", "link" : "emotionCalm", "picture" : "calm", "topic" : "2", "shadeL" : "true", "shadeM" : "true", "shadeD" : "false", "subjectM" : "true", "subjectP" : "false", "feelingsPo" : "true", "feelingsNe" : "false", "feelingsNl" : "false"},
{"title" : "Neutral", "available" : "false", "link" : "", "picture" : "neutral2", "topic" : "2", "shadeL" : "true", "shadeM" : "true", "shadeD" : "false", "subjectM" : "true", "subjectP" : "false", "feelingsPo" : "false", "feelingsNe" : "false", "feelingsNl" : "true"},
{"title" : "Cool", "available" : "false", "link" : "", "picture" : "cool", "topic" : "2", "shadeL" : "true", "shadeM" : "true", "shadeD" : "false", "subjectM" : "true", "subjectP" : "false", "feelingsPo" : "true", "feelingsNe" : "false", "feelingsNl" : "false"},

{"title" : "Machinery", "available" : "false", "link" : "", "picture" : "", "topic" : "3", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "false", "subjectP" : "true", "feelingsPo" : "false", "feelingsNe" : "false", "feelingsNl" : "true"},
{"title" : "Iron", "available" : "false", "link" : "", "picture" : "", "topic" : "3", "shadeL" : "true", "shadeM" : "true", "shadeD" : "false", "subjectM" : "false", "subjectP" : "true", "feelingsPo" : "false", "feelingsNe" : "false", "feelingsNl" : "true"},
{"title" : "Charcoal", "available" : "false", "link" : "", "picture" : "", "topic" : "3", "shadeL" : "false", "shadeM" : "false", "shadeD" : "true", "subjectM" : "false", "subjectP" : "true", "feelingsPo" : "false", "feelingsNe" : "false", "feelingsNl" : "true"},
{"title" : "Steam engine", "available" : "false", "link" : "", "picture" : "", "topic" : "3", "shadeL" : "false", "shadeM" : "true", "shadeD" : "true", "subjectM" : "false", "subjectP" : "true", "feelingsPo" : "false", "feelingsNe" : "false", "feelingsNl" : "true"},
{"title" : "Authority", "available" : "false", "link" : "", "picture" : "", "topic" : "3", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "true", "subjectP" : "false", "feelingsPo" : "true", "feelingsNe" : "true", "feelingsNl" : "false"},
{"title" : "Suits", "available" : "false", "link" : "", "picture" : "", "topic" : "3", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "false", "subjectP" : "true", "feelingsPo" : "true", "feelingsNe" : "true", "feelingsNl" : "false"},
{"title" : "Work", "available" : "false", "link" : "", "picture" : "", "topic" : "3", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "false", "subjectP" : "true", "feelingsPo" : "true", "feelingsNe" : "true", "feelingsNl" : "false"},
{"title" : "Cars", "available" : "false", "link" : "", "picture" : "", "topic" : "3", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "false", "subjectP" : "true", "feelingsPo" : "true", "feelingsNe" : "true", "feelingsNl" : "true"},
{"title" : "First cars", "available" : "false", "link" : "", "picture" : "", "topic" : "3", "shadeL" : "false", "shadeM" : "true", "shadeD" : "true", "subjectM" : "false", "subjectP" : "true", "feelingsPo" : "true", "feelingsNe" : "true", "feelingsNl" : "true"},
{"title" : "Electric cars", "available" : "false", "link" : "", "picture" : "", "topic" : "3", "shadeL" : "true", "shadeM" : "true", "shadeD" : "true", "subjectM" : "false", "subjectP" : "true", "feelingsPo" : "true", "feelingsNe" : "true", "feelingsNl" : "true"}
];