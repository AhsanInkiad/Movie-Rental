// this url will also work in production
export function getImageUrl(name){
    return new URL(`../assets/movie-covers/${name}`, import.meta.url).href
}