import pic1 from '../assets/1.png'
import pic2 from '../assets/2.png'
import pic3 from '../assets/3.png'
import pic4 from '../assets/4.png'
import pic5 from '../assets/5.png'
import pic6 from '../assets/6.png'
import pic7 from '../assets/7.png'
import pic8 from '../assets/8.png'
import { motion } from 'framer-motion';

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

export default function Hero1() {
    return (
        <div className="flex w-full flex-col items-center justify-center h-auto bg-white text-grey-hero">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeIn' }}
                className="mt-20 md:w-[45%] w-[80%] px-6"
            >
                <p className='md:text-5xl text-4xl font-bold tracking-wide md:leading-17 font-avenir-heavy'>
                    Discover the beauty around the world.
                </p>
                <p className="font-md font-avenir-light tracking-wider mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-grey-hero text-white mt-6 px-4 py-2 rounded-md"
                >
                    Explore
                </motion.button>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 my-16 px-16">
                {images.map((img, index) => (
                    <motion.img
                        key={index}
                        src={img}
                        alt={`pic${index + 1}`}
                        className="w-full h-auto rounded-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                    />
                ))}
            </div>
        </div>
    );
}
