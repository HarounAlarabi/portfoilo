import IcomoonReact from "icomoon-react";
import React from 'react';
import iconSet from '../assets/selection.json';


const Icon = ({ icon, className }) => {
    return (
        <IcomoonReact
            className={className}
            icon={icon}
            iconSet={iconSet}
        />
    );
};

export default Icon;