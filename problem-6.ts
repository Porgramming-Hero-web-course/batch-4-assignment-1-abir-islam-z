/**
 * 
 *
 *  **Problem 6:**
 * > Define an interface Profile with properties name, age, and email. Create a function updateProfile that * accepts an object of type Profile and an object of type Partial representing the updates. The function  
 * should return the updated profile.
 * ---
 *  - Sample Input 1: `const myProfile = { name: "Alice", age: 25, email: "alice@example.com" }
 *  console.log(updateProfile(myProfile, { age: 26 }))`
 * ---
 *  - Sample Output 1: `{
            name: "Alice",
          age: 26,
          email: "alice@example.com"
          }`
 * ---
 *
 */

interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (obj: Profile, data: Partial<Profile>): Profile => {
  /* const updatedProfile = {
    ...obj,
    ...data,
  }; */

  const updatedProfile = Object.assign(obj, data);

  return updatedProfile;
};

const myProfile: Profile = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};
console.log(updateProfile(myProfile, { age: 26, name: "Abir" }));
