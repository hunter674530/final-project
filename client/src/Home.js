import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Ads from "./Ads";
import Ad from "./Ad";
import AdDetails from "./AdDetails";
import Login from "./Login";
import MyPage from "./MyPage";

function Home() {
  const [ads, setAds] = useState([]);
  const [tags, setTags] = useState([]);
  const [userId, setUserId] = useState(null);

  function handleUserChange(newUser) {
    setUserId(newUser.id);
  }
  function addAd(newAd) {
    setAds([...ads, newAd]);
  }

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
  console.log(userId);

  return (
    <div className="home">
      {userId ? (
        <Ads ads={ads} tags={tags} />
      ) : (
        <Login changeUser={handleUserChange} />
      )}
      <MyPage addAd={addAd} userId={userId} tags={tags} ads={ads} />
      <AdDetails ads={ads} />
    </div>
  );
}

export default Home;
