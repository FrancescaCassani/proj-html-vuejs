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
        logos: [
            {img: './img/h4-clients-img-03.png'},
            {img: './img/h4-clients-img-05.png'},
            {img: './img/h4-clients-img-07.png'},
            {img: './img/h4-clients-img-09.png'},
            {img: './img/h4-clients-img-01.png'},  
        ]
    //     images: [
    //         "./img/h3-img-04.png",  //0
    //         "./img/h3-img-07.png",  //1
    //         "./img/h3-img-08.png",  //2
    //     ],
    //     indexPhoto: 0,
    // },
    // methods: {
    //   nextPhoto() {
    //     this.indexPhoto += 1;

    //     if(this.indexPhoto > (this.photos.lenght - 1)) {
    //       this.indexPhoto = 0;
    //       }
    //   },
    //   prevPhoto() {
    //     this.indexPhoto -= 1;
  
    //     if(this.indexPhoto < 0) {
    //       this.indexPhoto = this.photos.lenght - 1;
    //     }
    //   },
    //   setPhoto(index) {
    //     console.log(index);
  
    //     this.indexPhoto = index;
    //   },
    }
});