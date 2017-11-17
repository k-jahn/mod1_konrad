// click listener function


document.onclick = function(event) {
    //console.log(event)

    // If have uniform is clicked...
    if (event.target.id == "haveUniform") {
        //check if checked
        var uniform=event.target.checked 
        console.log("Do you have a Uniform? "+uniform)
        if(uniform){
            // hide sizes
            document.getElementById('uniformSize').classList.add("inactive");
        } else {
            // show sizes
            document.getElementById('uniformSize').classList.remove("inactive");
        }

    }
}