import { Surahs } from "./assets/Surahs";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/quran-actions";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

function App() {
  const quran = useSelector((state) => state.quran);
  const dispatch = useDispatch();
  const [surahId, setSurahId] = useState(Surahs[0].id);
  const [selected, setSelected] = useState(Surahs[1]);

  useEffect(() => {
    dispatch(fetchData(surahId));
  }, [surahId]);

  const handleChange = (e) => {
    setSurahId(e.target.value);
    setSelected(e.target.value);
  };

  if (quran.loading) return <h1>Loading....</h1>;
  if (quran.error)
    return <h1>Something went wrong... we are workung on it.</h1>;
  return (
    <>
      <nav>
        <div className="sh">
          <div className="surah-heading">
            <h2>{quran?.surah?.surah_name}</h2>
            <h2>{quran?.surah?.surah_name_ar}</h2>
          </div>
          <div className="surah-heading">
            <p>{quran?.surah?.type}</p>
            <p>Verses: {quran?.surah?.total_verses}</p>
          </div>
        </div>
      </nav>
      <div className="App">
        <div className="quran">
          <select
            value={selected}
            onChange={(e) => handleChange(e)}
            className="surah-list"
          >
            {Surahs.map((surah) => (
              <option key={surah.id} value={surah.id}>
                {surah.id}
                {"  "}
                {surah.surah}
              </option>
            ))}
          </select>
          <div className="body">
            <p>{quran?.surah?.description}</p>
            {selected === Surahs[8] ? (
              <p></p>
            ) : (
              <p>
                بسم الله الرحمن الرحيم <br />
                In the name of God, the Merciful, the Compassionate
              </p>
            )}
            {quran &&
              Object?.values(quran?.surah?.verses || {}).map(
                ({ content, translation_eng, i }) => (
                  <div key={i} className="quran-text">
                    <p>{content}</p>
                    <p>{translation_eng}</p>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
