// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var count = 0; // counts the amount of times a parameter was added
var countrules = 0; // counts the amount of times a rule was added


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).on("click", ".add", function() // adds new parameter field and increments count variable
{
	$("#parameters").clone().appendTo(".rules");
	count++;
	console.log(count);
});

$(document).on("click", ".remove", function() // remove the latest parameter added and decrements the count variable
{
	if(count>=1){
		$(this).closest("#parameters").remove();
		count--;
		console.log(count);
	}
	else
	{
		window.alert("You cant delete all parameters"); // prevents the original parameters from being deleted
	}
	
});

$(document).on("click", ".ruleadd", function() // adds new input rules and includes a remove rule button
{
	$( ".ruleParameter" ).append('<div class="newfields"><button class="ruleremove" type="button"><b>remove rule</b></button><input  class="ruleinput2" type="text" name="revenueTitle" placeholder="  insert parameter"></div');
	countrules++;
});


$(document).on("click", ".ruleremove", function() // removes latest input and prevents original rule from being deleted
{
	if(countrules>=1){
		$('.newfields').last().remove();
		countrules--;
	}
});

$(document).on("click", "#cancel", function() // cancel button closes the modal 
{
	modal.style.display = "none";
});

