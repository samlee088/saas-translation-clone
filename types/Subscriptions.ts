import { DocumentData, DocumentReference, Timestamp } from "firebase/firestore";
import Stripe from "stripe";

export interface Subscription {
  id?: string;

  metadata: {
    [name: string]: string;
  };
  stripeLink: string;
  role: string | null;
  quantity: number;
  items: Stripe.SubscriptionItem[];

  /* Firestore reference to the product doc for this Subscription */
  product: DocumentReference<DocumentData>;
  /* Firestore reference to the price for this Subscription */
  price: DocumentReference<DocumentData>;
  /* Array of price references. If you provide multiple recurring prices to the checkout session via the 'line_items' parameter, this array will hold the references for all recurring prices for this subscription. 'price === price[0] */
  prices: Array<DocumentReference<DocumentData>>;
  payment_method?: string;
  latest_invoice?: string;
  /* The status fo the subscription object */
  status:
    | "active"
    | "canceled"
    | "incomplete"
    | "incomplete_expired"
    | "past due"
    | "trialing"
    | "unpaid";

  /* If true the subscription has been canceled by the user and will be deleted at the end of the billing period */
  cancel_at_period_end: boolean;
  /* Time at which the object was created */
  created: Timestamp;
  /* Start of the current period that the subscription has been invoiced for. */
  current_period_start: Timestamp;
  /* End of the current period that the subscription has been invoice for. At the end of this period, a new invoice will be created */
  current_period_end: Timestamp;
  /* If the subscription has ended, the timestamp of the date the subscription ended. */
  ended_at: Timestamp | null;
  /* A date in the future at which the subscription will automatically get canceled */
  cancel_at: Timestamp | null;
  /* If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with 'cancel_at_period_end', 'canceled_at' will still reflect the date of the initial cancellation request, not the end of the subscription period when the subscription is automatically moved to a canceled state */
  canceled_at: Timestamp | null;
  /* If the subscription has a trial, the beginning of that trial */
  trial_start: Timestamp | null;
  /* If the subscription has a trial, the end of that trial */
  trial_end: Timestamp | null;
}
