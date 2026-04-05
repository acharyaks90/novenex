import { Link } from "react-router";
import { ArrowRight, CheckCircle, Award, Users, Globe, Shield } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Award,
      title: "Quality Assurance",
      description: "GMP certified manufacturing facilities ensuring highest quality standards"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Rigorous testing and quality control at every stage of production"
    },
    {
      icon: Globe,
      title: "Wide Distribution",
      description: "Extensive distribution network across multiple regions"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced pharmaceutical professionals dedicated to excellence"
    }
  ];

  const stats = [
    { value: "30+", label: "Products" },
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Cities" },
    { value: "99.9%", label: "Quality Rate" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Innovating Healthcare Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Novanex Pharmaceuticals is committed to delivering high-quality medicines that improve lives and advance healthcare worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-500/20 text-white rounded-lg font-semibold hover:bg-blue-500/30 transition-all border-2 border-white/30"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576670159805-622729b5b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnklMjByZXNlYXJjaHxlbnwxfHx8fDE3NzQ5MDY1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pharmaceutical Research"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Novanex
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge research with proven manufacturing excellence to deliver pharmaceutical products you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768403305881-a7a82fd63512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcGlsbHMlMjBjYXBzdWxlc3xlbnwxfHx8fDE3NzQ4NjgxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Quality Medicines"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Committed to Excellence in Pharmaceutical Manufacturing
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Novanex Pharmaceuticals Private Limited is a leading pharmaceutical company dedicated to manufacturing and distributing high-quality medicines. With state-of-the-art facilities and a team of experienced professionals, we ensure every product meets the highest standards of safety and efficacy.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">WHO-GMP certified manufacturing facilities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Comprehensive quality control and assurance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Research-driven product development</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">Committed to regulatory compliance</p>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our network of satisfied partners and discover how Novanex can support your pharmaceutical needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
