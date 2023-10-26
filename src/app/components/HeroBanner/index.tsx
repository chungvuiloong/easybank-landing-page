import Image from 'next/image';
import React from 'react';
import HeroBannerBGImage from '@/assets/images/bg-intro-desktop.svg'
import FrontImage from '@/assets/images/image-mockups.png'
import Button from '@/components/Button'

const index = () => {
    return (
        <section className='bg-White overflow-hidden flex flex-row md:pb-24 pb-24'>
            <div className='container mx-auto'>
                <div className='flex md:flex-row flex-col md:gap-0 gap-5'>
                    <div className='md:order-first order-last  basis-1/2 flex flex-col justify-center md:gap-6 gap-4'>                
                        <h2 className='md:text-4xl text-3xl opacity-80'>Next generation digital banking</h2>
                        <p className='text-Dark-Blue opacity-50 md:text-[17px] text-xs leading-[26px]'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                        <div className='flex flex-row flex-start'>
                            <Button />
                        </div>
                    </div>
                    <div className="relative md:order-last order-first basis-1/2 mx-auto -mt-24 max-w-5xl 
                    lg:ml-10 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="relative lg:max-w-none sm:max-w-5xl max-w-3xl flex-none ">
                            <Image
                            src={HeroBannerBGImage}
                            alt="App screenshot"
                            width={2432}
                            height={1442}
                            className="absolute w-[76rem]"
                            />
                            <Image src={FrontImage} alt={"Mobile phones"} className='relative'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;