// /* global chrome, tabStorage */
// const SELECTOR_KEYS = {
//     name: '',
//     bio: `[id^='profileCard'][id*='ABOUT'] .pv-shared-text-with-see-more .visually-hidden`
// }

// chrome.runtime.onMessage.addListener((msg, sender, response) => {
//     switch (msg.type) {
//         case 'popupInit': {
//             const node1 = document.querySelector("id^='profileCard']")
//             // const node = document.querySelector(SELECTOR_KEYS.bio)
//             console.log(node1)
//             // console.log(node)
//             // console.log(node?.textContent)
//             console.log(msg)
//             console.log('popup initialized')
//             response({
//                 response: 'hello world'
//             })
//             break
//         }
//         default:
//             response('unknown request')
//             break
//     }
// })
