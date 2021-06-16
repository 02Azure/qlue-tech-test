// In an effort to reduce transfer size, we want to transfer the data in the following json format instead:
// {"h":["username","hair_color","height"],"d":[["ali","brown",1.2],["mar
// c","blue",1.4],["joe","brown",1.7],["zehua","black",1.8]]}

// Assignments:
// 1) Write the NodeJS function which, taking in a raw data set as first mentioned, will return the improved
// json-encoded string and expose it into standard RESTFul API
// Notes:
// 1) it can be assumed that all records in the initial JSON result set have the same fields, and that
// said fields are indexed in the same order
// 2) make your functions generic (where the field names of the records in the resultset are not known in
// advance)

const fs = require("fs")

function improveRawData(input) {
  let headers = Object.keys(input[0]) //take first entry keys as headers array
  let data = []

  input.forEach(entry => { //loop each entry and push data with its respective object value array
    data.push(Object.values(entry))
  })

  let improvedData = {h: headers, d: data}
  return improvedData //return with improved data
}


let users = JSON.parse(fs.readFileSync("./sampleData.json", "utf8"))
console.log(improveRawData(users))