# React Native Navigation Minimal Boilerplate
Hi, this repo contains the very minimal boilerplate for using Wix's [react-native-navigation](https://github.com/wix/react-native-navigation). The reason behind creating this repo was, while creating new react-native apps with `react-native-navigation`, I faced the issue of Hot Reloading was not working. But it was working on the example app that is on `react-native-navigation` repo.

I narrowed down the issue and it turns out that it's not an issue of `react-native` or `react-native-navigation`. It was how `react-native-navigation` requires us to import react modules as it doesn't follow the traditional AppRegistry way of binding react-native components with iOS.

In summary, we can't directly import any react components to `index.android.js`, `index.ios.js` or even root `app.js` file. On that case, hot-reload won't work. Root react components (like screens/views) need to be registered via `registerScreens` function in the following way:
```javascript
import {Navigation} from 'react-native-navigation';

import Landing from './screens/Landing';
import Home from './screens/Home';

export function registerScreens() {
  Navigation.registerComponent('Landing', () => Landing);
  Navigation.registerComponent('Home', () => Home);
}
```

This `registerScreens` function need to be in a separate file than index files or root App.js file. Here, we are assuming that our `index.android.js` and `index.ios.js` files are as follows:
```javascript
import App from './src/app';
```

Thats only it. Now from `app.js` file we call the `registerScreen` function:
```javascript
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './routes';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Landing',
    title: 'Welcome'
  }
});
```

In this way, hot reloading should work like the example app.