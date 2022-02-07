const url ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b6e3d9b89131c14e442fabf8b936c2c';

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    showData(data);
  }
  getData();
  const main = document.querySelector('.main');

  function showData(data) {
    const img = document.createElement('img');
    img.classList.add('poster-img');
    img.src = "https://image.tmdb.org/t/p/w1280"+`${data.results[0].poster_path}`;
    img.alt = `image`;
    console.log(img.src)
    main.append(img);
  }