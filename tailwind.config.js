module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                card: {
                    shadow: '#020c1bb3'
                }
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}
