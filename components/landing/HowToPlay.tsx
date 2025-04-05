"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Grid,
  MessageSquare,
  Users,
  ThumbsUp,
  Trophy,
  Timer,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

export function HowToPlay() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    {
      title: "The Setup",
      description:
        "One player receives a secret location where a column and row intersect on the game board.",
      icon: <Grid className="h-5 w-5" />,
      animation: (
        <motion.div className="relative w-full h-[300px] bg-[#f8f6f2] rounded-xl overflow-hidden flex items-center justify-center">
          <motion.div
            className="grid grid-cols-5 grid-rows-5 w-64 h-64 border border-gray-300 rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className={`border border-gray-200 flex items-center justify-center ${
                  i === 12 ? "bg-[#f5a3b0]/30" : ""
                }`}
              />
            ))}
          </motion.div>

          <motion.div
            className="absolute top-0 left-0 w-full h-8 bg-[#a5dcd0]/50 flex items-center justify-around px-4"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {["Mountains", "Ocean", "Desert", "Forest", "City"].map(
              (word, i) => (
                <motion.div
                  key={i}
                  className="text-[#6a5d7b] font-medium text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  {word}
                </motion.div>
              )
            )}
          </motion.div>

          <motion.div
            className="absolute top-0 left-0 h-full w-8 bg-[#e8d7f5]/50 flex flex-col items-center justify-around py-4"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {["Summer", "Winter", "Spring", "Fall", "Holiday"].map(
              (word, i) => (
                <motion.div
                  key={i}
                  className="text-[#6a5d7b] font-medium text-xs transform -rotate-90"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  {word}
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "The Clue",
      description:
        "The player silently finds a connection between the column and row words, then gives a ONE-WORD clue to the group.",
      icon: <motion.div className="h-5 w-5 text-[#6a5d7b]">🧠</motion.div>,
      animation: (
        <motion.div className="relative w-full h-[300px] bg-[#f8f6f2] rounded-xl overflow-hidden flex items-center justify-center">
          <motion.div
            className="absolute top-4 left-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <div className="text-[#6a5d7b] font-medium">Forest</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-4 right-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <div className="text-[#6a5d7b] font-medium">Fall</div>
            </div>
          </motion.div>

          <motion.div
            className="w-16 h-16 rounded-full bg-[#f8f6f2] border border-[#6a5d7b] flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.div
              className="text-[#6a5d7b] text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.3 }}
            >
              🤔
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-8"
            initial={{ opacity: 0, y: 20, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <motion.div
              className="bg-[#f5a3b0]/80 text-white px-6 py-2 rounded-full font-medium text-lg"
              whileHover={{ scale: 1.05 }}
            >
              "Leaves"
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "The Poker Face",
      description:
        "After giving the clue, the player must maintain a perfect poker face - no reactions, no hints!",
      icon: <MessageSquare className="h-5 w-5" />,
      animation: (
        <motion.div className="relative w-full h-[300px] bg-[#f8f6f2] rounded-xl overflow-hidden flex items-center justify-center">
          <motion.div
            className="w-24 h-24 rounded-full bg-[#f8f6f2] border border-[#6a5d7b] flex items-center justify-center overflow-hidden"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-4xl"
              animate={{
                rotate: [0, 0, 0],
                scale: [1, 1, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 3,
                times: [0, 0.5, 1],
              }}
            >
              😐
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-6 left-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.div
              className="bg-[#a5dcd0]/50 text-[#6a5d7b] px-3 py-1 rounded-xl font-medium text-sm"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 2,
                times: [0, 0.5, 1],
              }}
            >
              Is it right?
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-6 right-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.div
              className="bg-[#f5a3b0]/50 text-[#6a5d7b] px-3 py-1 rounded-xl font-medium text-sm"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 2.5,
                times: [0, 0.5, 1],
                delay: 0.5,
              }}
            >
              Are we close?
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "The Discussion",
      description:
        "The group discusses the clue and tries to figure out which spot on the board it refers to.",
      icon: <Users className="h-5 w-5" />,
      animation: (
        <motion.div className="relative w-full h-[300px] bg-[#f8f6f2] rounded-xl overflow-hidden flex items-center justify-center">
          <motion.div
            className="absolute w-full h-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="grid grid-cols-5 grid-rows-5 w-56 h-56 border border-gray-300 rounded-lg overflow-hidden opacity-30">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="border border-gray-200" />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-4 left-4 flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.div
              className="bg-[#a5dcd0]/50 text-[#6a5d7b] px-3 py-1 rounded-xl text-sm"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              Maybe it's Forest?
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-4 right-4 flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.div
              className="bg-[#f5a3b0]/50 text-[#6a5d7b] px-3 py-1 rounded-xl text-sm"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              I think it's Fall!
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            <motion.div
              className="bg-white border border-[#6a5d7b] text-[#6a5d7b] px-4 py-2 rounded-xl font-medium"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 2,
                times: [0, 0.5, 1],
              }}
            >
              Forest + Fall = "Leaves"!
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "The Vote",
      description:
        "After discussion, the group votes on which spot they think matches the clue.",
      icon: <ThumbsUp className="h-5 w-5" />,
      animation: (
        <motion.div className="relative w-full h-[300px] bg-[#f8f6f2] rounded-xl overflow-hidden flex items-center justify-center">
          <motion.div
            className="grid grid-cols-5 grid-rows-5 w-64 h-64 border border-gray-300 rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className={`border border-gray-200 flex items-center justify-center ${
                  i === 12 ? "bg-[#f5a3b0]/30" : ""
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.01 }}
              />
            ))}
          </motion.div>

          <motion.div
            className="absolute top-0 left-0 w-full h-8 bg-[#a5dcd0]/50 flex items-center justify-around px-4"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {["Mountains", "Ocean", "Desert", "Forest", "City"].map(
              (word, i) => (
                <motion.div
                  key={i}
                  className={`text-[#6a5d7b] font-medium text-xs ${
                    i === 3 ? "underline" : ""
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  {word}
                </motion.div>
              )
            )}
          </motion.div>

          <motion.div
            className="absolute top-0 left-0 h-full w-8 bg-[#e8d7f5]/50 flex flex-col items-center justify-around py-4"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {["Summer", "Winter", "Spring", "Fall", "Holiday"].map(
              (word, i) => (
                <motion.div
                  key={i}
                  className={`text-[#6a5d7b] font-medium text-xs transform -rotate-90 ${
                    i === 3 ? "underline" : ""
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  {word}
                </motion.div>
              )
            )}
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <motion.div
              className="w-16 h-16 rounded-full border-2 border-[#f5a3b0] flex items-center justify-center"
              animate={{
                scale: [1, 1.2, 1],
                borderWidth: ["2px", "1px", "2px"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 2,
                times: [0, 0.5, 1],
              }}
            />
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "The Reveal",
      description:
        "The spot with the most votes is revealed. If correct, everyone scores points!",
      icon: <Trophy className="h-5 w-5" />,
      animation: (
        <motion.div className="relative w-full h-[300px] bg-[#f8f6f2] rounded-xl overflow-hidden flex items-center justify-center">
          <motion.div
            className="absolute w-full h-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div className="grid grid-cols-5 grid-rows-5 w-56 h-56 border border-gray-300 rounded-lg overflow-hidden opacity-50">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="border border-gray-200" />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
          >
            <motion.div
              className="bg-[#a5dcd0]/80 text-[#6a5d7b] px-5 py-2 rounded-xl font-medium text-lg flex items-center gap-2"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 3,
                times: [0, 0.5, 1],
              }}
            >
              <Trophy className="w-5 h-5 text-[#6a5d7b]" />
              Correct!
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-4 right-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.div
              className="bg-[#f5a3b0]/50 text-[#6a5d7b] px-3 py-1 rounded-full font-medium flex items-center gap-1 text-sm"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 2,
                times: [0, 0.5, 1],
                delay: 0.2,
              }}
            >
              <span>+1 Point</span>
              <span>🎉</span>
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "The Leaderboard",
      description:
        "Teams score points based on correct guesses and time. Compete against other groups on the leaderboard!",
      icon: <Timer className="h-5 w-5" />,
      animation: (
        <motion.div className="relative w-full h-[300px] bg-[#f8f6f2] rounded-xl overflow-hidden flex items-center justify-center">
          <motion.div
            className="absolute w-full h-full flex flex-col items-center justify-center gap-4 px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-[#6a5d7b] font-medium text-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Leaderboard
            </motion.div>

            <motion.div
              className="w-full bg-white rounded-lg p-4 shadow-sm border border-gray-100"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex justify-between items-center mb-2 pb-2 border-b border-[#e8d7f5]/50">
                <div className="text-[#6a5d7b] font-medium text-sm">Team</div>
                <div className="flex gap-4">
                  <div className="text-[#6a5d7b] font-medium text-sm">
                    Score
                  </div>
                  <div className="text-[#6a5d7b] font-medium text-sm">Time</div>
                </div>
              </div>

              <motion.div
                className="flex justify-between items-center py-1.5"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#f5a3b0]/80 flex items-center justify-center text-white font-medium text-xs">
                    1
                  </div>
                  <div className="text-[#6a5d7b] text-sm">Word Wizards</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#6a5d7b] font-medium w-8 text-center text-sm">
                    15
                  </div>
                  <div className="text-[#6a5d7b] font-medium w-8 text-center text-sm">
                    2:45
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex justify-between items-center py-1.5"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#a5dcd0]/80 flex items-center justify-center text-[#6a5d7b] font-medium text-xs">
                    2
                  </div>
                  <div className="text-[#6a5d7b] text-sm">Clue Crew</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#6a5d7b] font-medium w-8 text-center text-sm">
                    12
                  </div>
                  <div className="text-[#6a5d7b] font-medium w-8 text-center text-sm">
                    3:10
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex justify-between items-center py-1.5"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#e8d7f5]/80 flex items-center justify-center text-[#6a5d7b] font-medium text-xs">
                    3
                  </div>
                  <div className="text-[#6a5d7b] text-sm">Mind Readers</div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[#6a5d7b] font-medium w-8 text-center text-sm">
                    10
                  </div>
                  <div className="text-[#6a5d7b] font-medium w-8 text-center text-sm">
                    3:30
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  return (
    <section className="w-full py-12 md:py-24 bg-[#f8f6f2]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#6a5d7b] mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How to Play BetweenLines
          </motion.h2>
          <motion.p
            className="text-[#8a7d9b] md:text-lg max-w-2xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A cooperative party game where players read between the lines to
            find connections.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  currentStep === index
                    ? "bg-[#6a5d7b] text-white"
                    : "bg-white border border-gray-200 hover:border-[#6a5d7b]/50"
                }`}
                onClick={() => setCurrentStep(index)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-full ${
                      currentStep === index
                        ? "bg-white text-[#6a5d7b]"
                        : index % 3 === 0
                        ? "bg-[#f5a3b0]/20 text-[#6a5d7b]"
                        : index % 3 === 1
                        ? "bg-[#a5dcd0]/20 text-[#6a5d7b]"
                        : "bg-[#e8d7f5]/20 text-[#6a5d7b]"
                    } w-7 h-7 flex items-center justify-center flex-shrink-0`}
                  >
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{step.title}</h3>
                    <p
                      className={`text-xs ${
                        currentStep === index
                          ? "text-white/80"
                          : "text-[#8a7d9b]"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="w-full lg:w-2/3">
            <motion.div
              className="relative bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {steps[currentStep].animation}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between p-3 border-t border-gray-100">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setCurrentStep(
                      (prev) => (prev - 1 + steps.length) % steps.length
                    )
                  }
                  className="rounded-full h-8 w-8 border-gray-200 text-[#6a5d7b]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="rounded-full h-8 w-8 border-gray-200 text-[#6a5d7b]"
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    setCurrentStep((prev) => (prev + 1) % steps.length)
                  }
                  className="rounded-full h-8 w-8 border-gray-200 text-[#6a5d7b]"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="mt-4 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Button className="bg-[#a5dcd0] hover:bg-[#a5dcd0]/90 text-[#6a5d7b]">
                Start Playing Now
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
