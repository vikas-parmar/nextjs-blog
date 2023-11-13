import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Privacy(){
    return (
        <main>
        <Navbar />
        <div className="relative flex-center px-10 py-8">
          <div className="w-full sm:w-3/4 md:w-2/3">
            <h1 className="title w-full lg:w-2/3 py-4 md:py-16">
              BlogVoyage Privacy Policy.
            </h1>
  
            <dl className=" w-auto">
              <dt className="font-semibold text-xl mt-2">Introduction</dt>
              <dd className="mb-4">
                This Privacy Policy explains how BlogVoyage collects,
                uses, and protects the personal information you provide when using
                our website. By accessing or using BlogVoyage, you
                consent to the terms outlined in this Privacy Policy.
              </dd>
              <dt className="font-semibold text-xl mt-2">
                Information We Collect
              </dt>
              <dd className="mb-4">
                <li>
                  <b>Personal Information:</b> We may collect personal information
                  such as your name, email address, and other contact details when
                  you register or interact with BlogVoyage.
                </li>
                <li>
                  <b>Log Data:</b>We automatically collect information that your
                  browser sends whenever you visit BlogVoyage. This
                  may include your IP address, browser type, pages visited, and
                  other statistics.
                </li>
                <li>
                  <b>Cookies:</b>We use cookies to enhance your experience on
                  BlogVoyage. You can choose to disable cookies
                  through your browser settings, but this may affect certain
                  features of the website.
                </li>
              </dd>
              <dt className="font-semibold text-xl mt-2">
                {" "}
                How We Use Your Information
              </dt>
              <dd className="mb-4">
                <li>
                  We use the information collected to personalize your experience,
                  improve our services, and respond to your inquiries.
                </li>
                <li>
                  Your email address may be used to send you updates, newsletters,
                  and promotional materials. You can opt-out of these
                  communications at any time.
                </li>
              </dd>
              <dt className="font-semibold text-xl mt-2"> Information Sharing</dt>
              <dd className="mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent. However, we may
                share information with trusted third parties who assist us in
                operating our website, conducting our business, or servicing you.
              </dd>
              <dt className="font-semibold text-xl mt-2">Data Security</dt>
              <dd className="mb-4">
                We implement security measures to protect your personal
                information. However, no method of transmission over the internet
                or electronic storage is entirely secure, and we cannot guarantee
                absolute security.
              </dd>
              <dt className="font-semibold text-xl mt-2">Third-Party Links</dt>
              <dd className="mb-4">
                BlogVoyage may contain links to third-party websites.
                We are not responsible for the privacy practices or content of
                these websites. We encourage you to review the privacy policies of
                any third-party sites you visit.
              </dd>
              <dt className="font-semibold text-xl mt-2">
                Changes to Privacy Policy
              </dt>
              <dd className="mb-4">
                BlogVoyage reserves the right to update, modify, or
                change this Privacy Policy at any time. We will notify you of any
                changes by posting the new Privacy Policy on this page.
              </dd>
            </dl>
  
            <p>
              By using BlogVoyage, you agree to these terms and conditions. If you
              have any questions or concerns, please contact us at
              xyz@blogvoyage.com
            </p>
  
            <address className="font-semibold text-lg py-8">
              BlogVoyage <br />
              12 Nov, 2023
            </address>
          </div>
        </div>
        <Footer />
      </main>
    )
}