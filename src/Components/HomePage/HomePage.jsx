import React from 'react';
import './HomePage.css'; 

function HomePage() {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to Culinary Connection!</h1>
        <p>Discover how you can make a culinary connection.</p>
      </section>
      <section className="split split-reverse">
        <div className="left">
          <h2>What is a Culinary Connection?</h2>
        </div>
        <div className="right">
          <p>With Culinary Connection you can create a private recipe book for you and your family, friends, or organization. Enjoy all the benefits of having all your recipes in one easy to access and share place so that your recipes are protected.</p>
        </div>
      </section>
      <section className="split">
        <div className="left">
          <h2>How do you use Culinary Connection?</h2>
        </div>
        <div className="right">
          <p>All recipe book members have the ability to view and add recipes to their recipe book!</p>
        </div>
      </section>
      <section className="split split-reverse">
        <div className="left">
          <h2>Make use of filters!</h2>
        </div>
        <div className="right">
          <p>Using Culinary Connection, you have the ability to search all your recipes to find the right one when you need it!</p>
        </div>
      </section>
      <footer>
        <p>© Frank, Ruiyan, and Tejas.</p>
      </footer>
    </div>
  );
}

export default HomePage;
