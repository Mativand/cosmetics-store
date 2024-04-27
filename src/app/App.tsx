import {FC} from 'react';
import {Outlet} from "react-router-dom";
import './styles/App.scss';
import {Header} from "@/widgets/header";

export const App: FC = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};
