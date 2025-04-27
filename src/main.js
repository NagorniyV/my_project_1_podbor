async function loadHTML(selector, file) {
  const response = await fetch(file);
  const html = await response.text();
  document.querySelector(selector).innerHTML = html;
}

loadHTML("#header", "partials/header.html");
loadHTML("#footer", "partials/footer.html");
