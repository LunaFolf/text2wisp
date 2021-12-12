const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('output');
const textRawOutput = document.getElementById('rawOutput');
const charCountEl = document.getElementById('charsLeft');
const charLimitEl = document.getElementById('charsLimit');

const charsWeDontHave = ["D", "G", "K", "Q", "X", "Z"];

const charLimit = 2000;
let currentCharCount = 0;

function convertChar(char) {
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

function updateText ({ target }) {
  let value = String(target.value).toUpperCase();
  value = value.replace(/[.,:!?"']/gm, "");
  const splitText = Array.from(value);
  
  let rawText = "";
  let convertedText = "";
  splitText.forEach(char => {
    const converted = convertChar(char);
    rawText = rawText + converted.raw;
    convertedText = convertedText + converted.convert
    console.log(char, converted.raw, converted.convert)
  })

  currentCharCount = convertedText.length;

  textRawOutput.innerHTML = rawText;
  textOutput.innerHTML = convertedText;
  updateCharCounter();
}

function updateCharCounter () {
  charCountEl.innerHTML = charLimit - currentCharCount;
  charLimitEl.innerHTML = charLimit;
}

textInput.addEventListener("input", updateText);
updateCharCounter();