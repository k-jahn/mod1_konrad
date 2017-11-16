
// //new structure using document.onclick

//close active modal window function

function closeModal(){
    console.log('...and its gone')
    var active = document.getElementsByClassName('modalActive');
    active[0].className = active[0].className.slice(0, -" modalActive".length);
    document.getElementById("modalShader").className="";
}

function openModal(school){
    console.log("Look! A Modal Window "+event.target.dataset.school)
    // give window active class
    document.getElementById("modal"+school).className += " modalActive";
    // give shader active class
    document.getElementById("modalShader").className += " shaderActive";
}
document.onclick = function(event){
    //console.log(event)

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