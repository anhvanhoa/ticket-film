import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import TypeFilm from '~/components/typeFilm';
import { Film } from '~/types/film';
interface Props {
    film: Film;
}
const NowShow = ({ film }: Props) => {
    return (
        <div>
            <div className='flex gap-x-4 py-2 border-b px-2'>
                <Link href={film.slug}>
                    <Image
                        alt=''
                        src={film.poster}
                        width={300}
                        height={500}
                        className='w-16 rounded-sm aspect-[4/6]'
                    />
                </Link>
                <div className='flex flex-col gap-y-1.5 items-start'>
                    <TypeFilm typeFilm={film.type} />
                    <Link href={film.slug}>
                        <h3 className='text-sm font-semibold hover:text-[#055398]'>
                            {film.title}
                        </h3>
                    </Link>
                    <p className='text-xs text-gray-500'>{film.category}</p>
                    <div className='flex items-end text-xs'>
                        <Star color='#FBBF24' fill='#FBBF24' size={14} />
                        <p className='pl-1 leading-3'>{film.star}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NowShow;
