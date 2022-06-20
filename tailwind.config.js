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
                verdehamb: "#00B2BB",
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
            width: {
                fullwidthNav: "calc(100% + 3.5rem)",
                swiperUnid: "calc(100% - 180px)",
                swiperUnidXS: "calc(100% - 60px)",
            },
            aspectRatio: {
                hero: '17 / 10',
                hero2: '956 / 541',
                modalimg: '433 / 289'
            },
            backgroundImage: {
                hero: "url('../backgrounds/hero2.jpg')",
                bolinhasvertical: "url('../svgs/bg-bolinhas.svg')",
                bolinhashorizontal: "url('../svgs/bg-bolinhas-horizontal.svg')",
                pontilhadoPalavraLideranca: "url('../svgs/pontilhado-palavra.svg')",
                arrowSwiperNext: "url('../svgs/arrow-swipernext.svg')",
                arrowSwiperPrev: "url('../svgs/arrow-swiperprev.svg')",
                arrowSwiperCovid: "url('../svgs/arrow-slidecovid19.svg')",
                listSusItem: "url('../svgs/itemlistsus.svg')",
                nossasUnidades1: "url('../imgs/nossas-unidades1.jpg')",
                nossasUnidades2: "url('../imgs/nossas-unidades2.jpg')",
                pontilhadoInvestimentos: "url('../svgs/pontilhado-investimentos.svg')",
                navpontilhado: "url('../svgs/nav-pontilhado.svg')",
                
                sumario: "url('../backgrounds/sumario.jpg')",
                investimentos: "url('../backgrounds/investimentos.jpg')",
                nossasunidades: "url('../backgrounds/nossas-unidades.jpg')",
                indicadores: "url('../backgrounds/indicadores.jpg')",
                lideranca: "url('../backgrounds/lideranca.jpg')",
                indicadorestop: "url('../backgrounds/indicadores-top.jpg')",
                covid19: "url('../backgrounds/covid19.jpg')",
                modelos: "url('../backgrounds/modelo.svg')",
                modelofinal: "url('../backgrounds/modelo-final-clogo.svg')",
                modelofinallg: "url('../backgrounds/modelo-final-lg.svg')",
                modelofinalxs: "url('../backgrounds/modelo-final-xs.svg')",
                fotomodelo: "url('../imgs/foto-modelo.jpg')",
            },
            backgroundPosition: {
                postSustentabilidade: 'right 8%',
            },
            backgroundSize: {
                "sustentabilidade-lg": '75% auto',
                pontilhadoPalavraLiderancaSize: 'auto 100%',
            },
            boxShadow: {
                indicadoresbox: '0px 5px 9px 1px rgba(0,59,78,0.22)',
                covid19box: '0px 5px 15px rgba(123, 220, 224, 0.35)',
            },
            zIndex: {
                '100': '100',
            },
            translate: {
                elementTopOut: "calc((100vh + 500px) * -1)",
            },
        },
    },
    plugins: [],
};
