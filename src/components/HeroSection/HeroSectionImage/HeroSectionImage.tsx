import imageMe from './../../../assets/ClassicNoBG.png'
import './HerSectionImage.css'

const HeroSectionImage = () => {
    return (
        <div>
            <img src={imageMe} alt="hero"
                 className="w-1000 h-1000 object-cover relative left-48 top-4 cursor-pointer brightness-95"/>
        </div>
    )
}

export default HeroSectionImage;
