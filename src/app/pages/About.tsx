import { Target, Eye, Award, Users, TrendingUp, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Uncompromising commitment to the highest quality standards in every product we manufacture."
    },
    {
      icon: Heart,
      title: "Patient-Centric",
      description: "Putting patient health and safety at the heart of everything we do."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Continuously advancing pharmaceutical science through research and development."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships with healthcare providers and stakeholders."
    }
  ];

  const milestones = [
    { year: "2008", event: "Company Founded" },
    { year: "2012", event: "WHO-GMP Certification Achieved" },
    { year: "2015", event: "Expanded to International Markets" },
    { year: "2018", event: "Launched 100th Product" },
    { year: "2020", event: "New State-of-the-Art Facility" },
    { year: "2023", event: "Reached 50+ Countries" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About Novanex Pharmaceuticals
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              A trusted name in pharmaceutical manufacturing, committed to improving global healthcare through quality medicines and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Novanex Pharmaceuticals Private Limited is a leading pharmaceutical manufacturing company established with a vision to make quality healthcare accessible to all. With over 15 years of experience in the pharmaceutical industry, we have built a reputation for excellence in manufacturing, quality control, and customer service.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our state-of-the-art manufacturing facilities are equipped with the latest technology and operate under stringent WHO-GMP guidelines. We specialize in the production of a wide range of pharmaceutical formulations, including tablets, capsules, injectables, and syrups.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Operating across multiple therapeutic segments, we serve healthcare providers, hospitals, and distributors in over 50 countries worldwide. Our commitment to quality, innovation, and patient safety drives everything we do.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757578097654-fdae0f7cf008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmclMjBmYWNpbGl0eXxlbnwxfHx8fDE3NzQ5NDgzMDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Manufacturing Facility"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To manufacture and supply high-quality, affordable pharmaceutical products that meet international standards, while continuously innovating to address unmet medical needs and improve patient outcomes globally.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-cyan-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a globally recognized pharmaceutical company known for excellence in quality, innovation, and customer service, making a positive impact on healthcare systems and patient lives worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our operations and shape our culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey/Timeline */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth story
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                <div className="text-gray-700 font-medium">{milestone.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1666886573681-a8fbe983a3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NDg0ODAxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our Team"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Expert Team
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                At Novanex, we believe our people are our greatest asset. Our team comprises experienced pharmacists, chemists, quality control experts, and healthcare professionals who are passionate about pharmaceutical excellence.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                With extensive expertise in pharmaceutical manufacturing, regulatory compliance, and quality assurance, our team ensures that every product meets the highest standards of safety and efficacy.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We invest continuously in training and development to keep our team at the forefront of pharmaceutical innovation and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quality & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is backed by international certifications and rigorous quality control processes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WHO-GMP Certified</h3>
              <p className="text-sm text-gray-600">World Health Organization Good Manufacturing Practices</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ISO Certified</h3>
              <p className="text-sm text-gray-600">International quality management standards</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Regulatory Compliant</h3>
              <p className="text-sm text-gray-600">Adheres to national and international regulations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
