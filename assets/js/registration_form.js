$(document).ready(function(){

	$(".strictnumeric").numeric({
		allowPlus   : false,
	    allowMinus   : false,
	    allowThouSep : false,
	    allowDecSep:  false
	});

	$(".alpha").alpha();

	$(".alphanumeric").alphanum();

	$(".address").alphanum({
		allow: '#;,/\\-.'
	});

	$(".email").alphanum({
		allow:'!@#%^&*+\\\';,/|"`.- _'
	});
});

$(document).ready(function(){

	

	// validate signup form on keyup and submit

	$("#registrationForm").validate({

		rules: {
			first_name: {
				required: true,
				minlength: 1
			},
			last_name : {
				required: true,
				minlength: 1
			},
			gender : {
				required: true
			},
			college : {
				required: true
			},
			field : {
				required: true
			},
			year : {
				required: true
			},
			mobile : {
				required: true,
				minlength: 10
			},
			email : {
				required: true
			},
			address_one : {
				required: true,
				minlength: 2
			},
			address_two : {
				required: false,
				minlength: 2
			},
			pincode : {
				required: true,
				maxlength: 6,
				minlength: 6
			},
			state : {
				required: true
			},
			fileToUpload : {
				required: true
			},
			fileToUpload1 : {
				required: true
			},
			fileToUpload2 : {
				required: true
			}
		},

		messages: {
			first_name: {
				required: "Please enter your first name.",
				minlength: "Your name must consist of at least 1 characters."
			},
			last_name : {
				required: "Please enter your last name.",
				minlength: "Your name must consist of at least 1 characters."
			},
			gender : {
				required: "Please mention your gender."
			},
			college : {
				required: "Please mention your college name."
			},
			field : {
				required: "Please mention your field of study."
			},
			year : {
				required: "Please mention your year of study."
			},
			mobile : {
				required: "Please mention your contact number.",
				minlength: "Please enter a valid mobile number."
			},
			email : {
				type: "Please provide a valid email.",
				required: "Please mention your email."
			},
			address_one : {
				required: "Please mention your address.",
				minlength: "Your address line must consist of at least 1 characters."
			},
			address_two : {
				minlength: "Your address line must consist of at least 1 characters."
			},
			pincode : {
				required: "Please mention your PINCODE.",
				maxlength: "PINCODE max length is 6",
				minlength: "PINCODE max length is 6"
			},
			state : {
				required: "Please mention your state."
			},
			fileToUpload : {
				required: "Please upload a photo of yourself."
			},
			fileToUpload1 : {
				required: "Please upload your State of Purpose."
			},
			fileToUpload2 : {
				required: "Please upload your CV."
			}
		}
	});

});

$(document).ready(function(){

	 $("#fileToUpload").on('change', function () {

 

        if (typeof (FileReader) != "undefined") {

 

            var image_holder = $("#image-holder");

            image_holder.empty();

 

            var reader = new FileReader();

            reader.onload = function (e) {

                $("<img />", {

                    "src": e.target.result,

                    "class": "thumb-image"

                }).appendTo(image_holder);

 

            }

            image_holder.show();

            reader.readAsDataURL($(this)[0].files[0]);

        } else {

            alert("This browser does not support FileReader.");

        }

    });

})