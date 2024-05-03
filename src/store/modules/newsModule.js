export default {
    state: {
        news: [{
            id: 1,
            title: 'Comecam os treinamentos para a nova temporada',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime similique tempore rem, atque modi velit dicta a  nesciunt voluptas officia temporibus optio officiis dignissimos, tempora culpa quidem harum error at! Lorem, ipsum dolor sit amet conse ctetur adipisicing elit. Velit animi soluta harum minima ea architecto aspernatur quod reprehenderit quaerat, voluptatum laborum vel perferendis quasi, repellat sit delectus quia inventore porro!',
            date: '2024/04/24',
            img: 'news1.jpg',
            imgInfo: 'Noticia 1'

        }, {
            id: 2,
            title: 'Jogo de quarta-feira termina empatado',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime similique tempore rem, atque modi velit dicta a nesciunt voluptas officia temporibus optio officiis dignissimos, tempora culpa quidem harum error at! Lorem, ipsum dolor sit amet conse ctetur adipisicing elit. Velit animi soluta harum minima ea architecto aspernatur quod reprehenderit quaerat, voluptatum laborum vel perferendis quasi, repellat sit delectus quia inventore porro!',
            date: '2024/04/26',
            img: 'news2.jpg',
            imgInfo: 'Noticia 2'
        },
        {
            id: 3,
            title: 'A inauguração do novo estadio será na semana que vem',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime similique tempore rem, atque modi velit dicta a  nesciunt voluptas officia temporibus optio officiis dignissimos, tempora culpa quidem harum error at! Lorem, ipsum dolor sit amet conse ctetur adipisicing elit. Velit animi soluta harum minima ea architecto aspernatur quod reprehenderit quaerat, voluptatum laborum vel perferendis quasi, repellat sit delectus quia inventore porro!',
            date: '2024/05/04',
            img: 'news3.jpg',
            imgInfo: 'Noticia 3'
        }]
    },
    getters: {

        getNews(state) {
            return state.news;
        },
        getNewsFromId: state => id => {

            let notice = state.news.find(item => {
                return (item.id == id)
            });

            return notice;
        }
    }

}