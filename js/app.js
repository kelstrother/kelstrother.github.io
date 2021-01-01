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
                  `<div class="card">
                  <div class="cardimg">
                    <img src=${projects[i].img} alt="Project Example" class="project">
                  </div>
                  <div class="cardtext">
                    <p class="description"><strong>${projects[i].name}</strong><br>${projects[i].description}</p>
                  </div>
                  <div class="button">
                    <a href=${projects[i].git} class="btncode"><button>The Code</button></a>
                    <a href=${projects[i].live} class="btnproject"><button>The Project</button></a>
                  </div>
                </div>`
                // `<div class="card">
                //   <div class="card-section">
                //     <img src=${projects[i].img} alt="Portfolio Work">
                //   </div>
                //   <div class="card-section">
                //     <strong><p class="text-center">${projects[i].name}</strong><br>
                //     ${projects[i].description}<br><br>
                //     <a href=${projects[i].git} class="button" id="codebtn">The Code</a>
                //     <a href=${projects[i].live} class="button" id="projectbtn">The Project</a></p>
                //   </div>
                //  </div>`
   )
 $('#creations').append($div)  
  }
})
