var readlineSync = require("readline-sync");
var score =0;
var name=readlineSync.question("What's your name ");
console.log("Welcome "+name+"!!"+"Let's Test Your Chess Knowledge");
console.log("Please enter text in smallcase");
var score=0;
function chessquiz(question,answer){
  var temp=readlineSync.question(question);
  if(temp==answer){
    console.log("Correct");
    score=score+1;
  }
  else{
    console.log("Wrong")
  }

}
var check=readlineSync.question("Enter 1 to start the quiz ");
if(check==1){
  chessquiz("Q1. How many boxes does the Chessboard have? ","64");
chessquiz("Q2. This piece whose capture or mate is the end of the game? ","king");
chessquiz("Q3. How many colours are there in chess board? ","2");
chessquiz("Q4. How many pieces are there in chess board per side? ","16");
chessquiz("Q5. The piece whose movement forms a L shape? ","knight");
chessquiz("Q6. The most powerful piece on the chess board? ","queen");
console.log("Your Final Score is "+score);
}
else{
  console.log("Your Final Score is "+score);
}
