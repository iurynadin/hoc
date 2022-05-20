class TitleModeloNegocioElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {

        const sublabel = (this.getAttribute('sublabel')) 
            ? `<span class="font-gotham_light text-lg text-azulescuro">${this.getAttribute('sublabel')}</span>`
            : "";

        const addClass = (this.getAttribute('addclass')) ? this.getAttribute('addclass') : "";

        this.innerHTML = `
            <div class="flex flex-row justify-start items-start  ${addClass}">
                <img src="./svgs/itemball-modelo.svg" class="w-10 relative z-[1]" alt="">
                <div class="ml-3 md:ml-6 pt-1">
                    <div class="uppercase font-gotham_bold text-[20px] text-azulescuro leading-none">${this.getAttribute('label')}</div>
                    ${sublabel}
                </div>
            </div>
        `;
        }
    }
    window.customElements.define('wc-title-mnegocio', TitleModeloNegocioElement);