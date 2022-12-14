const defaultOffset = 50;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
    if(scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('scroll');
    }
    else if(scrollPosition() < defaultOffset && header.classList.contains('scroll')){
        //scroll up
        header.classList.remove('scroll');
    }
})

const headerBtn = document.querySelector('.header__btn');
const list = document.querySelector('.header__list');
const listItem = list.querySelectorAll('a');

if (headerBtn) {
    headerBtn.addEventListener('click', () => {
        headerBtn.classList.toggle('active');
        list.classList.toggle('active');
        document.body.classList.toggle('active');
    });
}
list.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (document.body.classList.contains('active')) {
            headerBtn.classList.toggle('active');
            list.classList.toggle('active');
            document.body.classList.toggle('active');
        }
    })
});