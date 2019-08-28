
// dependencies
import React from 'react'

// components
import Header from 'Components/header'

// styles
import style from './Layout.css'

const Layout = (props) => (
    <div className={ style.Layout }>
        <Header />
            {props.children}
    </div>
)

export default Layout