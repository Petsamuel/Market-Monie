import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiMessageCircle, FiPhoneCall, FiMail, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const HelpSupport = () => {
  const navigate = useNavigate();

  const [contactForm, setContactForm] = useState({ subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I apply for a loan?',
      answer: 'You can apply for a loan directly from your dashboard by clicking the "Apply Now" button and following the steps. Ensure you have your BVN and shop details ready.'
    },
    {
      id: 2,
      question: 'What is the interest rate?',
      answer: 'The interest rate varies depending on the loan amount and repayment period, generally starting at 5% per month. The exact rate will be calculated during application.'
    },
    {
      id: 3,
      question: 'Can I repay my loan before the due date?',
      answer: 'Yes, you can repay your full balance at any time without any pre-payment penalties. Just select the "Pay Full Balance" option.'
    },
    {
      id: 4,
      question: 'What happens if I miss a payment?',
      answer: 'Missing a payment may attract late fees and negatively impact your credit score. If you are struggling, please contact support before your due date.'
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setContactForm({ subject: '', message: '' });
      alert('Message sent! Our support team will get back to you shortly.');
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 font-poppins pb-10">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => navigate(-1)}
          className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-600 hover:text-emerald-600 hover:border-emerald-100 transition-all shadow-xs cursor-pointer"
        >
          <FiArrowLeft size={18} />
        </button>
        <div>
          <h2 className="text-xl font-bold text-gray-900 leading-tight">Help & Support</h2>
          <p className="text-[11px] text-gray-400 font-medium">We're here to help you</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        
        {/* Contact Form */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm space-y-6 h-fit">
          <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Send us a message
          </h3>
          
          <form onSubmit={handleSendMessage} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">Subject</label>
              <input 
                type="text" 
                required
                value={contactForm.subject}
                onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm font-medium rounded-xl px-4 py-3.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                placeholder="How can we help?"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">Message</label>
              <textarea 
                required
                rows="4"
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm font-medium rounded-xl px-4 py-3.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                placeholder="Describe your issue..."
              ></textarea>
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
              >
                <FiMessageCircle size={16} />
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
            <a href="tel:+2348000000000" className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors cursor-pointer group">
              <FiPhoneCall className="text-gray-400 group-hover:text-emerald-600 mb-2" size={24} />
              <span className="text-xs font-bold text-gray-700">Call Us</span>
            </a>
            <a href="mailto:support@marketmonie.com" className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-colors cursor-pointer group">
              <FiMail className="text-gray-400 group-hover:text-emerald-600 mb-2" size={24} />
              <span className="text-xs font-bold text-gray-700">Email Us</span>
            </a>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm h-fit">
          <h3 className="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map(faq => (
              <div key={faq.id} className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50/50">
                <button 
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-bold text-gray-800">{faq.question}</span>
                  {openFaq === faq.id ? <FiChevronUp className="text-emerald-600" /> : <FiChevronDown className="text-gray-400" />}
                </button>
                {openFaq === faq.id && (
                  <div className="p-4 pt-0 text-xs text-gray-600 font-medium leading-relaxed bg-gray-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HelpSupport;
