(function (exports) {
  function NewsManagerModel() {
    this.storyList = [];
    this.count = 0;
  };

NewsManagerModel.prototype = {
  newNews: function (story) {
    this.storyList.push(story);
  },

  addCount: function () {
    this.count++;
  },

  getTitle: function (index) {
    return this.storyList[index].webTitle;
  }

};

  exports.NewsManagerModel = NewsManagerModel;

})(this);
