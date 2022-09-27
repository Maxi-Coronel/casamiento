import React from 'react';

const ItemDeseos = ({ documento, name, texto }) => {
    return (
            <div className='ItemDeseos-marg'>
                <hr />
                <div>
                    <p>{name}: {documento.name}</p>
                    <p>{texto}: {documento.text}</p>
                </div>
            </div>
    );
};

export default ItemDeseos;