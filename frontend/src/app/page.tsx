import BlogsSlider from "@/components/blogs/blogSlider";
import CateSlider from "@/components/categories/cateSlider";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Slider from "@/components/slider";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Slider />
      <CateSlider />
      <BlogsSlider />
      <Footer />
    </main>
  );
}
