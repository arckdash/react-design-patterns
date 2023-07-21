import { ComponentType, FC, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

type TPane = {
    weight: number;
}

const Pane = styled.div<TPane>`
    flex: ${({ weight }) => weight};
`;

type Props = {
    children: ReactNode[]; // receives an array of ReactNode components.
    leftWeight?: number;
    rightWeight?: number;
};

const SplitScreen: FC<Props> = ({
    children,
    leftWeight = 1,
    rightWeight = 1
}): ReactElement => {
    const [left, right] = children; // autoassigning the elements from the array to left & right variables.

    return (
        <Container>
            <Pane weight={leftWeight}>
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
            </Pane>
        </Container>
    );
};

export default SplitScreen;
