import Image from "next/image";
import BlogMoreHeader from "./BlogHeader";
import NavBarSecond from "../components/NavBar/NavBarSecond";

export default function BlogPage() {
  return (
    <>
     
      <div className="bg-white min-h-screen pb-0">
            <header className="absolute top-0 w-full z-50">
                <NavBarSecond />
              </header>
        <BlogMoreHeader/>

        <section className="px-4 max-w-6xl mx-auto">
          <h3 className="uppercase text-sm font-normal text-gray-800 mb-6">
            Read by category
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Customer feedback", color: "bg-purple-200" },
              { title: "Product Management", color: "bg-pink-200" },
              { title: "Roadmapping", color: "bg-orange-300" },
            ].map((item, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-md ${item.color}`}
              >
                <div className="h-40 flex items-center justify-center">
                  <span className="bg-white text-sm font-normal px-3 py-1 rounded-full shadow">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 px-4 max-w-6xl mx-auto">
          <h3 className="uppercase text-sm font-normal text-gray-800 mb-6">
            Featured Blogs
          </h3>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
            {[
              {
                img: "/galleryimage2.jpeg",
                tag: "Customer Feedback",
                date: "Feb 22, 2024",
                title:
                  "Development Milestones",
                desc: "Every parent eagerly anticipates the developmental milestones their child will achieve. These moments mark not only physical growth but also cognitive, emotional, and social progress. At The Speech Clinic Dubai, we understand the significance of thes",
              },
              {
                img: "/galleryimage3.jpg",
                tag: "Product Management",
                date: "Feb 20, 2024",
                title: "Significance of Early Intervention",
                desc: "Early intervention is a concept that has transformed the lives of countless individuals and their families, especially when it comes to addressing developmental delays and disorders like Autism Spectrum Disorder (ASD). At The Speech Clinic Dubai, we",
              },
              {
                img: "/galleryimage.jpg",
                tag: "Customer Feedback",
                date: "Feb 18, 2024",
                title:
                  "OT Awareness & Knowledge",
                desc: "To celebrate World OT Day, we have planned a series of exciting events and activities aimed at engaging both students and parents. Here is a brief outline of what we have in store: Parent-OT Interaction Session: An interactive session where you wil",
              },
              {
                img: "/galleryimage3.jpg",
                tag: "Customer Feedback",
                date: "Feb 18, 2024",
                title:
                  "The Key Component for Skill Building",
                desc: "In the world of child development and therapy, there is a fundamental concept that often takes center stage: sensory regulation. This crucial aspect of a child's development forms the foundation upon which a wide range of skills are built. At The Spe",
              },
              {
                img: "/galleryimage.jpg",
                tag: "Customer Feedback",
                date: "Feb 18, 2024",
                title:
                  "Sensory Processing and Emotional Regulation",
                desc: "Sensory processing and emotional regulation are two integral aspects of human experience that often go hand in hand, influencing our daily lives in profound ways. As a speech and language therapist at The Speech Clinic Dubai, I encounter individuals",
              },
              {
                img: "/galleryimage2.jpeg",
                tag: "Customer Feedback",
                date: "Feb 18, 2024",
                title:
                  "Exploring the Vital Link Between Feeding and Speech",
                desc: "Speech and feeding are two essential aspects of human development that often go hand in hand, especially in the early stages of life. While they may seem distinct, there is a deep and intricate connection between the two. In this article, we will del",
              },
            ].map((blog, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-sm bg-white"
              >
                <Image
                     width={800}
                     height={500}
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="text-xs text-gray-900 flex items-center gap-2 mb-2">
                    <span className="bg-gray-100 px-2 py-0.5 rounded-full text-blue-600 font-medium">
                      {blog.tag}
                    </span>
                    <span>—</span>
                    <span>{blog.date}</span>
                  </div>
                  <div className="font-normal text-black leading-snug text-base mb-1">
                    {blog.title}
                  </div>
                  <p className="text-sm text-gray-600">{blog.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
