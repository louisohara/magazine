export default function Footer() {
  return (
    <footer className="relative z-10 bg-black text-white p-8 flex justify-between items-start">
      <div>
        <a
          href="https://www.instagram.com/arccamagazine/"
          className="hover:text-orange-500 cursor-pointer block"
        >
          INSTAGRAM
        </a>
        <a
          href="mailto:arccamagazine@gmail.com"
          type="email"
          className="hover:text-orange-500 cursor-pointer block"
        >
          arccamagazine@gmail.com
        </a>
      </div>
      <p className="font-semi-bold"> © ARCCA 2024 </p>
    </footer>
  );
}
