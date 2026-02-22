// script.js - populate static site from data.json and wire simple interactions
(function(){
  const qs = (s, el=document) => el.querySelector(s);
  const qa = (s, el=document) => Array.from(el.querySelectorAll(s));

  async function init(){
    const res = await fetch('./data.json');
    const data = await res.json();
    buildNav(data.nav);
    populateHero(data.hero);
    populateAbout(data.about);
    populateServices(data.services);
    populateGovernance(data.governance);
    populateNews(data.news);
    populateContact(data.contact);
    populateFooter(data.footer);
    qs('#year').textContent = new Date().getFullYear();
    setupInteractions();
  }

  function buildNav(items){
    const nav = qs('#main-nav');
    nav.innerHTML = '';
    items.forEach(it => {
      const a = document.createElement('a');
      a.href = '#'+it.id;
      a.textContent = it.label;
      a.dataset.target = it.id;
      a.addEventListener('click', navClick);
      nav.appendChild(a);
    });
    // mobile
    const mobile = qs('#mobile-menu');
    mobile.innerHTML = '';
    items.forEach(it => {
      const b = document.createElement('button');
      b.className = 'mobile-link';
      b.textContent = it.label;
      b.dataset.target = it.id;
      b.addEventListener('click', (e)=>{ document.getElementById(it.id).scrollIntoView({behavior:'smooth'}); toggleMenu(false); });
      mobile.appendChild(b);
    });
  }

  function navClick(e){
    e.preventDefault();
    const id = e.currentTarget.dataset.target;
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
    setActiveNav(id);
    toggleMenu(false);
  }

  function setActiveNav(id){
    qa('.main-nav a').forEach(a=>a.classList.toggle('active', a.dataset.target===id));
  }

  function populateHero(h){
    if(qs('#hero-title')) qs('#hero-title').innerHTML = `${h.title} <span class=\"accent\">لنرتقي بالخدمة</span>`;
    if(qs('#hero-sub')) qs('#hero-sub').textContent = h.subtitle;
    qs('#cta-about').addEventListener('click', ()=>document.getElementById('about').scrollIntoView({behavior:'smooth'}));
    qs('#cta-services').addEventListener('click', ()=>document.getElementById('services').scrollIntoView({behavior:'smooth'}));
  }

  function populateAbout(a){
    if(qs('#about-p1')) qs('#about-p1').textContent = a.p1;
    if(qs('#about-p2')) qs('#about-p2').textContent = a.p2;
    const container = qs('#about-values');
    container.innerHTML = '';
    a.values.forEach(v=>{
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `<h4 class=\"text-primary\">${v.title}</h4><p class=\"text-muted\">${v.desc}</p>`;
      container.appendChild(card);
    });
  }

  function populateServices(list){
    const grid = qs('#services-grid');
    grid.innerHTML = '';
    list.forEach(s=>{
      const el = document.createElement('div');
      el.className = 'card';
      el.innerHTML = `<h3 class=\"text-primary\">${s.title}</h3><p class=\"text-muted\">${s.desc}</p><div class=\"features\">${s.features.map(f=>`<div>• ${f}</div>`).join('')}</div>`;
      grid.appendChild(el);
    });
  }

  function populateGovernance(list){
    const grid = qs('#governance-types');
    if(!grid) return;
    grid.innerHTML = '';
    list.forEach(i=>{
      const e = document.createElement('div');
      e.className = 'card';
      e.innerHTML = `<h4 class=\"text-primary\">${i.title}</h4><p class=\"text-muted\">${i.desc}</p>`;
      grid.appendChild(e);
    });
  }

  function populateNews(list){
    const grid = qs('#news-list');
    grid.innerHTML = '';
    list.forEach((n, idx)=>{
      const card = document.createElement('article');
      card.className = 'news-card';
      card.innerHTML = `<img src=\"${n.image}\" alt=\"${escapeHtml(n.title)}\"/><div class=\"news-body\"><div class=\"text-muted\">${n.date}</div><h3 class=\"text-primary\">${n.title}</h3><p class=\"text-muted\">${n.excerpt}</p><button class=\"btn link read-more\" data-idx=\"${idx}\">قراءة المزيد ←</button></div>`;
      grid.appendChild(card);
    });
    qa('.read-more').forEach(b=>b.addEventListener('click', (e)=>{
      const i = Number(e.currentTarget.dataset.idx);
      openArchive(i);
    }));
  }

  function openArchive(i){
    fetch('./data.json').then(r=>r.json()).then(d=>{
      const item = d.news[i];
      const cont = qs('#archive-content');
      cont.innerHTML = `<article class=\"archive-item\"><h2 class=\"text-primary\">${item.title}</h2><div class=\"text-muted\">${item.date} — ${item.category}</div><img src=\"${item.image}\" alt=\"${escapeHtml(item.title)}\" style=\"width:100%;max-height:420px;object-fit:cover;margin:12px 0;border-radius:12px\"/><div class=\"text-muted\">${item.content}</div></article>`;
      document.getElementById('media').classList.add('hidden');
      document.getElementById('news-archive').classList.remove('hidden');
      window.scrollTo({top:0,behavior:'smooth'});
    });
  }

  function populateContact(c){
    const el = qs('#contact-info');
    el.innerHTML = `<h4>معلومات الاتصال</h4><p>${c.address}</p><p>${c.email}</p><p>${c.phone}</p><p>${c.hours}</p>`;
  }

  function populateFooter(f){
    const q = qs('#footer-links-list');
    q.innerHTML = f.quickLinks.map(l=>`<li><a href=\"#\">${l}</a></li>`).join('');
    const lg = qs('#footer-legal-list');
    lg.innerHTML = f.legal.map(l=>`<li>${l}</li>`).join('');
  }

  function setupInteractions(){
    qs('#menu-toggle').addEventListener('click', ()=>toggleMenu());
    qs('#archive-back').addEventListener('click', ()=>{ document.getElementById('news-archive').classList.add('hidden'); document.getElementById('media').classList.remove('hidden'); window.scrollTo({top:0,behavior:'smooth'}); });
    // highlight nav on scroll
    window.addEventListener('scroll', throttle(highlightOnScroll, 100));
  }

  function toggleMenu(force){
    const mm = qs('#mobile-menu');
    if(typeof force === 'boolean'){
      mm.classList.toggle('hidden', !force);
      return;
    }
    mm.classList.toggle('hidden');
  }

  function highlightOnScroll(){
    const sections = qa('main .section');
    const fromTop = window.scrollY + 120;
    let current = 'home';
    sections.forEach(s=>{
      if(s.offsetTop <= fromTop) current = s.id;
    });
    setActiveNav(current);
  }

  function throttle(fn, wait){
    let t=null;
    return function(){
      if(t) return; t=setTimeout(()=>{fn();t=null;},wait);
    }
  }

  function escapeHtml(str){ return String(str).replace(/[&<>"']/g, s=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[s])); }

  // init
  init().catch(err=>{console.error('Failed to initialize site',err);});

})();
