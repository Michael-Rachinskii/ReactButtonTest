import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styleBtn from './Button.module.css';

const Button = (props) => {
  const {
    cursor,
    customClass,
    disabled,
    fontSize,
    fullWidth,
    iconAfter,
    iconBefore,
    intent,
    onClick,
    onDoubleClick,
    paramsOnClick,
    paramsOnDoubleClick,
    shape,
    size,
    text,
    variants,
  } = props;

  return (
    <button
      onClick={() => onClick(...paramsOnClick)}
      onDoubleClick={() => onDoubleClick(...paramsOnDoubleClick)}
      type="button"
      disabled={Boolean(disabled)}
      className={`
        ${styleBtn[variants]}
        ${styleBtn[cursor]}
        ${styleBtn[intent]}
        ${styleBtn[`${fontSize}Font`]}
        ${styleBtn[`${size}Btn`]}
        ${styleBtn[shape]}
        ${fullWidth ? styleBtn.fullWidth : ''}
        ${customClass || ''}
      `}
    >
      { (iconBefore) && <img className={styleBtn.iconBefore} src={iconBefore} alt="iconBefore" />}
      <span>{text}</span>
      { (iconAfter) && <img className={styleBtn.iconAfter} src={iconAfter} alt="iconAfter" />}
    </button>
  );
};

Button.defaultProps = {
  cursor: 'cursorPointer',
  customClass: '',
  disabled: false,
  fontSize: 's',
  fullWidth: false,
  iconAfter: '',
  iconBefore: '',
  intent: 'default',
  onClick: () => false,
  onDoubleClick: () => false,
  paramsOnClick: [],
  paramsOnDoubleClick: [],
  shape: 'ellipse',
  size: 's',
  text: 'button',
  variants: 'default',
};

Button.propTypes = {
  cursor: PropTypes.string,
  customClass: PropTypes.string,
  disabled: PropTypes.bool,
  fontSize: PropTypes.string,
  fullWidth: PropTypes.bool,
  iconAfter: PropTypes.string,
  iconBefore: PropTypes.string,
  intent: PropTypes.string,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  paramsOnClick: PropTypes.arrayOf(PropTypes.any),
  paramsOnDoubleClick: PropTypes.arrayOf(PropTypes.any),
  shape: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
  variants: PropTypes.string,
};

export default memo(Button);
