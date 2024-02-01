# React Native SIG IOSD-MAIT 
---

### Introduction to React Native
###### [React Native Docs](https://reactnative.dev/docs/environment-setup)

###### Pre-Requisites
    Basics of Javascript

###### Installation Guide
[Reference Link for Installation](https://www.youtube.com/watch?v=8l691BQ-RGc&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=3)

* For Windows Install 
    * [Node.js](https://nodejs.org/en/download/)  
    * [java (openjdk)](https://learn.microsoft.com/en-us/java/openjdk/install)
    * [Android Studio](https://developer.android.com/studio)

* For Mac Install
    * [Node.js](https://nodejs.org/en/download/)  
    * [java (openjdk)](https://learn.microsoft.com/en-us/java/openjdk/install)
    * [Android Studio](https://developer.android.com/studio)
    * [Xcode](https://apps.apple.com/in/app/xcode/id497799835?mt=12)

###### Install Chocolatey using Command Prompt as Administrator
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

###### Install Node.js and OpenJDK using Chocolatey
    choco install -y nodejs-lts microsoft-openjdk17

###### Android Studio Setup
    Install Android SDK
    Install Android Virtual Device
    Set Environment Variables
        -> ANDROID_HOME
        -> JAVA_HOME
        -> PATH
    Create a new Virtual Device
    Start the Virtual Device



###### Create a New React Native App
    npx react-native@latest init AppName

###### Important files in React Native
    App.js
    index.js
    package.json
    package-lock.json
    android
    ios

###### Run the App
    npm start
    npx react-native run-android
    npx react-native run-ios


###### React Native Components
    View (Similar to div)
    StyleSheet (Similar to CSS)
    Text (Similar to p)
    Image (Similar to img)
    TextInput (Similar to input)
    Button
    TouchableOpacity (Similar to button)
    ScrollView (Similar to div)
    FlatList
    StatusBar
    SafeAreaView

###### Stylesheet Component
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

###### Props
    <Text style={{color: 'red'}}>Hello World</Text>
    <Text style={styles.text}>Hello World</Text>

---
