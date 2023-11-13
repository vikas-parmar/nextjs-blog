import Image from "next/image";
import Link from "next/link";
import img1 from "@/assets/slides/img2.jpg";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function SignIn() {
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
          <h1 className="text-2xl font-semibold mb-4">Log In</h1>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="Email" className="block text-gray-600">
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
              <label htmlFor="password">Password</label>
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
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link href="/auth/signup" className="text-button hover:underline">
              Sign up Here
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
