import {FC} from 'react';
import s from './styles.module.scss';
import image1 from '@assets/images/image-1.png';
import image2 from '@assets/images/image-2.png';
import image3 from '@assets/images/image-3.png';
import image4 from '@assets/images/image-4.png';
import image5 from '@assets/images/image-5.png';
import image6 from '@assets/images/image-6.png';
import image7 from '@assets/images/image-7.png';
import image8 from '@assets/images/image-8.png';
import image9 from '@assets/images/image-9.png';
import image10 from '@assets/images/image-10.png';
import image11 from '@assets/images/image-11.png';
import image12 from '@assets/images/image-12.png';
import image13 from '@assets/images/image-13.png';

const categories: {name: string, imgPath: string}[] = [
    {
        name: 'Очищающие средства и тоники',
        imgPath: image3
    },
    {
        name: 'Сыворотки',
        imgPath: image4
    },
    {
        name: 'Увлажняющие средства и кремы',
        imgPath: image5
    }
];
const products: {name: string, price: string, imgPath: string}[] = [
    {
        name: 'Нежный очищающий гель',
        price: '10$',
        imgPath: image7
    },
    {
        name: 'Освежающий тонер-спрей',
        price: '12$',
        imgPath: image8
    },
    {
        name: 'Осветляющая сыворотка',
        price: '24$',
        imgPath: image9
    },
    {
        name: 'Нежный детский шампунь',
        price: '14$',
        imgPath: image10
    },
    {
        name: 'Расслабляющий набор для тела',
        price: '8$',
        imgPath: image11
    },
    {
        name: 'Крем после загара',
        price: '11$',
        imgPath: image12
    },
];
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
                    <div className={s.gallery}>
                        {categories.map((p, index) =>
                            <div key={index} className={s.column}>
                                <div className={s.image}>
                                    <img src={p.imgPath} alt={''}/>
                                </div>
                                <p className={s.name}>
                                    {p.name}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className={s.about}>
                <div className={s.content}>
                    <div className={s.column}>
                        <div className={s.image}>
                            <img src={image6} alt={''}/>
                        </div>
                    </div>
                    <div className={s.column}>
                        <div className={s.textCont}>
                            <h2 className={s.sectionTitle}>
                                Натуральный уход за кожей
                            </h2>
                            <p className={s.description}>
                                Наша миссия — помочь вам добиться естественного и
                                сияющего цвета лица за счет использования высококачественных
                                натуральных продуктов по уходу за кожей.
                            </p>
                            <div className={s.buttonCont}>
                                <button className={s.button}>В каталог</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={s.examples}>
                <div className="container">
                    <div className={s.titleCont}>
                        <div className={s.sectionTitle}>
                            <h2>Питайте и защищайте свою кожу с помощью наших продуктов</h2>
                        </div>
                    </div>
                    <div className={s.gallery}>
                        {products.map((p, index) =>
                            <div key={index} className={s.column}>
                                <div className={s.imageCont}>
                                    <div className={s.image}>
                                        <img src={p.imgPath} alt={''}/>
                                    </div>
                                </div>
                                <p className={s.name}>
                                    {p.name}
                                </p>
                                <p className={s.price}>
                                    {p.price}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section className={s.reviews}>
                <div className={s.titleCont}>
                    <div className={s.sectionTitle}>
                        Реальные отзывы от реальных клиентов
                    </div>
                </div>
                <div className={s.slider}>
                    <div className={s.btnCont}>
                        <div className={s.btn}>
                            <i className={s.arrow + ' ' + s.left}></i>
                        </div>
                    </div>
                    <div className={s.content}>
                        <div className={s.imageCont}>
                            <div className={s.image}>
                                <img src={image13} alt={''}/>
                            </div>
                        </div>
                        <div className={s.textCont}>
                            <div className={s.text}>
                                Я заметила значительное улучшение тона и текстуры моей кожи после
                                использования осветляющей сыворотки в течение месяца.
                                Мои шрамы от прыщей исчезли, а кожа выглядит более здоровой и сияющей.
                            </div>
                        </div>
                    </div>
                    <div className={s.btnCont}>
                        <div className={s.btn}>
                            <i className={s.arrow + ' ' + s.right}></i>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;