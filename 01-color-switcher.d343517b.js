!function(){var t={body:document.querySelector("body"),start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")},e=null;t.stop.disabled=!0,t.start.addEventListener("click",(function(){e=setInterval((function(e){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.start.disabled=!0,t.stop.disabled=!1})),t.stop.addEventListener("click",(function(){clearInterval(e),t.stop.disabled=!0,t.start.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.d343517b.js.map