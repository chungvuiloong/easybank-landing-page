import Image from 'next/image';
import React from 'react';
import banking_logo from '@/assets/images/icon-online.svg'
import budget_logo from '@/assets/images/icon-budgeting.svg'
import onboarding_logo from '@/assets/images/icon-onboarding.svg'
import api_logo from '@/assets/images/icon-api.svg'

const bank_features = [
    {
        logo: banking_logo,
        title: "Online Banking",
        content: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },
    {
        logo: budget_logo,
        title: "Simple Budgeting",
        content: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
    },
    {
        logo: onboarding_logo,
        title: "Fast Onboarding",
        content: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    {
        logo: api_logo,
        title: "Open API",
        content: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    }
  ];  

const index = () => {
    return (
        <section className='bg-slate-100 py-16'>
            <div className='container mx-auto flex flex-col'>
                <div className='basis-[6/10] flex flex-col gap-6 mb-10 md:text-left text-center'>
                    <h2 className=' text-4xl opacity-80'>Why choose Easybank?</h2>
                    <p className='text-Dark-Blue opacity-50 md:text-base text-[1px]'> We leverage Open Banking to turn your bank account into your financial hub. Control 
  your finances like never before.</p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-7 gap-x-7'>
                {
                    bank_features.map((data, i)=>
                        <div key={i} className='flex flex-col md:gap-10 gap-7 md:text-left text-center'>
                            <div className='md:self-start self-center'>
                                <Image src={data.logo} alt='test' />
                            </div>
                            <div className='flex flex-col md:gap-7 gap-5'> 
                                <h3 className='text-xl leading-5 opacity-70'>{data.title}</h3>
                                <p className='md:text-[16px] text-xs text-Dark-Blue opacity-50 leading-[26px]'>{data.content}</p>
                            </div>
                        </div>
                    )
                }   
                </div>

            </div>
        </section>
    );
};

export default index;