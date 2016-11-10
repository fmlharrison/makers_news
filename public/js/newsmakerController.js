(function(exports){

function NewsManagerController (storySummary, headlines, NewsManagerModel, NewsManagerView) {
  this.storySummary = storySummary;
  this.headlines = headlines;
  this.NewsManagerModel = NewsManagerModel;
  this.NewsManagerView = NewsManagerView;
  this.xhr = new XMLHttpRequest();
  this.apiRequest();
}

NewsManagerController.prototype = {
  createStory: function(JSON) {
    this.NewsManagerModel.saveNews(JSON);
    this.NewsManagerView.createLink(this.NewsManagerModel.storyList);
    this.NewsManagerModel.addCount();
  },

  showSummary: function(id){
    this.NewsManagerView.invisible('headlines');
    console.log("Need to finish this one!")
  },

  setupHeadlines: function() {
    var self = this;
    this.headlines.addEventListener('click', function(){
      self.showSummary(event.target.id);
    });
  },

  apiRequest: function(){
    this.xhr.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-references=all&show-fields=thumbnail", true);
    this.xhr.send();
    self = this;
    this.xhr.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200) {
        var newsObject = JSON.parse(this.responseText);
        self.createStory(newsObject.response.results);
      }
    }
  }
}

exports.NewsManagerController = NewsManagerController;

})(this);
