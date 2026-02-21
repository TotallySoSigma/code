
const arr = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = arr;
const [one, , three, four, five] = arr;
const [first, ...rest] = arr;
const user = {
    name: "Aaron Yip",
    age: 12,
    address: {
        city: "QUINCY",
        zip: "02170",
    },
};
const { name: username, age: years } = user;
const { name, age } = user;
const {
    address: { city, zip },
} = user;
const settings = {
    theme: "dark",
    language: "en",
};
const { theme, fontSize = 14 } = settings;
//console.log(theme, fontSize);
//console.log(a);
//console.log(b);
//console.log(c);
//console.log(d);
//console.log(one);
//console.log(three);
//console.log(four);
//console.log(five);
//console.log(e);
//console.log(first);
//console.log(rest);
//console.log(age);
//console.log(username);
console.log(name);
console.log(years + " years old");
console.log(city);
console.log(zip);