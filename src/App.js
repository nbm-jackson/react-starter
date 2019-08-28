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

const App = () => (
    <Layout>
        React App
    </Layout>
)

export default hot(module)(App)