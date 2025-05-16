import React from "react";

import { SubMenu } from "@components/base";

export const AreaMode: React.FC = () => {

    return (
        <SubMenu 
            paths={[
                { 
                    name: 'Об участке', 
                    query: { key: 'menu', value: 'about' }
                },
                { 
                    name: 'Настройки', 
                    query: { key: 'menu', value: 'settings' }
                },
            ]}
        />
    )
}