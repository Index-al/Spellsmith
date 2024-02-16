async function searchHandler(e) {
  e.preventDefault();
  const searchText = document.querySelector(".search-input").value.trim();
  
    document.location.replace(`search-result/${searchText}`);
}

document
  .querySelector(".search-button")
  .addEventListener("click", searchHandler);
