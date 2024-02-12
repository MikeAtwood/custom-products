import { useState } from 'react'
import '../Gallery.css'
import Footer from '../components/Footer'
import Collection from '../components/collection'
import Albums from '../components/Albums'

const Gallery = () => {
    const [ showPhotos, setShowPhotos ] = useState(true);
    const [ showAlbums, setShowAlbums ] = useState(false)

    const handlePhotosClick = () => {
        setShowPhotos(true)
        setShowAlbums(false)
    }
    
    const handleAlbumsClick = () => {
        setShowPhotos(false)
        setShowAlbums(true)
    }


    return (
        <>
            <div className="gallery-main">
                <h1>Gallery</h1>
                    <div className='GalleryButtons'>
                        <button onClick={handlePhotosClick}>Photos</button>
                        <button onClick={handleAlbumsClick}>Albums</button>
                    </div>
                </div>
            {showPhotos && <Collection /> }
            {showAlbums && <Albums /> }
            <Footer />
        </>
    )
}

export default Gallery