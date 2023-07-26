//this component includes my picture and some info about me
import NavbarComponent from "./NavbarComponent"
import '../assets/index.css'

const AboutComponent = () => {
    return (
        <>
        <NavbarComponent />
        <div>
            <h1 className="title">About</h1>
        </div>
        </>
    )
}

export default AboutComponent