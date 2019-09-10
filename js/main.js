//Persistent Navbar

$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      var $jumbotron = $(".jumbotron");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $jumbotron.height());
    });
  });

//Smooth-scroll

$(document).on('click', 'a[href^="#"]', function(e) {
  // target element id
  var id = $(this).attr('href');
  
  // target element
  var $id = $(id);
  if ($id.length === 0) {
      return;
  }
  
  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();
  
  // top position relative to the document
  var pos = $id.offset().top;
  
  // animated top scrolling
  $('body, html').animate({scrollTop: pos});
});

//Hamburger animation

$(function () {
  $(document).ready(function () {
    $('.first-button').on('click', function () {
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
      $('.animated-icon3').toggleClass('open');
    });
  });
});

//NewsAPI Logic

function techcrunch(){
  var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=bbeba59acad24b039083ab5311c7f86a';
  var req = new Request(url);
  fetch(req)
      .then(function (response) {
          news = response.json();
          return news;
      })
      .then(function (data) {
          console.log(data.articles);
          techData(data.articles);

      });
  }

  function wired(){
    var url = 'https://newsapi.org/v2/top-headlines?sources=wired&apiKey=bbeba59acad24b039083ab5311c7f86a';
    var req = new Request(url);
    fetch(req)
      .then(function (response) {
          news = response.json();
          return news;
      })
      .then(function (data) {
          console.log(data.articles);
          wiredData(data.articles);

      });
  }

  function verge(){
    var url = 'https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=bbeba59acad24b039083ab5311c7f86a';
    var req = new Request(url);
    fetch(req)
        .then(function (response) {
            news = response.json();
            return news;
        })
        .then(function (data) {
            console.log(data.articles);
            vergeData(data.articles);
  
        });
    }

  function techData(data) {
      var headlineContainer = document.getElementById('techCrunch');
      for (var i = 0; i < data.length; i++) {
          var div = document.createElement("div");
          div.innerHTML = '<h5>'+ (i+1) + '. '+ data[i].title + '</h5>' + '<h6>Source: '+ data[i].source.name +' ' + '| ' + 'Author: ' + data[i].author +  '</h6><p>Description: ' + data[i].description + '<a style="text-decoration: none; color: #e74c3c;" href= "' + data[i].url + '"> Read more</a>' + '</p><hr>';
          headlineContainer.appendChild(div);
      }
  }

  function wiredData(data){
    var headlineContainer = document.getElementById('wired');
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = '<h5>'+ (i+1) + '. '+ data[i].title + '</h5>' + '<h6>Source: '+ data[i].source.name +' '  + '</h6><p>Description: ' + data[i].description + '<a style="text-decoration: none; color: #e74c3c;" href= "' + data[i].url + '"> Read more</a>' + '</p><hr>';
        headlineContainer.appendChild(div);
    } 
  }

  function vergeData(data){
    var headlineContainer = document.getElementById('verge');
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = '<h5>'+ (i+1) + '. '+ data[i].title + '</h5>' + '<h6>Source: '+ data[i].source.name + ' | '  + 'Author: ' + data[i].author + '</h6><p>Description: ' + data[i].description + '<a style="text-decoration: none; color: #e74c3c;" href= "' + data[i].url + '"> Read more</a>' + '</p><hr>';
        headlineContainer.appendChild(div);
    } 
  }