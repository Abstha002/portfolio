import BacktoHome from "@/components/BacktoHome";

export default function Contact() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-green-300 via-blue-100 to-blue-300 flex items-center justify-center">
      <section className="bg-white/80 rounded-xl shadow-xl p-10 w-full max-w-3xl">
            <div className="grid grid-cols-2 items-center gap-1">
              <BacktoHome/>
        <h1 className="text-2xl font-bold mb-4 text-black">Contact</h1>
            </div>
        <form 
          action="https://formsubmit.co/15bb1f49e820a11fac7a407e7d723db7" 
          method="POST"
          className="flex flex-col gap-4 text-black border-black p-6 rounded-lg bg-white shadow-md"
        >
          <input type="text" name="name" placeholder="Your Name" required className="p-2 rounded border" />
          <input type="email" name="email" placeholder="Your Email" required className="p-2 rounded border" />
          <textarea name="message" placeholder="Your Message" required className="p-2 rounded border" rows={4}></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Send</button>
        </form>
      </section>
    </main>
  );
}