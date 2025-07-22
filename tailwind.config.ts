import type { Config } from 'tailwindcss'
const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
                colors: {
                        // Cores primárias
                        red: '#FF0000',    // Vermelho
                        green: '#32CD32',  // Verde
                        blue: '#00BFFF',   // Azul
                        yellow: '#FFFF00', // Amarelo
                        lilac: '#C8A2C8',  // Lilás
                        pink: '#FF1493',   // Rosa
                        orange: '#FF6F00', // Laranja
                        golden: '#FFD700', // Ouro
                        // Cores sucundárias
                        purple: '#7E22CE',   // Roxo
                        teal: '#40E0D0',     // Turquesa
                        brown: '#8B4513',    // Marrom
                        silver: '#C0C0C0',   // Prata
                        copper: '#B87333',   // Cobre
                        amber: '#FFBF00',    // Âmbar
                        indigo: '#4B0082',   // Índigo
                        lavender: '#E6E6FA', // Lavanda
                        mint: '#98FF98',     // Menta
                        coral: '#FF7F50',    // Coral
                        slate: '#708090',    // Ardósia
                        ivory: '#FFFFF0',    // Marfim
                        olive: '#808000',    // Oliva
                        maroon: '#800000',   // Bordeaux
                        peach: '#FFE5B4',    // Pêssego
                        graphite: '#383838', // Grafite
                },
                borderRadius: {
                        small: '0.25rem', // 2px
                        medium: '0.5rem', // 4px
                        large: '1rem',   // 8px
                },
                fontFamily: {
                        sans: ['Inter', 'Helvetica', 'sans-serif'],
                        serif: ['Merriweather', 'serif'],
                        mono: ['Fira Code', 'monospace'],
                }
        },
    },
    plugins: [],
}

export default config