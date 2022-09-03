import FALLBACK_IMAGE from '../assets/no-img.jpg'

const Img = ({corporateLogo, corporateName}) => {
 
    const imageOnErrorHandler = (event) => {
        event.currentTarget.src = FALLBACK_IMAGE;
      }

    return (
    <img
        src={corporateLogo}
        onError={imageOnErrorHandler}
        alt={corporateName}
      />
    )
  }
  
  export default Img