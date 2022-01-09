<div align='center'><kbd><img src='https://i.imgur.com/vCdUj8Y.png' alt='Logo'></kbd></div>

<h1 align="center">Hyperlinks</h1>  
<div align="center">  
  
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![CodeFactor](https://www.codefactor.io/repository/github/hyperlinks-js/hyperlinks/badge)](https://www.codefactor.io/repository/github/hyperlinks-js/hyperlinks)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FCriticalcarpet%2FHyperlinks.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FCriticalcarpet%2FHyperlinks?ref=badge_shield)
![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/Hyperlinks-js/Hyperlinks?filename=packages%2Fcore%2Fpackage.json)

</div>  

A JavaScript library to make "Anchor tags" more beautiful !!! 💖


## ❯ Features

- Grab the meta-data of the websites in the background
- Fancy tooltip like display for preview
- No extra configuration needed
- Works all by itself



## ❯ Usage/Examples

Steps to follow : 

- Add the [`Hyperlinks-Js`](https://cdn.jsdelivr.net/gh/criticalcarpet/hyperlinks@latest/distindex.bundle.js) script to the head of your html.
- Add the [`Hyperlinks-Css`](https://cdn.jsdelivr.net/gh/criticalcarpet/hyperlinks@latest/dist/main.css) stylesheet below the script.
- Add the `hyperlinks` class the anchor tags for which you wish to have a preview.

⚠ Note : 
* Please add the `/` after any link.
  * ✔  => https://github.com/Criticalcarpet/  
  * ❌ => https://github.com/Criticalcarpet  

  
Here is a code snippet of a working model 👇

```html
<html>
  <head>
    <title>Hyperlinks</title>
    <script src="https://cdn.jsdelivr.net/npm/@criticalcarpet/hyperlinks/dist/index.bundle.js" type="module" defer></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@criticalcarpet/hyperlinks/dist/main.css">
  </head>
  <body>
      <a href="https://github.com/Criticalcarpet/" class="hyperlinks">Github</a>
      <a href="https://github.com/Manik2375/" class="hyperlinks">Github-2</a>
  </body>
</html>
```


## ❯ Credits 

- Special Thanks to [`Gabriel nunes`](https://github.com/gnuns) for permitting us to use [`allOrigins`](https://github.com/gnuns/allOrigins) for the library.  
- Also thanks to the below people for helping out and giving tips for the welfare of the project :
  - [Blitz](https://discord.com/app/@me/781928349915545640)
  - [Abitofevrything](https://github.com/abitofevrything)
  - [Lebster](https://github.com/LebsterFace)
  - [Xastronomica](https://github.com/xastronomica)
  - [[Cursors]](https://github.com/cursorsdottsx)
  - [Lcf.vs](https://github.com/Lcfvs)
  - [Bronzdragon](https://github.com/Bronzdragon)

## ❯ Support

Feel free to DM in [Discord](https://discord.com/channels/@me/436043273069658112) for any issues you are facing.

## ❯ License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FCriticalcarpet%2FHyperlinks.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FCriticalcarpet%2FHyperlinks?ref=badge_large)
