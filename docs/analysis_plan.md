# Analysis Plan

## Objective

Identify and quantify how major geopolitical and economic events relate to
structural changes in Brent crude oil prices (1987–2022) using Bayesian
change point detection.

## Workflow

1. **Data loading & cleaning** — parse mixed date formats, sort chronologically.
2. **Exploratory Data Analysis** — plot raw price, test stationarity (ADF),
   compute log returns, examine volatility clustering.
3. **Event research** — compile 15+ major geopolitical/OPEC/economic events
   with approximate dates (`data/key_events.csv`).
4. **Bayesian change point modeling (PyMC)** — define a switch point (tau)
   over the log return series, estimate before/after means, sample via MCMC.
5. **Model diagnostics** — check r_hat, trace plots, posterior of tau for
   convergence and confidence.
6. **Insight generation** — match detected change point(s) to nearby events,
   quantify the shift in average daily return/price, and state the
   confidence and limitations of that association.
7. **Dashboard** — serve results via a Flask API and visualize interactively
   in a React frontend for stakeholders.

## Communication channels

- **Primary deliverable:** written report (blog-post style, for Medium or PDF)
  summarizing methodology, findings, and quantified impacts for policymakers
  and analysts.
- **Interactive tool:** web dashboard for investors/analysts to explore price
  history, change points, and event correlations themselves.
- **Code artifact:** GitHub repository with full reproducible analysis for
  technical stakeholders.
