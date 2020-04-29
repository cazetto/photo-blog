# PhotoBlog

## Introduction

This application was created usign [Force Design System](https://github.com/cazetto/force) that is developed by [me](https://github.com/cazetto) as a way to apply/improve my knoledges and to [learn in public](https://www.swyx.io/writing/learn-in-public).

Here is the some other libraries that I've used to accomplish this job:
Typescript, React, ReactRouterDom, Redux, ReduxToolkit, ReduxThunk, StyledComponents, Jest, React Testing Library.

If you have suggestions, criticism or if you like something, open an Issue on Github Issues or email me in cazetto.andre@gmail.com.

## Folder Architecture

I used a feature-based folder structure for this project, where each Feature is within the first Feature folder in the folder structure, within them only the components referring to that feature and the Subfeatures of that Feature and so recursively.

### What is a feature and what is a component?

#### Components

All presentational components used in two or more places, expressive needs to be in the root component folder (src/components). It is a candidate to be moved to the components lib, Force Components in this case.

Presentational components that will be used inside a feature need to be inside the components folder of this feature (feature/customers/components), if this component at some point of development became necessary in other feature in a parent feature, it need to be moved to the in a parent component folder, "cousin components" is not alowed. eg. If something used in src/features/customer turn necessary in src/features/news it need to be in src/features/components.

#### Features

Is a Feature each resource that is a screen or need anything else then presentational component, like a selector in the store, or need to access any external API, do some http request or only have any application logic.

The "no cousins" rule is valid for the Features too. If you need a feature of other feature in a parent, you need to move it 1 level below.

#### Services

All the external data need to be managed inside the Services folder in project root src/services.

##### Influenced by

[How to better organize your React applications?](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)

[How to use Redux on highly scalable javascript applications?](https://medium.com/@alexmngn/how-to-use-redux-on-highly-scalable-javascript-applications-4e4b8cb5ef38)

[Why React developers should modularize their applications?](https://medium.com/@alexmngn/why-react-developers-should-modularize-their-applications-d26d381854c1)


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
