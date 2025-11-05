"use client";
import { Mail, Phone, MapPin, Linkedin, Github, Facebook } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen py-20 text-white"
    >
      {/* Header */}
      <div className="text-center  pt-0 md:pt-0  mb-5 md:mb-12 ">
        <h2 className="text-3xl font-bold">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
      <p className="text-gray-400 mt-2 text-lg hidden md:block">
      Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
    </p>
      </div>

      {/* Mobile Scroll */}
      <div className="md:hidden overflow-x-auto scrollbar-thin px-2">
        <div className="flex gap-8">
          {/* Left - Contact Info */}
          <div className="flex-shrink-0 w-full max-w-lg bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 text-left">
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

            <div className="space-y-12 text-lg text-gray-300">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-400" size={22} />
                <span>trannguyennamthuan@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-400" size={22} />
                <span>+84 (0) 945-924-240</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" size={22} />
                <span>Cần Đước, Long An, Việt Nam</span>
              </div>
            </div>

            <h4 className="mt-20 mb-4 text-gray-400 text-lg font-medium text-center">
              Connect With Me
            </h4>
            <div className="flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/tran-nguyen-nam-thu%E1%BA%ADn-640586386" className="hover:text-blue-400 transition">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/thuan223" className="hover:text-blue-400 transition">
                <Github size={24} />
              </a>
              <a href="https://www.facebook.com/trannguyen.namthuan.5/" className="hover:text-blue-400 transition">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Right - Message Form */}
          <div className="flex-shrink-0 w-full max-w-md bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>

        <style jsx>{`
          .scrollbar-thin::-webkit-scrollbar {
            height: 6px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background: transparent;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background-color: gray;
            border-radius: 3px;
          }
        `}</style>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Left - Contact Info */}
        <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 text-left">
          <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

         <div className="space-y-12 text-lg text-gray-300">
          <div className="flex items-center gap-4 break-words">
            <Mail className="text-blue-400" size={22} />
            <span className="break-words max-w-full">trannguyennamthuan@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 break-words">
            <Phone className="text-blue-400" size={22} />
            <span className="break-words max-w-full">+84 (0) 945-924-240</span>
          </div>
          <div className="flex items-center gap-4 break-words">
            <MapPin className="text-blue-400" size={22} />
            <span className="break-words max-w-full">Cần Đước, Long An, Việt Nam</span>
          </div>
        </div>


          <h4 className="mt-20 mb-4 text-gray-400 text-lg font-medium text-center">
            Connect With Me
          </h4>
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/tran-nguyen-nam-thu%E1%BA%ADn-640586386" className="hover:text-blue-400 transition">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/thuan223" className="hover:text-blue-400 transition">
              <Github size={24} />
            </a>
            <a href="https://www.facebook.com/trannguyen.namthuan.5/" className="hover:text-blue-400 transition">
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Right - Message Form */}
        <div className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
