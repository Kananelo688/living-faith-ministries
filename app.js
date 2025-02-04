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



function joinCommunityEventHandler(){

	/**Display the content of the registration form */
	if(this.id == "join-community-button"){
		document.getElementById("community-form").classList.add("animate__fadeIn","show");
	}else if(this.id == "prayer-request-button"){
		document.getElementById("service-request-form").classList.add("animate__fadeIn","show");
	}else if(this.id == "nnena-see-more"){
		
	}else if(this.id == "mampho-see-more"){
		document.getElementById("mampho-more").classList.add("show","animate__fadeIn");
		this.style.display = "none";
	}
	


}

function joinChurchEvent(){
	this.parentNode.nextElementSibling.classList.add("animate__fadeIn","show");
}

function eventCancelHandler(){
	this.parentNode.parentNode.parentNode.classList.remove("show");
	this.parentNode.parentNode.parentNode.classList.replace("animate__fadeIn","animate__fadeOut");

}
/**
 * Handles click events fired by the buttons in the About PAGE of the website
 */
function sectionButtonEventHandler() {
	
    var content = document.getElementById(this.id.split('-')[0] + '-content');

    if (this.id.endsWith('-open-button')) {
        content.classList.add("show", "animate__fadeIn");
        content.classList.remove("animate__fadeOut");
        this.lastElementChild.src = "images/drop_up.webp";
        this.id = this.id.replace('-open-button', '-close-button');
    } else {
        content.classList.remove("show", "animate__fadeIn");
        content.classList.add("animate__fadeOut");
        this.lastElementChild.src = "images/dropdown.png";
        this.id = this.id.replace('-close-button', '-open-button');
    }
}

function main(){
	
	/**Add Event Handlers for the about page section-bar buttons */

	document.querySelectorAll(".section-bar").forEach(button=>{
		button.addEventListener('click',sectionButtonEventHandler);
	})

	// document.getElementById("about-open-button").addEventListener('click',()=>{
	// 	document.getElementById("about-content").classList.add("show","animate__fadeIn");
	// });

	/**Add Action Listener for the "JOIN OUR COMMUNITIES BUTTON" */
	document.getElementById("join-community-button").addEventListener('click',joinCommunityEventHandler);

	/**Add Action Listener for the REQUEST PRAYER BUTTON */
	document.getElementById("prayer-request-button").addEventListener('click',joinCommunityEventHandler);

	/**add event handlerto pastors' 'read-more' buttons */
	document.getElementById('nnena-see-more').addEventListener('click',joinCommunityEventHandler);
	document.getElementById('mampho-see-more').addEventListener('click',joinCommunityEventHandler);


	/**Event Handler for Community Cancel Button*/
	document.getElementById("community-cancel-button").addEventListener('click',()=>{
		/**Remove the show class from this element's classList */
		//document.getElementById("community-form").classList.remove("show");
		/**Replace fadeIn with fadeOut on button click*/
		document.getElementById("community-form").classList.replace("animate__fadeIn","animate__fadeOut");

		document.getElementById("community-form").classList.remove("show");
	});

	document.getElementById("nnena-see-less").addEventListener('click',()=>{
		document.getElementById('nnena-more').classList.remove('show');
		document.getElementById('nnena-see-more').style.display= "block";
	});

	document.getElementById("mampho-see-less").addEventListener('click',()=>{
		document.getElementById('mampho-more').classList.remove('show');
		document.getElementById('mampho-see-more').style.display= "block";
	});

	document.getElementById("nnena-see-more").addEventListener('click',()=>{	
		document.getElementById("nnena-more").classList.add("show","animate__fadeIn");
		this.style.display = "none";
		alert("hee!");
	})


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

