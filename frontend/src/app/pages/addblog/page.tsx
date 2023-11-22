import Navbar from "@/components/navbar";

export default function AddBlog() {
  return (
    <main>
      <Navbar />
      <form action="/">
        <input type="text" name="title" id="title" placeholder="Title" />
        <textarea
          name="story"
          id="userStory"
          placeholder="Tell your story..."
        ></textarea>
        <input type="file" name="file" id="file" />
      </form>
    </main>
  );
}
