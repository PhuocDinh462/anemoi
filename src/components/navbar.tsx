export default function Navbar() {
  return (
    <div
      className="pt-2 pb-5 bg-gradient-to-b from-custom-blue-100 to-transparent 
      flex items-center justify-center select-none text-center text-white font-semibold
      font-seasons tracking-widest text-[1em]"
    >
      |
      <a href="#" className="font-thin px-[30px]">
        top
      </a>
      |
      <a href="#" className="font-thin px-[30px]">
        introduction
      </a>
      |
      <a href="#" className="font-thin px-[30px]">
        story
      </a>
      |
      <a href="#" className="font-thin px-[30px]">
        character
      </a>
      |
      <a href="#" className="font-thin px-[30px]">
        movie
      </a>
      |
    </div>
  );
}
