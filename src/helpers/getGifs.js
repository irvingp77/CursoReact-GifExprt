export const getGifs = async( category ) => {
    console.log(category);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=zqA4ncr2GFkm5ao64pM4kQead216hcaz&q=${ category }&limit=10`;
    console.log(url);
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}