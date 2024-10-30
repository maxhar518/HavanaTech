import { ArrowRight } from 'lucide-react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ServiceIcon = ({ children }) => (
  <div className="mb-4">{children}</div>
);

const services = [
  {
    icon: (
      <ServiceIcon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 24 24"
          style={{ fill: "#ff6666", transform: "rotate(180deg)" }}
        >
          <path d="M20 6h-5.586l2.293-2.293-1.414-1.414L12 5.586 8.707 2.293 7.293 3.707 9.586 6H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM4" />
          <path
            d="M8 18 l0-1 2-4 3 3  4-5"
            stroke="White"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ServiceIcon>
    ),
    title: 'Product Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    icon: (
      <ServiceIcon>
        <svg width="35" height="35" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="#009dc4" />
          <path d="M110,90 L110,10 A80,80 0 0,1 190,90 Z" fill="#87CEEB" />
        </svg>
      </ServiceIcon>
    ),
    title: 'SEO Optimization',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    icon: (
      <ServiceIcon>
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="#E7EDFF" />
          <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="#4785FF" />
        </svg>
      </ServiceIcon>
    ),
    title: 'Branding & Illustration',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    icon: (
      <ServiceIcon>
        <div className="flex items-center justify-center w-10 h-10 border-2 border-orange-500 rounded-md bg-orange-500">
          <i className="fa-thin fa-objects-column text-4xl text-white" ></i>
        </div>
      </ServiceIcon>
    ),
    title: 'Creative layout',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    icon: (<ServiceIcon><i className="fa-solid fa-pen-ruler text-4xl text-purple-500" /></ServiceIcon>),
    title: 'UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    icon: (
      <ServiceIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 24 24" fill="#ff6666">
          <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path>
        </svg>
      </ServiceIcon >
    ),
    title: 'Content Strategy',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
];

export default function App() {
  return (
    <section className="w-full py-10 md:py-20 lg:py-10 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What We Do <span className="underline">For You</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-300">
                <span className="text-sm font-medium">Learn More</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}