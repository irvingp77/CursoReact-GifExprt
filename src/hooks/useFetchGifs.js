import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    const [images, setmages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() =>{
        const newImages = await getGifs( category );
        setmages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
       getImages();
    }, []);


  return {
    images,
    isLoading
  }
}


