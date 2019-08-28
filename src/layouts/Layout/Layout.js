
// dependencies
import React from 'react'

// components
import Header from 'Components/header'
import Footer from 'Components/footer'

// styles
import style from './Layout.css'

const Layout = (props) => (
    <div className={ style.Layout }>
        <Header />
            <div className={ style.Main }>
                {props.children}
            </div>
        <Footer />
    </div>
)

export default Layout