const e=document.querySelector(".form"),t=document.querySelector('input[name = "delay"]'),o=document.querySelector('input[name = "step"]'),n=document.querySelector('input[name = "amount"]');function u(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(e){e.preventDefault();let i=Number(t.value);const l=Number(o.value),r=Number(n.value);for(let e=1;e<=r;e+=1)u(e,i).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),i+=l}));
//# sourceMappingURL=03-promises.5d1ddc95.js.map