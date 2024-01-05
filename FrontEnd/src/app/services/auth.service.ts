import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(userData: any): any {
  try {
    const storedUsername = localStorage.getItem('Users');
    const storedPassword = localStorage.getItem('Users');
    console.log(storedUsername);
    console.log(storedPassword);
    
    if (storedUsername !== null) {
      // Parse the JSON string into a JavaScript array of objects
      var storedDataArray = JSON.parse(storedUsername);
  
      // Check if the parsed data is an array and not empty
      if (Array.isArray(storedDataArray) && storedDataArray.length > 0) {
          // Access the username of the first user (you can loop through the array if needed)
          var firstUsername = storedDataArray[0].userName;
          var PasswordIs = storedDataArray[0].password;
  
          // Output the username
          console.log(firstUsername);
      } else {
          console.log('No users found or invalid data format.');
      }
  } else {
      console.log('Stored data is null. Handle accordingly.');
  }
    // Check if stored credentials match the provided credentials
    if (firstUsername === userData.userName && PasswordIs === userData.password) {
      // Return the user or perform further actions
      return { userName: storedUsername, password: storedPassword };
    } else {
      console.error('Invalid username or password.');
      return null; // or handle the error accordingly
    }
  } catch (error: any) {
    console.error('Error checking credentials:', error.message);
    console.log('Input data:', userData);
    return null; // or handle the error accordingly
  }
}
// authUser(user:any)
// {
//   let UserArray = []
//   if(localStorage.getItem('Users'))
//   {
//     UserArray = JSON.parse(this.getData('Users'))
//   }
//   return UserArray.find((p: { userName: any; password: any; })=> p.userName===user.userName && p.password===user.password)
// }

// getData(key: string): any | null {
//   const jsonData = localStorage.getItem(key);
//   if (jsonData) {
//     return JSON.parse(jsonData);
//   }
//   return null;
// }
}
