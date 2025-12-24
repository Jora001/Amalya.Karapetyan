import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      id: 1,
      degree: "Russian University of Armenia",
      school: "Computer Science",
      location: "Yerevan, Armenia",
      period: "2021 – Present",
      description:
        "Bachelor’s degree program in Computer Science and Applied Mathematics, focusing on algorithms, data structures, and database systems.",
      image: "/assets/university.jpg",
      achievements: ["Databases", "Computer Science", "Algorithms & Data Structures"],
    },
    {
      id: 2,
      degree: "42 Yerevan – International Programming School",
      school: "Advanced Software Engineering",
      location: "Yerevan, Armenia",
      period: "Present",
      description:
        "Student at 42 International School, Yerevan Campus. Receiving in-depth technical education through self-directed learning and project-based methodologies, with a strong focus on algorithms and teamwork.",
      image: "/assets/42s.jpg",
      achievements: ["C Programming Language", "Algorithms", "Teamwork"],
    },
  ];

  return (
    <section id="education" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-container relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="code-block mb-4 inline-block">
            {"// Education"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Academic <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Education Items */}
        <div className="space-y-14">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-10 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-2/5">
                <div className="relative group">
                  <div
                    className="absolute -inset-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "var(--gradient-primary)",
                      filter: "blur(20px)",
                    }}
                  />
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={edu.image}
                      alt={edu.school}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-3/5">
                <div className="glass-card p-8 rounded-2xl hover:border-primary/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      {edu.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-primary mb-4">
                    {edu.school}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-secondary border border-border"
                      >
                        <Award className="w-3 h-3 text-primary" />
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
