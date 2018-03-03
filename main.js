console.log('I work!');
let current;
let past;
let items = document.getElementById('menu');

items.addEventListener('click', e => {

  past = current;
  current = e.target.parentElement;
  current.classList.add('visible');
  if(past != undefined){
    past.classList.remove('visible');
    past = undefined;
  }
});
