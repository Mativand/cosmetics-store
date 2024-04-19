import {FC} from 'react';
import {Outlet} from "react-router-dom";
import './styles/App.scss';

export const App: FC = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};
