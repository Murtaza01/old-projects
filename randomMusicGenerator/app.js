const rand = () => {
    return Math.floor(Math.random() * (100000 - 100)) + 100;
}
const button = document.querySelector('button')

let artistName;
let items;
let genre;
let style;
let url;
let album;
let hrefed;

async function musicGenrator() {
    const req = await axios.get(`https://api.discogs.com/masters/${rand()}`);
    console.log(req);
    artistName = req.data.artists[0].name;
    genre = req.data.genres
    style = req.data.styles
    url = req.data.uri
    album = req.data.title
}
const appendItems = () => {
    const container = document.querySelector('#container')
    tag = document.createElement('ul')
    items = document.createElement('li')
    a = document.createElement('a')
    container.append(tag)
    tag.after(items)

    items.after(a)

}

button.addEventListener('click', async () => {
    try {
        appendItems()
        await musicGenrator()
        tag.append(artistName)
        tag.append(`--${album}`)
        items.append(`${genre}`)
        items.append(`(${style})`)
        hrefed = a.href = url
        a.append(hrefed)
    }
    catch (e) {
        console.log('Erorr', e)
    }
})


