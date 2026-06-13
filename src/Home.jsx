import React from 'react';
import socials from "./assets/data/socials.jsx";
import Card1 from "./Components/Card1.jsx";

function Home() {
    return (
        <div>
          <Card1 socials={socials} />
        </div>
    );
}

export default Home;