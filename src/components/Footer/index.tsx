import { S_Footer } from "./styles";

export default function Footer() {
  return (
    <S_Footer>
      <span>
        Made with <em>❤</em> by{" "}
        <a
          href="https://github.com/renans2"
          target="_blank"
          rel="noopener noreferrer"
        >
          renanS2
        </a>{" "}
        • Inspired by{" "}
        <a
          href="https://wordcounter.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          wordcounter.net
        </a>
      </span>
    </S_Footer>
  );
}
