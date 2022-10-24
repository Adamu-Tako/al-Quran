import { quranActions } from "./quran-slice";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": <Rapid API key>,
    "X-RapidAPI-Host": "al-quran1.p.rapidapi.com",
  },
};
export const fetchData = (searchTerm) => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      dispatch(quranActions.showSurahLoading());

      const res = await fetch(
        `https://al-quran1.p.rapidapi.com/${searchTerm}`,
        options
      );
      const data = await res.json();
      return data;
    };
    try {
      const surahData = await fetchHandler();
      {
        dispatch(quranActions.showSurahSuccess(surahData));
      }
    } catch (error) {
      console.log(error);
      dispatch(quranActions.showSurahError());
    }
  };
};
