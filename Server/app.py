import os
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import tensorflow as tf
from PIL import Image
import numpy as np

app = Flask(__name__)

# Set the path to the directory where uploaded files will be stored

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

labels = ['yellow nails',
'red lunula',
'white nail',
'splinter hemmorrage',
'pale nail',
'terry_s nail',
'leukonychia',
'onycholycis',
'Muehrck-e_s lines',
'koilonychia',
'beau_s lines',
'half and half nailes (Lindsay_s nails)',
'Darier_s disease',
'clubbing',
'aloperia areata',
'eczema',
'bluish nail'] # list of output strings

# Load your TensorFlow model

model = tf.keras.models.load_model('your_model_path')  # Replace 'your_model_path' with the actual path

# Function to preprocess the image for the model

def preprocess_image(image_path):
    img = Image.open(image_path)
    img = img.resize((224, 224))  # Adjust the size according to your model's input requirements
    img_array = np.array(img)
    img_array = img_array / 255.0  # Normalize pixel values
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    return img_array

# Function to make predictions using the loaded model

def predict_image(image_path):
    preprocessed_image = preprocess_image(image_path)
    prediction = model.predict(preprocessed_image)
    predicted_class = np.argmax(prediction)
    # You can customize the return string based on your model's output
    return f"Prediction: {labels[predicted_class]}"

# Route to handle image uploads

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file:
        # Save the uploaded file
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        # Process the uploaded file using the model
        result = predict_image(filepath)

        # Remove the uploaded file after processing (optional)
        os.remove(filepath)

        return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)