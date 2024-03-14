'use client';
import Image from 'next/image';
import TypeFilm from './typeFilm';
import { PlayCircle, Star } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import Trailer from './trailer';
import { Film } from '~/types/film';

interface Props {
    film: Film;
}
const FilmDetail = ({ film }: Props) => {
    const [trailer, setTrailer] = useState(false);
    return (
        <div>
            <div className='relative bg-black'>
                <div className='relative z-10 text-white inset-0 from-black/50 to-black to-80% bg-gradient-to-l'>
                    <div className='max-w-screen-xl mx-auto'>
                        <div className='flex h-full py-12'>
                            <div className='flex-shrink-đ'>
                                <Image
                                    className='w-64 aspect-[4/6] rounded-md'
                                    src={film.poster}
                                    alt='MAI'
                                    width={300}
                                    height={500}
                                />
                            </div>
                            <div className='ml-10'>
                                <TypeFilm typeFilm={film.type} />
                                <h2 className='text-4xl font-semibold mt-3'>
                                    {film.title}
                                </h2>
                                <p className='text-white/70 mt-1'>MAI - 151 phút</p>
                                <div className='mt-3 flex items-end'>
                                    <div className='flex items-end text-2xl'>
                                        <Star color='#FBBF24' fill='#FBBF24' />
                                        <p className='pl-1 font-semibold leading-5'>
                                            {film.star}
                                        </p>
                                    </div>
                                    <p className='text-xs leading-3 pl-2 text-white/50'>
                                        37.6k đánh giá
                                    </p>
                                </div>
                                <div className='max-w-3xl text-white/80 mt-3'>
                                    <p className='text-white font-semibold py-1'>
                                        Nội dung
                                    </p>
                                    <div className='text-sm leading-6 font-light line-clamp-2'>
                                        {film.description}
                                    </div>
                                </div>
                                <div className='flex gap-x-8 text-sm mt-3'>
                                    <div>
                                        <p className='text-white/60 font-light'>
                                            Ngày chiếu
                                        </p>
                                        <p className='font-bold mt-1'>10/02/2024</p>
                                    </div>
                                    <div>
                                        <p className='text-white/60 font-light'>
                                            Thể loại
                                        </p>
                                        <p className='font-bold mt-1'>{film.category}</p>
                                    </div>
                                    <div>
                                        <p className='text-white/60 font-light'>
                                            Quốc gia
                                        </p>
                                        <p className='font-bold mt-1'>Việt Nam</p>
                                    </div>
                                </div>
                                <div className='mt-4 flex gap-4'>
                                    <Button
                                        variant={'outline'}
                                        className='border-white bg-transparent'
                                        onClick={() => setTrailer(true)}
                                    >
                                        <PlayCircle size={18} className='mr-2' />
                                        Xem trailer
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className='absolute inset-0 bg-cover h-full bg-[right_-200px_top] bg-no-repeat'
                    style={{
                        backgroundImage:
                            'url(https://cinema.momocdn.net/img/32033864513020595-first-look-mai-1701162316.jpg)'
                    }}
                ></div>
            </div>
            {trailer && (
                <Trailer
                    category={film.category}
                    description={film.description}
                    title={film.title}
                    video={film.video}
                    onClose={() => setTrailer(false)}
                />
            )}
        </div>
    );
};

export default FilmDetail;
