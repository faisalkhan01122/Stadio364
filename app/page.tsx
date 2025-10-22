"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mic,
  Headphones,
  Radio,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Camera,
  Music,
} from "lucide-react";
import { useRef, useState } from "react";
import { StudioLogo } from "@/components/studio-logo";

export default function Studio634() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/images/studio-4.jpeg",
      alt: "Studio 634 - Professional Recording Setup with Gold Accents",
      title: "Premium Recording Space",
    },
    {
      src: "/images/studio-1.jpeg",
      alt: "Studio 634 - Modern Recording Studio with Purple Lighting",
      title: "State-of-the-Art Equipment",
    },
    {
      src: "/images/studio-3.jpeg",
      alt: "Studio 634 - Elegant Lounge Area with Blue Ambient Lighting",
      title: "Comfortable Environment",
    },
    {
      src: "/images/studio-5.jpeg",
      alt: "Studio 634 - Professional Podcast Recording Session",
      title: "Professional Sessions",
    },
    {
      src: "/images/studio-2.jpeg",
      alt: "Studio 634 - Emagine More Podcast Studio Entrance",
      title: "Creative Space",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground"
    >
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <StudioLogo />
          </motion.div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#gallery"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Gallery
            </a>
            <a
              href="#rates"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Rates
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Book Now
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Animated Background Gradient */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(251, 146, 60, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute inset-0 -z-10"
        />

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Studio 634
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance"
          >
            Your Premier Recording Studio in Mandeville, Louisiana
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you're creating a podcast, conducting interviews, or
            producing high-quality audio content, we have everything you need to
            bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            >
              Book Your Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl border border-border shadow-2xl"
            >
              <img
                src="/images/studio-4.jpeg"
                alt="Studio 634 Interior"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold text-foreground">
                  Professional Setup
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl border border-border shadow-2xl"
            >
              <img
                src="/images/studio-5.jpeg"
                alt="Studio 634 Recording"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold text-foreground">
                  Live Recording Sessions
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl border border-border shadow-2xl"
            >
              <img
                src="/images/studio-3.jpeg"
                alt="Studio 634 Lounge"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold text-foreground">
                  Comfortable Environment
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Studio 634?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience professional recording with state-of-the-art equipment
              and expert support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Mic,
                title: "State-of-the-Art Equipment",
                description:
                  "Our studio is equipped with the latest recording technology, ensuring crystal-clear sound quality for every project.",
                delay: 0.2,
              },
              {
                icon: Headphones,
                title: "Expert Support",
                description:
                  "You're not just renting a space; you're gaining a partner in your creative journey. Our experienced producer is here to guide you.",
                delay: 0.4,
              },
              {
                icon: Radio,
                title: "Seamless Editing Solutions",
                description:
                  "Advanced editing software to polish your audio to perfection. Our team will assist in refining your content.",
                delay: 0.6,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
              >
                <Card className="p-8 h-full bg-card border-border hover:border-primary transition-all duration-300 group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-balance">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 60%)",
          }}
        />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Studio
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take a virtual tour of our professional recording spaces and
              state-of-the-art facilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl border border-border shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {image.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Camera className="w-4 h-4" />
                    <span>View Details</span>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.2, rotate: 90 }}
                >
                  <Music className="w-6 h-6 text-primary" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-6xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors text-sm"
                >
                  Close ✕
                </button>
                <img
                  src={galleryImages[selectedImage].src || "/placeholder.svg"}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-auto rounded-2xl border border-border shadow-2xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {galleryImages[selectedImage].alt}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Rates Section */}
      <section id="rates" className="py-32 relative">
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          }}
        />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Affordable Rates
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We believe that high-quality recording should be accessible.
              Contact us for competitive rates tailored to your project needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-12 bg-card border-border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-8 h-8 text-secondary" />
                    <h3 className="text-3xl font-bold">
                      Professional Packages
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Whether you're a seasoned professional or just starting, we
                    have packages that fit every budget. Get in touch to discuss
                    your project and receive a custom quote.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 whitespace-nowrap"
                >
                  Get a Quote
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Book Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Session Today
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to elevate your audio projects? Get in touch with us to
              schedule your recording session.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(214) 207-4324"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="bg-background border-border"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        634 Village Ln. N.
                        <br />
                        Mandeville, Louisiana
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground">(214) 207-4324</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">
                        info@studio634.com
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/50">
                <h3 className="text-2xl font-bold mb-4">Studio Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <StudioLogo />
            <p className="text-muted-foreground text-center">
              © 2025 Studio 634. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
