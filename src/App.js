import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import {getNewAlbums, getSongs,getTopAlbums } from "./api/api";
import { useEffect, useState } from "react";
import Section from "./components/Section";
import BasicTabs from "./components/TabPanel";
import FAQs from "./components/FAQs";

function App() {
  const [dataAlbums, setNewAlbums] = useState([]);
  const [allSongsdata, setAllSongs] = useState([]);
  const [topAlbums, setTopAlbums] = useState([]);
  const generateData = async () => {
    try {
      const allSongsdata = await getSongs();
      const dataAlbums = await getNewAlbums();
      const topAlbums = await getTopAlbums();
      setAllSongs(allSongsdata);
      setNewAlbums(dataAlbums);
      setTopAlbums(topAlbums);
    } catch (err) {
      console.log(err);
    }
  };

  const filter = (query, songdata) => {
    query = query.toLowerCase();
    return query === 'all'
      ? songdata
      : songdata.filter((song) => song.genre.key.toLowerCase() === query);
  };
  

  const tabs = ['All', 'Rock', 'Pop', 'Jazz', 'Blues']

  useEffect(() => {
    generateData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section title={"Top albums"} data={topAlbums} />
      <Section title={"New albums"} data={dataAlbums} />
      <BasicTabs title="Songs" tabs={tabs} filterCallback={filter} data={allSongsdata}/>
      <FAQs/>
    </div>
  );
}

export default App;
