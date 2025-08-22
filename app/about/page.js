import React from 'react';
import Testimonials from '../../src/components/Testimonials';

export const metadata = {
  title: 'About Us',
  description: 'Learn about NevoStack, the team behind lightning-fast websites, sleek mobile apps, high-converting e-commerce platforms, AI automation solutions, and effective SEO strategies.',
  keywords: ['about NevoStack', 'web development team', 'mobile app developers', 'e-commerce experts', 'AI automation experts', 'SEO specialists', 'company history'],
};

const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Alex has over 15 years of experience in web development and has worked with Fortune 500 companies.'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Lead Designer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Sarah is an award-winning designer with a passion for creating beautiful and functional user experiences.'
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Senior Developer',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    bio: 'Michael specializes in front-end development and has mastered the latest frameworks and technologies.'
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    bio: 'Emily ensures that all projects are delivered on time and within budget while maintaining high quality.'
  }
];

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Animated Background */}
      {/* <div className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(0, 163, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(0, 163, 255, 0.1) 0%, transparent 50%)'
          }}></div>
          <div className="absolute top-0 left-0 w-full h-full" style={{ 
            backgroundSize: '20px 20px',
            backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            About Us
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-8">
            Learn more about our company, our mission, and our team
          </p>
        </div>
      </div> */}

      <div className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            About Us
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4">
            Learn more about our company our mission and our team
          </p>
        </div>
      </div>
      
      
      {/* Our Story Section with Improved Layout */}
      <section id="our-story" className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#00A3FF" d="M39.9,-65.7C52.8,-58.2,65.2,-49.6,73.1,-37.4C81,-25.2,84.4,-9.4,81.9,5.2C79.5,19.8,71.2,33.2,61.1,44.9C51,56.6,39.1,66.6,25.5,71.8C11.9,77,-3.3,77.3,-18.4,74C-33.5,70.7,-48.5,63.8,-59.2,52.5C-69.9,41.2,-76.3,25.4,-77.8,9.4C-79.2,-6.7,-75.8,-23,-68.2,-37.1C-60.6,-51.2,-48.9,-63.2,-35.5,-70.5C-22,-77.8,-6.9,-80.5,3.8,-86.5C14.4,-92.5,27,-73.2,39.9,-65.7Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 text-sm font-semibold text-secondary bg-secondary/10 rounded-full mb-4">Our Journey</div>
              <h2 className="text-3xl font-extrabold text-primary sm:text-4xl mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-4">
                  Welcome to Nevostack— your trusted partner in the digital world. We are a full-service web development and digital solutions company, dedicated to turning your ideas into powerful online experiences. From sleek websites to high-performing mobile apps, we specialize in creating smart, scalable, and visually impactful solutions that help your business grow and stand out in today's digital age.
                </p>
                <p className="mb-4">
                  Whether you're a startup aiming to make a bold entry or an established brand looking to scale, we tailor our services to match your unique goals. Our approach blends creative thinking with technical expertise, ensuring every project delivers on both aesthetics and results. We don't just build websites — we build experiences that connect, engage, and convert.
                </p>
                <p className="mb-4">
                  We believe in long-term partnerships, not just one-time projects. Your success is our priority — and we're here to make it happen.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-medium text-lg">Our collaborative team at work</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section with Cards */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-secondary bg-secondary/10 rounded-full mb-4">Our Advantages</div>
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              What sets us apart from the competition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 group-hover:bg-secondary/10 transition-all duration-300"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary text-white p-3 rounded-xl mr-5 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">Experienced & Passionate Team</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Our team combines technical expertise with genuine passion for creating digital solutions that exceed expectations and drive real results for our clients.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 group-hover:bg-secondary/10 transition-all duration-300"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary text-white p-3 rounded-xl mr-5 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">Tailored, Business-Focused Solutions</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  We don't believe in one-size-fits-all approaches. Every solution we create is customized to address your specific business challenges and growth objectives.
                </p>
              </div>
              </div>
              
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 group-hover:bg-secondary/10 transition-all duration-300"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary text-white p-3 rounded-xl mr-5 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">Transparent Communication & On-Time Delivery</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  We maintain clear, honest communication throughout the project lifecycle and consistently deliver quality work within agreed timeframes and budgets.
                </p>
              </div>
              </div>
              
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 group-hover:bg-secondary/10 transition-all duration-300"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="bg-secondary text-white p-3 rounded-xl mr-5 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">Commitment to Quality, Innovation & Growth</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  We're dedicated to delivering exceptional quality while embracing innovative approaches that help your business adapt, evolve, and achieve sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-secondary bg-secondary/10 rounded-full mb-4">Meet Our Experts</div>
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              The talented people behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <div className="flex space-x-3">
                        <a href="#" className="text-white hover:text-secondary">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="#" className="text-white hover:text-secondary">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a href="#" className="text-white hover:text-secondary">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* CTA Section */}
      {/* <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to transform your digital presence?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
              Let's work together to create something amazing for your business.
            </p>
            <div className="mt-10">
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl">
                Get in Touch
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
} 