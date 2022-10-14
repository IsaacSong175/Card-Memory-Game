export default ({
    name: 'app',
    data: {
        cards: [
            {
                name: 'Apple',
                img: 'apple.jpg',

            },
            {
                name: 'Banana',
                img: 'banana.png',

            },
            {
                name: 'Orange',
                img: 'orange.jpg',

            },
            {
                name: 'Pineapple',
                img: 'pineapple.jpg',

            },
            {
                name: 'Strawberry',
                img: 'strawberry.jpg',

            },
            {
                name: 'watermelon',
                img: 'watermelon.png',

            },
        ],
    },
    created() {
        this.cards.forEach((card) => {
            Vue.set(card, 'isFlipped', false)
        });
    },

    methods: {
        flipCard(card) {
            card.isFlipped = true;
        }
    }
});

