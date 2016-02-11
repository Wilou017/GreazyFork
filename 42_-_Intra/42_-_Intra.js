// ==UserScript==
// @name        42 - Intra
// @namespace   https://greasyfork.org/fr/users/11667-aymeric-maitre
// @description Ajoute une playlist youtube sur l'intra de l'ecole 42 https://profile.intra.42.fr/
// @include     https://profile.intra.42.fr/*
// @version     1.1
// @icon        https://profile.intra.42.fr/assets/42_logo_black-684989d43d629b3c0ff6fd7e1157ee04db9bb7a73fba8ec4e01543d650a1c607.png
// @grant       none
// ==/UserScript==

var block = document.getElementsByClassName('row')[document.getElementsByClassName('row').length - 1];
var link = "https://www.youtube.com/embed/deoseries?list=PLGpavwBxqIn0IvuGVYSkvwlZezS7ZqEpE";
block.innerHTML = '<div class="col-lg-4 col-md-6 col-xs-12 fixed-height"><div class="container-inner-item boxed">	<h4 class="profile-title">		Youtube Playlist	</h4>	<iframe width="700" height="315" src="' + link + '" frameborder="0" lowfullscreen></iframe></div></div>' + block.innerHTML;