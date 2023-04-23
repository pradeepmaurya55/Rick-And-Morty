import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../components/Card/DetailsCard";
import EpisodeCard from "../components/Card/EpisodeCard";

const CharacterDetails = () => {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState([]);
  const [episodeData, setEpisodeData] = useState([]);

  let characterAPI = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(characterAPI).then((res) => res.json());

      setCharacterData(data);

      let epListPromises = data?.episode.map(async (ep) => {
        let epData = await fetch(ep).then((res) => res.json());
        return { name: epData.name, episodeNo: epData.episode };
      });
      let episodes = await Promise.all(epListPromises);
      setEpisodeData(episodes);
    })();
  });

  return (
    <div className="flex flex-col justify-center gap-4 m-1 lg:flex-row lg:items-stretch md:items-center">
      <DetailsCard characterData={characterData} />
      <EpisodeCard episodeData={episodeData} />
    </div>
  );
};

export default CharacterDetails;
