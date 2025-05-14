import Navbar from "../Components/navbar";
import Desktop from '../assets/desktop.png';
import logo1 from '../assets/Logo-grey.png';
import logo2 from '../assets/Logo-grey1.png';
import logo3 from '../assets/Logo-grey2.png';
import logo4 from '../assets/Logo-grey3.png';
import logo5 from '../assets/Logo-grey4.png';
import shapes from '../assets/shapes.png';
import vector from '../assets/vector.png';
import shape2 from '../assets/shapes2.png';
import mobile from '../assets/Mobile-App-Placeholder-2.png'
import user from '../assets/User Thumb.png'
import { ArrowRight } from 'lucide-react';
import pic1 from '../assets/Picture.png';
import pic2 from '../assets/Picture1.png';
import pic3 from '../assets/Picture2.png';
import logo from '../assets/WAVES.png';
import socials from '../assets/Social Icons.png';
import { motion } from 'framer-motion';


export default function LandingPages() {
    const images = [logo1, logo2, logo3, logo4, logo5];
    const cards = [
        {
            image: pic1,
            tag: "Design",
            title: "Design Faster",
            description: "Design",
        },
        {
            image: pic2,
            tag: "Festival",
            title: "Event Festival",
            description: "Festival",
        },
        {
            image: pic3,
            tag: "Bootcamp",
            title: "Handpicked Bootcamp",
            description: "Bootcamp",
        },
    ];


    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const scaleIn = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10
            }
        }
    };

    const slideInFromLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10
            }
        }
    };

    const slideInFromRight = {
        hidden: { x: 100, opacity: 0 },
        visible: { 
            x: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 50,
                damping: 10
            }
        }
    };

    return (
        <>
        <div className="flex flex-col items-center h-full w-full bg-navy">
            <Navbar />
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="flex flex-col items-center md:mt-36 mt-20 h-full w-full p-4"
            >
                <motion.p 
                    variants={fadeInUp}
                    className="text-white text-6xl font-bold">
                    Design Faster <span className="text-purple">&</span> Better
                </motion.p>
                <motion.p 
                    variants={fadeInUp}
                    className="text-lg mt-6 md:w-2/4">
                    Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
                    Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
                </motion.p>
                <motion.div 
                    variants={fadeInUp}
                    className="flex mt-6 space-x-5">
                    <button className="bg-purple hover:bg-purple-900">Join Now</button>
                    <button className="border-2 border-white">View Demo</button>
                </motion.div>
                <motion.img 
                    variants={scaleIn}
                    src={Desktop} 
                    alt="desktop screen image" 
                    className="mt-10"
                />
                <motion.p 
                    variants={fadeInUp}
                    className="font-bold text-white text-4xl mt-16 mx-2">
                    Join Leading Companies
                </motion.p>
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-wrap justify-center items-center mt-16 w-[80%] gap-6"
                >
                    {images.map((image, index) => (
                        <motion.img
                            key={index}
                            variants={fadeInUp}
                            src={image}
                            alt={`Logo ${index + 1}`}
                            className="w-20 md:w-24 lg:w-28 object-contain"
                        />
                    ))} 
                </motion.div>
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 items-center justify-between mt-20 md:p-16 p-8 w-full gap-10"
            >
              <motion.div 
                variants={slideInFromRight}
                className="w-full h-full md:w-auto flex justify-end order-1 md:order-2"
              >
                <img src={shapes} alt="shapes" className="w-auto h-full" />
              </motion.div>
              <motion.div 
                variants={slideInFromLeft}
                className="w-full h-full flex flex-col md:items-start items-center justify-center order-2 md:order-1"
              >
                <p className="text-md font-bold">DISCOVER</p>
                <p className="font-bold text-white text-5xl mt-5 md:text-left text-center">
                  <span className="text-purple-500">Unlimited</span> ideas for your next great projects
                </p>
                <p className="font-md mt-10">
                  Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.
                </p>
                <p className="font-md">
                  Sit amet, consectetur adipiscing elit. Nunc, nunc, id in ut.
                </p>
                <div className="flex md:justify-start justify-center items-center space-x-5 mt-10 w-full">
                  <p className="text-md font-bold">Discover Ideas</p>
                  <img src={vector} />
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex md:flex-row flex-col items-center justify-between mt-20 md:p-16 p-8 w-full gap-10"
            >
                <motion.div 
                    variants={slideInFromRight}
                    className="w-full h-full md:w-auto flex justify-end order-1 md:order-2"
                >
                    <img src={Desktop} alt="desktop graphics"/>
                </motion.div>
                <motion.div 
                    variants={slideInFromLeft}
                    className="md:w-[70%] h-full flex flex-col md:items-start items-center justify-center order-2 md:order-1"
                >
                    <p className="text-md font-bold tracking-widest">POWERFUL</p>
                    <p className="font-bold text-white md:text-5xl text-4xl md:text-left text-center mt-5">
                    All the tools you can imagine
                    </p>
                    <p className="font-md mt-10 md:text-left text-center">Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                </motion.div>
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 items-center justify-between mt-20 md:p-16 p-8 w-full gap-10"
            >
              <motion.div 
                variants={slideInFromRight}
                className="w-full h-full md:w-auto flex justify-center order-1 md:order-2"
              >
                <img src={shape2} alt="shapes" className="w-auto h-full" />
              </motion.div>
              <motion.div 
                variants={slideInFromLeft}
                className="w-full h-full flex flex-col md:items-start items-center justify-center order-2 md:order-1"
              >
                <p className="text-md font-bold">CUSTOMER</p>
                <p className="font-bold text-white text-5xl mt-5 md:text-left text-center">
                  <span className="text-purple-500">Target</span> customers with our powerful AI kit
                </p>
                <p className="font-md mt-10">
                  Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.
                </p>
                <p className="font-md">
                  Sit amet, consectetur adipiscing elit. Nunc, nunc, id in ut.
                </p>
                <div className="flex md:justify-start justify-center items-center space-x-5 mt-10 w-full">
                  <p className="text-md font-bold">How Targeting Customers Works</p>
                  <img src={vector} />
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex md:flex-row flex-col items-center justify-between mt-20 md:p-16 p-8 w-full gap-10"
            >
                <motion.div 
                    variants={slideInFromRight}
                    className="w-full h-full md:w-auto flex justify-end order-1 md:order-2"
                >
                    <img src={Desktop} alt="desktop graphics"/>
                </motion.div>
                <motion.div 
                    variants={slideInFromLeft}
                    className="md:w-[70%] h-full flex flex-col md:items-start items-center justify-center order-2 md:order-1"
                >
                    <p className="text-md font-bold tracking-widest">SPEED</p>
                    <p className="font-bold text-white md:text-5xl text-4xl md:text-left text-center mt-5">
                    Work fast, w/o interruptions
                    </p>
                    <p className="font-md mt-10 md:text-left text-center">Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.</p>
                </motion.div>
            </motion.div>
        </div>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex md:flex-row flex-col items-center justify-center w-full h-auto bg-purple-dark p-16 md:p-8"
        >
            <motion.div 
                variants={fadeInUp}
                className="md:ml-8 w-full order-1 h-full flex flex-col md:items-start items-center justify-center md:order-1"
            >
                <p className="text-md font-bold tracking-widest">TESTIMONIALS</p>
                <p className="font-bold text-white md:text-5xl text-4xl md:text-left text-center mt-5">
                Bigapp got to the next level
                </p>
                <div className="flex md:justify-start justify-center items-center space-x-5 mt-10 w-full">
                    <p className="text-md font-bold">View Case Study</p>
                    <img src={vector} />
                </div>
            </motion.div>
            <motion.div 
                variants={scaleIn}
                className="order-2 w-full flex justify-center"
            >
                <img src={mobile} alt="mobile graphics" className="w-full h-full" />
            </motion.div>
            <motion.div 
                variants={fadeInUp}
                className='order-3 w-full flex flex-col justify-center'
            >
                <div className="md:w-[70%] w-full">
                <p className="">"Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus."</p>
                
                    <div className="flex justify-between items-center mt-5 w-full">
                    <img src={user} alt="user" />
                    <div>
                    <p className="font-md">Rwanda Melflor</p>
                    <p className="font-md">Co-founder Bigapp</p>
                    </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white w-full h-auto p-20"
        >
            <div className="flex md:flex-row flex-col items-center justify-between w-full gap-10">
                <motion.p 
                    variants={fadeInUp}
                    className="font-bold text-grey text-5xl md:text-left text-center md:mt-5"
                >
                Design Events Near You
                </motion.p>
                <motion.div 
                    variants={fadeInUp}
                    className="flex md:justify-start justify-center items-center space-x-5 w-auto"
                >
                    <p className="text-md font-bold text-purple">View Case Study</p>
                        <ArrowRight color="#9333EA"/>
                </motion.div>
            </div>
            <motion.div 
                variants={staggerContainer}
                className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full md:h-[70vh] h-full mt-10"
            >
                {cards.map((card, index) => (
                  <motion.div 
                    key={index} 
                    variants={scaleIn}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="bg-white rounded-lg h-[90%] flex flex-col items-start pb-10 overflow-hidden "
                  >
                    <div className="w-full md:h-[60%] h-full relative">
                      <img
                        src={card.image}
                        alt={card.tag}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4 bg-purple-100 text-purple p-1 px-2 rounded-xl ">
                        {card.tag}
                      </div>
                    </div>
                    <div className="px-4 pt-4 w-full">
                      <p className="text-grey font-bold text-left">{card.description}</p>
                      <p className="text-3xl text-left font-bold mt-2 text-grey">{card.title}</p>
                    </div>
                    <div className="mt-10 flex justify-start items-center space-x-5 w-full px-4">
                      <p className="text-md font-bold text-purple">Buy Tickets</p>
                        <ArrowRight color="#9333EA" className="h-4"/>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
        </motion.div>

        <footer className="bg-white px-10 md:px-20 py-12 border-t-2 border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-10 md:space-y-0 items-center">
            <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                src={logo} 
                alt="logo weeb" 
                className="ml-2 h-auto w-16" 
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="md:text-left flex flex-col items-center"
              >
                <h4 className="text-sm font-semibold text-gray-500 mb-4">PRODUCT</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Pricing</li>
                  <li>Overview</li>
                  <li>Browse</li>
                  <li>Accessibility</li>
                  <li>Five</li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="md:text-left flex flex-col items-center"
              >
                <h4 className="text-sm font-semibold text-gray-500 mb-4">SOLUTIONS</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Brainstorming</li>
                  <li>Ideation</li>
                  <li>Wireframing</li>
                  <li>Research</li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="md:text-left flex flex-col items-center"
              >
                <h4 className="text-sm font-semibold text-gray-500 mb-4">RESOURCES</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Help Center</li>
                  <li>Blog</li>
                  <li>Tutorials</li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="md:text-left flex flex-col items-center"
              >
                <h4 className="text-sm font-semibold text-gray-500 mb-4">COMPANY</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>About</li>
                  <li>Press</li>
                  <li>Events</li>
                  <li>Careers</li>
                </ul>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 border-t-2 border-gray-200 w-full pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
          >
            <p>© 2023 Weeb, Inc. All rights reserved.</p>
            <img src={socials} alt="socials"/>
          </motion.div>
        </footer>
        </>
    );
}