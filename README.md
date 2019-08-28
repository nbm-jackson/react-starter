# Jackson's Quick React Starter

## About

This is code for a React starter built on webpack and Babel.

The very basic template can be view [here](https://jacksons-react-starter.netlify.com).

## Structure

    .
    ├── node_modules
    ├── src
    ├── .babelrc
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierrc
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── webpack.common.js
    ├── webpack.dev.js
    └── webpack.prod.js

1. **`node_modules/`**: Directory containing all of the apps dependencies modules (npm modules).

2. **`src/`**: Directory containing all of the project files.

3. **`.babelrc`**: [Babel](https://babeljs.io/docs/en/) configuration file.

4. **`.eslintrc.json`**: [ESLint](https://eslint.org/) configuration file.

5. **`.gitignore`**: File for telling git which files/directories not to track.

6. **`.prettierrc`**: [Pretter](https://prettier.io) configuration file.

7. **`index.html`**: HTML file to act as a template for webpack to load into /dist.

8. **`package-lock.json`**: An auto-generated lock-file specifying dependency versions.

9. **`package.json`**: Node.js manifest file for listing site metadata and dependencies.

10. **`README.md`**: This file. A text reference for information regarding the project.

11. **`webpack.common.js`**: [Webpack](https://webpack.js.org/) configuration file for common webpack rules.

12. **`webpack.dev.js`**: Webpack configuration file for development specific webpack rules.

13. **`webpack.prod.js`**: Webpack configuration file for production specific webpack rules.

## Running Locally

1.  **Clone repository:**

    `git clone https://github.com/nbm-jackson/react-starter.git`

2.  **Install dependencies:**

    `npm install`

3.  **Start Gatsby delelopment server:**

    `npm start`

4.  **View in browser:**

    `localhost:3000`

## Building for Production

1.  **Run build script:**

    `npm run build`

2.  **Access built files in**

    `/dist`
