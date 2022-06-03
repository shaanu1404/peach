export default function Slide(props) {
    return (
        <section className="slide" style={{ backgroundColor: props.bgColor, padding: props.padding }}>
            {props.title ? <p className="title" style={{ color: props.titleColor }}>{props.title}</p> : null}
            {props.children}
        </section>
    )
}