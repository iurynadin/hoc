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
                amarelolimao2: "#E2FE0A",
                amarelolimao3: "#C6E300",
                amarelopastel: "#eaff90",
                verdeagua: "#337686",
                verdeaguaclaro: "#50aeb9",
                verdehamb: "#00b2bb",
                verdemedio: "#007889",
                verdeescuro: "#153a4c",
                azulescuro: "#003B4E",
                cinza: "#767676",
                btnStartFill: "rgba(0,59,78,0.56)",
                btnStartHoverFill: "rgba(226,254,10,0.56)",
                btnStartBorder: "rgba(112,112,112,0.56)",
            },
            fontFamily: {
                montserrat: ["Montserrat"],
                gotham_book_italic: ["Gotham-book-italic"],
                gotham_extra_light: ["Gotham-extra"],
                gotham_light: ["Gotham-light"],
                gotham_book: ["Gotham-book"],
                gotham_medium: ["Gotham-medium"],
                gotham_bold: ["Gotham-bold"]
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
                pontilhadoPalavraLideranca: "url('../svgs/pontilhado-palavra.svg')",
            },
            backgroundPosition: {
                postSustentabilidade: 'right 8%',
            },
            backgroundSize: {
                "sustentabilidade-lg": '75% auto',
                pontilhadoPalavraLiderancaSize: 'auto 100%',
            },
            zIndex: {
                '100': '100',
            }
        },
    },
    plugins: [],
};
