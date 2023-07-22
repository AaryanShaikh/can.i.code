"use client"
import React, { useEffect } from 'react'
import { handleIsIntro } from '@/store/actions/theme'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { message } from 'antd'

const IntroTracker = ({ handleIsIntro }) => {
    message.info("i was called")
    useEffect(() => {
        handleIsIntro(true)
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