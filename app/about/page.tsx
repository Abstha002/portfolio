import BacktoHome from "@/components/BacktoHome";

export default function About() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-green-300 via-blue-100 to-blue-300 flex items-center justify-center">
      <section className="bg-white/80 rounded-xl shadow-xl p-10 w-full max-w-3xl">
    <div>
      <div className="grid grid-cols-2 gap-1">
        <BacktoHome/>
      <h1 className="text-3xl font-bold text-gray-800">About</h1>
      </div>

      <p className="text-black">I’m Abhay Raj Shrestha, a BSc.CSIT student at Himalaya College of Engineering, driven by a deep passion for building digital solutions. I specialize in front-end development using React and Next.js, and I’m also proficient in Python, with working knowledge of several languages including Java, C++, and C#.

While I haven’t had formal work experience yet, I’ve independently completed a variety of projects for college that have challenged me to grow as both a coder and a thinker.

My long-term vision is to contribute to meaningful tech innovations — especially in the space of AI and emerging technologies.

Let’s connect if you’re into web/app development, future tech, or collaborative learning!</p>
    </div>
        </section>
    </main>
  );
}