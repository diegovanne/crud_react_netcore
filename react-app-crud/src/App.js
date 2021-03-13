import './App.css';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import DonationCandidate from './components/DonationCandidates';
import { Container } from '@material-ui/core';

function App() {
    return (
        <Provider store={store}>
            <Container maxWidth="lg">
                <DonationCandidate />
            </Container>
        </Provider>
    );
}

export default App;