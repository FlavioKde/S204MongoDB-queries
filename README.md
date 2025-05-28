# 🍽️ MongoDB Restaurant Queries Project

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

## 📄 Description - Exercise Statement

This project focuses on learning how to query a NoSQL database using MongoDB. We have a collection of Restaurant objects in New York City, and we need to perform various queries to extract specific information.

The main objective is to master MongoDB query operations including:
- Basic document retrieval
- Field projection and exclusion
- Filtering with conditions
- Sorting and limiting results
- Regular expression matching
- Geospatial queries
- Array operations
- Aggregation operations

### 🎯 Learning Objectives
- Learn to query a NoSQL database
- Master MongoDB query syntax
- Understand document-based data structures
- Practice filtering, sorting, and projection operations

## 💻 Technologies Used

- **MongoDB** - NoSQL document database
- **MongoDB Compass** - GUI for MongoDB
- **MongoDB Shell (mongosh)** - Command-line interface
- **Node.js** - JavaScript runtime (optional for scripting)
- **JavaScript** - Query language

## 📋 Requirements

- **MongoDB** v4.4 or higher
- **MongoDB Compass** (recommended for GUI operations)
- **Node.js** v14.17.0 or higher (if using Node.js driver)
- **NPM** v6.14.13 or higher (if using Node.js driver)

### 📊 Database Requirements
- MongoDB instance running locally or remotely
- Access to the `restaurants` collection with New York City restaurant data
- Sample dataset should include fields: `restaurant_id`, `name`, `borough`, `cuisine`, `address`, `coord`, `grades`

## 🛠️ Installation

### Option 1: Using MongoDB Compass (Recommended for beginners)

1. **Download and install MongoDB Compass:**
   ```bash
   # Visit https://www.mongodb.com/products/compass and download
   ```

2. **Connect to your MongoDB instance:**
   - Open MongoDB Compass
   - Connect to `mongodb://localhost:27017` (or your MongoDB URI)

3. **Import the restaurant dataset:**
   - Create a database named `test` or `restaurants_db`
   - Create a collection named `restaurants`
   - Import the NYC restaurant dataset (JSON format)

### Option 2: Using MongoDB Shell

1. **Install MongoDB:**
   ```bash
   # On macOS using Homebrew
   brew tap mongodb/brew
   brew install mongodb-community

   # On Ubuntu
   sudo apt-get install mongodb

   # On Windows - Download from MongoDB website
   ```

2. **Start MongoDB service:**
   ```bash
   # On macOS/Linux
   sudo systemctl start mongod

   # On Windows
   net start MongoDB
   ```

3. **Connect to MongoDB shell:**
   ```bash
   mongosh
   ```

4. **Import sample data:**
   ```bash
   mongoimport --db test --collection restaurants --file restaurants.json
   ```

### Option 3: Using Node.js Driver

1. **Clone this repository:**
   ```bash
   git clone https://github.com/yourusername/mongodb-restaurant-queries.git
   ```

2. **Navigate to project directory:**
   ```bash
   cd mongodb-restaurant-queries
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

## ▶️ Execution

### Using MongoDB Compass
1. Open MongoDB Compass
2. Connect to your database
3. Navigate to the `restaurants` collection
4. Use the query bar to execute the provided queries
5. View results in the GUI

### Using MongoDB Shell
1. **Start MongoDB shell:**
   ```bash
   mongosh
   ```

2. **Select database:**
   ```javascript
   use test
   ```

3. **Execute queries:**
   ```javascript
   // Example: Show all restaurants
   db.restaurants.find()
   ```

### Using Node.js
1. **Configure database connection in `config/database.js`**
2. **Run the query scripts:**
   ```bash
   npm start
   ```

## 📝 Query Examples

Here are some example queries from the exercise set:

### Basic Queries
```javascript
// 1. Show all documents in the Restaurants collection
db.restaurants.find()

// 2. Show restaurant_id, name, borough and cuisine for all documents
db.restaurants.find({}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1})

// 3. Show restaurant_id, name, borough and cuisine, excluding _id
db.restaurants.find({}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0})
```

### Filtering Queries
```javascript
// 5. Show all restaurants in the Bronx
db.restaurants.find({"borough": "Bronx"})

// 6. Show first 5 restaurants in the Bronx
db.restaurants.find({"borough": "Bronx"}).limit(5)

// 8. Find restaurants with score greater than 90
db.restaurants.find({"grades.score": {\$gt: 90}})
```

### Advanced Queries
```javascript
// 14. Find restaurants containing 'Wil' as first three letters
db.restaurants.find({"name": /^Wil/}, {"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1})

// 17. Find restaurants in Bronx with American or Chinese cuisine
db.restaurants.find({"borough": "Bronx", "cuisine": {\$in: ["American", "Chinese"]}})

// 24. Sort restaurants by name in ascending order
db.restaurants.find().sort({"name": 1})
```

## 🌐 Deployment

### Local Development
1. Ensure MongoDB is running locally
2. Import the restaurant dataset
3. Execute queries using your preferred method

### Production Deployment
1. **Set up MongoDB Atlas (Cloud):**
   - Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a cluster
   - Import your dataset

2. **Configure connection string:**
   ```javascript
   const uri = "mongodb+srv://username:password@cluster.mongodb.net/database"
   ```

3. **Deploy application:**
   - Use platforms like Heroku, Vercel, or AWS
   - Configure environment variables for database connection

### Docker Deployment
```bash
# Run MongoDB in Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Import data
docker exec -i mongodb mongoimport --db test --collection restaurants < restaurants.json
```

## 🤝 Contributions

Contributions are welcome! Please follow these steps to contribute:

1. **Fork the repository**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/NewFeature
   ```
3. **Make your changes and commit:**
   ```bash
   git commit -m 'Add New Feature'
   ```
4. **Push to your branch:**
   ```bash
   git push origin feature/NewFeature
   ```
5. **Create a Pull Request**

### 📋 Contribution Guidelines
- Follow MongoDB best practices
- Include comments in your queries
- Test all queries before submitting
- Update documentation if needed
- Follow the existing code style

## 📚 Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB Query Tutorial](https://docs.mongodb.com/manual/tutorial/query-documents/)
- [MongoDB Compass Guide](https://docs.mongodb.com/compass/current/)
- [Node.js MongoDB Driver](https://mongodb.github.io/node-mongodb-native/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️ for learning MongoDB queries**

*Happy Querying! 🚀*
```

This README.md file includes:

✅ **English language** as requested  
✅ **Markdown format** with proper syntax  
✅ **Icons and badges** for visual appeal  
✅ **Downloadable** - you can copy and save this content  
✅ **All required sections** from your reference  
✅ **MongoDB-specific content** based on your exercises  
✅ **Professional structure** with clear sections  
✅ **Code examples** from your query exercises  
✅ **Multiple installation/execution options**  

The README follows the structure you provided while being specifically tailored to MongoDB restaurant queries. It includes practical examples from your exercise list and provides comprehensive guidance for setup, execution, and deployment.

