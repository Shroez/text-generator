function displayText(response) {
  // response.data.answer

  console.log("text generated");
  new Typewriter("#submited-text", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generateText(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "32bc38bf8f4b6t979ce0a923eb70o3e8";
  let prompt = `Generate a short and simple poem about ${instructionsInput.value}`;
  let context =
    "you are a romantic poem expert and love to write clear, short poems, your mission is to generate a four line poem in html format. make sure to separate each line, and to follow the users instructions. also sign your poem with 'SheCodes AI' wrapped with <strong> at the end. dont show the ` ` in the text ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating text");
  console.log(`Prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayText);
}

let textGeneratorElement = document.querySelector("#text-generator-form");
textGeneratorElement.addEventListener("submit", generateText);
