# Chapter 13 Testing Your Frontend

## Using Jest
Jest is a test library for JavaScript developed by [Facebook](https://jestjs.io/). Jest is  widely used with React and provides lots of useful features for testing. You can create a snapshot test, where you can take snapshots from React trees and investigate how states are changing. Jest also has mock functionalities that you can use to test, for example, your asynchronous REST API calls. Jest also provides functions that are required for the
assertions in your test cases.

We will first see how you can create a simple test case for a basic JavaScript function that performs some simple calculations. The following function takes two numbers as arguments and returns the product of the numbers:

```js
// multi.js
export const calcMulti = (x, y) => {
    x * y;
}
```

The following code shows a Jest test for the preceding function. The test case starts with a test method that runs the test case. The test method has an alias, called it, which we will use in the React examples later. The test method gets the two required arguments—the **test** name and the function that contains the test. **expect** is used when you want to test values. The **toBe** function is the so-called matcher that checks whether the result from the function equals the value in the matcher. There are many different matchers available in Jest and you can find these from their documentation:


```js
// multi.test.js
import {calcMulti} from './multi';

test('2 * 3 equals 6', () => {
    expect(calcMulti(2, 3)).toBe(6);
});
```


Jest comes with **create-react-app**, so we don't have to do any installations or configurations to start testing. It is recommended to create a folder called ***_test_*** for your test files. The test files should have the ***.test.js*** extension. If you look at your React frontend in the VS Code file explorer, you can see that in the src folder, there is already one test file automatically created, and it is called ***App.test.js***  .test.js

The source code of the test file is as follows:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
```

The following test file creates a div element to the DOM and mounts the ***App*** component to it. Finally, the component is unmounted from **div**. So, it just tests that your **App** component can be rendered and that the test runner is working. **it** is an alias for the **test** function in Jest; the first argument is the name of the test; and the second argument is the function that is executed and tested.

You can run your tests by typing the following command into your Terminal:

```bash
npm test
```

Or, if you are using Yarn, type the following:

```bash
yarn test
```

## Snapshot testing
Snapshot testing is a useful tool to test that there are no unwanted changes in your user interface. Jest generates snapshot files when the snapshot tests are executed. The next time the tests are executed, the new snapshot is compared to the previous one. If there are changes between the content of the files, the test case fails and an error message is shown in the Terminal.


To start snapshot testing, perform the following steps:

1. Install the **react-test-renderer** package. The **--save-dev** parameter means that this dependency is saved to the package.json file's devDependencies
part and it is only used for development purposes. If you type the **npm install --production** command in the installation phase, dependencies in the **devDependencies** part are not installed. So, all dependencies that are only required in the development phase should be installed using the **--save-dev** parameter:

```bash
npm install react-test-renderer --save-dev
```
2. Your package.json file should appear as follows once the new devDependecies part has been added to the file:

```json
{
  "name": "carfront",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^4.7.0",
    "react": "^16.12.0",
    "react-csv": "^1.1.2",
    "react-dom": "^16.12.0",
    "react-scripts": "3.2.0",
    "react-table": "^6.10.3",
    "react-toastify": "^5.4.1"
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
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

3. Import **TestRenderer** to your test file:

```js
import TestRenderer from 'react-test-renderer';
```

Let's now add a new snapshot test case to our **App.test.js** file. The test case will create a snapshot test of our **AddCar** component:

1. Import the AddCar component to our test file:

```js
import AddCar from './components/AddCar';
```

2. Add the following test code after the first test case, which already exists in the file. The test case takes a snapshot from our App component and then compares whether the snapshot differs from the previous snapshot:

```js
it('renders a snapshot', () => {
    const tree = TestRenderer.create(<AddCar/>).toJSON();
    expect(tree).toMatchSnapshot();
});
```

3. Run the test cases again by typing the following command in your Terminal:

```bash
npm test
```

## Using Enzyme

Enzyme is a JavaScript library for testing React components' output, and was developed by Airbnb. Enzyme has a really nice API for DOM manipulation and traversing. If you have used jQuery, it is really easy to understand the idea of the Enzyme API.

To start using Enzyme, perform the following steps:

1. Install it by typing the following command in your Terminal. This will install the enzyme library and the adapter library for React version 16. There is an adapter available for older React versions:

```bash
npm install enzyme enzyme-adapter-react-16 --save-dev
```

2. Create a new test file (test suite) called AddCar.test.js in the src folder. Now, we are going to create an Enzyme shallow rendering test for our AddCar
component. The first test case renders the component and checks that there are five TextInput components, as there should be. wrapper.find finds every
node in the render tree that matches TextInput. With Enzyme tests, we can use Jest for assertions, and here, we are using toHaveLength to check that the
established node count equals five. Shallow rendering tests the component as a unit and does not render any child components. For this case, shallow rendering is enough. Otherwise, you can also use the full DOM rendering by using mount:

```js
import React from 'react';
import AddCar from './components/AddCar';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<AddCar />', () => {
    it('renders five <TextInput /> components', () => {
        const wrapper = shallow(<AddCar />);
        expect(wrapper.find('TextField')).toHaveLength(5);
    });
});
```

3. Now, if you run the tests, you can see the following message in the Terminal. You can also see that the number of test suites is two, because the new test file and all tests passed.