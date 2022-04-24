import React from "react";
import { CustomRoutLink } from "../../components/Ui";

const NotFound = () => {
    return (
        <div>
            <p>
                Упс вы наверно потерялись
            </p>

            <CustomRoutLink to='/'>
                Вернутся на главную страницу
            </CustomRoutLink>
        </div>
    )
};

export default NotFound;