var Header = (function() {

    function init(){
        $modal = $("[rel=js-modal]");
		$close = $modal.children("[rel='js-close']");
		$content = $modal.children("[rel='js-content']");

        $close.on("click",closeModal);

        $("[rel='js-controls']").on("click","[rel*='js-']", function(evt){

            if ($modal.is(":visible")) {
                return closeModal(evt);
            }
    
            evt.preventDefault();
            evt.stopPropagation();
            evt.stopImmediatePropagation();
    
            var url = $(evt.target).attr("href");
    
            $.ajax(url,{ dataType: "text" })
            .then(function(contents){
                $content.html(contents);
                $modal.show();
            });
        });
    }

    function closeModal(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		$content.empty();
		$modal.hide();
	}

    var $modal, $close, $content;

    return {
        init: init
    };

})();
