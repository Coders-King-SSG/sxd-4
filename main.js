document.getElementById("class_slider").addEventListener('input', () => {
    document.getElementById("class").innerHTML = "Class : " + String(document.getElementById("class_slider").value);
})


function review() {
    window.alert("Thank you for your review. It will be evaluated by us soon😊!")
}

function scrol() {
    link = document.querySelector('input[placeholder="Search"]').value;
    console.log(link);
    if (link === "Home") {
        window.location = "#home";
    } else if (link === "Best Places") {
        window.location = "#bestplaces";
    } else if (link === "Achievements") {
        window.location = "#achiev";
    } else if (link === "Notice Board") {
        window.location = "#notice";
    } else if (link === "Contacts") {
        window.location = "#contacts";
    } else if (link === "Reviews") {
        window.location = "#reviews";
    } else {
        window.alert('Please enter a valid name from the list')
    }
}