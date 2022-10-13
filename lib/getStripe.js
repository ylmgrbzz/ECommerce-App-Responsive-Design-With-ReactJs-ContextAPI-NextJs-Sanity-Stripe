import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe("pk_test_51LsXK7FqHewPzjUWo7q0ZZb5yFhfDxSNXHyJ2dtsWvH6PAYmDaP1zemPSYeVSbSRxggQE4A3aPnjbOJCMiNfKawK00I2Z60tYK");
  }

  return stripePromise;
}

export default getStripe;