(function () {
  window.addEventListener("load", function() {
    var storySummary = document.getElementById('storySummary');
    var headlines = document.getElementById('headlines');
    var fullStory = document.getElementById('fullStory');
    var controller = new NewsManagerController(storySummary,
                              headlines,
                              fullStory,
                              new NewsManagerModel(),
                              new NewsManagerView());
    controller.apiRequest();
  });
})();
