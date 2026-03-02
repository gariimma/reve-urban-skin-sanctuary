import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const questions = [
  {
    id: "concern",
    question: "What's your primary skin concern?",
    options: [
      { label: "Dullness & pollution damage", value: "protect" },
      { label: "Screen fatigue & fine lines", value: "repair" },
      { label: "Dryness & sensitivity", value: "restore" },
    ],
  },
  {
    id: "lifestyle",
    question: "How would you describe your daily environment?",
    options: [
      { label: "Outdoors in a busy city", value: "protect" },
      { label: "Indoors, heavy screen time", value: "repair" },
      { label: "Mixed — both indoor & outdoor", value: "restore" },
    ],
  },
];

const resultMap: Record<string, number> = {
  protect: 0,
  repair: 1,
  restore: 2,
};

const SkinQuiz = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<number | null>(null);

  const handleAnswer = (value: string) => {
    const next = [...answers, value];
    setAnswers(next);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Tally
      const counts: Record<string, number> = {};
      next.forEach((v) => {
        counts[v] = (counts[v] || 0) + 1;
      });
      const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setResult(resultMap[winner]);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  const recommended = result !== null ? products[result] : null;

  return (
    <>
      <button
        onClick={() => { setOpen(true); reset(); }}
        className="group inline-flex items-center gap-2.5 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 text-[11px] tracking-[0.15em] uppercase font-sans transition-all duration-300"
      >
        <Sparkles className="w-3.5 h-3.5" />
        Find Your Step
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-background border border-border rounded-sm p-6 md:p-10 max-w-md w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close quiz"
              >
                <X className="w-5 h-5" />
              </button>

              {result === null ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-muted-foreground mb-2">
                      Question {step + 1} of {questions.length}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl text-foreground mb-6">
                      {questions[step].question}
                    </h3>
                    <div className="space-y-3">
                      {questions[step].options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => handleAnswer(opt.value)}
                          className="w-full text-left border border-border px-4 py-3.5 font-sans text-sm text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-200 rounded-sm"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              ) : recommended ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  <Sparkles className="w-6 h-6 text-primary mx-auto mb-4" />
                  <p className="text-[10px] tracking-[0.3em] uppercase font-sans text-muted-foreground mb-2">
                    Your recommended step
                  </p>
                  <h3 className="font-serif text-2xl text-foreground mb-2">
                    {recommended.name}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground mb-6 leading-relaxed">
                    {recommended.tagline} — designed for your specific needs.
                  </p>
                  <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted mb-6">
                    <img
                      src={recommended.image}
                      alt={recommended.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Link
                    to={`/product/${recommended.slug}`}
                    onClick={() => setOpen(false)}
                    className="inline-block bg-foreground text-background px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase font-sans font-medium hover:bg-foreground/90 transition-colors"
                  >
                    View Product — ${recommended.price}
                  </Link>
                  <button
                    onClick={reset}
                    className="block mx-auto mt-4 text-xs font-sans text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Retake quiz
                  </button>
                </motion.div>
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SkinQuiz;
