export interface ListingSection {
  type: "listing";
  title: string;
  items: string[];
}

export interface TextSection {
  type: "text";
  content?: string;
  caption?: string;
}

export type Section = TextSection | ListingSection;

export interface Service {
  galleryimages: unknown;
  slug: string;
  title: string;
  herovideo?: string;
  heroimage: string;
  description: string;
  excerpt: string;
  sections: Section[];
}

const services: Service[] = [
  {
    slug: "kaufman-speech-protocol",
    title: "The Kaufman Speech to Language Protocol",
    herovideo: "",
    description:
      "The K-SLP methods shape a child's best approximation of words toward full adult forms. It follows motor learning principles to improve speech movement patterns. The goal is to make speech more natural, intelligible, and effective for everyday interactions.",
    heroimage: "/galleryimage3.jpg",
    galleryimages: [
      "/galleryimage3.jpg",
      "/galleryimage2.jpeg",
      "/galleryimage1.jpeg",
    ],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "At The Speech Clinic, the Kaufman Speech to Language Protocol (K-SLP) is used to support children with childhood apraxia of speech (CAS), speech sound disorders, and expressive language delays. Our therapists focus on shaping speech-motor skills by working with the child's existing consonants, vowels, and syllable structures, gradually guiding them toward clearer, more coordinated speech. Using structured cueing techniques, repetition, and reinforcement, we help children build a strong speech foundation. This approach not only improves speech clarity but also enhances functional communication and social interactions. At The Speech Clinic, K-SLP is tailored to each child's unique abilities, ensuring steady progress toward confident, effective verbal communication.",
      },
      {
        type: "text",
        caption: "More than words",
        content:
          "More than is the program of Hanen Center which facilitates communication in children with autism spectrum disorder. This program incorporates child's sensory preferences in the play making the action more interactive and fun. Rock and Owl are the two techniques of this program u00a0 which we follow in the speech clinic.",
      },
      {
        type: "text",
        content:
          "More than Words provides evidence-based strategies to develop communication intent, interaction, and joint attention in children with social communication delays. It also promotes turn-taking and back-and-forth interaction in children. We find both the rock and owl techniques are the best techniques for young children with delays in beginning interaction moreover help clinicians to pair with children easily.",
      },
      {
        type: "text",
        content:
          "Rock techniques; ROCK is an acronym used to promote turn-taking and engagement in interactions, this strategy creates multiple opportunities to hear and learn, and uses cues and prompts to encourage interactions since the play incorporates the child's sensory preference which Ensures the interaction remains enjoyable and motivating).OWL Technique is a strategy used in child-centered communication, particularly in speech and language therapy, to promote engagement and interaction like Rock. It involves watching the child closely to understand their interests, actions, and communication attempt a nd and Paying attention to gestures, facial expressions, and vocalization. It focuses on listening to what the child trying to communicate verbally or nonverbally thus encouraging the child to independently communicate.",
      },
    ],
  },
  {
    slug: "oral-placement-therapy",
    title: "Oral Placement Therapy",
    herovideo:
      "https://speechclinic.b-cdn.net/website/videos/Speech%20Therapies/ORAL%20PLACEMENT%20THERAPY.mp4",
    description:
      "Oral Placement Therapy (OPT) is a specialized speech therapy approach which enhances oral motor skills for speech and feeding by using tactile and proprioceptive inputs. It helps improve speech clarity and feeding in individuals with conditions like apraxia, dysarthria, and expressive language delays.",
    heroimage: "/galleryimage3.jpg",
    galleryimages: ["/galleryimage3.jpg", "/galleryimage3.jpg"],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          " At THE SPEECH CLINIC, we use Oral Placement Therapy (OPT) to enhance speech and feeding skills through a structured hierarchy of tools and movement-based prompts. Unlike traditional speech therapy, OPT provides targeted sensory input to improve speech clarity, sentence length, and oral coordination. It is beneficial for individuals of all ages, especially those with muscle awareness, coordination, or sensitivity challenges. OPT helps with conditions such as apraxia, dysarthria, feeding difficulties, and expressive language delays. By integrating OPT, we build essential motor skills for confident and effective communication.",
      },
    ],
  },
  {
    slug: "prompt-therapy",
    title: "PROMPT Therapy",
    herovideo:
      "https://speechclinic.b-cdn.net/website/videos/COMBINED%20VIDEOS/PROMPT%20COMBINED.mp4",
    description:
      "PROMPT FOR RESTRUCTURING ORALMUSCULAR PHONETIC TARGETS is an evidence-based technique where oral structures are guided using clinician hands to produce sounds or words. It helps in refining oral movements to plan better speech production.",
    heroimage: "/galleryimage3.jpg",
    galleryimages: [
      "/galleryimage3.jpg",
      // "/images/tailwind-2.jpg",
      // "/images/tailwind-3.jpg",
      // "/images/tailwind-4.jpg",
    ],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "Prompt has become a valuable therapeutic approach in the speech clinics speech therapy delivery. PROMPT therapy has demonstrated strong evidence of efficacy in speech therapy, particularly for children with speech motor planning disorders, such as childhood apraxia of speech (CAS) and other phonological disorders. Prompt integrates tactile kinesthetic, proprioceptive feedback and auditory guidance which helps in motor planning :sequence and execute speech movements. PROMPT therapy also incorporates aspects of the social, physical, and emotional domains within its activities. Activities in PROMPT therapy directly target the development of oral-motor coordination, strengthening muscles of the lips, tongue, jaw, and soft palate. These activities may include guiding the child's mouth to specific positions (e.g., opening the mouth, rounding the lips) to help them produce specific sounds or words. PROMPT therapy includes structured play (e.g., using toys, storybooks, or songs) that integrates speech production with emotional expression and social engagement. For example, a child may imitate animal sounds during a game while interacting with peers, using both motor skills and social cues.",
      },
    ],
  },
  {
    slug: "gestalt-language-processing",
    title: "Gestalt Language Processing",
    description:
      "Gestalt language processing is a therapeutic approach that views language as a whole, rather than focusing on individual words or isolated phrases. This process encourages individuals to understand and use language in its natural, integrated form, where communication is more than just the sum of its parts. In the context of Gestalt Language Therapy (GLT), this approach helps individuals particularly those with autism or developmental language disorders connect emotionally, socially, and cognitively through speech.",
    heroimage: "/galleryimage3.jpg",
    galleryimages: [
      "/galleryimage3.jpg",
      // "/images/tailwind-2.jpg",
      // "/images/tailwind-3.jpg",
      // "/images/tailwind-4.jpg",
    ],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "Gestalt Language Therapy utilizes natural language processing techniques, promoting spontaneous, meaningful speech and aiding in the development of functional language skills. GLT encourages clients to connect emotionally, socially, and cognitively with language, making communication more integrated and relevant to everyday situations. It fosters expressive and receptive language growth, ensuring that individuals can use language meaningfully in real-world contexts.",
      },
      {
        type: "text",
        content:
          "Gestalt Language Therapy progresses through various stages, each designed to build on the client's language skills and social understanding. In the initial stage, the focus is on building rapport and comfort with language, using simple phrases and nonverbal communication. The intermediate stage encourages clients to use more complex sentence structures and initiate conversations, while therapists help expand their vocabulary and social interaction skills. Finally, the advanced stage focuses on refining language use in real-world social situations, helping individuals develop the confidence to express themselves fully and engage in meaningful communication. Through this structured approach, GLT integrates gestalt language processing and natural language processing techniques to empower individuals to communicate effectively, fostering both emotional expression and social connection",
      },
    ],
  },
  {
    slug: "fluency-therapy",
    title: "Fluency Therapy",
    description:
      "Fluency therapy, as the name suggests, refers to improving the fluency of speech of individuals who have fluency disruptions due to stuttering, cluttering, or any other fluency-related disorders. A variety of approaches that are tailor-made for the individuals are implemented in the therapy sessions to attain better fluency of their speech.",
    heroimage: "/galleryimage3.jpg",
    galleryimages: [
      "/galleryimage3.jpg",
      // "/images/tailwind-2.jpg",
      // "/images/tailwind-3.jpg",
      // "/images/tailwind-4.jpg",
    ],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "At The Speech Clinic, after the detailed fluency assessment, we assign a detailed custom-made treatment according to the difficulties presented and the needs of the individual. Evidence-based practices are used to arrive at improved speech fluency. When it comes to younger children, we keep it simple and fun through various analogies and fluency games. These techniques will be implemented through various scenarios and real-life based situations. Quantitative methods are used to assess the baseline and monitor the progress of the individuals. Along with speech fluency, we also focus on improving the quality of life of the individual through working on their confidence and associated factors.Improved fluency is targeted through approaches like :",
      },

      {
        type: "listing",
        title: "",
        items: [
          "Stuttering modification approaches",
          "Fluency Shaping approaches",
          "Response cost",
          "MIDVAS",
          "ZDelayed auditory feedback etc",
        ],
      },
    ],
  },
  {
    slug: "myofunctional-therapy",
    title: "Myofunctional Therapy",
    description:
      "Myofunctional therapy is a specialized therapeutic approach that focuses on the muscles of the face and mouth, particularly those involved in breathing, swallowing, and speaking. The therapy aims to correct improper muscle function, often related to oral habits such as thumb sucking, mouth breathing, and abnormal swallowing patterns. These behaviors can impact oral health, facial development, and speech, and may contribute to problems like misaligned teeth, poor posture, and speech disorders.",
    heroimage: "/galleryimage3.jpg",
    galleryimages: [
      "/galleryimage3.jpg",
      // "/images/tailwind-2.jpg",
      // "/images/tailwind-3.jpg",
      // "/images/tailwind-4.jpg",
    ],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "The therapy typically involves exercises that help individuals strengthen and retrain the muscles of the mouth, tongue, lips, and jaw. For example, myofunctional therapy may include exercises to encourage proper tongue posture, improve nasal breathing, and teach correct swallowing patterns. These exercises are often personalized and gradually increase in complexity to help the individual develop healthy, functional oral habits.",
      },
      {
        type: "text",
        content:
          "Myofunctional therapy can be beneficial for people of all ages, from children with developmental oral issues to adults experiencing the effects of long-standing improper muscle function. It is commonly used alongside orthodontic treatment to ensure long-term results by improving muscle balance and supporting the proper alignment of teeth and jaws. By addressing muscle dysfunction early on, myofunctional therapy can promote better oral health, speech clarity, and overall well-being.",
      },
    ],
  },

  {
    slug: "articulation-therapy",
    title: "Articulation Therapy",
    description:
      "Speech sound disorders are a group of communication challenges in which individuals have difficulty producing sounds correctly, making it hard for others to understand their speech. These disorders can be categorized into two main types: articulation disorders and phonological disorders",
    heroimage: "/galleryimage3.jpg",
    galleryimages: [
      "/galleryimage3.jpg",
      "/galleryimage3.jpg",
      // "/images/tailwind-3.jpg",
      // "/images/tailwind-4.jpg",
    ],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "In phonological disorders, individuals struggle with the rules and patterns that govern how sounds are used in language, such as consistently leaving out sounds in words or simplifying complex sound combinations.",
      },
      {
        type: "text",
        content:
          "In phonological disorders, individuals struggle with the rules and patterns that govern how sounds are used in language, such as consistently leaving out sounds in words or simplifying complex sound combinations.",
      },
      {
        type: "text",
        content:
          "Speech sound disorders can be caused by various factors, including developmental delays, hearing impairments, neurological conditions, or a history of speech trauma. These disorders can affect communication, social interactions, academic performance, and self-confidence.",
      },
      {
        type: "text",
        content:
          "Early diagnosis and intervention through speech therapy are crucial for helping individuals overcome speech sound disorders. Treatment often involves tailored exercises to help individuals improve their ability to produce sounds correctly. Innovative therapy approaches used at The Speech Clinic Dubai are:",
      },

      {
        type: "listing",
        title: "",
        items: [
          "Digital Apps and Interactive Technology",
          "Biofeedback and Auditory Feedback Systems",
          "Prompt Therapy and Tactile Techniques",
          "Metaphon therapy",
          "Minimal Pair therapy",
          "Motor Speech Training with Gestural Cues",
          "Neuroplasticity-based Techniques",
          "Use of Music and Rhythmic Speech",
        ],
      },
    ],
  },

  {
    slug: "makaton",
    title: "Makaton",
    herovideo:
      "https://speechclinic.b-cdn.net/website/videos/COMBINED%20VIDEOS/MAKATON%20COMBINED.mp4",
    description:
      "Makaton is a language program that uses Speech, Signs and Symbols for basic communication. It helps to develop language skills and facilitate social interaction.",
    heroimage: "/galleryimage3.jpg",
    galleryimages: [
      "/galleryimage3.jpg",
      // "/images/tailwind-2.jpg",
      // "/images/tailwind-3.jpg",
      // "/images/tailwind-4.jpg",
    ],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "At The Speech Clinic, we use this multi-modal approach to help individuals build confidence, form connections, and expand their opportunities. This method differs from other sign language systems because speech is always used alongside symbols, reinforcing the connection between auditory and visual elements. Additionally, it incorporates expressive features such as facial expressions and body language to convey intent.",
      },
      {
        type: "text",
        content:
          "This approach is highly adaptable and can benefit individuals at various levels of communication. We utilize it with children who have mild to profound learning difficulties, Autism Spectrum Disorders, physical disabilities, sensory impairments, and developmental language disorders. It can be applied in different ways using a single symbol to represent a full sentence, highlighting key words, or including grammatical elements for more detailed expression.",
      },
    ],
  },
  {
    slug: "dir-floor-time",
    title: "DIR-Floor Time",
    description:
      "DIR is a Developmental, Individual-differences, and Relationships-based model and DIR Floortime applies this theoretical framework in the therapy process.",
    heroimage: "/galleryimage3.jpg",
    galleryimages: [
      "/galleryimage3.jpg",
      // "/images/tailwind-2.jpg",
      // "/images/tailwind-3.jpg",
      // "/images/tailwind-4.jpg",
    ],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "At the Speech Clinic, we use DIR Floortime for infants, toddlers, and children. The approach involves parents as the cornerstone, and plans are formed based on the individual's profile. In this approach, the child makes the lead, and the clinician follows the lead of the child. The model puts forward various Functional Emotional Developmental Capacities (FEDC)- that are interrelated and have to be robust in development.",
      },
      {
        type: "text",
        content:
          "DIR Floortime also signifies the Circles of Communication- Opening (a gesture of interest initiated by the child)- Response (caregiver enticing the child to expand ) -Closing (final stage where child responds and closes one circle of communication).",
      },
    ],
  },
  {
    slug: "sensory-motor-approach-to-apraxia-of-speech-and-other-related-motor-speech-disorders",
    title: "Sensory Motor Approach to Apraxia of Speech",
    description:
      "The sensory motor approach encompasses Oral Placement Therapy (OPT) activities that utilize tactile modality in conjunction with auditory and visual modalities.",
    heroimage: "/galleryimage3.jpg",
    galleryimages: [
      "/galleryimage3.jpg",
      // "/images/tailwind-2.jpg",
      // "/images/tailwind-3.jpg",
      // "/images/tailwind-4.jpg",
    ],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "At the Speech Clinic, we incorporate a multi-sensory tactile approach to create transition from OPT to speech production. The focus of this approach includes- building awareness of articulators for speech, improve volitional movement and motor planning for speech sound production, and increase transitions between phonemes during speech.",
      },
      {
        type: "text",
        content:
          "The use of a variety of OPT tools and activities including Tactile Tubes and Speech Blocks, carefully selected based on the individual's need, helps in improved planning, programming and sequential oral movements.",
      },
    ],
  },
  {
    slug: "nuffield-dyspraxia-program",
    title: "Nuffield Dyspraxia Program",
    description:
      "The Nuffield Dyspraxia Program (NDP) is a structured, evidence-based approach designed to support individuals with childhood apraxia of speech (CAS) or developmental verbal dyspraxia (DVD). This program systematically builds speech-motor skills using a hierarchy of phonemes, words, and sentences, ensuring gradual and consistent speech development. With engaging and interactive activities, NDP is suitable for children at various levels of speech development and can be implemented by therapists, educators, and families.",
    heroimage: "/galleryimage3.jpg",
    galleryimages: [
      "/galleryimage3.jpg",
      // "/images/tailwind-2.jpg",
      // "/images/tailwind-3.jpg",
      // "/images/tailwind-4.jpg",
    ],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "At The Speech Clinic, we use the Nuffield Dyspraxia Program to assess and treat childhood apraxia of speech through structured, individualized therapy. Our approach includes phoneme and word-level practice, motor planning strategies, and multi-sensory techniques to enhance speech clarity and fluency. With a focus on gradual progression from isolated sounds to conversational speech, we provide tailored interventions that incorporate family involvement and home-based support to improve speech intelligibility and confidence.",
      },
      {
        type: "text",
        caption: "Inside Out",
        content:
          "Inside Out explores emotional awareness and regulation, emphasizing how emotions influence behavior and communication. In speech therapy settings, this technique helps children develop emotional intelligence and expressive language skills.At a speech clinic in Dubai, therapists use this approach to help children identify and label emotions, improving their ability to express feelings like happiness or frustration. Role-playing and emotion-based activities teach social skills and empathy, allowing children to understand and respond to others emotional cues. Emotional regulation strategies, such as calming techniques, are also integrated to enhance communication in both structured and unstructured settings. The approach fosters a supportive, emotionally aware environment for children to develop linguistic and emotional",
      },
    ],
  },
  {
    slug: "language-booster-club",
    title: "Language Booster Club",
    description:
      "At The Speech Clinic, we provide specialized language booster clubs offering a fun, language rich and interactive environment for our children. These clubs enhance the child's speech & language development and provide relevant opportunities for them to communicate.",
    heroimage: "/galleryimage3.jpg",
    galleryimages: ["/galleryimage3.jpg"],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "We group our children based on their communicative stages or language ages to build meaningful interactions between them. These groups are lead by fully qualified and experienced Speech and language therapists. Each of these booster clubs consists of 3 or more children at a time with at least 2 Speech and language therapist leading them. Through these clubs, we help our children to establish the confidence in listening, speaking and interacting with others.",
      },
      {
        type: "text",
        caption: "Why Language booster club?",
      },
      {
        type: "text",
        content: "<strong>Enhanced social interaction and peer skills<strong>",
      },
      {
        type: "text",
        content:
          "These clubs helps our children to develop a range of social behaviours such as :",
      },
      {
        type: "listing",
        title: "",
        items: [
          "Sharing space",
          "Taking turns and sharing",
          "Asking for help",
          "Identifying emotions",
          "Perspective taking",
          "Developing friendships",
        ],
      },
      {
        type: "text",
        content:
          "Also, they guide our children to navigate social situations and assist these skills being carried over to everyday situations.",
      },
      {
        type: "text",
        content: "<strong>Boosting language skills<strong>",
      },
      {
        type: "text",
        content:
          "Language acquisition happens here through a variety of fun and creative activities. We work on language aspects like :",
      },
      {
        type: "listing",
        title: "",
        items: [
          "Vocabulary building",
          "Utterance length building",
          "Inferencing",
          "Story telling/narration",
          "Conversation",
          "Topic initiation and maintenance",
        ],
      },
      {
        type: "text",
        content:
          "Through rhymes/songs, rule-based games, role-playing and many more activities.",
      },
    ],
  },
  {
    slug: "manual-therapy",
    title: "Manual Therapy",
    description:
      "Manual therapy at The Speech Clinic Dubai involves hands-on techniques such as massage, joint mobilizations, soft tissue mobilizations, stretching to address musculoskeletal pain, improve mobility, muscle tightness, joint stiffness, tissue flexibility, movement dysfunction and promote better movement patterns.",
    heroimage: "/galleryimage3.jpg",
    galleryimages: ["/galleryimage3.jpg"],
    excerpt: "",
    sections: [],
  },
  {
    slug: "spider-cage-therapy",
    title: "Spider Cage Therapy",
    description: "",
    heroimage: "/galleryimage3.jpg",
    galleryimages: ["/galleryimage3.jpg"],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "Spider Cage therapy at The Speech Clinic Dubai is an innovative treatment designed to assist children with movement disorders and postural issues.",
      },
      {
        type: "text",
        content:
          "The Spider Cage Therapy allows for precise, controlled movements and helps children strengthen muscles, improve posture, and gain better body awareness. The rhythmic swinging motions can help improve muscle tone, balance, coordination, and overall physical function in children with neurological conditions.",
      },
    ],
  },
  {
    slug: "cuevas-medek-mxercises",
    title: "Cuevas Medek Exercises (CME)",
    description: "",
    heroimage: "/galleryimage3.jpg",
    galleryimages: ["/galleryimage3.jpg"],
    excerpt: "",
    sections: [
      {
        type: "listing",
        title: "",
        items: [
          "Cuevas Medek Exercises are a dynamic and interactive form of therapy used at The Speech Clinic Dubai to promote motor development in children, particularly those with neurological or developmental disorders.",
          "CME is based on the principles of dynamic systems theory and aims to promote motor development and functional skills in children with neuromuscular conditions, particularly cerebral palsy.",
          "The Cuevas Medek Exercises focus on facilitating active movements and promoting postural control, balance, and coordination through specific exercises and dynamic activities.",
        ],
      },
    ],
  },
  {
    slug: "strengthening-and-stretching-program",
    title: "Strengthening and Stretching Program",
    description: "",
    heroimage: "/galleryimage3.jpg",
    galleryimages: ["/galleryimage3.jpg"],
    excerpt: "",
    sections: [
      {
        type: "listing",
        title: "",
        items: [
          "At The Speech Clinic Dubai, we offer comprehensive strengthening and stretching programs designed to enhance muscle flexibility, strength, and coordination for proper muscle development and improved joint range of motion",
          "Our goal At the Speech Clinic Dubai is to help children build functional strength, improve posture, and prevent injuries. This program in pediatrics offers numerous benefits for children, especially those with motor delays, retained reflexes, muscle weakness or tightness.",
        ],
      },
    ],
  },
  {
    slug: "plyometric-and-resistance-band-exercises",
    title: "Plyometric and Resistance Band Exercises",
    description: "",
    heroimage: "/galleryimage3.jpg",
    galleryimages: ["/galleryimage3.jpg"],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "Plyometric and resistance band exercises are key components of our pediatric physiotherapy treatments at The Speech Clinic Dubai. These are essential for improving a child's agility, motor planning, and overall physical performance.",
      },
      {
        type: "text",
        content:
          "These exercises help in developing explosive strength, endurance, and functional movement patterns, supporting overall gross motor skill development.",
      },
    ],
  },
  {
    slug: "therapeutic-exercises",
    title: "Therapeutic Exercises",
    description: "",
    heroimage: "/galleryimage3.jpg",
    galleryimages: ["/galleryimage3.jpg"],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "Therapeutic exercises are a core component of our pediatric physiotherapy services at The Speech Clinic Dubai. These exercises are designed to address a variety of physical challenges, muscle weakness, poor coordination , developmental delays, injury recovery, reducing pain and preventing further complications and supporting long-term physical well-being and development.",
      },
      {
        type: "text",
        content:
          "Prescribing and guiding children through age-appropriate exercises and activities aimed at improving muscle strength, range of motion, endurance, coordination, and motor control.",
      },
    ],
  },
  {
    slug: "balance-and-vestibular-rehabilitation",
    title: "Balance And Vestibular Rehabilitation",
    description: "",
    heroimage: "/galleryimage3.jpg",
    galleryimages: ["/galleryimage3.jpg"],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "Aquatic Therapy at the Speech Clinic Dubai is particularly effective for children with mobility challenges, muscular dystrophy, or post-surgical recovery.",
      },
      {
        type: "text",
        content:
          "The buoyancy of the water reduces stress on joints while providing resistance to improve strength, flexibility, motor control and enhance cardiovascular fitness in a safe and supportive environment. Through tailored exercises at The Speech Clinic Dubai, aquatic therapy helps children gain confidence in their movement, build endurance, and achieve functional goals while enjoying the therapeutic benefits of water.",
      },
    ],
  },
  {
    slug: "aquatic-therapy",
    title: "Aquatic Therapy",
    description: "",
    heroimage: "/galleryimage3.jpg",
    galleryimages: ["/galleryimage3.jpg"],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "Balance and vestibular rehabilitation is an essential part of pediatric physiotherapy at The Speech Clinic Dubai. Using a variety of specialized techniques, we help children improve their balance, posture, and coordination.",
      },
      {
        type: "text",
        content:
          "It is particularly beneficial for children with balance issues, dizziness, or vestibular disorders. We help them engaging in targeted exercises; children develop the skills necessary to improve their spatial awareness, reduce the risk of falls, and enhance their ability to perform daily activities",
      },
    ],
  },
  {
    slug: "neuromuscular-reEducation",
    title: "Neuromuscular Re-Education and Other Techniques",
    description: "",
    heroimage: "/galleryimage3.jpg",
    galleryimages: ["/galleryimage3.jpg"],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "Neuromuscular re-education at The Speech Clinic Dubai is designed to improve motor control and muscle coordination in children with neurological conditions or movement disorders through various treatment techniques.",
      },
      {
        type: "text",
        content:
          "Constraint-Induced Movement Therapy (CIMT) : At The Speech Clinic Dubai, we use Constraint Induced Movement Therapy (CIMT) to help children with neurological conditions, such as cerebral palsy, improve the use of their affected limbs.",
      },
      {
        type: "text",
        content:
          "CIMT works by restricting the use of the unaffected limb and encouraging the child to use the impaired one, thereby promoting neural reorganization. This technique has proven effective in enhancing motor skills, increasing limb function, and improving overall coordination.",
      },
      {
        type: "text",
        content:
          "At the Speech Clinic Dubai we do Retraining & Reorganizing the Nervous System through PNF, Roods, Bobath and Neuro Developmental Techniques.",
      },
    ],
  },

  {
    slug: "reflex-lntegration",
    title: "Reflex Integration",
    herovideo:
      "https://speechclinic.b-cdn.net/website/videos/COMBINED%20VIDEOS/relax%20integration.mp4",
    description:
      "Reflex integration refers to the process by which primitive reflexes automatic, involuntary movements that are present at birth are inhibited or 'integrated' into more complex, voluntary motor control as the child matures. These reflexes are essential for early development, but if they remain active beyond the expected developmental stage, they can interfere with normal movement, posture, coordination, and behavior.",
    heroimage: "/galleryimage3.jpg",
    galleryimages: ["/galleryimage3.jpg"],
    excerpt: "",
    sections: [
      {
        type: "text",
        content:
          "At The Speech Clinic, our therapist are qualified in certifications like Rhythmic Movement Training International (RMTi), Harkla Primitive Reflexes-Master level, and Masgutova Neurosensorimotor Reflex Integration (MNRI). The primitive reflexes are :",
      },
      {
        type: "text",
        caption: "Palmar Grasp Reflex:",
      },

      {
        type: "listing",
        title: "",
        items: [
          "This primitive reflex, which should disappear by around 6 months of age",
          "If it persists, it may hinder the development of fine motor skills, such as hand-eye coordination, grasping, and object manipulation, making tasks like writing and self-feeding difficult",
          "Interfere with sensory processing, cognitive functions, postural control, balance and motor planning.",
        ],
      },
      {
        type: "text",
        caption: "Moro Reflex",
      },
      {
        type: "listing",
        title: "",
        items: [
          "This primitive reflex, which should disappear by around 4-6 months of age",
          "Persistance can lead to several developmental issues and linked to the fight-or-flight mechanism, and it can cause emotional and behavioral issues",
          "Interfere with focus and attention, making it difficult for children to concentrate or sit still, particularly in school settings",
          "Impact motor coordination and balance, leading to difficulties in tasks that require controlled movement, such as walking or running",
          "Result in sensory processing issues, where children become hypersensitive to touch, sound, or movement",
        ],
      },
      {
        type: "text",
        caption: "ATNR (Asymmetrical Tonic Neck Reflex)",
      },
      {
        type: "listing",
        title: "",
        items: [
          "The ATNR should be disappear by the age of six months",
          "Persistance can interfere with normal motor development",
          "Difficulties with hand-eye coordination, balance, and spatial awareness",
          "Trouble with activities like writing, reading, or sports",
          "Impact cognitive functions, causing challenges with focus, concentration, and learning",
          "Interfere with laterality (the preference of one side of the body over the other), poor posture, and even",
          " emotional regulation difficulties .",
        ],
      },
      {
        type: "text",
        caption: "STNR (Symmetrical Tonic Neck Reflex)",
      },
      {
        type: "listing",
        title: "",
        items: [
          "The STNR typically integrates between 8 to 12 months of age",
          "If it remains active beyond this period, it can interfere with a child's ability to achieve coordinated, controlled movement",
          "Disrupt the development of proper posture, balance, and fine motor skills. This can result in problems with tasks such as sitting upright, crawling, or transitioning from one position to another",
          "Struggle with activities that require both upper and lower body coordination",
          "Contribute to difficulties in tasks that require concentration and focus, like reading or writing",
        ],
      },
      {
        type: "text",
        caption: "Spinal Galant Reflex",
      },
      {
        type: "listing",
        title: "",
        items: [
          "Integrates by around 9 months of age",
          "Persistance can affect a child's motor control and sensory processing.",
          "Difficulties with posture, balance, and coordination, making it hard for individuals to sit still or maintain a proper sitting position, particularly in school or during focused tasks.",
          "Result in frequent squirming, fidgeting, or discomfort while sitting",
          "Issues with fine motor skills",
          "Experience heightened anxiety or restlessness",
          "Bedwetting or difficulty with bladder control as the reflex affects the lower back and pelvic region",
        ],
      },
      {
        type: "text",
        caption: "TLR (Tonic Labyrinthine reflex)",
      },
      {
        type: "listing",
        title: "",
        items: [
          "This primitive reflex, which should integrate by 24 months of age.",
          "Persistance leads to poor balance, visual-perception challenges,auditory processing challenges ,decreased organizational skills,spatial awareness difficulties",
        ],
      },
      {
        type: "text",
        caption: "Plantar Reflex",
      },
      {
        type: "listing",
        title: "",
        items: [
          "The plantar reflex is associated with toe walking and poor balance",
        ],
      },
    ],
  },

  {
    slug: "sos-approach-feeding",
    title: "SOS Approach to Feeding",
    description:
      "The Sequential Oral Sensory (SOS) Approach is all about making food less intimidating. It starts with play and exploration no pressure, just fun! By gradually introducing new textures, tastes, and even colors of food, we help children feel more comfortable and confident around meals. The goal is to go from simple exploration to actually eating and enjoying a variety of foods.",
    heroimage: "/galleryimage3.jpg",
    galleryimages: ["/galleryimage3.jpg"],
    excerpt: "",
    sections: [
      {
        type: "text",
        caption: "What's included?",
      },
      {
        type: "listing",
        title: "",
        items: [
          "Exploring foods without the pressure to eat them.",
          "Creating positive associations with different textures and tastes.",
          "Moving at your pace no rush, just steady progress",
        ],
      },
    ],
  },
  {
    slug: "talk-tools-feeding-therapy",
    title: "TalkTools Feeding Therapy",
    description:
      "TalkTools is a unique, hands-on therapy that uses specific tools and exercises to strengthen and coordinate the muscles needed for chewing and swallowing. Whether your child struggles with oral-motor skills or sensory sensitivities, TalkTools focuses on improving mouth strength and coordination so that eating becomes easier, safer, and more enjoyable.",
    heroimage: "/galleryimage3.jpg",
    galleryimages: ["/galleryimage3.jpg"],
    excerpt: "",
    sections: [
      {
        type: "text",
        caption: "What's included?",
      },
      {
        type: "listing",
        title: "",
        items: [
          "Fun oral-motor exercises to strengthen mouth muscles.",
          "Tools that make chewing and swallowing easier and more comfortable.",
          "Personalized therapy plans that evolve as you progress.",
        ],
      },
    ],
  },
];

export function getrelatedservice(): Service[] {
  return services;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((Service) => Service.slug === slug);
}
