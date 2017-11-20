// modal Window JS for Game Location Maps

// open modal window function
function openModal(school,event) {
    console.log("Look! A Modal Window for " + event.target.dataset.school)
    // give window active class
    document.getElementById("modal" + school).className += " active";
    // give shader active class
    document.getElementById("modalShader").className += " active";
}
//close active modal window function

function closeModal() {
    console.log('...and its gone')
    // remove active window class
    var active = document.getElementsByClassName('modalWrapper active');
    active[0].className = active[0].className.slice(0, -" active".length);
    // remove active shader class
    document.getElementById("modalShader").className = "";
}
// click listener function
document.onclick = function(event) {
    //console.log(event)
    console.log(event);
    //open modal window
    if (event.target.className.indexOf("modalOpen") != -1) {
        var school = event.target.dataset.school;
        openModal(school,event);
    }

    // close modal window with x button
    if (event.target.className.indexOf("modalClose") != -1) {
        closeModal();
    }
    // close modal window on click on background
    if (event.target.className.indexOf("modalWrapper") != -1) {
        closeModal();
    }

}