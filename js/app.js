//////////////////////////////////////////////////////////
//               PULL AND RENDER DATA FROM GOOGLE SHEET
//////////////////////////////////////////////////////////

$.ajax('https://spreadsheets.google.com/feeds/list/12hAZRGTB9zMFiXmOJCIsyhI1Fo6sZluFCsvQabHqZqg/1/public/full?alt=json')  
  .then((data) => {
////////////////////////////////////////
    // CHECKING MY DATA
    console.log(data)
/////////////////////////////////////////////////
    // PUT OUR PROJECTS IN A VARIABLE
    const rawProjects = data.feed.entry
//////////////////////////////////////////
    // log our projects
    console.log(rawProjects)
////////////////////////////////////////
    // prettify our projects array
    const projects = rawProjects.map((project) => {
      return {
        name: project.gsx$name.$t,
        img: project.gsx$img.$t,
        description: project.gsx$description.$t,
        live: project.gsx$live.$t,
        github: project.gsx$live.$t,
      }
    })
    console.log(projects)
////////////////////////////////////////////////////
    //          USE JQUERY TO RENDER PROJECTS DATA
    ///////////////////////////////////////////////////
for (i = 0; i < projects.length; i++) {
  const $div = $(
    `<div class="card" style="width: 18rem;">
    <img src=${projects[i].img} class="card-img-top" alt="My Creations">
    <div class="card-body">
      <h5 class="card-title">${projects[i].name}</h5>
      <p class="card-text">${projects[i].description}</p>
      <a href=${projects[i].live} class="btn btn-primary">The Creation</a>
      <a href=${projects[i].git} class="btn btn-primary">The Code</a>
    </div>
  </div>`
  )
 $('#creations').append($div)  
  }
})



  
  
  
  
  
  

  
 









/////////////////////////////////////////////////
//                       PULL DATA FROM BLOG FROM HEADLESS CMS
/////////////////////////////////////////////////







/////////////////////////////////////////////////
//                       CONTACT FORM
/////////////////////////////////////////////////

//   window.addEventListener("DOMContentLoaded", function() {

//     // get the form elements defined in your form HTML above
    
//     var form = document.getElementById("fs-frm");
//     var button = document.getElementById("fs-frm-inputs");
//     // var status = document.getElementById("my-form-status");

//     // Success and Error functions for after the form is submitted
    
//  function success() {
//       form.reset();
//       button.style = "display: none ";
//       status.innerHTML = "Thanks!";
//     }

//     function error() {
//       status.innerHTML = "Oops! There was a problem.";
//     }

//     // handle the form submission event

//     form.addEventListener("submit", function(ev) {
//       ev.preventDefault();
//       var data = new FormData(form);
//       ajax(form.method, form.action, data, success, error);
//     });
//   });
  
//   // helper function for sending an AJAX request

//   function ajax(method, url, data, success, error) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState !== XMLHttpRequest.DONE) return;
//       if (xhr.status === 200) {
//         success(xhr.response, xhr.responseType);
//       } else {
//         error(xhr.status, xhr.response, xhr.responseType);
//       }
//     };
//     xhr.send(data);
  