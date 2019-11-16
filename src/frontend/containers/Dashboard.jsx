import React from 'react';
import cx from 'classnames';
import trendingUp from '../assets/statics/trending-up.svg';
import trendingDown from '../assets/statics/trending-down.svg';
import '../assets/styles/Dashboard.scss';

const Dashboard = () => (
  <section className='dashboard__section'>
    <DashboardCard
      title='Ventas'
      footer={{
        content: '+3.48',
        description: 'Última semana',
      }}
      positive
    >
      35
    </DashboardCard>
    <DashboardCard
      title='Clientes nuevos'
      footer={{
        content: '-3.48',
        description: 'Última semana',
      }}
      negative
    >
      15
    </DashboardCard>
  </section>
);

const DashboardCard = ({ title, children, footer, positive, negative }) => (
  <section className='dashboard__card'>
    <div className='dashboard__content'>
      <div className='dashboard__title'>{title}</div>
      <div className='dashboard__body'>{children}</div>
      <div className='dashboard__footer'>
        <div className={cx('dashboard__footer__content', { positive, negative })}>
          {footer.content}
        </div>
        <div className='dashboard__footer__description'>{footer.description}</div>
      </div>
    </div>
    <div className='dashboard__content'>
      <div className={cx('dashboard__image', { positive, negative })}>
        {positive && <img src={trendingUp} alt='positive chart' />}
        {negative && <img src={trendingDown} alt='negative chart' />}
      </div>
    </div>
  </section>
);

export default Dashboard;
