# sawang.xyz

Public site for Sawang. This repo holds only the pages, `config.js` and CNAME.
Strategy docs live elsewhere and are deliberately not here.

- `index.html` — the waitlist (the squeeze page).
- `thanks/index.html` — after signup: the two rituals by hand, the $49 reserve, what to expect.
- `config.js` — the two launch values: `KIT_ACTION` (the Kit form's action URL) and
  `STRIPE_LINK` (the Stripe Payment Link for the $49 refundable reserve). Until they are set
  the form falls back to a mailto and the reserve stays hidden. Nothing is lost.
