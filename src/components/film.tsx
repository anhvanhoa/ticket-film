import Image from 'next/image';
import { PlayCircle, Star } from 'lucide-react';
import TypeFilm from './typeFilm';
import { Film as InterfaceFilm } from '~/types/film';
import Link from 'next/link';
interface Props {
    film: InterfaceFilm;
    onClickPlay?: () => void;
}
const Film = ({ film, onClickPlay }: Props) => {
    return (
        <div>
            <div>
                <div className='aspect-[4/6] overflow-hidden rounded-md relative group'>
                    <div className='z-20 absolute top-2 left-2'>
                        <TypeFilm typeFilm={film.type} />
                    </div>
                    <Image
                        src={film.poster}
                        alt={film.title}
                        width={300}
                        height={500}
                        className='h-full cursor-pointer group-hover:scale-105 transition-all'
                    />
                    <div className='group-hover:opacity-100 absolute inset-0 opacity-0 flex items-center justify-center bg-black/20 transition-all'>
                        <PlayCircle
                            onClick={onClickPlay}
                            className='cursor-pointer text-white'
                            size={42}
                            strokeWidth={1}
                        />
                    </div>
                </div>
                <div className='pt-3.5'>
                    <Link href={`/${film.slug}`}>
                        <div className='group'>
                            <h2 className='overflow-hidden text-ellipsis whitespace-nowrap'>
                                <p className='font-medium cursor-pointer group-hover:underline'>
                                    {film.title}
                                </p>
                            </h2>
                            <p className='text-xs py-1 text-gray-500'>{film.category}</p>
                        </div>
                    </Link>
                    <p className='text-xs flex items-center py-1'>
                        <Star color='#FBBF24' size={14} fill='#FBBF24' />
                        <span className='ml-1 leading-4'>{film.star}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Film;
