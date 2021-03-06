// ============================================================
// app.js
//
// Main App component
// ============================================================

// dependencies
import React from 'react'
import { hot } from 'react-hot-loader'

// layouts
import Layout from 'Layouts/Layout'

// styles
import './styles/App.css'

// icons
import icon from 'Images/react-logo.svg'

const App = () => (
    <Layout>
        <img style={{ height: '5rem' }} src={icon} alt="React." />
        <h1>This is your React App</h1>
        <p>Happy hacking!</p>
    </Layout>
)

export default hot(module)(App)
