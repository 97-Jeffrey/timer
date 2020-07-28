let array = process.argv.slice(2);
array = array.sort((a, b) => a - b);  // 1 3 5

for (let each of array) {
  each =Number(each);
  setTimeout(()=>{
    console.log(('\x07'));
  },each*1000)
}

console.log('\u0007');