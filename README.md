[![DeepScan grade](https://deepscan.io/api/teams/5417/projects/20612/branches/565625/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5417&pid=20612&bid=565625) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=mikeparcewski_simpleresume&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=mikeparcewski_simpleresume) [![Build & Deploy to S3](https://github.com/mikeparcewski/simpleresume/actions/workflows/main.yml/badge.svg)](https://github.com/mikeparcewski/simpleresume/actions/workflows/main.yml)

# Simple Resume Project

Developed as a way to (un)learn my react skills and see if I could actually right some front end code that I could use for my resume (not looking for a job - wink wink) and maybe give some other folks some fun with react.

Based on JSON Resume and some addition customization options, you can have your own cool react resume without writing a line of code.  Just customizing (or generating) some JSON.

Sample [wickedagile.com](https://wickedagile.com)

## Technologies/Libraries/Frameworks

* [React](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [mui](https://mui.com/)
* [JSON Resume](https://jsonresume.org/)
* [FontAwesome](https://fontawesome.com/v5/docs/web/use-with/react)

## Running

A simple `npm start` (assuming you have NPM installed)

## Customizing
All the customization files are in the [Customize](Cusrtomize/) directory.


### Your Resume
Let's start with your resume.  I was lazy and did the "Import from LinkedIn" Chrome add on.  What should be obvious in what I just said - you need Chrome.

1. Go to https://chrome.google.com/webstore/detail/json-resume-exporter/caobgmmcpklomkcckaenhjlokpmfbdec
2. Click "Add to Chrome"
3. Go to your linkedin profile (e.g. https://www.linkedin.com/in/formike/)
4. Open the "Import from LinkedIn" add on
5. Click on the floppy disk icon
6. Rename the downloaded file to "MyResume.json"
7. Drop into the [src/Customize](src/Customize/) folder and replace the one there

> If you need more guidance check out https://joshuatz.com/projects/web-stuff/linkedin-profile-to-json-resume-exporter/ for some how-to's

### Your Avatar(s)
Now if you don't hava an Avatar, let's make one (if you do, skip to the next step)

* Go to https://avatarmaker.com/
* Design your Avatar
* Download

Save your avatar...

* Name it **avatar.png**
* Save to the [Customize/](Customize/) folder

Next up create your "old" avatar.  Because who doen't love to see their avatar get old!

* Repeat the steps you did with your first avatar (optional)
    * NOTE: If you don't create an aged avatar, just copy **avatar.png** to the name below
* Save as **avatar-old.png**

Now let's make it fun and give it some motion...

* Go to https://giphy.com/ and create an account
* Then go to https://giphy.com/create/gifmaker
* Upload your avatar
* Then start playing with the filters.  I used the "Glitch" filter for mine.
* Upload it (you need to click a few times)
* Right click when done on the image and download 
    * Name it **masthead-lead.gif**
    * Save it to the [Customize/](Customize/) directory

Almost there, next up create your own favicons, easiest way...

1. Go to https://favicon.io/favicon-converter/
2. Upload your avatar
3. Click download
4. Unzip and drag all images (minus the manifest file) into the `public/` file

### Resume/Site Copy Overrides & Additions

The goal of the [ResumeOverrides.json](src/Customize/configs/ResumeOverrides.json) file is to both extend the file we generated 
from LinkedIn with additional sections (e.g. non-standard JSON Resume parts like resume.careerHighlights) and to override or add 
additional sections to what exists in LinkiedIn.

1. Open up [src/Customize/configs/ResumeOverrides.json](src/Customize/configs/ResumeOverrides.json)
2. TODO - FINISH DOCUMENTING

> Why extend JSON Resume?  
> If you look the [print version](https://wickedagile.com/print) or [homepage](https://wickedagile.com/)
> you'll see things like career summary, highlights and more.  Although the JSON Resume spec contains factual 
> data, it really doesn't contain extras many recruiters (and hiring managers) look for.

### The Site Theme

1. Open up [src/Customize/configs/Theme.json](src/Customize/configs/Theme.json)

TODO - Document

### Icononography

1. Open up [src/Customize/configs/Icons.json](src/Customize/configs/Icons.json)

TODO - Document

## Credits

I put the legos together, but there are a lot of lego makers out there and I want to give them some credit for their code or ideas.

* Inspiration
    * https://startbootstrap.github.io/startbootstrap-freelancer/#page-top
    * https://github.com/devmahmud/material-ui-portfolio
* Layout & Design - https://mui.com/
* Avatar - https://avatarmaker.com/
* Animated GIF - https://giphy.com/
* Theme customizer = https://bareynol.github.io/mui-theme-creator