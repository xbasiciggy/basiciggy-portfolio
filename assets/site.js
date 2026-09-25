
(function(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  const media = document.querySelector('[data-parallax]');
  const words = document.querySelector('[data-hero-words]');
  if (!media) return;
  let ticking = false;
  window.addEventListener('scroll', function(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function(){
      const y = window.scrollY || 0;
      const hero = document.querySelector('[data-hero]');
      const h = hero ? hero.offsetHeight : 1;
      const p = Math.min(Math.max(y / h, 0), 1);
      media.style.transform = 'translate3d(0,' + (y * .10) + 'px,0)';
      if (words){
        words.style.opacity = String(Math.max(0,1-p*1.65));
        words.style.transform = 'translateY(' + (-p*16) + 'px)';
      }
      ticking = false;
    });
  }, {passive:true});
})();
