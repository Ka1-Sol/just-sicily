import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh] bg-gray-800">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1605216663980-b7c3633a04a2?q=80&w=2000&auto=format&fit=crop")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
          }}
        />
        
        {/* Content */}
        <div className="relative z-20 container-custom h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">About JustSicily</h1>
            <p className="text-lg md:text-xl max-w-xl">
              Your personal guides to the authentic Sicily experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2015 by a group of passionate Sicilian locals, JustSicily was born from a simple observation: travelers were missing out on the authentic Sicily experience by trying to navigate the complexities of planning their trips.
              </p>
              <p className="text-gray-700 mb-4">
                We started with a mission to create hassle-free travel experiences that showcase the real Sicily – beyond the tourist spots and into the heart of our culture, traditions, food, and natural wonders.
              </p>
              <p className="text-gray-700">
                Today, we're proud to have helped thousands of travelers experience Sicily with zero worries and 100% authenticity. Our all-inclusive packages handle everything from accommodation to transport to unique experiences, so you can focus on enjoying every moment.
              </p>
            </div>
            <div className="order-first md:order-last">
              <img 
                src="https://images.unsplash.com/photo-1583224964978-2e337eed5be0?q=80&w=1600" 
                alt="Sicilian landscape" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold font-montserrat text-primary mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Simplicity */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-primary mb-3">Simplicity</h3>
              <p className="text-gray-700">
                We believe travel should be simple. Our packages remove all the complexity, letting you enjoy your journey without stress or worry.
              </p>
            </div>
            
            {/* Authenticity */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-primary mb-3">Authenticity</h3>
              <p className="text-gray-700">
                We showcase the real Sicily through local guides, hidden gems, and genuine cultural experiences that go beyond typical tourist attractions.
              </p>
            </div>
            
            {/* Reliability */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-montserrat text-primary mb-3">Reliability</h3>
              <p className="text-gray-700">
                We pride ourselves on delivering exceptional service with attention to every detail, ensuring your trip runs smoothly from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold font-montserrat text-primary mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg aspect-square">
                <img 
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
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg aspect-square">
                <img 
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
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg aspect-square">
                <img 
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
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg aspect-square">
                <img 
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
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold font-montserrat mb-12 text-center">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-6">
                "JustSicily made our trip magical. They took care of everything, from accommodations to experiences, and we discovered the real Sicily that most tourists never see."
              </p>
              <div>
                <p className="font-bold">Emma & John Turner</p>
                <p className="text-sm">London, UK</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-6">
                "The Etna & Taormina package exceeded all expectations. Our guide Paolo was knowledgeable and personable, and every detail was perfectly arranged."
              </p>
              <div>
                <p className="font-bold">Michael Schmidt</p>
                <p className="text-sm">Berlin, Germany</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white/10 p-8 rounded-lg">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-6">
                "As a solo traveler, I was looking for a safe, organized way to experience Sicily. JustSicily delivered that and more – I made friends for life and had amazing adventures."
              </p>
              <div>
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-sm">Toronto, Canada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">Ready to Experience Sicily with Us?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Let us handle the details while you enjoy the authentic Sicilian experience you've been dreaming of.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/packages" className="btn-primary">View Our Packages</a>
            <a href="/contact" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors px-6 py-2 rounded">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;