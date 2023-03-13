import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom'
import Ads from "./Ads";

function Home() {
  const [ads, setAds] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("/ads")
      .then((r) => r.json())
      .then(setAds);
  }, []);
  useEffect(() => {
    fetch("/tags")
      .then((r) => r.json())
      .then(setTags);
  }, []);
  console.log(ads);

return(
  <div className="home">
    <Ads ads={ads} tags={tags}/>
  </div>
)}

export default Home;