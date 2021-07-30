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
            },
            borderColor: {
                DEFAULT: 'var(--color-border)'
            },
            spacing: {
                '128': '32rem',
                '132': '34rem',
                '160': '40rem'
            }
        },
    },
    variants: {},
    plugins: [],
};