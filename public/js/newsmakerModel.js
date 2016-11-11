(function (exports) {
  function NewsManagerModel() {
    this.storyList = [];
  };

NewsManagerModel.prototype = {
  saveNews: function (stories) {
    this.storyList = stories;
  },

  getTitle: function (index) {
    return this.storyList[index].webTitle;
  },

  getUrl: function (index) {
    return this.storyList[index].webUrl;
  }

};

  exports.NewsManagerModel = NewsManagerModel;

})(this);
