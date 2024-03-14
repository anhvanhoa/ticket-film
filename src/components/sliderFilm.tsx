'use client';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { Children, ReactNode, useState } from 'react';
interface Props {
    children: ReactNode;
    className?: string;
    icon?: boolean;
    sizeStep?: 5 | 10 | 20 | 40 | 50 | 60 | 80 | 100;
}
const SliderFilm = ({ children, className, icon, sizeStep = 100 }: Props) => {
    const count = Children.count(children) - 1;
    const [active, setActive] = useState(0);
    const changeSlider = (num: 1 | -1) => () => {
        num === 1 && setActive((prev) => (prev === count ? prev : prev + num));
        num === -1 && setActive((prev) => (prev === 0 ? prev : prev + num));
    };
    return (
        <div>
            <div className='relative'>
                <div className='overflow-hidden'>
                    <div
                        style={{ transform: `translate(-${active * sizeStep}%)` }}
                        className={`flex *:flex-shrink-0 transition-all ${className}`}
                    >
                        {children}
                    </div>
                </div>
                {icon || (
                    <div
                        style={{ display: count < 5 ? 'none' : 'flex' }}
                        className='text-white *:flex *:items-center *:justify-center *:cursor-pointer select-none'
                    >
                        <div
                            style={{ display: active === 0 ? 'none' : 'block' }}
                            onClick={changeSlider(-1)}
                            className='absolute group top-1/2 -translate-y-1/2 -left-10 p-4 bg-white/10 rounded-full backdrop-blur-sm'
                        >
                            <ArrowLeft className='size-5 sm:size-6 group-hover:-translate-x-2 transition-all' />
                        </div>
                        <div
                            style={{
                                display:
                                    active + 1 === Math.ceil((count + 1) / 5)
                                        ? 'none'
                                        : 'block'
                            }}
                            onClick={changeSlider(1)}
                            className='absolute group top-1/2 -translate-y-1/2 -right-10 p-4 bg-white/10 rounded-full backdrop-blur-sm'
                        >
                            <ArrowRight className='size-5 sm:size-6 group-hover:translate-x-2 transition-all' />
                        </div>
                    </div>
                )}

                {icon && (
                    <div style={{ display: count < 11 ? 'none' : 'flex' }}>
                        <div
                            style={{ display: active === 0 ? 'none' : 'flex' }}
                            onClick={changeSlider(-1)}
                            className='absolute -left-3 h-full top-0 items-center bg-white/90 backdrop-blur-sm hover:bg-gray-100 rounded-s-md border-transparent border hover:border-[#055398] hover:text-[#055398] transition-all'
                        >
                            <ChevronLeft className='cursor-pointer' strokeWidth={1} />
                        </div>
                        <div
                            onClick={changeSlider(1)}
                            style={{
                                display:
                                    (active + 10) * sizeStep === (count + 1) * sizeStep
                                        ? 'none'
                                        : 'flex'
                            }}
                            className='absolute -right-3 h-full top-0 flex items-center bg-white/90 backdrop-blur-sm hover:bg-gray-100 rounded-e-md border-transparent border hover:border-[#055398] hover:text-[#055398] transition-all'
                        >
                            <ChevronRight className='cursor-pointer' strokeWidth={1} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SliderFilm;
