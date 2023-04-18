import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

// Define the data container class
class DataContainer {
  constructor() {
    this.tree = {};
  }

  // Add data to the container
  addData(key, value) {
    let keys = key.split('.');
    let obj = this.tree;

    for (let i = 0; i < keys.length - 1; i++) {
      let k = keys[i];
      if (!obj[k]) {
        obj[k] = {};
      }
      obj = obj[k];
    }
    obj[keys[keys.length - 1]] = value;
  }

  // Retrieve data from the container
  getData(key) {
    let keys = key.split('.');
    let obj = this.tree;

    for (let i = 0; i < keys.length; i++) {
      let k = keys[i];
      if (!obj[k]) {
        return undefined;
      }
      obj = obj[k];
    }
    return obj;
  }
}

// Create a new data container object
let dataContainer = new DataContainer();

// Add some data to the container
dataContainer.addData('category1.subcategory1.data1', 'Value 1');
dataContainer.addData('category1.subcategory1.data2', 'Value 2');
dataContainer.addData('category1.subcategory2.data3', 'Value 3');
dataContainer.addData('category2.subcategory3.data4', 'Value 4');
// ... and so on for 100 data sets

// Retrieve data from the container
console.log(dataContainer.getData('category1.subcategory1.data1')); // Output: Value 1
console.log(dataContainer.getData('category1.subcategory2.data3')); // Output: Value 3
console.log(dataContainer.getData('category2.subcategory3.data4')); // Output: Value 4


const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json({ error: "not found"}))

export default app
