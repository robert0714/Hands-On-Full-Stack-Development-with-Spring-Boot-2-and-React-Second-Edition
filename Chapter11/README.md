# Chapter 11 Adding CRUD Functionalities

## Creating the list page

constants.js

Carlist.json

React Table

```bash
npm install react-table
```

Then, import react-table and the style sheet to your Carlist.js file:

```js
import ReactTable from "react-table";
import 'react-table/react-table.css';
```
### You'll encounter Problem!!

```
Access to fetch at 'http://localhost:8080/api/cars' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

Recommendation:

You can add dependencies in pom.xml 

```xml
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

add Class for 'Access-Control-Allow-Origin' header

```java
package com.packt.cardatabase;

import java.util.Arrays;
 
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

/***
 * reference <br/>
 * https://docs.spring.io/spring-security/site/docs/4.2.x/reference/html/cors.html
 * <br/>
 * Access to fetch at 'http://localhost:8080/api/cars' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
 * */
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			// by default uses a Bean by the name of corsConfigurationSource
			.cors()
			// for authorization about spring data rest operation (ex: PUT / PATCH , DELETE) If you remove it , you wold encounter  that http status code is 403 "error": "Forbidden" .
			.and().csrf().disable()
			. authorizeRequests().anyRequest().permitAll()
			;
	}
	
	@Bean
	protected  CorsConfigurationSource corsConfigurationSource() {
	      UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	      CorsConfiguration config = new CorsConfiguration();
			config.setAllowedOrigins(Arrays.asList("*"));
			config.setAllowedMethods(Arrays.asList("*"));
			config.setAllowedHeaders(Arrays.asList("*"));
			config.setAllowCredentials(true);
	      config.applyPermitDefaultValues();
	      
	      source.registerCorsConfiguration("/**", config);
	      return source;
	}	
}
```

## How to show toast messages to the user

It would be nice to show the user some feedback in the event of successful deletion, or if there are any errors. Let's implement a toast message to show the status of deletion. For that, we are going to use the [react-toastify component](https://github.com/fkhadra/react-toastify). Install the component by typing the following command into the Terminal you are using:

```bash
npm install react-toastify
```

Once installation is complete, start your app and open the Carlist.js file in the editor.
We have to import **ToastContainer, toast**, and the style sheet so that we can start using
**react-toastify**. Add the following import statements to your **Carlist.js** file:

```js
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
```

**ToastContainer** is the container component for showing toast messages, and it should be inside the **render()** method. In ToastContainer, you can define the duration of the toast message in milliseconds using the **autoClose** prop. Add the **ToastContainer** component inside the return statement in the **render()** method, just after **ReactTable**:

```js
return (
    <div className="App">
        <ReactTable data={this.state.cars} columns={columns}
            filterable={true}/>
        <ToastContainer autoClose={1500} } />
    </div>
);
```

Then, we will call the toast method in the **onDelClick()** function to show the toast message. You can define the type and position of the message. The **success** message is shown when deletion succeeds, and the **error** message is shown in the case of an **error**:

```js
// Delete car
onDelClick = (link) => {
    fetch(link, {method: 'DELETE'})
    .then(res => {
        toast.success("Car deleted", {
            position: toast.POSITION.BOTTOM_LEFT
        });
        this.fetchCars();
    })
    .catch(err => {
        toast.error("Error when deleting", {
        position: toast.POSITION.BOTTOM_LEFT
    });
    console.error(err)
    })
}
```

## How to export data to the CSV file from the React app

One feature that we will also implement is a **Comma-Separated Values (CSV)** export of the data. There's a package called [react-csv](https://github.com/abdennour/react- csv) that can be used to export an array of data to the CSV file.

If your app is running, stop the development server by pressing Ctrl + C in the Terminal, and type the following command to install **react-csv**. Post installation, restart the app:

```bash
npm install react-csv
```

The **react-csv** package contains two components—**CSVLink** and **CSVDownload**. We will use the first one in our app, so add the following import to the **Carlist.js** file:

```js
import { CSVLink } from 'react-csv';
```

The ***CSVLink*** component takes the data prop, which contains the data array that will be exported to the CSV file. You can also define the data separator using the ***separator*** prop (the default separator is a comma). Add the ***CSVLink*** component inside the return statement in the ***render()*** method.