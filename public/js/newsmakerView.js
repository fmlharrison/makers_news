(function(exports){

function NewsManagerView () {

}

NewsManagerView.prototype = {

  createLink: function(storyList) {
    for (var i = 0; i < storyList.length; i++) {
      var headline = storyList[i].webTitle;
      var thumbnail = storyList[i].fields.thumbnail;
      var list = "<li id='" + i + "'><img src='" + thumbnail + "'><br><a class='link' id='" + i + "' href='#" + i + "'>" + headline + "</a></li><br>";
      document.getElementById("headlines").innerHTML += list;
    }
  },

  displaySummarySentences: function(sentences) {
    for (var i = 0; i < sentences.length; i++) {
      var summarySentences = "<p>" + sentences[i] + "</p>";
      document.getElementById("storySummary").innerHTML += summarySentences;
    }
    this.visible("fullStory");
   },

   displayFullStory: function(text) {
     fullStory = "<p>" + text + "</p>";
     document.getElementById('fullStory').innerHTML = fullStory;
     this.invisible("storySummary");
   },

   invisible: function(id) {
      var element = document.getElementById(id);
      element.style.display = "none";
    },

    visible: function(id) {
       var element = document.getElementById(id);
       element.style.display = "block";
     }

};

exports.NewsManagerView = NewsManagerView;


})(this);
