/*global chrome*/
import React, { useEffect, useState } from 'react'
import { APIService } from '../services'

export function PopupWindow({ onClose }) {
    const [user, setUser] = useState(undefined)
    const [additionalData, setAdditionalData] = useState(undefined)
    const [loading, setLoader] = useState(false)
    useEffect(() => {
        console.log(chrome.runtime)
        chrome.runtime.onMessage.addListener((msg, sender, response) => {
            console.log(
                '========================*************************************==========================='
            )
            console.log(msg)
            console.log(
                '========================*************************************==========================='
            )
            switch (msg.type) {
                case 'user-profile': {
                    setUser(msg)
                    console.log(
                        '========================*************************************==========================='
                    )
                    console.log(msg)
                    console.log(
                        '========================*************************************==========================='
                    )
                    response(msg)
                    break
                }
                default:
                    response('unknown request')
                    break
            }
        })
        fetchUserDetails('Lijo Vijayan')
    }, [])

    async function fetchUserDetails(name) {
        try {
            setLoader(true)
            const userDetails = APIService.getUserDetails(name)
            console.log(userDetails)
            setAdditionalData(userDetails)
        } catch (err) {
            console.log(err)
        } finally {
            setLoader(false)
        }
    }
    render
    return (
        <div className={`window ${loading ? 'loading' : ''}`}>
            <div className="window-content">
                <div className="window-close" onClick={onClose}></div>
            </div>
            {user && <span>user data</span>}
            {additionalData && <span>additional data</span>}
        </div>
    )
}
