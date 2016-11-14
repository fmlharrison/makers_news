var testSuite = function (controller) {

    var stories = dummyData.response.results;
    var summary = dummySummary;
    var summarySentences = dummySummary.sentences;

    (function seeIfFirstHeadlinesCreated() {
      controller.createStory(stories);
      expect.elementIdToContainInnerText("A member's view: 'You need to plan a long time before you're ill'", 0);
      removeLinks();
    })();

    (function seeIfLastHeadlinesCrated() {
      controller.createStory(stories);
      expect.elementIdToContainInnerText("The week started with an old-school jailbreak, and ended with ...", 9);
      removeLinks();
    })();

    (function showsThumbnailImages() {
      controller.createStory(stories);
      imgUrl = "https://media.guim.co.uk/b4c346f9e4bc39b227e71c4ec41ab3cc02464559/0_0_1920_1152/500.jpg";
      expect.elementAttributeToContainInnerHTML(imgUrl, "img", 0, "src" );
      removeLinks();
    })();

    (function showSummary() {
      controller.showSummary(summarySentences);
      expect.elementIdToContainInnerText(summarySentences, "storySummary");
      removeLinks();
    })();

    // (function showFullStory() {
    //   controller.createStory(stories);
    //   var storyLink = document.getElementById("0");
    //   storyLink.click();
    //   expect.elementIdToContainInnerText("This is a story summary", "storySummary");
    //   removeLinks();
    // })

    function removeLinks() {
      var element = document.getElementById("headlines");
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }

};
