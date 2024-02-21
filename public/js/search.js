async function searchHandler(e) {
  e.preventDefault();
  let searchText = document.querySelector(".search-input").value.trim();

  if (searchText) {
    searchText = encodeURIComponent(searchText);
    document.location.replace(`/search-result/${searchText}`);
  }
}

const searchForms = document.querySelectorAll(".search-form");
searchForms.forEach(form => {
  form.addEventListener("submit", searchHandler);
});
