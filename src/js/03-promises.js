const submitBtn = document.querySelector('button[type = submit]');
const firstDelay = document.querySelector ('input[name = delay]');
const delayStep = document.querySelector ('input[name = step]');
const amount = document.querySelector ('input[name = amount]');


submitBtn.addEventListener('click', formSubmit)

function formSubmit(evt) {
  evt.preventDefault();

   
  for (let i = 0; i < Number(amount.value); i += 1) {
    let allDelay = Number(firstDelay.value)
    if (i > 0) {
      allDelay = Number(firstDelay.value) + (i * Number(delayStep.value))
    }  
      
    
    createPromise(i + 1, allDelay )
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
 }
}


function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
        
        setTimeout(() => {
            if (shouldResolve) {
              resolve({position, delay})
            } else {
              reject({ position, delay})
            }
        }, delay);
    });
}
  

