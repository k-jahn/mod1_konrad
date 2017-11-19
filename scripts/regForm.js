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
        console.log('you clicked'+event.target.id)
        //remove inactive class from all second schools
        var schools=document.getElementsByClassName('school2label');
        for(var x of schools) {
            x.classList.remove('inactive');
        }
        // id of second school to block
        var blockId=event.target.id.substr(0,event.target.id.length-1)+2;
        
        //remove check from second school if present
        console.log(document.getElementById(blockId))
        document.getElementById(blockId).checked=false;
        //add inactive class to second school
        document.getElementById(blockId+'label').classList.add('inactive')
    }
    // 
}