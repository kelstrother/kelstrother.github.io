$.ajax('https://spreadsheets.google.com/feeds/list/12hAZRGTB9zMFiXmOJCIsyhI1Fo6sZluFCsvQabHqZqg/1/public/full?alt=json')  
  .then((data) => {

    const rawProjects = data.feed.entry

    const projects = rawProjects.map((project) => {
      return {
        name: project.gsx$name.$t,
        img: project.gsx$img.$t,
        description: project.gsx$description.$t,
        live: project.gsx$live.$t,
        github: project.gsx$live.$t,
      }
    })

for (i = 0; i < projects.length; i++) {
  const $div = $(
                  `<div class="cardcontainer">
                    <div class="card"><a href=${projects[i].live}>
                      <div class="cardimg">
                        <img src=${projects[i].img} alt="Project Example" class="project">
                      </div>
                      <div class="cardtext">
                        <p class="description"><strong>${projects[i].name}</strong><br>${projects[i].description}</p>
                      </div>
                    </a>
                    </div>
                  </div>`
   )
 $('#creations').append($div)  
  }
})


