// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>


let fname = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submitbutton = document.getElementById("submit");


// Declare variable that will 
// store regular expression for email

let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).

function handling(ev){

       
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors

	ev.preventDefault();
	let data = {};
	let error = [];

    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.

    if(fname.value !== ""){
    	data['fullname'] = fname.value;
    }
    else{
    	error.push({fname : "Full name is missing."});
    }


    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.


    if(email.value !== ""){
    	if(regex.test(email.value)){
    		data['email'] = email.value;
    	}
      else{
    		error.push({email: "Invalid email!"});
    	}
    }else{
    	error.push({email: "Email is missing."});
    }



    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.
    if(message.value !== ""){
    	data['message'] = message.value;
    }
    else{
    	error.push({message: "Message is missing."});
    }


    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.

    if(error.length > 0){
      console.log(error);
    }
    else{
      console.log(data);
      fullname.value = "";
      email.value = "";
      message.value = "";
    }

// Close your function here
}
    
// Register your form to "click" event.
submitbutton.addEventListener("click", handling);
