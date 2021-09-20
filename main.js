// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal');
modal.className = 'hidden';
const modalMsg = document.getElementById('modal-message')

const hearts = document.querySelectorAll(".like-glyph");

for (let heart of hearts) {
  heart.addEventListener("click", clickHeart);
}

function clickHeart(e) {
  // debugger
  console.log(`${e.target.innerHTML} clicked`);
  let heart = e.target
  mimicServerCall()
  .then(function(serverMessage){
    // debugger
    alert(serverMessage);
    if(heart.innerText == EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.classList.add('.activated-heart');
    } else {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove('.activated-heart');
    }
// debugger
  })
  .catch((error) => {

    modal.classList.remove('hidden')
    modalMsg.innerHTML += error
    setTimeout(() => modal.className = 'hidden', 5000);

  })

}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
