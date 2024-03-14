'use client';
import { useState } from 'react';
import Film from './film';
import Trailer from './trailer';
import { Film as InterfaceFilm } from '~/types/film';
interface Props {
    films: InterfaceFilm[];
}
const NowShow = ({ films }: Props) => {
    const [trailer, setTrailer] = useState<null | InterfaceFilm>(null);
    const changeTrailer = (film: InterfaceFilm) => () => setTrailer(film);
    return (
        <div className='max-w-screen-xl mx-auto mt-16'>
            <h2 className='text-3xl font-bold text-center text-[#055398]'>
                Phim đang chiếu
            </h2>
            <div className='grid grid-cols-5 mt-12 gap-5'>
                {films.map((film) => (
                    <Film key={film.id} film={film} onClickPlay={changeTrailer(film)} />
                ))}
            </div>
            {trailer && (
                <Trailer
                    ticket
                    category={trailer.category}
                    description={trailer.description}
                    title={trailer.title}
                    video={trailer.video}
                    onClose={() => setTrailer(null)}
                />
            )}
        </div>
    );
};

export default NowShow;
