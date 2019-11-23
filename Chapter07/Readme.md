
If you use npm 5.1 or earlier, you can't use npx. Instead, install create-react-app globally:

```bash
npm install -g create-react-app
```
Now you can run:

```bash 
create-react-app weatherApp
ould not create a project called "weatherApp" because of npm naming restrictions:
  *  name can no longer contain capital letters
  
create-react-app weatherapp
```

This command creates React app named myapp  in npm 5.2 or later:

```bash
npx create-react-app weatherapp
```

Replace App.js file with the file from Github

Start your app:
npm start

If you encounter the Problem : "React Native Error: ENOSPC: System limit for number of file watchers reached"
You could try editing

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

cat /proc/sys/fs/inotify/max_user_watches

fs.inotify.max_user_watches=524288
```

## Basic Tutorials

https://www.w3schools.com/react/react_intro.asp


## labs

Modify the App.js in folder src  .

```js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
//import Hello from './Hello_JSX';
//import Hello from './Hello_Props';
import MyTitle from "./MyTitle";
import Hello from "./Hello_lifeCycle";
// import HeaderText from './HeaderText_origin';
import HeaderText from "./HeaderText_memo";
// import Counter from './Counter_01';
// import Counter from './Counter_02';
// import Counter from './Counter_03';
// import Counter from './Counter_04';
// import Counter from './Counter_05';
// import Counter from './Counter_06';
import Counter from "./Counter_07";
import MyList from "./MyList_01";
// import MyList from './MyList_02';

import MyComponent from "./MyComponent";
// import MyForm from "./MyForm_01";
// import MyForm from "./MyForm_02";
import MyForm from "./MyForm_03";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* p.125 Props and the state example */}
      <MyTitle text="Hello" />

      {/* 
          p.124  JSX &styling example        
          p.128 Component life cycle methods example 
      */}
      <Hello count={2 + 2} user="robert" />

      {/* p.129 Stateless components example */}
      <HeaderText text="test"></HeaderText>

      {/* p.130 React hooks example */}
      <Counter></Counter>

      {/* p.134 Handling lists with React */}
      <MyList></MyList>

      {/* p.135 Handling events with React */}
      <MyComponent></MyComponent>

      {/* p.136 Handling events with React */}
      <MyForm></MyForm>

    </div>
  );
}

export default App;

```