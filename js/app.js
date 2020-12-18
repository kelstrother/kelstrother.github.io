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

  })







/////////////////////////////////////////////////
//                       PULL DATA FROM BLOG FROM HEADLESS CMS
/////////////////////////////////////////////////