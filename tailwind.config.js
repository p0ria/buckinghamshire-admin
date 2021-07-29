module.exports = {
    important: true,
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['./src/**/*.{html,ts}']
    },
    theme: {
        extend: {
            textColor: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)'
            }
        },
    },
    variants: {},
    plugins: [],
};