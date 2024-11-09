document.getElementById("userInfoForm").onsubmit = function(event) {
    event.preventDefault(); 

    var userName = document.getElementById("userName").value;
    var selectedTutor = document.getElementById("tutorSelect").value;
    var hours = document.getElementById("hours").value;

    localStorage.setItem("userName", userName);
    localStorage.setItem("selectedTutor", selectedTutor);
    localStorage.setItem("hours", hours);


    window.location.href = 'booking2.html'; 
};
