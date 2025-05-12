// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className="flex flex-col lg:flex-row bg-gray-100 text-gray-800 py-12 px-4"
//     >
//           <motion.img 
//         src="https://media.licdn.com/dms/image/C4E12AQGFPMDClkuWSA/article-cover_image-shrink_600_2000/0/1576605600080?e=2147483647&amp;v=beta&amp;t=5Y5NU8DtNEuL58alRA8bPqify9luD8FTE3WMkkj1fPg"
//         initial={{ x: -200, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ type: 'spring', stiffness: 100 }}
//         className="lg:w-1/2 h-auto rounded-lg mb-8 lg:mb-0 lg:mr-8"
//       />
//       <div className="max-w-4xl mx-auto">
//         <motion.h2 
//           initial={{ x: -200, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ type: 'spring', stiffness: 100 }}
//           className="text-3xl font-bold mb-4"
//         >
//         <span>ABOUT US</span><br/>
//           Discover the Best Shopping Experience
//         </motion.h2>
//         <motion.p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mb-4"
//         >
//           Welcome to our e-commerce platform where you can find everything you need for a seamless shopping experience. From the latest gadgets to trendy fashion items, we've got you covered.
//         </motion.p>
//         <motion.p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="mb-8"
//         >
//           Our mission is to provide high-quality products at affordable prices, delivered right to your doorstep. Browse through our extensive collection and start shopping today!
//         </motion.p>
//         <motion.div 
//           className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white  bg-black hover:bg-black"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <a href="/contact" className="flex items-center">
//             Contact Us
        
//           </a>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default About;

import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 text-gray-800 py-12 px-4">
      <img
        src="https://media.licdn.com/dms/image/C4E12AQGFPMDClkuWSA/article-cover_image-shrink_600_2000/0/1576605600080?e=2147483647&amp;v=beta&amp;t=5Y5NU8DtNEuL58alRA8bPqify9luD8FTE3WMkkj1fPg"
        className="lg:w-1/2 h-auto rounded-lg mb-8 lg:mb-0 lg:mr-8"
        alt="About us"
      />
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          <span>ABOUT US</span>
          <br />
          Discover the Best Shopping Experience
        </h2>
        <p className="mb-4">
          Welcome to our e-commerce platform where you can find everything you need for a seamless shopping experience. From the latest gadgets to trendy fashion items, we've got you covered.
        </p>
        <p className="mb-8">
          Our mission is to provide high-quality products at affordable prices, delivered right to your doorstep. Browse through our extensive collection and start shopping today!
        </p>
        <div className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-black">
          <a href="/contact" className="flex items-center">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
