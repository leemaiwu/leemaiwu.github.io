import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-montserrat font-light text-center mb-12">About Me</h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          {/* <p>
            Hello! I'm Laura, a Full Stack Developer with a passion for creating elegant solutions to complex problems. With expertise in both frontend and backend development, I bring a comprehensive approach to software engineering that combines technical excellence with user-centered design thinking.
          </p>
          <p>
            When I'm not coding, you'll find me exploring my other passions - I'm an avid animal lover (especially dogs!), an enthusiastic hiker, and a dedicated baker who once crafted hundreds of macarons for a wedding. These diverse interests fuel my creativity and problem-solving abilities in unexpected ways.
          </p>
          <p>
            My technical journey is driven by curiosity and a constant desire to learn and grow. I thrive on tackling new challenges and am particularly excited about creating scalable applications that make a real impact. Whether it's optimizing database performance, crafting intuitive user interfaces, or architecting robust backend systems, I approach each project with enthusiasm and dedication.
          </p>
          <p>
            I'm always open to connecting with fellow developers and potential collaborators. Feel free to reach out - I'd love to discuss technology, share experiences, or explore new opportunities together.
          </p> */}
          <p>
            Hi there, I'm Laura! I'm so glad you're here.
          </p>
          <p>
            A little about me: I have a deep passion for problem-solving, whether it's coding an elegant app, designing an exceptional user experience, or creating new projects from scratch. I thrive in collaborative environments where I can make an impact to improve lives, big or small. As the saying goes, "Great things are done by a series of small things brought together." I believe even the smallest actions can create a ripple effect, leading to meaningful change. With a strong technical foundation and a user-centered approach, I always strive to keep people at the heart of everything I do.
          </p>
          <p>
            Outside of work, I'm an animal lover (especially dogs! They have a special place in my heart.), an avid hiker, and a dedicated baker—I once made hundreds of macarons for a wedding. These passions inspire my creativity and fuel my attention to detail in everything I take on.
          </p>
          <p>
            I'm always excited to connect and collaborate. Feel free to reach out—I'd love to hear from you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;