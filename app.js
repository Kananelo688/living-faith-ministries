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

function main(){
	
	sectionBars =document.querySelectorAll('.section-bar').forEach(button=>{
		button.nextElementSibling.style.display = "none"; //ensure it is None by default
		button.addEventListener('click',sectionBarHandler);
	});
}

main();

