// ============================================================
// layout.js
//
// Main layout component
// ============================================================

// dependencies
import React from 'react'
import PropTypes from 'prop-types'

// components
import Header from 'Components/header'
import Footer from 'Components/footer'

// styles
import style from './Layout.css'

const Layout = ({ children }) => (
    <div className={style.Layout}>
        <Header />
        <div className={style.Main}>{children}</div>
        <Footer />
    </div>
)

Layout.propTypes = {
    children: PropTypes.isRequired,
}

export default Layout
