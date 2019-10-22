# Quick Resolve Profile Site

## The Docs

- [NodeJS](https://nodejs.org/)
- [NPM](https://www.npmjs.com/get-npm)
- [React](https://reactjs.org/)

## Basic Setup & Local Run

- clone repo
- cd into repo
- cd into client
- install latest node modules 'npm i'
- run local dev env 'npm start'


## Deploy to GH Pages

- link url in package.json "homepage": "https://[your-user-name].github.io/[your-repo-name]/"
- include scripts
    - "predeploy": "npm run build"
    - "deploy": "gh-pages -d build"
- after changes committed & pushed deploy with 'npm run deploy'