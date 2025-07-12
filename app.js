function translateText() {
  const text = document.getElementById("textTranslate").value.trim();
  const toLang = document.getElementById("target").value;
  const result = document.getElementById("result");

  if (!text) {
    result.innerText = '⚠️ Please enter some text first.';
    result.classList.add('error');
    result.classList.remove('loading');
    return;
  }

  result.innerText = '⏳ Translating...';
  result.classList.add('loading');
  result.classList.remove('error');

  fetch("https://google-translate113.p.rapidapi.com/api/v1/translator/text", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": "google-translate113.p.rapidapi.com",
      "x-rapidapi-key": "d05e17dc30mshbf638fdbb924e82p13c232jsn4771cf03b46f"
    },
    body: JSON.stringify({
      from: "auto",
      to: toLang,
      text: text
    })
  })
    .then((res) => res.json())
    .then((data) => {
      result.classList.remove('error', 'loading');
      result.innerText = data.trans;
    })
    .catch((err) => {
      console.error("Translation error:", err);
      result.innerText = "❌ Translation failed.";
      result.classList.add('error');
      result.classList.remove('loading');
    });
}