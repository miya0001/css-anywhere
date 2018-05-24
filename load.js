(function() {
  var date = new Date();
  time = date.getTime();
  if (! document.getElementById('tmp-style')) {
    var style = document.createElement('link');
    style.rel = "stylesheet";
    style.type = "text/css";
    style.id = "tmp-style";
    document.body.appendChild(style)
  }

  if (!document.getElementById('tmp-script')) {
    var script = document.createElement('script');
    script.id = "tmp-script"
    document.body.appendChild(script);
  }

  document.getElementById('tmp-style').href = "https://127.0.0.1:8080/build/style.css?" + time;
  document.getElementById('tmp-script').src = "https://127.0.0.1:8080/build/script.js?" + time;
})();
