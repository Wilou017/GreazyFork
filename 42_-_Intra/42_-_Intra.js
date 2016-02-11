// ==UserScript==
// @name        42 - Intra
// @namespace   https://greasyfork.org/fr/users/11667-aymeric-maitre
// @description 42 - Intra
// @include     https://profile.intra.42.fr/*
// @version     1
// @grant       none
// ==/UserScript==

var block = document.getElementsByClassName('row')[document.getElementsByClassName('row').length - 1];
var link = "https://www.youtube.com/embed/deoseries?list=PLGpavwBxqIn0IvuGVYSkvwlZezS7ZqEpE";
block.innerHTML = '<div class="col-lg-4 col-md-6 col-xs-12 fixed-height"><div class="container-inner-item boxed">	<h4 class="profile-title">		Youtube Playlist	</h4>	<iframe width="700" height="315" src="' + link + '" frameborder="0" lowfullscreen></iframe></div></div>' + block.innerHTML;