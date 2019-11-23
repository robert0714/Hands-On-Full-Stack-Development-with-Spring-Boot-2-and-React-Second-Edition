# Chapter 8Consuming thw REST API with React

## Practical examples

### Preparing

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

### Open Weather Map

page.147

You need get the key: 

https://home.openweathermap.org/api_keys


When you are using a REST API, you should first inspect the response to be able to get values from the JSON data. In the following example, you can see the address that returns the current weather for London. Copy the address to a browser and you can see the JSON response data:

```url
http://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&APIkey=YOUR_KEY
```

### GitHub REST API

page.153

The URL of the GitHub REST API is the following:

```
https://api.github.com/search/repositories?q=KEYWORD
```

Let's inspect the JSON response by typing the URL into a browser and using the ***react*** keyword. From the response, we can see that repositories are returned as a JSON array called ***items***. From the individual repositories, we will show the ***full_name***
and ***html_url*** values.
