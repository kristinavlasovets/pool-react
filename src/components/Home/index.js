import { Link } from "react-router-dom";
import './index.scss'
import PoolOne from '../../assets/images/pool-one.jpg'

export const Home = () => {
  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <img src={PoolOne} alt="pool" />
        <Link to="/contact" className="flat-button">Claim offer</Link>
      </div>

    </div>
  )
}

