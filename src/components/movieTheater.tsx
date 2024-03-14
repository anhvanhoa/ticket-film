import { time } from 'console';
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '~/components/ui/accordion';
interface Props {
    address: string;
    name: string;
    typeTheater: string;
    times: { start: string; end: string; id: number }[];
}
const MovieTheater = ({ address, name, times, typeTheater }: Props) => {
    return (
        <div>
            <Accordion type='single' collapsible>
                <AccordionItem value='item-1'>
                    <AccordionTrigger className='px-6 hover:bg-gray-50 cursor-default hover:no-underline'>
                        <div className='flex'>
                            <div className='flex-1 text-left'>
                                <h4 className='font-medium'>{name}</h4>
                                <div className='flex items-center text-xs'>
                                    <p className='line-clamp-1 text-gray-600 font-light'>
                                        {address}
                                    </p>
                                    <Link href='/'>
                                        <span className='ml-2 flex-shrink-0 text-blue-500'>
                                            [ Bản đồ ]
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div>
                            <div className='pb-4 px-6 pt-4'>
                                <h5 className='text-sm font-semibold'>{typeTheater}</h5>
                                <div className='grid grid-cols-5 mt-2 gap-4'>
                                    {times.map((time) => (
                                        <div
                                            key={time.id}
                                            className='text-xs flex items-center gap-x-1 border border-sky-400 text-sky-700 rounded-sm py-1.5 justify-center cursor-pointer'
                                        >
                                            <span className='text-sm font-medium'>
                                                {time.start}
                                            </span>
                                            <span>~</span>
                                            <span>{time.end}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default MovieTheater;
