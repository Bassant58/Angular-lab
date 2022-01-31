import { Injectable } from '@angular/core';
import { paymentOption } from '../_models/payment-type';

@Injectable({
  providedIn: 'root',
})
export class PaymentOptionsService {
  payment: paymentOption[] = [
    {
      id: 1,
      name: 'Credit Card',
    },
    {
      id: 2,
      name: 'Visa Card',
    },
    {
      id: 3,
      name: 'Master Card',
    },
    {
      id: 4,
      name: 'Paypal',
    },
    {
      id: 5,
      name: 'On Delivery',
    },
  ];

  getAllPaymentMethods(): paymentOption[] {
    return this.payment.splice(0);
  }
}
