import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLearningProgress } from '../context/LearningProgressContext';

export function QuizBlock({ id, title, prompt, options, answerIndex, explanation, xpReward = 15 }) {
  const { t } = useTranslation('common');
  const { markQuizSolved, solvedQuizIds, solvedQuizCount } = useLearningProgress();
  const alreadySolved = solvedQuizIds.includes(id);
  const [selectedIndex, setSelectedIndex] = useState(() => (alreadySolved ? answerIndex : null));
  const [revealed, setRevealed] = useState(() => alreadySolved);
  const optionRefs = useRef(new Map());

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

  function handleOptionKeyDown(event, index) {
    let nextIndex = null;

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        nextIndex = index + 1;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        nextIndex = index - 1;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = options.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();

    const boundedIndex = Math.max(0, Math.min(options.length - 1, nextIndex));
    handleSelect(boundedIndex);
    optionRefs.current.get(boundedIndex)?.focus();
  }

  const activeIndex = selectedIndex ?? 0;

  return (
    <section className="surface quiz-block">
      <div className="section-heading">
        <span className="eyebrow" id={`${id}-label`}>
          {t('question')}
        </span>
        <h2>{title}</h2>
      </div>

      <p className="quiet">{prompt}</p>

      <div className="quiz-options" role="radiogroup" aria-labelledby={`${id}-label`}>
        {options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isCorrect = revealed && index === answerIndex;

          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={isSelected}
              tabIndex={index === activeIndex ? 0 : -1}
              className={`quiz-option${isSelected ? ' quiz-option-selected' : ''}${
                isCorrect ? ' quiz-option-correct' : ''
              }`}
              ref={(node) => {
                if (node) {
                  optionRefs.current.set(index, node);
                } else {
                  optionRefs.current.delete(index);
                }
              }}
              onClick={() => handleSelect(index)}
              onKeyDown={(event) => handleOptionKeyDown(event, index)}
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
