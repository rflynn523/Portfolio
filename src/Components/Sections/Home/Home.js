import React from "react";
import ReactGA from "react-ga";

// npm run deploy to update live website

// Tracking Pages
//      (/, /Home, /Education. /Skills, /Projects)
// Tracking Events
//      Links Clicked (Home Page Icons - Home.js)
//      Skills Selected (Card.js)
//      Project Details Viewed (ProjectBox.js)
//      Links Clicked (Project Detail Links - ProjectDetailsCard.js)

// Home page component
// (App -> Home)
class Home extends React.Component {
  render() {
    // To report page view
    ReactGA.pageview("/Home");

    return (
      <div>
        <h2>Home Section</h2>

        <div>Add cool landing page here</div>
      </div>
    );
  }
}

export default Home;
