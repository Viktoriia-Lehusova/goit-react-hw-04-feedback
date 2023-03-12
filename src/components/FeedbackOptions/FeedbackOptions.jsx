import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled';

const options = ['good', 'neutral', 'bad'];
export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <Btn key={option} type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </Btn>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
