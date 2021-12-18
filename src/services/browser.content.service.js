// /* global chrome, tabStorage */
// const SELECTOR_KEYS = {
//     name: `.pv-top-card .text-heading-xlarge`,
//     bio: `[id^='profileCard'][id*='ABOUT'] .pv-shared-text-with-see-more .visually-hidden`
// }

// const PROFILE = {
//     name: '',
//     bio: ''
// }

// setTimeout(() => {
//     const name = document.querySelector(SELECTOR_KEYS.name).textContent
//     const bio = document.querySelector(SELECTOR_KEYS.bio).textContent

//     PROFILE.name = name
//     PROFILE.bio = bio
// }, 3000)

// // Listen for messages
// chrome.runtime.onMessage.addListener((msg, sender, response) => {
//     switch (msg.type) {
//         case 'popupInit':
//             response(tabStorage[msg.tabId])
//             break
//         default:
//             response('unknown request')
//             break
//     }
// })
