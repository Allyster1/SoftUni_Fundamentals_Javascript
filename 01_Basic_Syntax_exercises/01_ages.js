function determineAge(age){
    if(age < 0){
        console.log("out of bounds");
        return
    }

    if(age <= 2){
        console.log("baby");
    }
    else if(age <= 13){
        console.log("child");
    }
    else if(age <= 19){
        console.log("teenager");
    }
    else if(age <= 65){
        console.log("adult");
    }
    else {
        console.log("elder");
    }

};

determineAge(20)