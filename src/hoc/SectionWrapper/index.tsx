import { ComponentType, FC, PropsWithChildren, ReactElement, ReactNode } from 'react';

// type Props<T> = {
//     children?: ReactNode;
//     Component: ComponentType<T>;
// };

// const SectionWrapper: FC<Props<any>> = ({ Component }): ReactElement => {
//     return (
//         <div>
//             <h2>SectionWrapper</h2>
//             <Component />
//         </div>
//     );
// };

// export default SectionWrapper;

export function SectionWrapper<T extends PropsWithChildren<unknown>>(Component: ComponentType<T>) {
    return (hocProps: T) => {
        return <>
            <Component {...hocProps} />
        </>
    };
}
