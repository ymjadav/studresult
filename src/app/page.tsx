import Navbar from "./components/navbar/navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto h-dvh lg:py-0">
        <h1 className="text-black text-4xl text-center">Coming soon...</h1>
      </div>
    </>
  );
}
