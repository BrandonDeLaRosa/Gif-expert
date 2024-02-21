import React from 'react';

const GifItem = ({image}) => {
    // console.log(image);
    return (
        <div className='card' style={{width:"200px"}}>
         <img src={image.url} alt={image.title} />
         <p>{image.title}</p>
        </div>
    );
};

export default GifItem;