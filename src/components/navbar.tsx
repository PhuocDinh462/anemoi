export default function Navbar() {
  return (
    <div className="pt-1 pb-5 bg-gradient-to-b from-regal-blue to-transparent flex items-center justify-center">
      {/* <div className="flex items-center">
        <img src="./src/assets/anemoi_logo.png" alt="anemoi_logo.png" className="h-8" />
      </div> */}
      <div className="text-white text-lg font-thin">|</div>
      <a href="#" className="text-white font-light mx-4 px-4">
        top
      </a>
      <div className="text-white text-lg font-thin">|</div>
      <a href="#" className="text-white font-light text-lg mx-4 px-4">
        introduction
      </a>
      <div className="text-white text-lg font-thin">|</div>
      <a href="#" className="text-white font-light text-lg mx-4 px-4">
        story
      </a>
      <div className="text-white text-lg font-thin">|</div>
      <a href="#" className="text-white font-light text-lg mx-4 px-4">
        character
      </a>
      <div className="text-white text-lg font-thin">|</div>
      <a href="#" className="text-white font-light text-lg mx-4 px-4">
        movie
      </a>
      <div className="text-white text-lg font-thin">|</div>
    </div>
  );
}
