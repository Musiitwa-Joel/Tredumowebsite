import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Calendar, TrendingUp, BookOpen, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface HomePageProps {
  theme: string;
}

const HomePage: React.FC<HomePageProps> = ({ theme }) => {
  const features = [
    {
      icon: <Users className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Smart Admissions',
      description: 'Streamline your enrollment process with AI-powered automation.'
    },
    {
      icon: <BookOpen className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Advanced Registration',
      description: 'Intelligent course scheduling with smart conflict resolution.'
    },
    {
      icon: <TrendingUp className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Performance Analytics',
      description: 'Track progress with comprehensive analytics and insights.'
    },
    {
      icon: <Calendar className={`h-8 w-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />,
      title: 'Smart Finance',
      description: 'Automated billing and financial reporting in real-time.'
    }
  ];

  const testimonials = [
    {
      quote: "Tredumo has completely transformed how we manage our educational processes. The intuitive interface and powerful analytics have made a significant impact on our efficiency.",
      author: "Sarah Johnson",
      position: "Dean of Admissions, Stanford University",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      quote: "The AI-driven insights have helped us identify areas for improvement that we never would have noticed otherwise. Our student satisfaction rates have increased by 35% since implementing Tredumo.",
      author: "Michael Chen",
      position: "CTO, Harvard Business School",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      quote: "The seamless integration with our existing systems made the transition to Tredumo incredibly smooth. Their support team was exceptional throughout the entire process.",
      author: "Emily Rodriguez",
      position: "Director of IT, MIT",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[url(\'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80\')] bg-cover bg-center opacity-20' : 'bg-[url(\'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80\')] bg-cover bg-center opacity-5'}`}></div>
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-black via-black/95 to-black' : 'bg-gradient-to-b from-white via-white/95 to-white'}`}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-5xl sm:text-6xl md:text-7xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} leading-tight tracking-tight`}
            >
              Education.
              <br />
              Reimagined.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-white/80' : 'text-black/80'} max-w-2xl mx-auto font-light leading-relaxed`}
            >
              Transform your institution with our revolutionary education management platform.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <Link to="/contact" className={`${theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'} px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}>
                Get Started
                <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/features" className={`${theme === 'dark' ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/10 text-black hover:bg-black/20'} backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}>
                Learn more
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-32"
          >
            <div className="relative">
              <div className="absolute -inset-x-20 -top-20 -bottom-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>
              <div className={`relative ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'} backdrop-blur-xl rounded-[2rem] ${theme === 'dark' ? 'border border-white/10' : 'border border-black/10'} p-8 overflow-hidden`}>
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80"
                  alt="Dashboard Preview"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-black/50' : 'from-white/50'} via-transparent to-transparent`}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className={`py-32 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`}>
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className={`text-sm font-medium tracking-widest ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} uppercase`}>Features</span>
            <h2 className={`text-4xl md:text-5xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mt-4 tracking-tight`}>
              Incredible features.
              <br />
              Designed for you.
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`feature-card group ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10' : 'bg-black/5 hover:bg-black/10 border-black/5 hover:border-black/10'}`}
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-4`}>
                  {feature.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-white/70' : 'text-black/70'} text-lg leading-relaxed`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <span className={`text-sm font-medium tracking-widest ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} uppercase`}>And more</span>
            <h3 className={`text-3xl md:text-4xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mt-4 mb-8 tracking-tight`}>
              Discover all capabilities
            </h3>
            <Link to="/features" className={`inline-block ${theme === 'dark' ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/10 text-black hover:bg-black/20'} backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}>
              View all features
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className={`py-32 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`}>
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className={`text-sm font-medium tracking-widest ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} uppercase`}>Dashboard</span>
            <h2 className={`text-4xl md:text-5xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mt-4 tracking-tight`}>
              Beautiful analytics.
              <br />
              At your fingertips.
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>
            
            <div className={`relative ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} backdrop-blur-xl rounded-[2rem] border p-8 overflow-hidden`}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className={`stats-card ${theme === 'dark' ? 'bg-white/5 border-white/5 hover:border-white/10' : 'bg-black/5 border-black/5 hover:border-black/10'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} font-medium`}>Students</h3>
                    <Users className={`h-5 w-5 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} />
                  </div>
                  <p className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-2`}>1,234</p>
                  <p className={`${theme === 'dark' ? 'text-white/60' : 'text-black/60'} text-sm flex items-center`}>
                    <TrendingUp className="h-4 w-4 mr-1" /> +12% this month
                  </p>
                </div>

                <div className={`stats-card ${theme === 'dark' ? 'bg-white/5 border-white/5 hover:border-white/10' : 'bg-black/5 border-black/5 hover:border-black/10'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} font-medium`}>Courses</h3>
                    <BookOpen className={`h-5 w-5 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} />
                  </div>
                  <p className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-2`}>86</p>
                  <p className={`${theme === 'dark' ? 'text-white/60' : 'text-black/60'} text-sm`}>Active sessions</p>
                </div>

                <div className={`stats-card ${theme === 'dark' ? 'bg-white/5 border-white/5 hover:border-white/10' : 'bg-black/5 border-black/5 hover:border-black/10'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} font-medium`}>Revenue</h3>
                    <span className={`text-2xl ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>$</span>
                  </div>
                  <p className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-2`}>284.5k</p>
                  <p className={`${theme === 'dark' ? 'text-white/60' : 'text-black/60'} text-sm flex items-center`}>
                    <TrendingUp className="h-4 w-4 mr-1" /> +8% this month
                  </p>
                </div>

                <div className={`stats-card ${theme === 'dark' ? 'bg-white/5 border-white/5 hover:border-white/10' : 'bg-black/5 border-black/5 hover:border-black/10'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} font-medium`}>Events</h3>
                    <Calendar className={`h-5 w-5 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} />
                  </div>
                  <p className={`text-3xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-2`}>12</p>
                  <p className={`${theme === 'dark' ? 'text-white/60' : 'text-black/60'} text-sm`}>Next 7 days</p>
                </div>
              </div>

              <div className="mt-8">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                  alt="Analytics Dashboard"
                  className="rounded-2xl w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-32 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`}>
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className={`text-sm font-medium tracking-widest ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} uppercase`}>Testimonials</span>
            <h2 className={`text-4xl md:text-5xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mt-4 tracking-tight`}>
              Trusted by leading
              <br />
              institutions worldwide.
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`p-8 rounded-3xl ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-black/5 border-black/5'} backdrop-blur-xl border`}
              >
                <p className={`${theme === 'dark' ? 'text-white/80' : 'text-black/80'} text-lg mb-6 italic`}>"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{testimonial.author}</h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-32 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`}>
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-[2rem] ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} backdrop-blur-xl border p-12 md:p-16 text-center relative overflow-hidden`}
          >
            <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>
            
            <div className="relative">
              <span className={`text-sm font-medium tracking-widest ${theme === 'dark' ? 'text-white/60' : 'text-black/60'} uppercase`}>Ready to transform your institution?</span>
              <h2 className={`text-4xl md:text-5xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'} mt-4 mb-8 tracking-tight`}>
                Start your journey with Tredumo today
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className={`${theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-gray-900'} px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide flex items-center justify-center group`}>
                  Get Started
                  <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/pricing" className={`${theme === 'dark' ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/10 text-black hover:bg-black/20'} backdrop-blur-xl px-8 py-4 rounded-full transition-all duration-300 font-medium text-sm tracking-wide`}>
                  View Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;