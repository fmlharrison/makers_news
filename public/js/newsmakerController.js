(function(exports){

function NewsManagerController (storySummary, headlines, fullStory, NewsManagerModel, NewsManagerView) {
  this.storySummary = storySummary;
  this.headlines = headlines;
  this.fullStory = fullStory;
  this.NewsManagerModel = NewsManagerModel;
  this.NewsManagerView = NewsManagerView;
  this.xhr = new XMLHttpRequest();
  this.setupHeadlines();
}

NewsManagerController.prototype = {
  createStory: function(JSON) {
    this.NewsManagerModel.saveNews(JSON);
    this.NewsManagerView.createLink(this.NewsManagerModel.storyList);
  },

  showSummary: function(summary){
    this.NewsManagerView.invisible('headlines');
    this.NewsManagerView.displaySummarySentences(summary);
  },

  setupHeadlines: function() {
    var self = this;
    this.headlines.addEventListener('click', function(){
      self.aylianRequest(self.NewsManagerModel.getUrl(self.grabId()));
    });
  },

  showFullStory: function(text) {
    var self = this;
    this.fullStory.addEventListener('click', function() {
      self.NewsManagerView.displayFullStory(text);
    });
  },

  grabId: function() {
    return event.target.id;
  },

  apiRequest: function(){
    this.xhr.open('GET', "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail", true);
    this.xhr.send();
    self = this;
    this.xhr.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200) {
        var newsObject = JSON.parse(this.responseText);
        self.createStory(newsObject.response.results);
      }
    };
  },

  aylianRequest: function (url) {
    this.xhr.open('GET', "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url, true);
    this.xhr.send();
    self = this;
    this.xhr.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200) {
        var newsSummary = JSON.parse(this.responseText);
        self.showSummary(newsSummary.sentences);
        self.showFullStory(newsSummary.text);
      }
    };
  },

};

exports.NewsManagerController = NewsManagerController;

})(this);
