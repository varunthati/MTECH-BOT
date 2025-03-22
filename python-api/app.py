from flask import Flask, request, jsonify
import pandas as pd

app = Flask(__name__)

# Load dataset
colleges_df = pd.read_json('../datasets/colleges.json')

@app.route('/recommend', methods=['POST'])
def recommend_colleges():
    data = request.json
    inter_marks = data['interMarks']
    btech_cgpa = data['btechCgpa']
    gate_score = data['gateScore']

    # Filter colleges based on criteria
    eligible_colleges = colleges_df[
        (colleges_df['min_inter_marks'] <= inter_marks) &
        (colleges_df['min_btech_cgpa'] <= btech_cgpa) &
        (colleges_df['min_gate_score'] <= gate_score)
    ]

    return jsonify({'colleges': eligible_colleges['name'].tolist()})

if __name__ == '__main__':
    app.run(port=5000)