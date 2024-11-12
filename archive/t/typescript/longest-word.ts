let stringI: string = (process.argv.length >= 3) ? process.argv[2] : "";

const findLongestWordLength = (str: string): number => {
  const words = str.split(/[\s\r\n\t]+/); // Split string into words based on whitespace
  let longestWordLength = 0;

  words.forEach(word => {
    if (word.length > longestWordLength) {
      longestWordLength = word.length;
    }
  });

  return longestWordLength;
};

if (stringI === "") {
  console.log("Usage: please provide a string");
} else {
  console.log(findLongestWordLength(stringI));
}
