(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		$(".hero").flexslider({
			directionNav: false,
			controlNav: true
		});
	});

	$(window).load(function(){

	});

})(jQuery, document, window);


function sectionBarHandler(){
	//check to seeif the button is pressed
	if(this.nextElementSibling.style.display == "none"){
		this.lastElementChild.src="images/drop_up.webp";
		this.nextElementSibling.style.display= "block";
	}else{
		this.lastElementChild.src="images/dropdown.png";
		this.nextElementSibling.style.display= "none";
	}
}

function joinCommunityEventHandler(){

	/**Display the content of the registration form */
	if(this.id == "join-community-button"){
		document.getElementById("community-form").classList.add("animate__fadeIn","show");
	}else if(this.id == "prayer-request-button")
		document.getElementById("service-request-form").classList.add("animate__fadeIn","show")

}

function joinChurchEvent(){
	this.parentNode.nextElementSibling.classList.add("animated__fadeIn","show");
}

function eventCancelHandler(){
	this.parentNode.parentNode.parentNode.classList.remove("show");
	this.parentNode.parentNode.parentNode.classList.replace("animate__fadeIn","animate__fadeOut");

}

function main(){
	
	sectionBars =document.querySelectorAll('.section-bar').forEach(button=>{
		button.nextElementSibling.style.display = "none"; //ensure it is None by default
		button.addEventListener('click',sectionBarHandler);
	});

	/**Add Action Listener for the "JOIN OUR COMMUNITIES BUTTON" */
	document.getElementById("join-community-button").addEventListener('click',joinCommunityEventHandler);

	/**Add Action Listener for the REQUEST PRAYER BUTTON */
	document.getElementById("prayer-request-button").addEventListener('click',joinCommunityEventHandler);

	/**Event Handler for Community Cancel Button*/
	document.getElementById("community-cancel-button").addEventListener('click',()=>{
		/**Remove the show class from this element's classList */
		//document.getElementById("community-form").classList.remove("show");
		/**Replace fadeIn with fadeOut on button click*/
		document.getElementById("community-form").classList.replace("animate__fadeIn","animate__fadeOut");

		document.getElementById("community-form").classList.remove("show");
	});


	/**Action Listener for Service request cancel button */
	document.getElementById("service-request-cancel-button").addEventListener('click',()=>{
		document.getElementById("service-request-form").classList.replace("animate__fadeIn","animate__fadeOut");
		document.getElementById("service-request-form").classList.remove("show");
	});

	/**Action Lister to Join Event Buttons */
	document.querySelectorAll(".join-event-button").forEach(button=>{
		button.addEventListener('click',joinChurchEvent);
	});

	/**Action Listener for Event Cancel Buttons */
	document.querySelectorAll(".event-registration-cancel-buttons").forEach(button=>{
		button.addEventListener('click',eventCancelHandler);
	});
	
}

main();

