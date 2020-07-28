let array = process.argv.slice(2);
array = array.sort((a, b) => a - b);  // 1 3 5

for (let each of array) {
  setTimeout(()=>{
    process.stdout.write('\x07');
  },each)
}

