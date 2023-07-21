import { ComponentType, ReactElement, ReactNode } from 'react';

// Generic type behaves like a function
type Props<P> = {
    children?: ReactNode;
    items: unknown[];
    resourceName: 'people' | 'product';
    itemComponent: ComponentType<P>;
};

const List = <P extends object>({ items, resourceName, itemComponent: ItemComponent }: Props<P>): ReactElement => {
    return (
        <>
            {
                items.map((item, index) => {
                    return <ItemComponent key={index} {...{ [resourceName]: item } as P} />
                })
            }
        </>
    );
};

export default List;
