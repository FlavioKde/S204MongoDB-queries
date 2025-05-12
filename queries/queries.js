//1-Write a query to show all the documents in the Restaurants collection.
db.restaurants.find({});

//2-Write a query to display the restaurant_id, name, borough and cuisine for all the documents in the Restaurants collection.
db.restaurants.find({}, { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1 })

//3-Write a query to display the restaurant_id, name, borough and cuisine, but exclude the _id field for all documents in the Restaurants collection.
db.restaurants.find({}, { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0 })

//4-Write a query to display restaurant_id, name, borough and zip code, but exclude the _id field for all documents in the Restaurants collection.
db.restaurants.find({}, { "restaurant_id": 1, "name": 1, "borough": 1, "address.zipcode": 1, "_id": 0 })

//5-I wrote a query to show all the restaurants that are in the Bronx.
db.restaurants.find({ "borough": { $regex: "bronx", $options: "i" } })

//6-I wrote a query to show the top 5 restaurants that are in the Bronx.
db.restaurants.find({ "borough": { $regex: "Bronx", $options: "i" } }).sort({ "grades.score": -1 }).limit(5)

//7-Write a query to show the next 5 restaurants after skipping the first 5 in the Bronx.
db.restaurants.find({ "borough": { $regex: "Bronx", $options: "i" } })
  .sort({ "grades.score": -1 })
  .skip(5)
  .limit(5)

//8-I wrote a query to check the restaurants that have a score of more than 90.
db.restaurants.find({"grades.score":{"$gt":90}})

//9-Write a query to find out which restaurants have a score of more than 80 but less than 100.
db.restaurants.find({ "grades.score": { "$gt": 80, "$lt": 100 } })

//10-I wrote a query to check the restaurants that are located at latitude value less than -95.754168.
db.restaurants.find({ "address.coord": { "$lt": -95.754169 } })

//11-I wrote a MongoDB query to check for restaurants that do not serve 'American' cap cuisine and have a rating greater than 70 and a length less than -65.754168.
db.restaurants.find({
  "cuisine": { "$ne": "American" },
  "grades": { "$elemMatch": { "score": { "$gt": 70 } } },
  "address.coord.0": { "$lt": -65.754168 }
})

//12-Write a query to check for restaurants that do not prepare 'American' cap cuisine and will get a score greater than 70 and locate in longitude less than -65.754168. Note: This query does not use the $and operator.
db.restaurants.find({
  "cuisine": { "$ne": "American" },
  "grades": { "$elemMatch": { "score": { "$gt": 70 } } },
  "address.coord.0": { "$lt": -65.754168 }
})

//13-I wrote a query to see which restaurants do not prepare 'American' cap cuisine and will get a grade 'A' score outside of Brooklyn. The document must be shown according to the cuisine in descending order.
db.restaurants.find({
  "$and": [
    { "cuisine": { "$ne": "American" } },
    { "borough": { "$ne": "Brooklyn" } },
    { "grades": { "$elemMatch": { "grade": "A" } } }
  ]
}).sort({ "cuisine": -1 })

//14-Write a query to check the restaurant_id, name, borough and cuisine for those restaurants that contain 'Wil' with the first three letters in their name.
db.restaurants.find(
  { "name": { "$regex": "^Wil", "$options": "i" } },
  { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0 }
)

//15-Write a query to check the restaurant_id, name, borough and cuisine for those restaurants that contain 'ces' with the last three letters in their name.
db.restaurants.find(
  { "name": { "$regex": "ces$", "$options": "i" } },
  { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0 }
)

//16-Write a query to check the restaurant_id, name, borough and cuisine for those restaurants that contain 'Reg' with three letters somewhere in their name.
db.restaurants.find(
  { "name": { "$regex": "Reg", "$options": "i" } },
  { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0 }
)

//17-I wrote a query to check the restaurants that belong to the Bronx and are going to prepare either American or Chinese dishes.
db.restaurants.find({ 
    "$and": [
        { "borough": { "$regex": "Bronx", "$options": "i" } },
        { "$or": [
            { "cuisine": { "$regex": "American", "$options": "i" } },
            { "cuisine": { "$regex": "Chinese", "$options": "i" } }
        ]}
    ]
})

  

//18-Write a query to check the restaurant_id, name, borough and cuisine for those restaurants that belong to Staten Island or Queens or Bronx or Brooklyn.
db.restaurants.find(
  {
    "$or": [
      { "borough": { $regex: "Bronx", $options: "i" } },
      { "borough": { $regex: "Staten Island", $options: "i" } },
      { "borough": { $regex: "Queens", $options: "i" } },
      { "borough": { $regex: "Brooklyn", $options: "i" } }
    ]
  },
  { "restaurant_id": 1, "name": 1, "cuisine": 1, "_id": 0 }
)

//19-Write a query to check the restaurant_id, name, borough and cuisine for those restaurants that do not belong to Staten Island or Queens or Bronx or Brooklyn.
db.restaurants.find(
  {
    "borough": { "$nin": ["Bronx", "Staten Island", "Queens", "Brooklyn"] }
  },
  { "restaurant_id": 1, "name": 1, "cuisine": 1, "_id": 0 }
)

//20-Write a query to check the restaurant_id, name, borough and cuisine for those restaurants that get a marker that is not more than 10.
db.restaurants.find(
  { "grades.score": { "$lte": 10 } }, 
  { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0 }
)

//21-Write a query to check the restaurant_id, name, borough and cuisine for those restaurants that prepare fish except 'American' and 'Chinese' or the restaurant name beginning with the letters 'Wil'.
db.restaurants.find(
  {
    "$or": [
      { "name": { "$regex": "^Wil", "$options": "i" } },
      { "cuisine": { "$regex": "fish", "$options": "i" } }
    ],
    "cuisine": { "$nin": ["American", "Chinese"] }
  },
  { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0 }
)

//22-Write a query to check the restaurant_id, name, and grades for those restaurants that achieve a grade "A" and a score 11 in ISODate study data "2014-08-11T00:00:00Z".
db.restaurants.find(
  {
    "$and": [
      { "grades.grade": "A" },
      { "grades.score": 11 },
      { "grades.date": ISODate("2014-08-11T00:00:00Z") }
    ]
  },
  { "restaurant_id": 1, "name": 1, "grades": 1, "_id": 0 }
)

//23-I wrote a query to check the restaurant_id, name and grades for those restaurants on the 2nd element of grain variety I counted a grade of "A" and marker 9 on an ISODate "2014-08-11T00:00:00Z".
db.restaurants.find(
  {
    "$and": [
      { "grades.1.grade": "A" },
      { "grades.1.score": 9 },
      { "grades.1.date": ISODate("2014-08-11T00:00:00Z") }
    ]
  },
  { "restaurant_id": 1, "name": 1, "grades": 1, "_id": 0 }
)

//24-Write a query to check the restaurant_id, name, address and geographic location for those restaurants on the second element of the coord array and count a value that is more than 42 and ends at 52.
db.restaurants.find(
  {
    "address.coord.1": { "$gt": 42, "$lt": 52 }
  },
  { "restaurant_id": 1, "name": 1, "address": 1, "_id": 0 }
)

//25-I wrote a query to organize the names of the restaurants in ascending order together with all the columns.
db.restaurants.find({}, { "_id": 0, "restaurant_id": 0, "address": 0, "grades":0, "cuisine":0, "borough":0 }).sort({ "name": 1 })

//26-I wrote a query to organize the names of the restaurants in descending order together with all the columns.
db.restaurants.find({}, { "_id": 1, "restaurant_id": 1, "address": 1, "grades":1, "cuisine":1, "borough":1 }).sort({ "name": -1 })

//27-I wrote a query to organize the nom de la cuisine in ascending order and pel mateix barri de cuisine. Descending order
db.restaurants.find({}, { "cuisine": 1, "borough": 1, "_id": 0 }).sort({ "cuisine": 1, "borough": -1 })

//28-I wrote a query to know all the addresses that do not contain the street.
db.restaurants.countDocuments({
  "address.street": { $exists: false }
})
db.restaurants.find({
  $or: [
    { "address.street": { $exists: false } },
    { "address.street": null }
  ]
}, {
  "name": 1,
  "address": 1,
  "_id": 0
})

//29-Write a query that will select all the documents in the restaurant collection with the value of the field coord is Double.
db.restaurants.find({
  "address.coord":{$type: "double"}
},
{ "name": 1, "address.coord": 1, "_id": 0 })



//30-Write a query that will select the restaurant_id, name and grade for those restaurants that return 0 as a subtraction after dividing the marker by 7.
db.restaurants.aggregate([
  {
    $match: {
      "grades.score": { $mod: [7, 0] } // Filtra scores divisibles por 7
    }
  },
  {
    $project: {
      "restaurant_id": 1,
      "name": 1,
      "grades": 1,
      "_id": 0
    }
  }
])

//31-Write a query to check the restaurant name, borough, longitude and altitude and cuisine for those restaurants that contain 'mon' with three letters in some location of their name.
db.restaurants.find(
  { "name": { "$regex": "mon", "$options": "i" } },
  { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "address.coord":1,"_id": 0 }
)

//32-Write a query to check the restaurant name, borough, longitude and latitude and cuisine for those restaurants that contain 'Mad' with the first three letters of their name.
db.restaurants.find(
  { "name": { "$regex": "^Mad", "$options": "i" } },
  { "restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "address.coord":1,"_id": 0 }
)