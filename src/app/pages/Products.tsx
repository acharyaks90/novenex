import { useState } from "react";
import { Search, Pill, Heart, Brain, Activity, Thermometer, Shield, Stethoscope, ChevronDown } from "lucide-react";

export function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryColors: Record<string, { bg: string; text: string; hover: string; badge: string; button: string }> = {
    All: { bg: "bg-blue-600", text: "text-blue-600", hover: "hover:bg-blue-50 hover:text-blue-600", badge: "bg-blue-100 text-blue-700", button: "bg-blue-600 hover:bg-blue-700" },
    Cardiovascular: { bg: "bg-red-600", text: "text-red-600", hover: "hover:bg-red-50 hover:text-red-600", badge: "bg-red-100 text-red-700", button: "bg-red-600 hover:bg-red-700" },
    Neurological: { bg: "bg-purple-600", text: "text-purple-600", hover: "hover:bg-purple-50 hover:text-purple-600", badge: "bg-purple-100 text-purple-700", button: "bg-purple-600 hover:bg-purple-700" },
    Antibiotics: { bg: "bg-green-600", text: "text-green-600", hover: "hover:bg-green-50 hover:text-green-600", badge: "bg-green-100 text-green-700", button: "bg-green-600 hover:bg-green-700" },
    "Pain Management": { bg: "bg-orange-600", text: "text-orange-600", hover: "hover:bg-orange-50 hover:text-orange-600", badge: "bg-orange-100 text-orange-700", button: "bg-orange-600 hover:bg-orange-700" },
    Respiratory: { bg: "bg-cyan-600", text: "text-cyan-600", hover: "hover:bg-cyan-50 hover:text-cyan-600", badge: "bg-cyan-100 text-cyan-700", button: "bg-cyan-600 hover:bg-cyan-700" },
    Gastroenterology: { bg: "bg-indigo-600", text: "text-indigo-600", hover: "hover:bg-indigo-50 hover:text-indigo-600", badge: "bg-indigo-100 text-indigo-700", button: "bg-indigo-600 hover:bg-indigo-700" },
    Antipyretics: { bg: "bg-pink-600", text: "text-pink-600", hover: "hover:bg-pink-50 hover:text-pink-600", badge: "bg-pink-100 text-pink-700", button: "bg-pink-600 hover:bg-pink-700" }
  };

  const categories = [
    { name: "All", icon: Pill },
    { name: "Cardiovascular", icon: Heart },
    { name: "Neurological", icon: Brain },
    { name: "Antibiotics", icon: Shield },
    { name: "Pain Management", icon: Activity },
    { name: "Respiratory", icon: Stethoscope },
    { name: "Gastroenterology", icon: Activity },
    { name: "Antipyretics", icon: Thermometer }
  ];

  const products = [
    // Cardiovascular
    {
      name: "Atenolol 50mg",
      category: "Cardiovascular",
      form: "Tablet",
      description: "Beta-blocker for hypertension and angina management",
      composition: "Atenolol 50mg",
      packaging: "10x10 Blister Pack"
    },
    {
      name: "Amlodipine 5mg",
      category: "Cardiovascular",
      form: "Tablet",
      description: "Calcium channel blocker for blood pressure control",
      composition: "Amlodipine Besylate 5mg",
      packaging: "10x10 Blister Pack"
    },
    {
      name: "Atorvastatin 10mg",
      category: "Cardiovascular",
      form: "Tablet",
      description: "Lipid-lowering agent for cholesterol management",
      composition: "Atorvastatin Calcium 10mg",
      packaging: "10x10 Blister Pack"
    },
    {
      name: "Clopidogrel 75mg",
      category: "Cardiovascular",
      form: "Tablet",
      description: "Antiplatelet agent to prevent blood clots",
      composition: "Clopidogrel Bisulfate 75mg",
      packaging: "10x10 Blister Pack"
    },
    
    // Antibiotics
    {
      name: "Amoxicillin 500mg",
      category: "Antibiotics",
      form: "Capsule",
      description: "Broad-spectrum antibiotic for bacterial infections",
      composition: "Amoxicillin Trihydrate 500mg",
      packaging: "10x10 Blister Pack"
    },
    {
      name: "Azithromycin 500mg",
      category: "Antibiotics",
      form: "Tablet",
      description: "Macrolide antibiotic for respiratory infections",
      composition: "Azithromycin Dihydrate 500mg",
      packaging: "3 Tablets"
    },
    {
      name: "Ciprofloxacin 500mg",
      category: "Antibiotics",
      form: "Tablet",
      description: "Fluoroquinolone antibiotic for various infections",
      composition: "Ciprofloxacin HCl 500mg",
      packaging: "10x10 Blister Pack"
    },
    {
      name: "Cefixime 200mg",
      category: "Antibiotics",
      form: "Tablet",
      description: "Third-generation cephalosporin antibiotic",
      composition: "Cefixime Trihydrate 200mg",
      packaging: "10x10 Blister Pack"
    },

    // Pain Management
    {
      name: "Paracetamol 500mg",
      category: "Pain Management",
      form: "Tablet",
      description: "Analgesic and antipyretic for pain and fever relief",
      composition: "Paracetamol 500mg",
      packaging: "10x10 Blister Pack"
    },
    {
      name: "Ibuprofen 400mg",
      category: "Pain Management",
      form: "Tablet",
      description: "NSAID for pain, inflammation, and fever",
      composition: "Ibuprofen 400mg",
      packaging: "10x10 Blister Pack"
    },
    {
      name: "Diclofenac 50mg",
      category: "Pain Management",
      form: "Tablet",
      description: "NSAID for pain and inflammation management",
      composition: "Diclofenac Sodium 50mg",
      packaging: "10x10 Blister Pack"
    },
    {
      name: "Tramadol 50mg",
      category: "Pain Management",
      form: "Capsule",
      description: "Opioid analgesic for moderate to severe pain",
      composition: "Tramadol HCl 50mg",
      packaging: "10x10 Blister Pack"
    },

    // Neurological
    {
      name: "Gabapentin 300mg",
      category: "Neurological",
      form: "Capsule",
      description: "Anticonvulsant for neuropathic pain and seizures",
      composition: "Gabapentin 300mg",
      packaging: "10x10 Blister Pack"
    },
    {
      name: "Pregabalin 75mg",
      category: "Neurological",
      form: "Capsule",
      description: "For neuropathic pain and partial seizures",
      composition: "Pregabalin 75mg",
      packaging: "10x10 Blister Pack"
    },
    {
      name: "Alprazolam 0.5mg",
      category: "Neurological",
      form: "Tablet",
      description: "Benzodiazepine for anxiety disorders",
      composition: "Alprazolam 0.5mg",
      packaging: "10x10 Blister Pack"
    },
    {
      name: "Escitalopram 10mg",
      category: "Neurological",
      form: "Tablet",
      description: "SSRI antidepressant for depression and anxiety",
      composition: "Escitalopram Oxalate 10mg",
      packaging: "10x10 Blister Pack"
    },

    // Respiratory
    {
      name: "Montelukast 10mg",
      category: "Respiratory",
      form: "Tablet",
      description: "Leukotriene receptor antagonist for asthma",
      composition: "Montelukast Sodium 10mg",
      packaging: "10x10 Blister Pack"
    },
    {
      name: "Salbutamol Syrup",
      category: "Respiratory",
      form: "Syrup",
      description: "Bronchodilator for asthma and COPD",
      composition: "Salbutamol 2mg/5ml",
      packaging: "100ml Bottle"
    },
    {
      name: "Cetirizine 10mg",
      category: "Respiratory",
      form: "Tablet",
      description: "Antihistamine for allergic rhinitis",
      composition: "Cetirizine HCl 10mg",
      packaging: "10x10 Blister Pack"
    },
    {
      name: "Dextromethorphan Syrup",
      category: "Respiratory",
      form: "Syrup",
      description: "Cough suppressant for dry cough",
      composition: "Dextromethorphan HBr 10mg/5ml",
      packaging: "100ml Bottle"
    },

    // Gastroenterology
    {
      name: "Omeprazole 20mg",
      category: "Gastroenterology",
      form: "Capsule",
      description: "Proton pump inhibitor for acid reflux and ulcers",
      composition: "Omeprazole 20mg",
      packaging: "10x10 Blister Pack"
    },
    {
      name: "Pantoprazole 40mg",
      category: "Gastroenterology",
      form: "Tablet",
      description: "PPI for GERD and gastric ulcers",
      composition: "Pantoprazole Sodium 40mg",
      packaging: "10x10 Blister Pack"
    },
    {
      name: "Ranitidine 150mg",
      category: "Gastroenterology",
      form: "Tablet",
      description: "H2 blocker for acid reduction",
      composition: "Ranitidine HCl 150mg",
      packaging: "10x10 Blister Pack"
    },
    {
      name: "Domperidone 10mg",
      category: "Gastroenterology",
      form: "Tablet",
      description: "Antiemetic for nausea and vomiting",
      composition: "Domperidone 10mg",
      packaging: "10x10 Blister Pack"
    },

    // Antipyretics
    {
      name: "Paracetamol Syrup",
      category: "Antipyretics",
      form: "Syrup",
      description: "Fever reducer for children and adults",
      composition: "Paracetamol 250mg/5ml",
      packaging: "60ml Bottle"
    },
    {
      name: "Ibuprofen Suspension",
      category: "Antipyretics",
      form: "Suspension",
      description: "Antipyretic and anti-inflammatory suspension",
      composition: "Ibuprofen 100mg/5ml",
      packaging: "100ml Bottle"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.composition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryStyles = (categoryName: string) => {
    return categoryColors[categoryName] || categoryColors.All;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Product Range
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive portfolio of quality pharmaceutical products across multiple therapeutic categories
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white py-8 sticky top-20 z-40 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by product name or composition..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative w-full md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full appearance-none px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                {categories.map((category) => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="bg-gray-50 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.name;
              const styles = getCategoryStyles(category.name);
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? `${styles.bg} text-white shadow-lg`
                      : `bg-white text-gray-700 ${styles.hover}`
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                  {isActive && (
                    <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                      {products.filter(p => category.name === "All" || p.category === category.name).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
              {selectedCategory !== "All" && (
                <span> in <span className="font-semibold text-gray-900">{selectedCategory}</span></span>
              )}
            </p>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => {
                const styles = getCategoryStyles(product.category);
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border-t-4"
                    style={{ borderTopColor: `var(--color-${styles.bg}-500, #3b82f6)` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {product.name}
                        </h3>
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${styles.badge}`}>
                          {product.category}
                        </span>
                      </div>
                      <div className={`w-12 h-12 bg-${styles.bg}-100 rounded-lg flex items-center justify-center flex-shrink-0 ml-2`}>
                        <Pill className={`h-6 w-6 text-${styles.text}-600`} />
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <span className="font-medium text-gray-700 w-24 flex-shrink-0">Form:</span>
                        <span className="text-gray-600">{product.form}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-medium text-gray-700 w-24 flex-shrink-0">Composition:</span>
                        <span className="text-gray-600">{product.composition}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-medium text-gray-700 w-24 flex-shrink-0">Packaging:</span>
                        <span className="text-gray-600">{product.packaging}</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <button className={`w-full px-4 py-2 ${styles.button} text-white rounded-lg font-medium transition-colors`}>
                        Request Quote
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quality You Can Trust
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                All our products are manufactured in WHO-GMP certified facilities with stringent quality control measures. Each medicine undergoes rigorous testing to ensure safety, efficacy, and consistency.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">WHO-GMP Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">ISO Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Regulatory Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need More Information?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is ready to provide detailed product information, specifications, and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="mailto:info@novanex.in"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500/20 text-white rounded-lg font-semibold hover:bg-blue-500/30 transition-all border-2 border-white/30"
            >
              Email: info@novanex.in
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}