(function (exports) {
  function NewsManagerModel() {
    this.storyList = [];
    this.count = 0;
  };

NewsManagerModel.prototype = {
  saveNews: function (story) {
    this.storyList.push(story);
  },

  addCount: function () {
    this.count++;
  },

  getTitle: function (index) {
    return this.storyList[index].webTitle;
  }

  getUrl: function (index) {
    return this.storyList[index].webUrl;
  }

};

  exports.NewsManagerModel = NewsManagerModel;

})(this);
