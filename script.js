
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}



function opentab(tabName, element) {
    const tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach(link => link.classList.remove('active-link'));

    element.classList.add('active-link');
    const tabContents = document.querySelectorAll('.tab-contents');
    tabContents.forEach(content => content.classList.remove('active-tab'));

    document.getElementById(tabName).classList.add('active-tab');
}

