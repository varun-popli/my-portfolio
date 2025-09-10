import Hypertext from "../hypertext";

const Footer = () => {
  return (
    <footer className="mx-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        {"Crafted with ❤️ using "}
        <Hypertext href="https://nextjs.org/">
          Next.js
        </Hypertext>
        {" & "}
        <Hypertext href="https://tailwindcss.com/">
          Tailwind CSS
        </Hypertext>
      </p>
    </footer>
  )
};

export default Footer;