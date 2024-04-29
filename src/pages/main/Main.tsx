import {FC} from 'react';
import s from './styles.module.scss';
import image1 from '@assets/images/image-1.png';
import image2 from '@assets/images/image-2.png';
import image3 from '@assets/images/image-3.png';
import image4 from '@assets/images/image-4.png';
import image5 from '@assets/images/image-5.png';
const Main: FC = () => {
    return (
        <main className="wrapper">
            <section className={s.hero}>
                <div className={s.titleCont}>
                    <div className={s.title}>
                        <h1>Нежный уход за кожей для вашей семьи</h1>
                    </div>
                </div>
                <div className={s.images}>
                    <div className={s.imageCont}>
                        <div className={s.image1}>
                            <img src={image1} alt={''}/>
                        </div>
                    </div>
                    <div className={s.imageCont}>
                        <div className={s.image2}>
                            <img src={image2} alt={''}/>
                        </div>
                    </div>
                </div>
                <div className={s.textCont}>
                    <div className={s.text}>
                        <p>
                            Мы — небольшая команда энтузиастов, которые верят в натуральные и экологически чистые
                            ингредиенты для
                            сияющей и здоровой кожи. Мы посвящаем себя поиску лучших натуральных продуктов по уходу за
                            кожей.
                        </p>
                    </div>
                </div>
                <div className={s.buttonCont}>
                    <button className={s.button}>В каталог</button>
                </div>
            </section>

            <section className={s.categories}>
                <div className="container">
                    <div className={s.content}>
                        <div className={s.column}>
                            <div className={s.image}>
                                <img src={image3} alt={''}/>
                            </div>
                            <p className={s.name}>
                                Очищающие средства и тоники
                            </p>
                        </div>
                        <div className={s.column}>
                            <div className={s.image}>
                                <img src={image4} alt={''}/>
                            </div>
                            <p className={s.name}>
                                Сыворотки
                            </p>
                        </div>
                        <div className={s.column}>
                            <div className={s.image}>
                                <img src={image5} alt={''}/>
                            </div>
                            <p className={s.name}>
                                Увлажняющие средства и кремы
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={s.about}>

            </section>
            <section className={s.examples}>

            </section>
            <section className={s.reviews}>

            </section>
        </main>
    );
};

export default Main;