const tinderUser = new Object() // this is a singleton object

const tinderUser1 = {} // this is a non single ton object. basic difference & output will same

console.log(tinderUser1);

const otherUser = {
    email : "abc@google.com",
    fullname : {
        username : {
            firstname : "Rajesh",
            lastname : "Halder"
        }
    }
}

console.log(otherUser.fullname.username);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseStudent: "rajesh"
}

// course.courseInstructor

const {courseStudent: student} = course

// console.log(courseStudent);
console.log(student);

// {
//     "name": "rajesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]