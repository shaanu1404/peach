import React, { useEffect, useState } from 'react'
import Slide from './Slide';
import ShuffledGrid from './ShuffledGrid';
import PeachCat from './assets/peach-cat.gif'
import PeachWaiting from './assets/peach-waiting.gif'
import PeachPocha from './assets/peach-pocha.gif'
import Goma from './assets/goma.gif'
import GomaPeach from './assets/goma-peach.gif'
import PeachGomaLove from './assets/peach-goma-love.gif'
import Selfie from './assets/selfie.gif'
import Chicken from './assets/chicken.gif'
import BubuDuduGift from './assets/bubududu-gift.gif'
import ThankYou from './assets/Happy-Birthday-My-Love-gif-animated.gif'
import LoveTime from './assets/peach-goma-lovetime.gif'
import BubuCake from './assets/bubu-cake.gif'
import PeachGomaRound from './assets/peach-goma-round.gif'
import PartyTime from './assets/party-time-lets-party.gif'
import PartyPlay from './assets/party-lets-party.gif'
import Loading from './Loading';

function App() {
  const [loadingText, setLoadingText] = useState("Waiting eagerly...")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const bDate = new Date(2022, 5, 4)
    if ((Date.now() - bDate.getTime()) > 0) {
      setTimeout(() => {
        setLoadingText("Waiting eagerly...Click me")
      }, 3000)
    }
  }, [])

  if (loading) {
    return <Loading title={loadingText} onClick={() => {
      const bDate = new Date(2022, 5, 4)
      if ((bDate.getTime() - Date.now()) > 0) return;
      setLoading(false)
    }} />
  }

  return (
    <React.Fragment>
      <Slide title="A few hours before her Birthday" titleColor="white" bgColor="#2c2a2c">
        <img src={PeachCat} />
      </Slide>
      <Slide title="A few moments later" titleColor="black">
        <img src={PeachWaiting} />
      </Slide>
      <Slide bgColor="#fceeed" title="The Special day's morning" titleColor="#fc3c82">
        <img src={PeachPocha} />
      </Slide>
      <Slide bgColor="#fbf7f9" title="Time for a Beautiful Surprise" titleColor="#fa6060">
        <img src={Goma} />
      </Slide>
      <Slide bgColor="#fbf7f9" title="Surprise for the beautiful and the special one" titleColor="#614b3f">
        <img src={GomaPeach} />
      </Slide>
      <Slide bgColor="#d6c1e7" title="Its her day and we'll do anything to make it better" titleColor="#ad3ae5">
        <img src={PeachGomaLove} />
      </Slide>
      <Slide bgColor="#fafcf9" title="Let's take a selfie together love" titleColor="#ee4646">
        <img src={Selfie} />
      </Slide>
      <Slide bgColor="#fafcf9" title="Enjoy our favorite food!!!!" titleColor="#282329">
        <img src={Chicken} />
      </Slide>
      <Slide bgColor="#faebe6" title="Enjoy our time!!!!" titleColor="#f44686">
        <img src={LoveTime} />
      </Slide>
      <Slide bgColor="#fefefe" title="Ok Babe.. Lets kill the cake now" titleColor="#f44686">
        <img src={BubuCake} />
      </Slide>
      <Slide bgColor="#fefefe" title="❤️Happy.. Happpy.. Happiest.. Birthday" titleColor="#e52068">
        <img src={PeachGomaRound} />
      </Slide>
      <Slide padding="0" bgColor="#000000">
        <img src={PartyTime} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Slide>
      <ShuffledGrid />
      <ShuffledGrid />
      <ShuffledGrid />
      <ShuffledGrid />
      <ShuffledGrid />
      <ShuffledGrid />
      <ShuffledGrid />
      <ShuffledGrid />
      <Slide bgColor="#fafcf9">
        <img src={PartyPlay} />
      </Slide>
      <Slide bgColor="#fafcf9">
        <img src={ThankYou} />
      </Slide>
      <Slide bgColor="#fafcf9">
        <img src={BubuDuduGift} />
      </Slide>
    </React.Fragment>
  )
}

export default App
