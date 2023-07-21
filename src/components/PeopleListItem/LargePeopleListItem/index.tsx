import { FC, ReactElement, ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    people: {
        name: string;
        nationality: string;
    }
};

const LargePeopleListItem: FC<Props> = ({ people }): ReactElement => {
    const { name, nationality } = people;

    return (
        <>
            <h2>Name: {name}</h2>
            <p>Nationality: {nationality}</p>
        </>
    );
};

export default LargePeopleListItem;
