import React from 'react';
import cx from 'classnames';

import { Props } from 'src/types';

import './index.scss';

const Footer = (props: Props) => (
  <footer className={cx(props.className, 'footer')}>
    &copy; Copyright 2019&ensp;ZhangWinWin
  </footer>
);

export default Footer;
