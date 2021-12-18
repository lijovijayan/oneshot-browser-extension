/*global chrome*/

import React, { useEffect, useState } from 'react'
import './styles/app.scss'

function Window({onClose}) {
    return (
        <div className="window">
            <div className="window-content">
                <div
                    className="window-close"
                    onClick={onClose}
                ></div>
            </div>
        </div>
    )
}

function App() {
    const [windowVisible, setWindowVisible] = useState(false)
    useEffect(() => {}, [])
    return (
        <div className={`app-wrapper ${windowVisible ? 'show-window' : ''}`}>
            hello world !
            <Window onClose={() => setWindowVisible(false)}/>
            <div onClick={() => setWindowVisible(true)} className="ext-button">
                Oneshot+
            </div>
        </div>
    )
}

export default App
