# TODO

## IDEAS
- expand resource file to nicely format code, fetch code files and syntax
  highlight
- parallax background (or animation depending on scrollY)
- switch page animations

### Fonts
- Source Code Pro
- notepad++ Standard Font

### Colorpalette
- 256_noir (maybe green instead of green)
- notepad++ lighttheme

### Sections
- **Home**
  - [ ] Small text about person
  - [x] link github repos (maybe chosen ones) to be displayed 
  - [x] link social and automatic download of resume
    - [x] github.com
    - [x] linkedin.com
    - [ ] xing.com
    - [ ] twitter.com
    - [x] instagram
    - [x] resume
    - [x] email: contact@jonas-mika.de

- **Course Material**
  - [x] section wise markdown pages

- **Download**
  - [ ] single subpage that instantly downloads some file in 
        .zip format if opened; once finished shows successful download
        message; maybe prompt for download; if nothing in to_download
        folder then show message that nothing is up yet

## ROADMAP

1. Create Layout in Figma
   1.1 Website Design
   1.2 Specify all colors and fonts
   1.3 design logo (favicon)
2. Code layout out in React (keep it simple and fast)
3. deploy on Netlify with automatic deployment on git commit to master
4. connect to own domain


## Current TODOS

GENERAL
- [ ] make a helper.js / config.js and read common functions from there (and not
  define 
- [ ] color when highlighting in light mode markdown wrong (needs to be dark
  color)

HOME 
- [ ] sticky scroll from top to projects

CONTACT
- [x] build contact page

NAVBAR
- [ ] hamburger menu for mobile
- [ ] projects subpage and projects link in navbar links there  
- [ ] materials drop down links in navbar

PROJECTS/ PROJECT TILE
- [ ] dynamic adjust of content of project tile

COURSE 
- [ ] fetch courses from backend (move courses.json into backend and serve from
  there)
- [ ] loading/ nothing here yet/ error

RESOURCE
- [ ] adjust color theme of code 
- [ ] loading/ error notice

BACKGROUND
- [ ] make more fancy 
