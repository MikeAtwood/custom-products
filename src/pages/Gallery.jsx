import '../Gallery.css'
import Footer from '../components/Footer'
import Collection from '../components/collection'

const Gallery = () => {
    return (
        <>
            <div className="gallery-main">
                <h1>Gallery</h1>
                    <div className='GalleryButtons'>
                        <button>Photos</button>
                        <button>Albums</button>
                    </div>
            </div>
            <Collection />
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