const navDialog = document.getElementById("nav_dialog");

function handleMenu(){
    navDialog.classList.toggle('hidden');
}

const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

function setupIntersectionObserver(element, isLTR, speed){
    const intersectionCallback = (entries)=>{

        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll', scrollHandler);
        }else{
            document.removeEventListener('scroll', scrollHandler);
        }
        
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback)

    intersectionObserver.observe(element);

    function scrollHandler(){
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;

        if(isLTR){
            totalTranslate = translateX + initialTranslateLTR;
        }else{
            totalTranslate = -(translateX + initialTranslateRTL);
        }

        element.style.transform = `translateX(${totalTranslate}px)`;
    }


}

const line1 = document.getElementById("line_1");
const line2 = document.getElementById("line_2");
const line3 = document.getElementById("line_3");
const line4 = document.getElementById("line_4");

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, true, 0.8);



const dtElements = document.querySelectorAll("dt");

dtElements.forEach(e => {
    e.addEventListener('click', () => {
        const ddId = e.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrowIcon = e.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden')
        ddArrowIcon.classList.toggle('-rotate-180')
    })
})