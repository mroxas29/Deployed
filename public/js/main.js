$(document).ready(function(){

    

// Get the modal
var ATC = document.getElementById("ATC");

// Get the button that opens the modal
var add = document.getElementById("add");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
add.onclick = function() {
  ATC.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  ATC.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == ATC) {
    ATC.style.display = "none";
  }
}





    $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});







});

  function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#design')
                        .attr('src', e.target.result)
                        .width(450)
                        .height(350);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

        
function openBot() {
  document.getElementById("chatbot").style.display = "block";
}

function closeBot() {
  document.getElementById("chatbot").style.display = "none";
}


function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
   
    console.log(document.getElementById("remove").value);
    // your code here
    let del = { code: document.getElementById("remove").value
        }
    
    $.get('/delete', del, function() {
    });

    document.getElementById("cart").deleteRow(1);

    

}



function addData(){
        
   
        var item = {
           
            item: document.getElementById("item").value,
            quantity: document.getElementById("quantity").value,
            price: document.getElementById("price").value,
            code:document.getElementById("code").value
        }

        $.get('/add', item, function() {
        });

        alert("Item added to cart");
        window.location.href = "http://localhost:3000/";

        
}

function addReview(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
   
    var review = {
       
        rating: document.getElementById("rating").value,
        fullName: document.getElementById("fullName").value,
        msg: document.getElementById("msg").value,
        date: today
    }

    $.get('/addReview', review, function() {
    });

    document.getElementById("rating").value = "1";
    document.getElementById("fullName").value = "";
    document.getElementById("msg").value = "";
    alert("You review has been submitted! Thank you for using PrintPad, the superior print")
 

    
}




function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}



function validate() {
 
    var fName = document.getElementById("fName").value;
    var mName = document.getElementById("mName").value;
    var lName = document.getElementById("lName").value;
    var cNum = document.getElementById("cNum").value;
    var emailAdd  = document.getElementById("emailAdd").value;
      var address  = document.getElementById("address").value;
      
          var COD  = document.getElementById("COD").value;
          var COP  = document.getElementById("COP").value;

    var valid = 0;

    if (fName == "") {
         
           document.getElementById("fName").style.border = "1px solid red";
        }
        else
        {
            document.getElementById("fName").style.border = "1px solid green";
            valid++;
        }

        if (lName == "") {
          
           document.getElementById("lName").style.border = "1px solid red";
        }
        else
        {
            document.getElementById("lName").style.border = "1px solid green";
            valid++;
        }

        if (mName == "") {
       
           document.getElementById("mName").style.border = "1px solid red";
        }
        else
        {
            document.getElementById("mName").style.border = "1px solid green";
            valid++;
        }

        if (cNum == "") {
          
           document.getElementById("cNum").style.border = "1px solid red";
        }
        else
        {
            document.getElementById("cNum").style.border = "1px solid green";
            valid++;
        }



        if (emailAdd == "") {
          
           document.getElementById("emailAdd").style.border = "1px solid red";
        }
        else
        {
            document.getElementById("emailAdd").style.border = "1px solid green";
            valid++;
        }

        if (address == "") {
          
           document.getElementById("address").style.border = "1px solid red";
        }
        else
        {
            document.getElementById("address").style.border = "1px solid green";
            valid++;
        }

        if ( COD == "" && COP == "") {
          alert("Choose a payment method!");
          
        }
        else
        {
            valid++;
        }
        


if (valid == 7) {
    var radioValue = $("input[name='MOP']:checked").val();
    var order = {
           
        fName: document.getElementById("fName").value,
        mName: document.getElementById("mName").value,
        lName: document.getElementById("lName").value,

        cNum:  document.getElementById("cNum").value,
        emailAdd: document.getElementById("emailAdd").value,
        address: document.getElementById("address").value,

        mop: radioValue 
    }
    
    $.get('/addOrder', order, function() {
    });

        
    
          
    
    
   
    window.location.href = "http://localhost:3000/regards";
}

  

}



$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {

            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");






});


