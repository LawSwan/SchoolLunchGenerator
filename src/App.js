import { useState } from 'react';
import './App.css';

const foodCategories = {
  protein: [
    'Turkey slices',
    'Cheese quesadilla',
    'Chicken nuggets',
    'Hard-boiled eggs',
    'Hummus and pita',
    'Black beans and rice ',
    'Peanut-free butter sandwich',
    'Cheeseburger sliders'
  ],
  fruit: [
    'Bananas',
    'Strawberries',
    'Apple slices',
    'Grapes',
    'Blueberries',
    'Mandarin oranges',
    'Pear slices',
    'Watermelon'
  ],
  vegetable: [
    'Carrot sticks',
    'Cucumber slices',
    'Sweet pepper strips',
    'Cherry tomatoes',
    'Snap peas',
    'Broccoli florets',
    'Avocado slices',
    'Edamame'
  ],
  grain: [
    'Whole grain crackers',
    'Mini waffle sandwich',
    'Brown rice',
    'Whole grain pasta',
    'Cheesy tortilla triangles',
    'Bagel bits',
    'Whole wheat pita',
    'Oatmeal bites'
  ],
  dairy: [
    'String cheese',
    'Yogurt cup',
    'Cheddar cubes',
    'Mozzarella sticks',
    'Plain cottage cheese',
    'Milk',
    'Pudding cup',
    'Cream cheese spread'
  ],
  snack: [
    'Pretzels',
    'Goldfish crackers',
    'Rice cakes',
    'Apple sauce pouch',
    'Trail mix',
    'Banana muffin',
    'Cheese crackers',
    'Fruit leather'
  ]
};

const categoryOrder = ['protein', 'fruit', 'vegetable', 'grain', 'dairy', 'snack'];

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function buildLunchMenu() {
  const lunch = {};

  categoryOrder.forEach((category) => {
    lunch[category] = getRandomItem(foodCategories[category]);
  });

  return lunch;
}

function App() {
  const [lunchMenu, setLunchMenu] = useState(buildLunchMenu());

  const generateLunch = () => {
    setLunchMenu(buildLunchMenu());
  };

  return (
    <main className="app-shell">
      <section className="lunch-card">
        <p className="eyebrow">School lunch idea</p>
        <h1>Preschool Lunch Generator</h1>

        <div className="menu-grid">
          {categoryOrder.map((category) => (
            <div key={category} className="menu-item">
              <span className="category-label">{category}</span>
              <strong>{lunchMenu[category]}</strong>
            </div>
          ))}
        </div>

        <button type="button" onClick={generateLunch} className="generate-button">
          Generate another lunch
        </button>

        <p className="footer-credit">Made by Amber</p>
      </section>
    </main>
  );
}

export default App;
