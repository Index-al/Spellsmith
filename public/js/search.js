async function searchHandler(e) {
  e.preventDefault();
  const searchText = document.querySelector(".search-input").value.trim();

  if (searchText) {
    document.location.replace(`/search-result/${searchText}`);
  }
}

const searchForms = document.querySelectorAll(".search-form");
searchForms.forEach(form => {
  form.addEventListener("submit", searchHandler);
});
