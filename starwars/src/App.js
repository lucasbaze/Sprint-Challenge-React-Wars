import React, { useState, useEffect } from 'react';
import './App.css';

import useHttp from './hooks/http.js';

import CardCreator from './components/CardCreator.js';
import { Grid, Button } from 'semantic-ui-react';

const App = () => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.
    const [people, setPeople] = useState([]);
    const [currentUrl, setCurrentUrl] = useState(
        'https://swapi.co/api/people/'
    );
    const [nextURL, setNextURL] = useState(null);
    const [previousURL, setPreviousURL] = useState(null);

    const [loading, fetchedData] = useHttp(currentUrl, [currentUrl]);

    useEffect(() => {
        if (fetchedData == null) {
            return;
        } else {
            setPeople(fetchedData.results);
            setNextURL(fetchedData.next);
            setPreviousURL(fetchedData.previous);
        }
    }, [fetchedData, loading]);

    console.log(people, currentUrl, nextURL, previousURL);

    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.

    return (
        <div className="App">
            <h1 className="Header">React Wars</h1>
            <div style={{ marginBottom: '20px' }}>
                {previousURL !== null ? (
                    <Button
                        content="Previous"
                        icon="left arrow"
                        labelPosition="left"
                        onClick={() => setCurrentUrl(previousURL)}
                    />
                ) : null}
                <Button
                    content="Next"
                    icon="right arrow"
                    labelPosition="right"
                    onClick={() => setCurrentUrl(nextURL)}
                />
            </div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <Grid columns={3} centered>
                    {people.map((person, index) => {
                        return (
                            <Grid.Column>
                                <CardCreator key={index} person={person} />
                            </Grid.Column>
                        );
                    })}
                </Grid>
            )}
        </div>
    );
};

export default App;
