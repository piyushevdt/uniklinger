import React, { useState } from 'react';
import "./privacy-policy.css";

import { useEffect } from 'react';
import NotFound from "../assets/images/notfound.svg"
const NotFoundPage = () => {
    const [screenWidth, setScreenWidth] = useState(0)
    useEffect(() => {
        // Create a new ResizeObserver instance
        const resizeObserver = new ResizeObserver((entries) => {
          for (let entry of entries) {
            setScreenWidth(entry.contentRect.width);
          }
        });
    
        // Start observing the selected element
        resizeObserver.observe(document.body);
      }, [screenWidth]);
  return (
 <div className='centerImage'>
     <img
                              src={NotFound}
                              alt="Not Found"
                              description="Not Found"
                          

                            />

    </div>
  )
}

export default NotFoundPage