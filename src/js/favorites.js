let news = document.querySelector(".news");
window.addEventListener("DOMContentLoaded", (e) => {
  if (localStorage.getItem("news") != undefined) {
    let articles = JSON.parse(localStorage.getItem("news"));
    articles.forEach((article) => {
      news.innerHTML += `
      <li class="${article.title} ${article.source} ${article.url} ${article.urlToImage}">
      <h2>
        <a href="${article.url}">${article.title}</a>
      </h2>
      <img class="newsImg" src="${article.urlToImage}" />
      <div class="bottom">
        <span
          class="addFav"
          onclick="clickFavImg(this)"
          onmouseover="onFavImg(this)"
          onmouseout="outFavImg(this)" >
          <img class="clicked" src="/img/fullstar.png" width="15px" height="15px" />
        </span>
        <span>${article.source}</span>
      </div>
    </li> `;
    });
  }
});

function onFavImg(e) {
  if (e.children[0].className == "") {
    e.children[0].src = "/img/onfav.png";
  }
}
function outFavImg(e) {
  if (e.children[0].className == "") {
    e.children[0].src = "/img/start.png";
  }
}

function clickFavImg(e) {
  if (e.children[0].className == "") {
    e.children[0].src = "/img/fullstar.png";
    e.children[0].className = "clicked";
  } else {
    e.children[0].src = "/img/start.png";
    e.children[0].className = "";
  }
}
