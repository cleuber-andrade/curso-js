function getTimeFromSecond(second){
    const data = new Date(second * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC',
    });
}

const clock = document.querySelector('.clock');
const start = document.querySelector('.iniciar');
const pause = document.querySelector('.pausar');
const restart = document.querySelector('.zerar');

let second = 0;

let timer; 

function startingClock(){
    timer = setInterval(() => {
        second++;
        clock.innerHTML = getTimeFromSecond(second);
    }, 1000);
}

//target é para informar no DOM onde foi clicado
/* Depois verificar pq não deu certo
document.addEventListener('click', function(e){
   const el = e.target;

   if (el.classList.contains('restart')){
        clearInterval(timer);
        clock.innerHTML = '00:00:00';
        second = 0;
        clock.classList.remove('pausado');
   }

   if (el.classList.contains('start')){
        clock.classList.remove('pausado');
        clearInterval(timer);
        startingClock();
   }

   if (el.classList.contains('pause')){
        clearInterval(timer);
        clock.classList.add('pausado');
   }

});*/

start.addEventListener('click', function(event) {
    clock.classList.remove('pausado');
    clearInterval(timer);
    startingClock();
});

pause.addEventListener('click', function(event) {
    clearInterval(timer);
    clock.classList.add('pausado');
});

restart.addEventListener('click', function(event) {
    clearInterval(timer);
    clock.innerHTML = '00:00:00';
    second = 0;
    clock.classList.remove('pausado');
});


