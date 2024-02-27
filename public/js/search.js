async function searchHandler(e) {
  e.preventDefault();
  let searchText = document.querySelector(".search-input").value.trim();

  // Replace spaces with dashes
  searchText = searchText.replace(`/\s+/g`, `-`);

  // Encode URI components other than spaces
  searchText = encodeURI(searchText);
  document.location.replace(`/search-result/${searchText}`).catch((error) => {
    document.location.replace("/");
    console.log(error);
  });
}

const searchForms = document.querySelectorAll(".search-form");
searchForms.forEach((form) => {
  form.addEventListener("submit", searchHandler);
});
