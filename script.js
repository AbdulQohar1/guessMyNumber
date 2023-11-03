// document.querySelector(".number").textContent;
// document.querySelector(".score").textContent;

// document.querySelector(".guess").value;


let secretNumber = Math.trunc((Math.random() * 20)+ 1);
let score = 20;
let highscore = 0;


// REFACTORING OUR CODE
document.querySelector(".check").addEventListener("click" , function () {
   const guess = Number(document.querySelector(".guess").value);

   // When there's no input
   if (!guess) {
      document.querySelector(".message").textContent = "No Number!!";
   }

   // When the player wins!
   else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "Correct Number!";
      document.querySelector(".number").textContent = secretNumber;

      /*  Using Javascript to manipulate CSS styles of the DOM*/
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      /*Implemnting Highscore feature */
      if (score > highscore) {
         highscore = score;
         document.querySelector(".highscore").textContent = highscore;
      }
   }

   // When the player lose!
   else if (guess !== secretNumber) {
      if (score > 1) {
         document.querySelector(".message").textContent = (guess > secretNumber) ? "Too High!" : "Too Low!";
         score--;
         document.querySelector(".score").textContent = score;

      } 
      else {
         document.querySelector(".message").textContent = "You lost the game!";
         document.querySelector(".score").textContent = 0;
      }
   }

   // Implimenting the again button
   document.querySelector(".again").addEventListener("click", function () {
      score = 20;
      secretNumber = Math.trunc(Math.random()*20)+ 1;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Start guessing...";
      document.querySelector(".number").textContent  = "?";
      document.querySelector(".guess").value = "";
      /* Restoring the styling of the game!*/ 
      document.querySelector("body").style.backgroundColor = "#222";
      document.querySelector(".number").style.width = "15rem";


   });
})


/*document.querySelector(".check").addEventListener("click", 
function (){
  const guess = Number(document.querySelector(".guess").value);
  
   // When there's no input!
  if (!guess) {
      document.querySelector(".message").textContent = "No number";

      // When player wins!!
   } else if (guess === secretNumber) { 
      document.querySelector(".message").textContent = "Correct Number "; 
      document.querySelector(".number").textContent = secretNumber;

      //  Using Javascript to manipulate CSS styles of the DOM
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      
      // Implementing Highscore!!
      if (score > highscore) {
         highscore = score; 
         document.querySelector(".highscore").textContent  = highscore;
         
      }

     
   } else if ( guess !== secretNumber) {
       if (score > 1) {
         document.querySelector(".message").textContent = (guess > secretNumber) ? "Too high!" : "Too Low!"; 
         score--;
         document.querySelector(".score").textContent = score;
      } else {
         document.querySelector(".message").textContent = "You lost the game!";
         document.querySelector(".score").textContent = 0;
       }
      
     };
   


   //   else if (guess > secretNumber) {
      // When guess is too high
   //    if (score > 1) {
   //       document.querySelector(".message").textContent = "Too high!"; 
   //       score--;
   //       document.querySelector(".score").textContent = score;
   //    } else {
   //       document.querySelector(".message").textContent = "You lost the game!";
   //       document.querySelector(".score").textContent = 0;
   //     }
      
   //   }
    
   //  else if (guess < secretNumber){
   //    // When guess is too low
   //    if (score > 1) {
   //       document.querySelector(".message").textContent = "Too Low!"; 
   //       score--;
   //       document.querySelector(".score").textContent = score;
   //    } else {
   //       document.querySelector(".message").textContent = "You lost the game!";
   //       document.querySelector(".score").textContent = 0;
   //     }
      
   // }

   

   
//    if (score === 0) {
//     document.querySelector(".message").textContent = "You Lose!"
//    }
});
*/