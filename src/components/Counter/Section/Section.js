import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

// <Section title=""></Section>

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className={s.section}>
        <h2 className={s.header}>{title}</h2>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
