import { useState } from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const PricingSection = () => {
  const [productCount, setProductCount] = useState(1)
  
  // Conversion settings
  const USD_TO_PHP = 58;   // Example conversion rate
  const MARKUP = 1.2;      // Optional markup (20%)

  // Base prices in USD
  const starterBase = 4000;
  const businessBase = 7500;

  // Prices converted to Peso
  const starterPrice = Math.round(starterBase * (productCount / 50) * USD_TO_PHP * MARKUP);
  const businessPrice = Math.round(businessBase * (productCount / 50) * USD_TO_PHP * MARKUP);

  // Format numbers with commas (₱58,000 instead of 58000)
  const formatPeso = (price) => `₱${price.toLocaleString()}/mo`;

  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          variants={textVariant(0.3)}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Pricing
        </motion.h2>
        
        <motion.div 
          variants={fadeIn('up', 0.4)}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Starter Plan */}
          <motion.div 
            variants={fadeIn('right', 0.5)}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <motion.h3 
              variants={fadeIn('up', 0.6)}
              className="text-xl text-gray-600 mb-4"
            >
              Starter
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.7)}
              className="text-3xl font-bold mb-6"
            >
              {formatPeso(starterPrice)}
            </motion.p>
          </motion.div>
          
          {/* Business Plan */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <motion.h3 
              variants={fadeIn('up', 0.6)}
              className="text-xl text-gray-600 mb-4"
            >
              Business
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.7)}
              className="text-3xl font-bold mb-6"
            >
              {formatPeso(businessPrice)}
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={fadeIn('up', 0.8)}
          className="max-w-xl mx-auto"
        >
          <motion.p 
            variants={fadeIn('up', 0.9)}
            className="text-center text-gray-600 mb-4"
          >
            {productCount} products
          </motion.p>
          
          <motion.div 
            variants={fadeIn('up', 1.0)}
            className="relative px-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-600">1</span>
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={productCount}
                onChange={(e) => setProductCount(parseInt(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-xs sm:text-sm text-gray-600">50</span>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeIn('up', 1.1)}
            className="text-center mt-12"
          >
            <motion.p 
              variants={fadeIn('up', 1.2)}
              className="text-xl text-gray-600 mb-4"
            >
              Ready to get started?
            </motion.p>
            <motion.button 
              variants={fadeIn('up', 1.3)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Get Started
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default PricingSection
