import React from 'react';

const Quote: React.FC = () => {
  return (
    <div className="quote-space">
      <div id="quote">
        <p>"Great things are done by a series of small things brought together."</p>
      </div>
      <div id="author">
        <p>Vincent Van Gogh</p>
      </div>
    </div>
  );
};

export default Quote;