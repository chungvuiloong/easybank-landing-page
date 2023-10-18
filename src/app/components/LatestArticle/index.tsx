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
        <section className='bg-white'>
            <div className='container mx-auto'>
                <h2 className='text-4xl md:text-left text-center'>Latest Articles</h2>
                <div className='flex flex-wrap flex-row xl:justify-between md:justify-evenly justify-center'>
                    {latest_article_data.map((data, i ) => 
                        <div key={i} className='shadow-md w-[300px]'>
                            <div className='w-full'>
                                <Image src={data.img} alt={data.title} className='aspect-video object-cover '/>
                            </div>
                            <div className='flex flex-col gap-2 p-5'>
                                <div className='text-xs'>By {data.author}</div>
                                <h3 className='text-lg leading-6'>{data.title}</h3>
                                <p className='md:text-sm text-xs'>{data.content}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default index;