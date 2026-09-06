const revealEls=[...document.querySelectorAll('.intro-copy,.intro-art,.resume-col,.project,.contact>div')];
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.12});
revealEls.forEach((el,i)=>{el.classList.add('reveal');el.style.transitionDelay=`${Math.min(i*45,350)}ms`;io.observe(el)});

const toast=document.querySelector('.toast');
document.querySelectorAll('.project').forEach(p=>p.addEventListener('click',e=>{
 e.preventDefault(); toast.textContent=`PROJECT — ${p.dataset.title}`; toast.classList.add('show');
 setTimeout(()=>toast.classList.remove('show'),1500);
}));
document.querySelectorAll('.category-nav a').forEach(a=>a.addEventListener('click',()=>window.scrollBy(0,-20)));
