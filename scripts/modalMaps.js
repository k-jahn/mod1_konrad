
// //new structure using document.onclick

//close active modal window function

function closeModal(){
    console.log('Close Modal Window')
    var active = document.getElementsByClassName('modalActive');
    active[0].className = active[0].className.slice(0, -" modalActive".length);
}

function openModal(school){
    console.log("Open Modal Window "+event.target.dataset.school)
    document.getElementById("modal"+school).className += " modalActive";
    //document.getElementById("modal"+school).className += " modalActiveBG";
}

document.onclick = function(event){
    console.log(event)

    //open modal window
    if(event.target.className.indexOf("modalOpen")!=-1){
        var school=event.target.dataset.school;
        openModal(school);
    }


    // close modal window with x button
    if(event.target.className.indexOf("modalClose")!=-1) {
        closeModal();
    }
    // close modal window on lick on background
    if(event.target.className.indexOf("modalWrapper")!=-1) {
        closeModal();
    }   

}