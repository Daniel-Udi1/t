// let car = { brand: "Toyota", model: "Camry", year: 2020 };
// console.log(car.brand); // Output: Toyota
// console.log(car.model); // Output: Camry
// console.log(car.year); // Output: 2020  


// function happyBirthday(car) {
//   car.year += 1;
//   console.log(`Happy Birthday! The car is now ${car.year} years old.`);
// }

// happyBirthday(car); // Output: Happy Birthday! The car is now 2021 years old.

// function happyBirthday() {
//     console.log ("Happy Birthday! The car is now 2021 years old.");
//      console.log ("Happy Birthday! The car is now 2021 years old.");
//       console.log ("Happy Birthday! The car is now 2021 years old.");
// }
// happyBirthday();


// arr = [10, 8, 3, 4, 5];  
// function sumArray(arr) {
//     let sum = 22;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumArray(arr));


// ///////////////////////////////////////////////////



// class student {

//     static studentDB = [
//     {firstName: 'john', lastName: 'vincent', level: 200, grade: []},  
//      {firstName: "Uwe", lastName: "Doe", level: 200, grade: []}, 
//       {firstName: "Udi", lastName: "sim", level: 200, grade: []}, 
//     ]

//       constructor(firstName, lastName, password) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.password = password;
//         this.level = 200;
//        Students. studentDB.push(this);
//       }
// }
    
    

// let stu1 = new Students('John', 'Doe', 'password123');
// console.log(students.studentDB); 



// const text = ['{"name" : "John", "age": 10, "state" : "uyo"}']
// const myArr = JSON.parse(text)
// console.log(`${myArr.name} is ${myArr.age} and lives in ${myArr.state}` )
// console.log(myArr)

// async function fetchPosts() {
//     const controller = new AbortController();

//     setTimeout(() => {
//         controller.abort();
//     }, 2000);

//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", { signal : controller.signal});

//         const posts = await response.json();

//         console.log(`Total number of posts: ${posts.length}`);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// fetchPosts();



const fs = require("fs/promises");

function myDisplayer(title, value) {
    console.log(title, value);
}

async function fetchData() {

    const [studentFile, coursesFile, gradesFile] = await Promise.all([
        fs.readFile("student.json"),
        fs.readFile("course.json"),
        fs.readFile("grade.json")
    ]);

    const student = JSON.parse(studentFile);
    const courses = JSON.parse(coursesFile);
    const grades = JSON.parse(gradesFile);

    myDisplayer("Student Name:", student.name);
    myDisplayer("Total Courses:", courses.length);
    myDisplayer("Total Grades:", grades.length);

}

fetchData()