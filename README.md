# CSS Anywhere

This is a bookmarklet to apply CSS and JS.

## How to use

```
$ git clone git@github.com:miya0001/css-anywhere.git
$ npm install
$ npm start
```

Finally, please add following link into your bookmark.

<a href="javascript:(function(){if(document.getElementById('tmp-script')){return void(0);};var s=document.createElement('script');s.id='tmp-script';s.src='https://127.0.0.1:8080/load.js';document.body.appendChild(s)})()">CSS Anywhere</a>
