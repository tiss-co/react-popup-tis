import React, { useState } from 'react';
import css from './styles.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Popup = ({
  msg = '',
  className,
  children,
  icon,
  darkMode = false,
  top = false
}) => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className={css.PopupDiv_PopupTis} >
      <div
        className={css.Children_PopupTis}
        onMouseOver={() => setOpenPopup(true)}
        onMouseLeave={() => setOpenPopup(false)}
      >
        {children}
      </div>
      <div
        className={classNames(css.Popup_PopupTis, className, {
          [css.Close_PopupTis]: !openPopup,
          [css.Dark_PopupTis]: darkMode,
          [css.Top_PopupTis]: top,
        })}
      >
        {icon}
        {msg}
      </div>
    </div>
  );
};

Popup.propTypes = {
  className: PropTypes.string,
  msg: PropTypes.string,
  icon: PropTypes.any,
  darkMode: PropTypes.bool,
  top: PropTypes.bool
};