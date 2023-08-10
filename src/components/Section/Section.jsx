import PropTypes from 'prop-types';
import { Wrap } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <Wrap>
        <h2>{title}</h2>
        {children}
      </Wrap>
    </>
  );
};

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
