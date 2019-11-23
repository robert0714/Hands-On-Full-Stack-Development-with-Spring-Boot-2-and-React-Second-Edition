# Chapter 9 Useful Third-Party Components for React

## Using third-party React components

There are lots of nice React components available for different purposes. Our first task is to find a suitable component for your needs. One good site for searching components is [JS.coach](https://js.coach). You just have to type in a keyword, search, and select React
from the list of frameworks.

Another good source for React components is [awesome-react-components](https://github.com/brillout/awesome-react-components) .

Components often have good documentation that helps you to utilize them in your own React app. Let's see how we can install a third-party component to our app and start to use it. Navigate to the **JS.coach** site, type \***\*list\*\*** to search the input field, and filter by **_React_**.

From the search results, you can find the list component, called **_react-tiny-virtual-list_**.

Click the component link to see more detailed information pertaining to the component.Quite often, you can find the installation instructions there and some simple examples of how to use the component. The info page often provides the address of a component's
website or GitHub repository, where you can find the full documentation.

As you can see from the component's info page, components are installed using npm. The syntax of the command is as follows:

```bash
npm install component_name
```

Or, if you are using yarn, it is as follows:

```bash
yarn add component_name
```

The **npm install** and **yarn add** commands save the component's dependency to the **package.json** file that is in the root folder of your React app.

Now, we install the **react-tiny-virtual-list** component to the **myapp** React app that we created in **_Chapter 6, Setting Up the Environment and Tools - Frontend_**. You then have to move to your app root folder and type the following command:

```bash
npm install react-tiny-virtual-list
```

If you open the **package.json** file from your app root folder, you can see that the component is now added to the dependencies:

```json
{
  "name": "myapp",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-scripts": "3.2.0",
    "react-tiny-virtual-list": "^2.2.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```
Installed components are saved to the **node_modules** folder in your app. If you open that folder, you should find the **react-tiny-virtual-list** folder .

Now, if you push your React app source code to GitHub, you should not include **node_modules** because that folder is large. **create-react-app** contains the **.gitignore** file, which excludes the **node_modules** folder from the repository. The content of the **.gitignore** file appears as follows:

[see documents](https://help.github.com/en/github/using-git/ignoring-files) ,

[see examples in git hub](https://github.com/github/gitignore)

```
# Dependency directories
node_modules/
jspm_packages/

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```
The idea is that when you clone your app from the GitHub, you type the **npm install** command, which reads dependencies from the **package.json** file and downloads these to your app.

The final step to start using your installed component is to import it into the files where you
are using it:

```
import VirtualList from 'react-tiny-virtual-list';
```

You have now learned how to install and start to use React components.

## React Table
[React Table](https://react-table.js.org) is a flexible table component for React apps. It has many useful features, such as filtering, sorting, and pivoting. Let's use the GitHub REST API app that we created in ***Chapter 8, Consuming the REST API with React*** .


## Material-UI component library
Material-UI is the React component library that implements Google's material design. It contains a lot of different components, such as buttons, lists, tables, and cards, that you can use to achieve a nice and uniform UI. We will create a small shopping list app and style the user interface using Material-UI components .

## Routing
There are multiple solutions available for routing in React. The most popular one, which we are using, is [React Router](https://github.com/ReactTraining/react-router). For web applications, React Router provides a package called **react-router-dom**.

To start using React Router, we have to install it with the following command:

```bash
npm install react-router-dom
```

There are four different components in **react-router-dom** that are required to implement routing. **BrowserRouter** is the router for web-based applications. The **Route** component renders the defined component if the given locations match. The following are two examples of the **Route** component. The first one renders the **Contact** component when the user navigates to the **/contact** end path. You can also use inline rendering with the **Route** component, as shown in the following example:

```js
<Route path="/contact" component={Contact} />
// Route with inline rendering
<Route path="/links" render={() => <h1>Links</h1>} />
```

The **Switch** component wraps multiple Route components. The **Link** component provides navigation to your application. The following example shows the **Contact** link and navigates to the **/contact** endpoint when the link is clicked:

```js
<Link to="/contact">Contact</Link>
```