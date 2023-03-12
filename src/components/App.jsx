import { useState } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickBtn = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / (good + neutral + bad)) || 0;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={onClickBtn} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback(good, neutral, bad)}
          positivePercentage={countPositiveFeedbackPercentage(
            good,
            neutral,
            bad
          )}
        ></Statistics>
      </Section>
    </div>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onClickBtn = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };
//   countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;

//   countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
//     Math.round((good * 100) / (good + neutral + bad)) || 0;

//   render() {
//     const { good, neutral, bad } = this.state;
//     const optionKey = Object.keys(this.state);
//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={optionKey}
//             onLeaveFeedback={this.onClickBtn}
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback(this.state)}
//             positivePercentage={this.countPositiveFeedbackPercentage(
//               this.state
//             )}
//           ></Statistics>
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
