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

// import { HashRouter as Router, Route, Link, Switch  } from 'react-router-dom'
// import '../Gallery.css'
// import Footer from '../components/Footer'
// import Collection from '../components/collection'
// import Albums from '../components/Albums'

// const Gallery = () => {
//     return (
//         <Router>
//             <div className="gallery-main">
//                 <h1>Gallery</h1>
//                     <nav className='GalleryButtons'>
//                         <Link to="/photos">Photos</Link>
//                         <Link to="/albums">Albums</Link>
//                     </nav>
//             </div>
//             <Switch>
//                 <Route path='/photos' component={Collection} />
//                 <Route path='/albums' component={Albums} />
//             </Switch>
//             <Footer />
//         </Router>
//     )
// }

// export default Gallery