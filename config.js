// The two things to set before launch. Loaded by index.html and thanks/index.html.
//   KIT_ACTION  : the Kit (ConvertKit) form action URL — Kit → Grow → Landing Pages & Forms →
//                 the "Sawang waitlist" form → Publish → HTML → the <form action="..."> URL,
//                 e.g. https://app.kit.com/forms/1234567/subscriptions
//   STRIPE_LINK : a Stripe Payment Link for the $49 refundable reserve.
// Until KIT_ACTION is set the form falls back to a mailto; until STRIPE_LINK is set the
// reserve link stays hidden. Nothing is lost either way.
window.SAWANG = {
  KIT_ACTION: "",
  STRIPE_LINK: ""
};
