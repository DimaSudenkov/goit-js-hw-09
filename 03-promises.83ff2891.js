!function(){var e=document.querySelector(".form"),n=document.querySelector('input[name = "delay"]'),o=document.querySelector('input[name = "step"]'),t=document.querySelector('input[name = "amount"]');function u(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(e){e.preventDefault();for(var c=Number(n.value),i=Number(o.value),a=Number(t.value),r=1;r<=a;r+=1)u(r,c).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),c+=i}))}();
//# sourceMappingURL=03-promises.83ff2891.js.map
