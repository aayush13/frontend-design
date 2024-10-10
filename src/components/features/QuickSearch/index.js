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
                    <img src="/icon.png" width="31.5%" height="6.75%" />
                </CompanyLogo>

                <MenuOptions>
                    <Home>
                        <img src="/Home.svg" />
                    </Home>
                    <SuitCase>
                        <img src="/Suitcase.svg"/>
                    </SuitCase>
                    <Contacts>
                        <img src="/contacts.svg"/>
                    </Contacts>
                    <FileText>
                        <img src="/file-text.svg" />
                    </FileText>
                    <SearchLogo>
                        <img src="/Search.svg" />
                    </SearchLogo>
                    <Settings>
                        <img src="/Settings.svg" />
                    </Settings>
                    <Faq>
                        <img src="/Frame.svg" />
                    </Faq>
                </MenuOptions>
            </Menu>

        </NavBar>
    )
}

export default QuickSearch