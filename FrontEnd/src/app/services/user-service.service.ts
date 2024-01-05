import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }

getData(key: string): any {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

// Save data to local storage
saveData(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
}

// Save unique JSON data to local storage
saveUniqueData(key: string, newData: any): void {
  // Retrieve existing data from local storage
  let existingData: any[] = this.getData(key);

  // Check if newData is not already in existingData
  const isUnique = !existingData.some((item: any) => this.isEqual(item, newData));

  if (isUnique) {
    // Add newData to existingData
    existingData.push(newData);

    // Save the updated data to local storage
    this.saveData(key, existingData);
  }
}

// Check if two objects are equal
isEqual(obj1: any, obj2: any): boolean {
  // Implement your equality check logic here
  // This can be a simple comparison or a deep comparison depending on your use case
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
// saveUniqueData(key: string, newData: User): void {
//   // Retrieve existing data from local storage
//   let  existingData = this.getData(key) || [];
//   console.log(existingData)
//   if (!Array.isArray(existingData)) {
//     existingData = [];
//   }
  
//   // Check if newData is not already in existingData
//   if (!existingData.some((item: any) => this.isEqual(item, newData))) {
//     // Add newData to existingData
//     existingData.push(newData);

//     // Save the updated data to local storage
//     this.saveData(key, existingData);
//   }
// }

//  getData(key: string): any | null {
//   const jsonData = localStorage.getItem(key);
//   if (jsonData) {
//     return JSON.parse(jsonData);
//   }
//   return null;
// }

//  saveData(key: string, data: any): void {
//   const jsonData = JSON.stringify(data);
//   localStorage.setItem(key, jsonData);
// }

//   isEqual(obj1: any, obj2: any): boolean {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }
}
