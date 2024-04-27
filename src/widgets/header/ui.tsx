import {FC} from "react";
import s from './styles.module.scss';
import {BsHeart, BsSearch} from "react-icons/bs";
import {PiHandbagLight} from "react-icons/pi";
import {CiMenuBurger} from "react-icons/ci";

export const Header: FC = () => {
    return (
        <header className={"bg-yellow-500"}>
            <div className={s.container}>
                <div className={s.burger}>
                    <CiMenuBurger/>
                </div>
                <div className={s.search}>
                    <BsSearch size={'18px'}/>
                </div>
                <div className={s.logo}>pipette</div>
                <div className={s.icons}>
                    <BsHeart size={'18px'}/>
                    <PiHandbagLight size={'18px'}/>
                </div>
            </div>
        </header>
    );
};
