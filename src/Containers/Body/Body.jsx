import styles from './Body.module.css';
import './Body.css';
import { TypeAnimation } from "react-type-animation";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';    

//Importacion de los Iconos
import Casco from '../../Assets/Icons/Casco.png'
import Arnes from '../../Assets/Icons/Arnes.png'
import Chaleco from '../../Assets/Icons/Chaleco.png'
import Lentes from '../../Assets/Icons/Lentes.png'
import flecha from '../../Assets/Icons/Arrow 3.png'
//Importacion de la imagen de Fondo
import Fondo from '../../Assets/Fondo.png'
import Fondo2 from '../../Assets/Fondo-2.png'

// Imagenes
import SL1 from '../../Assets/Ductos.png'
import V1 from '../../Assets/Visor-1.jpg'
import V2 from '../../Assets/Visor-2.jpg'
import V3 from '../../Assets/Visor-3.jpg'

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

{/* Aqui empieza el codigo de las Cajas de las Cartas */}
            <div className='two'>
                <div className='box-cards'>
                    <div className='cards'>
                        <img src={Casco} alt='img' className="w-10"/>
                        <h4>Proteccion</h4>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className='cards'>
                        <img src={Arnes} alt='img' className="w-10"/>
                        <h4>Precaucion</h4>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className='cards'>
                        <img src={Chaleco} alt='img' className="w-10"/>
                        <h4>Uniforme</h4>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className='cards'>
                        <img src={Lentes} alt='img' className="w-10"/>
                        <h4>Seguridad</h4>
                        <p>Lorem ipsum dolor</p>
                    </div>
                </div>
                <button className='btn'>Contactanos</button>
            </div>


{/* Aqui empieza el codigo del Slider */}
            <div className="three">
                <img src= {Fondo2} alt="img"/>
                <h3>Lideres en</h3>
                <TypeAnimation className='animation'
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        1000,
                        'Aire Acondicionado',
                        1000,
                        'Refrigeración',
                        1000,
                        'Ducteria',    
                    ]}
                    wrapper="span"
                    speed={10}
                    style={{ fontSize: '4em', display: 'inline-block' }}
                    repeat={Infinity}
                    />
                <p className={styles.pBody2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris </p>
                <div className="slider">
                    <Swiper className='a'
                    modules={[Autoplay]}
                    spaceBetween={0}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide><img src={SL1} alt="img"/></SwiperSlide>
                    <SwiperSlide><img src={SL1} alt="img"/></SwiperSlide>
                    <SwiperSlide><img src={SL1} alt="img"/></SwiperSlide>
                    </Swiper>
                </div>
            </div>

{/* Aqui empieza El visor de Imagenes */}

            <div className='four'>
                    <nav>Nuestros Trabajos </nav>
                <div className='galeria'>
                    <img src={V1} alt='img'/>
                    <img src={V2} alt='img'/>
                    <img src={V3} alt='img'/>
                    <img src={V3} alt='img'/>
                    <img src={V3} alt='img'/>
                </div>
            </div>


        </div>
    )
}

export default Body