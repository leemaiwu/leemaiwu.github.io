import React from 'react';

const FoodExpert: React.FC = () => {
  return (
    <main className="bestfriend-main">
      <nav className="home-navigation">
        <div className="home-nav-titles">
        </div>
      </nav>

      <section>
        <h2 className="bestfriend-header">Food Expert</h2>
        <h3 className="bestfriend-sub-header-fx">Overview</h3>
        <p className="bestfriend-text">
          I've spent countless evenings staring into my fridge, thinking, “There's nothing to eat,” despite a shelf full of ingredients. The problem wasn't a lack of food—it was a lack of inspiration. I wanted a tool that could unlock the potential of my pantry, turning random items into meals I'd actually enjoy. That's why I created Food Expert, a web app that generates personalized recipes from the ingredients you already have. Powered by AI, it simplifies cooking, saves time, and tackles a big issue: food waste. My goal? To empower everyday cooks to whip up delicious dishes with confidence—no grocery run required.
        </p>
      </section>

      <section className="ux-research">
        <h2 className="bestfriend-header">UX Research</h2>
        <h3 className="bestfriend-sub-header-fx">Problem</h3>
        <p className="bestfriend-text">
          In the U.S., households waste about 31% of their food annually—that's roughly 133 billion pounds, according to the USDA (2023). Why? A big culprit is unused ingredients. People buy groceries with good intentions, but without ideas to combine what's on hand, food spoils.
        </p>
        <br></br>
        <h3 className="bestfriend-sub-header-fx">Pain Points</h3>
        <ul>
          <p className="bestfriend-text-indent">
            <li>
              &bull; Food Waste: 31% of food is wasted anually in the U.S.
            </li>
            <li>
              &bull; Time: 60% of Americans say they have no time for cooking.
            </li>
            <li>
              &bull; Financial Impact: $1,500 of food is uneaten anually per household.
            </li>
            <li>
              &bull; Inspiration: 75% of home cooks won't cook without a recipe.
            </li>
          </p>
        </ul>
      </section>

      <section className="solution">
        <h2 className="bestfriend-header">Rough Draft and Sketches</h2>
        <div>
          <h3 className="bestfriend-sub-header-fx">Behind the Scenes</h3>
          <p className="bestfriend-text">
            I sketched fast ideas for the core flow: an input field, a recipe output, and a clean download option. My process leaned on iteration—low-fidelity wireframes first, solving the problem before polishing the look.
          </p>
          <div className="image-wrapper">
            {/* <img src="/src/images/foodexpert/food expert sketches.jpg" alt="Brainstorming Sketches" className="gallery-image-fx"/> */}
            <img src="/assets/food expert sketches.jpg" alt="Brainstorming Sketches" className="gallery-image-fx"/>
          </div>
        </div>
        <br></br>

        <div>
          <h3 className="bestfriend-sub-header-fx">Wireframes</h3>
          <p className="bestfriend-text">
            I drew inspiration from Google, the number one search engine, known for its simple, effective design. I focused on a clean layout with a single, prominent input field for ingredients, ensuring users can quickly search and receive recipes.
          </p>
          <div className="image-wrapper">
            {/* <img src="/src/images/foodexpert/Wireframe - Input Ingredients.png" alt="Wireframe input field" className="wireframe-image-fx"/> */}
            {/* <img src="/src/images/foodexpert/Wireframe - AI Generating.png" alt="Wireframe AI generating" className="wireframe-image-fx"/> */}
            {/* <img src="/src/images/foodexpert/Wireframe - Suggested Recipe.png" alt="Wireframe suggested recipe" className="wireframe-image-fx"/> */}
            {/* <img src="src/images/foodexpert/Wireframe - Print Recipe.png" alt="Wireframe print recipe" className="wireframe-image-fx"/> */}
            <img src="/assets/wfhome.jpg" alt="Wireframe input field" className="wireframe-image-fx"/>
            <img src="/assets/wfadopt.jpg" alt="Wireframe AI generating" className="wireframe-image-fx"/>
            <img src="/assets/wfdonate.jpg" alt="Wireframe suggested recipe" className="wireframe-image-fx"/>
            <img src="/assets/wfvolunteer.jpg" alt="Wireframe print recipe" className="wireframe-image-fx"/>
          </div>
        </div>
      </section>

      <section className="high-fidelity">
        <h2 className="bestfriend-header">Planning and Solution</h2>
        <div>
          <h3 className="bestfriend-sub-header-fx">Pattern Library</h3>
          <p className="bestfriend-text">
            I embraced a minimalistic, modern, and moody aesthetic to create a clean, appetizing user experience. The muted dark color palette evokes sustainability, while sleek typography ensures readability and elegance. Simple icons and buttons maintain a clutter-free interface, guiding users effortlessly from ingredient input to recipe creation
          </p>
          <div className="image-wrapper">
            {/* <img src="/src/images/foodexpert/Pattern Library.png" alt="Pattern Library" className="pattern-library-fx"/> */}
            <img src="/assets/Pattern Library.png" alt="Pattern Library" className="pattern-library-fx"/>
          </div>
        </div>

        <h2 className="bestfriend-header">High-Fidelity Mockups and Prototypes</h2>
        <p className="bestfriend-text">
          Informed by Voice of the Customer feedback, I designed a clean, minimalistic high-fidelity site for Food Expert, focusing on user delight and efficiency. I replaced a standard loading bar with a fun panda chef GIF during AI recipe generation, which users loved. Feedback also highlighted their preference for this streamlined experience over scrolling through lengthy blog posts to find recipes.
        </p>
        <div className="image-wrapper">
        {/* <img src="/src/images/foodexpert/Prototype - Input Ingredients.png" alt="Prototype input field" className="wireframe-image-fx"/> */}
            {/* <img src="/src/images/foodexpert/Prototype - AI Generating.png" alt="Prototype AI generating" className="wireframe-image-fx"/> */}
            {/* <img src="/src/images/foodexpert/Prototype - Suggested Recipe.png" alt="Prototype suggested recipe" className="wireframe-image-fx"/> */}
            {/* <img src="src/images/foodexpert/Prototype - Print Recipe.png" alt="Prototype print recipe" className="wireframe-image-fx"/> */}
            <img src="/assets/wfhome.jpg" alt="Prototype input field" className="wireframe-image-fx"/>
            <img src="/assets/wfadopt.jpg" alt="Prototype AI generating" className="wireframe-image-fx"/>
            <img src="/assets/wfdonate.jpg" alt="Prototype suggested recipe" className="wireframe-image-fx"/>
            <img src="/assets/wfvolunteer.jpg" alt="Prototype print recipe" className="wireframe-image-fx"/>
        </div>

        <h2 className="bestfriend-header">Explore Food Expert Live</h2>
        <p className="bestfriend-text-end">I'm continuously enhancing Food Expert based on user feedback and testing, focusing on adding features.
          <br></br>
          See Food Expert in action! <a href="https://foodx.onrender.com/" target="_blank" className="prototype-link" rel="noopener noreferrer">Visit Food Expert</a>
        </p>
      </section>
    </main>
  );
};

export default FoodExpert;