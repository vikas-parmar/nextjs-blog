import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <Navbar />
      <div className="px-10 py-24">
        <h1 className="title w-full md:w-2/3 lg:w-1/2 py-4 md:py-16">
          Everyone has a story to tell.
        </h1>
        <p className="w-full sm:w-2/3 text-sm md:text-xl">
          BlogVoyage is a home for human stories and ideas. Here, anyone can
          share insightful perspectives, useful knowledge, and life wisdom with
          the world—without building a mailing list or a following first. The
          internet is noisy and chaotic; BlogVoyage is quiet yet full of
          insight.
          {"It’s"} simple, beautiful, collaborative, and helps you find the
          right audience for whatever you have to say.
          <br />
          We believe that what you read and write matters. Words can divide or
          empower us, inspire or discourage us. In a world where the most
          sensational and surface-level stories often win, {"we’re"} building a
          system that rewards depth, nuance, and time well spent. A space for
          thoughtful conversation more than drive-by takes, and substance over
          packaging.
        </p>

        <blockquote className="w-full sm:w-2/3 text-sm md:text-lg my-6 bg-silver">
          Ultimately, our goal is to deepen our collective understanding of the
          world through the power of writing.
        </blockquote>

        <p className="w-full sm:w-2/3 text-sm md:text-xl">
          Dive deeper into whatever matters to you. Find a post that helps you
          learn something new, or reconsider something familiar—and then share
          your own story.
        </p>
      </div>
      <div className="flex flex-wrap sm:nowrap justify-around">
        <Link href="/" className="title text-button p-2 sm:p-4 md:p-8">
          Start Reading
        </Link>
        <Link href="/pages/addblog" className="title text-button p-2 sm:p-4 md:p-8">
          Start Writing
        </Link>
      </div>
      <Footer />
    </main>
  );
}
