class SmallButtonNegociosElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {
        var icon;
        if(this.getAttribute('icon') == 'handicon') {
            icon = 
                `<svg xmlns="http://www.w3.org/2000/svg" class="fill-verdemedio group-hover:fill-verdehamb transition-all duration-300" width="44.961" height="41.125" viewBox="0 0 44.961 41.125">
                <g transform="translate(-14.029 -15.948)"><path d="M39.055,31.367a7.737,7.737,0,1,0-7.782-7.737,7.8,7.8,0,0,0,7.782,7.737m0-13.527a5.824,5.824,0,0,1,4.127,1.709,5.748,5.748,0,0,1,1.7,4.107,5.828,5.828,0,1,1-5.828-5.816" transform="translate(6.897 3.505)"/><path d="M39.683,35.443A11.189,11.189,0,1,0,28.428,24.255,11.255,11.255,0,0,0,39.683,35.443m0-20.432v-.305l.012.305a9.27,9.27,0,0,1,6.576,2.723,9.164,9.164,0,0,1,2.712,6.546,9.3,9.3,0,1,1-9.3-9.269" transform="translate(6.27 2.882)"/><path d="M35.638,24.617a2.446,2.446,0,0,0,1.485,2.24v.384a.976.976,0,0,0,1.953,0V26.9a2.439,2.439,0,0,0,.482-4.217.981.981,0,0,0,1-.973,2.442,2.442,0,0,0-1.478-2.238v-.413a.976.976,0,0,0-1.953,0v.413a2.429,2.429,0,0,0-.509,4.177.976.976,0,0,0-.976.973m2.473-3.408a.492.492,0,0,1,.489.5.965.965,0,0,0,.206.6,2.494,2.494,0,0,0-.708-.1.5.5,0,1,1,.012-.992m.01,2.939a.5.5,0,0,1,.065.989.664.664,0,0,0-.085-.018c-.031,0-.056.016-.087.018a.5.5,0,0,1-.289-.148.514.514,0,0,1-.132-.372.957.957,0,0,0-.187-.572,2.508,2.508,0,0,0,.715.1" transform="translate(7.86 3.988)"/><path d="M13.814,48.9h5.139a2.313,2.313,0,0,0,2.311-2.2l10.024,3.447a10.155,10.155,0,0,0,3.3.55H34.6a10.19,10.19,0,0,0,4.65-1.128l15.683-8.1a2.79,2.79,0,0,0-2.038-5.167l-9.449,2.545c.009-.082.012-.165.013-.248A3.063,3.063,0,0,0,40.4,35.561H34.354A14.579,14.579,0,0,0,24.7,31.508H21.273v-.3a2.316,2.316,0,0,0-2.32-2.308H13.814a2.317,2.317,0,0,0-2.32,2.308V46.6a2.317,2.317,0,0,0,2.32,2.308M21.273,33.48h3.416A12.816,12.816,0,0,1,33.3,37.271a.973.973,0,0,0,.665.262H40.4a1.111,1.111,0,0,1,1,.629,1.079,1.079,0,0,1,.04.837,1.048,1.048,0,0,1-.514.594.3.3,0,0,0-.118.023,1.079,1.079,0,0,1-.413.084H30.721a.972.972,0,1,0,0,1.944H40.4a3.013,3.013,0,0,0,1.16-.231L53.435,38.2a.853.853,0,0,1,.935.35.8.8,0,0,1-.343,1.186L38.349,47.814a8.26,8.26,0,0,1-6.419.47L21.273,44.619Zm-7.826-2.262a.365.365,0,0,1,.367-.363h0l5.137-.013a.365.365,0,0,1,.366.363v1.146a.761.761,0,0,0-.027.129V45.334a.9.9,0,0,0,.027.162V46.61a.365.365,0,0,1-.366.363H13.814a.365.365,0,0,1-.367-.363Z" transform="translate(2.535 6.373)"/></g></svg>`;
        }else if(this.getAttribute('icon') == 'gear'){
            icon = 
                `<svg xmlns="http://www.w3.org/2000/svg" class="fill-verdemedio group-hover:fill-verdehamb transition-all duration-300" width="47.104" height="47.106" viewBox="0 0 47.104 47.106"><g transform="translate(-12.584 -12.669)"><path d="M31.87,116.46a11.222,11.222,0,1,0,11.222,11.222A11.234,11.234,0,0,0,31.87,116.46m0,20.068a8.846,8.846,0,1,1,8.847-8.847,8.856,8.856,0,0,1-8.847,8.847" transform="translate(4.424 -91.303)"/><path d="M56.465,126.131A1.183,1.183,0,0,0,57.5,124.71a23.86,23.86,0,0,0-3.309-7.976,1.174,1.174,0,0,0-.8-.523,1.154,1.154,0,0,0-.928.246,3.673,3.673,0,0,1-5.167-5.16,1.181,1.181,0,0,0-.275-1.735,23.881,23.881,0,0,0-7.974-3.308,1.182,1.182,0,0,0-1.421,1.031,3.672,3.672,0,0,1-7.3.006,1.179,1.179,0,0,0-1.421-1.035,23.86,23.86,0,0,0-7.974,3.306,1.18,1.18,0,0,0-.276,1.733,3.672,3.672,0,0,1-5.163,5.164,1.156,1.156,0,0,0-.929-.247,1.176,1.176,0,0,0-.805.524,23.843,23.843,0,0,0-3.306,7.973,1.178,1.178,0,0,0,1.031,1.422,3.671,3.671,0,0,1,0,7.3,1.182,1.182,0,0,0-1.031,1.422,23.877,23.877,0,0,0,3.309,7.974,1.178,1.178,0,0,0,1.731.275,3.672,3.672,0,0,1,5.165,5.162A1.181,1.181,0,0,0,20.923,150a23.835,23.835,0,0,0,7.974,3.306,1.178,1.178,0,0,0,1.42-1.029,3.672,3.672,0,0,1,7.3,0,1.192,1.192,0,0,0,.48.828,1.169,1.169,0,0,0,.695.226l.246-.027A23.83,23.83,0,0,0,47.015,150a1.18,1.18,0,0,0,.276-1.733,3.673,3.673,0,0,1,5.164-5.164,1.166,1.166,0,0,0,.929.247,1.18,1.18,0,0,0,.8-.524,23.859,23.859,0,0,0,3.306-7.972,1.182,1.182,0,0,0-1.029-1.423h0a3.671,3.671,0,0,1,0-7.3m-3.3-8.737h0l-.006,0,0,0M38.787,107.44h0l0,.01v-.011m-17.206,3.139,0,0,0,0Zm7.569,41.543h0l0-.008v.01m17.2-3.138-.008-.017.011.016ZM54.91,135.5a21.479,21.479,0,0,1-2.1,5.052,6.038,6.038,0,0,0-8.08,8.08,21.5,21.5,0,0,1-5.052,2.1,6.036,6.036,0,0,0-11.426,0,21.521,21.521,0,0,1-5.053-2.1,6.037,6.037,0,0,0-8.079-8.08,21.479,21.479,0,0,1-2.1-5.052,6.038,6.038,0,0,0,0-11.429,21.491,21.491,0,0,1,2.1-5.051,6.037,6.037,0,0,0,8.079-8.08,21.448,21.448,0,0,1,5.053-2.1,6.036,6.036,0,0,0,11.426,0,21.478,21.478,0,0,1,5.052,2.1,6.038,6.038,0,0,0,8.08,8.08,21.522,21.522,0,0,1,2.1,5.051,6.038,6.038,0,0,0,0,11.429" transform="translate(2.167 -93.56)"/><path d="M30.629,125.908h-.114a1.6,1.6,0,1,1,1.609-1.6,1.187,1.187,0,1,0,2.374,0,3.964,3.964,0,0,0-2.8-3.79v-.207a1.187,1.187,0,1,0-2.374,0v.207a3.962,3.962,0,0,0-2.8,3.79,4.007,4.007,0,0,0,4.095,3.973,1.6,1.6,0,1,1-1.606,1.6,1.188,1.188,0,0,0-2.376,0,4,4,0,0,0,2.683,3.756v.242a1.187,1.187,0,1,0,2.374,0V133.7a3.969,3.969,0,0,0-1.074-7.794" transform="translate(5.564 -90.873)"/></g></svg>`;
        }else if(this.getAttribute('icon') == 'heart'){
            icon = 
                `<svg xmlns="http://www.w3.org/2000/svg" class="fill-verdemedio group-hover:fill-verdehamb transition-all duration-300" width="49.563" height="44.75" viewBox="0 0 49.563 44.75"><g transform="translate(-12.519 -15.488)"><path d="M46.175,204.813a16.49,16.49,0,0,0-11.028,4.3c-3.494-3.219-6.789-4.837-9.795-4.837a14.724,14.724,0,0,0-10.614,4.481,15.548,15.548,0,0,0-4.344,11.786,1.149,1.149,0,1,0,2.295-.138,13.258,13.258,0,0,1,3.69-10.052,12.45,12.45,0,0,1,8.973-3.781c2.553,0,5.634,1.682,8.9,4.86a1.284,1.284,0,0,0,1.8,0,14.38,14.38,0,0,1,10-4.321h.087a10.711,10.711,0,0,1,7.763,3.242,13.341,13.341,0,0,1,0,18.441L35.456,246.584a.511.511,0,0,1-.716,0L22.117,234.391a1.148,1.148,0,0,0-1.6,1.653l12.623,12.192a2.8,2.8,0,0,0,3.907,0l18.51-17.815a15.629,15.629,0,0,0,0-21.671,12.956,12.956,0,0,0-9.386-3.936" transform="translate(2.155 -188.792)"/><path d="M23.175,227.979a1.149,1.149,0,0,0,2.043-.2l3.339-8.606,3.081,12.2a1.147,1.147,0,0,0,.981.861h.132a1.147,1.147,0,0,0,1.015-.614l3.826-7.333,1.463,2.611a1.149,1.149,0,0,0,1,.574h5.33a1.147,1.147,0,1,0,0-2.295H40.738l-2.174-3.879a1.154,1.154,0,0,0-2.043.092l-3.442,6.547-3.173-12.772a1.147,1.147,0,0,0-2.18-.132L23.9,224.852,21.6,221.174a1.129,1.129,0,0,0-1.946.034L17.15,225.27H13.082a1.147,1.147,0,1,0,0,2.295l4.705-.028a1.146,1.146,0,0,0,.975-.574l1.871-3.035Z" transform="translate(2.064 -186.31)"/></g></svg>`;
        }else if(this.getAttribute('icon') == 'star'){
            icon = 
                `<svg xmlns="http://www.w3.org/2000/svg" class="fill-verdemedio group-hover:fill-verdehamb transition-all duration-300" width="40.868" height="38.596" viewBox="0 0 40.868 38.596"><path d="M53.673,314.3a1.394,1.394,0,0,0-.862-.432l-12.678-1.41-.072-.158-5.2-11.338a1.392,1.392,0,0,0-2.52,0l-5.268,11.494L14.4,313.87a1.375,1.375,0,0,0-.929.514,1.345,1.345,0,0,0-.288,1,1.363,1.363,0,0,0,.438.849l9.42,8.515-.034.171-2.531,12.2a1.34,1.34,0,0,0,.2,1.02,1.379,1.379,0,0,0,.882.593,1.408,1.408,0,0,0,.964-.151l11.091-6.238,11.09,6.238a1.392,1.392,0,0,0,.663.182,1.377,1.377,0,0,0,1.41-1.345,1.292,1.292,0,0,0-.031-.3l-2.566-12.37.128-.117,9.293-8.4a1.357,1.357,0,0,0,.079-1.93m-11.955,8.949a1.367,1.367,0,0,0-.42,1.288l2.113,10.172-9.12-5.129a1.41,1.41,0,0,0-1.372,0L23.8,334.711l2.11-10.171a1.362,1.362,0,0,0-.42-1.289l-7.759-7,10.433-1.157a1.39,1.39,0,0,0,1.107-.795l4.334-9.459,4.331,9.46a1.391,1.391,0,0,0,1.107.793l10.434,1.157Z" transform="translate(-13.17 -300.165)"/></svg>`;
        }else if(this.getAttribute('icon') == 'estetoscopio'){
            icon = 
                `<svg xmlns="http://www.w3.org/2000/svg" class="fill-verdemedio group-hover:fill-verdehamb transition-all duration-300" width="28.939" height="42.137" viewBox="0 0 28.939 42.137"><g transform="translate(-21.909 -16.978)"><path d="M38.981,421.5a1.271,1.271,0,1,0-1.271,1.271,1.272,1.272,0,0,0,1.271-1.271" transform="translate(8.021 -374.635)"/><path d="M44.954,399.023a2.592,2.592,0,0,0-2.53-2.038h-.658a3.25,3.25,0,1,0,0,6.5h.658a2.583,2.583,0,0,0,2.03-.984v10.273a4.014,4.014,0,0,1-4.008,4.009H37.023a2.594,2.594,0,0,0-2.517-1.981H30.547a2.6,2.6,0,0,0-2.518,1.981H24.608a4.015,4.015,0,0,1-4.011-4.009l.045-10.217a2.588,2.588,0,0,0,1.985.928h.659a3.25,3.25,0,1,0,0-6.5h-.659a2.593,2.593,0,0,0-2.53,2.038,2.6,2.6,0,0,0-2.04,2.531v11.219a6.558,6.558,0,0,0,6.551,6.549h3.421a2.6,2.6,0,0,0,2.518,1.98h.709v11.928a5.889,5.889,0,1,0,11.778,0V431.7a5.231,5.231,0,1,0-6.445-4.329A5.261,5.261,0,0,0,40.5,431.7v1.532a3.349,3.349,0,0,1-6.7,0V421.3h.709a2.594,2.594,0,0,0,2.517-1.98h3.422a6.557,6.557,0,0,0,6.548-6.549V401.555a2.6,2.6,0,0,0-2.04-2.531m-2.48.552v1.319l-.708.05a.71.71,0,1,1,0-1.419Zm-7.918,17.819-.05,1.369H30.547a.049.049,0,0,1-.05-.05l.05-1.369Zm-11.98-16.5v-1.319l.05-.05h.659a.71.71,0,1,1,0,1.419Zm16.5,25.738a2.689,2.689,0,1,1,2.69,2.69,2.692,2.692,0,0,1-2.69-2.69" transform="translate(3.852 -380.007)"/></g></svg>`;
        }else if(this.getAttribute('icon') == 'apple'){
            icon = 
                `<svg xmlns="http://www.w3.org/2000/svg" class="fill-verdemedio group-hover:fill-verdehamb transition-all duration-300" width="39.764" height="48.244" viewBox="0 0 39.764 48.244"><path d="M39.167,499.5h-.023a14.163,14.163,0,0,0-3.43.421,11.951,11.951,0,0,1,2.158-5.237,11.256,11.256,0,0,1,2.353-2.445,1.428,1.428,0,0,0-1.6-2.362A13.256,13.256,0,0,0,35.4,493.21a9.444,9.444,0,0,0-11.74-4.335,9.509,9.509,0,0,0-1.463.719,1.429,1.429,0,0,0-.677,1.4,9.429,9.429,0,0,0,10.508,8.217,9.2,9.2,0,0,0,.93-.161q-.115.633-.178,1.273a14.145,14.145,0,0,0-4.749-.817A14.32,14.32,0,0,0,13.7,513.8c0,7.76,6.042,22.669,14.3,22.67h.02a14.209,14.209,0,0,0,5.212-.986.958.958,0,0,1,.7,0,14.186,14.186,0,0,0,5.208.986h.021c8.262,0,14.3-14.909,14.3-22.669a14.315,14.315,0,0,0-14.3-14.3m-4.193,33.325a3.8,3.8,0,0,0-2.789,0,11.325,11.325,0,0,1-4.165.789H28c-2.577,0-5.433-2.622-7.836-7.193-2.16-4.09-3.61-9.161-3.61-12.622a11.454,11.454,0,0,1,11.45-11.446h.009a11.407,11.407,0,0,1,4.456.906,2.841,2.841,0,0,0,2.1.043l.118-.045A11.451,11.451,0,0,1,50.6,513.8c0,3.459-1.449,8.53-3.608,12.622-2.407,4.571-5.264,7.193-7.836,7.193h-.01a11.369,11.369,0,0,1-4.173-.789m-1.551-36.915a6.622,6.622,0,0,1-5.414-.155h0a6.6,6.6,0,0,1-3.465-4.161,6.582,6.582,0,0,1,8.412,3.107,6.614,6.614,0,0,1,.469,1.21" transform="translate(-13.701 -488.228)"/></svg>`;
        }else if(this.getAttribute('icon') == 'atom'){
            icon = 
                `<svg xmlns="http://www.w3.org/2000/svg" class="fill-verdemedio group-hover:fill-verdehamb transition-all duration-300" width="42.215" height="47.379" viewBox="0 0 42.215 47.379"><path d="M54.251,596.8c-1.485-2.581-5.411-3.308-11.07-2.057a3.423,3.423,0,0,0-2.132-1.24c-1.748-5.517-4.338-8.547-7.315-8.547-3.283,0-6.111,3.7-7.8,10.19-6.47-1.753-11.087-1.159-12.713,1.653s.166,7.1,4.921,11.836c-4.772,4.708-6.565,9.009-4.921,11.856.994,1.726,3.155,2.638,6.269,2.638a26.322,26.322,0,0,0,6.455-.991c1.714,6.491,4.537,10.2,7.792,10.2,3,0,5.514-2.913,7.276-8.433a3.443,3.443,0,0,0,2.231-1.33,23.476,23.476,0,0,0,4.76.578c3.083,0,5.243-.92,6.249-2.66,1.627-2.818-.171-7.116-4.933-11.845,4.759-4.732,6.557-9.029,4.935-11.845M29.039,616.78c.531.305,1.057.594,1.582.874-.89.38-1.791.732-2.695,1.056-.175-.95-.321-1.906-.438-2.861q.76.47,1.551.931m14.876-19.426c4.141-.891,7.185-.594,7.987.8h0c.779,1.349-.347,4.529-4.556,8.662a52.043,52.043,0,0,0-4.45-3.461c-.1-1.189-.247-2.383-.437-3.626a3.428,3.428,0,0,0,1.455-2.375m-.823,9.482c.77.58,1.526,1.185,2.259,1.809-.7.6-1.457,1.2-2.259,1.806q.029-.9.029-1.808t-.029-1.808m-16.006.237a3.411,3.411,0,0,0,2.052-3.455c.411-.254.828-.507,1.258-.754,1.058-.61,2.155-1.2,3.347-1.786,1.14.566,2.23,1.151,3.327,1.786,1.058.61,2.112,1.263,3.214,1.992.087,1.363.128,2.606.128,3.79,0,1.167-.042,2.409-.129,3.791-1.112.735-2.165,1.388-3.212,1.992-1.075.62-2.168,1.206-3.328,1.783-1.213-.6-2.311-1.184-3.346-1.783-1.074-.621-2.13-1.277-3.219-2-.082-1.307-.122-2.549-.122-3.786,0-.528.013-1.045.031-1.572m11.341-6.558c-.525-.3-1.047-.591-1.566-.869q.538-.227,1.073-.439a3.477,3.477,0,0,0,1.866,1.062c.059.386.112.774.161,1.167-.5-.311-1.011-.619-1.534-.92m-1.559,17.129q.776-.419,1.557-.869t1.533-.918c-.054.432-.112.858-.176,1.274a3.421,3.421,0,0,0-1.766.98q-.571-.223-1.149-.467m.2-21.014c-1.16.45-2.256.919-3.333,1.426a51.363,51.363,0,0,0-5.2-2.109c1.316-5.052,3.335-8.283,5.2-8.283,1.607,0,3.386,2.479,4.682,6.5a3.436,3.436,0,0,0-1.351,2.463m-8.025,3.879c-.409.236-.8.476-1.194.716a3.22,3.22,0,0,0-.29-.206c.111-.834.243-1.648.391-2.434.9.321,1.794.671,2.675,1.046-.526.283-1.053.574-1.582.878m-4.663,9.946c-.764-.575-1.516-1.177-2.247-1.8.641-.548,1.323-1.1,2.04-1.649.067.032.134.062.2.09-.016.51-.028,1.023-.028,1.545q0,.919.032,1.811m.587-6.532a.739.739,0,1,1,.74.738.747.747,0,0,1-.74-.738m-.085-3.342a3.406,3.406,0,0,0-2.459,4.359c-.809.621-1.578,1.249-2.3,1.872-4.211-4.13-5.339-7.307-4.561-8.656s4.1-1.961,9.778-.391c-.172.9-.326,1.848-.459,2.816m-4.744,9.907a52.058,52.058,0,0,0,4.435,3.447,51.884,51.884,0,0,0,.769,5.588c-5.672,1.572-8.992.957-9.778-.391-.931-1.617.858-4.98,4.573-8.644m13.579,8.732c1.089.509,2.208.987,3.337,1.427a3.448,3.448,0,0,0,1.333,2.562c-1.289,3.969-3.053,6.415-4.649,6.415-1.555,0-3.748-2.564-5.23-8.275a52.181,52.181,0,0,0,5.209-2.129m9.187-5.286a51.053,51.053,0,0,0,4.45-3.463c4.208,4.138,5.333,7.316,4.555,8.661-.81,1.4-3.854,1.7-8.007.8a3.422,3.422,0,0,0-1.451-2.273c.2-1.245.347-2.495.453-3.725M39.762,596.9a.739.739,0,1,1,.74.74.74.74,0,0,1-.74-.74m.74,22.856a.739.739,0,1,1-.74.74.74.74,0,0,1,.74-.74" transform="translate(-12.622 -584.954)"/></svg>`;
        }

        this.innerHTML = `
                <div class="group cursor-pointer hover:translate-x-4 w-[73px] h-[73px] rounded-full flex justify-center items-center border-[3px] border-verdemedio hover:border-verdehamb transition-all duration-300">
                    ${icon}
                </div>            
                `;
                /* </div> */
        }
    }
    window.customElements.define('wc-btn_smallball', SmallButtonNegociosElement);