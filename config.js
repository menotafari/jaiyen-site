// Loaded by index.html and thanks/index.html.
//   LEAD_ENDPOINT : the studio's lead route. The waitlist posts {door:"sawang", email} there and
//                   the route puts the person into Kit (tag `sawang`, the welcome sequence).
//                   Same route the Front Row Check uses; one place writes both doors.
//   STRIPE_LINK   : a Stripe Payment Link for the $49 refundable reserve.
// Until LEAD_ENDPOINT is set the form falls back to a mailto; until STRIPE_LINK is set the
// reserve link stays hidden. Nothing is lost either way.
window.JAIYEN = {
  LEAD_ENDPOINT: "https://frontrowstudio.xyz/api/lead",
  STRIPE_LINK: ""
};
