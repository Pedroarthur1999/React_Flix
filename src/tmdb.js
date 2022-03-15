/* eslint-disable default-case */
/* eslint-disable import/no-anonymous-default-export */
const api_key = "38c007f28d5b66f36b9c3cf8d8452a4b";
const api_base = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${api_base}${endpoint}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais da netflix",
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${api_key}`),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${api_key}`),
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${api_key}`),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${api_key}`),
      },
      {
        slug: "comedy",
        title: "Comedia",
        items:await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${api_key}`),
      },
      {
        slug: "horror",
        title: "Terror",
        items:await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${api_key}`),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${api_key}`),
      },
      {
        slug: "documentary",
        title: "Documentario",
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${api_key}`),
      },
    ];
  },
  getMovieInfo: async (movieId, type) =>{
    let info = {};
             
    if(movieId){
      switch(type){
        case 'movie':
           info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${api_key}`);   
         
        break;
        case 'tv' :
           
            info = await basicFetch(`/tv/${movieId}?language=pt-br&api_key=${api_key}`);

          break;
      }
      return info
    }

  }
};
