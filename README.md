# Change Point Analysis of Brent Oil Prices

Analysis of how major geopolitical and economic events relate to structural
changes in Brent crude oil prices (1987-2022), using Bayesian change point
detection in PyMC, with results served through a Flask + React dashboard.

## Project structure

├── data/ # Raw price data and researched events CSV
├── notebooks/ # EDA and PyMC change point modeling
├── src/ # Reusable analysis code
├── scripts/ # Flask API app
├── tests/ # Unit tests
├── docs/ # Analysis plan, assumptions & limitations
└── dashboard/ # React frontend (added in Task 3)

## Setup

```bash
python -m venv venv
source venv/Scripts/activate    # Windows Git Bash
pip install -r requirements.txt
```

Place `BrentOilPrices.csv` in `data/` before running the notebooks.

## Running the notebooks

```bash
jupyter notebook notebooks/01_eda.ipynb
```

## Status

- [x] Task 1: Repo setup, event research, assumptions, analysis plan
- [ ] Task 2: Bayesian change point model
- [ ] Task 3: Flask + React dashboard
