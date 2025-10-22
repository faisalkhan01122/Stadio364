"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface Article {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}

export default function Newsletter() {
  // Sample data - easily replaceable
  const articles: Article[] = [
    {
      title: "Seismic Design Updates for Multi-Storey Buildings",
      excerpt:
        "New guidelines from the Structural Engineering Society of New Zealand outline updated seismic design requirements for buildings over 10 storeys. Key changes include enhanced base isolation requirements and revised ductility factors.",
      image:
        "https://images.adsttc.com/media/images/55f1/9741/99e9/ba0f/1000/0026/large_jpg/sklim1.jpg?1441896250",
      date: "15 March 2025",
      category: "Seismic Engineering",
      readTime: "5 min read",
    },
    {
      title:
        "Timber Construction: Sustainable Solutions for Commercial Projects",
      excerpt:
        "Mass timber construction is gaining traction in New Zealand commercial projects. This article explores the structural benefits, fire safety considerations, and environmental advantages of engineered timber systems.",
      image:
        "https://www.cdsmith.com/hubfs/Flying-timber-with-CD-Smith-Construction-skilled-trades-workers-in-Madison-Wisconsin-on-Bakers-Place-project-12.20.2023-(2).jpg",
      date: "15 March 2025",
      category: "Sustainable Design",
      readTime: "4 min read",
    },
    {
      title: "BIM Integration in Structural Analysis Workflows",
      excerpt:
        "Building Information Modeling continues to transform structural engineering practices. Learn how leading firms are integrating BIM with structural analysis software to improve accuracy and reduce design time.",
      image:
        "https://assets.isu.pub/document-structure/211014112557-3b5e9c56dd7dfba188832a454338430e/v1/bdb647f6a58a6bf4f70b6f0d322539d8.jpeg?width=720&quality=85%2C50",
      date: "15 March 2025",
      category: "Technology",
      readTime: "6 min read",
    },
    {
      title: "Foundation Design for Challenging Soil Conditions",
      excerpt:
        "Auckland and Wellington projects often face complex geotechnical challenges. This technical deep-dive covers innovative foundation solutions for soft soils, liquefaction-prone areas, and sloping sites.",
      image:
        "https://s7ap1.scene7.com/is/image/TslDXP/main-article-6?fmt=webp-alpha",
      date: "15 March 2025",
      category: "Geotechnical",
      readTime: "7 min read",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b border-border bg-card"
      >
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Tech Talk
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Technical insights for structural engineers
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-muted-foreground">
                Issue #24
              </p>
              <p className="text-sm text-muted-foreground">March 2025</p>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-lg leading-relaxed text-foreground">
            Welcome to this month's edition of Tech Talk. We've curated the
            latest technical developments, industry insights, and practical
            guidance for structural engineers working across New Zealand's
            construction sector.
          </p>
        </motion.div>

        <Separator className="mb-12" />

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16"
        >
          <Card className="overflow-hidden border-border">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src={articles[0].image || "/placeholder.svg"}
                  alt={articles[0].title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 rounded bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Featured
                </div>
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-medium text-accent">
                    {articles[0].category}
                  </span>
                  <span>•</span>
                  <span>{articles[0].date}</span>
                  <span>•</span>
                  <span>{articles[0].readTime}</span>
                </div>
                <h2 className="mb-4 font-serif text-2xl font-bold leading-tight text-foreground sm:text-3xl text-balance">
                  {articles[0].title}
                </h2>
                <p className="mb-6 leading-relaxed text-muted-foreground text-pretty">
                  {articles[0].excerpt}
                </p>
                <Button className="w-fit" variant="default" asChild>
                  <Link href="#article-1">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Article Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 grid gap-8 md:grid-cols-2"
        >
          {articles.slice(1).map((article, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full overflow-hidden border-border transition-shadow hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-medium text-accent">
                      {article.category}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-bold leading-tight text-foreground text-balance">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {article.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn p-0"
                    asChild
                  >
                    <Link href={`#article-${index + 2}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <Separator className="mb-12" />

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-12"
        >
          <Card className="border-accent/20 bg-accent/5 p-8">
            <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">
              Coming Soon
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                <p className="leading-relaxed text-foreground">
                  <span className="font-semibold">April Issue:</span> In-depth
                  analysis of the new NZS 1170.5 amendments and their impact on
                  existing building assessments
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                <p className="leading-relaxed text-foreground">
                  <span className="font-semibold">Webinar Series:</span> Join
                  our quarterly technical webinar on advanced steel connection
                  design (Registration opens next week)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                <p className="leading-relaxed text-foreground">
                  <span className="font-semibold">Case Study:</span> Detailed
                  structural review of the award-winning Wellington Convention
                  Centre project
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-primary p-8 text-primary-foreground">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 font-serif text-xl font-bold">
                  Visit Our Website
                </h3>
                <p className="mb-4 leading-relaxed opacity-90">
                  Access our complete library of technical articles, design
                  guides, and engineering resources.
                </p>
                <Button
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <Link
                    href="https://example.com/resources"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Browse Resources
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div>
                <h3 className="mb-3 font-serif text-xl font-bold">
                  Design Software
                </h3>
                <p className="mb-4 leading-relaxed opacity-90">
                  Explore our suite of structural analysis and design tools
                  trusted by engineers across New Zealand.
                </p>
                <Button
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <Link
                    href="https://example.com/software"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="border-t border-border bg-card"
      >
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-2 text-sm text-muted-foreground">
              Tech Talk is published fortnightly by [Your Company Name]
            </p>
            <p className="text-sm text-muted-foreground">
              Questions or feedback? Reply to this email or visit our website
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <Link
                href="#unsubscribe"
                className="hover:text-foreground transition-colors"
              >
                Unsubscribe
              </Link>
              <span>•</span>
              <Link
                href="#preferences"
                className="hover:text-foreground transition-colors"
              >
                Update Preferences
              </Link>
              <span>•</span>
              <Link
                href="#browser"
                className="hover:text-foreground transition-colors"
              >
                View in Browser
              </Link>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
