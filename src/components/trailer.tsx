import { Ticket, XCircle } from 'lucide-react';
import { Button } from './ui/button';
interface Props {
    title: string;
    category: string;
    video: string;
    description: string;
    ticket?: boolean;
    onClose: () => void;
}
const Trailer = ({ title, category, description, video, ticket, onClose }: Props) => {
    return (
        <div>
            <div
                onClick={onClose}
                className='z-50 bg-black/60 fixed w-screen h-screen top-0 left-0 backdrop-blur-sm'
            ></div>
            <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 max-w-2xl min-w-[672px] text-white'>
                <XCircle
                    size={35}
                    onClick={onClose}
                    className='absolute -right-4 -top-4 cursor-pointer hover:opacity-100 opacity-75'
                />
                <div className='bg-[#171717] rounded-xl overflow-hidden'>
                    <div className='shadow-md'>
                        <iframe
                            src={video}
                            title={title}
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            allowFullScreen
                            className='w-full aspect-video'
                        ></iframe>
                    </div>
                    <div className='px-4 py-6 flex items-start'>
                        <div>
                            <div className='mx-2'>
                                <div className='flex items-center'>
                                    <h2 className='text-xl font-semibold'>{title}</h2>
                                    <span className='px-1'>-</span>
                                    <p className='text-sm text-gray-400'>{category}</p>
                                </div>
                                <div className='font-light mt-2 text-sm line-clamp-3'>
                                    {description}
                                </div>
                                {ticket && (
                                    <div className='pt-4 flex gap-4'>
                                        <Button
                                            size={'sm'}
                                            className='hover:bg-[#055398]/80 bg-[#055398]'
                                        >
                                            <Ticket size={18} className='mr-2' />
                                            Đặt vé
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trailer;
