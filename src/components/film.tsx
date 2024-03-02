'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { PlayCircle, Star } from 'lucide-react';
import Trailer from './trailer';
interface Props {
    image: string;
    title: string;
    typeFilm: string;
    star: number;
    description: string;
    video: string;
}
const Film = ({ image, title, typeFilm, star, description, video }: Props) => {
    const [movie, setMovie] = useState(false);
    const changeTrailer = (type: boolean) => () => setMovie(type);
    return (
        <div>
            <div className='group'>
                <div className='h-64 overflow-hidden rounded-md relative'>
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={500}
                        className='h-full cursor-pointer group-hover:scale-105 transition-all'
                    />
                    <div className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2'>
                        <PlayCircle
                            className='cursor-pointer'
                            onClick={changeTrailer(true)}
                            size={42}
                            strokeWidth={1}
                            fill='#000'
                            fillOpacity={0.2}
                        />
                    </div>
                </div>
                <div className='pt-2 *:mt-1.5 cursor-pointer'>
                    <h2 className='font-medium text-sm'>{title}</h2>
                    <p className='text-xs font-thin'>{typeFilm}</p>
                    <p className='text-xs flex items-center'>
                        <Star color='#FBBF24' size={14} fill='#FBBF24' />
                        <span className='ml-1 leading-4'>{star}</span>
                    </p>
                </div>
            </div>
            {movie && (
                <Trailer
                    title={title}
                    video={video}
                    description={description}
                    typeFilm={typeFilm}
                    onClose={changeTrailer(false)}
                />
            )}
        </div>
    );
};

export default Film;
