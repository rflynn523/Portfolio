import React from 'react';
import ReactGA from 'react-ga'

class Contact extends React.Component
{
    render()
    {
        // To report page view
        ReactGA.pageview('/Contact')

        return(
            <div className="borderBox">
                <h2>Contact Section</h2>
            </div>
        )

    }
}

export default Contact;