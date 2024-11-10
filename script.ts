//listing element
document.getElementById('resumeform')?.addEventListener("submit", function(event){
    event.preventDefault();

    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailelement= document.getElementById('email')as HTMLInputElement;
    const phoneElement=document.getElementById("phone")as HTMLInputElement;
    const educationElement=document.getElementById("education")as HTMLInputElement;
    const experienceElement=document.getElementById("experience")as HTMLInputElement;
    const skillsElement = document.getElementById("skills")as HTMLInputElement;

    if (nameElement && emailelement &&  phoneElement && educationElement && experienceElement && skillsElement){

        const name =nameElement.value;
        const email= emailelement.value;
        const phone= phoneElement.value;
        const education = educationElement.value;
        const experience= experienceElement.value;
        const skills= skillsElement.value;
    
    
//create resume output
    const resumeoutput =`
    <h2>Resume</h2>
    <p><strong>name:</strong>${name} </p>
    <p><string>email</strong>${email}</p>
    <p><strong>Phone </strong>$(phone)</p>

    <h3>Education</h3>
    <p>$(education)</p>

    <h3>Experience</h3>
    <p>$(experience)</p>

    <h3>skills</h3>
    <p>$(skills)</p>`;
   const resumeoutputelement = document.getElementById('resumeoutput');
   if(resumeoutputelement){
    resumeoutputelement.innerHTML= resumeoutput
   }else{
    console.error('the resume output elements are missing')
   }
}
})
