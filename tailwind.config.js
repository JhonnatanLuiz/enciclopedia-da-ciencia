/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#06b6d4',
                secondary: '#8b5cf6',
                danger: '#ef4444',
                success: '#10b981',
                warning: '#f59e0b',
                // Dark mode colors
                backgroundDark: '#0f172a',
                surfaceDark: '#1e293b',
                textDark: '#f1f5f9',
            },
            fontFamily: {
                sans: ['Segoe UI', 'Roboto', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                'spin-slower': 'spin 18s linear infinite',
                'spin-slowest': 'spin 24s linear infinite',
                'spin-reverse': 'spin-reverse 15s linear infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
            },
            keyframes: {
                'spin-reverse': {
                    from: { transform: 'rotate(360deg)' },
                    to: { transform: 'rotate(0deg)' },
                },
            },
        },
    },
    plugins: [],
}
