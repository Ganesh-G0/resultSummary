$(document).ready(() => {
  getData();
  async function getData() {
    try {
      const response = await axios.get("./data.json");
      // console.log(response.data);
      const reactionData = response.data[0];
      const memoryData = response.data[1];
      const verbalData = response.data[2];
      const visualData = response.data[3];

      let totalScore = Math.round((reactionData.score + memoryData.score + visualData.score + verbalData.score ) / response.data.length);
      $("#scored").text(totalScore);      
      $("#scoredHigher").text(totalScore - 11);
      $("#reaction-score").text(reactionData.score);
      $("#memory-score").text(memoryData.score);
      $("#verbal-score").text(verbalData.score);
      $("#visual-score").text(visualData.score);
    } catch (error) {
      console.error(error);
    }
  }
});