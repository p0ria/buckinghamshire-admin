module.exports = {
    important: true,
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['./src/**/*.{html,ts}']
    },
    theme: {
        extend: {
            textColor: {
                primary: {
                    DEFAULT: 'var(--color-primary)',
                    dark: 'var(--color-primary-dark)',
                    light: 'var(--color-primary-light)'
                },
                secondary: 'var(--color-secondary)'
            }
        },
    },
    variants: {},
    plugins: [],
};