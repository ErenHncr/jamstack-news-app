document.querySelector(".news").addEventListener('click', (e) => {

  if(e.target.parentNode.className == "addFav") {

    let selectedLi = e.target.parentNode.parentNode.parentNode.classList;
    let title = "", url, urlToImage, source;
    source = selectedLi[selectedLi.length-3];
    url = selectedLi[selectedLi.length-2];
    urlToImage = selectedLi[selectedLi.length-1];

    for (let i = 0; i < selectedLi.length-3; i++) {
      title +=  selectedLi[i] + " ";   
    }
    
    localS(url, urlToImage, title, source);
  }
});

function localS(url, urlToImage, title, source) {
  let article = {
    url: url,
    urlToImage: urlToImage,
    title: title,
    source: source
  };

  if(localStorage.getItem('news') == undefined){
    let arr = [];
    arr[0] = JSON.stringify(article);
    localStorage.setItem('news', JSON.stringify(arr));
  }
  else {
    console.log(article.title);
    let articles = JSON.parse(localStorage.getItem('news'));
    let check = false;
    articles.forEach(e => {
      if(e.url == article.url) {
        check = true;
      }
    });
    let arr = [];
    console.log(check);
    if(check) {
      arr = [...articles];
    }
    else {
      arr = [...articles, article];
    }
    localStorage.setItem('news', JSON.stringify(arr));
  }
}



function changeImg() {
  document.querySelector('.favorite').children[0].src = "/img/start.png";
}

function defaultImg() {
  document.querySelector('.favorite').children[0].src = "/img/star.png";
}

function onFavImg(e) {
  e.children[0].src = "/img/onfav.png";
}
function outFavImg(e) {
  e.children[0].src = "/img/start.png";
}


