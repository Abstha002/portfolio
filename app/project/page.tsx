import BacktoHome from "@/components/BacktoHome";


export default function Project() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-green-300 via-blue-100 to-blue-300 flex items-center justify-center">
      <section className="bg-white/80 rounded-xl shadow-xl p-10 w-full max-w-3xl">
      <div className="grid grid-cols-2 gap-1 text-black">
        <BacktoHome />
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Projects</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Portfolio Project Card */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">My Portfolio</h2>
            <p className="text-gray-600 mb-4">
              This is my personal portfolio website built with Next.js and Tailwind CSS. It showcases my work, skills, and contact information.
            </p>
            <a
              href="/"
              className="mt-auto inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Portfolio
            </a>
          </div>
          {/* Example Other Project Card */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">My Projects</h2>
            <p className="text-gray-600 mb-4">
              A collection of my projects including web applications, tools, and experiments. Each project demonstrates my skills in web development and problem-solving.
            </p>
            <a
              href="https://github.com/Abstha002?tab=repositories"
              className="mt-auto inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>
    </main>
  );
}