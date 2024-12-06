import React from 'react';

const BestFriends: React.FC = () => {
  return (
    <main className="bestfriend-main">
      <nav className="home-navigation">
        <div className="home-nav-titles">
        </div>
      </nav>

      <section>
        <h2 className="bestfriend-header">Best Friends Animal Society Website Redesign</h2>
        <p className="bestfriend-text">
          Objective: Improve the user experience and design. The Best Friends Animal Society website redesign aimed to create an engaging and intuitive user experience while enhancing the visual appeal of the site. The redesign focuses on improving the navigation, accessibility, and overall functionality, making it easier for users to find pets for adoption, learn about volunteer opportunities, and support the organization through donations. The new design reflects the society's mission of saving lives and promoting animal welfare through a user-centric approach.
        </p>
      </section>

      <section className="ux-research">
        <h2 className="bestfriend-header">UX Research</h2>
        <p className="bestfriend-text">
          I conducted surveys and interviews with family and friends to gather insights on improving the Best Friends Animal Society website. The feedback revealed a strong desire for a more updated and engaging site. Based on these findings, my redesign focused on creating straightforward pathways for users and enhancing the visual appeal with updated, beautiful images to improve the overall user experience.
        </p>
      </section>

      <section className="solution">
        <h2 className="bestfriend-header">Rough Draft and Sketches</h2>
        <div>
          <h3 className="bestfriend-sub-header">Sketches</h3>
          <div className="image-wrapper">
            <img src="/src/images/bestfriends/sketches/brainstormandwitemap.png" alt="Brainstorming Sketches" className="brainstorm-image"/>
            <img src="/src/images/bestfriends/sketches/sketchwireframe.png" alt="Wirefram Sketches" className="gallery-image"/>
          </div>
        </div>

        <div>
          <h3 className="bestfriend-sub-header">Wireframes</h3>
          <div className="image-wrapper">
            <img src="/src/images/bestfriends/wireframe/home.jpg" alt="Wireframe Home" className="wireframe-image"/>
            <img src="/src/images/bestfriends/wireframe/adopt.jpg" alt="Wireframe Adopt" className="wireframe-image"/>
            <img src="/src/images/bestfriends/wireframe/donate.jpg" alt="Wireframe Donate" className="wireframe-image"/>
            <img src="/src/images/bestfriends/wireframe/volunteer.jpg" alt="Wireframe Volunteer" className="wireframe-image"/>
            <img src="/src/images/bestfriends/wireframe/about.jpg" alt="Wireframe About" className="wireframe-image"/>
          </div>
        </div>
      </section>

      <section className="high-fidelity">
        <h2 className="bestfriend-header">Planning and Solution</h2>
        <div>
          <h3 className="bestfriend-sub-header">Pattern Library</h3>
          <div className="image-wrapper">
            <img src="/src/images/bestfriends/pattern library/typography.jpg" alt="Typography Page" className="gallery-image"/>
            <img src="/src/images/bestfriends/pattern library/color.jpg" alt="Color Page" className="gallery-image"/>
            <img src="/src/images/bestfriends/pattern library/identity.jpg" alt="Identity Page" className="gallery-image"/>
          </div>
        </div>

        <h2 className="bestfriend-header">High-Fidelity Mockups and Prototypes</h2>
        <div className="image-wrapper">
          <img src="/src/images/bestfriends/prototype/home.jpg" alt="Home Page" className="gallery-image"/>
          <img src="/src/images/bestfriends/prototype/adopt.jpg" alt="Adopt Page" className="gallery-image"/>
          <img src="/src/images/bestfriends/prototype/donate.jpg" alt="Donate Page" className="gallery-image"/>
          <img src="/src/images/bestfriends/prototype/volunteer.jpg" alt="Volunteer Page" className="gallery-image"/>
          <img src="/src/images/bestfriends/prototype/about.jpg" alt="About Us Page" className="gallery-image"/>
        </div>

        <p className="bestfriend-figma-header">
          Interact with the <a href="https://www.figma.com/proto/L66bvATvyo1WnCE9Tuo7x0/High-Fidelity-Prototype?node-id=0-1&t=XM37rLgnvfoFDOma-1" target="_blank" className="prototype-link" rel="noopener noreferrer">Figma Mobile Prototype</a>
        </p>
      </section>
    </main>
  );
};

export default BestFriends;