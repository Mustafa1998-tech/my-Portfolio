(() => {
  'use strict';
  const root = document.documentElement;
  root.classList.add('js-ready');
  let language = 'ar', expanded = false, filter = 'all';
  const projects = [...document.querySelectorAll('.repo')];
  const languageButton = document.querySelector('#language-toggle');
  const menuButton = document.querySelector('#menu-toggle');
  const menu = document.querySelector('#nav-links');
  const showProjects = document.querySelector('#show-projects');
  const filterStatus = document.querySelector('#filter-status');
  function updateProjects(announce = false) {
    let count = 0;
    projects.forEach((project, index) => {
      const visible = (filter === 'all' || project.dataset.category === filter) && (filter !== 'all' || expanded || index < 6);
      project.hidden = !visible;
      project.classList.toggle('is-visible', visible);
      if (visible) count++;
    });
    showProjects.hidden = filter !== 'all';
    showProjects.setAttribute('aria-expanded', String(expanded));
    showProjects.firstElementChild.textContent = language === 'ar' ? (expanded ? 'عرض مشاريع أقل' : 'عرض كل المشاريع (10)') : (expanded ? 'Show fewer projects' : 'Show all projects (10)');
    showProjects.lastElementChild.textContent = expanded ? '−' : '+';
    if (announce) filterStatus.textContent = language === 'ar' ? `عدد المشاريع المعروضة: ${count}` : `${count} projects shown`;
  }
  function closeMenu() { menu.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); }
  function setLanguage(next) {
    language = next === 'en' ? 'en' : 'ar';
    root.lang = language; root.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-ar][data-en]').forEach(element => { element.textContent = element.dataset[language]; });
    document.querySelectorAll('[data-aria-ar][data-aria-en]').forEach(element => { element.setAttribute('aria-label', language === 'ar' ? element.dataset.ariaAr : element.dataset.ariaEn); });
    languageButton.innerHTML = language === 'ar' ? 'EN <span aria-hidden="true">↔</span>' : 'عربي <span aria-hidden="true">↔</span>';
    languageButton.lang = language === 'ar' ? 'en' : 'ar';
    languageButton.setAttribute('aria-label', language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    document.querySelector('#hero-cv').href = language === 'ar' ? 'Mustafa_CV_Updated_AR.pdf' : 'Mustafa_CV_Updated_EN.pdf';
    document.title = language === 'ar' ? 'مصطفى أنور | تطوير البرمجيات وتشغيل الأنظمة' : 'Mustafa Anwar | Software, Systems & Cloud';
    document.querySelector('meta[name="description"]').content = language === 'ar' ? 'مصطفى أنور فضل أحمد — تطوير البرمجيات والأنظمة في السعودية. Angular، ASP.NET Core، SQL Server، ومسار نحو Google Cloud وDevOps.' : 'Mustafa Anwar Fadl Ahmed — software and systems developer in Saudi Arabia. Angular, ASP.NET Core, SQL Server, operations, and a path toward Google Cloud and DevOps.';
    document.querySelector('#copy-status').textContent = ''; filterStatus.textContent = ''; updateProjects();
    try { localStorage.setItem('portfolio-language', language); } catch { /* Storage is optional. */ }
  }
  languageButton.addEventListener('click', () => setLanguage(language === 'ar' ? 'en' : 'ar'));
  menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); menu.classList.toggle('is-open', open); });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.classList.contains('is-open')) { closeMenu(); menuButton.focus(); } });
  document.addEventListener('click', event => { if (!event.target.closest('.nav') && menu.classList.contains('is-open')) closeMenu(); });
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => { filter = button.dataset.filter; document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button))); updateProjects(true); }));
  showProjects.addEventListener('click', () => { expanded = !expanded; updateProjects(true); if (!expanded) document.querySelector('.repos-heading').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'start'}); });
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  function selectTab(selected, moveFocus = false) { tabs.forEach(tab => { const active = tab === selected; tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1; document.getElementById(tab.getAttribute('aria-controls')).hidden = !active; }); if (moveFocus) selected.focus(); }
  tabs.forEach((tab,index) => { tab.addEventListener('click', () => selectTab(tab)); tab.addEventListener('keydown',event => { let next; if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index+1)%tabs.length; if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index-1+tabs.length)%tabs.length; if (event.key === 'Home') next = 0; if (event.key === 'End') next = tabs.length-1; if (next !== undefined) {event.preventDefault();selectTab(tabs[next],true);} }); });
  document.querySelectorAll('[data-dialog]').forEach(trigger => trigger.addEventListener('click', () => {document.getElementById(trigger.dataset.dialog).showModal();document.body.classList.add('modal-open');}));
  document.querySelectorAll('dialog').forEach(dialog => { dialog.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => dialog.close())); dialog.addEventListener('click',event => {if(event.target !== dialog)return; const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}); dialog.addEventListener('close',()=>document.body.classList.remove('modal-open')); });
  document.querySelector('#copy-email').addEventListener('click',async () => { const status=document.querySelector('#copy-status'); try {await navigator.clipboard.writeText('mustafaanwar1998@gmail.com');status.textContent=language==='ar'?'تم نسخ البريد الإلكتروني.':'Email address copied.';} catch {status.textContent=language==='ar'?'يمكنك تحديد البريد ونسخه، أو الضغط عليه لفتح تطبيق البريد.':'Select the address to copy it, or click it to open your email app.';} });
  document.querySelector('#year').textContent = new Date().getFullYear();
  let preferred='ar';try{preferred=localStorage.getItem('portfolio-language')||'ar';}catch{/* Default to Arabic. */}setLanguage(preferred);
})();
