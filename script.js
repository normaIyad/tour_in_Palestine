// happen now in palestine show more opration 
var more = document.getElementById("larmmore");
var con = document.getElementById("contener");
var more1 = document.getElementById("larmmore_");
var con1 = document.getElementById("contener_");
var more2 = document.getElementById("larmmoree");
var con2 = document.getElementById("contenerr");

more.addEventListener("click", function() {
    var content = `
    <p>Date: November 1 - November 15, 2023</p>
    <p>Location: Various olive groves across Palestine</p>
    `;
    // Remove the "larmmore" element from the container
    con.removeChild(more);
    // Add the content to the container
    con.innerHTML += content;
});

more1.addEventListener("click", function() {
    var content1 = `
    <p>Date: December 1 - December 24, 2023</p>
    <p>Location: Manger Square, Bethlehem</p>
    `;
    // Remove the "larmmore1" element from the container
    con1.removeChild(more1);
    // Add the content to the container
    con1.innerHTML += content1;
});

more2.addEventListener("click", function() {
    var content2 = `
    <p>
    Street food, and desserts from various regions. Don't miss the live cooking demonstrations.
    </p>
    `;
    // Remove the "larmmore2" element from the container
    con2.removeChild(more2);
    // Add the content to the container
    con2.innerHTML += content2;
});
// happen now in palestine show more opration 
// plan your trep
var checkInDatepicker = new Datepicker(document.getElementById('checkInDate'));
var checkOutDatepicker = new Datepicker(document.getElementById('checkOutDate'));
var button = document.getElementsByClassName("btn")
// Attach datepicker event listeners to date inputs
button.addEventListener("click" ,function(){
    checkInDatepicker.onSelect(function(instance, date) {
    console.log('Check In Date Selected:', date);
});

checkOutDatepicker.onSelect(function(instance, date) {
    console.log('Check Out Date Selected:', date);
}); 

})

// plan your trep
// valid email 

// end valed email