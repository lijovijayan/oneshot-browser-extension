/*global chrome*/

import React, { useState } from 'react'
import { PopupWindow } from './components'
import './styles/app.scss'

function App() {
    const [windowVisible, setWindowVisible] = useState(false)
    return (
        <div className={`app-wrapper ${windowVisible ? 'show-window' : ''}`}>
            <PopupWindow onClose={() => setWindowVisible(false)} />
            <div onClick={() => setWindowVisible(true)} className="ext-button">
                Oneshot+
            </div>
        </div>
    )
}

export default App
