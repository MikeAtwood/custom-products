import '../../src/Gallery.css';
import { useState } from 'react';
import dummy1 from '../assets/galleryImg/dummy1.jpeg';
import dummy2 from '../assets/galleryImg/dummy2.jpeg';
import dummy3 from '../assets/galleryImg/dummy3.jpeg';
import dummy4 from '../assets/galleryImg/dummy4.jpeg';
import dummy5 from '../assets/galleryImg/dummy5.jpeg';
import dummy6 from '../assets/galleryImg/dummy6.jpeg';
import dummy7 from '../assets/galleryImg/dummy7.jpeg';
import dummy8 from '../assets/galleryImg/dummy8.jpeg';
import dummy9 from '../assets/galleryImg/dummy9.jpeg';
import dummy10 from '../assets/galleryImg/dummy10.jpeg';
import dummy11 from '../assets/galleryImg/dummy11.jpeg';

const Albums = () => {
    const [selectedAlbum, setSelectedAlbum] = useState(null)

    const albums = [
        {id: 1, name: "Album 1", photos: [dummy1, dummy2, dummy3] },
        {id: 1, name: "Album 2", photos: [dummy4, dummy5, dummy6] },
        {id: 1, name: "Album 3", photos: [dummy7, dummy8, dummy9, dummy10, dummy11] },
    ]

    const handleAlbumClick = (album) => {
        if (setSelectedAlbum === album) {
            setSelectedAlbum(null)
        } else (
            setSelectedAlbum(album)
        )
    }

    return (
        <div className='album-collection'>
            <div className='album-list'>
                {albums.map((album) => (
                    <div
                    key={album.id}
                    className={`album-item ${selectedAlbum === album ? 'selected' : ''}`}
                    onClick={() => handleAlbumClick(album)}
                    >
                        <img src={album.photos[0]} alt={album.name} className='album-button' />
                        <span className='album-name'>{album.name}</span>
                    </div>
                ))}
            </div>
            {selectedAlbum && (
                <div className='photo-list'>
                    {selectedAlbum.photos.map((photo) => (
                        <img key={photo} src={photo} alt={photo} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Albums;