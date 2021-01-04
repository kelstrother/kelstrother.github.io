# Project Overview

---

## Project Schedule

---
|  Day | Deliverable | Status
|:---|---| ---|
|Day 1| HTML, CSS structure, Start on Mobile? | complete
|Day 1| Work on data rendering. | complete
|Day 3| CSS @media queries for Tablet and Desktop (to get breakpoints going) | complete
|Day 4| MVP & Bug Fixes | complete
|Day 5| Final Touches | complete
|Day 6| Present | complete

## Project Description

---

This will be my personal portfolio in which I will use to display the talents I have to offer a potential employer. I will utilize my knowledge of HTML, CSS, JavaScrips and jQuery to make the portfolio come to life. It will be easy to navigate, consice and to the point, engaging and pleasing to the eye all while being responsive on all platforms.

## Google Sheet

[Kel's Google Sheet](https://docs.google.com/spreadsheets/d/12hAZRGTB9zMFiXmOJCIsyhI1Fo6sZluFCsvQabHqZqg/edit?usp=sharing)

## Portfolio I want to Emulate

---

|[Jack Mcdade](https://jackmcdade.com) | I like the art on homepage.Also the overlying theme of personability. |
| ------------------------------------- | -------------------------------------------------------------------- |
|[Jacek Jeznach](https://jacekjeznach.com) | I love the motion graphics and that you can control them. |
|[Lynn Tonic](https://lynnandtonic.com) | Very clean, love how the images have folds in them. |
|[Prash Antsani](https://prashantsani.com/projects/portfolio-site.html) | Clever, Clever, Clever.

## Wireframes

---

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.

* [Mobile Wireframe](https://www.figma.com/file/rZOUZQ36UnyQ8PU1ZYfcRJ/Unit-1-Wire-Frame?node-id=1%3A2)

* [Tablet Wireframe](https://www.figma.com/file/rZOUZQ36UnyQ8PU1ZYfcRJ/Unit-1-Wire-Frame?node-id=10%3A15)

* [Desktop Wireframe](https://www.figma.com/file/rZOUZQ36UnyQ8PU1ZYfcRJ/Unit-1-Wire-Frame?node-id=10%3A257)

## Time/Priority Matrix

---

* [MVP Priority Matrix](https://res.cloudinary.com/kels-cloud/image/upload/v1608567631/Unit%201%20Project/Inspiration-5_frmnha.jpg)
* [Post MVP Priority Matrix](https://res.cloudinary.com/kels-cloud/image/upload/v1608567634/Unit%201%20Project/Inspiration-6_f087ym.jpg)

## Functional Components

---

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.
Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

### MVP

---

| Component | Priority | Estimated Time | Actual Time |
|:-----------|:----------:|----------------:|-------------:|
| Wireframe | H | 4hr | 4hr |
| Mockup | H | 4hr | 4hr |
| Navigation | H | 2hr | 1hr |  
| Hamburger Menu | H | 3hr |  NA |
| About Page | H | 2hr | 1hr|
| Skills/Project Gallery | H | 4hr | 2hr|
| Contact Page | H | 4hr | 1hr|
| Working with API | H | 1hr|  1hr |
| Responsive W/ Flex and Grid | H | TBD hrs | 6hr |
| Total | H | 34hrs| 20hrs |

#### PostMVP

---

| Component | Priority | Estimated Time | Actual Time |
|:---|:---:|---:|---:|
| Scroll Effects/ Animation | M | 6hr | 6hr |
| Hover Effects | M | 1hr | 1hr |
| Animated Hamburger | M | 1hr | NA |
| Linking Blog | M | 1hr | NA |
| Total | H | 8hrs| 7hrs |

## Additional Libraries

---
 Foundation

## Code Snippet

---

```css
.card {
 -webkit-transform: rotate(0) scale(1);
 transform: rotate(0) scale(1);
 -webkit-transition: .3s ease-in-out;
 transition: .3s ease-in-out;
}
.card:hover {
 -webkit-transform: rotate(0) scale(1.2);
  transform: rotate(0) scale(1.2);
  cursor: pointer;
}
```

## Issues and Resolutions

---
The Navbar ended up giving me a run for my money. I initially was going to
use one from a framework, but ended up having issues with its responsiveness and
customability. I ended up just writing one from scratch which was much easier.

Another part that was troublesome was the clip path text in the header for my name.
It was pretty tedious getting the image to the right spot so the contrast levels were
acceptable in all the breakpoints. After a lot of trial and error, it ended up looking
pretty great.
