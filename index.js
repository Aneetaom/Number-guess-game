

// var randomNum = Math.random() * 10;
// var correctNum = Math.floor(randomNum) + 1;
// var userNum = +prompt("Guess the Number between 1 to 10");

// if (userNum === correctNum) {
//     console.log("Correct!");
// } else if (userNum === correctNum + 1 || userNum === correctNum - 1) {
//   console.log("Almost there! . The Correct Number is : " + correctNum);
// } else {
//     console.log("You Lose. The Correct Number is : " + correctNum);
// }




// var subjects = ["physics", "english", "urdu", "sindhi"]
// for(var i=0; i <= subjects.lastindex; i++){
//   console.log(subjects[i] );
// }

// var names = ['Noor', 'ALI','Aalek'];
// for(var i=0; i  <= names.length-1 ; i++){
//   console.log("Hello:" + names[i]);

// }
//Flag
// var cleancities = ["karachi," , "Lahore," , "Islamabad"];
// var cleamCity = prompt("Enter your city name");
// for(var i=0; i <=cleancities.length-1 ; i++){
// if(cleancities[i] === "usercity"){
//   isCityfound = true;
//   alert("congratulations! you live in clean city");
//   break
// }
// // else{
// //   alert("Clean city not found");
// //   break
// // }
// }
// if(iscityfound === false){
//   alert("cleancity not found")
// 


//var nestedArr = [["a","b","c"], [1,2,3], ["d","e",'f']];
// for(var i = 0; i < nestedArr.length; i++) {
//   console.log(nestedArr[i]);
//   for(var j = 0; j < nestedArr[i].length; j++) {
//     console.log(nestedArr[i][j]);
//   }
// }

//parseFloat

// console.log(parseFloat(89.98654333));
// console.log(parseFloat("89.98654333"));

// var str = "3.56";
// str = Number(str);
// console.log(typeof str);



// console.log("Function! se pehly");
// function funcName (){
//     console.log("Hello Function!");
// }

// funcName();
// funcName();
// funcName();
// funcName();
// funcName();



//  alert("lets play a toss game...")

//  var userinput = prompt("Head or Tail").toLowerCase()
//  var user = prompt("chose one head(0) or tail(1) just write 0 or 1 ")
//  alert("Head value is 0 \n Tail value is 1 oky \n you opt "+ userinput)

// var hi = prompt("you  are ready to see the results that you loss or win..\n if ready  then write i am ready")

// var generate = Math.floor(Math.random()*2);
//  var tail = 1;
//  var head = 0
//   if(tail === generate && tail === 1){
//   alert("conggrats you wonnn your number is matched" + generate)
//  }
//  else if(tail !== generate){
//      alert("sorryy unmatched number" + generate)
//     }

   

   //var cleancities = ["karachi," , "Lahore," , "Islamabad"];
// var cleamCity = prompt("Enter your city name");
// for(var i=0; i <=cleancities.length-1 ; i++){
// if(cleancities[i] === "usercity"){
//   isCityfound = true;
//   alert("congratulations! you live in clean city");
//   break
// }
// // else{
// //   alert("Clean city not found");
// //   break
// // }
// }
// if(iscityfound === false){
//   alert("cleancity not found")


// var userInput = prompt("Hello friend, will you play with me? Head or Tail?").toLowerCase();  // Ask for input and convert to lowercase

// if (userInput === "head") {
//     console.log("Congratulations! You chose head.");
// } else if (userInput === "tail") {
//     console.log("You lose! You chose tail.");
// } else {
//     console.log("Invalid input. Please choose 'head' or 'tail'.");
// }

// console.log("Function! se pahile");
//    functio
//    console.log("Function se baad");
//    funcName();
//    funcName();
// function myFunc (){
//    console.log("Hello!");
   
// }
// myFunc();
   // console.log("Function ke neeche")
   // console.log();
   // console.log();
   // console.log();
   // console.log();
   // function myFunc (){
   //         console.log("AssalamuAlaikum!");
      
   //     }
   //     myFunc();
      //  function myFunc() {
      //    console.log("Hello!"); // This will print "Hello!" to the console
      // }
      
      // myFunc(); // Call the function to execute
      
      //console.log(); // This won't print anything as it's empty
      //console.log("This will print!"); // Now it will print "This will print!"
      //console.log("Aneeta")


      // function vendingMachine() {
      //    // Available items in the vending machine (itemName: price)
      //    const items = {
      //       chips: 50,
      //       chocolate: 100,
      //       soda: 80,
      //       water: 30
      //    };
      
      //    // Available stock for each item
      //    const stock = {
      //       chips: 5,
      //       chocolate: 3,
      //       soda: 10,
      //       water: 8
      //    };
      
      //    // Display available items and prices
      //    console.log("Available items:");
      //    for (let item in items) {
      //       console.log(`${item}: Rs ${items[item]} (In stock: ${stock[item]})`);
      //    }
      
      //    // Function to handle the vending process
      //    function purchaseItem(itemName, insertedAmount) {
      //       if (items[itemName] && stock[itemName] > 0) {
      //          const price = items[itemName];
      //          if (insertedAmount >= price) {
      //             const change = insertedAmount - price;
      //             stock[itemName]--; // Reduce stock after purchase
      //             console.log(`Dispensing ${itemName}. Your change: Rs ${change}`);
      //          } else {
      //             console.log(`Insufficient funds! ${itemName} costs Rs ${price}. You inserted Rs ${insertedAmount}.`);
      //          }
      //       } else {
      //          console.log("Item not available or out of stock!");
      //       }
      //    }
      
      //    // Example of purchasing an item
      //    purchaseItem("soda", 100); // Example: User selects "soda" and inserts Rs 100
      // }
      
      // vendingMachine();
      


      // function vendingMachine() {
      //    // Available items in the vending machine (itemName: price)
      //    const items = {
      //       chips: 50,
      //       chocolate: 100,
      //       soda: 80,
      //       water: 30
      //    };
      
      //    // Available stock for each item
      //    const stock = {
      //       chips: 5,
      //       chocolate: 3,
      //       soda: 10,
      //       water: 8
      //    };
      
      //    // Display available items to the user
      //    let itemList = "Available items:\n";
      //    for (let item in items) {
      //       itemList += `${item}: Rs ${items[item]} (In stock: ${stock[item]})\n`;
      //    }
      //    alert(itemList);
      
      //    // Ask user to select an item
      //    const selectedItem = prompt("Please enter the name of the item you want to buy:");
      
      //    // Check if the item exists and is in stock
      //    if (items[selectedItem] && stock[selectedItem] > 0) {
      //       const price = items[selectedItem];
            
      //       // Ask the user to insert money
      //       const insertedAmount = parseInt(prompt(`The price of ${selectedItem} is Rs ${price}. Please enter the amount:`), 10);
      
      //       // Check if the inserted amount is enough
      //       if (insertedAmount >= price) {
      //          const change = insertedAmount - price;
      //          stock[selectedItem]--; // Reduce stock after purchase
      //          alert(`Dispensing ${selectedItem}. Your change: Rs ${change}`);
      //       } else {
      //          alert(`Insufficient funds! ${selectedItem} costs Rs ${price}. You inserted Rs ${insertedAmount}.`);
      //       }
      //    } else {
      //       alert("Item not available or out of stock!");
      //    }
      // }
      
      // vendingMachine();

      // function greet (username){
      //     document.write("Hello " + username );
         
      //     }
      //     greet("Aneeta" + "<br>");
      //     greet("Aalek");

      //     function greet(username) {
      //       document.write("<h1>Hello " + username + "</h1><br>");
      //   }
        
      //   greet("Aneeta");
      //   greet("Aalek");


   //      function greet() {
   //       // Get the username from the user using prompt
   //       const username = prompt("Please enter your name:");
         
   //       // Display the greeting in bold
   //       document.write("<b>Hello " + username + "</b><br>");
   //   }
     
   //   // Call the function to execute
   //   greet();
     


     / /////////// Local ATM

// wihDrawl --- nikaalne kitne hen

// function makeWithDrawl(curentBalance) {
//     var withDrawAmount = +prompt("Enter Amount!")
//   if (withDrawAmount <= curentBalance) {
//     userBalance -= withDrawAmount;
//     console.log("Withdrawl Successful.Remaining Balance : " + userBalance);
//   } else {
//     alert("Insufficient Balance");
//   }
// }

// var userBalance = 50000;
// makeWithDrawl(userBalance);
// makeWithDrawl(userBalance);
// makeWithDrawl(userBalance);
// makeWithDrawl(userBalance);


// makeWithDrawl(userBalance, 1000);
// makeWithDrawl(userBalance, 1000);
// makeWithDrawl(userBalance, 1000);
// makeWithDrawl(userBalance, 1000);




// /////////////// 

// function greet(email) {
//     var username = prompt("Enter YOur name")
//  if(username === ""){
//     console.log("Hello " + "Guest" + " " + "Your Email : " + email);
//  }else{
//     console.log("Hello " + username + " " + "Your Email : " + email);
//  }
// }

// greet( "abc@gmail.com")
// greet( username , "abc@gmail.com")


// function sum (a, b){


//  return a + b 
// }

// var data = sum(2,3)


// console.log(data);
// console.log(data);
// console.log(data);

// console.log(data);


// var userEdu = prompt("Enter your quilification").toLowerCase();
// var userAge = prompt("Enter your education");
//    if(userEdu === "Undergraduate" || (userEdu === "graduated" && userAge >= 18) ){
//    alert("You are eligable for course ...");

// }else if(userEdu === "Undergraduate" || (userEdu === "graduated" && userAge >= 18) ) {
//    alert("You are eligable for web and app course");

// } else{
//    alert("You are eligable for kids tecno course ...");
//}
     

// let arr = [1, 2, 3];
// arr.splice(2, 3, 7, 6);
// console.log(arr);
      

//console.log(integer_number);

// for (let i = 0; i < 2; i++) {
//    for (let j = 2; j < 4; j++) {
//        console.log(i + j);
//    }

//    let fruits = ['apple', 'banana', 'cherry'];
// fruits[1] = 'orange';
// console.log(fruits);

// }

// var rightNow = new Date();
// console.log(rightNow);

// var dateString = rightNow.toString();
// console.log(dateString);

// let today = new Date();
// console.log(today.getDay());

// let str = "Hello, World!";
// console.log(str.substring(0, 5));


// let x = "10";
// let y = x + 5;
// console.log(y);

// let date = new Date(2023, 10, 1);
// console.log(date.getMonth());

//  var decimalval = 30;
//  decimalval = decimalval.toFixed(2);
//  console.log(decimalval);
//  var currentDate = new Date();
// //  console.log(typeof currentDate);
// currentDate = currentDate.toString();
// // console.log(typeof currentDate);
// console.log( currentDate.slice(4, 10));
// console.log( currentDate.slice(16, 24));

// // var currentDate = new Date();
// // console.log(currentDate.toString().slice(4, 10));
// var currentDate = new Date();
// // console.log( currentDate);

// currentDate = currentDate.getDay();
// console.log( currentDate);

//var dayNames = ["Sun", "Mon", "Tue", "Wed", 'Thu', "Fri", "Sat"];
// var currentDate = new Date();
// var dayIndex = currentDate.getDay();
// var day = dayNames[dayIndex];
// console.log(day);

// var currentDate = new Date();
// var month = currentDate.getMonth();
// var day = currentDate.getDay();
// var date = currentDate.getDate();
// var year = currentDate.getFullYear();
// console.log(month);
// console.log(day);
// console.log(date);
// console.log(year);

//function greet (name)
//{alert("hello " + name);}

// var message = prompt("Enter");
// document.write("message");

// var  number = 3.45214;
// document.write(Number)

// var str = "3.45214";
//  str = Number(str);
//  document.write("Number: ", str, "<br>");

// document.write("round of value is:" + Math.round(2.5 ) + "<br>");

// document.write("floor value:" + Math.floor(3.5) + "<br>");

// document.write("Math.ceil:" + Math.ceil(2.5));


var age = prompt("Please enter your age:");

age = parseInt(age);

var currentYear = new Date().getFullYear();

var birthYear = currentYear - age;

document.write("Your birth year is: " + birthYear);


const customerName = prompt("Enter Customer Name:");
const currentMonth = new Date().toLocaleString("default", { month: "long" }); 
const numberOfUnits = parseFloat(prompt("Enter Number of Units Consumed:"));
const chargesPerUnit = parseFloat(prompt("Enter Charges per Unit:"));

const netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
const latePaymentSurcharge = 150.00; 
const grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2); 

document.write(`
    <h2>K-Electric Bill</h2>
    <p><strong>Customer Name:</strong> ${customerName}</p>
    <p><strong>Month:</strong> ${currentMonth}</p>
    <p><strong>Number of Units:</strong> ${numberOfUnits}</p>
    <p><strong>Charges per Unit:</strong> $${chargesPerUnit.toFixed(2)}</p>
    <p><strong>Net Amount Payable (within Due Date):</strong> $${netAmountPayable}</p>
    <p><strong>Late Payment Surcharge:</strong> $${latePaymentSurcharge.toFixed(2)}</p>
    <p><strong>Gross Amount Payable (after Due Date):</strong> $${grossAmountPayable}</p>
`);

//calculator


function calculate(num1, num2, operator) {
   switch (operator) {
     case '+':
       return num1 + num2;
     case '-':
       return num1 - num2;
     case '*':
       return num1 * num2;
     case '/':
       if (num2 !== 0) {
         return num1 / num2;
       } else {
         return "Error: Division by zero";
       }
     default:
       return "Invalid operator";
   }
 }
 
 var num1 = parseFloat(prompt("Enter first number:"));
 var num2 = parseFloat(prompt("Enter second number:"));
 var operator = prompt("Enter operator (+, -, *, /):");
 
 var result = calculate(num1, num2, operator);
 document.write(`Result: ${num1} ${operator} ${num2} = ${result}`);

//Leap year OR not

 function isLeapYear(year) {
   return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
 }
 
 var year = parseInt(prompt("Enter a year:"));
 
 if (isLeapYear(year)) {
   document.write(year + " is a leap year.");
 } else {
   document.write(year + " is not a leap year.");
 }


 var username = prompt("Enter your first name");
 var userlastname = prompt("Enter your last name");
 var userfull = username + " " + userlastname;
 alert("Welcome to our page " + userfull)