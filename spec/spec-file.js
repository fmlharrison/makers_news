var testSuite = function (controller) {

    console.log(controller);

    var stories = dummyData.response.results;
    console.log(stories);

    (function seeIfFirstHeadlinesCrated() {
      controller.createStory(stories);
      expect.elementIdToContainInnerText("Pound hits five-week high, as Trump fears hit stock markets - business live", 0);
      removeLinks();
    })();

    (function seeIfLastHeadlinesCrated() {
      controller.createStory(stories);
      expect.elementIdToContainInnerText("Why Michelle Obama is unlikely to run for president", 9);
      removeLinks();
    })();

    function removeLinks() {
      var element = document.getElementById("headlines");
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }


};
