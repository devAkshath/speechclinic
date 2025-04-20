"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import NavBarSecond from "../components/NavBar/NavBarSecond";

export default function ServicePage() {
  const IMG_PADDING = 12;
  const videoUrl =
    "https://res.cloudinary.com/thespeechclinic/video/upload/v1680511767/videos/dubai-health-care-city-world-autism-awarness-day.mp4";
  const StickyVideo = ({ videoUrl }: { videoUrl: string }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
      <motion.div
        ref={targetRef}
        className="sticky z-0 overflow-hidden rounded-[40px]"
        style={{
          top: IMG_PADDING,
          height: `calc(100vh - ${IMG_PADDING * 2}px)`,
          scale,
        }}
      >
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className=" h-[85vh] w-full  object-fill rounded-[40px]"
        />
        <motion.div
          className="absolute inset-0 bg-transparent"
          style={{ opacity }}
        />
      </motion.div>
    );
  };

  const OverlayCopy = ({
    subheading,
    heading,
  }: {
    subheading: string;
    heading: string;
  }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
      <motion.div
        ref={targetRef}
        style={{ y, opacity }}
        className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
      >
        <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
          {subheading}
        </p>
        <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
      </motion.div>
    );
  };

  const TextContent = () => (
    <div className="mx-auto max-w-5xl px-4 py-12">
      {/* Sensory Integration Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Sensory Integration</h2>
        <p className="text-lg text-neutral-700 mb-4">
          Sensory integration is a neurological process that organizes and
          interprets sensory information from the environment. This involves
          processing input from various senses, including sight (visual), sound
          (auditory), touch (tactile), taste (gustatory), and smell (olfactory),
          as well as proprioceptive (body position), vestibular (balance and
          movement) senses, and interoception (feeling of knowing what is
          happening in our body).
        </p>
        <p className="text-lg text-neutral-700 mb-4">
          At The Speech Clinic, our therapists are experts and certified in
          Sensory Integration from the University Of Southern California (USC)
          and Collaborative For Leadership In Ayres Sensory Integration (CLASI).
        </p>
        <p className="text-lg text-neutral-700 mb-4">
          Difficulties in sensory integration can lead to challenges in everyday
          activities, often seen in individuals with conditions like autism
          spectrum disorder (ASD), attention deficit hyperactivity disorder
          (ADHD), and sensory processing disorder (SPD). At The Speech Clinic,
          we use personalized therapeutic approaches to focus on improving
          sensory processing skills and help children process and respond to
          sensory information more effectively, improving their ability to
          engage with the world.
        </p>
        <p className="text-lg text-neutral-700 mb-4">
          By using targeted sensory activities, therapists support children in
          developing skills like focus, coordination, and emotional regulation,
          making everyday tasks more manageable. We have a well-equipped sensory
          room and a moveable sensory pod called{" "}
          <strong>Sensory On the Go (SOG)</strong> to create a calming space for
          our kids to self-regulate.
        </p>
      </section>

      {/* Red Flags of SPD Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Red Flags of SPD</h2>
        <p className="text-lg text-neutral-700 mb-4">
          Recognizing red flags for Sensory Processing Disorder (SPD) is
          essential for early intervention and support.
        </p>

        <ul className="space-y-4">
          {[
            {
              label: "Grooming Difficulties",
              detail:
                "Resistance to activities like bathing, haircuts, or nail trimming.",
            },
            {
              label: "Eating Challenges",
              detail:
                "Refusal to eat certain food textures, flavors, or temperatures.",
            },
            {
              label: "Mess Aversion",
              detail:
                "Distress over getting hands or face dirty during meals or play.",
            },
            {
              label: "Clothing Sensitivity",
              detail:
                "Avoidance of specific fabrics or clothing styles due to discomfort.",
            },
            {
              label: "Social Withdrawal",
              detail:
                "Reluctance to engage with others, including family members.",
            },
          ].map((item, index) => (
            <li key={index} className="flex items-start space-x-4">
              <div className="min-w-[32px] mt-1">
                <div className="bg-pink-300 rounded-full w-6 h-6 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-pink-950"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-lg text-neutral-800">
                  <strong>{item.label}:</strong> {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <header className="absolute top-0 w-full">
        <NavBarSecond />
      </header>

      <main>
        {/* Title Section */}
        <div className="flex items-center justify-center h-[60vh] text-center ">
          {/* <div>
            <h1 className="text-4xl font-bold md:text-7xl bg-gradient-to-t from-black to-black bg-clip-text text-transparent " >
              Occupational Therapy
            </h1>
            <h1 className="text-lg text-neutral-700 mt-10 ml-56 mr-56 text-left " >
              Our highly trained pediatric occupational therapy staff utilizes
              an unparalleled array of equipment within our clinics. Our
              therapists have the ability to address the occupational therapy
              (OT) needs of the child in a unique and engaging environment.
              Pediatric occupational therapy helps a child reach goals and
              developmental milestones that improve their daily life. It focuses
              on how your child moves, plays and communicates with the world
              around them and enhances their motor skills, cognitive abilities,
              social interaction, and ADL skills. Occupational therapy
              intervention uses everyday life activities (occupations) to
              promote health, well-being, and your ability to participate in the
              important activities in your life. Occupational therapists support
              children with developmental delays, physical impairments, or
              sensory issues by designing personalized interventions. These
              therapeutic activities promote improvements in motor skills,
              emotional regulation, and self-esteem, helping children succeed in
              school, at home, and in their communities
            </h1>
          </div> */}

          <OverlayCopy heading="Occupational Therapy" subheading="" />
        </div>

        {/* Video Parallax Section */}
        <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
          <div className="relative h-[120vh]  md:px-56 md:pt-0">
            <StickyVideo videoUrl={videoUrl} />
          </div>
          <TextContent />
        </div>

      </main>
    </div>
  );
}
