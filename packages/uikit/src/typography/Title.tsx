import React, {FC} from 'react';

/**
 * Component props model.
 *
 * @prop {number} [level] Heading level (default level is 1).
 */
interface TitleProps {
  level?: number;
}

/**
 * Component props default values.
 */
const defaultProps: Partial<TitleProps> = {
  level: 1,
};

/**
 * Title component. Renders section heading.
 */
export const Title: FC<TitleProps> = ({level, children}) => {
  const TitleComponent = `h${level}` as keyof JSX.IntrinsicElements;

  return <TitleComponent>{children}</TitleComponent>;
};

Title.defaultProps = defaultProps;
