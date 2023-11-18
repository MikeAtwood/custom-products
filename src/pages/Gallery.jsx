import '../Gallery.css'
import Footer from '../components/Footer'
import Collection from '../components/collection'

const Gallery = () => {
    return (
        <>
            <div className="gallery-main">
                <h1>Gallery</h1>
            </div>
            <Collection />
            <Footer />
        </>
    )
}

export default Gallery