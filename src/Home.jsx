import React from 'react';
import socials from "./assets/data/socials.jsx";
import Card from "./Components/Card.jsx";

function Home() {
    return (
        <div>
          <Card socials={socials} />
        </div>
    );
}

export default Home;