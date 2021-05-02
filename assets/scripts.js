const _qs = (e)=>{
    return document.querySelector(e);
};
const _qsa = (e)=>{
    return document.querySelectorAll(e);
};

function scroll () {
    let top = _qs(".header__logo").clientHeight;
    top -= window.scrollY;
    if(top < 0) top = 0;
    _qs('.header__nav').style.top = top + 'px';
}
_qs('.ham').addEventListener('click', ()=>{
    _qs('.ham').classList.toggle('active');
    _qs('.header__nav').classList.toggle('active');
});

window.addEventListener('scroll', ()=>{
    scroll()
});
window.addEventListener('resize', () => {
    slider()
})

scroll();
function slider () {
_qsa('.gallery__slide').forEach(e=>{
    e.style.width = Math.round(window.innerWidth * 0.2) + 'px';
    e.style.minWidth = Math.round(window.innerWidth * 0.2) + 'px';
});
}

_qs('.gallery__arrow--prev').addEventListener('click', ()=>{
    _qs('.gallery__slides').scrollLeft -= Math.round(window.innerWidth * 0.2);
});
_qs('.gallery__arrow--next').addEventListener('click', ()=>{
    _qs('.gallery__slides').scrollLeft += Math.round(window.innerWidth * 0.2);
});