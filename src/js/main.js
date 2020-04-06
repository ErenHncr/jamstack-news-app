document.querySelector(".news").addEventListener("click", (e) => {
  if (e.target.parentNode.className == "addFav") {
    let selectedLi = e.target.parentNode.parentNode.parentNode.classList;
    let article = getNews(selectedLi);
    addTolocal(article.url, article.urlToImage, article.title, article.source);
  }
});

function getNews(selected) {
  let title = "",
    url,
    urlToImage,
    source;
  source = selected[selected.length - 3];
  url = selected[selected.length - 2];
  urlToImage = selected[selected.length - 1];

  for (let i = 0; i < selected.length - 3; i++) {
    title += selected[i] + " ";
  }

  return { url, urlToImage, title, source };
}

function addTolocal(url, urlToImage, title, source) {
  let article = {
    url: url,
    urlToImage: urlToImage,
    title: title,
    source: source,
  };

  if (localStorage.getItem("news") == undefined) {
    let arr = [];
    arr[0] = article;
    localStorage.setItem("news", JSON.stringify(arr));
  } else {
    //console.log(article.title);
    let articles = JSON.parse(localStorage.getItem("news"));
    let check = false;
    articles.forEach((e) => {
      if (e.url == article.url) {
        check = true;
      }
    });

    let arr = [];
    if (check) {
      arr = [...articles];
      arr = arr.filter((each) => each.url != article.url);
    } else {
      arr = [...articles, article];
    }

    localStorage.setItem("news", JSON.stringify(arr));
  }
}

function loadFromLocal(url, urlToImage, title, source) {}

function changeImg() {
  document.querySelector(".favorite").children[0].src = "/img/start.png";
}

function defaultImg() {
  document.querySelector(".favorite").children[0].src = "/img/star.png";
}

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
