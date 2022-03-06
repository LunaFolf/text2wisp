const textInput = document.getElementById('textInput');
const textWispOutput = document.getElementById('output-wisp');
const textRegionalOutput = document.getElementById('output-regional');
const textRawOutput = document.getElementById('rawOutput');

const charsWeDontHave = ["D", "G", "K", "Q", "X", "Z"];


function convertCharToWisp (char) {
  let raw = String(char).toLowerCase();
  let convert = `:wisp_${String(char).toLowerCase()}:`
  if (charsWeDontHave.includes(char)) {
    raw = ""
    convert = ""
  }
  if (char === " ") convert = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
  if (char === "W") convert = ":wisp:"
  return { raw, convert }
}

function convertCharToRegional (char) {
  let raw = String(char).toLowerCase();
  let convert = `:regional_indicator_${String(char).toLowerCase()}: `
  if (char === " ") convert = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
  return { raw, convert }
}

function updateText ({ target }) {
  let value = String(target.value).toUpperCase();
  value = value.replace(/[.,:!?"']/gm, "");
  const splitText = Array.from(value);
  
  let rawText = "";
  let wispText = "";
  let regionalText = "";
  splitText.forEach(char => {
    const convWisp = convertCharToWisp(char);
    const convRegional = convertCharToRegional(char);
    rawText = rawText + convWisp.raw;
    wispText = wispText + convWisp.convert;
    regionalText = regionalText + convRegional.convert;
  })


  textRawOutput.innerHTML = rawText;
  textWispOutput.innerHTML = wispText;
  textRegionalOutput.innerHTML = regionalText;
}

textInput.addEventListener("input", updateText);