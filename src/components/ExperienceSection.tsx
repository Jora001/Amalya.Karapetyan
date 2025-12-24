import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar } from "lucide-react";

const CoursesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  const courses = [
    {
      id: 1,
      title: "Tumo Labs",
      organization: "Python & Machine Learning Self-Learning Program",
      period: "2025 – Present",
      description:
        "Currently enrolled in TUMO Labs, participating in the Python & Machine Learning Self-Learning Program, gaining hands-on experience in programming, data analysis, and machine learning through self-directed projects and structured learning."
    },
    {
      id: 2,
      title: "Armenian Code Academy",
      organization: "Python Programming & ML Data Science Courses",
      period: "August 2–14, 2021",
      description:
        "Completed intensive Python Programming and ML & Data Science courses. Gained practical experience in programming, data analysis, and machine learning through hands-on projects and structured learning methodologies."
    }
  ];

  return (
    <section id="courses" ref={ref} className="py-28 relative">
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="code-block mb-4 inline-block">
            {"// Education & Courses"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Courses <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />

          <div className="space-y-14">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`relative flex flex-col lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-primary z-10" />

                {/* Content */}
                <div
                  className={`flex-1 pl-14 lg:pl-0 ${
                    index % 2 === 0
                      ? "lg:pr-16 lg:text-right"
                      : "lg:pl-16"
                  }`}
                >
                  <div
                    className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 lg:p-7 max-w-lg transition-all hover:border-primary/40 hover:-translate-y-1 ${
                      index % 2 === 0 ? "lg:ml-auto" : ""
                    }`}
                  >
                    <span className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      {course.period}
                    </span>

                    <h3 className="text-lg font-semibold mb-1">
                      {course.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      {course.organization}
                    </p>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                </div>

                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
