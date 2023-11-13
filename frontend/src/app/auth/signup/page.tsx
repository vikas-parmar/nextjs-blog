import Image from "next/image";
import Link from "next/link";
import img1 from "@/assets/slides/img1.jpg";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function SignUp() {
  return (
    <main>
      <Navbar />
      <div className="h-auto flex">
        <div className="w-1/2 hidden md:block">
          <Image
            src={img1}
            priority={true}
            alt="Placeholder Image"
            className="w-full h-full object-cover p-4"
          />
        </div>

        <div className="p-8 md:w-1/2 w-full flex flex-col">
          <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="_name" className="block ">
                Name
              </label>
              <input
                type="text"
                id="_name"
                name="name"
                className="w-full border border-crystalBlue rounded-md py-2 px-3 focus:outline-none focus:border-green"
                autoComplete="off"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="Email" className="block ">
                Email
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                className="w-full border border-crystalBlue rounded-md py-2 px-3 focus:outline-none focus:border-green"
                autoComplete="off"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="_password">Password</label>
              <input
                type="password"
                id="_password"
                name="password"
                className="w-full border border-crystalBlue rounded-md py-2 px-3 focus:outline-none focus:border-green"
                autoComplete="off"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block ">
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-crystalBlue rounded-md py-2 px-3 focus:outline-none focus:border-green"
                autoComplete="off"
              />
            </div>

            <div className="mb-6">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="filled-button w-full">
              Get In
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link href="/auth/signin" className="text-button hover:underline">
              Sign in Here
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
