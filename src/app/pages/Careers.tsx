import { Briefcase, GraduationCap, TrendingUp, Heart, Users, MapPin, Clock, DollarSign } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Careers() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career progression paths with regular training and development opportunities"
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive health insurance for you and your family"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive team environment"
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Access to training programs, workshops, and industry certifications"
    }
  ];

  const openPositions = [
    {
      title: "Quality Control Manager",
      department: "Quality Assurance",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead quality control operations ensuring compliance with GMP standards and regulatory requirements."
    },
    {
      title: "Production Supervisor",
      department: "Manufacturing",
      location: "Pune, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Supervise pharmaceutical production operations and maintain high-quality manufacturing standards."
    },
    {
      title: "Regulatory Affairs Specialist",
      department: "Regulatory Affairs",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "4-6 years",
      description: "Manage regulatory submissions and ensure compliance with pharmaceutical regulations."
    },
    {
      title: "Research & Development Scientist",
      department: "R&D",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Conduct research on new formulations and optimize existing pharmaceutical products."
    },
    {
      title: "Pharmacovigilance Officer",
      department: "Medical Affairs",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Monitor and report adverse drug reactions, ensuring patient safety compliance."
    },
    {
      title: "Quality Assurance Executive",
      department: "Quality Assurance",
      location: "Pune, India",
      type: "Full-time",
      experience: "1-3 years",
      description: "Support QA operations including documentation, audits, and compliance activities."
    },
    {
      title: "Senior Formulation Chemist",
      department: "R&D",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "5-7 years",
      description: "Lead formulation development projects for various dosage forms."
    },
    {
      title: "Medical Representative",
      department: "Sales & Marketing",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "1-3 years",
      description: "Promote pharmaceutical products to healthcare professionals and build client relationships."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Build your career with a leading pharmaceutical company committed to innovation, quality, and employee growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Work at Novanex?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Novanex Pharmaceuticals, we believe our employees are our greatest asset. We foster a culture of innovation, collaboration, and continuous learning where every team member can thrive and make a meaningful impact on healthcare.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Join a dynamic team of pharmaceutical professionals dedicated to improving patient outcomes through quality medicines. We offer competitive compensation, comprehensive benefits, and excellent career growth opportunities.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're starting your career or looking to take the next step, Novanex provides the platform to achieve your professional goals while contributing to global healthcare advancement.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1671108503276-1d3d5ab23a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMHRlYW18ZW58MXx8fHwxNzc0OTQ4MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team at Novanex"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Employee Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in our people with comprehensive benefits and growth opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600">
              Explore opportunities to join our growing team
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {position.title}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                          {position.department}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {position.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="h-4 w-4 text-gray-400" />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:ml-6">
                    <button className="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to join our team
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-sm text-gray-600">Submit your application and resume through our portal</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Screening</h3>
              <p className="text-sm text-gray-600">Our HR team reviews your application and qualifications</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-sm text-gray-600">Meet with our team to discuss your experience and fit</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Offer</h3>
              <p className="text-sm text-gray-600">Receive and accept your offer to join Novanex</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't See the Right Position?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:novanex.pharmaceutical@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
          >
            Send Resume to novanex.pharmaceutical@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
