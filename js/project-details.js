var ProjectDetails = (function() {

	function loadProject(ID) {
		$.ajax("/projects/" + ID + ".html", { dataType: "text" })
		.then(function(contents){
			$content.html(contents);
		});
	}

	function init(){
		$content = $("[rel=js-projects-area]");

		// var defaultPerson = (ID = 0);
		// Details.loadPerson(defaultPerson);

	};

	var $content;

	return {
		init: init,
		loadProject: loadProject,
	};

})();
