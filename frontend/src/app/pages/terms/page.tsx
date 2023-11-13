import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Terms() {
  return (
    <main>
      <Navbar />
      <div className="relative flex-center px-10 py-8">
        <div className="w-full sm:w-3/4 md:w-2/3">
          <h1 className="title w-full lg:w-2/3 py-4 md:py-16">
            BlogVoyage Terms and Conditions
          </h1>

          <dl className=" w-auto">
            <dt className="font-semibold text-xl mt-2">Acceptance of Terms</dt>
            <dd className="mb-4">
              By accessing or using BlogVoyage, you agree to comply with and be
              bound by these terms and conditions. If you do not agree to these
              terms, please do not use the website.
            </dd>
            <dt className="font-semibold text-xl mt-2">Content Ownership</dt>
            <dd className="mb-4">
              All content published on BlogVoyage is the property of the
              respective authors. Unauthorized use, reproduction, or
              distribution of any content without the {"author's"} explicit
              consent is strictly prohibited.
            </dd>
            <dt className="font-semibold text-xl mt-2"> User Conduct</dt>
            <dd className="mb-4">
              <li>
                Users are responsible for their own content posted on [Your
                Blogging Website].
              </li>
              <li>
                Do not engage in any illegal or harmful activities on the
                website.
              </li>
              <li>
                Respect the opinions and rights of other users. Harassment, hate
                speech, or any form of abuse will not be tolerated.
              </li>
            </dd>
            <dt className="font-semibold text-xl mt-2">Copyright Policy</dt>
            <dd className="mb-4">
              If you believe that your work has been used on [Your Blogging
              Website] in a way that constitutes copyright infringement, please
              contact us with the necessary information.
            </dd>
            <dt className="font-semibold text-xl mt-2">Privacy Policy</dt>
            <dd className="mb-4">
              Please refer to our Privacy Policy [link to your privacy policy]
              for information on how we collect, use, and protect your personal
              data.
            </dd>
            <dt className="font-semibold text-xl mt-2">Third-Party Links</dt>
            <dd className="mb-4">
              BlogVoyage may contain links to third-party websites. We are not
              responsible for the content or practices of these websites. Use
              them at your own risk.
            </dd>
            <dt className="font-semibold text-xl mt-2">
              Disclaimer of Warranties
            </dt>
            <dd className="mb-4">
              BlogVoyage is provided {'"as is"'} without any warranties,
              expressed or implied. We do not guarantee the accuracy,
              completeness, or reliability of the content.
            </dd>
            <dt className="font-semibold text-xl mt-2">
              Limitation of Liability
            </dt>
            <dd className="mb-4">
              BlogVoyage and its affiliates are not liable for any direct,
              indirect, incidental, special, or consequential damages arising
              out of or in any way connected with the use of the website.
            </dd>
            <dt className="font-semibold text-xl mt-2">
              Changes to Terms and Conditions
            </dt>
            <dd className="mb-4">
              BlogVoyage reserves the right to update, modify, or change these
              terms and conditions at any time without prior notice. Continued
              use of the website after such changes constitutes acceptance of
              the new terms.
            </dd>
            <dt className="font-semibold text-xl mt-2">Governing Law</dt>
            <dd className="mb-4">
              These terms and conditions are governed by and construed in
              accordance with the laws of [Your Jurisdiction]. Any disputes
              arising under or in connection with these terms shall be subject
              to the exclusive jurisdiction of the courts in [Your
              Jurisdiction].
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
  );
}
