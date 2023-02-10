# React Native Expo Firebase

This repository contains a simple example of how to integrate Firebase into a React Native app using the [Expo](https://expo.io) platform.

## Prerequisites

- [Node.js](https://nodejs.org)
- [Expo CLI](https://docs.expo.io/get-started/installation)
- A Firebase project. If you don't already have one, you can create one [here](https://firebase.google.com).

## Getting Started

1. Clone the repository:
```
git clone https://github.com/rekiemfaxaf/react-native-expo-firebase.git
```

2. Change into the project directory:
```
cd react-native-expo-firebase
```

3. Install the dependencies:
```
npm install
```
4. Create a `.env` file in the root of the project and add the following:
```
API_KEY=your_firebase_api_key
AUTH_DOMAIN=your_firebase_auth_domain
PROJECT_ID=your_firebase_project_id
STORAGE_BUCKET=your_firebase_storage_bucket
MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
APP_ID=your_firebase_app_id
```

Replace the values with the values from your Firebase project. You can find these values in the Firebase console under the "Project settings" section.

5. Start the development server:
```
npx expo start
```
6. Scan the QR code using the Expo app on your phone or in the emulator to run the app.

## Resources

- [Firebase](https://firebase.google.com)
- [React Native](https://facebook.github.io/react-native)
- [Expo](https://expo.io)
This README provides a simple setup and usage guide for the example project. You can modify and extend the information in this file to better match the requirements of your specific project.
