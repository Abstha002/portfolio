import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="min-h-screen w-full">
    <section className="bg-green-400 p-8 h-full">
    <h1>About Me</h1>
    <div className="grid grid-cols-3 gap-4">
      <div className="grid gird-rows-2 gap-3">
        <h1>Abhay Raj Shrestha</h1>
        <h2>Web Developer</h2>
      </div>
      <div>
        <h1>This is image paart</h1>
        <img src="#"/>
      </div>
    </div>
    </section>
    </main>
    </>
  );
}
