var Projects = (function() {

	function init(){

		// var defaultProject = (ID = 0);
		// ProjectDetails.loadProject(defaultProject);
	
		$content = $("[rel=js-project] > [rel=js-content]");
		$items = $content.children("[rel=js-items]");

		$items.on("click", "[rel*='js-item-']", function(evt){
			var ID = $(evt.target).attr("rel").replace(/^.*(\d+)$/, "$1");

			ProjectDetails.loadProject(ID);
		});
	}

	var $content;
	var $items;

	return {
		init: init
	};

})();
