(function(exports){

function NewsManagerView () {

}

NewsManagerView.prototype = {

  createLink: function(storyList) {
    for (var i = 0; i < storyList.length; i++) {
      var headline = storyList[i].webTitle;
      var list = "<li id='" + i + "'><a href='#" + i + "'>" + headline + "</a></li><br>";
      document.getElementById("headlines").innerHTML += list;
    }
  }
};

exports.NewsManagerView = NewsManagerView;


})(this);
