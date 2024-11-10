var _a;
//listing element
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById('name');
    var emailelement = document.getElementById('email');
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (nameElement && emailelement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailelement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //create resume output
        var resumeoutput = "\n    <h2>Resume</h2>\n    <p><strong>name:</strong>".concat(name_1, " </p>\n    <p><string>email</strong>").concat(email, "</p>\n    <p><strong>Phone </strong>$(phone)</p>\n\n    <h3>Education</h3>\n    <p>$(education)</p>\n\n    <h3>Experience</h3>\n    <p>$(experience)</p>\n\n    <h3>skills</h3>\n    <p>$(skills)</p>");
        var resumeoutputelement = document.getElementById('resumeoutput');
        if (resumeoutputelement) {
            resumeoutputelement.innerHTML = resumeoutput;
        }
        else {
            console.error('the resume output elements are missing');
        }
    }
});
