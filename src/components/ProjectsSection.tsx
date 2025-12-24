import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "Python project Mad Libs Story Generator",
      description:
        "A Python-based interactive story generator that creates fun and dynamic stories based on user input. The program asks users to enter words, numbers, colors, and other details, then randomly selects one of several story templates and fills it with the provided inputs. The project uses conditionals, loops, functions, and input validation to ensure correct and meaningful input before generating the final story. It features multiple story types and demonstrates basic control flow and user interaction in Python.",
      tags: [
        "Python",
        "Functions/Loops",
        "Conditions",
        "Array/Strings",
      ],
      stars: "Practicall Project",
      forks: 3,
      link: "https://github.com/ArenTovmasyan/Station1_projpyy.git",
      github: "https://github.com/ArenTovmasyan/Station1_projpyy.git",
      featured: true,
    },
    {
      id: 2,
      title: "Craps Dice Game",
      description:
        "A Python implementation of the classic casino dice game “Craps”. The program simulates rolling two dice using the random library and calculates their sum to determine the game outcome based on official rules. During the first roll, the program checks for an instant win or loss; otherwise, it sets a goal number and continues rolling using a while loop until the player either matches the goal number and wins or rolls a 7 and loses. The project demonstrates the use of functions, conditional statements, loops, and print outputs to manage game logic and user feedback.",
      tags: [
        "Python",
        "PytLoops/Arrays",
        "Strings",
        "Functions",
      ],
      stars: "Tumo Labs Project",
      forks: 234,
      link: "https://github.com/ArenTovmasyan/labsproject2.git",
      github: "https://github.com/ArenTovmasyan/labsproject2.git",
      featured: true,
    },

{
      id: 3,
      title: "Countdown Timer",
      description:
        "A Python-based countdown timer program that takes a time value from the user and counts down in the terminal. The program displays each countdown step with a one-second delay, creating a real-time timer effect. It utilizes built-in Python libraries to manage time delays and applies loops, conditional logic, and functions to control the countdown flow. This project demonstrates basic time handling, user input processing, and sequential execution in Python.",
      tags: [
        "Python",
        "Strings",
        "Conditions",
        "Loops/Arrays",
      ],
      stars: "Tumo Labs Project",
      forks: 234,
      link: "https://github.com/ArenTovmasyan/labs_bonus_project.git",
      github: "https://github.com/ArenTovmasyan/labs_bonus_project.git",
      featured: true,
    },

    
    
    
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-32 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="code-block mb-4 inline-block">
            {"// Selected Projects"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Personal <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-14">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "var(--gradient-primary)",
                  filter: "blur(25px)",
                  opacity: 0.25,
                }}
              />

              <div className="relative glass-card p-8 rounded-2xl h-full border border-border/50 group-hover:border-primary/60 transition-all duration-300">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-display font-bold tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="mt-1 inline-block text-xs font-mono text-primary/80">
                      ★ Featured Project
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-all hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-all hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-black/40 border border-primary/20 text-primary/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex gap-6">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary" />
                      {project.stars.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {project.forks}
                    </span>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono opacity-60 hover:opacity-100 hover:text-primary transition-all"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-7 rounded-xl h-full border border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-display font-semibold tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono
                               bg-secondary/70 border border-border/60
                               text-muted-foreground group-hover:text-primary
                               transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-primary" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3 h-3" />
                  {project.forks}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;