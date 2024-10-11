import * as S from "./styles";
import {
    NavBar, 
    Menu, 
    CompanyLogo,
    MenuOptions,
    Home,
    SuitCase,
    Contacts,
    FileText,
    SearchLogo,
    Settings,
    Faq } from './styles'

const QuickSearch = () => {
    return (
        <NavBar>
            <Menu>
                <CompanyLogo>
                    <img src="/icon.png" width="31.5%" height="6.75%" alt="company logo"/>
                </CompanyLogo>

                <MenuOptions>
                    <Home>
                        <img src="/Home.svg" alt="home icon" />
                    </Home>
                    <SuitCase>
                        <img src="/Suitcase.svg" alt="suitcase icon"/>
                    </SuitCase>
                    <Contacts>
                        <img src="/contacts.svg" alt="contacts icon"/>
                    </Contacts>
                    <FileText>
                        <img src="/file-text.svg" alt="file text icon"/>
                    </FileText>
                    <SearchLogo>
                        <img src="/Search.svg" alt="search icon"/>
                    </SearchLogo>
                    <Settings>
                        <img src="/Settings.svg" alt="settings icon"/>
                    </Settings>
                    <Faq>
                        <img src="/Frame.svg" alt="faq icon"/>
                    </Faq>
                </MenuOptions>
            </Menu>

        </NavBar>
    )
}

export default QuickSearch