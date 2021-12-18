/*global chrome*/
import React, { useEffect } from 'react'

export function PopupWindow({onClose}) {
    useEffect(() => {
        console.log(chrome.runtime)
        chrome.runtime.onMessage.addListener((msg, sender, response) => {
            console.log("========================*************************************===========================")
            console.log(msg);
            console.log("========================*************************************===========================")
            switch (msg.type) {
                case 'user-profile': {
                    console.log("========================*************************************===========================")
                    console.log(msg);
                    console.log("========================*************************************===========================")
                    response(msg)
                    break
                }
                default:
                    response('unknown request')
                    break
            }
        })
    }, [])
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