import styled from 'styled-components';
import { Main } from './layout/Main/Main';


function App() {
    return (
        <Wrapper>
            <header>Header</header>
            <aside></aside>
            <Main/>
            <footer>Footer</footer>
        </Wrapper>
    );
}

export default App;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

`