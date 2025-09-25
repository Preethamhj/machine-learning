from flask import Flask, request, jsonify
import numpy as np
import joblib

app = Flask(__name__)

# ✅ Load your trained pipeline
loaded_pipeline = joblib.load('house_price_pipeline.pkl')

# ✅ If your pipeline was trained on a pandas DataFrame,
# we can try to extract feature names automatically
try:
    feature_names = loaded_pipeline.feature_names_in_
except AttributeError:
    # Fallback: manually define feature names here if automatic fails
    feature_names = ['bedrooms','bathrooms','sqft','location','year_built','garage','floors','condition']
    # ^ Replace with your own columns if different

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    # Extract features in order
    feature_order = ['MedInc', 'HouseAge', 'AveRooms', 'AveBedrms', 
                     'Population', 'AveOccup', 'Latitude', 'Longitude']
    input_data = np.array([[data[f] for f in feature_order]])

    # Make prediction
    prediction = loaded_pipeline.predict(input_data)

    # Convert NumPy array to list for JSON
    return jsonify({
        "prediction": prediction.tolist(),  # <-- this is the fix
        "used_features": feature_order
    })


if __name__ == '__main__':
    app.run(debug=True)
