 const prompt = require('prompt-sync')();
const UserInput1=parseInt(prompt("enter your numbert:"))
const UserInput2=parseInt(prompt("enter your numbert:"))
const operator=prompt("enter your operators:")
const condition=()=>{
    if (operator=="*"){
       console.log(UserInput1*UserInput2)
    }
    else if (operator=="-"){
        console.log(UserInput1-UserInput2)
    }

    else if (operator=="+"){
        console.log(UserInput1+UserInput2)
    }

    else if (operator=="/"){
        console.log(UserInput1%UserInput2)
    }

    else{
        console.log("invalid")
    }

}  
condition();