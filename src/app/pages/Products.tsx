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
    { name: "Pain Management", icon: Activity },
    { name: "Antipyretics", icon: Thermometer },
    { name: "Gastroenterology", icon: Activity }
  ];

  const products = [
    { name: "Triptonex 5/10/25", composition: "Amitriptyline Hydrochloride 5/10/25 mg Tablet", category: "Neurological", form: "Tablet", description: "Used for neurological health and mood stabilization.", packaging: "Standard box packaging." },
    { name: "Triptonex-PR", composition: "Amitriptyline 10 mg+ Propranolol  40 mg Tablet", category: "Neurological", form: "Tablet", description: "Combination therapy for neurological and related conditions.", packaging: "Standard box packaging." },
    { name: "Triptonex-PR SEMI", composition: "Amitriptyline 5 mg+ Propranolol  20 mg  Tablet", category: "Neurological", form: "Tablet", description: "Combination therapy for neurological and related conditions.", packaging: "Standard box packaging." },
    { name: "Triptonex-M 5/ 10", composition: "Amitriptyline 5/ 10  mg + Mecobalamin 1500 mcg Tablet", category: "Neurological", form: "Tablet", description: "Supports nerve health and mood stabilization.", packaging: "Standard box packaging." },
    { name: "Gabasam -NT 100 / 400", composition: "Gabapentin 100/ 400 mg + Nortriptyline 10 mg  Tablet", category: "Neurological", form: "Tablet", description: "For neuropathic pain and neurological support.", packaging: "Standard box packaging." },
    { name: "Pregaplex 50/ 75", composition: "Pregabalin 50/ 75 mg  Tablet", category: "Neurological", form: "Tablet", description: "For neuropathic pain and seizure management.", packaging: "Standard box packaging." },
    { name: "ULTRICON", composition: "Tramadol 37.5 mg + Paracetamol 375 mg  Tablet", category: "Pain Management", form: "Tablet", description: "Pain relief for moderate to severe pain.", packaging: "Standard box packaging." },
    { name: "Donasep 5/ 10", composition: "Donepezil hydrochloride 5/ 10 mg  Tablet", category: "Neurological", form: "Tablet", description: "For cognitive health and memory support.", packaging: "Standard box packaging." },
    { name: "Memagard 5/ 10", composition: "Memantine hydrochloride 5/ 10 mg Tablet", category: "Neurological", form: "Tablet", description: "Supports cognitive function and memory.", packaging: "Standard box packaging." },
    { name: "Donasep M 5/ 10", composition: "Donepezil 5 mg + Memantine 5/10 mg  Tablet", category: "Neurological", form: "Tablet", description: "Combination for cognitive and memory support.", packaging: "Standard box packaging." },
    { name: "Restipil", composition: "Flupenthixol 0.5 mg+ Melitracen 10 mg Tablet", category: "Neurological", form: "Tablet", description: "For mood stabilization and neurological health.", packaging: "Standard box packaging." },
    { name: "Cipranex 5/ 10", composition: "Escitalopram oxalate 5/ 10 mg Tablet", category: "Neurological", form: "Tablet", description: "For mood disorders and neurological support.", packaging: "Standard box packaging." },
    { name: "Cipranex Plus / Lite", composition: "Escitalopram  10 mg + Clonazepam 0.5/0.25 mg Tablet", category: "Neurological", form: "Tablet", description: "Combination for mood and anxiety management.", packaging: "Standard box packaging." },
    { name: "Cipranex Max / Mini", composition: "Escitalopram 5 mg + Clonazepam 0.5/0.25 mg Tablet", category: "Neurological", form: "Tablet", description: "Combination for mood and anxiety management.", packaging: "Standard box packaging." },
    { name: "Ribonerv CD3", composition: "Methylcobalamin 1500 mcg + Benfotiamine 150 mg + Chromium Picolinate 200 mcg + Alpha Lipoic Acid 100 mg +Inositol 150 mg + Selenium Dioxide Monohydrate 55 mcg + Folic Acid 1.5 mg + Calcium Carbonate 500 Mg +  Vitamin D3 1000 IU", category: "Neurological", form: "Tablet", description: "Nutritional support for nerve health.", packaging: "Standard box packaging." },
    { name: "Ribonerv  D3", composition: "Methylcobalamin 1500 mcg + Pyridoxine hydrochloride 5 mg + Folic Acid 20 mg +  Vitamin D3 1000 IU Tablet", category: "Neurological", form: "Tablet", description: "Nutritional support for nerve health.", packaging: "Standard box packaging." },
    { name: "Nervnox OD", composition: "Methylcobalamin 1500 mcg + Benfotiamine 150 mg + Chromium Picolinate 200 mcg + Alpha Lipoic Acid 100 mg +Inositol 150 mg + Selenium Dioxide Monohydrate 55 mcg + Folic Acid 1.5 mg Tablet", category: "Neurological", form: "Tablet", description: "Nutritional support for nerve health.", packaging: "Standard box packaging." },
    { name: "Actijet D3 60K Nano Shot", composition: "Cholecalciferol (Vitamin D3) Oral Solution 60000 I.U/ 5 ml Nano Shot Bottle", category: "Antipyretics", form: "Oral Solution", description: "Vitamin D3 supplement for bone health.", packaging: "Bottle packaging." },
    { name: "Dvlar OD 250/ 500", composition: "Divalproex Sodium 250/500 mg (Extended Release Tablet)", category: "Neurological", form: "Tablet", description: "For seizure and mood stabilization.", packaging: "Standard box packaging." },
    { name: "Rosaple As 75/150", composition: "Rosuvastatin 10 mg + Asprine 75/ 150 mg Capsule", category: "Cardiovascular", form: "Capsule", description: "For cardiovascular health and cholesterol management.", packaging: "Standard box packaging." },
    { name: "Nervnox AQ PFS", composition: "Methylcobalamin 1500 mcg/ 1 ml Prefilled Methylcobalamin Syringe IV / IM / Subcute", category: "Neurological", form: "Injection", description: "Nutritional support for nerve health.", packaging: "Prefilled syringe." },
    { name: "Mylinstar inj", composition: "Methylcobalamin 1500 mcg + Thiamine 100 mg + Niacinamide 100 mg + Pyridoxine Hcl 100 mg +  D-Panthenol 50 mg  Benzyl Alcohol 2% V/V As Preservative- (Each 2 ml Dispo Pack)", category: "Neurological", form: "Injection", description: "Nutritional injection for nerve health.", packaging: "Dispo pack." },
    { name: "Thiolift Tab/ inj", composition: "Thiamine hydrochloride 100 mg Tablet, Thiamine hydrochloride 100 mg/ml ( 2ml inj )", category: "Neurological", form: "Tablet/Injection", description: "Thiamine supplement for nerve health.", packaging: "Tablet/Injection packaging." },
    { name: "Cognijet inj", composition: "Cerebroprotein hydrolysate 60 mg inj", category: "Neurological", form: "Injection", description: "For cognitive and neurological support.", packaging: "Injection packaging." },
    { name: "EPABrain-DHA Syr", composition: "Omega-3 (Fish oil) 705 mg + Fructo-oligosaccharides 6 gm + EPA (Eicosapentaenoic acid ) 376 mg + DHA (Docosahexaenoic acid) 235 mg + Vitamin D3 400 IU ( Each Serving Quantity 10 ml  ) 200 ml Bottle", category: "Neurological", form: "Syrup", description: "Omega-3 and DHA supplement for brain health.", packaging: "Bottle packaging." },
    { name: "Carnostar-DS Syr", composition: "L-Carnosine 200 mg + DHA 200 mg + Co-enzyme Q-10 50 mg + Vitamin D3-400 IU ( 200 ml Suspension Bottle )", category: "Neurological", form: "Syrup", description: "Nutritional syrup for brain and body health.", packaging: "Bottle packaging." },
    { name: "Carnostar Syr", composition: "L-Carnosine 100 mg + DHA 100 mg + Co-enzyme Q-10 25 mg  ( 200 ml Suspension Bottle )", category: "Neurological", form: "Syrup", description: "Nutritional syrup for brain and body health.", packaging: "Bottle packaging." },
    { name: "Nervnox Syr", composition: "Methylcobalamin 500 mcg + Thiamine 10 mg + Pyridoxine 3 mg + D-Panthenol 5 mg + L-Lysine 150 mg + Added Vitamines & Minerals  Syr", category: "Neurological", form: "Syrup", description: "Nutritional syrup for nerve health.", packaging: "Bottle packaging." },
    { name: "Nervcal-HD", composition: "Calcium Carbonate 1250 mg ( Eq. to Elemental Calcium 500 mg ) + Vitamin D3 250 IU Tablet", category: "Antipyretics", form: "Tablet", description: "Calcium and Vitamin D3 supplement for bone health.", packaging: "Standard box packaging." },
    { name: "Pentonex 40", composition: "Pantoprazole 40 mg Tablet", category: "Gastroenterology", form: "Tablet", description: "For gastric acid reduction and digestive health.", packaging: "Standard box packaging." },
    { name: "ZAGVIA-MV", composition: "Gliclazide 80 mg + Metformin 500 mg  + Voglibose 0.2 mg ( ( Sustained Release ) Tablet", category: "Cardiovascular", form: "Tablet", description: "For blood sugar and cardiovascular management.", packaging: "Standard box packaging." }
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