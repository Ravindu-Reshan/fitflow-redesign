# FitFlow Redesign

IT3060 – Human Computer Interaction · Lab Exercise 06
**Frontend:** React Native (Expo) · **Data:** local mock data only

Frontend prototype of the redesigned FitFlow fitness app.

## Features
- AI-inspired personalized workouts (simulated)
- Social community · Nutrition tracking · Progress tracking
- Motivation and achievements · Profile/settings

## Running the project
```
npm install
npx expo install --fix   # aligns package versions with your Expo SDK
npx expo start
```
- **Expo Go:** install Expo Go on your phone, scan the QR code (same Wi-Fi).
- **Android emulator:** start an emulator in Android Studio, run `npx expo start`, press `a`.

## Release build (Activity 1, Expo/EAS)
Version is `1.0.0` / `versionCode 1` in `app.json`. This is an Expo project, so use EAS instead of editing Gradle:
1. `npm i -g eas-cli && eas login && eas build:configure`
2. `eas build -p android --profile production` (AAB). EAS can generate and store the keystore for you.
3. To use your own keystore, run `eas credentials`. **Never commit a keystore or passwords**; add `*.jks`, `*.keystore` to `.gitignore`.
4. Increment `versionCode` for every new upload.

See `docs/lab06/` for the activity documents.
