(function () {
  window.addEventListener("load", function() {
    var storySummary = document.getElementById('storySummary');
    var headlines = document.getElementById('headlines');
    console.log(document)
    new NewsManagerController(storySummary,
                              headlines,
                              new NewsManagerModel(),
                              new NewsManagerView());
  });
})();
