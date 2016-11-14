(function () {
  window.addEventListener("load", function() {
    var storySummary = document.getElementById('storySummary');
    var headlines = document.getElementById('headlines');
    var fullStory = document.getElementById('fullStory');
    console.log(document)
    var controller = new NewsManagerController(storySummary,
                              headlines,
                              fullStory,
                              new NewsManagerModel(),
                              new NewsManagerView());
    testSuite(controller);
    });
})();
