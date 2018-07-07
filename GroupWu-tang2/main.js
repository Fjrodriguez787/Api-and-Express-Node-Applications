/*MORNING CHALLENGE: create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. ES6+, running on a node server, and should return a first and last name */

// The user can click a button

// the user expects to get a name from answering each question

alert("connected");

window.addEventListener("load", () => {
  const button = document.getElementById("submitButton");
  const allInputs = document.getElementsByTagName("input");
  const input0 = document.getElementsByTagName("input")[0];
  const input2 = document.getElementsByTagName("input")[2];
  const input5 = document.getElementsByTagName("input")[5];
  const input6 = document.getElementsByTagName("input")[6];
  const input9 = document.getElementsByTagName("input")[9];
  let result = document.getElementsByTagName("p")[0];
  let generatedName;

  const wuTangMembers = [
    "Method Man",
    "Rza",
    "Gza",
    "Big",
    "Ghost Face Killa",
    "Old dirty bastard",
    "Raekwon",
    "U-God",
    "Masta-Killa",
    "Inspecta-deck",
    "Cappadonna"
  ];
  const randomNames = [
    "herbert",
    "sherman",
    "phoebe",
    "big Al",
    "sally",
    "suzy q",
    "judy",
    "ralph",
    "Not a wu-tang member",
    "James"
  ];

  button.addEventListener("click", () => {
    for(let i = 0; i < allInputs.length; i++) {
      if(!allInputs[i].checked) {
        return alert(`please Answer all questions`);
      }else{
        if(input0.checked && input2.checked && input5.checked && input6.checked && input9.checked) {
           generatedName = wuTangMembers[Math.round(Math.random() * (wuTangMembers.length - 1))];
           return result.innerHTML = `Congrats! based on your knowledge your name is ${generatedName}`;
        }else{
          generatedName = randomNames[Math.round(Math.random() * (randomNames.length - 1))];
          return result.innerHTML = `lol! based on your knowledge your name is ${generatedName}`;
        }
      }
    }
  });
});
