async function fetchBooks(searchText) {
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=" +
      searchText +
      "terms&key=AIzaSyAGNNm8R3lqyXXypaF4HCUo0WdaIhjavmA"
  );

  const books = await response.json();
  console.log(books);
  document.querySelectorAll("#bookList-ul img").forEach((img) => img.remove());
  for (let i = 0; i < books.items.length; i++) {
    const eachItem = books.items[i];
    const imageLinks = eachItem.volumeInfo.imageLinks;
    if (imageLinks) {
      const smallThumbnail = imageLinks.smallThumbnail;
      const thumbnail = imageLinks.thumbnail;
      // console.log("st  = " + smallThumbnail + " , t = " + thumbnail);
      const img = document.createElement("img");
      img.src = smallThumbnail;
      const cont = document.querySelector("#bookList-ul");
      // cont.appendChild(img);
      console.log(img);
      cont.appendChild(img);
    }
  }
}

const searchIcon = document.querySelector("#searchImg");
searchIcon.addEventListener("click", function () {
  console.log("search clicked");
  const searchText = document.querySelector("#searchBar").value;

  console.log("invoking fetchBooks() with " + searchText);
  fetchBooks(searchText);
});

// search books-cover pages from API

// let searchIcon = document.querySelector(".searchIcon");
// searchIcon.addEventListener("click", function () {
//   const booksCover = document.querySelector();
//   const url =
//     "https://www.googleapis.com/books/v1/volumes?q=" +
//     searchText +
//     "terms&key=AIzaSyAGNNm8R3lqyXXypaF4HCUo0WdaIhjavmA";

//   async function fetchBooks(searchText) {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(booklist);

//     const books = data.search;

//     const bookListUl = document.querySelector("#bookList-Ul");

//     bookListUl.innerHTML = "";

//     for (let i = 0; i < books.lenght; i++) {
//       bookListUl.innerHTML +=
//         "<li><img src='" + movies[i].imageLinks + "'/></li>";
//     }
//   }
// });
