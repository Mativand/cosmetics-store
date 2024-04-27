import {FC, useRef} from "react";
import s from './styles.module.scss';
import {HiOutlineShoppingBag} from "react-icons/hi";
import {RiHeart3Line} from "react-icons/ri";
import {TbSearch} from "react-icons/tb";

export const Header: FC = () => {

    const burgerRef = useRef(null);
    const listRef = useRef(null);

    const openOrCloseMenu = () => {
        const burger: HTMLElement = burgerRef.current;
        burger.classList.toggle(s.active);

        const menu: HTMLElement = listRef.current;
        menu.classList.toggle(s.active);
    };

    return (
        <header className={s.header}>
            <div className={s.content}>
                <div className={s.menu}>
                    <div onClick={openOrCloseMenu} className={s.burger} ref={burgerRef}>
                        <span></span>
                    </div>
                    <div className={s.logo}>pipette</div>
                    <nav className={s.body}>
                        <ul className={s.list} ref={listRef}>
                            <li className={s.link}>О нас</li>
                            <li className={s.link}>Каталог</li>
                            <li className={s.link}>Отзывы</li>
                        </ul>
                    </nav>
                    <div className={s.icons}>
                        <span><TbSearch size={'22px'}/></span>
                        <span><RiHeart3Line size={'22px'}/></span>
                        <span><HiOutlineShoppingBag size={'22px'}/></span>
                    </div>
                </div>
            </div>
        </header>
    );
};
