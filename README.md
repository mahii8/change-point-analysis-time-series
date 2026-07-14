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
jupyter notebook notebooks/02_changepoint_model.ipynb
```

## Running the dashboard

**Backend:**

```bash
pip install -r requirements.txt
python scripts/app.py
```

Runs on http://localhost:5000

**Frontend:**

```bash
cd dashboard
npm install
npm run dev
```

Runs on http://localhost:5173
