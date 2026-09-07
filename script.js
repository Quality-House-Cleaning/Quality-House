const menuButton=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰'});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');if(menuButton)menuButton.textContent='☰'}));const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('.main-nav a')];const activeObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}})},{rootMargin:'-35% 0px -55% 0px'});sections.forEach(s=>activeObserver.observe(s));
const params=new URLSearchParams(window.location.search);if(params.get('submitted')==='1'){const success=document.getElementById('form-success');if(success){success.hidden=false;success.scrollIntoView({behavior:'smooth',block:'center'})}}

// Keep all image requests on the GitHub Pages origin. Some browsers/privacy
// settings block raw.githubusercontent.com, which was causing the gray placeholders.
const cacheBust='?v=20260906-1946';

const heroImage=document.querySelector('.hero-image img');
if(heroImage){
  heroImage.src='assets/hero.webp'+cacheBust;
  heroImage.alt='Bright Palmer Lake living room with mountain views';
}

const aboutImage=document.querySelector('.about-image img');
if(aboutImage){
  aboutImage.src='assets/about-ref.webp'+cacheBust;
  aboutImage.alt='Freshly cleaned bathroom counter with folded towels';
}

const kitchenImage=document.querySelector('.arrival-banner img');
if(kitchenImage){
  fetch('assets/kitchen-banner-tiny.webp.b64'+cacheBust,{cache:'no-store'})
    .then(r=>{if(!r.ok)throw new Error('image data unavailable');return r.text()})
    .then(t=>{
      const b64=t.replace(/\s+/g,'');
      kitchenImage.onerror=()=>{kitchenImage.onerror=null;kitchenImage.src='assets/hero.webp'+cacheBust};
      kitchenImage.src='data:image/webp;base64,'+b64;
      kitchenImage.alt='Bright modern kitchen overlooking the mountains';
    })
    .catch(()=>{
      kitchenImage.src='assets/hero.webp'+cacheBust;
    });
}