
/**
 * Duel Fight Game - Susan Todd
 * Date: 4/02/14

 Assignment 1
 Part 1/3 of series
*/
// self-executing function
(function(){

    console.log("fight");//returns the same

         //this is a fight game between 2 contenders, they have health and damage vars to determine the winner of each round
	var playerOneName = "Foxey";//assign names to fighters
    var playerTwoName = "Moxey";

    var playerOneHealth = 100;//assign beginning health value
    var playerTwoHealth = 100;

    var player1Damage = 20;//assign players damage value
    var player2Damage = 20;

    console.log("Foxey and Moxey");// returns the same, testing val of my name vars



         //initialise the rounds//create loop for 10 rounds
     var round=0;//initial count

        //begin fight fn
    function fight(){
 
            alert(playerOneName + ":" + playerOneHealth + "  *START*  " + playerTwoName + ":" + playerTwoHealth);
        
                //loop for 10 rounds
            for(var i=0;1<10;i++){

                       //assign minDamage to specific player
                var minDamage1 = player1Damage * .5;
                var minDamage2 = player2Damage * .5;

                       //random formula is -
                       //Math.floor(Math.random()*(max - min) + min);
                var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
                var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

                 //inflict damage
                playerOneHealth -=f1; //minus equals same as  playerOneHealth = player1Health - f1 ;
                playerTwoHealth -=f2;

                   console.log(f1 + f2);//testing the var f1 and f2


                    //testing
                   console.log( playerOneName +":"+ playerOneHealth + " " + playerTwoName +":"+ playerTwoHealth );

               //now check for winner
               //winnerCheck();//make this into a var after creating the if statements
                var result = winnerCheck();
                
                console.log(result);//if I get results here then I know my program is processing inside the winnercheck fn below

                //conditional for running the loop again
                if(result === "no winner"){
                    round++; //increases the rounds

                    //displays following info per round
                    alert(playerOneName + ":"+ playerOneHealth + " " + "*ROUND" + ":" + round + " " + " OVER* " + " "+ playerTwoName +":"+ playerTwoHealth );
                }else{
                    alert(result);
                    break;//stops loop is there is a winner or both die
                };//close if

            };//close loop
     };//close fight fn       

     function winnerCheck(){

            //console.log("in winnerCheck ");

                //this code checks to see who the winner is or if both players die 
            var result = "no winner";//defining result

                //compare player ones health against player 2 health, if they are both less than 1 :result=both die
            if( playerOneHealth < 1 && playerTwoHealth < 1 ){

                  result = "You both die !";

                 //is plyaer ones health less than 1 : result= player2 wins
             }else if( playerOneHealth <1 ){

                 result = playerTwoName+ " " + "WINS!!!"  + " " + "*GAME OVER*";

                //is player twos health less than 1 : result= player1 wins
            }else if( playerTwoHealth <1){

                 result = playerOneName + " "+ "WINS!!!" + " " + "*GAME OVER*";

            };//go back up to winnerCheck fn call and turn this into a variable after creating the condionals

         return result;

     };//close winnerCheck fn     


            //start program by calling the fn
    fight();//this calls the fight fn above; essentially the fight fn parameters are defined above

})();//close doc
