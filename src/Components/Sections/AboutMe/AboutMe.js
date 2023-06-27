import React from 'react';
import ReactGA from 'react-ga'

class AboutMe extends React.Component
{
    render()
    {
        // To report page view
        ReactGA.pageview('/AboutMe')

        return(
            <div className="borderBox">
                <h2>About Me Section</h2>
            </div>
        )

    }
}

export default AboutMe;