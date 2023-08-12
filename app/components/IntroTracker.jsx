"use client"
import React, { useEffect } from 'react'
import { handleIsIntro } from '@/store/actions/theme'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const IntroTracker = ({ handleIsIntro }) => {
    useEffect(() => {
        const hasExecuted = localStorage.getItem('hasExecuted');
        // console.log("hasExecuted", hasExecuted);
        if(hasExecuted==null){
            handleIsIntro(true)
            localStorage.setItem('hasExecuted', 'true');
        }

        const handleBeforeUnload = (event) => {
            // Your cleanup logic or function here
            localStorage.removeItem('hasExecuted');
      
            // Optionally, you can display a confirmation message to the user
            // event.preventDefault();
            // event.returnValue = '';
          };
      
          // Add the event listener to the 'beforeunload' event
          window.addEventListener('beforeunload', handleBeforeUnload);
      
          // Cleanup function to be executed when the component is unmounted
          return () => {
            // Remove the event listener when the component is unmounted
            window.removeEventListener('beforeunload', handleBeforeUnload);
          };
    }, [])

    return (
        <></>
    )
}

IntroTracker.propTypes = {
    handleIsIntro: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { handleIsIntro })(IntroTracker)