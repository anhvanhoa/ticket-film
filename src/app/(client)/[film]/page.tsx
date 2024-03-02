import Image from 'next/image';
import React from 'react';
import { PlayCircle, Ticket } from 'lucide-react';
import { Button } from '~/components/ui/button';

const page = () => {
    return (
        <div className='relative'>
            <div className='z-10 absolute inset-0 from-black/50 to-black/90 bg-gradient-to-b'>
                <div className='max-w-screen-xl mx-auto'>
                    <div className='flex h-full p-12'>
                        <div className='flex-shrink-0'>
                            <Image
                                className='w-60'
                                src={'/poster.jpg'}
                                alt='MAI'
                                width={300}
                                height={500}
                            />
                        </div>
                        <div className='ml-8'>
                            <div className='bg-red-800 p-0.5 inline-block rounded-[2px] text-xs'>
                                18+
                            </div>
                            <h2 className='text-4xl font-semibold mt-6'>MAI</h2>
                            <p className='text-white/70 mt-2'>MAI - 151 phút</p>
                            <div className='max-w-xl leading-6 font-light mt-4'>
                                &ldquo;Mai&ldquo; xoay quanh cuộc đời của một người phụ nữ
                                đẹp tên Mai (do Phương Anh Đào thủ vai) có số phận rất đặc
                                biệt. Bởi làm nghề mát xa, Mai thường phải đối mặt với ánh
                                nhìn soi mói, phán xét từ những người xung quanh. Và rồi
                                Mai gặp Dương (Tuấn Trần) - chàng trai đào hoa lãng tử.
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
            </div>
            <div
                className='bg-cover h-[450px]'
                style={{ backgroundImage: 'url(/bg-mai.jpg)' }}
            ></div>
        </div>
    );
};

export default page;
