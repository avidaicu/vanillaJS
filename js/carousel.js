var Carousel = (function() {

	function init(){

		var defaultProject = (ID = 0);
		Details.loadPerson(defaultProject);
	
		$content = $("[rel=js-link] > [rel=js-content]");
		$items = $content.children("[rel=js-links]");

		$items.on("click", "[rel*='js-link-']", function(evt){
			console.log('evt:', evt);
			var ID = $(evt.target).attr("rel").replace(/^.*(\d+)$/, "$1");

			Details.loadPerson(ID);
		});
	}

	var $content;
	var $items;

	return {
		init: init
	};

})();
