# TODO

## IDEAS
- expand resource file to nicely format code, fetch code files and syntax
  highlight
- parallax background (or animation depending on scrollY)

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

- [ ] option to hide and stop animation in background component; define toggle
  function in App.js and pass through into components that use it
  -> deleted background from all but home page
- [x] style course resources
- [x] loader symbol
- [ ] favicon
- [ ] fetch course information on refresh of course page
- [x] back button to home does not work as expected (jumps to projects section)
- [x] rename materials to course materials
- [x] make backend continously read the public folder (such that updates are in
  webapp the second they are added to public)
- [ ] refactor code of subpages into single component

- [ ] color when highlighting in light mode markdown wrong (needs to be dark
  color)

- [ ] mobile

- [x] host express server and react app 
