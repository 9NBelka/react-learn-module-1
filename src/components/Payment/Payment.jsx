import css from "./Payment.module.css";
import clsx from "clsx" 
import {FaBeer} from 'react-icons/fa'

const Payment = ({
  data: {amount, desctiption, cardNumber, isPaid},
}) =>{

  const containerClass = clsx(css.container, isPaid ? css.paid : css.pending);

  return (
      <div className={containerClass}>
        <div><FaBeer className={css.iconsColor} size="40"/></div>
        <p>Amount: {amount}</p>
        <p>Status: {isPaid ? "Paid" : "Pending"} {amount}</p>
        <p>Desctiption: {desctiption}</p>
        <p>Card Number: {cardNumber}</p>
        <p>Card Type:</p>
        <p>Card Holder Name:</p>
        <p>Payment Date:</p>
      </div>
  )
}

export default Payment