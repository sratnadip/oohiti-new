import { motion } from 'motion/react';
import { 
  Cloud, 
  Cpu, 
  Layers, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  ShieldCheck,
  Zap,
  Users,
  Code2,
  Terminal,
  Database,
  Globe,
  ExternalLink,
  Send,
  Mail
} from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Section } from './components/Section';
import { Atmosphere } from './components/Atmosphere';

// Initialize EmailJS
emailjs.init('wTxc_cZ9MY6V_9NsZ');

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Create a timeout promise to prevent hanging
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timed out')), 15000)
    );

    try {
      const formData = new FormData(formRef.current);
      const templateParams = {
        user_name: formData.get('user_name'),
        from_name: formData.get('user_name'), // Common EmailJS variable
        user_email: formData.get('user_email'),
        reply_to: formData.get('user_email'), // Common EmailJS variable
        message: formData.get('message'),
      };

      // Race the EmailJS call against the timeout
      const response = await Promise.race([
        emailjs.send(
          'service_8v6qygi',
          'template_cfwha5w',
          templateParams,
          'wTxc_cZ9MY6V_9NsZ'
        ),
        timeoutPromise
      ]) as any;

      console.log('EmailJS Success:', response.status, response.text);
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Contact Form Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const services = [
    {
      title: "MVP Development",
      subtitle: "Launch faster without overbuilding",
      description: "We turn your idea into a working product quickly, so you can validate, iterate, and move forward with confidence.",
      icon: <Rocket className="w-8 h-8 text-md-primary" />,
      highlight: "Fast delivery"
    },
    {
      title: "Full-Stack Development",
      subtitle: "Build products that are ready for real users",
      description: "We create clean, scalable applications that don’t break when your users grow.",
      icon: <Layers className="w-8 h-8 text-md-primary" />,
      highlight: "Scalable"
    },
    {
      title: "Cloud & Infrastructure",
      subtitle: "Run your product without worrying about downtime",
      description: "We design systems that are reliable, secure, and built to handle growth from day one.",
      icon: <Cloud className="w-8 h-8 text-md-primary" />,
      highlight: "Secure"
    },
    {
      title: "DevOps & Automation",
      subtitle: "Focus on your product, not deployments",
      description: "We automate your workflows so updates, scaling, and maintenance happen smoothly in the background.",
      icon: <Cpu className="w-8 h-8 text-md-primary" />,
      highlight: "Automated"
    }
  ];

  const processSteps = [
    {
      number: "Step 1",
      title: "Understand",
      description: "We start by understanding your idea, goals, and challenges."
    },
    {
      number: "Step 2",
      title: "Build",
      description: "We design and develop a solution that fits your needs."
    },
    {
      number: "Step 3",
      title: "Launch",
      description: "We deploy your product with a stable, production-ready setup."
    },
    {
      number: "Step 4",
      title: "Scale",
      description: "We support and optimize your system as you grow."
    }
  ];

  const techStack = [
    { 
      category: "Frontend", 
      techs: [
        { name: "React", logo: "/svg/frontend/React_dark.svg" },
        { name: "Next.js", logo: "/svg/frontend/nextjs_icon_dark.svg" },
        { name: "TypeScript", logo: "/svg/frontend/typescript.svg" },
        { name: "Tailwind CSS", logo: "/svg/frontend/tailwindcss.svg" },
        { name: "Redux", logo: "/svg/frontend/redux.svg" }
      ] 
    },
    { 
      category: "Backend", 
      techs: [
        { name: "Node.js", logo: "/svg/backend/nodejs.svg" },
        { name: "Go", logo: "/svg/backend/Go_light.svg" },
        { name: "Python", logo: "/svg/backend/python.svg" },
        { name: "PostgreSQL", logo: "/svg/backend/postgresql.svg" },
        { name: "Redis", logo: "/svg/backend/redis.svg" }
      ] 
    },
    { 
      category: "Infrastructure", 
      techs: [
        { name: "AWS", logo: "/svg/Infrastructure/aws_light.svg" },
        { name: "Azure", logo: "/svg/Infrastructure/azure.svg" },
        { name: "Google Cloud", logo: "/svg/Infrastructure/google-cloud.svg" }
      ] 
    },
    { 
      category: "DevOps", 
      techs: [
        { name: "Docker", logo: "/svg/devops/docker.svg" },
        { name: "Kubernetes", logo: "/svg/devops/kubernetes.svg" },
        { name: "Terraform", logo: "/svg/devops/terraform.svg" },
        { name: "GitHub", logo: "/svg/devops/GitHub_light.svg" },
        { name: "Grafana", logo: "/svg/devops/grafana.svg" }
      ] 
    }
  ];

  const caseStudies = [
    {
      title: "Healthcare Integration Platform",
      category: "HEALTHCARE",
      description: "Built EHR workflow connectors to integrate third-party payer solutions, improving clinical decision support usage by 60% and reducing workflow clicks by 15%.",
      tags: ["Security", "Compliance", "Performance"],
      bullets: [
        "60% improved clinical decision support",
        "15% reduction in workflow clicks",
        "Role-based access & audit trails"
      ],
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Cloud-Based CI/CD & Microservices Platform",
      category: "CLOUD & DEVOPS",
      description: "AWS infrastructure provisioned using Terraform with CI/CD pipelines via Jenkins & GitHub Actions. Dockerized 6+ microservices with CloudWatch & ELK monitoring.",
      tags: ["AWS", "Terraform", "Docker"],
      bullets: [
        "40% reduction in manual deployment",
        "30% faster issue detection",
        "6+ microservices containerized"
      ],
      icon: <Cloud className="w-5 h-5" />
    },
    {
      title: "FHIR Serializer",
      category: "OPEN SOURCE / HEALTHCARE",
      description: "A lightweight TypeScript library for serializing and deserializing FHIR R4 resources. Provides type-safe transformations, validation, and seamless integration with healthcare applications.",
      tags: ["TypeScript", "FHIR R4", "Node.js", "Healthcare"],
      bullets: [
        "Type-safe serialization & deserialization for FHIR R4",
        "Designed for healthcare interoperability systems",
        "Lightweight, developer-friendly architecture",
        "Published as an open-source npm package"
      ],
      icon: <Code2 className="w-5 h-5" />,
      links: [
        { label: "GitHub", icon: <Terminal className="w-4 h-4" />, url: "https://github.com/onkarsabale15/fhir_serializer" },
        { label: "Live Demo", icon: <ExternalLink className="w-4 h-4" />, url: "https://www.npmjs.com/package/@onkarsabale15/fhir-r4" }
      ]
    },
    {
      title: "React + TypeScript SPA (Feature-Sliced Design)",
      category: "WEB3 / REACT SPA",
      description: "Built a React + TypeScript SPA using Feature-Sliced Design architecture with route-based code splitting via React.lazy and Suspense. Implemented scalable state management using Redux Toolkit, Redux-Saga, and Redux Persist. Integrated Privy and Solana/Web3 for wallet authentication and blockchain interactions.",
      tags: ["React", "TypeScript", "Redux Toolkit", "Web3", "Sentry"],
      bullets: [
        "Feature-Sliced Design, route-based code splitting (React.lazy + Suspense)",
        "Debouncing, throttling, list virtualization (react-window), memoization",
        "dynamic reducer injection, lazy loading & tree shaking"
      ],
      icon: <Layers className="w-5 h-5" />
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 112; // Account for larger sticky header (h-24 + padding)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen selection:bg-md-primary/30">
      <Atmosphere />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-md-surface/80 backdrop-blur-md border-b border-md-outline/10">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/logo.png" 
              alt="Oohiti Logo" 
              className="h-20 w-auto object-contain transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-md-on-surface-variant hover:text-md-primary transition-colors">Services</a>
            <a href="#process" className="text-sm font-medium text-md-on-surface-variant hover:text-md-primary transition-colors">Process</a>
            <a href="#work" className="text-sm font-medium text-md-on-surface-variant hover:text-md-primary transition-colors">Work</a>
            <a href="#about" className="text-sm font-medium text-md-on-surface-variant hover:text-md-primary transition-colors">About</a>
            <Button variant="filled" onClick={() => scrollToSection('contact')}>Get in touch</Button>
          </div>

          <button 
            className="md:hidden p-2 text-md-on-background"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-16 left-0 w-full bg-md-surface border-b border-md-outline/10 p-4 flex flex-col gap-4 shadow-lg"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium p-2">Services</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium p-2">Process</a>
            <a href="#work" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium p-2">Work</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium p-2">About</a>
            <Button variant="filled" className="w-full" onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}>Get in touch</Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-20 pb-32">
        {/* Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 select-none overflow-hidden">
          <img 
            src="/logo.png" 
            alt="" 
            className="w-[120%] max-w-none h-auto opacity-[0.03] grayscale scale-110 select-none"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-md-on-background leading-[1.1] tracking-tight mb-6">
              We build the <span className="text-md-primary">backbone</span> of your success.
            </h1>
            <p className="text-xl text-md-on-background font-medium mb-4 leading-relaxed mx-auto max-w-2xl">
              We help startups turn ideas into reliable, production-ready products — without the usual delays, confusion, or technical complexity.
            </p>
            <p className="text-lg text-md-on-surface-variant mb-10 leading-relaxed mx-auto max-w-2xl">
              From MVP to scalable systems, we design, build, and manage everything you need to launch and grow faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="filled" className="h-14 px-8 text-lg" onClick={() => scrollToSection('contact')}>
                Get in touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outlined" className="h-14 px-8 text-lg" onClick={() => scrollToSection('work')}>
                View our work
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Services Section */}
      <Section 
        id="services" 
        title="What we help you achieve" 
        className="bg-md-surface-container/50"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hoverable className="h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-md-primary/10 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                <p className="text-sm font-bold text-md-primary mb-3">{service.subtitle}</p>
                <p className="text-md-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4 border-t border-md-outline/10">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-md-on-background">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                    {service.highlight}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works Section */}
      <Section 
        id="process" 
        title="Simple process. Clear results." 
        subtitle="How we take your vision from concept to high-performance reality."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-md-outline/10 -translate-y-1/2 -z-10" />
          
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-md-surface p-8 rounded-md-2xl border border-md-outline/10 md-shadow-1 text-center group hover:border-md-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-md-primary text-white flex items-center justify-center font-bold text-lg mx-auto mb-6 group-hover:scale-110 transition-transform">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-1">{step.number} — {step.title}</h3>
              <p className="text-md-on-surface-variant text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills & Technologies Section */}
      <Section className="bg-md-surface-container/30">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-md-on-background mb-4 tracking-tight">Skills & Technologies</h2>
            <p className="text-md-on-surface-variant leading-relaxed">
              We use a modern, battle-tested tech stack to build products that are fast, secure, and easy to maintain.
            </p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {techStack.map((group, index) => (
              <div key={index}>
                <h4 className="font-bold text-md-primary mb-4 flex items-center gap-2">
                  {index === 0 && <Code2 className="w-5 h-5" />}
                  {index === 1 && <Terminal className="w-5 h-5" />}
                  {index === 2 && <Database className="w-5 h-5" />}
                  {index === 3 && <ShieldCheck className="w-5 h-5" />}
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-4">
                  {group.techs.map((tech, i) => (
                    <div key={i} className="group/tech relative">
                      <div className="w-12 h-12 p-2 rounded-xl bg-md-surface border border-md-outline/10 flex items-center justify-center hover:border-md-primary/30 hover:bg-md-primary/5 transition-all duration-300">
                        <img 
                          src={tech.logo} 
                          alt={tech.name} 
                          className="w-full h-full object-contain filter grayscale group-hover/tech:grayscale-0 transition-all duration-300"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-md-surface-container text-[10px] font-bold rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-md-outline/10 z-10">
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies Section */}
      <Section id="work" title="Case Studies" subtitle="Real-world examples of how we've helped startups scale.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card hoverable className="h-full flex flex-col p-0">
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-md-primary/10 flex items-center justify-center text-md-primary">
                      {study.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-md-on-surface-variant/70">
                      {study.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-md-primary transition-colors leading-tight">
                    {study.title}
                  </h3>
                  
                  <p className="text-sm text-md-on-surface-variant leading-relaxed mb-6">
                    {study.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold px-3 py-1 rounded-full bg-md-surface-container-low text-md-on-surface-variant">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-3 mb-8 pt-6 border-t border-md-outline/10">
                    {study.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-sm text-md-on-background font-medium leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {study.links && (
                    <div className="mt-auto pt-6 flex flex-wrap gap-3">
                      {study.links.map((link, i) => (
                        <a 
                          key={i} 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Button variant={i === 0 ? "tonal" : "outlined"} className="h-9 px-4 text-xs gap-2">
                            {link.icon}
                            {link.label}
                          </Button>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="bg-md-surface">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-md-surface-container p-8 rounded-md-2xl md-shadow-1">
                  <Users className="w-10 h-10 text-md-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2">Product Partners</h4>
                  <p className="text-sm text-md-on-surface-variant">We think like product partners, not task executors.</p>
                </div>
                <div className="bg-md-primary p-8 rounded-md-2xl md-shadow-2 text-white">
                  <Globe className="w-10 h-10 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Global Scale</h4>
                  <p className="text-sm text-md-on-primary/80">Systems built to handle millions of users worldwide.</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-md-secondary-container p-8 rounded-md-2xl md-shadow-1">
                  <ShieldCheck className="w-10 h-10 text-md-on-secondary-container mb-4" />
                  <h4 className="font-bold text-lg mb-2">Secure by Default</h4>
                  <p className="text-sm text-md-on-secondary-container/70">Security isn't an afterthought. It's in every line of code.</p>
                </div>
                <div className="bg-md-surface-container p-8 rounded-md-2xl md-shadow-1">
                  <Zap className="w-10 h-10 text-md-primary mb-4" />
                  <h4 className="font-bold text-lg mb-2">Rapid Iteration</h4>
                  <p className="text-sm text-md-on-surface-variant">Move from idea to launch in weeks, not months.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-md-on-background mb-6 tracking-tight">
              A technology partner, not just a service provider
            </h2>
            <div className="space-y-6 text-lg text-md-on-surface-variant leading-relaxed">
              <p>We work with startups and growing businesses that need more than just developers.</p>
              <p className="font-bold text-md-on-background">You don’t just need code — you need a system that works, scales, and supports your growth.</p>
              <p>That’s where we come in. We focus on building reliable, long-term solutions so you can focus on your product, users, and business.</p>
            </div>
            <div className="mt-10 p-6 bg-md-primary/5 rounded-md-xl border-l-4 border-md-primary">
              <p className="italic text-md-on-background font-medium">
                "We think like product partners, not task executors."
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section title="Why startups choose Oohiti" subtitle="Clarity, speed, and technical excellence in every project.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Clear communication", desc: "No confusion, no unnecessary complexity." },
            { title: "Fast execution", desc: "Move from idea to product quickly." },
            { title: "Scalable systems", desc: "Built for growth from day one." },
            { title: "Reliable support", desc: "We don’t disappear after delivery." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-3 p-6 bg-md-surface border border-md-outline/10 rounded-md-xl hover:md-shadow-1 transition-all">
              <div className="w-10 h-10 rounded-full bg-md-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-md-primary" />
              </div>
              <h4 className="font-bold text-md-on-background">{item.title}</h4>
              <p className="text-sm text-md-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="mb-20">
        <div className="bg-md-primary text-white rounded-[48px] p-12 md:p-24 text-center relative overflow-hidden md-shadow-3">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Have an idea? Let’s build it the right way.
            </h2>
            <p className="text-xl text-md-on-primary/80 mb-12 leading-relaxed">
              Tell us what you’re planning, and we’ll help you turn it into a working product.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="tonal" className="h-16 px-12 text-xl bg-white text-md-primary hover:bg-white/90" onClick={() => scrollToSection('contact')}>
                Get in touch
              </Button>
              <Button variant="outlined" className="h-16 px-12 text-xl border-white text-white hover:bg-white/10" onClick={() => scrollToSection('work')}>
                View our work
              </Button>
            </div>
            <div className="mt-12 flex items-center justify-center gap-8 text-sm font-medium text-md-on-primary/60">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Fast delivery</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Production-ready</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Startup-focused</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-md-surface-container-lowest">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-md-primary mb-4 block">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-md-on-background mb-6 tracking-tight">Let's Build Together</h2>
          <p className="text-lg text-md-on-surface-variant leading-relaxed">
            Let's build scalable, secure, and future-ready systems together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 bg-md-surface-container-low border-none shadow-none">
            <form ref={formRef} className="space-y-6" onSubmit={handleContactSubmit}>
              <div className="text-left">
                <label htmlFor="name" className="block text-sm font-bold text-md-on-background mb-2 ml-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="user_name"
                  required
                  placeholder="Your name"
                  className="w-full h-14 px-6 rounded-xl bg-md-surface-container border border-md-outline/10 focus:border-md-primary focus:ring-1 focus:ring-md-primary outline-none transition-all placeholder:text-md-on-surface-variant/40"
                />
              </div>
              <div className="text-left">
                <label htmlFor="email" className="block text-sm font-bold text-md-on-background mb-2 ml-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="user_email"
                  required
                  placeholder="you@company.com"
                  className="w-full h-14 px-6 rounded-xl bg-md-surface-container border border-md-outline/10 focus:border-md-primary focus:ring-1 focus:ring-md-primary outline-none transition-all placeholder:text-md-on-surface-variant/40"
                />
              </div>
              <div className="text-left">
                <label htmlFor="message" className="block text-sm font-bold text-md-on-background mb-2 ml-1">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full p-6 rounded-xl bg-md-surface-container border border-md-outline/10 focus:border-md-primary focus:ring-1 focus:ring-md-primary outline-none transition-all placeholder:text-md-on-surface-variant/40 resize-none"
                ></textarea>
              </div>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-600 rounded-xl text-sm font-medium text-center">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-600 rounded-xl text-sm font-medium text-center">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <Button 
                variant="filled" 
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 text-lg rounded-full gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
              </Button>
            </form>
          </Card>
          
          <div className="mt-12 flex items-center justify-center gap-2 text-md-on-surface-variant hover:text-md-primary transition-colors cursor-pointer group">
            <Mail className="w-5 h-5" />
            <span className="font-medium">contact.oohiti@gmail.com</span>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-md-surface border-t border-md-outline/10 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center mb-6 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src="/logo.png" 
                alt="Oohiti Logo" 
                className="h-20 w-auto object-contain transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-md-on-surface-variant max-w-sm mb-8 leading-relaxed">
              We partner with startups to build products that are ready to scale from day one
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/oohiti/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-md-surface-container flex items-center justify-center hover:bg-md-primary/10 transition-colors"
              >
                <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" referrerPolicy="no-referrer" />
              </a>
              <a 
                href="https://x.com/Oohiti130611" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-md-surface-container flex items-center justify-center hover:bg-md-primary/10 transition-colors"
              >
                <img src="/twitter.svg" alt="Twitter" className="w-5 h-5" referrerPolicy="no-referrer" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-md-on-surface-variant">
              <li><a href="#services" className="hover:text-md-primary transition-colors">MVP Development</a></li>
              <li><a href="#services" className="hover:text-md-primary transition-colors">Full-Stack Development</a></li>
              <li><a href="#services" className="hover:text-md-primary transition-colors">Cloud & Infrastructure</a></li>
              <li><a href="#services" className="hover:text-md-primary transition-colors">DevOps & Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-md-on-surface-variant">
              <li><a href="#about" className="hover:text-md-primary transition-colors">About Us</a></li>
              <li><a href="#process" className="hover:text-md-primary transition-colors">Our Process</a></li>
              <li><a href="#work" className="hover:text-md-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-md-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-md-outline/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium text-md-on-surface-variant">
            Built with clarity. Designed for growth.
          </p>
          <div className="flex gap-8 text-xs text-md-on-surface-variant">
            <a href="#" className="hover:text-md-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-md-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
