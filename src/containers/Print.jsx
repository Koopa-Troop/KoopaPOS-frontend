import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/Print.scss';

const Print = ({ history }) => {
  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 1000 * 15);
  });
  return (
    <section className='print__page'>
      <section className='print__ticket'>
        <div className='print__ticket__whitebox' />
        <div className='print__ticket__text'>
          <div>
            imprimiendo ticket
          </div>
          <div>
            Espere un momento
          </div>
        </div>
      </section>
    </section>
  );
};

export default connect()(Print);
