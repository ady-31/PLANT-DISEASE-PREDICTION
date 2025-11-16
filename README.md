# Plant Disease Prediction

A lightweight Flask web app that predicts plant leaf diseases from an uploaded photo using a pre-trained Keras model.

This fork includes a modern, futuristic theme with subtle glassmorphism, neon accents and animated background decorations.

Features
- Upload a photo of an affected plant leaf (or the affected area)
- Predict disease class using a Keras `.h5` model (`PlantDNet.h5`)
- Responsive UI with a futuristic dark theme and micro-animations

Quick demo
1. Open the app in your browser after starting the server (default):

	http://127.0.0.1:5000/

2. Upload a clear photo of the affected area and click `Predict!` — the API will return the predicted disease class.

Files you should know
- `app.py` — Flask application and prediction endpoint (`/predict`)
- `PlantDNet.h5` — the trained Keras model file (NOT committed to the repo; add it to project root to enable predictions)
- `templates/` — HTML templates (`import.html`, `index.html`)
- `static/css/` — theme and UI styles (`theme-futuristic.css`, `theme-dark.css`, etc.)
- `static/js/theme-fx.js` — micro-animations and interactive effects

Requirements
- Python 3.8–3.10 recommended
- The project `requirements.txt` lists the full dependency set (TensorFlow included). Installing full requirements will download TensorFlow (~400 MB).

Setup (recommended)
1. Create and activate a virtual environment (PowerShell):

```powershell
cd C:\path\to\project
python -m venv .venv
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\.venv\Scripts\Activate.ps1
```

2. Upgrade pip and install dependencies. For CPU-only TensorFlow (recommended on machines without GPU):

```powershell
python -m pip install --upgrade pip
# Option A: install CPU TensorFlow and then remaining packages
python -m pip install tensorflow-cpu==2.9.0
python -m pip install -r requirements.txt --no-deps

# Option B: install full requirements (includes tensorflow 2.9.0)
python -m pip install -r requirements.txt
```

3. Ensure the model file `PlantDNet.h5` is present in the project root (download or copy it there).

Run the app

```powershell
python app.py
```

Open `http://127.0.0.1:5000/` in a browser, upload an image, and click `Predict!`.

Development notes
- If you see `ModuleNotFoundError` for packages like `skimage`, install the package individually:

```powershell
python -m pip install scikit-image
```

- The app prints a TensorFlow GPU warning about `cudart64_110.dll` if no GPU is installed — this is safe and TensorFlow will run on CPU.

Security & deployment
- Do not commit model weights or large datasets to the repository. Use Git LFS, cloud storage, or GitHub Releases for model artifacts.
- For production, run behind a WSGI server (e.g. Gunicorn) and use HTTPS. Consider containerizing the app with Docker for consistent deployment.

Credits
- Original project: Vignesh and Vishnu (authors listed in footer). This repository contains UI/theme updates and UX improvements.

License
- Check the `LICENSE` file in this repo for license details.

