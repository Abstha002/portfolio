import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-green-300 via-blue-100 to-blue-300 flex items-center justify-center">
      <section className="bg-white/80 rounded-xl shadow-xl p-10 w-full max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Profile & Navigation */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-800">Abhay Raj Shrestha</h1>
            <h2 className="text-xl text-gray-600 mb-4">Web Developer</h2>
            <nav className="flex gap-3">
              <button className="px-4 py-2 rounded-lg border border-blue-500 text-blue-600 font-semibold hover:bg-blue-500 hover:text-white transition">Home</button>
              <button className="px-4 py-2 rounded-lg border border-gray-400 text-gray-700 font-semibold hover:bg-gray-200 transition">About</button>
              <button className="px-4 py-2 rounded-lg border border-gray-400 text-gray-700 font-semibold hover:bg-gray-200 transition">Projects</button>
              <button className="px-4 py-2 rounded-lg border border-gray-400 text-gray-700 font-semibold hover:bg-gray-200 transition">Contact</button>
            </nav>
          </div>
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full border-4 border-blue-400 shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}