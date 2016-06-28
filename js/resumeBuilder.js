var bio = {
  "name": "Jodie Alaine Parker",
  "role": "Full Stack Developer",
  "contacts": {
    "mobile": "+44(0)7447949542",
    "email": "jodie@jodiealaine.com",
    "github": "jodiealaine",
    "twitter": "jodiealaine",
    "location": "St Ives, Cornwall"
  },
  "welcomeMessage": "Maker. Thinker. Smiler.",
  "skills": [
    "Ruby",
    "Python",
    "Ruby on Rails",
    "HTML",
    "CSS",
    "JavaScript"
  ],
  "biopic": "images/jodie-alaine-parker.jpg"
};

var education = {
  "schools": [{
    "name": "Oxford University",
    "location": "Oxford, UK",
    "degree": "Adv. Dip.",
    "majors": ["Data and Systems Analysis"],
    "dates": 2013,
    "url": "http://oxford.ac.uk"
  }, {
    "name": "Cardiff University",
    "location": "Cardiff, UK",
    "degree": "Cert.",
    "majors": ["Philosophy"],
    "dates": 2013,
    "url": "http://cardiff.ac.uk"
  }, {
    "name": "Open University",
    "location": "St Ives, Cornwall",
    "degree": "BSc",
    "majors": ["Open"],
    "dates": 2015,
    "url": "http://open.ac.uk"
  }],
  "onlineCourses": [{
    "title": "Front-End Developer NanoDegree",
    "school": "Udacity",
    "date": 2015,
    "url": "http://udacity.com"
  }, {
    "title": "Full Stack Developer NanoDegree",
    "school": "Udacity",
    "date": 2015,
    "url": "http://udacity.com"
  }, {
    "title": "Data Analyst NanoDegree",
    "school": "Udacity",
    "date": 2015,
    "url": "http://udacity.com"
  }, {
    "title": "Ruby on Rails and Growth Hacking",
    "school": "One Month",
    "date": 2014,
    "url": "http://onemonth.com"
  }, {
    "title": "Full Stack Development",
    "school": "Team Tree House",
    "date": 2014,
    "url": "http://teamtreehouse.com"
  }]
};

var work = {
  "jobs": [{
    "employer": "Urban Shed Ltd",
    "title": "Creative Coder & Founder",
    "location": "St Ives, Cornwall, UK",
    "dates": "2013-Present",
    "description": "Creative full stack developer for a small digital studio crafting websites, web application and native applications."
  }, {
    "employer": "Ennaitch Ltd",
    "title": "Agile Coach & Developer In Test",
    "location": "St Ives, Cornwall, UK",
    "dates": "2005-2012",
    "description": "Worked as an independent consultant specialising in Agile coaching and Developer in Test. Companies including: Trafigura, Tesco.com, Investec Bank, HFC Bank and Lloyds Bank."
  }, {
    "employer": "LMAX",
    "title": "Head of Testing",
    "location": "London, UK",
    "dates": "2008-2010",
    "description": "Head of Testing"
  }]
};

var projects = {
  "projects": [{
    "title": "Movie Trailer Website",
    "dates": "2015",
    "description": "Brief was to create a Python program to generate a movie trailers website.",
    "images": ["images/movie-trailer-website.jpg"]
  }, {
    "title": "Mockup to Website",
    "dates": "2015",
    "description": "Brief was to create a website from a mockup, using HTML, CSS and Bootstrap.",
    "images": ["images/mockup-to-website.jpg"]
  }]
};

bio.display = function() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  // var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").append(formattedMobile)
    .append(formattedEmail)
    .append(formattedGithub)
    .append(formattedLocation);

  $("#footerContacts").append(formattedMobile)
    .append(formattedEmail)
    .append(formattedGithub)
    .append(formattedLocation);
  $("#header").append(formattedBioPic);
  // $("#header").append(formattedWelcomeMessage);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkill);
    });
  }
};

work.display = function() {
  $("#workExperience").append(HTMLworkStart);
  for (var job in work.jobs) {
    if (work.jobs.hasOwnProperty(job)) {
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

      $(".work-entry:last").append(formattedEmployerTitle)
        .append(formattedDates)
        .append(formattedLocation)
        .append(formattedDescription);
    }
  }
};

projects.display = function() {
  $("#projects").append(HTMLprojectStart);
  for (var project in projects.projects) {
    if (projects.projects.hasOwnProperty(project)) {
      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

      $(".project-entry:last").append(formattedTitle)
        .append(formattedDates)
        .append(formattedDescription);

      if (projects.projects[project].images.length > 0) {
        for (var image in projects.projects[project].images) {
          if (projects.projects[project].images.hasOwnProperty(image)) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
          }
        }
      }
    }
  }
};

education.display = function() {
  $("#education").append(HTMLschoolStart);
  for (var school in education.schools) {
    if (education.schools.hasOwnProperty(school)) {
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
      formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

      $(".education-entry").append(formattedSchoolLocation);
      $(".education-entry").append(formattedSchoolName + formattedSchoolDegree);
      $(".education-entry").append(formattedSchoolDates);

      if (education.schools[school].majors.length > 0) {
        for (var major in education.schools[school].majors) {
          if (education.schools[school].majors.hasOwnProperty(major)) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
            $(".education-entry").append(formattedSchoolMajor);
          }
        }
      }
    }
  }
  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);
  for (var onlineCourse in education.onlineCourses) {
    if (education.onlineCourses.hasOwnProperty(onlineCourse)) {
      var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
      var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
      var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
      var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

      $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
      $(".education-entry:last").append(formattedonlineDates);
      $(".education-entry:last").append(formattedonlineURL);
    }
  }
};

projects.display();
work.display();
bio.display();
education.display();

$("#mapDiv").append(googleMap);