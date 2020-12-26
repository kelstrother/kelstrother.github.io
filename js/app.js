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
                 `<sl-card class="card-overview">
                  <img slot="image" src=${projects[i].img} 
                  alt="Portfolio Project"><strong><h3 class=projname>${projects[i].name}</h3></strong>
                  <p class=description>${projects[i].description}</p>
                  <div-slot="footer">
                  <sl-button href=${projects[i].git}>The Code</sl-button>
                  <sl-button href=${projects[i].live}>The Project</sl-button>
                  </sl-card>`
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
  