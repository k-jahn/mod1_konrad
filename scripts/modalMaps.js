console.log("modalMaps.js loaded")

//define vars

var katz = {
    link: document.getElementById('linkKatz'),
    modal: document.getElementById('modalKatz')
};
var green = {
    link: document.getElementById('linkGreen'),
    modal: document.getElementById('modalGreen')
};
var yeag = {
    link: document.getElementById('linkYeag'),
    modal: document.getElementById('modalYeag')
};
var hart = {
    link: document.getElementById('linkHart'),
    modal: document.getElementById('modalHart')
};
var north = {
    link: document.getElementById('linkNorth'),
    modal: document.getElementById('modalNorth')
};
var south = {
    link: document.getElementById('linkSouth'),
    modal: document.getElementById('modalSouth')
};

var school = [katz, green, yeag, hart, north, south];

var modalClose = document.getElementsByClassName('modalClose');

closeFunc = function() {
    var active = document.getElementsByClassName('modalActive');
    active[0].className = active[0].className.slice(0, -" modalActive".length);
}

//open modal on click

// for (var i in school) {
//     school[i].link.onclick = function() {
//         school[i].modal.className += " modalActive";
//     }
// }
school[0].link.onclick = function() {
    school[0].modal.className += " modalActive";
}
school[1].link.onclick = function() {
    school[1].modal.className += " modalActive";
}
school[2].link.onclick = function() {
    school[2].modal.className += " modalActive";
}
school[3].link.onclick = function() {
    school[3].modal.className += " modalActive";
}
school[4].link.onclick = function() {
    school[4].modal.className += " modalActive";
}
school[5].link.onclick = function() {
    school[5].modal.className += " modalActive";
}




//hide modal when close is clicked
for (var i in modalClose) {
    modalClose[i].onclick = function() {
        closeFunc();
    }
}
//hide modal when clicking outside of content


//new structure using document.onclick


function modalOn(modal){
    modal.className +=  " modalActive"
    
}


document.onclick = function(event){
    console.log(event)
    // if(event.target.className.indexOf("closeModal") !== -1){
    //     close .... 
    // }

    // if(event.target.className.indexOf("openmodal") !== -1){
    //     open...
    //     event.target.dataSet.modal =
    // }

}