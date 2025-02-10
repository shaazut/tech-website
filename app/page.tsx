"use client"; // Ensure this is a client-side component
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [hovered, setHovered] = useState(false); // State to track hover

  useEffect(() => {
    // Load Kommunicate script on component mount
    (function (d, m) {
      var kommunicateSettings = {
        appId: "c0720bbf6deff03eff8386a376d165d5",
        popupWidget: false, // Hide initially
        automaticChatOpenOnNavigation: false,
      };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  // Function to open Kommunicate chat widget
  const openChat = () => {
    if (window.kommunicate) {
      window.kommunicate.chatWidget.open();
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
      <Footer />

      {/* Floating Chat Support Icon */}
      <button
        onClick={openChat}
        onMouseEnter={() => setHovered(true)} // Show alternate icon on hover
        onMouseLeave={() => setHovered(false)} // Revert back when mouse leaves
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 rounded-full"
      >
        {hovered ? "💡" : "💬"} {/* Change icon on hover */}
      </button>
    </main>
  );
}
