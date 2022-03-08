Fullstack project.

You can find frontend part in the "frontend" folder and backend part in the "bff" folder.
Demo is is available here: [https://fullstack-dw.netlify.app](https://fullstack-dw.netlify.app).
### Frontend
I used basic create-react-app starter.<br />
Dependencies:
```json
{
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  "react-router-dom": "^6.2.2",
  "styled-components": "^5.3.3"
}
```
#### How to start frontend:
```bash
yarn
yarn start
```
#### Available Frontend Scripts

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


#### `yarn test`

Launches the test runner in the interactive watch mode.<br />

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Backend
Serverless AWS app. Deployed to AWS<br />
Dependencies:
```json
{
   "node-fetch": "^3.2.1"
}
```
#### How to start backend:
```bash
yarn
yarn start
```

#### Available Backend Scripts

#### `yarn start`

Runs the app in offline mode.<br />
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />

#### `yarn deploy`

Deploy the app.<br />
