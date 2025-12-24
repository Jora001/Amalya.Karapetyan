import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const AUTO_INTERVAL = 3000;

const RecommendationsSection = () => {
  const recommendation = {
    text: "“I had a great experience working with Aren. We met at Tumo Labs, after which we applied together to 42 Yerevan. Aren is a highly responsible and intelligent individual who is deeply dedicated to his work. He consistently strives to learn new technologies and demonstrates strong algorithmic thinking. Aren works with confidence, takes initiative, and is a reliable team member. I am confident that he has great potential and will achieve strong results in his professional journey",
    author: "Jora Hovsepyan",
    role: "Software Engineer",
    company: "SynapTech Agency",
    avatar: "/assets/jor.jpg",
  };

  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, AUTO_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="recommendations"
      className="py-32 relative overflow-hidden"
    >
      <div className="section-container relative">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="code-block mb-4 inline-block">
            {"// Testimonials"}
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            What People Say <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        {/* Animated Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tick}
            initial={{ x: 120, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -120, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="glass-card p-10 rounded-3xl relative max-w-3xl mx-auto"
          >
            <Quote className="w-12 h-12 text-primary/30 mb-6" />

            <p className="text-muted-foreground leading-relaxed italic mb-10">
              “{recommendation.text}”
            </p>

            <div className="flex items-center gap-5">
              <img
                src={recommendation.avatar}
                alt={recommendation.author}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/30"
              />
              <div>
                <h4 className="font-display font-semibold">
                  {recommendation.author}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {recommendation.role}
                </p>
                <p className="text-sm text-primary">
                  {recommendation.company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default RecommendationsSection;
