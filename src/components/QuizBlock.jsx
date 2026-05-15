import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLearningProgress } from '../context/LearningProgressContext';

export function QuizBlock({ id, title, prompt, options, answerIndex, explanation, xpReward = 15 }) {
  const { t } = useTranslation('common');
  const { markQuizSolved, solvedQuizIds, solvedQuizCount } = useLearningProgress();
  const alreadySolved = solvedQuizIds.includes(id);
  const [selectedIndex, setSelectedIndex] = useState(() => (alreadySolved ? answerIndex : null));
  const [revealed, setRevealed] = useState(() => alreadySolved);

  const status = alreadySolved
    ? t('solved')
    : selectedIndex === null
      ? t('selectOption')
      : selectedIndex === answerIndex
        ? t('correct')
        : t('incorrect');

  function handleSelect(index) {
    if (alreadySolved) {
      setSelectedIndex(answerIndex);
      setRevealed(true);
      return;
    }

    setSelectedIndex(index);
    setRevealed(true);

    if (index === answerIndex) {
      markQuizSolved(id, xpReward);
    }
  }

  return (
    <section className="surface quiz-block">
      <div className="section-heading">
        <span className="eyebrow">سؤال</span>
        <h2>{title}</h2>
      </div>

      <p className="quiet">{prompt}</p>

      <div className="quiz-options" role="list">
        {options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isCorrect = revealed && index === answerIndex;

          return (
            <button
              key={option}
              type="button"
              className={`quiz-option${isSelected ? ' quiz-option-selected' : ''}${
                isCorrect ? ' quiz-option-correct' : ''
              }`}
              onClick={() => handleSelect(index)}
            >
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      <div className="quiz-footer">
        <span className="pill">{status}</span>
        <span className="pill">{xpReward} XP</span>
        <button
          type="button"
          className="text-button"
          onClick={() => setRevealed((value) => !value)}
        >
          {revealed ? t('hideAnswer') : t('showAnswer')}
        </button>
      </div>

      {revealed ? (
        <div className="answer-box">
          <strong>{t('explanation')}</strong>
          <p>{explanation}</p>
          <p className="quiet">
            {t('solvedQuizzes')}: {solvedQuizCount}
          </p>
        </div>
      ) : null}
    </section>
  );
}