import { BookText, Github } from "lucide-react";

import { Link } from "react-router-dom";
import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="py-20" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-montserrat font-light text-center mb-16">
          Featured Projects
        </h2>

        {/* Software Engineering Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-montserrat font-light mb-8">
            Full Stack Applications
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/x1Ufo6usHQc"
                  title="Restaurant - Devmountain Specialization Capstone"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h4 className="text-xl font-semibold">
                FoodX - Reduce Food Waste
              </h4>
              <p className="text-gray-600">
                A user-friendly app utilizing AI to generate personalized
                recipes based on your available ingredients, promoting
                sustainability and reducing waste.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/leemaiwu/Specializations-Capstone-FoodX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
                {/* <a 
                  href="https://foodx.onrender.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a> */}
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/1sWL6roOwZg"
                  title="Restaurant - Devmountain Foundations Capstone"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h4 className="text-xl font-semibold">
                Restaurant - Custom Dining Experience
              </h4>
              <p className="text-gray-600">
                A tailored restaurant management concept that enables chefs to
                create dishes personalized to customer preferences, breaking the
                boundaries of traditional menus.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/leemaiwu/Foundations-Capstone-Restaurant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* UX Design Projects */}
        <div>
          <h3 className="text-2xl font-montserrat font-light mb-8">
            UI/UX Design Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            {/* <Link
              to="/bestfriends"
              className="group"
              onClick={() => window.scrollTo(0, 0)}
            >
              <div className="space-y-4">
                <img
                  src="/src/images/bestfriends/best_friends_thumbnail.jpg"
                  alt="Best Friends Animal Society Redesign Thumbnail"
                  className="rounded-lg shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <h4 className="text-xl font-semibold group-hover:text-gray-700">
                  Best Friends Animal Society - Redesign
                </h4>
                <p className="text-gray-600">
                  A modern redesign of a pet adoption site with a focus on user
                  experience, accessibility, and an earthy aesthetic to reflect
                  warmth and nature.
                </p>
              </div>
            </Link> */}

            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg">
                <Link to="/foodexpert" onClick={() => window.scrollTo(0, 0)}>
                  <img
                    // src="src/images/foodexpert/Thumbnail - Input Ingredients.png"
                    src="/assets/Thumbnail - Input Ingredients.png"
                    alt="Food Expert Case Study Thumbnail"
                    className="rounded-lg shadow-md"
                  />
                </Link>
              </div>
              <h4 className="text-xl font-semibold">
                Food Expert: AI Recipes to Reduce Food Waste
              </h4>
              <p className="text-gray-600">
                A web app that uses AI to generate recipes from ingredients you already have, reducing food waste and simplifying cooking.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/foodexpert"
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                >
                  <BookText className="w-5 h-5" />
                  <span>View Case</span>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg">
                <Link to="/bestfriends" onClick={() => window.scrollTo(0, 0)}>
                  <img
                    // src="/src/images/bestfriends/best_friends_thumbnail.jpg"
                    src="/assets/best_friends_thumbnail.jpg"
                    alt="Best Friends Animal Society Redesign Thumbnail"
                    className="rounded-lg shadow-md"
                  />
                </Link>
              </div>
              <h4 className="text-xl font-semibold">
                Best Friends Animal Society - Redesign
              </h4>
              <p className="text-gray-600">
                A modern redesign of a pet adoption site with a focus on user
                experience, accessibility, and an earthy aesthetic to reflect
                warmth and nature.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/bestfriends"
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                >
                  <BookText className="w-5 h-5" />
                  <span>View Case</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
