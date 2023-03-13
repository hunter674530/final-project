import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Ads from "./Ads";
import Ad from "./Ad";
import AdDetails from "./AdDetails";
import Login from "./Login";
import MyPage from "./MyPage";
import EditAd from "./EditAd";
import NavBar from "./NavBar";

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
  function removeAd(oldAd) {
    setAds(ads.filter((ad) => ad.id !== oldAd.id));
  }
  function changeAd(changedAd) {
    const filteredAds = ads.filter((ad) => ad.id !== changedAd.id);
    setAds([...filteredAds, changedAd]);
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
  


  return (
    <div className="home">
      {userId ? (
        <>
        <NavBar />
        <Ads ads={ads} tags={tags} /> 
        </>
      ) : (
        <Login changeUser={handleUserChange} />
      )}

      <div id="footer">
      {ads.map((ad) =>
        userId === ad.user.id ? (
          <EditAd
            key={ad.id}
            ad={ad}
            removeAd={removeAd}
            tags={tags}
            userId={userId}
            changeAd={changeAd}
          />
        ) : null
      )}
      </div>
      <AdDetails ads={ads} />
    </div>
  );
}

export default Home;
