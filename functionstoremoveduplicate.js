function removeDuplicates(strings) {
    return strings.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  }

  //You can use this function by passing an array of strings to it:

  const originalArray = ["apple", "orange", "banana", "apple", "orange", "grape"];
const result = removeDuplicates(originalArray);
console.log(result);

  