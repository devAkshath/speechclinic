
import Head from 'next/head';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blogs on Product Management & User Feedback</title>
      </Head>
      <div className="bg-white min-h-screen pb-20">
        <section className="text-center py-24 px-4">
          <h4 className="text-red-600 font-semibold tracking-wide mb-2">BLOGS</h4>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Blogs on <span className="text-black">product</span><br />
            management & user feedback
          </h1>
        </section>

        <section className="px-4 max-w-6xl mx-auto">
          <h3 className="uppercase text-sm font-semibold text-gray-500 mb-6">Read by category</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Customer feedback', color: 'bg-purple-200' },
              { title: 'Product Management', color: 'bg-pink-200' },
              { title: 'Roadmapping', color: 'bg-orange-300' },
            ].map((item, index) => (
              <div key={index} className={`rounded-xl overflow-hidden shadow-md ${item.color}`}>
                <div className="h-40 flex items-center justify-center">
                  <span className="bg-white text-sm font-semibold px-3 py-1 rounded-full shadow">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 px-4 max-w-6xl mx-auto">
  <h3 className="uppercase text-sm font-semibold text-gray-500 mb-6">Featured Blogs</h3>
  <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
    {[
      {
        img: '/galleryimage2.jpeg',
        tag: 'Customer Feedback',
        date: 'Feb 22, 2024',
        title: 'Top 7 Reasons Why Customer Feedback Is Important To Your Business',
        desc: 'Explore the top reasons why customer feedback is important to your business and how it can...',
      },
      {
        img: '/galleryimage3.jpg',
        tag: 'Product Management',
        date: 'Feb 20, 2024',
        title: 'Top 15 Product Feature Prioritization Frameworks',
        desc: 'Explore 15 popular feature prioritization frameworks like Weighted Scoring, RICE, Kano...',
      },
      {
        img: '/galleryimage.jpg',
        tag: 'Customer Feedback',
        date: 'Feb 18, 2024',
        title: 'Overcoming Customer Feedback Resistance: Common Causes & Expert Solutions',
        desc: 'Overcome customer feedback resistance and drive business growth with expert insights and...',
      },
      {
        img: '/galleryimage3.jpg',
        tag: 'Customer Feedback',
        date: 'Feb 18, 2024',
        title: 'Overcoming Customer Feedback Resistance: Common Causes & Expert Solutions',
        desc: 'Overcome customer feedback resistance and drive business growth with expert insights and...',
      }, {
        img: '/galleryimage.jpg',
        tag: 'Customer Feedback',
        date: 'Feb 18, 2024',
        title: 'Overcoming Customer Feedback Resistance: Common Causes & Expert Solutions',
        desc: 'Overcome customer feedback resistance and drive business growth with expert insights and...',
      }, {
        img: '/galleryimage2.jpeg',
        tag: 'Customer Feedback',
        date: 'Feb 18, 2024',
        title: 'Overcoming Customer Feedback Resistance: Common Causes & Expert Solutions',
        desc: 'Overcome customer feedback resistance and drive business growth with expert insights and...',
      },
    ].map((blog, index) => (
      <div key={index} className="rounded-xl overflow-hidden shadow-sm bg-white">
        <img src={blog.img} alt={blog.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <div className="text-xs text-gray-500 flex items-center gap-2 mb-2">
            <span className="bg-gray-100 px-2 py-0.5 rounded-full text-blue-600 font-medium">{blog.tag}</span>
            <span>—</span>
            <span>{blog.date}</span>
          </div>
          <div className="font-semibold text-gray-900 leading-snug text-base mb-1">{blog.title}</div>
          <p className="text-sm text-gray-500">{blog.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      </div>
    </>
  );
}
