import React from 'react';

const index = () => {
    return (
        <section className='bg-White py-24'>
            <div className='container mx-auto'>
                <div className='flex flex-row'>
                    <div className='basis-1/2 flex flex-col md:gap-6 gap-4'>                
                        <h2 className='md:text-4xl text-3xl opacity-80'>Next generation digital banking</h2>
                        <p className='text-Dark-Blue opacity-50 md:text-[17px] text-xs leading-[26px]'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    </div>
                    <div className='basis-1/2'>    
                    Image
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;