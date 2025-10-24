import {useState, useEffect} from "react";
import Album from "./Album.jsx";

function Discography() {

    const [filter, setFilter] = useState("")
    const [albums, setAlbums] = useState([])


    useEffect(() => {
        fetchAlbums()
    }, []);

    function fetchAlbums() {
        fetch("api/artist/525046/albums")
            .then(res => res.json())
            .then(result => setAlbums(result.data))
            .catch(err => console.error(err))
    }

    function handleFilterChange(event) {
        setFilter(event.target.value)

    }

    function applyFilter(albums, filter) {
        if (!filter) return albums;

        const lowerFilter = filter.toLowerCase();
        return albums.filter(item => {
            const lowerTitle = item.title.toLowerCase();
            return lowerTitle.indexOf(lowerFilter) !== -1;
        });
    }

    if (albums.length === 0) {
        return (
            <div>Loading...</div>
        )
    }
    const filteredAlbums = applyFilter(albums, filter)
    return (
        <>
            <h2>Discography</h2>
            <div className="search">
                <form>
                    <input type="text" name="q" className="input" autoComplete="off" placeholder="Busque pelo nome" onChange={handleFilterChange}  />
                </form>
            </div>
            <div className="discography">
                {filteredAlbums.map(album => (<Album key={album.id} album={album} />))}
            </div>
        </>
    )
}

export default Discography;