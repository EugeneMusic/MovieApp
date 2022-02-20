let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b6e3d9b89131c14e442fabf8b936c2c';

document.getElementById('search').addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        url = `https://api.themoviedb.org/3/search/movie?api_key=6b6e3d9b89131c14e442fabf8b936c2c&query=${this.value}`;
        hideData();
        getData();
    }
});

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    showData(data);
}
getData();

function hideData() {
    const hide = document.querySelectorAll('.card');
    hide.forEach(elem => elem.remove());
}

const main = document.querySelector('.main');

function showData(data) {
    data.results.map((element, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const info = document.createElement('div');
        info.classList.add('info');

        const name = document.createElement('h3');
        name.classList.add('name');
        name.textContent = `${data.results[index].original_title}`;

        const rate = document.createElement('span');
        rate.classList.add('rate');
        rate.textContent = `${data.results[index].vote_average}`;
        let rating = rate.textContent;
        if (+rating < 5) {
            rate.classList.add('red');
        }
        if (+rating >= 5 && +rating < 8) {
            rate.classList.add('orange');
        }
        if (+rating >= 8) {
            rate.classList.add('green');
        }

        const overviewTitle = document.createElement('div');
        overviewTitle.textContent = `${data.results[index].original_title}`;

        const overview = document.createElement('div');
        overview.classList.add('overview');

        const img = document.createElement('img');
        img.classList.add('poster-img');
        img.src = "https://image.tmdb.org/t/p/w1280" + `${data.results[index].poster_path}`;
        img.alt = `image`;

        console.log(img.src)
        main.append(card);
        card.append(img);
        card.append(info);
        card.append(overview);
        info.append(name);
        info.append(rate);
        overview.append(overviewTitle, `${data.results[index].overview}`);
    })
}