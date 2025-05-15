import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BackgroundImage, Image } from '../components/ui';

// Animation variants for fade-in effect
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const About = () => {
  return (
    <div className="about-page">
      <SEO 
        title="About Us" 
        description="Learn about JustSicily, your personal guides to authentic Sicily experiences with hassle-free travel packages and local expertise."
        canonicalUrl="https://justsicily.com/about"
      />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <BackgroundImage 
          src="https://images.unsplash.com/photo-1605216663980-b7c3633a04a2?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10"></div>
        
        <div className="relative z-20 container-custom h-full flex flex-col justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-4">Our Story</h1>
            <p className="text-lg md:text-xl max-w-xl mb-6">
              Welcome to JustSicily, where authentic Sicilian experiences come to life.
            </p>
            <div className="w-24 h-1 bg-secondary"></div>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Story Thread */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">How It All Began</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-700 mb-4 text-lg">
                    Founded in 2015 by a group of passionate Sicilian locals, JustSicily was born from a simple observation: travelers were missing out on the authentic Sicily experience by trying to navigate the complexities of planning their trips.
                  </p>
                  <p className="text-gray-700 mb-4 text-lg">
                    We started with a mission to create hassle-free travel experiences that showcase the real Sicily – beyond the tourist spots and into the heart of our culture, traditions, food, and natural wonders.
                  </p>
                </div>
                <div className="order-first md:order-last">
                  <Image 
                    src="https://images.unsplash.com/photo-1583224964978-2e337eed5be0?q=80&w=1600" 
                    alt="Sicilian landscape" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="mb-16"
            >
              <p className="text-lg text-gray-700 mb-8">
                Today, we're proud to have helped thousands of travelers experience Sicily with zero worries and 100% authenticity. Our all-inclusive packages handle everything from accommodation to transport to unique experiences, so you can focus on enjoying every moment.
              </p>
              
              <div className="relative py-10">
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <div className="grid grid-cols-1 gap-12">
                  {/* Our Philosophy */}
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
                    <div className="ml-0 md:ml-8 pl-12 md:pl-0 border-l md:border-l-0 border-gray-200 md:border-none pb-8 relative">
                      <h3 className="text-2xl font-bold font-montserrat text-primary mb-4">Our Philosophy</h3>
                      <p className="text-gray-700 text-lg">
                        We believe that travel should be about immersion, not just sightseeing. Every itinerary we design aims to connect you with the soul of Sicily – its people, traditions, and hidden corners that only locals know about.
                      </p>
                    </div>
                  </div>
                  
                  {/* Our Approach */}
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-6 h-6 rounded-full bg-secondary border-4 border-white"></div>
                    <div className="ml-0 md:ml-8 pl-12 md:pl-0 border-l md:border-l-0 border-gray-200 md:border-none pb-8 relative">
                      <h3 className="text-2xl font-bold font-montserrat text-primary mb-4">Our Approach</h3>
                      <p className="text-gray-700 text-lg">
                        Each package is meticulously designed with both efficiency and experience in mind. We've tested every restaurant, hotel, and activity to ensure it meets our high standards for quality and authenticity.
                      </p>
                    </div>
                  </div>
                  
                  {/* Our Commitment */}
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
                    <div className="ml-0 md:ml-8 pl-12 md:pl-0 border-l md:border-l-0 border-gray-200 md:border-none">
                      <h3 className="text-2xl font-bold font-montserrat text-primary mb-4">Our Commitment</h3>
                      <p className="text-gray-700 text-lg">
                        We're dedicated to sustainable tourism that benefits local communities while preserving Sicily's natural beauty and cultural heritage for future generations to enjoy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Values Section - Integrated with story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="mb-16 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold font-montserrat text-primary mb-8">The Values That Guide Us</h2>
            <p className="text-lg text-gray-700 mb-10">
              Every aspect of our service is built around three core principles that define who we are and how we work:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Simplicity */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-montserrat text-primary mb-3">Simplicity</h3>
                <p className="text-gray-700">
                  We believe travel should be simple. Our packages remove all the complexity, letting you enjoy your journey without stress or worry.
                </p>
              </div>
              
              {/* Authenticity */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-montserrat text-primary mb-3">Authenticity</h3>
                <p className="text-gray-700">
                  We showcase the real Sicily through local guides, hidden gems, and genuine cultural experiences that go beyond typical tourist attractions.
                </p>
              </div>
              
              {/* Reliability */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-montserrat text-primary mb-3">Reliability</h3>
                <p className="text-gray-700">
                  We pride ourselves on delivering exceptional service with attention to every detail, ensuring your trip runs smoothly from start to finish.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section with Testimonial Integration */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl font-bold font-montserrat text-primary mb-4">The Faces Behind JustSicily</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our team consists of passionate Sicilians who love sharing their homeland with travelers from around the world. Each member brings unique expertise and local knowledge to create unforgettable experiences.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Team Member 1 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
                }}
                className="text-center"
              >
                <div className="mb-4 relative overflow-hidden rounded-xl aspect-square">
                  <Image 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500" 
                    alt="Maria Rossi - Founder & CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold font-montserrat text-primary">Maria Rossi</h3>
                <p className="text-gray-600">Founder & CEO</p>
                <p className="mt-2 text-sm text-gray-700">
                  Born and raised in Catania, Maria combines her passion for Sicily with 15 years in travel management.
                </p>
              </motion.div>
              
              {/* Team Member 2 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                }}
                className="text-center"
              >
                <div className="mb-4 relative overflow-hidden rounded-xl aspect-square">
                  <Image 
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=500" 
                    alt="Antonio Bianchi - Operations Manager" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold font-montserrat text-primary">Antonio Bianchi</h3>
                <p className="text-gray-600">Operations Manager</p>
                <p className="mt-2 text-sm text-gray-700">
                  A logistics expert ensuring every JustSicily trip runs perfectly, with an eye for detail and quality service.
                </p>
              </motion.div>
              
              {/* Team Member 3 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
                }}
                className="text-center"
              >
                <div className="mb-4 relative overflow-hidden rounded-xl aspect-square">
                  <Image 
                    src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=500" 
                    alt="Sofia Marino - Experience Designer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold font-montserrat text-primary">Sofia Marino</h3>
                <p className="text-gray-600">Experience Designer</p>
                <p className="mt-2 text-sm text-gray-700">
                  With deep knowledge of Sicilian culture and history, Sofia creates unique experiences that showcase authentic Sicily.
                </p>
              </motion.div>
              
              {/* Team Member 4 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
                }}
                className="text-center"
              >
                <div className="mb-4 relative overflow-hidden rounded-xl aspect-square">
                  <Image 
                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=500" 
                    alt="Paolo Conti - Lead Guide" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold font-montserrat text-primary">Paolo Conti</h3>
                <p className="text-gray-600">Lead Guide</p>
                <p className="mt-2 text-sm text-gray-700">
                  A certified tour guide with encyclopedic knowledge of Sicily's history, archaeology, and hidden gems.
                </p>
              </motion.div>
            </div>
          </div>
          
          {/* Testimonials - Connected to the team */}
          <div className="max-w-5xl mx-auto mt-24 relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="mb-8 text-center"
            >
              <h2 className="text-3xl font-bold font-montserrat text-primary mb-4">The JustSicily Experience</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our travelers have to say about their JustSicily adventures:
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
                }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex mb-4 text-primary">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="italic mb-6 text-gray-700">
                  "JustSicily made our trip magical. They took care of everything, from accommodations to experiences, and we discovered the real Sicily that most tourists never see."
                </p>
                <div>
                  <p className="font-bold text-gray-800">Emma & John Turner</p>
                  <p className="text-sm text-gray-600">London, UK</p>
                </div>
              </motion.div>
              
              {/* Testimonial 2 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex mb-4 text-primary">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="italic mb-6 text-gray-700">
                  "The Etna & Taormina package exceeded all expectations. Our guide Paolo was knowledgeable and personable, and every detail was perfectly arranged."
                </p>
                <div>
                  <p className="font-bold text-gray-800">Michael Schmidt</p>
                  <p className="text-sm text-gray-600">Berlin, Germany</p>
                </div>
              </motion.div>
              
              {/* Testimonial 3 */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }
                }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex mb-4 text-primary">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="italic mb-6 text-gray-700">
                  "As a solo traveler, I was looking for a safe, organized way to experience Sicily. JustSicily delivered that and more – I made friends for life and had amazing adventures."
                </p>
                <div>
                  <p className="font-bold text-gray-800">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Toronto, Canada</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Connected to narrative */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">Ready to Experience All of Sicily?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Our carefully crafted packages include everything mentioned above and more. Let us handle the details while you create unforgettable memories.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/packages" className="bg-primary text-white px-8 py-3 rounded font-bold hover:bg-primary-dark transition-colors">
              View All Packages
            </Link>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-2 border-primary text-primary px-8 py-3 rounded font-bold hover:bg-primary/10 transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="mr-2">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;