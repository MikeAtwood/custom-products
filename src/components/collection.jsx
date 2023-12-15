import '../../src/Gallery.css'
import { useState } from 'react'
import dummy1 from '../assets/galleryImg/dummy1.jpeg'
import dummy2 from '../assets/galleryImg/dummy2.jpeg'
import dummy3 from '../assets/galleryImg/dummy3.jpeg'
import dummy4 from '../assets/galleryImg/dummy4.jpeg'
import dummy5 from '../assets/galleryImg/dummy5.jpeg'
import dummy6 from '../assets/galleryImg/dummy6.jpeg'
import dummy7 from '../assets/galleryImg/dummy7.jpeg'
import dummy8 from '../assets/galleryImg/dummy8.jpeg'
import dummy9 from '../assets/galleryImg/dummy9.jpeg'
import dummy10 from '../assets/galleryImg/dummy10.jpeg'
import dummy11 from '../assets/galleryImg/dummy11.jpeg'

const Collection = () => {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }
    
    return (
        <div className='collectionImages'>
            <div 
                className='imageContainer'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}        
            >
            <div className='imageContainer'>
                <img src={dummy1} alt='Image 1'/>
                {isHovered && <div className='overlay'>Beautiful mulch landscaping</div>} 
            </div> 
            <div className='imageContainer'>
                <img src={dummy2} alt='Image 2'/>
                {isHovered && <div className='overlay'>Something nice to look at</div>}
            </div>   
                
                <img src={dummy3} />
                <img src={dummy4} />
                <img src={dummy5} />
                <img src={dummy11} />
                <img src={dummy6} />
                <img src={dummy7} />
                <img src={dummy8} />
                <img src={dummy9} />
                <img src={dummy10} />
            </div>
        </div>
    )
}

export default Collection