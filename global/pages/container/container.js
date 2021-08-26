import Menu from './navbar'
import Footer from './footer'
export default function Container(props) {
    return(
        <>
            <div class="flex flex-col h-screen justify-between">
                <div className="sticky top-0 z-50"><Menu/></div>
                <div className="content-start">
                    <div className="relative overflow-x-hidden">{props.children}</div>
                </div>
                <div><Footer/></div>
            </div>
        </>
    )
}