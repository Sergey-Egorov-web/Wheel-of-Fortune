// const titleWordInputNode = document.querySelector(".js-input-word");
// const addPostBtnNode = document.querySelector(".js-add-word-button");
// const postsNode = document.querySelector(".js-posts");

// let answer = "Собака";

// addPostBtnNode.addEventListener("click", function () {
//   let post;

//   post = getWordFromUser(titleWordInputNode.value);
//   // addPost(getPost());
//   fetch("http://localhost:3003/")
//     .then((response) => response.text()) // попытка сделать запрос на сервер
//     .then((responseText) => console.log(responseText));

//   renderPost(post);
// });

// function getWordFromUser(textWordFromUser) {
//   return {
//     text: textWordFromUser,
//   };
// }

// function renderPost(word) {
//   const post = word;
//   console.log(post);
//   let postsHTML = "";

//   postsHTML += `
//       <div class="post">
//          <p class="post-text">${post}</p>
//       </div>
//       `;
//   postsNode.innerHTML = postsHTML;
// }
