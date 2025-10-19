import WordCounterProvider from "./context/WordCounterProvider";

export default function App() {

  return (
    <>
      <WordCounterProvider>
        <h1>test</h1>
      </WordCounterProvider>
    </>
  );
}
