const btn= document.getElementById('menu-btn');
const overlay= document.getElementById('overlay');
const mobileMenu= document.getElementById('mobile-menu');
const counters= document.querySelectorAll('.counter');
let scrollStarted= false;
btn.addEventListener('click', () =>{
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('no-scroll');
    mobileMenu.classList.toggle('show-menu');
})
document.addEventListener('scroll', scrollPage);

function scrollPage(){
    const scrollPos= window.scrollY;

    if(scrollPos > 100 && !scrollStarted){
        countUp();
        scrollStarted= true;
    }
    else if(scrollPos < 100 && scrollStarted){
        reset();
        scrollStarted= false;
    }
}


function countUp(){
    counters.forEach((counter) =>{
        counter.innerHTML= '0';

        const updateCounter = () =>{

            // Get counter target
            const target= +counter.getAttribute('data-target');
            // Get current counter value
            const c= +counter.innerHTML;

            // Create an increment
            const increment= target/100

            // if counter is less than target, add increment
            if(c<target){
                // Round up and set counter value
                counter.innerHTML = `${Math.ceil(c + increment)}`

                setTimeout(updateCounter, 75)
            }
            else{
                counter.innerHTML= target;
            }
        };

        updateCounter();
    });
}

function reset(){
    counters.forEach((counter) => counter.innerHTML= '0');
}