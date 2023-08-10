import PropTypes from 'prop-types';
import { Bad, Feedback, Good, Neutral, Total, Wrap } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <Wrap>
        <Good>Good: {good}</Good>
        <Neutral>Neutral: {neutral}</Neutral>
        <Bad>Bad: {bad}</Bad>
        <Total>Total: {total}</Total>
        <Feedback>Positive Feedback: {positivePercentage()}%</Feedback>
      </Wrap>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
