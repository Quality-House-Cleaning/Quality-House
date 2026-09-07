const menuButton=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰'});nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');if(menuButton)menuButton.textContent='☰'}));const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const sections=[...document.querySelectorAll('main section[id]')],links=[...document.querySelectorAll('.main-nav a')];const activeObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}})},{rootMargin:'-35% 0px -55% 0px'});sections.forEach(s=>activeObserver.observe(s));
const params=new URLSearchParams(window.location.search);if(params.get('submitted')==='1'){const success=document.getElementById('form-success');if(success){success.hidden=false;success.scrollIntoView({behavior:'smooth',block:'center'})}}

// The hero and kitchen images are embedded directly in index.html as data URLs.
// Only the bathroom image remains a normal same-origin asset.
const aboutImage=document.querySelector('.about-image img');
if(aboutImage){
  aboutImage.src='assets/about-ref.webp?v=20260906-1955';
  aboutImage.alt='Freshly cleaned bathroom counter with folded towels';
}