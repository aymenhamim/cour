import { useEffect, useState } from "react";

function Quran() {
  const [quran, setQuran] = useState({});
  const [lang, setLang] = useState({ lang1: "", lang2: "" });
  const [isLoading, setIsLoading] = useState(false);
  const quranParsed = Object.values(quran);
  const [da, setDa] = useState([]);

  function handleClick() {
    console.log("gds");
  }
  useEffect(function () {
    async function getLangs() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.json`
        );

        const data = await (await res).json();
        // console.log(data);
        setQuran(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    getLangs();
  }, []);

  useEffect(
    function () {
      async function getSurrah() {
        try {
          const res = await fetch(quranParsed[+lang.lang1].link);
          const data = await res.json();

          setDa({ ...data });
          // console.log(data);
        } catch (err) {
          console.log(err);
        }
      }
      getSurrah();
    },
    [lang]
  );

  const langs = [];
  const links = [];
  console.log(da);
  quranParsed.map((d) => {
    langs.push(`${d.language} - ${d.author}`);
  });
  // console.log(links);

  return (
    <div>
      <h2 onClick={handleClick}>Hello from quran component</h2>
      <br />
      <br />

      {isLoading ? (
        "Loading..."
      ) : (
        <header>
          <select
            name="langs1"
            id="langs1"
            value={lang.lang1}
            onChange={(e) => setLang({ ...lang, lang1: e.target.value })}
          >
            {langs.map((l, i) => (
              <option value={i} key={i}>
                {l}
              </option>
            ))}
          </select>

          <select
            name="langs2"
            id="langs2"
            value={lang.lang2}
            onChange={(e) => setLang({ ...lang, lang2: e.target.value })}
          >
            {langs.map((l, i) => (
              <option value={l} key={i}>
                {l}
              </option>
            ))}
          </select>
          <button onClick={handleClick}>Submit</button>
        </header>
      )}
      {da && da?.quran?.map((d) => d.text)}
    </div>
  );
}

export default Quran;
