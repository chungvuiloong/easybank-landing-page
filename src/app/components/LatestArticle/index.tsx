import React from 'react';
import currency_img from '@/assets/images/image-currency.jpg'
import restaurant_img from '@/assets/images/image-restaurant.jpg'
import confetti_img from '@/assets/images/image-confetti.jpg'
import plane_img from '@/assets/images/image-plane.jpg'
import Image from 'next/image';

const latest_article_data  = [
    {   
        img: currency_img,
        author: 'Claire Robinson',
        title: 'Receive money in any currency with no fees',
        content: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
    },
    {   
        img: restaurant_img,
        author: 'Wilson Hutton',
        title: 'Treat yourself without worrying about money',
        content: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
    },
    {   
        img: plane_img,
        author: 'Wilson Hutton',
        title: 'Take your Easybank card wherever you go',
        content: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
    },
    {   
        img: confetti_img,
        author: 'Claire Robinson',
        title: 'Our invite-only Beta accounts are now live!',
        content: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
    }
];

const index = () => {
    return (
        <section className='bg-White py-24'>
            <div className='container mx-auto'>
                <h2 className='mb-12 md:text-4xl text-3xl md:text-left text-center opacity-80 text-Dark-Blue'>Latest Articles</h2>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-6 gap-x-7'>
                    {latest_article_data.map((data, i ) => 
                        <div key={i} className='shadow-md rounded-lg overflow-hidden flex flex-col'>
                            <div className='basis-1/2 w-full'>
                                <Image src={data.img} alt={data.title} className='aspect-video object-cover '/>
                            </div>
                            <div className='flex flex-col gap-2 md:px-5 px-8 py-7 text-Dark-Blue'>
                                <div className='text-[10px] opacity-50'>By {data.author}</div>
                                <h3 className='text-md leading-5'>{data.title}</h3>
                                <p className='text-[12px] opacity-50'>{data.content}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default index;