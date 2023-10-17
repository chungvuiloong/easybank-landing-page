import Image from 'next/image';
import React from 'react';
import Company_Logo from '@/assets/images/logo.svg'
import Facebook_Icon from '@/assets/images/icon-facebook.svg'
import Youtube_Icon from '@/assets/images/icon-youtube.svg'
import Twitter_Icon from '@/assets/images/icon-twitter.svg'
import Pinterest_Icon from '@/assets/images/icon-pinterest.svg'
import Instagram_Icon from '@/assets/images/icon-instagram.svg'

const index = () => {
    return (
        <footer className='py-10 bg-Dark-Blue'>
            <div className='container mx-auto'>
                <div className='flex md:flex-row flex-col justify-between'>
                    <div className='basis-1/2 flex md:flex-row flex-col'>
                        <div className='basis-1/2 flex flex-col justify-between'>                        
                            {/* <Image src={Company_Logo} alt='Company Logo' className='filter hue-rotate-15'/> */}
                            <div className='text-White'>Easybank</div>
                            <div className='flex flex-row md:justify-start justify-center gap-4'>
                                <Image src={Facebook_Icon} alt='Facebook Icon' />
                                <Image src={Youtube_Icon} alt='Youtube Icon' />
                                <Image src={Twitter_Icon} alt='Twitter Icon' />
                                <Image src={Pinterest_Icon} alt='Pinterest Icon' />
                                <Image src={Instagram_Icon} alt='Instagram Icon' />
                            </div>
                        </div>
                        <div className='basis-1/2 flex md:flex-row flex-col'>
                            <div className='basis-1/2 flex flex-col gap-5'>  
                                <div className='md:text-left text-center text-White opacity-70'>About Us</div>
                                <div className='md:text-left text-center text-White opacity-70'>Contact</div>
                                <div className='md:text-left text-center text-White opacity-70'>Blog</div>
                            </div>
                            <div className='basis-1/2 flex flex-col gap-5'>  
                                <div className='md:text-left text-center text-White opacity-70'>Careers</div>
                                <div className='md:text-left text-center text-White opacity-70'>Support</div>
                                <div className='md:text-left text-center text-White opacity-70'>Privacy Policy</div>
                            </div>
                        </div>
                    </div>
                    <div className='basis-1/2 flex flex-col justify-between'>
                        <button className='px-8 py-2 md:self-end self-center bg-gradient-to-r from-Lime-Green to-Bright-Cyan text-White rounded-full'>Request Invite</button>
                        <div className='text-Light-Grayish-Blue md:self-end self-center opacity-50'>  © Easybank. All Rights Reserved</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default index;