import React from 'react';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container my-5">
        <h2>Upcoming Events</h2>
        <p>Stay tuned for our upcoming school events and activities!</p>

        <h2>Recent News</h2>
        <p>Catch up on the latest updates from the school.</p>

        <h2>Mission Statement</h2>
        <p>Our mission is to foster academic excellence and character development.</p>
      </div>
    </>
  );
};

export default Home;
