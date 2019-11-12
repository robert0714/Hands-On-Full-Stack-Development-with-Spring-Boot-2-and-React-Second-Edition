Create React app:
create-react-app weatherApp

```bash
npm install -g create-react-app
npx create-react-app weatherApp
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