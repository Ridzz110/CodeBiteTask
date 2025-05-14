import donut1 from '../assets/donut1.jpg'
import donut2 from '../assets/donut2.jpg'
import donut3 from '../assets/donut3.jpg'
import donut4 from '../assets/donut4.jpg'
import { Sun } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero2() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 p-10 w-full h-full bg-white text-grey-hero">
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeIn' }}
                className='md:order-1 order-2 pt-10'>

                <div className='flex flex-col justify-center items-start h-full'>
                    <p className='font-lato-bold text-4xl text-left'>Ready?</p>
                    <p className='font-lato-bold text-4xl text-left mt-2'>Snack time!</p>
                    <p className='font-lato-regular text-md text-left mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel non.</p>
                    <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='bg-grey-hero font-lato-regular rounded-full text-white mt-3 btn-circle'>
                        Get Started!
                    </motion.button>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
                        <div className='md:w-36 md:h-36 w-30 h-30 rounded-full border border-grey-hero bg-pastel-blue flex justify-center items-center'>
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                           <defs>
                             <path
                               id="circlePath"
                               d="M 100, 100
                                  m -75, 0
                                  a 75,75 0 1,1 150,0
                                  a 75,75 0 1,1 -150,0"
                             />
                           </defs>
                           <text fill="black" font-size="14" font-family="Lato, sans-serif">
                             <textPath href="#circlePath" startOffset="0%" textLength="470">
                               low calorie • low calorie •
                             </textPath>
                           </text>
                         </svg>
                         <Sun className='w-8 h-8 text-grey-hero z-10 absolute'/>
                        </div>
                        <div className='md:w-36 md:h-36 w-30 h-30 rounded-full border border-grey-hero bg-pastel-orange flex justify-center items-center'>
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                           <defs>
                             <path
                               id="circlePath"
                               d="M 100, 100
                                  m -75, 0
                                  a 75,75 0 1,1 150,0
                                  a 75,75 0 1,1 -150,0"
                             />
                           </defs>
                           <text fill="black" font-size="14" font-family="Lato, sans-serif">
                             <textPath href="#circlePath" startOffset="0%" textLength="470">
                               low calorie • low calorie •
                             </textPath>
                           </text>
                         </svg>
                         <Heart  className='absolute z-10 w-8 h-8 text-grey-hero'/>
                        </div>
                        <div className='md:w-36 md:h-36 w-30 h-30 rounded-full border border-grey-hero bg-pastel-pink flex justify-center items-center'>
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                           <defs>
                             <path
                               id="circlePath"
                               d="M 100, 100
                                  m -75, 0
                                  a 75,75 0 1,1 150,0
                                  a 75,75 0 1,1 -150,0"
                             />
                           </defs>
                           <text fill="black" font-size="14" font-family="Lato, sans-serif">
                             <textPath href="#circlePath" startOffset="0%" textLength="470">
                               low calorie • low calorie •
                             </textPath>
                           </text>
                         </svg>
                         <Star  className='absolute z-10 w-8 h-8 text-grey-hero'/>
                        </div>
                    </div>
                    <div className='flex md:flex-row flex-col justify-center items-center  mt-10 border border-grey-hero rounded-4xl p-7 w-full md:w-[80%]'>
                        <div className='flex flex-col justify-start text-left'>
                            <p className='text-2xl font-semibold font-lato-bold'>Title</p>
                            <p className='text-md font-lato-regular'>Lorem ipsum dolor sit consectetur adipiscing</p>
                        </div>
                        <div className='flex flex-col justify-start text-left'>
                            <p className='text-2xl font-semibold font-lato-bold'>Title</p>
                            <p className='text-md font-lato-regular'>Lorem ipsum dolor sit consectetur adipiscing</p>

                        </div>
                    </div>
                </div>
            </motion.div>
            <div className='md:order-2 order-1 flex md:flex-row flex-col md:justify-center justify-start items-center  '>
                <div className="flex flex-col justify-start items-center h-full md:pb-20 md:mr-10">
                    <div className='w-48 h-64 rounded-3xl mb-10'>
                        <motion.img
                        
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1 * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                        src={donut1} alt="donut1" 
                        className='w-full h-full rounded-3xl object-cover border border-grey-hero' />
                    </div>
                    <div className='w-48 h-64 rounded-3xl'>
                        <motion.img 
                        
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 2 * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true}}
                        src={donut2} alt="donut2" 
                        className='w-full h-full rounded-3xl object-cover border border-grey-hero' />
                    </div>
                </div>
                <div className="flex flex-col justify-end items-center h-full ">
                    <div className='w-48 h-64 rounded-3xl mb-10'>
                        <motion.img 
                        
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 3 * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                        src={donut3} alt="donut3" 
                        className='w-full h-full rounded-3xl object-cover border border-grey-hero' />
                    </div>
                    <div className='w-48 h-64 rounded-3xl'>
                        <motion.img
                        
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 4 * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true  }}
                        src={donut4} alt="donut4" 
                        className='w-full h-full rounded-3xl object-cover border border-grey-hero' />
                    </div>
                </div>
            </div>
        </div>
    );
}