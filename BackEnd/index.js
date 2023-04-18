import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import RestaurantsDAO from "./dao/restaurantsDAO.js"
import ReviewsDAO from "./dao/reviewsDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000

MongoClient.connect(
  process.env.RESTREVIEWS_DB_URI,
  {
    poolSize: 50,
    wtimeout: 2500,
    useNewUrlParse: true }
  )
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    await RestaurantsDAO.injectDB(client)
    await ReviewsDAO.injectDB(client)
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })

const cache = {}; // This is our cache object

function getFromCache(key) {
  if (cache.hasOwnProperty(key)) {
    return cache[key]; // Return cached value if it exists
  } else {
    return null; // Return null if the key is not in cache
  }
}

function addToCache(key, value) {
  cache[key] = value; // Add key-value pair to cache
}

// Example usage:
const key = "exampleKey";
const value = "exampleValue";

if (getFromCache(key) === null) {
  // If the key is not in cache, retrieve the value from the server
  // and add it to the cache for future requests
  fetch("example.com/api/data")
    .then(response => response.json())
    .then(data => {
      addToCache(key, data);
      // Do something with the data
    });
} else {
  // If the key is in cache, use the cached value
  const cachedValue = getFromCache(key);
  // Do something with the cached value
}
