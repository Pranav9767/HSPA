import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }


saveUniqueData(key: string, newData: User): void {
  // Retrieve existing data from local storage
  let  existingData = this.getData(key) || [];

  if (!Array.isArray(existingData)) {
    existingData = [];
  }
  
  // Check if newData is not already in existingData
  if (!existingData.some((item: any) => this.isEqual(item, newData))) {
    // Add newData to existingData
    existingData.push(newData);

    // Save the updated data to local storage
    this.saveData(key, existingData);
  }
}

 getData(key: string): any | null {
  const jsonData = localStorage.getItem(key);
  if (jsonData) {
    return JSON.parse(jsonData);
  }
  return null;
}

 saveData(key: string, data: any): void {
  const jsonData = JSON.stringify(data);
  localStorage.setItem(key, jsonData);
}

  isEqual(obj1: any, obj2: any): boolean {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
}
