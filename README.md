- Fun Foods app using by React and Firebase.
- Link: https://css-tricks.com/intro-firebase-react/

- Firebase: Create a realtime database
    + Copy firebase config & add into src/firebase.js(created before) & export to use later.
    + Have a look firebase api reference:
    https://firebase.google.com/docs/reference/js/firebase.database.Reference.html
    + Familiar some functions: push(), remove(), ref()

- Basic:
    + Adds item into database
    + Shows all items on page
    + Removes item both page & database
- New features:
    + Updates item

- Deploy on gh page:
    + Edit package.json
        - Install gh-pages dependency: npm install gh-pages --save-dev
        - Add homepage as repo link: https://tridung2110dn.github.io/fun-foods-app
    + Add 2 lines into scripts on package.json
        + "predeploy": "npm run build",
        + "deploy": "gh-pages -d build",
    + Run: npm run deploy

- Demo:
https://tridung2110dn.github.io/fun-foods-app