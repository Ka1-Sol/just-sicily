import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be an API call
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    // Reset form
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[30vh] md:h-[40vh] bg-gray-800">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1596627116130-43c1a3b93215?q=80&w=2000&auto=format&fit=crop")', 
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
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-xl">
              Have questions about our packages or need custom travel arrangements?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 text-green-800 rounded-md mb-6"
                >
                  <p className="font-medium">Your message has been sent!</p>
                  <p className="text-sm">We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Package Booking</option>
                    <option value="customTour">Custom Tour Inquiry</option>
                    <option value="groupTour">Group Tour Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="btn-primary w-full py-3"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Right Column - Contact Info & Map */}
            <div>
              <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">Contact Information</h2>
              
              {/* Contact Details */}
              <div className="mb-8 space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary mr-3 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <div>
                    <h3 className="font-bold">Office Address</h3>
                    <p className="text-gray-700">Via Roma, 123<br />Catania, Sicily<br />Italy</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary mr-3 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:info@justsicily.com" className="text-primary hover:underline">info@justsicily.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary mr-3 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-700">
                      <a href="tel:+391234567890" className="text-primary hover:underline">+39 123 456 7890</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary mr-3 mt-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <div>
                    <h3 className="font-bold">Office Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                {/* In a real implementation, this would be a Google Maps iframe or similar */}
                <div className="h-full w-full flex items-center justify-center bg-gray-100 relative">
                  <div className="absolute inset-0 opacity-50" style={{
                    backgroundImage: `url('https://maps.googleapis.com/maps/api/staticmap?center=Catania,Italy&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7CCatania,Italy&key=YOUR_API_KEY')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}></div>
                  <div className="bg-white p-4 rounded-lg shadow-md z-10">
                    <p className="font-bold text-primary">Map Placeholder</p>
                    <p className="text-sm text-gray-600">(Actual implementation would use Google Maps)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold font-montserrat text-primary mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold font-montserrat text-primary mb-3">How do I book a tour package?</h3>
              <p className="text-gray-700">
                You can book a tour package directly on our website by selecting the package you're interested in and clicking the "Book Now" button. Alternatively, you can contact us via email or phone for assistance.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold font-montserrat text-primary mb-3">What's included in your packages?</h3>
              <p className="text-gray-700">
                Our all-inclusive packages typically include accommodation, transportation within Sicily, guided tours, entrance fees to attractions, and some meals. Specific inclusions are listed on each package page.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold font-montserrat text-primary mb-3">Can you arrange custom itineraries?</h3>
              <p className="text-gray-700">
                Yes! We specialize in creating custom itineraries tailored to your interests, timeframe, and budget. Contact us with your preferences, and we'll design a personalized Sicilian experience for you.
              </p>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold font-montserrat text-primary mb-3">What is your cancellation policy?</h3>
              <p className="text-gray-700">
                We offer full refunds for cancellations made 30 days or more before the tour date. Cancellations made 15-29 days before receive a 50% refund. For cancellations less than 15 days before, no refund is provided.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-700">
              Can't find the answer you're looking for? 
              <button className="text-primary font-medium hover:underline ml-1">
                Contact our support team
              </button>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;