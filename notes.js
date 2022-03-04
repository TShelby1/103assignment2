//#####s get user names

//declaration of vars
let productName;
let quantity;
let price;

//get the information from the user


productName=prompt("Enter the product name:");
quantity=Number(prompt("Enter the quantity"));
price=Number(prompt("Enter the Price in Dollars"));
// password=prompt("Enter your password");
// country=prompt("Enter your country");
// salaryMonthly=Number(prompt("Enter your monthly salary"));

console.log(productName, "Product Name");
console.log(quantity, "Quantity");
console.log(price, "Price");
console.log(quantity * price * 0.16, "Total with taxes")
//store the information in vars

//transform the string in numbers
//dislpay the values in the html


// console.log(userName);
// console.log(age);
// console.log(email);
// console.log(password);
// console.log(country);
// console.log(salaryMonthly);

// for(let i=1;i<100000;i++){
//     document.write(`<li>${i}</Li>`);
// }

// while (another way to add the conditions) 

// let j=-30;
// while(j<10){
//     console.log(j);
//     j++;
// }

// do while

// let m=11;
// do{
//     console.log(m);
//     m++;
// }while(m<10);

