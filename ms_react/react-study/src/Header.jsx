import {
    HeaderDiv,
    SubHeaderDiv,
    TitleBig,
    TitleLogoDiv,
    TitleSmall,
} from './styledComponent';
// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
import {
    faSun,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Header({darkMode, setDarkMode}) {
    // const darkMode = true;
    const toggleDarkMode = ()=>{
        setDarkMode((darkMode)=> !darkMode);
    }
    return (
        <HeaderDiv>   
            <TitleLogoDiv>
                <TitleBig>멋사</TitleBig>
                <TitleSmall>익명게시판</TitleSmall>
            </TitleLogoDiv>
            <SubHeaderDiv>
                {
                    darkMode ? (
                        <div>
                            <FontAwesomeIcon onClick={toggleDarkMode} icon={faSun} />
                        </div>
                    ) : (
                        <div>
                            <FontAwesomeIcon onClick={toggleDarkMode} icon={faMoon} />
                        </div>
                    )
                }
            </SubHeaderDiv>
        </HeaderDiv>
    )
}

export default Header;
