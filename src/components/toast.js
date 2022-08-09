import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby';

const Toast = () => {

    const [closed, setClosed] = useState(false);

    return(
        <>
            <div className={`notification-container top-right ${closed? "hidden": ''}`}>
                <div className="notification toast">
                    <button onClick={() => setClosed(true)}>
                        X
                    </button>
                    <div className="notification-image">
                        <FontAwesomeIcon className='font-awesome' icon={faInfoCircle} />
                    </div>
                    <div>
                        <p className="notification-title">Info!</p>
                        <p className="notification-message"><b>Social Networking as a Motivator for Social Gathering</b> is now up. Check <Link to="/books#social">here</Link>.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Toast;