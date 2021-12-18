/* global chrome, tabStorage */
const SELECTOR_KEYS = {
    name: `.pv-top-card .text-heading-xlarge`,
    bio: `[id^='profileCard'][id*='ABOUT'] .pv-shared-text-with-see-more .visually-hidden`
}

const PROFILE = {
    name: '',
    bio: ''
}

setTimeout(() => {
    const name = document.querySelector(SELECTOR_KEYS.name)?.textContent
    const bio = document.querySelector(SELECTOR_KEYS.bio)?.textContent

    PROFILE.name = name
    PROFILE.bio = bio
    console.log(
        '========================*************************************==========================='
    )
    console.log({ PROFILE })
    console.log(
        '========================*************************************==========================='
    )
    chrome.runtime.sendMessage(
        {
            type: 'user-profile',
            data: PROFILE
        },
        function (response) {
            console.log(response)
        }
    )
}, 5000)
