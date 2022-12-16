import { useEffect, useRef, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/components/PayPal.module.scss';

const PayPalBtn = () => {
  const buttonRef = useRef(null);
  const buttonId = useMemo(() => `ID-${uuidv4()}`, []);
  useEffect(() => {
    if (typeof window !== 'undefined' && window?.PayPal?.Donation?.Button && buttonRef?.current) {
      const button = window.PayPal.Donation.Button({
        env: 'production',
        hosted_button_id: 'QS62U23QHCFXW',
        image: {
          src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
          alt: 'Donate with PayPal button',
          title: 'PayPal - The safer, easier way to pay online!',
        },
      });
      button.render(`#${buttonRef?.current?.id}`); // you can change the code and run it when DOM is ready
    }
  }, []);
  return <div className={styles.paypal} ref={buttonRef} id={buttonId} />;
};

export default PayPalBtn;
