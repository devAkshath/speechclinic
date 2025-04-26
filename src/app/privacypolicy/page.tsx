import NavBarSecond from "../components/NavBar/NavBarSecond";


export default function privacy() {
  return (
    <div className="relative min-h-screen bg-white flex flex-col w-full ">
      <header className="absolute top-0 w-full z-50">
        <NavBarSecond />
      </header>

      <div className="min-h-screen flex items-center justify-center bg-white py-32 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl w-full bg-pink-100 rounded-2xl shadow-md p-8 sm:p-12 text-gray-800 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4"><strong>Last updated:</strong> December 21, 2022</p>
        
        <p className="mb-4">
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information
          when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>

        <p className="mb-4">
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and
          use of information in accordance with this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Interpretation and Definitions</h2>
        <h3 className="text-xl font-medium mb-2">Interpretation</h3>
        <p className="mb-4">
          The words of which the initial letter is capitalized have meanings defined under the following conditions.
          The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>

        <h3 className="text-xl font-medium mb-2">Definitions</h3>
        <p className="mb-2">For the purposes of this Privacy Policy:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Account</strong>: A unique account created for You to access our Service or parts of our Service.</li>
          <li><strong>Company</strong>: Refers to The Speech Clinic FZ LLC, Dubai healthcare city. Building 47. Unit 301 & 302.</li>
          <li><strong>Cookies</strong>: Small files placed on Your device containing browsing history.</li>
          <li><strong>Country</strong>: Refers to United Arab Emirates.</li>
          <li><strong>Device</strong>: Any device that can access the Service such as a computer, cellphone, or tablet.</li>
          <li><strong>Personal Data</strong>: Information that relates to an identified or identifiable individual.</li>
          <li><strong>Service</strong>: Refers to the Website.</li>
          <li><strong>Service Provider</strong>: Third-party company that processes data on behalf of the Company.</li>
          <li><strong>Usage Data</strong>: Data collected automatically through usage of the Service.</li>
          <li><strong>Website</strong>: The Speech Clinic, accessible from <a href="https://thespeechclinic.ae" className="text-blue-600 hover:underline">https://thespeechclinic.ae</a></li>
          <li><strong>You</strong>: The user of the Service.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Collecting and Using Your Personal Data</h2>
        <h3 className="text-xl font-medium mb-2">Types of Data Collected</h3>
        <p className="font-semibold">Personal Data</p>
        <p className="mb-4">
          We may ask You to provide us with certain personally identifiable information, including but not limited to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Usage Data</li>
        </ul>

        <p className="font-semibold">Usage Data</p>
        <p className="mb-4">
          Usage Data is collected automatically and may include your IP address, browser type/version, pages visited, time spent,
          mobile device info, and other diagnostic data.
        </p>

        <h3 className="text-xl font-medium mb-2">Tracking Technologies and Cookies</h3>
        <p className="mb-4">
          We use Cookies and similar tracking technologies (e.g., beacons, tags, and scripts) to track and improve our Service.
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Necessary Cookies:</strong> Essential for service functionality.</li>
          <li><strong>Acceptance Cookies:</strong> Tracks your cookie consent.</li>
          <li><strong>Functionality Cookies:</strong> Stores preferences like login or language.</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">Use of Your Personal Data</h3>
        <p className="mb-4">We use your data for purposes like:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Providing and maintaining the Service</li>
          <li>Managing your Account</li>
          <li>Contacting you for updates or offers</li>
          <li>Analyzing usage to improve the Service</li>
          <li>Complying with legal obligations</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">Disclosure & Retention</h3>
        <p className="mb-4">
          We may share your data with affiliates, service providers, during business transfers, or as required by law. We retain your data
          as long as necessary for the purposes outlined, or as legally required.
        </p>

        <h3 className="text-xl font-medium mb-2">Security</h3>
        <p className="mb-4">
          We strive to use commercially acceptable means to protect Your Personal Data, though no method is 100% secure.
        </p>

        <h3 className="text-xl font-medium mb-2">Children&apos;s Privacy</h3>
        <p className="mb-4">
          Our Service does not knowingly collect data from children under 13. If you believe your child has provided us with Personal Data,
          please contact us.
        </p>

        <h3 className="text-xl font-medium mb-2">Links to Other Sites</h3>
        <p className="mb-4">
          Our Service may contain links to external sites not operated by us. We advise reviewing their policies individually.
        </p>

        <h3 className="text-xl font-medium mb-2">Changes</h3>
        <p className="mb-4">
          We may update this Privacy Policy periodically and notify you via email or in-Service notice.
        </p>

        <h3 className="text-xl font-medium mb-2">Contact Us</h3>
        <p className="mb-4">If you have any questions, contact us at: <a href="mailto:support@thespeechclinic.ae" className="text-blue-600 hover:underline">support@thespeechclinic.ae</a></p>
        </div>
      </div>


      


    </div>
  );
}
