import React from 'react';

export const WebsiteScreenshot: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Navbar */}
      <div className="bg-white border-b border-gray-200 mb-6 rounded-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="font-bold text-lg hidden sm:block">HITAC</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Case Studies</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Tools</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-12 mb-6 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Transform Your Enterprise
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Leading digital transformation and enterprise technology solutions for Fortune 500 companies and global enterprises.
        </p>
        <div className="flex gap-4 justify-center mb-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Start Your Journey
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50">
            Learn More
          </button>
        </div>
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <p className="text-gray-600 text-sm">Projects Delivered</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">150+</div>
            <p className="text-gray-600 text-sm">Enterprise Clients</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <p className="text-gray-600 text-sm">Success Rate</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-8">Comprehensive solutions tailored to drive your enterprise transformation</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🚀', title: 'Digital Transformation', desc: 'Modernize your business processes' },
            { icon: '☁️', title: 'Cloud Solutions', desc: 'Scalable, secure, and cost-effective' },
            { icon: '🔐', title: 'Cybersecurity', desc: 'Enterprise-grade security solutions' },
            { icon: '🤖', title: 'AI & Machine Learning', desc: 'Harness AI power for insights' },
            { icon: '📊', title: 'Strategic Consulting', desc: 'Expert guidance for digital strategy' },
            { icon: '💻', title: 'Custom Development', desc: 'Tailor-made software solutions' }
          ].map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Feature 1
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  Feature 2
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="mb-6 bg-white rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Case Studies
        </h2>
        <p className="text-center text-gray-600 mb-8">Real results from real enterprise clients</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { client: 'Global Retail Corp', industry: 'Retail', metric: '300% Throughput Increase' },
            { client: 'International Bank Group', industry: 'Financial', metric: '99.99% Uptime' }
          ].map((study, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-40 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">{idx === 0 ? '🛒' : '🏦'}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Digital Transformation Study</h3>
              <div className="flex justify-between text-sm text-gray-600 mb-4">
                <div>
                  <div className="font-semibold text-gray-900">{study.client}</div>
                  <div className="text-xs">{study.industry}</div>
                </div>
              </div>
              <div className="text-sm text-blue-600 font-semibold">✓ {study.metric}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="mb-6 bg-gradient-to-b from-white to-gray-50 rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Pricing Plans
        </h2>
        <p className="text-center text-gray-600 mb-8">Choose the perfect plan for your enterprise needs</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Startup', price: '$5,000', features: ['40 hrs/month', 'Cloud support', 'Basic security'] },
            { name: 'Growth', price: '$15,000', features: ['120 hrs/month', 'Full cloud suite', 'Advanced security'], highlighted: true },
            { name: 'Enterprise', price: 'Custom', features: ['Unlimited hours', 'Multi-cloud', 'Enterprise security'] }
          ].map((plan, idx) => (
            <div key={idx} className={`rounded-2xl p-8 transition ${plan.highlighted ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg scale-105' : 'bg-white border border-gray-200'}`}>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">{plan.price}</div>
              <button className={`w-full py-3 rounded-lg font-semibold mb-6 ${plan.highlighted ? 'bg-white text-blue-600 hover:bg-gray-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                Get Started
              </button>
              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-lg">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Statistics */}
      <div className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-12">
        <h2 className="text-4xl font-bold mb-8 text-center">Why Choose HITAC</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            { value: '500+', label: 'Projects' },
            { value: '150+', label: 'Enterprise Clients' },
            { value: '250+', label: 'Team Members' },
            { value: '20+', label: 'Years Experience' },
            { value: '45+', label: 'Countries' },
            { value: '98%', label: 'Success Rate' }
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl font-bold">{stat.value}</div>
              <p className="text-sm opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Digital Clock Preview */}
      <div className="mb-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white rounded-lg p-12">
        <h2 className="text-4xl font-bold mb-2 text-center">Global Digital Clock</h2>
        <p className="text-center text-gray-300 mb-8">Real-time clock across multiple time zones</p>
        
        <div className="bg-black/50 rounded-2xl p-8 mb-8 text-center">
          <div className="text-6xl font-bold font-mono">14:32:45</div>
          <p className="text-purple-300 mt-2">UTC +0</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { flag: '🗽', name: 'EST', time: '09:32:45' },
            { flag: '🌴', name: 'PST', time: '06:32:45' },
            { flag: '🇬🇧', name: 'GMT', time: '14:32:45' },
            { flag: '🇯🇵', name: 'JST', time: '23:32:45' },
            { flag: '🇮🇳', name: 'IST', time: '19:32:45' },
            { flag: '🦘', name: 'AEST', time: '00:32:45' },
            { flag: '🇦🇪', name: 'AET', time: '18:32:45' },
            { flag: '🇦🇷', name: 'ART', time: '11:32:45' }
          ].map((tz, idx) => (
            <div key={idx} className="bg-slate-800 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">{tz.flag}</div>
              <div className="text-sm font-bold">{tz.name}</div>
              <div className="text-xs text-purple-300 font-mono mt-1">{tz.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-neutral-900 text-gray-300 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-2">
              <span className="text-white font-bold">H</span>
            </div>
            <h3 className="font-bold text-white mb-2">HITAC</h3>
            <p className="text-sm">Enterprise digital transformation solutions</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="text-sm space-y-2">
              <li>Digital Transformation</li>
              <li>Cloud Solutions</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="text-sm space-y-2">
              <li>About Us</li>
              <li>Case Studies</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <p className="text-sm">hello@hitac.com</p>
            <p className="text-sm">+20 100 123 4567</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2025 HITAC. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteScreenshot;
