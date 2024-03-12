import { images } from '../../constains'
import './Background.scss'

const Background = ({ weatherBackground }) => {
  return (
    <div className='bg_container'>
      <div className='bg_img'>
        {weatherBackground?.weather[0].icon && (
          <img
            src={images[`bg_${weatherBackground.weather[0].icon}`]}
            alt='weather background'
          />
        )}
        <div className='bg_img_dark' />
      </div>
    </div>
  )
}

export default Background
