//Persistent Navbar

$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      var $jumbotron = $(".jumbotron");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $jumbotron.height()/2);
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

  //WeatherApi logic
  var x = document.getElementById("location");
  
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(weatherApi, showError);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function weatherApi( position ) {
    var key = '7f95f9878ea13e1a764a5a30fb963fa2';
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude+'&lon='+ position.coords.longitude + '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
      weatherData(data);
    })
  }

  function showError(error) {
    if(error.code == 1) {
      x.innerHTML = "Please provide location access to display weather.";
    } 
    else if(error.code == 2) {
      x.innerHTML = "The network is down or the positioning service can't be reached.";
    } 
    else if(error.code == 3) {
      x.innerHTML = "The attempt timed out before it could get the location data.";
    } 
    else {
      x.innerHTML = "Geolocation failed due to unknown error.";
    }
  }

  function weatherData(d){
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
    var w_icon = document.getElementById('w-icon');
    var w_icon1 = document.getElementById('w-icon1');
    var w_icon2 = document.getElementById('w-icon2');
    var w_icon3 = document.getElementById('w-icon3');
    var w_icon4 = document.getElementById('w-icon4');

    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = celcius + "&deg;C / " + fahrenheit + "&deg;F" ;
    document.getElementById('location').innerHTML = d.name + ", "+ d.sys.country;
    document.getElementById('humid').innerHTML = "Humidity: " + d.main.humidity + "%";
    document.getElementById('wind').innerHTML = "Wind speed: " + d.wind.speed + " m/s";
    

    if( d.weather[0].id == 800 ) {
      w_icon.classList.add("sunny");
      w_icon1.classList.add("sun");
      w_icon2.classList.add("rays");
    } 
    else if( d.weather[0].id > 499 && d.weather[0].id <= 531 ) {
      w_icon.classList.add("rainy");
      w_icon1.classList.add("cloud");
      w_icon2.classList.add("rain");
    } 
    else if( d.weather[0].id > 800 && d.weather[0].id <= 804 ) {
      w_icon.classList.add("cloudy");
      w_icon1.classList.add("cloud");
      w_icon2.classList.add("cloud");
    }
    else if( d.weather[0].id > 599 && d.weather[0].id <= 622 ) {
      w_icon.classList.add("flurries");
      w_icon1.classList.add("cloud");
      w_icon2.classList.add("snow");
      w_icon3.classList.add("flake");
      w_icon4.classList.add("flake");
    }
  }