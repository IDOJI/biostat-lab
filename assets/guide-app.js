const menuButton=document.getElementById('menuButton');
const sidebar=document.getElementById('sidebar');
const navLinks=[...document.querySelectorAll('.sidebar a')];
const sections=[...document.querySelectorAll('main section[id]')];

menuButton?.addEventListener('click',()=>{
  const isOpen=sidebar.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(isOpen));
});

navLinks.forEach((link)=>{
  link.addEventListener('click',()=>{
    sidebar.classList.remove('open');
    menuButton?.setAttribute('aria-expanded','false');
  });
});

const observer=new IntersectionObserver((entries)=>{
  const visible=entries.filter((entry)=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
  if(!visible)return;
  navLinks.forEach((link)=>{
    link.classList.toggle('active',link.getAttribute('href')===`#${visible.target.id}`);
  });
},{rootMargin:'-20% 0px -65% 0px',threshold:[0.1,0.3,0.6]});

sections.forEach((section)=>observer.observe(section));

document.getElementById('updatedDate').textContent=new Intl.DateTimeFormat('ko-KR',{
  year:'numeric',month:'long',day:'numeric'
}).format(new Date());
