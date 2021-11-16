$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 11
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "شما یه اسم دارید! اینطور نیست ؟",
                    minlength: "اسم شما باید حداقل 2 کلمه ای باشد"
                },
                subject: {
                    required: "یه موضوع انتخاب کنید",
                    minlength: "اسم شما باید حداقل 4 کلمه ای باشد"
                },
                number: {
                    required: "موبایل خودتون رو وارد کنید",
                    minlength: "اسم شما باید حداقل 11 کلمه ای باشد"
                },
                email: {
                    required: "ایمیل رو وارد کنید تا بتونید پیام بفرستید"
                },
                message: {
                    required: "اوووم ... شما باید یه متن بنویسید تا بتونید اون رو ارسال کنید",
                    minlength: "فقط همین قدر ؟"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})