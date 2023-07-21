import { FC, ReactElement, ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    title: string
};

const Sidebar: FC<Props> = ({ title }): ReactElement => {
    return (
        <div>
            <h2>Sidebar {title}</h2>
        </div>
    );
};

export default Sidebar;
