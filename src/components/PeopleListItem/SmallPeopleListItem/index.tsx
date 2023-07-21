import { FC, ReactElement, ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    people: {
        name: string;
        nationality: string;
    }
};

const SmallPeopleListItem: FC<Props> = ({ people }): ReactElement => {
    const { name } = people;

    return <p>{name}</p>;
};

export default SmallPeopleListItem;
