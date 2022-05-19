class ButtonNegociosElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {
        var icon;
        if(this.getAttribute('icon') == 'equipamento') {
            icon = 
                `<svg xmlns="http://www.w3.org/2000/svg" width="59.611" height="66.044" class="fill-verdemedio transition-all duration-300 group-hover:fill-amarelolimao2" viewBox="0 0 59.611 66.044"> <path d="M26.756,38.955a2.2,2.2,0,1,1-2.2,2.2,2.207,2.207,0,0,1,2.2-2.2m15.41-15.41a1.041,1.041,0,0,1,1.1-1.1H60.877a1.04,1.04,0,0,1,1.1,1.1v6.6a1.039,1.039,0,0,1-1.1,1.1H43.266a1.04,1.04,0,0,1-1.1-1.1ZM79.59,41.156a2.2,2.2,0,1,1-2.2-2.2,2.209,2.209,0,0,1,2.2,2.2m-2.2,18.713a1.04,1.04,0,0,1-1.1-1.1V45.449a3.743,3.743,0,0,0,2.2,0V58.768a1.04,1.04,0,0,1-1.1,1.1m-3.852-20.8-9.357-9.357V26.187L75.3,37.3a4.529,4.529,0,0,0-1.761,1.761m-11.447-.66a4.519,4.519,0,0,0-1.761,1.761l-6.715-6.715h3.523Zm4.293,3.852a2.2,2.2,0,1,1-2.2-2.2,2.207,2.207,0,0,1,2.2,2.2m-2.2,14.31a2.2,2.2,0,1,1,2.2-2.2,2.208,2.208,0,0,1-2.2,2.2m-4.733,4.292a1.062,1.062,0,0,1-1.541,0l-.221-.219a1.065,1.065,0,0,1,0-1.541l2.642-2.642a4.529,4.529,0,0,0,1.761,1.761Zm4.733-10.9c-.329,0-.77.11-1.1.11V46.44a3.743,3.743,0,0,0,2.2,0v3.633c-.329,0-.77-.11-1.1-.11m-4.4-7.156a4.094,4.094,0,0,0,1.1,2.421v6.385a4.89,4.89,0,0,0-1.1,2.422l-2.2,2.2V40.5ZM43.816,40.166a4.508,4.508,0,0,0-1.761-1.761l4.953-4.953h3.523Zm-4.953,21.9V58.658a3.748,3.748,0,0,0,2.2,0V62.07a1.1,1.1,0,1,1-2.2,0m1.1-12.108c-.331,0-.77.11-1.1.11V46.44a3.748,3.748,0,0,0,2.2,0v3.633c-.331,0-.77-.11-1.1-.11m0,6.6a2.2,2.2,0,1,1,2.2-2.2,2.207,2.207,0,0,1-2.2,2.2m0-16.511a2.2,2.2,0,1,1-2.2,2.2,2.208,2.208,0,0,1,2.2-2.2m0-10.348-9.357,9.357A4.508,4.508,0,0,0,28.846,37.3L39.964,26.187ZM26.756,59.869a1.041,1.041,0,0,1-1.1-1.1V45.449c.331,0,.77.11,1.1.11s.77-.11,1.1-.11V58.768a1.041,1.041,0,0,1-1.1,1.1M65.28,75.279v3.3H38.863v-3.3a1.041,1.041,0,0,1,1.1-1.1H64.179a1.04,1.04,0,0,1,1.1,1.1m11.008,6.6v2.2H27.857v-2.2a1.04,1.04,0,0,1,1.1-1.1H75.187a1.041,1.041,0,0,1,1.1,1.1M23.453,58.768a3.206,3.206,0,0,0,2.2,3.082v7.926h2.2V61.85a3.206,3.206,0,0,0,2.2-3.082V44.018a4.892,4.892,0,0,0,1.1-2.421l9.576-9.576a3.141,3.141,0,0,0,2.642,1.32h.66l-4.4,4.4a4.282,4.282,0,0,0-3.852,4.843,4.087,4.087,0,0,0,1.1,2.421v6.384a4.35,4.35,0,0,0,0,5.724V62.07a2.9,2.9,0,0,0,.77,2.091l-2.092,1.872v3.743h2.2V66.913l1.651-1.651a2.254,2.254,0,0,0,1.21,0l1.651,1.651v2.863h2.2V66.032l-1.87-1.872a3.477,3.477,0,0,0,.77-2.091V57.227a4.353,4.353,0,0,0,0-5.724V45.12a4.888,4.888,0,0,0,1.1-2.421l2.2-2.2V71.977h-6.6a3.243,3.243,0,0,0-3.3,3.3v3.3H29.067a3.243,3.243,0,0,0-3.3,3.3v4.4H78.6v-4.4a3.243,3.243,0,0,0-3.3-3.3H67.592v-3.3a3.243,3.243,0,0,0-3.3-3.3h-6.6v-2.2h-2.2v2.2h-6.6V38.295l3.3-3.3,3.3,3.3V58.768a3.908,3.908,0,0,0-.221,1.1H52.842L50.31,62.4l1.541,1.541,1.872-1.872h2.422l.11.11.221.221.11.109v2.423L54.714,66.8l1.541,1.541,2.532-2.532V63.39A3,3,0,0,0,61.1,62.4l3.633-3.633a4.283,4.283,0,0,0,3.852-4.843,4.087,4.087,0,0,0-1.1-2.422V45.12a4.362,4.362,0,0,0-.329-6.165,4.892,4.892,0,0,0-2.421-1.1l-4.4-4.4h.55a3.283,3.283,0,0,0,2.642-1.322L73.1,41.707a4.085,4.085,0,0,0,1.1,2.421V58.768a3.205,3.205,0,0,0,2.2,3.082v7.926h2.2V61.85a3.206,3.206,0,0,0,2.2-3.082V44.018a4.362,4.362,0,0,0-.329-6.165,4.9,4.9,0,0,0-2.421-1.1L64.179,23a3.414,3.414,0,0,0-3.3-2.752H43.266A3.415,3.415,0,0,0,39.964,23L26.206,36.754A4.285,4.285,0,0,0,22.352,41.6a4.1,4.1,0,0,0,1.1,2.421Z" transform="translate(-22.312 -20.243)" /> </svg>`;
        }else if(this.getAttribute('icon') == 'handcoin'){
            icon = 
                `<svg xmlns="http://www.w3.org/2000/svg" class="fill-verdemedio transition-all duration-300 group-hover:fill-amarelolimao2" width="76.502" height="69.887" viewBox="0 0 76.502 69.887"><g transform="translate(-26.211 -29.519)"><path d="M56.582,160.7A10.516,10.516,0,1,0,67.161,171.26,10.547,10.547,0,0,0,56.582,160.7m0,23.334a12.819,12.819,0,1,1,12.9-12.819v.047a12.881,12.881,0,0,1-12.9,12.772" transform="translate(24.168 -122.922)"/><path d="M58.715,156.865a16.558,16.558,0,1,0,.023,0Zm0,35.243A18.774,18.774,0,1,1,77.6,173.336v.045a18.843,18.843,0,0,1-18.887,18.727" transform="translate(22.034 -125.043)"/><path d="M53.321,175.078a3.709,3.709,0,0,1-3.72-3.7,1.159,1.159,0,0,1,2.317,0,1.4,1.4,0,1,0,1.46-1.336h-.057a3.686,3.686,0,1,1,3.708-3.686,1.159,1.159,0,0,1-2.317,0,1.375,1.375,0,0,0-1.367-1.382h-.023a1.382,1.382,0,1,0,0,2.765h0a3.7,3.7,0,1,1,0,7.393Z" transform="translate(27.441 -120.555)"/><path d="M52.409,165.646a1.155,1.155,0,0,1-1.159-1.151v-1.982a1.159,1.159,0,0,1,2.317,0v1.982a1.155,1.155,0,0,1-1.159,1.151" transform="translate(28.354 -121.281)"/><path d="M52.409,173.461a1.155,1.155,0,0,1-1.159-1.152v-1.98a1.159,1.159,0,0,1,2.317,0v1.98a1.155,1.155,0,0,1-1.159,1.152" transform="translate(28.354 -116.957)"/><path d="M27.853,201.367l18.782,6.461a14.7,14.7,0,0,0,11.483-.842l27.045-13.923a1.942,1.942,0,0,0,1.076-1.325,1.99,1.99,0,0,0-2.479-2.3l-20.486,5.54a4.836,4.836,0,0,1-1.865.379H44.725a1.152,1.152,0,1,1,0-2.3H61.41a2.4,2.4,0,0,0,.915-.183h.127a2.417,2.417,0,0,0-1.042-4.607H50.321a1.164,1.164,0,0,1-.8-.312c-3.232-3.04-8.482-6.679-15.2-6.679H27.853Zm23.533,9.605a17.081,17.081,0,0,1-5.516-.921l-19.558-6.727a1.148,1.148,0,0,1-.777-1.083V180.073a1.155,1.155,0,0,1,1.159-1.153H34.33c7.254,0,12.9,3.731,16.453,6.991H61.41a4.748,4.748,0,0,1,4.75,4.722A4.585,4.585,0,0,1,66,191.785l17.1-4.607a4.286,4.286,0,0,1,3.139,7.935l-27.054,13.97a16.953,16.953,0,0,1-7.8,1.889" transform="translate(14.127 -111.566)"/><path d="M20.35,178.347a1.156,1.156,0,0,0-1.159,1.152v26.546A1.156,1.156,0,0,0,20.35,207.2h8.864a1.157,1.157,0,0,0,1.16-1.153v-26.57a1.157,1.157,0,0,0-1.16-1.152Zm8.843,31.132H20.35a3.464,3.464,0,0,1-3.475-3.454V179.476a3.465,3.465,0,0,1,3.475-3.456h8.864a3.465,3.465,0,0,1,3.476,3.456v26.57a3.466,3.466,0,0,1-3.5,3.433" transform="translate(9.336 -113.172)"/></g></svg>`;
        }else if(this.getAttribute('icon') == 'medics'){
            icon = 
                `<svg xmlns="http://www.w3.org/2000/svg" class="fill-verdemedio transition-all duration-300 group-hover:fill-amarelolimao2" width="80.305" height="72.148" viewBox="0 0 80.305 72.148"><g transform="translate(-24.308 -28.388)"><path d="M28.2,315.525V308H45.138v7.529a8.318,8.318,0,0,1-8.217,8.419q-.089,0-.177,0a8.493,8.493,0,0,1-8.544-8.419m0-14.43a3.137,3.137,0,0,1,3.136-3.138H42a3.137,3.137,0,0,1,3.136,3.138v4.391H28.2Zm18.821,28.552a1.256,1.256,0,1,0,1.412-2.077,20.806,20.806,0,0,0-5.916-2.785,10.919,10.919,0,0,0,5.132-9.26V301.1A5.646,5.646,0,0,0,42,295.449H31.336A5.645,5.645,0,0,0,25.69,301.1v14.43a10.882,10.882,0,0,0,5.144,9.215,20.8,20.8,0,0,0-15.183,20.271,1.255,1.255,0,0,0,2.51,0,18.469,18.469,0,0,1,28.859-15.365" transform="translate(8.658 -257.649)"/><path d="M75.356,350.6a3.037,3.037,0,1,1-3.043-3.03h.006a3.037,3.037,0,0,1,3.037,3.03M58.837,342.6l-6.643-9.046a27.431,27.431,0,0,1,6.9-.873,26.508,26.508,0,0,1,6.424.8ZM45.919,317.622V306.957h8.088c.954,1,6.274,5.978,17.635,6.412v4.253A12.416,12.416,0,0,1,59.359,330.17H59.1c-7.266,0-13.176-5.648-13.176-12.549m0-20.7c0-2.672,2.642-5.018,5.648-5.018H66.624a4.963,4.963,0,0,1,5.019,4.905v7.642H45.919Zm25.723,13.94c-6.82-.283-11.224-2.333-13.633-3.9H71.642Zm-5.584,20.164a14.885,14.885,0,0,0,8.092-13.4v-20.7a7.447,7.447,0,0,0-7.364-7.529H51.567c-4.393,0-8.156,3.451-8.156,7.529v20.7a15.011,15.011,0,0,0,8.557,13.408,30.165,30.165,0,0,0-22.986,29.255,1.254,1.254,0,0,0,2.508,0,27.6,27.6,0,0,1,15.164-24.631,27,27,0,0,0-.8,4.692,8.131,8.131,0,0,0-6.205,8.018v9.411a4.134,4.134,0,0,0,3.765,3.763,1.254,1.254,0,1,0,0-2.508,1.834,1.834,0,0,1-1.255-1.255v-9.411c0-3.061,2.3-5.646,5.019-5.646s5.02,2.585,5.02,5.646v9.411a1.84,1.84,0,0,1-1.255,1.255,1.254,1.254,0,1,0,0,2.508,4.134,4.134,0,0,0,3.763-3.763v-9.411a8.109,8.109,0,0,0-6.329-8.036,18.642,18.642,0,0,1,1.385-5.879l8.081,11.011a1.251,1.251,0,0,0,2.025,0l8.063-11.023c1.951,3.363,2.748,8.513,3.016,10.8a5.537,5.537,0,1,0,2.51-.057,40.068,40.068,0,0,0-2.182-9.51,27.7,27.7,0,0,1,14.8,24.613,1.254,1.254,0,0,0,2.508,0,30.05,30.05,0,0,0-22.522-29.261" transform="translate(16.033 -261.002)"/><path d="M53.07,295.355H51.187v-1.883a1.254,1.254,0,1,0-2.508,0v1.883H46.8a1.255,1.255,0,1,0,0,2.51h1.883v1.881a1.254,1.254,0,1,0,2.508,0v-1.881H53.07a1.255,1.255,0,1,0,0-2.51" transform="translate(25.195 -259.438)"/></g></svg>`;
        }

        this.innerHTML = `
            <a href="#" class="group relative hover:border-amarelolimao2 h-[128px] w-[128px] rounded-full border-[3px] border-verdemedio flex justify-center items-center transition-all duration-300">
                <div class="flex justify-start items-center  p-2 absolute top-6/12 rounded-full -left-[42px] group-hover:-left-16 bg-transparent group-hover:bg-amarelolimao2 transition-all duration-300 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 fill-verdemedio group-hover:fill-azulescuro transition-all duration-300" width="34.08" height="34.08" viewBox="0 0 34.08 34.08"><path d="M19.04,32.672A13.632,13.632,0,1,1,32.672,19.04,13.65,13.65,0,0,1,19.04,32.672M19.04,2A17.04,17.04,0,1,0,36.08,19.04,17.04,17.04,0,0,0,19.04,2m1.7,8.52H17.336v6.816H10.52v3.408h6.816V27.56h3.408V20.744H27.56V17.336H20.744Z" transform="translate(-2 -2)"/></svg>
                    <span class="leading-none uppercase font-gotham_bold text-azulescuro opacity-0 group-hover:opacity-100">veja<br>mais</span>
                </div>
                ${icon}
            </a>`;
        }
    }
    window.customElements.define('wc-btn_negocios', ButtonNegociosElement);