# Chapter 10 Setting Up the Frontend for Our Spring Boot RESTful Web Service

## Preparing the Spring Boot backend

We are beginning frontend development with the unsecured version of our backend. In the first phase, we will implement all CRUD functionalities and test that these are working correctly. In the second phase, we will enable security in our backend and make the modifications that are required, and finally, we will implement authentication.

Open the Spring Boot application with Eclipse, which we created in **_Chapter 5, Securing and Testing Your Backend_**. Open the **SecurityConfig.java** file that defines the Spring Security configuration. Temporarily comment out the current configuration and give everyone access to all endpoints. Refer to the following modifications:

```java
@Override
protected void configure(HttpSecurity http) throws Exception {
    // Add this row to allow access to all endpoints
    http.csrf().disable().cors().and().authorizeRequests().anyRequest().permitAll();

    /* Comment this out

    http.csrf().disable().cors().and().authorizeRequests()
    .antMatchers(HttpMethod.POST, "/login").permitAll()
    .anyRequest().authenticated()
    .and()

    // Filter for the api/login requests
    .addFilterBefore(new LoginFilter("/login", authenticationManager()),
    UsernamePasswordAuthenticationFilter.class)

    // Filter for other requests to check JWT in header
    .addFilterBefore(new AuthenticationFilter(),
    UsernamePasswordAuthenticationFilter.class);

    */
}
```

## Creating the React project for the frontend

Before we start coding the frontend, we have to create a new React app:

1. Open PowerShell, or any other suitable Terminal. Create a new React app by typing the following command:

````bash
npx create-react-app carfront
``

2. Install the Material-UI component library by typing the following command in the project's root folder:

```bash
npm install @material-ui/core
````

3. Run the app by typing the following command in the project's root folder:

```bash
npm start
```

Or, if you are using yarn, type in the following:

```bash
yarn start
```

4. Open the src folder with VS Code, remove any superfluous code, and use the Material-UI Appbar in the App.js file to get the toolbar for your app. Following the modifications, your App.js file source code should appear as follows:

```js
import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
function App() {
    return (
    <div className="App">
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    CarList
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
    );
}
export default App;
```
