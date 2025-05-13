import NavBarSecond from "../../components/NavBar/NavBarSecond";
import Image from "next/image";
import Srvicesider from "../../components/Services/ServiceAside";
import HeroVideo from "../../components/Services/ServiceHeroVideo";
import InlineVideo from "../../components/Services/InlineVideoSection";

const relatedData = [
    {
        icon: '/physical-therapy.svg',
        title: 'SOS Approach to Feeding',
        link: '/services/sos-approach-feeding',
    },
    {
        icon: '/physical-therapy.svg',
        title: 'TalkTools Feeding Therapy',
        link: '/services/talk-tools-feeding-therapy',
    },
]

export default function FeedingTherapy() {
    return (
        <div className="bg-white min-h-screen">
            <header className="absolute top-0 w-full">
                <NavBarSecond />
            </header>

            <div className="font-normal">
                <HeroVideo
                    title="Feeding Therapy"
                    videoUrl="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
                />

                {/* Content Section */}
                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar on the left */}

                    <Srvicesider showRelatedServices={true}  relatedServicesData={relatedData}/>
                    {/* Main Content on the right */}
                    <div className="lg:col-span-2 space-y-6 order-1 lg:order-2 ">
                        <section className="relative overflow-hidden ">
                            <h2 className="text-5xl font-normal leading-tight mb-6 text-gray-800 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#DA159B] hover:to-[#54169C] transition-all duration-500  ">Feeding Therapy</h2>
                            <div className="container mx-auto px-2">
                                <div>
                                    <div className="relative bg-white/90 backdrop-blur-sm rounded-[2.5rem] pt-9 pb-1 px-6 md:pt-8 md:pb-1 md:px-10
                                  shadow-[20px_20px_40px_rgba(218,21,155,0.1)]
                                  before:absolute before:inset-0 before:rounded-[2.5rem] before:-z-10
                                  before:border-[3px] before:border-[#54169C]/30
                                  before:translate-x-0 before:translate-y-0
                                  before:transition-all before:duration-300
                                  after:absolute after:inset-0 after:rounded-[2.5rem] after:-z-10
                                  after:border-[3px] after:border-transparent
                                  after:translate-x-0 after:translate-y-0
                                  after:transition-all after:duration-300
                                  hover:before:translate-x-2 hover:before:translate-y-2
                                  hover:after:border-[#DA159B]/30 
                                  hover:after:-translate-x-2 hover:after:-translate-y-2">
                                        <InlineVideo
                                            thumbnailSrc="/galleryimage.jpg"
                                            caption="Watch Our Feeding Therapy"
                                            videoUrl="https://media.thespeechclinic.ae/website/videos/speechsync-hero-video.mp4"
                                        />
                                    </div>
                                    <div className="relative z-10 my-6">

                                        <div>
                                            <p className="mb-6">At our                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DA159B] to-[#54169C] font-meduim">      {" "}
                                                Speech Clinic
                                            </span>, in Dubai, we understand that feeding difficulties can affect both the physical and emotional well-being of individuals. Our Feeding Therapy services are designed to help children and adults overcome challenges such as picky eating, swallowing issues, and sensory sensitivities to food.
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="rounded-2xl overflow-hidden">
                                                    <Image
                                                        width={300}
                                                        height={400}
                                                        src="/speech-therapy-02.jpg"
                                                        alt="Speech Therapy Session"
                                                        className="w-full h-[350px] object-cover"
                                                    />
                                                </div>
                                                <div className="rounded-2xl overflow-hidden">
                                                    <Image
                                                        width={300}
                                                        height={400}
                                                        src="/speech-therapy-01.jpg"
                                                        alt="Speech Therapy Session"
                                                        className="w-full h-[350px] object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="max-w-3xl mx-auto">
                                                <p className="my-4 "> At The{" "}
                                                    We use a combination of evidence-based approaches to address these difficulties and create a Our Approach: Playful, Fun, and Effective!
                                                </p>
                                                <p className="my-3">We use a combination of proven, playful methods to help individuals overcome feeding challenges. Each approach is tailored to meet your specific needs, ensuring progress at your own pace.</p>
                                            </div>

                                            <div className=" p-6  my-3">
                                                <h1 className="text-3xl leading-tight my-4 text-gray-800 ">Common Feeding Challenges We Address:</h1>
                                                <div className="space-y-4">
                                                    <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                                                        <h3 className="text-lg font-normal text-[#5B21B6]">Picky Eating:</h3>
                                                        <p className="text-sm text-gray-700 mt-1">Does your child turn their nose up at most foods? Let&apos;s explore the world of flavors together!</p>
                                                    </div>

                                                    <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                                                        <h3 className="text-lg font-normal text-[#5B21B6]">Swallowing Issues:</h3>
                                                        <p className="text-sm text-gray-700 mt-1">Struggling with swallowing can be stressful. We&apos;ll work on building confidence and safety around eating.</p>
                                                    </div>
                                                    <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                                                        <h3 className="text-lg font-normal text-[#5B21B6]">Sensory Sensitivities:</h3>
                                                        <p className="text-sm text-gray-700 mt-1">If certain textures or smells turn you off from food, we&apos;ll help you feel comfortable with more variety.</p>
                                                    </div>
                                                    <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                                                        <h3 className="text-lg font-normal text-[#5B21B6]">Oral Motor Difficulties:</h3>
                                                        <p className="text-sm text-gray-700 mt-1">If chewing and swallowing are a challenge, we use hands-on techniques to build strength and coordination.</p>
                                                    </div>
                                                    <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                                                        <h3 className="text-lg font-normal text-[#5B21B6]">Transitioning from Liquids to Solids:</h3>
                                                        <p className="text-sm text-gray-700 mt-1">Moving from bottle-feeding to solid foods doesn&apos;t have to be overwhelming we&apos;ll make it smooth!</p>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className=" p-6">
                                                <h1 className="text-3xl leading-tight my-1 text-gray-800 ">What to Expect in Feeding Therapy:</h1>
                                                <p className="text-sm my-4 text-gray-600 mt-6">
                                                    Every session is designed to be interactive, engaging, and full of fun activities! We know that feeding therapy doesn&apos;t have to be a chore, and we make sure every step is a positive experience.
                                                </p>
                                                <div className="space-y-4">
                                                    <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                                                        <h3 className="text-lg font-normal text-[#5B21B6]">Interactive Play:</h3>
                                                        <p className="text-sm text-gray-700 mt-1"> From sensory food exploration to hands-on oral-motor exercises, every session is full of exciting, child-friendly activities.</p>
                                                    </div>

                                                    <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                                                        <h3 className="text-lg font-normal text-[#5B21B6]">Gradual Progress:</h3>
                                                        <p className="text-sm text-gray-700 mt-1">We break things down into small, manageable steps so that every milestone feels like a win.</p>
                                                    </div>
                                                    <div className="border-l-4 border-[#5B21B6] bg-[#FAF9FF] p-4 rounded-md shadow-sm hover:shadow-md transition">
                                                        <h3 className="text-lg font-normal text-[#5B21B6]">Sensory Sensitivities:</h3>
                                                        <p className="text-sm text-gray-700 mt-1">Parents and caregivers are a big part of the process! We&apos;ll guide you with practical tips and strategies to support progress at home.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* NEW */}
                                            <div className=" p-6">
                                                <h1 className="text-3xl leading-tight my-1 text-gray-800 ">Ready to Get Started?</h1>
                                                <p className="text-sm my-4 text-gray-600 mt-6">
                                                    Feeding therapy at our clinic is all about taking one step at a time no pressure, just progress. We&apos;re here to make mealtimes enjoyable again, so that both you and your child feel confident around food.

                                                    If you&apos;re ready to make mealtime fun again, let&apos;s talk! Contact us today to schedule a consultation, and take the first step toward building a positive, stress-free relationship with food.</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </div>
    );
}
