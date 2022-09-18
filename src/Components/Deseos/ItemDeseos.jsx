import React from 'react';

const ItemDeseos = ({ deseo }) => {
    return (
            <div className='ItemDeseos-marg'>
                <hr />
                <div>
                    <p>{deseo.user}</p>
                    <p>{deseo.desire}</p>
                </div>
            </div>
    );
};

export default ItemDeseos;