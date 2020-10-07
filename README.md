# Brian Lynch | Web development portfolio

## Summary
I created this portfolio to share my web development work to date with recruiters, prospective employers and clients. This website showcases a selection of projects I've created so far as well as a list of the tech stack I work with. There is also a brief 'About Me' section, as well as a contact form should someone who is viewing my portfolio want to get in touch. 

## Demo
To view a demo of this project, please click [here](https://bglynch.github.io/portfolio/).

## User Experience
I created this portfolio with the following list of users and user stories in mind. This allowed me to focus my design and development work on priority features that would be of value to those users:

| User | Sample user story |
| ------ | ------ |
| Recruiter | As a Recruiter, I want to be able to easily download and share this developer's CV so that I can put him forward for relevant roles. |
| Hiring Manager | As a Hiring Manager, I want links to the developer's code so that I can see if this developer would be suitable for a role in our company. |
| Client | As a prospective client, I want to view a live example or demo of this developer's work so that I can consider him for a project I am resourcing. |
| Collaborator | As a collaborator, I want to contact the developer so that we can discuss a project I am working on. |

To help me refine the design and layout of my site, I drew a mock-up of the portfolio on a whiteboard. 
I used this mock-up as a guide when coding a 'walking skeleton' of the portfolio site.  
Images of my mockups are located in the docs folder - [here](https://github.com/bglynch/portfolio-static-frontend/tree/master/docs/wireframes)


## Features
The key features I developed to fulfil the user stories I created are:
1. A section providing a brief description about me
2. A section listing my skills and the tech stack I work with
3. URLs to hosted projects showcasing my work 
4. URLs to the source code on GitHub for each project 
5. A filter that allows viewers to filter my project work by the language / tech stack used
6. A contact form
7. Ability to download a pdf copy of my CV

## Technologies Used
The languages, frameworks, libraries and tools that I used to create this portfolio site are:  
- [HTML5](https://www.w3.org/html/) is used to apply a structure to the website.
- [CSS3](https://www.w3.org/Style/CSS/) is used to style the website. 
- [Materialize](https://materializecss.com/) is a front-end framework which I used to improve the responsiveness of the website. Materialize also provides functionality to validate the form entries. 
- [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript) is used to apply logic and interactivity to the website.
- The project uses [JQuery](https://jquery.com) to simplify DOM manipulation.
- The project uses [OwlCarousel2](https://owlcarousel2.github.io/OwlCarousel2/) in the skills section to create a carousel showing my skills.
- The project uses [filterizr](http://yiotis.net/filterizr/) to filter the projects depending on what languages were used to build them.
- The project uses the [EmailJS](https://jquery.com) API to send an email to me upon submission of the contact form. 

## Testing
I have detailed below the different approaches and techniques I used to test the functionality of my website's features and to validate the source code for this project. 

### User scenarios
User testing was completed with the help of a few friends, who acted as recruiters, hiring managers and clients viewing my portfolio. I asked the testers to first navigate around the site freely (without any instruction) and then to follow sample scenarios I had created based on my user stories. 

A sample scenario I asked friends to test was to contact me using the contact form. This was based on the following user story: 
> As a collaborator, I want to contact the developer so that we can discuss a project I am working on.

The test case I provided was as follows:  
1. Click on the 'Contact' button on the navigation bar
2. Fill out the form with an invalid email address (e.g. a phone number, a physical street address)
3. Leave the message box empty.
4. Try to submit the form with an invalid email address and empty message box. 
5. Did you get an error message? Does the message give you the detail you need to fix the validation error?
6. Try to re-submit the form with valid inputs. Do you get a success message?
7. Send me an email with the subject 'Form submitted :)' so that I can check that I received an email copy of your submitted contact form. 

### Navigation
Acting as a user, I tested the navigation of the site through scrolling and using the navigation links in the navbar. I also tested links to my live projects, source code and social media accounts to test that they were behaving as expected. 

### Responsiveness
I tested the responsiveness of my site by viewing the site on different devices and browsers. 
I also employed tools such as [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools/) and [Resizer](https://material.io/tools/resizer/#url=https%3A%2F%2Fbglynch.github.io%2Fportfolio-static-frontend%2F) to test responsive features.  
Image of Resizer Tesinging located in **./docs/testing** - [here](https://github.com/bglynch/portfolio-static-frontend/tree/master/docs/testing)

### Performance
I used [WebPageTest](https://www.webpagetest.org/) to test the performance of my website. 
I also employed the [Lighthouse](https://developers.google.com/web/tools/lighthouse/) which is a Chrome Dev Tool that helped me assess the performance and quality of the website.  
Pdf of the lighthouse report is located in **./docs/testing** - [here](https://github.com/bglynch/portfolio-static-frontend/tree/master/docs/testing)

### Code validation
I also used the following validators to validate my code:  
[W3C - HTML Validator](https://validator.w3.org/)  
[W3C - CSS Validator](http://jigsaw.w3.org/css-validator/)  
[Codebeautify - JavaScript Validator ](https://codebeautify.org/jsvalidate)

## Deployment
I used GitHub Pages to host my website. I deployed from the master branch of my GitHub repository.

To run the code locally, please follow the instructions below. 
1. Clone this repository to a local directory. 
```sh
$ git clone https://github.com/bglynch/portfolio-static-frontend.git
```
2. Navigate to the index.html file in your local directory and open this file in your browser. 

## Credits
### Content
- The text used in this portfolio is my own.

### Media
- The background images used in this site are free stock images obtained from [Pexels](https://www.pexels.com/)

### Acknowledgements
- Template by [Materialize](https://materializecss.com/getting-started.html)
- [TinyJPG](https://tinyjpg.com/) for image compression