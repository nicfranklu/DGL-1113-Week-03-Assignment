function addActivity(){
    console.log("Adding activity");
    // Get the activity name from the input field id description
    var activity = document.getElementById("description").value;
    // Get the activity time from date object
    var time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ap = hours >= 12 ? 'p.m.' : 'a.m.';
    hours = hours % 12;
    time = hours + ":" + minutes + ":" + seconds + " " + ap;

    // get hold of the element that has the id activityLog
    var list = document.getElementById("activitylog");
    //add the activity to the list
    list.innerHTML += "<li class='list-group-item'>" + time + " " +  activity + "</li>";
}
function removeActivity(){
    console.log("Removing activity");
    // get hold of the element that has the id activityLog
    var list = document.getElementById("activitylog");
    //remove the first activity from the list
    list.removeChild(list.firstChild);
}