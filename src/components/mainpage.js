
import Welcome from "./welcome";
import DataShowcase from "./datashow";
import UserInput from "./userinput";

function MainPage() {
    return(
        <div className="main-page-container">
            <div className="main-page-sector">
                <Welcome />
            </div>
            <div className="main-page-sector">
                <DataShowcase />
            </div>
            <div className="main-page-sector">
                <UserInput />
            </div>
        </div>
    )
}

export default MainPage;