const everlead = new Vue ({
    el: "#everlead",
    data: {
        header: [
            {text: "homes"},
            {text: "pages"},
            {text: "blog"},
            {text: "shop"},
            {text: "events"},
            {text: "elements"}
        ],
        imgHeader: {
            logo: '-02',
            logoDot: '-01'
        },
        specialties: [
            {
                logo: './svg/svg-0.svg',
                name: 'Knowing',
                text: 'lorem ipsum dopor sit amet, quis consect',
            },
            {
                logo: './svg/svg-1.svg',
                name: 'Selling',
                text: 'lorem ipsum dopor sit amet, quis consect',
            },
            {
                logo: './svg/svg-2.svg',
                name: 'Learning',
                text: 'lorem ipsum dopor sit amet, quis consect',
            },
            {
                logo: './svg/svg-3.svg',
                name: 'Contact',
                text: 'lorem ipsum dopor sit amet, quis consect',
            }
        ]
    }
});