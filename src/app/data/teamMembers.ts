export interface TeamMember {
    name: string;
    role: string;
    image: string;
    qualification: string;
    experience: string;
    certifications: string[];
    category: string;
}

export const teamMembers: TeamMember[] = [
    {
        name: "Sana Shareef",
        role: "Founder and CEO",
        image: "/teams/sana-shareef.jpg",
        qualification: "Masters in Pediatric Speech & Language Therapy",
        experience: "10 Years",
        category: "speech-language-therapists",
        certifications: [
            "PROMPT",
            "OPT LEVEL 3",
            "Sensory Motor Apraxia of Speech",
            "DIR FLOOR TIME",
            "Feeding Therapy",
            "Assessor - ADOS 2",
            "Nuffield Dyspraxia Program",
            "Sensory Integration Level 2",
            "Certified Sensory Speech Therapist from Inside Out",
            "Trained in Gestalt Processing and Hanen Approach",
            "Therapeutic Listening & Movement Program"
        ],
    },
    {
        name: "Soumya Zachariah",
        role: "Speech & Language Therapist",
        image: "/teams/soumya-ann.jpg",
        qualification: "Master of Audiology & Speech-Language Pathology",
        experience: "10 Years",
        category: "speech-language-therapists",
        certifications: [
            "PROMPT",
            "OPT LEVEL 1 AND LEVEL 2",
            "DIR FLOORTIME",
            "GESTALT TRAINED",
            "THE LISTENING PROGRAM",
            "MAKATON LEVEL 1 AND 2",
            "KAUFMAN SPEECH TO LANGUAGE PRACTITIONERS",
            "DIPLOMA IN DYSLEXIA",
            "Feeding Therapy",
            "Sensory Motor Apraxia of Speech"
        ],
    },
    {
        name: "Riya Muhammed",
        role: "Speech & Language Therapist",
        image: "/teams/riya.jpg",
        qualification: "Master of Audiology & Speech-Language",
        experience: "Pathology Experience: 5 Years",
        category: "speech-language-therapists",
        certifications: [
            "Beckman oral motor intervention",
            "OPT LEVEL 2",
            "Trained in Gestalt processing"
        ],
    },
    {
        name: "Afshida C P",
        role: "Speech & Language Therapist",
        image: "/teams/afshida.jpg",
        qualification: "Bachelor in Pediatric Speech & Language Therapy",
        experience: "5+ Years",
        category: "speech-language-therapists",
        certifications: [
            "OPT LEVEL 2",
            "NLA Level 1 Certification",
            "Trained In Gestalt Processing",
            "Oral placement therapy Level 2",
            "Treatment of childhood apraxia of speech",
            "Certification in sensory integration",
            "Natural Language Acquisition in Autism : Echolalia to self generated language Level 1",
            "Certified NLA trained clinician",
            "Certification in gestalt language processing",
            "Understanding sensory processing and integration in children"
        ],
    },
]; 