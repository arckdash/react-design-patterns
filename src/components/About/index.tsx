import { FC, ReactElement, ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

const About: FC<Props> = (): ReactElement => {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
};

export default About;
