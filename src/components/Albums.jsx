import '../../src/Gallery.css';
import { useState } from 'react';
const Albums = () => {
    const [selectedAlbum, setSelectedAlbum] = useState(null)

    const albums = [
        {id: 1, name: "Album 1", photos: ['dummy1.jpeg', 'dummy2.jpeg', 'dummy3.jpeg'] },
        {id: 1, name: "Album 1", photos: ['dummy4.jpeg', 'dummy5.jpeg', 'dummy6.jpeg'] },
        {id: 1, name: "Album 1", photos: ['dummy7.jpeg', 'dummy8.jpeg', 'dummy9.jpeg', 'dummy10.jpeg', 'dummy11.jpeg'] },
    ]

    const handleAlbumClick = (album) => {
        setSelectedAlbum(album)
    }

    return (
        <div className='album-collection'>
            <h2>Albums</h2>
            <div className='album-list'>
                {albums.map((album) => (
                    <div
                    key={album.id}
                    className={`album-item ${selectedAlbum === album ? 'selected' : ''}`}
                    onClick={() => handleAlbumClick(album)}
                    >
                        {album.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Albums;