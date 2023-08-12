
import './Body.css'
import Fondo from '../../Assets/Fondo.png'

const Body = () => {
    return (
        <div className="all"> 
            <div className="one">
                <img src= {Fondo} alt="img"/>
                <h1>CLIMA</h1>
                <h2>COMFORT S.A.C</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris   </p> 
                <button className='btn'>Contactanos</button>
            </div>
        </div>

    )
}

export default Body