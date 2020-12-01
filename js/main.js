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
        ],
        events: [
            {
                day: 07,
                year: 'Jan, 2022',
                coaching: 'Melbourne Coaching',
                time: '9:00 am - 5:00 pm, Jan 7, 2022',
                location: 'Cambridge, MA 02138, USA',
                moreInfo: 'Read more'
            },
            {
                day: 11,
                year: 'Jan, 2022',
                coaching: 'Melbourne Coaching',
                time: '9:00 am - 5:00 pm, Jan 11, 2022',
                location: 'Cambridge, MA 02138, USA',
                moreInfo: 'Read more'
            },
            {
                day: 21,
                year: 'Jan, 2022',
                coaching: 'Melbourne Coaching',
                time: '9:00 am - 5:00 pm, Jan 21, 2022',
                location: 'Cambridge, MA 02138, USA',
                moreInfo: 'Read more'
            }
        ],
        news: [
            {
                // logo: './img/h1-blog-img-02.jpg',
                // logo1: './img/h1-blog-img-03.jpg',
                day: 'May 5, 2019',
                name: 'Amanda Doe',
                title: 'Next Investment',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quo quidem obcaecati totam iste eligendi ....',
                moreInfo: 'Read more'
            },
            {
                // logo: '/img/h1-blog-img-03.jpg',
                // logo1: './img/h1-img-01.jpg',
                day: 'May 5, 2019',
                name: 'Amanda Doe',
                title: 'Next Investment',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quo quidem obcaecati totam iste eligendi ....',
                moreInfo: 'Read more'
            },
            {
                // logo: './img/h1-img-01.jpg',
                // logo1: './img/h1-blog-img-01.jpg"',
                day: 'May 5, 2019',
                name: 'Amanda Doe',
                title: 'Next Investment',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quo quidem obcaecati totam iste eligendi ....',
                moreInfo: 'Read more'
            }
        ]
    }
});