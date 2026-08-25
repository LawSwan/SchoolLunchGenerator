import { useState } from 'react';
import './App.css';

const foodCategories = {
  protein: [
    'Turkey slices',
    'Cheese quesadilla',
    'Chicken nuggets',
    'Hard-boiled eggs',
    'Hummus',
    'Black beans',
    'Peanut-free butter sandwich',
    'Mini meatballs'
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

const categoryEmoji = {
  protein: '🍗',
  fruit: '🍓',
  vegetable: '🥕',
  grain: '🍞',
  dairy: '🧀',
  snack: '🍪'
};

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
      <div className="deco deco-star deco-star-1">⭐</div>
      <div className="deco deco-star deco-star-2">✨</div>
      <div className="deco deco-star deco-star-3">🌟</div>
      <div className="deco deco-dot deco-dot-1" />
      <div className="deco deco-dot deco-dot-2" />
      <div className="deco deco-dot deco-dot-3" />

      <section className="lunch-card">
        <p className="eyebrow">Yum Yum Time!</p>
        <h1>
          <span className="title-emoji" aria-hidden="true">🍎</span>
          Preschool Lunch Generator
          <span className="title-emoji" aria-hidden="true">🥪</span>
        </h1>
        <p className="subtitle">Tap the button for a fresh, kid-approved lunch idea!</p>

        <div className="menu-grid">
          {categoryOrder.map((category) => (
            <div key={category} className={`menu-item item-${category}`}>
              <span className="category-emoji" aria-hidden="true">{categoryEmoji[category]}</span>
              <span className="category-label">{category}</span>
              <strong>{lunchMenu[category]}</strong>
            </div>
          ))}
        </div>

        <button type="button" onClick={generateLunch} className="generate-button">
          🎲 Generate another lunch!
        </button>
      </section>
    </main>
  );
}

export default App;
