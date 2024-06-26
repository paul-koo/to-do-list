import styled from 'styled-components';
import { Main } from './layout/main/Main';
import { Header } from './layout/header/Header';
import { Footer } from './layout/footer/Footer';


function App() {
    return (
        <Wrapper>
            <Header/>
            <aside></aside>
            <Main/>
            <Footer/>
        </Wrapper>
    );
}

export default App;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

`