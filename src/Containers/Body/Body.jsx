import styles from './Body.module.css';
import './Body.css';

//Importacion de los Iconos
import Casco from '../../Assets/Icons/Casco.png'
import Arnes from '../../Assets/Icons/Arnes.png'
import Chaleco from '../../Assets/Icons/Chaleco.png'
import Lentes from '../../Assets/Icons/Lentes.png'
//Importacion de la imagen de Fondo
import Fondo from '../../Assets/Fondo.png'

const Body = () => {
    return (
        <div className='all'> 
            <div className="one">
                <img src= {Fondo} alt="img"/>
                <h1>CLIMA <br/> COMFORT S.A.C</h1>
                <p className={styles.pBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris </p>
            </div>
            <div className='two'>
                <div className='box-cards'>
                    <div className='cards'>
                        <img src={Casco} alt='img' className="w-10"/>
                        <h3>Proteccion</h3>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className='cards'>
                        <img src={Arnes} alt='img' className="w-10"/>
                        <h3>Precaucion</h3>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className='cards'>
                        <img src={Chaleco} alt='img' className="w-10"/>
                        <h3>Uniforme</h3>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className='cards'>
                        <img src={Lentes} alt='img' className="w-10"/>
                        <h3>Seguridad</h3>
                        <p>Lorem ipsum dolor</p>
                    </div>
                </div>
                <button className='btn'>Contactanos</button>
            </div>
        </div>

    )
}

export default Body