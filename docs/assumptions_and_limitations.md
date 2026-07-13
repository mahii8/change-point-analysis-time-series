# Assumptions and Limitations

## Assumptions

- Log returns are assumed to be approximately normally distributed within
  each regime (before/after the change point), which is standard for this
  class of model but is a simplification of real market behavior.
- A single change point captures a meaningful structural shift; extending to
  multiple change points would require a more complex model.
- Event dates recorded in `key_events.csv` are start dates of the triggering
  event, not necessarily the date the market fully priced in its effects.

## Limitations

- **Correlation vs. causation:** A change point detected close in time to a
  known event is a _statistical association_, not proof that the event
  _caused_ the shift. Oil prices are affected by many simultaneous factors
  (currency moves, macro data releases, other geopolitical developments),
  so any single event can only be treated as a plausible contributing
  hypothesis, not a confirmed cause.
- **Single-variable model:** The core model only uses price/log returns.
  It does not yet incorporate macroeconomic covariates (GDP, inflation,
  exchange rates) that could offer a more complete explanatory picture.
- **Model simplicity:** A single mean-shift change point model may
  oversimplify periods with multiple overlapping shocks (e.g. 2020, which
  had both COVID demand collapse and the Saudi-Russia price war within
  weeks of each other).
- **Data granularity:** Daily data captures short-term volatility but change
  point detection can be noisy at daily resolution; weekly/monthly
  aggregation may be needed as a robustness check.
