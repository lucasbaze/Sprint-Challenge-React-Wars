import React from 'react';
import { Card } from 'semantic-ui-react';

const CardCreator = props => {
    const description = (
        <div>
            <p>Skin Color: {props.person.skin_color}</p>
            <p>Hair Color: {props.person.hair_color}</p>
            <p>Gender: {props.person.gender}</p>
        </div>
    );

    return (
        <Card
            header={props.person.name}
            meta={props.person.birth_year}
            description={description}
        />
    );
};

export default CardCreator;
