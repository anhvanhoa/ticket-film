'use client';
import { useState } from 'react';
import Film from './film';
import SliderFilm from './sliderFilm';
import Trailer from './trailer';
import { Film as InterfaceFilm } from '~/types/film';

interface Props {
    films: InterfaceFilm[];
}
const ComingSoon = ({ films }: Props) => {
    const [trailer, setTrailer] = useState<null | InterfaceFilm>(null);
    const changeTrailer = (film: InterfaceFilm) => () => setTrailer(film);
    return (
        <div className='mt-12 bg-black text-white'>
            <div className='bg-[url(/bg-coming-soon.jpg)] bg-contain bg-no-repeat bg-center py-12'>
                <div className='max-w-screen-xl mx-auto'>
                    <h2 className='text-3xl font-bold text-center'>Phim sắp chiếu</h2>
                    <div className='mt-12'>
                        <SliderFilm className='-mx-2'>
                            {films.map((film) => (
                                <div key={film.id} className='w-1/5 px-2'>
                                    <Film film={film} onClickPlay={changeTrailer(film)} />
                                </div>
                            ))}
                        </SliderFilm>
                    </div>
                    {trailer && (
                        <Trailer
                            category={trailer.category}
                            description={trailer.description}
                            title={trailer.title}
                            video={trailer.video}
                            onClose={() => setTrailer(null)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
