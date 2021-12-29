const back_btn = document.querySelector(".back_btn");
const nav = document.querySelector(".nav_");
const menu = document.querySelector(".menu");

if (back_btn) {
  back_btn.onclick = () => {
    back_btn.classList.toggle("active");
      nav.classList.toggle("active");

  };
}

if (menu) {
  menu.onclick = () => {
    back_btn.classList.toggle("active");
      nav.classList.toggle("active");
  };
}




// Bootstrap Tab
 var triggerTabList = [].slice.call(document.querySelectorAll("#myTab a"));
      triggerTabList.forEach(function (triggerEl) {
        var tabTrigger = new bootstrap.Tab(triggerEl);

        triggerEl.addEventListener("click", function (event) {
          event.preventDefault();
          tabTrigger.show();
        });
      });

/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

window.onload = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.querySelector("nav");
	} else if ( document.documentElement.scrollTop < 30 ) {
		document.querySelector("nav");
	}
}


/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}
