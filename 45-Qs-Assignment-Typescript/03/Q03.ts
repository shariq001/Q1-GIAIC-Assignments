/*      Question 3
Name Cases: Store a person's name in a variable, and then print that person's
 name in lowercase, uppercase, and titlecase: */

 const personname:string = "Shariq";

 // ~~ Lower Case
 console.log(personname.toLocaleLowerCase());
 // ~~ Upper Case
 console.log(personname.toUpperCase());
 // ~~ Title Case
 console.log(personname.charAt(0).toUpperCase()+personname.slice(1).toLowerCase());
 

// ---------------------------------------------------------------------//