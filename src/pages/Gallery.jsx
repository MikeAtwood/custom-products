import { useState } from 'react'
import '../Gallery.css'
import Footer from '../components/Footer'
import Collection from '../components/collection'
import Albums from '../components/Albums'

const Gallery = () => {
    const [ showPhotos, setShowPhotos ] = useState(true);

    const handleButtonClick = () => {
        setShowPhotos(!showPhotos)
    }
    return (
        <>
            <div className="gallery-main">
                <h1>Gallery</h1>
                    <div className='GalleryButtons'>
                        <button onClick={handleButtonClick}>Photos</button>
                        <button onClick={handleButtonClick}>Albums</button>
                    </div>
                </div>
            {showPhotos ? <Collection /> : <Albums />}
            <Footer />
        </>
    )
}

export default Gallery