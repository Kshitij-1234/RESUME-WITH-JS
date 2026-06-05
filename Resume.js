  const Education=[ "Diploma in Computer Technology"]   

const resume={
   
    PersonalDetails:[
     { Name: "Kshitij Gawande"},
{
       District: "Pune",
        state: "Maharashtra",
        country:"India"
    },
   
    {
        gmail: "kshitijgawande47@gmail.com",
        phone: "8788453211",
    },
    
        {
            Education,
            College: "Venutai Chavan Polytechnic College",
        }
    

],
         TechnicalSkills: [
        {id: 1, skillName: "C", expertiseLevel: "Novice"},
        {id: 2, skillName: "C++", expertiseLevel: "Novice"},
        {id: 3, skillName: "HTML", expertiseLevel: "intermediate"},   
        {id: 4, skillName: "CSS", expertiseLevel: "intermediate"},
         ],
    Projects: [
        
        
        {   
            ProjectId: 1,
            Name:"Routine Tracker",
            Description:"A web application that helps users track their daily routines and habits. It allows users to create and manage their routines, set reminders, and visualize their progress over time.",
            LanguagesUsed: ["Kotlin","JavaScript"]
        },
        {
            ProjectId: 2,
            Name:"Student Interaction Website",
            Description:"A platform for students to interact with each other and with instructors. It includes features like discussion forums, assignment submission, and grade tracking.",
            LanguagesUsed: ["Python"],
        },
        {
            ProjectId: 3,
            Name:"Dental clinic Website",
            Description:"It was a frontend UI created using Html CSS.",
            LanguagesUsed: ["HTML","CSS"],
        }
    
    
    ]
    
        
}
//console.log(resume.PersonalDetails[0]);
//console.log(resume.PersonalDetails[1]);
//console.log(resume.Projects[2]);

function displayresume(){
       console.log("====PersonalDetails====");
    resume.PersonalDetails.forEach(function(PersonalDetails){
     
        console.log(PersonalDetails);
        });
  resume.TechnicalSkills.forEach(function(skill){
        // console.log(skill.skillName+"  "+skill.expertiseLevel);
        console.log("Skill details" , JSON.stringify(skill, null, 2));
    });

}
displayresume();