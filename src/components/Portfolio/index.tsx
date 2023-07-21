import { FC, ReactElement, ReactNode } from 'react';
import List from '../../layouts/List';

type Props = {
    children?: ReactNode;
};

const Portfolio: FC<Props> = (): ReactElement => {
    return (
        <div>
            <h2>Portfolio</h2>
        </div>
    );
};

export default Portfolio;
