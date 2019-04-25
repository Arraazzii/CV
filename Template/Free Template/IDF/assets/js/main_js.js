 $(function() {
     $("#userForm").validate({
    rules: {
    partner_salutation: {required: true},
    partner_name: {required: true,maxlength: 20,minlength: 2 },
	    partner_address: {required: true,maxlength: 20,minlength: 2 },
		    partner_province: {required: true,maxlength: 20,minlength: 2 },
		partner_offphone: {required: true,maxlength: 20,minlength: 2 },
		partner_offemail: {required: true,maxlength: 20,minlength: 2 }, 
    partner_lastname: {required: true,maxlength: 20, minlength: 2},
    partner_email: {required: true, minlength: 2},
    partner_phone: {required: true,maxlength: 20,minlength: 2},
	partner_company: {required: true,maxlength: 20, minlength: 2},
	partner_password: {required: true, minlength : 6 },
	payment_to: {required: true  },
	partner_country: {required: true  },
	showresults: {required: true  },
	provinsinya: {required: true  },
	   
    customer_name: {required: true, maxlength: 40,minlength: 2},
    customer_lastname: {required: true,  maxlength: 20,minlength: 2},
    customer_email: {required: true, minlength: 2},
	email: { required: true,minlength: 2 },
    customer_phonenumber: {required: true, maxlength: 20, minlength: 2},
	customer_address: {required: true, minlength: 2 },
    password: {required: true, minlength : 6},
	password_confirm: { required: true,minlength : 6,equalTo : "#pass1"},
	loginAs : {required: true},
	customer_password : {required: true, minlength : 6 },
	bank_name : {required: true },
		comment_text : {required: true },
	 
	bank_number : {required: true },
	bank_akun : {required: true },
	nominal : {required: true },
 
	
	
	passconf : {required: true,minlength : 6, equalTo : "#customer_password"}
    },
 
  messages: {
	    
	   
	     comment_text: {
            required:  "Please enter Comment",
            
      },
	  
	    bank_name: {
            required:  "Please enter Bank Name",
            
      },
	   partner_address: {
            required:  "Please enter Partner Address",
            
      },partner_province: {
            required:  "Please enter Partner Province",
            
      },
	   partner_country: {
            required:  "Please select Partner Country",
            
      },
	  
	  
	   provinsinya: {
            required:  "Please select Partner Country",
            
      },
	   
	  
	    showresults: {
            required:  "Please select Partner City",
            
      },
	  
	   
	  
	  partner_offemail: {
            required:  "Please enter Partner Office Email",
            
      },
	  
	    partner_offphone: {
            required:  "Please enter Partner Partner Office Phone",
            
      },
	  
	  
	  
	      bank_number: {
            required:  "Please enter Bank Number",
            
      },
	  
	  
	  
	      bank_akun: {
            required:  "Please enter Bank Number",
            
      },
	  
	  
	      nominal: {
            required:  "Please enter Bank Number",
            
      },
	   
	  
	  
	  
	     payment_to: {
            required: "Please select Payment To " 
            
      },
	  
	  
	    partner_salutation: {
            required: "Please select Salutation " 
            
      },
	  
      partner_name: {
            required: "Please enter Partner Name",
            minlength: "min 2 karakter",
            maxlength: "max 70 karakter",
      },
      partner_lastname: {
            required: "Please enter Last Name",
            minlength: "min 2 karakter",
        maxlength: "max 70 karakter",
      
        },
		 
		 
		 
		  partner_email: {
            required: "Please enter Email",
            minlength: "min 2 karakter",
     
      
        },
		
		
		    partner_company: {
            required: "Please enter Company",
            minlength: "min 2 karakter",
        maxlength: "max 20 karakter",
      
        },
		
		
		
		partner_password: {
            required: "Please enter Password",
            minlength: "min 6 karakter",
    
      
        },
		
		 partner_phone: {
            required: "Please enter Phone Number",
            minlength: "min 2 karakter",
        maxlength: "max 20 karakter",
      
        },
		
		
     customer_name: {
            required: "Please enter First Name",
            minlength: "min 2 karakter",
            maxlength: "max 70 karakter",
      },
	  
	  customer_lastname: {
            required: "Please enter Last Name",
            minlength: "min 2 karakter",
        maxlength: "max 70 karakter",
      
        },
		 
		loginAs: {
            required: "Please select Login As",
             
      
        },
		
		 customer_address: {
            required: "Please enter Address",
            minlength: "min 2 karakter",
      
      
        },
		 
    
    
      customer_phonenumber: {
            required: "Please enter Phone Number",
            minlength: "min 2 karakter",
        maxlength: "max 20 karakter",
      
        },
   customer_email: {
            required: "Please enter Email",
            minlength: "min 2 karakter",
     
      
        },
		 email: {
            required: "Please enter Email",
            minlength: "min 2 karakter",
     
      
        },
		
		
		   password: {
            required: "Please enter Password",
            minlength: "min 6 karakter",
    
      
        },
    password_confirm: {
            required: "Please enter Password Confirm",
            minlength: "min 6 karakter",
       
        equalTo: "Please equal to Password",
     
      
        },
    customer_password: {
            required: "Please enter Password",
            minlength: "min 6 karakter",
    
      
        },
    passconf: {
            required: "Please enter Confirm Password ",
            minlength: "min 6 karakter",
       
        equalTo: "Please equal to Password",
     
      
        }
     
}
});
});