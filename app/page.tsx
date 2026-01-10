import Link from "next/link";
import { 
  Users, 
  FlaskConical, 
  Trophy, 
  Bus, 
  ArrowRight,
  Award,
  BookOpen,
  Sparkles
} from "lucide-react";

export default function Home() {
  const highlights = [
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Highly qualified and experienced teachers dedicated to student success.",
    },
    {
      icon: FlaskConical,
      title: "Modern Labs",
      description: "State-of-the-art science and computer laboratories with latest equipment.",
    },
    {
      icon: Trophy,
      title: "Sports Facilities",
      description: "Excellent sports infrastructure promoting physical fitness and teamwork.",
    },
    {
      icon: Bus,
      title: "Transport",
      description: "Safe and reliable transport facilities covering all nearby areas.",
    },
  ];

  const notices = [
    "Exam Dates Announced - Check the academic calendar",
    "Annual Sports Day - 15th March 2024",
    "Parent-Teacher Meeting - 20th February 2024",
    "Admissions Open for Session 2024-25",
    "Science Exhibition - 25th February 2024",
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/85"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins leading-tight">
            Empowering Minds at
            <span className="block text-accent mt-2">VSM School, Narora</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Shaping futures through excellence in education, character building, and holistic development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/admissions"
              className="bg-accent text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-light transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Admissions Open</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/virtual-tour"
              className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <Sparkles className="h-5 w-5" />
              <span>Virtual Tour</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">
                Welcome to VSM School, Narora
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Established with a vision to provide quality education, VSM School has been a beacon of 
                academic excellence in Narora for decades. Our institution is committed to nurturing young 
                minds and preparing them for the challenges of tomorrow.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe in holistic development, combining rigorous academics with sports, arts, and 
                character building. Our legacy is built on the success of thousands of students who have 
                gone on to excel in various fields across India and abroad.
              </p>
              <div className="flex items-center space-x-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-gray-600">Alumni</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-gray-600">Expert Teachers</div>
                </div>
              </div>
            </div>

            {/* Principal's Message Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-accent">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 font-poppins">Principal's Message</h3>
              </div>
              <div className="mb-4">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-12 w-12 text-primary" />
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "At VSM School, we are committed to providing an environment where every student can discover 
                their potential, develop their talents, and grow into responsible citizens. Our mission is to 
                blend traditional values with modern education, ensuring our students are well-prepared for the 
                global stage."
              </p>
              <p className="text-primary font-semibold">— Principal, VSM School, Narora</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Why Choose VSM School?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes us a premier educational institution in Narora
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary group"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Notice Board Section */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 mr-3 text-accent" />
            <h2 className="text-3xl font-bold font-poppins">Notice Board</h2>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 overflow-hidden relative">
            <div className="flex animate-marquee space-x-8 whitespace-nowrap w-max">
              {notices.map((notice, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-lg font-medium shrink-0"
                >
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>{notice}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {notices.map((notice, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex items-center space-x-3 text-lg font-medium shrink-0"
                >
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span>{notice}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 font-poppins">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Join the VSM School family and unlock your potential
          </p>
          <Link
            href="/admissions"
            className="inline-block bg-accent text-gray-900 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-accent-light transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Apply for Admission
          </Link>
        </div>
      </section>
    </div>
  );
}
