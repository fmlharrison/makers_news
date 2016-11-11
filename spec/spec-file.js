var testSuite = function (controller) {

    console.log(controller);

    var stories = dummyData.response.results;
    console.log(stories);

    (function seeIfFirstHeadlinesCrated() {
      controller.createStory(stories);
      expect.elementIdToContainInnerText("A member's view: 'You need to plan a long time before you're ill'", 0);
      removeLinks();
    })();

    (function seeIfLastHeadlinesCrated() {
      controller.createStory(stories);
      expect.elementIdToContainInnerText("The week started with an old-school jailbreak, and ended with ...", 9);
      removeLinks();
    })();

    function showsThumbnailImages() {
      controller.createStory(stories);

    }

    function removeLinks() {
      var element = document.getElementById("headlines");
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }


};
