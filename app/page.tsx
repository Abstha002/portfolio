import Image from "next/image";
import Link from "next/link";

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
              <Link href='/'>
                <button className="px-4 py-2 rounded-lg border border-blue-500 text-blue-600 font-semibold hover:bg-blue-500 hover:text-white transition">Home</button>
              </Link>
              <Link href='/about'>
                <button className="px-4 py-2 rounded-lg border border-gray-400 text-gray-700 font-semibold hover:bg-gray-200 transition">About</button>
              </Link>
              <Link href='/project'>
                <button className="px-4 py-2 rounded-lg border border-gray-400 text-gray-700 font-semibold hover:bg-gray-200 transition">Projects</button>
              </Link>
              <Link href='/contact'>
                <button className="px-4 py-2 rounded-lg border border-gray-400 text-gray-700 font-semibold hover:bg-gray-200 transition">Contact</button>
              </Link>
            </nav>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.linkedin.com/in/abhayshrestha/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-700 transition"
              >
                {/* LinkedIn SVG */}
                <svg width="28" height="28" fill="black" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.02-2.44-1.5-2.44-1.5 0-1.73 1.17-1.73 2.36v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/abhay_shresthaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-blue-500 transition"
              >
                {/* Twitter (X) SVG */}
                <svg width="28" height="28" fill="black" viewBox="0 0 24 24">
                  <path d="M17.53 3H21.5l-7.19 8.19L23 21h-6.18l-4.85-5.98L6.09 21H2.02l7.61-8.67L1 3h6.32l4.36 5.37L17.53 3zm-2.13 15.5h2.13l-6.07-7.48-2.13-2.63H6.32l6.07 7.48 2.13 2.63z"/>
                </svg>
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D03AQGNlz6jre0lng/profile-displayphoto-shrink_200_200/B4DZbkFy82HQAg-/0/1747583447887?e=2147483647&v=beta&t=ujnBZhydJw5cAP6kguS2KvOK_jfPlArhhLIG8wf_cPY"
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