import React from 'react';
import Film from './film';

const ComingSoon = () => {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto mt-8'>
                <h2 className='text-2xl font-medium'>Sắp chiếu</h2>
                <div className='grid grid-cols-6 mt-8 gap-4'>
                    <Film
                        image='/poster.jpg'
                        start={9.8}
                        title='MAI'
                        typeFilm='lang man'
                    />
                    <Film
                        image='/poster.jpg'
                        start={9.8}
                        title='MAI'
                        typeFilm='lang man'
                    />
                    <Film
                        image='/poster.jpg'
                        start={9.8}
                        title='MAI'
                        typeFilm='lang man'
                    />
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
