function getLowercaseWords(string) {
  let str = string;
  str = str.split(" ");
  for (let i = 0; i <= str.length; i++) {
    if (str[i] !== str[i].toLowerCase()) {
      str.splice(i, 1);
    }
  }
  console.log(str);
  str = str.join(" ");
  console.log(str);
  return str;
}