function birthdayCountDown(days){
    for (var i=days ; i>=0 ; i--){
        if (i>30){
            console.log(i + " days till your birthday. Sad, sad, day it is...");
        }
        else if (i<=30 && i>5){
            console.log(i + " days till your birthday. You are getting close!!");
        }
        else if (i<=5 && i>0){
            console.log(i + " DAYS TILL YOUR BIRTHDAY!!");
        }
        else{
            console.log("IT IS YOUR BIRTHDAY!!! HAPPY BIRTHDAY!!")
        }
    }
}

birthdayCountDown(50);