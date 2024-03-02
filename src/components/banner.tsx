import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { PlayCircle, Ticket } from 'lucide-react';
const Banner = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-8 relative *:rounded-xl'>
            <div className='z-10 absolute inset-0 from-transparent to-black/80 bg-gradient-to-b'>
                <div className='flex items-end h-full p-12'>
                    <div className='flex-shrink-0'>
                        <Image
                            className='w-60'
                            src={'/poster.jpg'}
                            alt='MAI'
                            width={300}
                            height={500}
                        />
                    </div>
                    <div className='ml-8 py-8'>
                        <h2 className='text-4xl font-medium py-3'>MAI - 2024</h2>
                        <p className='text-sm'>Lãng Mạn</p>
                        <div className='max-w-xl leading-6 font-light mt-4'>
                            &ldquo;Mai&ldquo; xoay quanh cuộc đời của một người phụ nữ đẹp
                            tên Mai (do Phương Anh Đào thủ vai) có số phận rất đặc biệt.
                            Bởi làm nghề mát xa, Mai thường phải đối mặt với ánh nhìn soi
                            mói, phán xét từ những người xung quanh. Và rồi Mai gặp Dương
                            (Tuấn Trần) - chàng trai đào hoa lãng tử.
                        </div>
                        <div className='pt-4 flex gap-4'>
                            <Button>
                                <Ticket size={18} className='mr-2' />
                                Đặt vé
                            </Button>
                            <Button variant={'outline'} className='border-white/20'>
                                <PlayCircle size={18} className='mr-2' />
                                Xem trailer
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='bg-cover h-[500px]'
                style={{ backgroundImage: 'url(/bg-mai.jpg)' }}
            ></div>
        </div>
    );
};

export default Banner;
