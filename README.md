# Tempo
This app will help you keep track of the time you spend on a project. 

demo: https://tempo-meter.web.app/
<br/>
trello: https://trello.com/b/N6aWNEkv/tempo
<br/>
designer: [instagram](https://www.instagram.com/aleksandra.bbch) [behance](https://www.behance.net/sashababych) [linkedIn](https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0-%D0%B1%D0%B0%D0%B1%D0%B8%D1%87-7128561b4)

## Install

Run the commands
```
npm install
firebase login
firebase init
```
Then create the project in [firebase](https://firebase.google.com/) and add the firebase configurations: src/configs/firebaseConfig.js

For example: <br />
```
export default {
  apiKey: "XXXXxxxxXXXXxxxXXXXxxxXXXXx",
  authDomain: "xxxxxxxxx.firebaseapp.com",
  databaseURL: "https://xxxxxxxxx.firebaseio.com",
  projectId: "xxxxxxxxx",
  storageBucket: "xxxxxxxxx.appspot.com",
  messagingSenderId: "xxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  measurementId: "XXXXXXXXXXXXXX",
};
```

## Build/deploy
```
npm run build
npm run deploy
```