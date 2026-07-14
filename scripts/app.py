from flask import Flask, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

DATA_PATH = os.path.join(os.path.dirname(__file__), '..', 'data', 'dashboard_data.json')

with open(DATA_PATH) as f:
    DATA = json.load(f)

@app.route('/api/prices')
def prices():
    return jsonify(DATA['prices'])

@app.route('/api/weekly-returns')
def weekly_returns():
    return jsonify(DATA['weekly_returns'])

@app.route('/api/changepoint')
def changepoint():
    return jsonify(DATA['change_point'])

@app.route('/api/events')
def events():
    return jsonify(DATA['events'])

@app.route('/api/health')
def health():
    return jsonify({"status": "ok"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)