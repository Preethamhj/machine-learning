from flask import Flask,request,jsonify
import joblib
import numpy as np

app = Flask(__name__)

container = joblib.load("models/student_pass_model.pkl")
model = container["model"]
feature_names = container["features"]

@app.route("/",methods=["GET"])
def home():
    return "student pass/fail api is running"

@app.route("/predict",methods=["POST"])
def predict():
    data = request.get_json()
    if not data:
        return jsonify({"error":"empty json body"}),400
    
    missing = [f for f in feature_names if f not in data]
    if missing:
        return jsonify({"error":"missing fields","fields":missing}),400
    
    try:
        input_arr = np.array([[float(data[f]) for f in feature_names]])
    except Exception as e:
        return jsonify({"error":"invalid input","message":str(e)}),400
    

    pred = model.predict(input_arr)[0]
    proba = float(model.predict_proba(input_arr)[0, 1])

    return jsonify({
        "prediction":str(pred),
        "probability":proba,
        "used_features":feature_names
    })

if __name__ == '__main__':
    app.run(debug=True)