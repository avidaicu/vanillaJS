var Header = (function() {

    function init(){
        $modal = $("[rel='js-modal']");

        $("[rel='js-controls']").on("click","[rel*='js-']", function(evt){
            evt.preventDefault();
            evt.stopPropagation();
            evt.stopImmediatePropagation();

            var url = $(evt.target).attr("href");

            $.ajax(url,{ dataType: "text" })
            .then(function(contents){
                $modal.html(contents).show();
            });
        });
    }

    var $modal;

    EVT.on("init", init);

    // return {
    //     init: init
    // };

})();
