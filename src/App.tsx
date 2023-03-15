import { Grid, GridItem, Show } from '@chakra-ui/react'
import GameGrid from './components/GameGrid';
import NavBar from './components/Navbar';

function App() {
    return (
    <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"` // 1024px
        }}>
        <GridItem area='nav'>
            <NavBar />
        </GridItem>
        <Show above="lg">
            <GridItem area='aside'>Aside</GridItem>
        </Show>
        <GridItem area='main'>
            <GameGrid />
        </GridItem>
    </Grid>
    );
}

export default App
