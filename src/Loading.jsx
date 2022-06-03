import Slide from './Slide'
import PeachOffice from './assets/peach-office.gif'

export default function Loading(props) {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 5,
        }} onClick={props.onClick}>
            <Slide ngColor="#ffffff" title={props.title} titleColor="#fd4085">
                <img src={PeachOffice} />
            </Slide>
        </div>
    )
}