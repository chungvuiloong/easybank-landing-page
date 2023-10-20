import React from 'react';
import company_logo from '@/assets/images/logo.svg'
import Image from 'next/image';
import Button from '@/components/Button'
import Link from 'next/link';

const index = () => {
    return (
        <nav className='py-4'>
            <div className='container mx-auto'>
                <div className='flex flex-row justify-between'>                
                    <div className='self-center'>
                        <Image src={company_logo} alt='Company Logo' />
                    </div>
                    <ul className='flex flex-row gap-5 self-center text-xs text-Dark-Blue opacity-50'>
                        <li><Link href="home.html">Home</Link></li>
                        <li><Link href="about.html">About</Link></li>
                        <li><Link href="contact.html">Contact</Link></li>
                        <li><Link href="blog.html">Blog</Link></li>
                        <li><Link href="careers.html">Careers</Link></li>
                        </ul>
                    <Button />
                </div>
            </div>
        </nav>
    );
};

export default index;