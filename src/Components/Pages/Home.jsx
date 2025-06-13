import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <h1 className="text-copy-primary flex gap-8">
      <a href="https://github.com/nwfrank" target="_blank" rel="noreferrer">
        <FaGithub size="2em" className="text-color-primary" />
      </a>
      <a
        href="https://www.linkedin.com/in/nathan-frank-2ba4b41b8/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size="2em" className="text-color-primary" />
      </a>
    </h1>
  );
}
