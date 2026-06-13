'use strict';

/* ===========================
   PORTFOLIO DATA (SAFE)
   =========================== */
const portfolioData = {
  name: "Lakshana N",
    tagline: "Design. Build. Think in Systems.",
    intro: "Computer science student, Creating end-to-end web solutions, from intuitive interfaces to intelligent backends.Focused on AI integration, full-stack development, and meaningful design.",
    email: "lakshanan14@gmail.com",
    linkedin: "https://www.linkedin.com/in/lakshana-n-901936328/",
    github: "https://github.com/Lakshanan-pro",
    
    skills: {
      programming: ["Java", "C", "Python", "C++", "JavaScript"],
      web: ["React", "HTML/CSS", "MongoDB","SQL", "Node.js"],
      ai: ["Machine Learning",  "Prompt Engineering", "AI Integration"],
      tools: ["Git", "VSCode", "PowerBI", "Google Colab", "Figma"]
    },
    
    projects: [
      {
        id: 1,
        title: "Ecowatt App",
        subtitle: "IoT-Based Solar Monitoring System",
        problem: "Solar panel owners lack real-time visibility into energy production and optimal harvesting times, leading to inefficient energy usage.",
        approach: "Developed an IoT-enabled mobile application that tracks power generation, voltage levels, and energy costs in real-time. Implemented push notification system to alert users during peak solar production hours.",
        tech: ["HTML", "CSS", "JavaScript", "Firebase", "ESP32", "IoT Sensors"],
        outcome: "Successfully deployed monitoring system enabling users to optimize energy consumption patterns and maximize solar efficiency.",
        team: 4,
        status: "Completed",
        category: "IoT"
      },
      {
        id: 2,
        title: "AI-Powered Interview Coach",
        subtitle: "Intelligent Career Preparation Platform",
        problem: "Job seekers struggle to practice interviews effectively and receive constructive feedback on their performance.",
        approach: "Built a web application leveraging Google Gemini API to simulate realistic interview scenarios. Integrated AI-driven analysis to evaluate responses and provide personalized improvement suggestions with targeted learning resources.",
        tech: ["Python", "Flask", "SQLite", "SQLAlchemy", "HTML/CSS", "JavaScript", "Google Gemini API"],
        outcome: "Created an accessible platform helping users build confidence through AI-powered mock interviews and detailed performance analytics.",
        team: 3,
        status: "Completed",
        category: "AI/ML"
      },
     {
  id: 3,
  title: "Hybrid Deep Learning–Based QR Code Cyberattack Detection System",
  subtitle: "Real-Time QR Threat Detection Platform",
  problem: "Users often scan QR codes without knowing whether they lead to phishing websites, malware downloads, or other malicious destinations, creating significant cybersecurity risks.",
  approach: "Developed a hybrid detection system that combines CNN-based QR image analysis, URL feature engineering, and Random Forest redirect-chain modeling. The platform analyzes QR codes before users access the target webpage and classifies them as malicious, phishing, or benign in real time.",
  tech: ["Python", "PyTorch", "scikit-learn", "OpenCV", "Pillow", "pyzbar", "Requests", "FastAPI"],
  outcome: "Achieved high detection accuracy with lower processing latency compared to standalone CNN/LSTM approaches. Delivered a modular and deployable prototype capable of effectively identifying QR-based phishing and malware attacks.",
  team: 3,
  status: "Completed",
  category: "Cybersecurity/AI"
}
    ],
    
    hackathons: [
      {
        name: "Smart Student Hostel Hackathon",
        organizer: "IIT Madras",
        achievement: "Top 10 Team - ₹25,000 Cash Prize",
        description: "Developed innovative hostel safety and mental wellbeing solution",
        year: 2025,
        highlight: true
      },
      {
        name: "GPTathon",
        organizer: "Coimbatore Institute of Technology",
        achievement: "Finalist",
        description: "Built AI-powered Interview Preparation application",
        year: 2025,
        highlight: true
      },
      {
        name: "ODOO Hackathon",
        organizer: "ODOO Company",
        achievement: "Finalist",
        description: "Enterprise software solution development",
        year: 2025,
        highlight: true
      },
      {
        name: "Smart India Hackathon",
        organizer: "Government of India",
        achievement: "Department Level Selection",
        description: "Microplastic Detection in Water using IoT & ML",
        year: 2025,
        highlight: false
      },
      {
        name: "Aether HackConquest",
        organizer: "Thakur College, Mumbai",
        achievement: "Participant",
        description: "Real-Time Cybersecurity Dashboard",
        year: 2025,
        highlight: false
      },
      {
        name: "FS'tival",
        organizer: "GNU/Linux User Group TCE",
        achievement: "Participant",
        description: "Cybersecurity project using Metasploit",
        year: 2025,
        highlight: false
      }
    ],
    
    experience: [
      {
        company: "Marlion Technologies",
        role: "AI & ML Training",
        duration: "4 weeks",
        description: "Acquired practical knowledge in Artificial Intelligence and Machine Learning through real-time projects",
        type: "Training"
      },
      {
        company: "Silicon Harvest",
        role: "Web Development Training",
        duration: "2 weeks",
        description: "Gained hands-on experience in web development and creating user-friendly interfaces",
        type: "Training"
      }
    ],
    
    leadership: [
      {
        role: "General Treasurer",
        organization: "GNU/Linux User Group Of TCE(GLUGOT)",
        college: "Thiagarajar College of Engineering",
        activities: "Organized 'Pystar' coding event on HackerRank, 'DB DON' database event in offline and more tech events"
      }
    ],
    
    education: [{
      degree: "B.E Computer Science and Engineering",
      college: "Thiagarajar College of Engineering",
      university: "Anna University (Autonomous)",
      cgpa: "8.48*",
      year: "2023 - 2027",
    },
    {
      degree: "Higher secondary",
      college: "O.C.P.M.Girls.Hr.Sec.School",
      university: "State Board",
      cgpa: "94.5%",
      year: "2011 - 2023"
    }
    ],
    
    certifications: [
      "NPTEL: Privacy & Security in Online Social Media (Top 1%, Elite+Silver - 88%)",
      "IBM: Introduction to Artificial Intelligence",
      "Google: Create High-Fidelity Designs and Prototypes in Figma",
      "TCS ion: Career Edge - Young Professional",
      "Cisco: Introduction to Cyber Security",
      "Sololearn: Prompt Engineering"
    ]
};
// Portfolio App
class PortfolioApp {
  constructor() {
    this.data = portfolioData;
    this.theme = localStorage.getItem('theme') || 'dark';
    this.init();
  }

  async init() {
    document.documentElement.className = this.theme;
    this.render();
    this.setupThemeToggle();
  }

  setupThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    toggle.addEventListener('click', () => {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.className = this.theme;
      localStorage.setItem('theme', this.theme);
      this.updateThemeIcon();
    });
    this.updateThemeIcon();
  }

  updateThemeIcon() {
    const icon = document.getElementById('theme-icon');
    icon.className = this.theme === 'dark'
      ? 'fas fa-sun'
      : 'fas fa-moon';
  }

  render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      ${this.renderThemeToggle()}
      ${this.renderHero()}
      ${this.renderWhoAmI()}
      ${this.renderSkills()}
      ${this.renderProjects()}
      ${this.renderHackathons()}
      ${this.renderExperience()}
      ${this.renderCampusInvolvement()}
      ${this.renderEducation()}
      ${this.renderContact()}
    `;
  }

  renderThemeToggle() {
    return `
      <button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme">
        <i id="theme-icon" class="fas fa-sun"></i>
      </button>
    `;
  }

  renderHero() {
    return `
      <section class="min-h-screen relative overflow-hidden animated-gradient">
        <!-- Floating shapes background -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-20 left-10 w-72 h-72 bg-accent-blue opacity-5 rounded-full blur-3xl float-animation"></div>
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-accent-violet opacity-5 rounded-full blur-3xl float-animation" style="animation-delay: 1s;"></div>
          <div class="absolute top-1/2 left-1/3 w-64 h-64 bg-accent-teal opacity-5 rounded-full blur-3xl float-animation" style="animation-delay: 2s;"></div>
        </div>

        <div class="relative z-10 container mx-auto px-4 md:px-6 py-4 md:py-8 flex flex-col-reverse md:flex-row items-center justify-between min-h-screen gap-4 md:gap-6">
          <!-- Left: Profile Image (Mobile First) -->
          <div class="w-full md:w-2/5 flex justify-center fade-in-up stagger-1">
            <div class="profile-container">
              <div class="profile-glow"></div>
              <img src="images/profile.jpg" alt="${this.data.name}" class="profile-image">
            </div>
          </div>

          <!-- Right: Content -->
          <div class="w-full md:w-3/5 space-y-2 md:space-y-3 fade-in-up stagger-2">
            <div class="inline-block">
              <span class="text-xs md:text-sm font-mono text-accent-blue border border-accent-blue/30 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <i class="fas fa-code mr-2"></i>Available for opportunities
              </span>
            </div>
            
            <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span class="gradient-text">${this.data.tagline}</span>
            </h1>
            
            <p class="text-base md:text-lg leading-relaxed text-gray-400">
              ${this.data.intro}
            </p>

            <div class="text-3xl md:text-4xl lg:text-5xl font-black text-white pt-2" style="font-family: 'IBM Plex Sans', 'Inter', sans-serif; letter-spacing: -0.02em;">
              ${this.data.name}
            </div>

            <div class="flex flex-wrap gap-2 md:gap-3 pt-2 fade-in-up stagger-4">
              <a href="#contact" class="glass-card px-5 md:px-7 py-2.5 md:py-3 font-semibold hover:glow-effect transition-all text-sm md:text-base">
                <i class="fas fa-paper-plane mr-2"></i>Get in touch
              </a>
              <a href="https://drive.google.com/file/d/1BEd0Kn4WxfSzLQd1-YEYhzcklh7N-np_/view" target="_blank" class="border border-accent-violet/30 px-5 md:px-7 py-2.5 md:py-3 rounded-2xl text-accent-violet font-semibold hover:bg-accent-violet/10 transition-all text-sm md:text-base">
                <i class="fas fa-file-alt mr-2"></i>View Resume
              </a>
              <a href="#projects" class="border border-accent-blue/30 px-5 md:px-7 py-2.5 md:py-3 rounded-2xl text-accent-blue font-semibold hover:bg-accent-blue/10 transition-all text-sm md:text-base">
                <i class="fas fa-rocket mr-2"></i>Projects
              </a>
            </div>

            <div class="flex gap-4 md:gap-5 pt-2 md:pt-3 fade-in-up stagger-5">
              <a href="${this.data.github}" target="_blank" class="text-gray-400 hover:text-accent-blue transition-all text-xl md:text-2xl" title="GitHub">
                <i class="fab fa-github"></i>
              </a>
              <a href="${this.data.linkedin}" target="_blank" class="text-gray-400 hover:text-accent-blue transition-all text-xl md:text-2xl" title="LinkedIn">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="mailto:${this.data.email}" class="text-gray-400 hover:text-accent-blue transition-all text-xl md:text-2xl" title="Email">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i class="fas fa-chevron-down text-accent-blue text-xl md:text-2xl"></i>
        </div>
      </section>
    `;
  }

  renderWhoAmI() {
    return `
      <section id="who-am-i" class="py-8 md:py-12 relative overflow-hidden">
        <!-- Subtle background accent -->
        <div class="absolute inset-0 bg-gradient-to-br from-accent-teal/5 via-transparent to-accent-violet/5"></div>
        
        <div class="container mx-auto px-4 md:px-6 relative z-10">
          <div class="max-w-5xl mx-auto">
            <div class="flex items-center gap-3 md:gap-4 mb-5 md:mb-6 justify-center fade-in-up">
              <div class="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-accent-teal to-accent-blue flex items-center justify-center">
                <i class="fas fa-user-circle text-xl md:text-2xl text-white"></i>
              </div>
              <h2 class="text-2xl md:text-4xl font-bold text-center" style="font-family: 'Space Grotesk', 'Inter', sans-serif; letter-spacing: -0.02em;">
                <span class="gradient-text">Who Am I</span>
              </h2>
            </div>
            
            <div class="glass-card p-6 md:p-10 fade-in-up stagger-1 border-2 border-accent-teal/20">
              <div class="space-y-4 md:space-y-5">
                <p class="text-base md:text-xl leading-relaxed text-center" style="font-family: 'Poppins', 'Inter', sans-serif; font-weight: 300; line-height: 1.7;">
                  <span class="text-accent-teal font-semibold">I'm a curious builder</span> who enjoys designing and developing things that <span class="text-accent-blue font-semibold">actually get used</span>.
                </p>
                
                <p class="text-sm md:text-lg leading-relaxed text-gray-300 text-center" style="font-family: 'Poppins', 'Inter', sans-serif; font-weight: 300; line-height: 1.6;">
                  I like working on <span class="text-accent-violet font-medium">real-world problems</span>, experimenting with ideas, and turning them into practical solutions.
                </p>
                
                <p class="text-sm md:text-lg leading-relaxed text-gray-300 text-center" style="font-family: 'Poppins', 'Inter', sans-serif; font-weight: 300; line-height: 1.6;">
                  Whether it's <span class="text-accent-blue font-medium">design</span>, <span class="text-accent-violet font-medium">full-stack development</span>, or adding intelligence with <span class="text-accent-teal font-medium">AI</span>, I enjoy building systems that make sense and make impact.
                </p>
                
                <div class="pt-3 flex items-center justify-center gap-3">
                  <div class="h-px w-12 bg-gradient-to-r from-transparent to-accent-teal"></div>
                  <i class="fas fa-code text-accent-teal text-lg"></i>
                  <div class="h-px w-12 bg-gradient-to-l from-transparent to-accent-teal"></div>
                </div>
                
                <p class="text-xs md:text-sm leading-relaxed text-gray-400 text-center italic" style="font-family: 'Poppins', 'Inter', sans-serif; font-weight: 300;">
                  I also enjoy experimenting with modern AI-assisted development tools to build, iterate, and learn faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderSkills() {
    return `
      <section id="skills" class="py-10 md:py-14">
        <div class="container mx-auto px-4 md:px-6">
          <div class="flex items-center gap-3 mb-8 md:mb-10 justify-center fade-in-up">
            <i class="fas fa-tools text-2xl md:text-3xl text-accent-blue"></i>
            <h2 class="text-2xl md:text-4xl font-bold text-center">
              <span class="gradient-text">Technical Arsenal</span>
            </h2>
          </div>
          
          <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            ${this.renderSkillCard('Programming Languages', this.data.skills.programming, 'fa-code', 'blue')}
            ${this.renderSkillCard('Web & Database', this.data.skills.web, 'fa-globe', 'violet')}
            ${this.renderSkillCard('AI & Machine Learning', this.data.skills.ai, 'fa-brain', 'teal')}
            ${this.renderSkillCard('Tools & Platforms', this.data.skills.tools, 'fa-toolbox', 'blue')}
          </div>
        </div>
      </section>
    `;
  }

  renderSkillCard(title, skills, icon, color) {
    const colorMap = {
      blue: { bg: 'bg-accent-blue/10', border: 'border-accent-blue/30', text: 'text-accent-blue', badgeBg: 'bg-accent-blue/15', badgeBorder: 'border-accent-blue/25' },
      violet: { bg: 'bg-accent-violet/10', border: 'border-accent-violet/30', text: 'text-accent-violet', badgeBg: 'bg-accent-violet/15', badgeBorder: 'border-accent-violet/25' },
      teal: { bg: 'bg-accent-teal/10', border: 'border-accent-teal/30', text: 'text-accent-teal', badgeBg: 'bg-accent-teal/15', badgeBorder: 'border-accent-teal/25' }
    };
    const colors = colorMap[color];
    
    return `
      <div class="glass-card p-5 md:p-6 fade-in-up border-2 ${colors.border} hover:scale-[1.02] transition-all">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl ${colors.bg} flex items-center justify-center">
            <i class="fas ${icon} text-xl ${colors.text}"></i>
          </div>
          <h3 class="text-base md:text-lg font-bold ${colors.text}">${title}</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          ${skills.map(skill => `
            <span class="px-3 py-1.5 rounded-full text-sm font-medium ${colors.badgeBg} ${colors.text} border ${colors.badgeBorder} hover:scale-105 transition-transform">
              ${skill}
            </span>
          `).join('')}
        </div>
      </div>
    `;
  }

  renderProjects() {
    return `
      <section id="projects" class="py-8 md:py-12">
        <div class="container mx-auto px-4 md:px-6">
          <div class="text-center mb-6 md:mb-8 fade-in-up">
            <div class="flex items-center gap-3 mb-3 justify-center">
              <i class="fas fa-project-diagram text-2xl md:text-3xl text-accent-violet"></i>
              <h2 class="text-2xl md:text-4xl font-bold">
                <span class="gradient-text">Featured Projects</span>
              </h2>
            </div>
            <p class="text-gray-400 text-sm md:text-base">Case studies of solutions I've built</p>
          </div>

          <div class="max-w-6xl mx-auto space-y-5 md:space-y-7">
            ${this.data.projects.map((project, index) => this.renderProjectCard(project, index)).join('')}
          </div>
        </div>
      </section>
    `;
  }

  renderProjectCard(project, index) {
    const categoryColors = {
      'IoT': 'teal',
      'AI/ML': 'violet',
      'Cybersecurity': 'blue'
    };
    const color = categoryColors[project.category] || 'blue';
    
    return `
      <div class="glass-card p-6 md:p-8 fade-in-up stagger-${(index % 5) + 1}">
        <div class="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
          <span class="tech-tag">${project.category}</span>
          <span class="status-completed">
            <i class="fas fa-check-circle mr-1"></i>${project.status}
          </span>
          <span class="text-xs md:text-sm text-gray-500">
            <i class="fas fa-users mr-1"></i>Team of ${project.team}
          </span>
        </div>

        <h3 class="text-2xl md:text-3xl font-bold mb-2">${project.title}</h3>
        <p class="text-accent-${color} text-base md:text-lg mb-4 md:mb-6 font-medium">${project.subtitle}</p>

        <div class="space-y-4 md:space-y-6">
          <div>
            <h4 class="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2 flex items-center gap-2">
              <i class="fas fa-exclamation-circle"></i>Problem
            </h4>
            <p class="text-sm md:text-base text-gray-300">${project.problem}</p>
          </div>

          <div>
            <h4 class="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2 flex items-center gap-2">
              <i class="fas fa-lightbulb"></i>Approach
            </h4>
            <p class="text-sm md:text-base text-gray-300">${project.approach}</p>
          </div>

          <div>
            <h4 class="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2 flex items-center gap-2">
              <i class="fas fa-trophy"></i>Outcome
            </h4>
            <p class="text-sm md:text-base text-gray-300">${project.outcome}</p>
          </div>

          <div>
            <h4 class="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3 flex items-center gap-2">
              <i class="fas fa-layer-group"></i>Tech Stack
            </h4>
            <div class="flex flex-wrap gap-2">
              ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderHackathons() {
    const highlighted = this.data.hackathons.filter(h => h.highlight);
    const others = this.data.hackathons.filter(h => !h.highlight);
    
    return `
      <section id="hackathons" class="py-8 md:py-12">
        <div class="container mx-auto px-4 md:px-6">
          <div class="text-center mb-8 md:mb-10 fade-in-up">
            <div class="flex items-center gap-3 mb-4 justify-center">
              <i class="fas fa-trophy text-2xl md:text-3xl text-accent-blue"></i>
              <h2 class="text-3xl md:text-4xl font-bold">
                <span class="gradient-text">Hackathons & Achievements</span>
              </h2>
            </div>
            <p class="text-gray-400 text-base md:text-lg">Competing, learning, and winning</p>
          </div>

          <!-- Highlighted achievements -->
          <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-8 md:mb-10">
            ${highlighted.map((h, i) => `
              <div class="achievement-card glass-card p-6 fade-in-up stagger-${i + 1} glow-effect">
                <div class="text-3xl md:text-4xl mb-4">
                  ${i === 0 ? '🏆' : i === 1 ? '🎯' : '⚡'}
                </div>
                <h3 class="text-lg md:text-xl font-bold mb-2">${h.name}</h3>
                <p class="text-accent-blue font-semibold mb-2 text-sm md:text-base">${h.achievement}</p>
                <p class="text-xs md:text-sm text-gray-400 mb-3">${h.organizer}</p>
                <p class="text-gray-300 text-xs md:text-sm">${h.description}</p>
                <div class="mt-4 text-xs text-gray-500">${h.year}</div>
              </div>
            `).join('')}
          </div>

          <!-- Other participations -->
          <div class="max-w-6xl mx-auto">
            <h3 class="text-xl md:text-2xl font-bold mb-6 text-center text-gray-400">Other Participations</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${others.map((h, i) => `
                <div class="glass-card p-4 fade-in-up stagger-${(i % 3) + 1}">
                  <div class="flex items-start gap-4">
                    <div class="text-xl md:text-2xl">🚀</div>
                    <div class="flex-1">
                      <h4 class="font-semibold mb-1 text-sm md:text-base">${h.name}</h4>
                      <p class="text-xs md:text-sm text-accent-violet mb-1">${h.achievement}</p>
                      <p class="text-xs text-gray-400">${h.organizer} • ${h.year}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderExperience() {
    return `
      <section id="experience" class="py-8 md:py-12">
        <div class="container mx-auto px-4 md:px-6">
          <div class="flex items-center gap-3 mb-6 md:mb-8 justify-center fade-in-up">
            <i class="fas fa-briefcase text-2xl md:text-3xl text-accent-violet"></i>
            <h2 class="text-3xl md:text-4xl font-bold text-center">
              <span class="gradient-text">Learning Journey</span>
            </h2>
          </div>

          <div class="max-w-4xl mx-auto space-y-6">
            ${this.data.experience.map((exp, i) => `
              <div class="glass-card p-6 fade-in-up stagger-${i + 1}">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-graduation-cap text-accent-blue text-lg md:text-xl"></i>
                  </div>
                  <div class="flex-1">
                    <div class="flex flex-wrap items-center justify-between mb-2 gap-2">
                      <h3 class="text-lg md:text-xl font-bold">${exp.company}</h3>
                      <span class="text-xs md:text-sm text-gray-400">${exp.duration}</span>
                    </div>
                    <p class="text-accent-violet font-medium mb-2 text-sm md:text-base">${exp.role}</p>
                    <p class="text-gray-300 text-sm md:text-base">${exp.description}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  renderCampusInvolvement() {
    return `
      <section id="campus-involvement" class="py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-6">
          <div class="flex items-center gap-3 mb-10 md:mb-12 justify-center fade-in-up">
            <i class="fas fa-users text-2xl md:text-3xl text-accent-teal"></i>
            <h2 class="text-3xl md:text-4xl font-bold text-center">
              <span class="gradient-text">Campus Involvement</span>
            </h2>
          </div>

          <div class="max-w-4xl mx-auto">
            <div class="glass-card p-6 md:p-8 fade-in-up border-2 border-accent-teal/30">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent-teal/20 flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-star text-accent-teal text-xl md:text-2xl"></i>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl md:text-2xl font-bold mb-2">${this.data.leadership[0].role}</h3>
                  <p class="text-accent-teal font-semibold mb-3 text-base md:text-lg">${this.data.leadership[0].organization}</p>
                  <p class="text-gray-300 text-sm md:text-base leading-relaxed">${this.data.leadership[0].activities}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderEducation() {
    return `
      <section id="education" class="py-16 md:py-24">
        <div class="container mx-auto px-4 md:px-6">
          <div class="max-w-6xl mx-auto">
            <div class="flex items-center gap-3 mb-10 md:mb-12 justify-center fade-in-up">
              <i class="fas fa-graduation-cap text-2xl md:text-3xl text-accent-blue"></i>
              <h2 class="text-3xl md:text-4xl font-bold text-center">
                <span class="gradient-text">Education & Certifications</span>
              </h2>
            </div>

            <!-- Education Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 md:mb-12">
              ${this.data.education.map((edu, i) => `
                <div class="glass-card p-6 fade-in-up stagger-${i + 1}">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-accent-blue to-accent-violet flex items-center justify-center flex-shrink-0">
                      <i class="fas fa-university text-white text-lg md:text-xl"></i>
                    </div>
                    <div class="flex-1">
                      <h3 class="text-lg md:text-xl font-bold mb-2">${edu.degree}</h3>
                      <p class="text-accent-blue font-semibold mb-1 text-sm md:text-base">${edu.college}</p>
                      <p class="text-gray-400 mb-3 text-xs md:text-sm">${edu.university} • ${edu.year}</p>
                      <div>
                        <span class="text-2xl md:text-3xl font-bold text-accent-teal">${edu.cgpa}</span>
                        <span class="text-xs md:text-sm text-gray-400 ml-2">${i === 0 ? 'CGPA' : 'Percentage'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Certifications -->
            <div class="glass-card p-6 md:p-8 fade-in-up">
              <h3 class="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                <i class="fas fa-certificate text-accent-violet text-xl md:text-2xl"></i>
                <span>Certifications</span>
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${this.data.certifications.map(cert => `
                  <div class="flex items-start gap-3 p-4 rounded-xl bg-accent-violet/5 border border-accent-violet/20 hover:border-accent-violet/40 transition-all">
                    <i class="fas fa-award text-accent-violet mt-1 text-lg"></i>
                    <span class="text-gray-300 text-sm md:text-base flex-1">${cert}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderContact() {
    return `
      <section id="contact" class="py-8 md:py-12">
        <div class="container mx-auto px-4 md:px-6">
          <div class="max-w-4xl mx-auto text-center">
            <div class="flex items-center gap-3 mb-6 md:mb-8 justify-center fade-in-up">
              <i class="fas fa-envelope text-2xl md:text-3xl text-accent-teal"></i>
              <h2 class="text-3xl md:text-5xl font-bold">
                <span class="gradient-text">Let's Build Something Together</span>
              </h2>
            </div>
            <p class="text-base md:text-xl text-gray-400 mb-8 md:mb-12 fade-in-up stagger-1">
              Open to internships, full-time roles, and collaboration on innovative projects
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
              <a href="mailto:${this.data.email}" class="glass-card p-6 hover:glow-effect transition-all fade-in-up stagger-1">
                <i class="fas fa-envelope text-3xl md:text-4xl text-accent-blue mb-4"></i>
                <h3 class="font-semibold mb-2 text-sm md:text-base">Email</h3>
                <p class="text-xs md:text-sm text-gray-400 break-all">${this.data.email}</p>
              </a>
              
              <a href="${this.data.linkedin}" target="_blank" class="glass-card p-6 hover:glow-effect transition-all fade-in-up stagger-2">
                <i class="fab fa-linkedin text-3xl md:text-4xl text-accent-blue mb-4"></i>
                <h3 class="font-semibold mb-2 text-sm md:text-base">LinkedIn</h3>
                <p class="text-xs md:text-sm text-gray-400">Connect professionally</p>
              </a>
              
              <a href="${this.data.github}" target="_blank" class="glass-card p-6 hover:glow-effect transition-all fade-in-up stagger-3">
                <i class="fab fa-github text-3xl md:text-4xl text-accent-blue mb-4"></i>
                <h3 class="font-semibold mb-2 text-sm md:text-base">GitHub</h3>
                <p class="text-xs md:text-sm text-gray-400">View my code</p>
              </a>
            </div>

            <a href="mailto:${this.data.email}" class="inline-block glass-card px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold hover:glow-effect transition-all fade-in-up stagger-4">
              <i class="fas fa-paper-plane mr-2 md:mr-3"></i>Send a Message
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div class="max-w-6xl mx-auto mt-16 md:mt-24 pt-6 md:pt-8 border-t border-gray-800 text-center text-gray-500">
          <p class="text-sm md:text-base">&copy; 2025 ${this.data.name}. All rights reserved.</p>
        </div>
      </section>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});
