import Menu from './navbar'
import Footer from './footer'
export default function Container(props) {
    return(
        <>
            <div className="sticky top-0 z-50"><Menu/></div>
            <div className="relative overflow-x-hidden">{props.children}</div>
            <div><Footer/></div>
        </>
    )
}