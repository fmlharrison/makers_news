(function(exports){

function NewsManagerController (storySummary, headlines, NewsManagerModel, NewsManagerView) {
  this.storySummary = storySummary;
  this.headlines = headlines;
  this.NewsManagerModel = NewsManagerModel;
  this.NewsManagerView = NewsManagerView;
}

NewsManagerController.prototype = {
  createStory: function(JSON) {
    this.NewsManagerModel.saveNews(JSON);
    this.NewsManagerView.createButton(this.NewsManagerModel.count, JSON.webTitle);
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
 }
}



exports.NewsManagerController = NewsManagerController;

})(this);
