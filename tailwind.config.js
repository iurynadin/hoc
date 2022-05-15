module.exports = {
    content: ["./pages/*.{html,js}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
            },
        },
        extend: {
            colors: {
                amarelolimao: "#e7fd53",
                verdeagua: "#337686",
                verdeaguaclaro: "#50aeb9",
                verdeescuro: "#153a4c",
            },
            fontFamily: {
                montserrat: ["Montserrat"],
            },
            boxShadow: {
                saibaMaisRosa1: "0px 0px 10px 2px rgba(152, 27, 27, 0.5)",
            },
            aspectRatio: {
                hero: '17 / 10',
                hero2: '956 / 541',
            },
            backgroundImage: {
                hero1: "url('../backgrounds/hero.jpg')",
            },
            backgroundPosition: {
                postSustentabilidade: 'right 8%',
            },
            backgroundSize: {
                "sustentabilidade-lg": '75% auto',
            }
        },
    },
    plugins: [],
};
