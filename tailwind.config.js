module.exports = {
    important: true,
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['./src/**/*.{html,ts}']
    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
};