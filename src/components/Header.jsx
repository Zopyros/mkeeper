import React, { useState } from 'react';

function Header() {
  const [isBlack, setIsBlack] = useState(false);

  const handleClick = () => {
    setIsBlack(!isBlack);
  };

  const headerStyle = {
    color: isBlack ? 'black' : 'white',
  };

  return (
    <header>
      <h1 style={headerStyle} onClick={handleClick}>
        Mkeeper
      </h1>
    </header>
  );
}

export default Header;