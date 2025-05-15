'use client';
import Link from 'next/link';
import Image from "next/image";


export default function Srvicesider({
//     showRelatedServices = false,
//     relatedServicesData = [],
// }: {
//     showRelatedServices?: boolean;
//     relatedServicesData?: RelatedService[];
}
) {
    return (

        <aside className="space-y-8 order-2 lg:order-1">
            {/* Services List */}


            <div className="w-full">
                <h2 className="text-xl font-normal mb-8 text-white text-center  bg-gradient-to-tl from-[#DA159B] to-[#54169C] py-4 rounded-lg">
                    Our Service
                </h2>

                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                    <Link
                        href="/services/vocabulary-support"
                        className="flex items-center justify-between p-4  hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                    >
                        <span className="text-lg font-normal">Speech and Language Therapy</span>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                            <svg className="w-4 h-4 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                    <Link
                        href="/services/language-therapy"
                        className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                    >
                        <span className="text-lg font-normal">Occupational Therapy</span>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                            <svg className="w-4 h-4 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                    <Link
                        href="/services/hearing-screenings"
                        className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                    >
                        <span className="text-lg font-normal">Physical Therapy</span>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                            <svg className="w-4 h-4 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                    <Link
                        href="/services/Expressive Language"
                        className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                    >
                        <span className="text-lg font-normal">ABA Therapy</span>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                            <svg className="w-4 h-4 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>

                    <Link
                        href="/services/therapeutic-listening"
                        className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                    >
                        <span className="text-lg font-normal">School Readiness Program</span>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                            <svg className="w-4 h-4 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                    <Link
                        href="/services/evaluations-speech"
                        className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                    >
                        <span className="text-lg font-normal">Neuro Integrative Therapy</span>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                            <svg className="w-4 h-4 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                    <Link
                        href="/services/occupational-therapy"
                        className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                    >
                        <span className="text-lg font-normal">Feeding Therapy</span>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                            <svg className="w-4 h-4 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>
                    <Link
                        href="/services/pediatric-hand-therapy"
                        className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group text-gray-800 border-b border-gray-100 hover:text-pink-500"
                    >
                        <span className="text-lg font-normal">Group Therapy</span>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center border border-current group-hover:bg-[#54169C] group-hover:border-[#54169C]">
                            <svg className="w-4 h-4 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </Link>

                </div>
            </div>

            {/* {showRelatedServices && (
                <div className="w-full">
                    <h2 className="text-xl font-normal mb-8 text-white text-center bg-gradient-to-tl from-[#DA159B] to-[#54169C] py-4 rounded-lg">
                        Related Services
                    </h2>

                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-6">
                        <div className="grid grid-cols-2 gap-4">
                            {relatedServicesData.map((service, index) => (
                                <Link href={service.link} key={index}>
                                    <div className="flex flex-col items-center p-4 hover:bg-gray-50 rounded-xl transition-all duration-300 group cursor-pointer">
                                        <div className="bg-gray-100 p-4 rounded-lg group-hover:bg-[#54169C]/10 transition-colors duration-300">
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={48}
                                                height={48}
                                                className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <span className="text-sm text-center mt-2 text-gray-700 group-hover:text-[#54169C]">
                                            {service.title}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )} */}
            {/* Contact Box */}
            <div className="space-y-4">
                <Link href="/report"
                    className="flex items-center bg-[#54169C]  text-white p-4 rounded-lg  hover:bg-purple-600 transition-colors"
                >
                    <div className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <span className="font-normal">Company Report 2019</span>
                </Link>

                <Link href="/brochure"
                    className="flex items-center bg-[#DA159B]    text-white p-4 rounded-lg hover:bg-pink-900 transition-colors"
                >
                    <div className="mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <span className="font-normal">Company Brochure</span>
                </Link>


                <div className="relative bg-[#54169C] rounded-2xl shadow-lg mt-8 overflow-hidden">
                    <div className="h-48 relative">
                        <Image
                            src="/blogimage2.jpg"
                            alt="Contact Services"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-24  rounded-t-[50px]">
                            <div className="absolute -bottom-1 left-0 right-0 h-8 bg-[#54169C] rounded-t-[80px]"></div>
                        </div>
                    </div>
                    <div className="pb-6 text-center">
                        <h3 className="text-xl font-normal text-white mb-4">Contact For Services</h3>
                        <Link
                            href="/contact"
                            className="inline-block bg-[#DA159B] text-white px-8 py-2 rounded-full font-normal hover:bg-[#ec4899] transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>
        </aside>

    );
}
