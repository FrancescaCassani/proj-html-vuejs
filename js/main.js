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
        peopleImages: [
            {
                logo1: './img/h1-blog-img-02.jpg',
                logo2: './img/h1-blog-img-03.jpg',
                logo4: './img/h1-img-01.jpg',
                logo6: './img/h1-blog-img-01.jpg',

            }
        ],
        peopleText: [
            {
                when: 'May 5, 2019',
                who: 'Amanda Doe',
                title: 'Next Investment',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quo quidem obcaecati totam iste eligendi ....',
                moreInfo: 'Read more'
            },
            {
                when: 'May 5, 2019',
                who: 'Amanda Doe',
                title: 'Next Investment',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quo quidem obcaecati totam iste eligendi ....',
                moreInfo: 'Read more'
            },
            {
                when: 'May 5, 2019',
                who: 'Amanda Doe',
                title: 'Next Investment',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quo quidem obcaecati totam iste eligendi ....',
                moreInfo: 'Read more'
            },
        ],
        logos: [
            {img: './img/h4-clients-img-03.png'},
            {img: './img/h4-clients-img-05.png'},
            {img: './img/h4-clients-img-07.png'},
            {img: './img/h4-clients-img-09.png'},
            {img: './img/h4-clients-img-01.png'},  
        ],
        logosOrange: [
            {img: './img/h4-clients-img-04-1.png'},
            {img: './img/h4-clients-img-06-1.png'},
            {img: './img/h4-clients-img-08-1.png'},
            {img: './img/h4-clients-img-10-1.png'},
            {img: './img/h4-clients-img-02.png'},  
        ],
        profileIndex: 0,
        intervalId: null,
        profiles: [
            {
                name: 'Cynthia Clark',
                image: 'h3-img-04',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nostrum nemo? Animi repellat quam sequi corporis aperiam ipsam nemo cupiditate sapiente.'
            },
            {
                name: 'Julia Roberts',
                image: 'h3-img-07',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nostrum nemo? Animi repellat quam sequi corporis aperiam ipsam nemo cupiditate sapiente.'
            },
            {
                name: 'Sharon Stone',
                image: 'h3-img-08',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nostrum nemo? Animi repellat quam sequi corporis aperiam ipsam nemo cupiditate sapiente.'
            },
        ],
    },
    // created() {
    //     this.startLoop();
    // },
    methods: {
        nextPhoto() {
          this.profileIndex += 1;
  
          if(this.profileIndex > (this.profiles.lenght - 1)) {
            this.profileIndex = 0;
          }
        },
        prevPhoto() {
          this.profileIndex -= 1;
    
          if(this.profileIndex < 0) {
            this.profileIndex = this.profiles.lenght - 1;
          }
        },
        setPhoto(index) {
          this.profileIndex = index;
        },
        startLoop() {
            this.intervalId = setInterval(() => {
              this.nextPhoto();
            }, 2500);
        }
    }
});