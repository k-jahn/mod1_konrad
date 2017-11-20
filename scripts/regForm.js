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

    // if first school is clicked
    if (event.target.name == 'school1') {
        console.log('Your closest School is '+event.target.id.substr(0,event.target.id.length-1))
        //remove inactive class from all second schools
        var schools=document.getElementsByClassName('school2label');
        for(var x of schools) {
            x.classList.remove('inactive');
        }
        // id of second school to block
        var blockId=event.target.id.substr(0,event.target.id.length-1)+2;
        //remove check from second school if present
        document.getElementById(blockId).checked=false;
        //add inactive class to second schools label
        document.getElementById(blockId+'label').classList.add('inactive')
    }
    
    // if submit bottun is clicked
    if (event.target.id == "regFormSubmit") {
        console.log("validation not implemented yet")
        return false;
    }
}