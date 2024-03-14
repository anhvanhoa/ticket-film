'use client';
import React, { useState } from 'react';
import SliderFilm from './sliderFilm';
import clsx from 'clsx';
const dataCalendar = [
    {
        id: 1,
        date: 10,
        name: 'Hôm nay'
    },
    {
        id: 2,
        date: 11,
        name: 'Thứ 2'
    },
    {
        id: 3,
        date: 12,
        name: 'Thứ 3'
    },
    {
        id: 4,
        date: 13,
        name: 'Thứ 4'
    },
    {
        id: 5,
        date: 14,
        name: 'Thứ 5'
    },
    {
        id: 6,
        date: 15,
        name: 'Thứ 6'
    },
    {
        id: 7,
        date: 16,
        name: 'Thứ 7'
    },
    {
        id: 8,
        date: 15,
        name: 'Thứ 6'
    },
    {
        id: 9,
        date: 15,
        name: 'Thứ 6'
    },
    {
        id: 10,
        date: 15,
        name: 'Thứ 6'
    },
    {
        id: 11,
        date: 15,
        name: 'Thứ 6'
    },
    {
        id: 12,
        date: 15,
        name: 'Thứ 6'
    }
];
const Calendar = () => {
    const [activeCalendar, setActiveCalendar] = useState(1);
    return (
        <div>
            <div className='select-none'>
                <div className='px-5 py-4 border-b'>
                    <SliderFilm className='-mx-1' icon sizeStep={10}>
                        {dataCalendar.map((calendar) => (
                            <div key={calendar.id} className='px-1 w-[10%]'>
                                <div
                                    onClick={() => setActiveCalendar(calendar.id)}
                                    className={clsx(
                                        'flex-shrink-0 text-center rounded-sm overflow-hidden border transition-all',
                                        ' hover:border-gray-500 cursor-pointer',
                                        {
                                            'border-[#055398] text-[#055398] font-medium':
                                                calendar.id === activeCalendar,
                                            'border-gray-300 text-gray-400 ':
                                                calendar.id !== activeCalendar
                                        }
                                    )}
                                >
                                    <p
                                        className={clsx(
                                            'font-medium py-1.5 transition-all',
                                            {
                                                'bg-[#155a96] text-white':
                                                    calendar.id === activeCalendar,
                                                'bg-gray-100 text-black':
                                                    calendar.id !== activeCalendar
                                            }
                                        )}
                                    >
                                        {calendar.date}
                                    </p>
                                    <p className='text-xs py-1 transition-all'>
                                        {calendar.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </SliderFilm>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
