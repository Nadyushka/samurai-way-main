import React from 'react';
import preloader from '../../../assets/pictures/preloader.gif'

const Preloader = () => {
    return (
        <div style={{width:'50px',height:'50px'}}>
            <img src={preloader}/>
        </div>
    );
};

export default Preloader;