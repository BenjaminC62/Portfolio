import imageCV from './../../../assets/imageCV.png'

const HeroSectionImage = () => {
  return (
    <div>
      <img src={imageCV} alt="hero" className="w-124 h-124 object-cover rounded-50 drop-shadow-img shadow-text cursor-pointer brightness-95" />
    </div>
  )
}

export default HeroSectionImage;
