/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React, { useState, useEffect } from 'react';
 import { View, Text } from 'react-native';
 import auth from '@react-native-firebase/auth';
 
 function App() {
   // Set an initializing state whilst Firebase connects
   const [initializing, setInitializing] = useState(true);
   const [user, setUser] = useState();
 
   // Handle user state changes
   function onAuthStateChanged(user) {
     setUser(user);
     if (initializing) setInitializing(false);
   }
 
   
   useEffect(() => {
     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
     return subscriber; // unsubscribe on unmount
   }, []);
 
   if (initializing) return null;
 
   if (!user) {
     return (
       <View>
         <Text>Login</Text>
       </View>
     );
   }
 
   return (
     <View>
       {/* <Text>Welcome {user.email}</Text> */}
       <Text>김민주</Text>
     </View>
   );
 }

export default App;
