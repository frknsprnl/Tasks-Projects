// const setOptions = (text, src, dst) => {
//     return options ={
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//             'X-RapidAPI-Key': 'b55bb35b14mshde72d2b82ffcf79p1291c9jsn1276ba10ac26',
//             'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
//         },
//         body: `{"q":"${text}","source":"${src}","target": "${dst}"}`
//     };
// }

// const translate =  (text, src, dst) => {
//     fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', setOptions(text, src, dst))
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }

// translate("Hello World!", "en", "tr");

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
  .then((response) => langCodes(response))
  .catch((err) => console.error(err));

const setText = () => {
  const src_textArea = document.querySelector("#src-textarea");
  return src_textArea.value;
};

const langCodes = (resp) => {
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

// Source and Destination language selection start ***
const selectedSrcVal = document.querySelector(".src-btn");

const setSRC = () => {
  console.log(selectedSrcVal.options[selectedSrcVal.selectedIndex].value);
};

selectedSrcVal.addEventListener("click", setSRC);

const selectedDstVal = document.querySelector(".dst-btn");

const setDST = () => {
  console.log(selectedDstVal.options[selectedDstVal.selectedIndex].value);
};

selectedDstVal.addEventListener("click", setDST);

// Source and Destination language selection end ***
