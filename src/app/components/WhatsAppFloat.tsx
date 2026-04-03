import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const whatsappNumber = "918930068008"; // Replace with actual WhatsApp number (country code + number, no spaces or special characters)
  const defaultMessage = "Hello! I would like to inquire about your pharmaceutical products.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group hover:scale-110 animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      
      {/* Tooltip */}
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
      </span>
      
      {/* Pulsing ring effect */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
    </button>
  );
}
