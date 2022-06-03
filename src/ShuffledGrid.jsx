import Grid from './Grid'
import BubuDance from './assets/bubu-dance.gif'
import DuduDance from './assets/dudu-dance.gif'
import DuduDanceMask from './assets/dudu-dance-mask.gif'
import ExcitedSpin from './assets/excited-spin.gif'
import LoveDance from './assets/love-dance.gif'
import PeachDance from './assets/peach-peachdance.gif'

const content = [
    BubuDance,
    DuduDance,
    DuduDanceMask,
    ExcitedSpin,
    LoveDance,
    PeachDance,
]

export default function ShuffledGrid(props) {

    function shuffle(arr) {
        return arr.sort(() => (Math.random() > 0.5) ? 1 : -1)
    }

    return (
        <Grid style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            {shuffle(content).map((gif, i) => <div key={i}><img src={gif} /></div>)}
        </Grid>
    )
}