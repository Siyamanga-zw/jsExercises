// NUMBER 1,2,3,4.
//  variable It is a placeholder where we can temporarily store a value.
//  Value is Data that was saved on a specific variable. 
//  Datatype The variables nature, or what kind of data are we going to store in our variable. 
//  Initialisation Is the act of creating a variable and assigning a value at the same time.

// NUMBER 5.
// DIFFERENCE BETWEEN let,VAR &CONST
// var : After you've declared it, you can keep assigning different values to
// it, which is totally wrong. var is an abbreviation for a variable.
//  let reinforces the scope of a variable, which means that once a variable is
// declared, JavaScript will create its reference in our memory (RAM) as a
// container, and when we are done using it, it will be removed or deleted from
// memory.
// const: Once we create a variable using const, that means we don’t want to
// change its value, and we need to make sure that the variable has a value.
// Otherwise, we will get an error.

// NUMBER 6.
// What is a scope of a variable?
// Variable Scope in C – Local and Global Scope Explained
// In simple terms, scope of a variable is its lifetime in the program. This means that the scope of a variable is the block of code in the entire program where the variable is declared, used, and can be modified.

// NUMBER 7.
// For Loop: A for loop is an iteration method that is best used when you know the number of iterations ahead of time. It’s always followed by the initialization, expression and increment statements.
// While Loop: A while loop is an iteration method that is best used when you don't know the number of iterations ahead of time. The contents of the loop are executed as long as the expression evaluates to true.
// use forEach only and only if you want to process all elements in the array. Use while loop, when you want the iteration to stop once some condition is met and for loop for anything else.

// NUMBER 8.
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

let name = "Siyamanga"
function fullname(){
    console.log(name);
    
}
fullname();

// QUESTION 2 

let person2 ={
    firstName: 'Siyamanga',
    lastName: 'Zweni',
    Age: 22,
   
   
}
let Subjects=['CSS','HTML','BOOTSTRAP','JS']
let Address={
    name: 'GroundWork',
    streetNumber: 05,
    surbub: 'BlueDowns',
    city: 'CPT',
    Country: 'SA',
}
function fullDetails (){
    console.log( "these are my details", person2 , "i did the following subjects", Subjects, "Here is my address", Address);
}
fullDetails();


// QUESTIO N3
//  let numb1 = document.querySelector('#numb1')
//  let numb = document.querySelector('#operator')
//  let numb2 = document.querySelector('#numb2')
 

// //operator
// function Displaythis() {
//    console.log(numb1.value + numb + numb2.value); 
   
// }
// Displaythis();



function displayThis(){
    let numb1 = parseFloat(document.querySelector('#numb1').value);
    let numb = document.querySelector('#operator').value;
    let numb2 = parseFloat (document.querySelector('#numb2').value);
    let answer = document.querySelector('#answer')

    if(numb == "+"){
        answer.textContent = numb1 + numb2;
    }
    else if (numb == "-") {
        answer.textContent = numb1 -  numb2;
    } else if (numb == "*"){
        answer.textContent = numb1 * numb2;
    }
    else if (numb == "/"){
        answer.textContent = numb1 / numb2;
    } else{

        answer.textContent = "error";
    }
    
    // console.log(answer);
}
// QUESTION 4

    let subject = "programming";
    let newString = "";
    for (let i = subject.length -1; i >= 0; i-- ) {
        newString += subject[i];
        
    
    }
console.log(newString)



   

