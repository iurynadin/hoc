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
                amarelopastel: "#eaff90",
                verdeagua: "#337686",
                verdeaguaclaro: "#50aeb9",
                verdehamb: "#00b2bb",
                verdemedio: "#007889",
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
                bolinhasvertical: "url('../svgs/bg-bolinhas.svg')",
                bolinhashorizontal: "url('../svgs/bg-bolinhas-horizontal.svg')",
            },
            backgroundPosition: {
                postSustentabilidade: 'right 8%',
            },
            backgroundSize: {
                "sustentabilidade-lg": '75% auto',
            },
            zIndex: {
                '100': '100',
            }
        },
    },
    plugins: [],
};
