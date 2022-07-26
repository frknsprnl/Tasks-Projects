// sets translate method api response options ***start***
function setOptions(text, src, dst) {
 return options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "b55bb35b14mshde72d2b82ffcf79p1291c9jsn1276ba10ac26",
      "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
    },
    body: `{"q":"${text}","source":"${src}","target": "${dst}"}`,
  };
}

// sets translate method api response options ***end***

// gets translate response from api ***start***
const translate = (text, src, dst) => {
  fetch(
    "https://deep-translate1.p.rapidapi.com/language/translate/v2",
    setOptions(text, src, dst)
  )
    .then((response) => response.json())
    .then((response) => showResult(response.data.translations.translatedText))
    .catch((err) => console.error(err));
};

// gets translate response from api ***end***


// gets languages and language codes from api ***start***
function getLang() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b55bb35b14mshde72d2b82ffcf79p1291c9jsn1276ba10ac26",
      "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
    },
  };

  fetch(
    "https://deep-translate1.p.rapidapi.com/language/translate/v2/languages",
    options
  )
    .then((response) => response.json())
    .then((response) => setlangCodes(response))
    .catch((err) => console.error(err));
}
getLang();

// gets languages and language codes from api ***end***


// setting language codes / adding them to lang buttons ***start***

const setlangCodes = (resp) => {
  const languages = resp.languages;

  const formSelectDOM = document.querySelectorAll(".form-select");

  formSelectDOM.forEach((dom) =>
    languages.forEach((item) => {
      const optionDOM = document.createElement("option");
      optionDOM.innerHTML = `${item.name}`;
      optionDOM.value = `${item.language}`;
      dom.appendChild(optionDOM);
    })
  );
};

// setting language codes / adding them to lang buttons ***end***


// translate method ***start***

const btnTranslateDOM = document.querySelector(".translate-btn");

btnTranslateDOM.addEventListener("click", () => {
  const src_textArea = document.querySelector("#src-textarea");

  let text = src_textArea.value;

  const selectedSrcVal = document.querySelector(".src-btn");
  const selectedDstVal = document.querySelector(".dst-btn");

  let srcVal = selectedSrcVal.value;
  let dstVal = selectedDstVal.value;

  translate(text, srcVal, dstVal);
});

// translate method ***end***

// it displays the api response ***start***
const showResult = (text) =>{
  const dst_TextArea = document.querySelector('#dst-textarea')
  dst_TextArea.value = text;
}

// it displays the api response ***end***
