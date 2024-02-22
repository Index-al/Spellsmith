async function searchHandler(e) {
  e.preventDefault();
  let searchText = document.querySelector(".search-input").value.trim();

  //TODO: FIX THIS
  // Replace spaces with dashes
  searchText = searchText.replace('/\s+/g', '-');

  // Encode URI components other than spaces
  searchText = encodeURI(searchText);

  document.location.replace(`/search-result/${searchText}`);
}

const searchForms = document.querySelectorAll(".search-form");
searchForms.forEach(form => {
  form.addEventListener("submit", searchHandler);
});
