/* eslint-disable no-console */
/* eslint-disable no-undef */
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.1.2' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
