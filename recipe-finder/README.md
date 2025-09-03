
# Recipe Finder App

## Overview
Recipe Finder is a responsive web application built using HTML, CSS, and vanilla JavaScript. It allows users to search for delicious recipes from around the world by leveraging TheMealDB API. Users can view detailed recipe information including ingredients, cooking instructions, categories, and optional video tutorials, all presented in a clean and modern interface.

## Features
- Search meals by keywords using TheMealDB API  
- Display search results with meal images, titles, and categories  
- View detailed recipe information including ingredients, measures, and instructions  
- Optional YouTube video tutorial links for recipes  
- Real-time search feedback and error handling for no results  
- Responsive design with custom styling for mobile and desktop  
- Smooth navigation between search results and meal details  
- Cross-browser compatibility  

## Technologies Used
- HTML5  
- CSS3 (Custom styling with responsive design and hover effects)  
- JavaScript (ES6+, DOM manipulation, Fetch API for asynchronous requests)  
- TheMealDB API for meal data  

## Usage
1. Clone or download this repository.  
2. Open `index.html` in any modern web browser.  
3. Enter a meal name or keyword in the search box and click the "Search" button or press Enter.  
4. Browse the search results and click on any meal card to view detailed recipe information.  
5. Use the back button to return to search results.  

## API Reference
This project uses TheMealDB API endpoints:  
- Search meals: `https://www.themealdb.com/api/json/v1/1/search.php?s={searchTerm}`  
- Lookup meal by ID: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}`  

## Future Enhancements
- Add user authentication and favorite meal saving  
- Filter recipes by cuisine, diet, or ingredients  
- Enable recipe sharing on social media  
- Improve UI with enhanced animations and accessibility features  

## License
This project is open source and available under the MIT License.

***
