const kSearchInput = "input.bloko-input"
const kSearchResults = ".search-result"
const kLoadingView = "#loading_view"
const kSkillContainer = "#sk_container"
const kServerURL = "http://185.158.153.129:5000"

class SK {}

SK.span_skill = function (element, skill_style){
	skillURL = chrome.extension.getURL("skill/index.html?name="+element[0])
	return "<a href=\""+skillURL+"\"><span class=\""+skill_style+" sk_skill\">"+element[0]+"</span></a>"
}

SK.request = function(query) {
	// return "https://api.hh.ru/vacancies/"
	return kServerURL+"/getRequirements?name="+query
}

SK.resume_request = function (resume_id) {
	return "https://api.hh.ru/resumes/" + resume_id
}

SK.loading_html = function () {
	return "<center><div id=\"loading_view\"> Загрузка данных... </div></center>"
}

SK.skill_container_html = function () {
	return "<div id=\"sk_container\"></div>"
}

SK.loading_view = function () {
	return $ ( kLoadingView )
}

SK.search_input = function() {
	return $( kSearchInput ).first()
}

SK.search_results = function() {
	return $( kSearchResults ).first()
}

SK.skill_container_view = function () {
	return $ ( kSkillContainer )
}