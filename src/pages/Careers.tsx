import { motion } from 'motion/react';
import {
  Rocket,
  Layers,
  Cloud,
  Users,
  CheckCircle2,
  ArrowRight,
  Code2,
  Sparkles,
  BookOpen,
  Download,
  FileText,
  Briefcase,
  Cpu
} from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Section } from '../components/Section';

export default function Careers() {
  const learningTracks = [
    {
      title: "AI Tools & Integration",
      description: "Learn to build with modern AI architectures. Work with Large Language Model APIs, prompt engineering, embedding models, semantic search, and vector databases.",
      icon: <Sparkles className="w-8 h-8 text-md-primary" />,
      skills: ["LLM APIs", "Vector DBs", "Semantic Search", "Prompt Engineering"]
    },
    {
      title: "Cloud & DevOps",
      description: "Understand how to deploy and manage applications in production. Learn AWS infrastructure, Docker containerization, CI/CD pipelines, and automated monitoring.",
      icon: <Cloud className="w-8 h-8 text-md-primary" />,
      skills: ["AWS", "Docker", "GitHub Actions", "Monitoring"]
    },
    {
      title: "Full Stack Development",
      description: "Develop frontends and backend systems. Master React, Next.js, Node.js, Go, TypeScript, and database optimization.",
      icon: <Code2 className="w-8 h-8 text-md-primary" />,
      skills: ["React & Next.js", "Node.js & Go", "TypeScript", "PostgreSQL/Redis"]
    },
    {
      title: "Real Product Building",
      description: "Build features that actual users interact with. Learn how to optimize performance, manage state scales, and handle production edge cases.",
      icon: <Rocket className="w-8 h-8 text-md-primary" />,
      skills: ["Production Code", "UX/UI Polish", "Performance Optimization", "Error Tracking"]
    },
    {
      title: "Team Collaboration",
      description: "Work like a professional software engineer. Practice Agile methodologies, Git workflows (PR reviews, branching), and pair programming.",
      icon: <Users className="w-8 h-8 text-md-primary" />,
      skills: ["Git & PR Reviews", "Agile/Scrum", "Technical Writing", "Mentorship Sessions"]
    }
  ];

  const valueProps = [
    {
      title: "Hands-on Learning",
      desc: "No boring training slides or generic tutorials. You will learn by building real features and systems from day one."
    },
    {
      title: "Startup Environment Exposure",
      desc: "Gain a firsthand understanding of how modern tech startups operate, make decisions, and ship software at scale."
    },
    {
      title: "Practical Implementation",
      desc: "Apply computer science theory directly to production environments, learning best practices that standard courses skip."
    },
    {
      title: "Industry Mentorship",
      desc: "Receive daily feedback, detailed code reviews, and career guidance from experienced senior engineers."
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Onboarding & Tooling",
      description: "Get set up with Oohiti's repositories, communication channels, cloud credentials, and developer environments."
    },
    {
      step: "02",
      title: "Skill Validation",
      description: "Complete hands-on, practical mini-tasks designed to validate your familiarity with our tech stack and practices."
    },
    {
      step: "03",
      title: "Real-World Projects",
      description: "Join active development squads to build, optimize, and launch production features used by real clients."
    },
    {
      step: "04",
      title: "Mentorship & Reviews",
      description: "Collaborate daily with senior developers, participating in design discussions and thorough pull request reviews."
    },
    {
      step: "05",
      title: "Graduation & Portfolio",
      description: "Complete the program with a production-ready portfolio, internship certificate, and personalized recommendation letter."
    }
  ];

  return (
    <div className="relative pt-12 pb-24 selection:bg-md-primary/30">
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-16 pb-24 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-md-primary/10 text-md-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Briefcase className="w-3.5 h-3.5" />
              Oohiti Internship Training Program
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-md-on-background leading-[1.15] tracking-tight mb-6">
              Build Real-World Skills with <span className="text-md-primary">Oohiti</span>
            </h1>
            <p className="text-lg md:text-xl text-md-on-surface-variant mb-10 leading-relaxed mx-auto max-w-3xl">
              An immersive, hands-on training program designed for aspiring developers. We don't do boring slides or mock exercises—you will build and deploy real production software alongside industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/SzmU1BxT2C9ibdkM7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="filled" className="h-14 px-8 text-lg w-full sm:w-auto">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a
                href="/assets/oohiti_brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="outlined" className="h-14 px-8 text-lg w-full sm:w-auto">
                  View Brochure
                  <FileText className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* About the Program */}
      <Section className="bg-md-surface-container/30">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-md-primary mb-4 block">About the Program</span>
            <h2 className="text-3xl md:text-4xl font-bold text-md-on-background mb-6 tracking-tight leading-tight">
              An elite training ground for software engineers
            </h2>
            <div className="space-y-6 text-base text-md-on-surface-variant leading-relaxed">
              <p>
                The Oohiti Internship Training Program is built on a simple philosophy: **the best way to learn software engineering is to build real software.**
              </p>
              <p>
                This is not a passive learning course. You will be integrated directly into our startup workflows, gaining experience with codebases, cloud platforms, and engineering methodologies.
              </p>
              <p className="font-semibold text-md-on-background">
                If you are passionate about coding and eager to move beyond classroom assignments, this program is designed for you.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-md-surface p-8 rounded-3xl border border-md-outline/10 md-shadow-1 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-md-primary/5 to-transparent pointer-events-none" />
              <div className="relative z-10 grid sm:grid-cols-2 gap-6 text-center">
                <div className="p-6 bg-md-surface-container/50 rounded-2xl border border-md-outline/5">
                  <Rocket className="w-8 h-8 text-md-primary mx-auto mb-3" />
                  <h4 className="font-bold text-md-on-background mb-1">Real Shipping Code</h4>
                  <p className="text-sm text-md-on-surface-variant">Contribute directly to production-level features and repositories.</p>
                </div>
                <div className="p-6 bg-md-surface-container/50 rounded-2xl border border-md-outline/5">
                  <Cpu className="w-8 h-8 text-md-primary mx-auto mb-3" />
                  <h4 className="font-bold text-md-on-background mb-1">Modern Architectures</h4>
                  <p className="text-sm text-md-on-surface-variant">Work with React, Go, Docker, and AI/LLM models.</p>
                </div>
                <div className="p-6 bg-md-surface-container/50 rounded-2xl border border-md-outline/5">
                  <Users className="w-8 h-8 text-md-primary mx-auto mb-3" />
                  <h4 className="font-bold text-md-on-background mb-1">Direct Mentorship</h4>
                  <p className="text-sm text-md-on-surface-variant">Daily guidance and in-depth reviews from senior engineers.</p>
                </div>
                <div className="p-6 bg-md-surface-container/50 rounded-2xl border border-md-outline/5">
                  <BookOpen className="w-8 h-8 text-md-primary mx-auto mb-3" />
                  <h4 className="font-bold text-md-on-background mb-1">Portfolio Building</h4>
                  <p className="text-sm text-md-on-surface-variant">Graduate with a tangible portfolio of built and deployed work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What You'll Learn */}
      <Section title="What You'll Learn" subtitle="Gain expertise across the entire modern software development lifecycle.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningTracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hoverable className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-md-primary/10 flex items-center justify-center mb-5">
                    {track.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-md-on-background">{track.title}</h3>
                  <p className="text-sm text-md-on-surface-variant mb-6 leading-relaxed">
                    {track.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-md-outline/10 font-medium">
                  {track.skills.map((skill, i) => (
                    <span key={i} className="text-[10px] font-bold px-2 py-1 rounded bg-md-surface-container-low text-md-on-surface-variant">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Join Oohiti */}
      <Section className="bg-md-surface-container/30">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-md-primary mb-4 block">Why Join Oohiti</span>
          <h2 className="text-3xl md:text-4xl font-bold text-md-on-background mb-4 tracking-tight">Accelerate Your Technical Career</h2>
          <p className="text-base text-md-on-surface-variant max-w-2xl mx-auto">
            Traditional bootcamps teach syntax. We teach you how to think, build, and operate as a professional in a fast-growing startup.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col gap-3 p-6 bg-md-surface border border-md-outline/10 rounded-2xl hover:md-shadow-1 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-md-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-md-primary" />
              </div>
              <h4 className="font-bold text-md-on-background">{item.title}</h4>
              <p className="text-sm text-md-on-surface-variant leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Workflow / Process */}
      <Section
        title="Internship Workflow"
        subtitle="A step-by-step path designed to transition you from learner to shipping engineer."
      >
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-md-outline/10 -translate-x-1/2" />

          <div className="space-y-12">
            {workflowSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} relative`}>
                  {/* Step bubble */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-md-primary border-4 border-md-background text-white flex items-center justify-center font-bold text-sm z-10">
                    {step.step}
                  </div>

                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="bg-md-surface-container p-6 rounded-2xl border border-md-outline/10 md-shadow-sm hover:border-md-primary/20 transition-colors"
                    >
                      <h4 className="text-lg font-bold text-md-on-background mb-2">{step.title}</h4>
                      <p className="text-sm text-md-on-surface-variant leading-relaxed">{step.description}</p>
                    </motion.div>
                  </div>
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Apply Now & Brochure Section */}
      <Section className="mb-8">
        <div className="bg-md-primary text-white rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden md-shadow-3">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Build Real-World Skills?
            </h2>
            <p className="text-lg text-md-on-primary/80 mb-10 leading-relaxed max-w-xl mx-auto">
              Applications are reviewed on a rolling basis. Register your interest, submit your resume, and take the first step towards a professional engineering role.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://forms.gle/SzmU1BxT2C9ibdkM7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="tonal" className="h-14 px-8 text-lg bg-white text-md-primary hover:bg-white/90 w-full font-bold">
                  Fill Application Form
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a
                  href="/assets/oohiti_brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button variant="outlined" className="h-14 px-6 text-base border-white text-white hover:bg-white/10 w-full font-bold">
                    View Brochure
                  </Button>
                </a>
                <a
                  href="/assets/oohiti_brochure.pdf"
                  download
                  className="w-full sm:w-auto"
                >
                  <Button variant="outlined" className="h-14 px-6 text-base border-white text-white hover:bg-white/10 w-full font-bold">
                    Download PDF
                    <Download className="ml-2 w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
