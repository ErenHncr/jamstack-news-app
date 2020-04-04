document.querySelector(".news").addEventListener('click', (e) => {

  let selectedLi = e.currentTarget.querySelector('.addFav').parentNode.parentNode.classList;
  let title = "", url, urlToImage, source;
  source = selectedLi[selectedLi.length-3];
  url = selectedLi[selectedLi.length-2];
  urlToImage = selectedLi[selectedLi.length-1];

  for (let i = 0; i < selectedLi.length-3; i++) {
    title +=  selectedLi[i] + " ";   
  }

  localS(url, urlToImage, title, source);
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
    localStorage.setItem('news', arr);
  }
  else {
    let art = JSON.parse(localStorage.getItem('news'));
    console.log(art.length);
    let z = [...art, article]; 
    localStorage.setItem('news', JSON.stringify(z));
    // // localStorage.setItem('news',articles);
    console.log(z);
  }
}



function changeImg() {
  document.querySelector('.favorite').children[0].src = "/img/start.png";
}

function defaultImg() {
  document.querySelector('.favorite').children[0].src = "/img/star.png";
}


