import PropTypes from 'prop-types';
import { Button, Wrap } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <Wrap>
        {options.map(option => {
          return (
            <Button
              key={option}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          );
        })}
      </Wrap>
    </>
  );
};

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
