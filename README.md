# Training Management System (TMS)
Welcome to the Training Management System (TMS) README! This application is designed to streamline the training process for users by providing a centralized platform for accessing, completing, and tracking training modules. With TMS, users can enhance their skills, track their progress, and compete with their peers on the leaderboard.

# Features
## Training Modules
TMS offers a training modules which simulate activities and return a score by using python randint function that returns a score between 1 and 100.

```python
import random

random.randint(1, 100)
```

## Leaderboard
The leaderboard showcases the top performers on the platform based on training completion and scores. Users can see where they rank compared to their peers and strive to climb the leaderboard by achieving higher scores.

## Personal Dashboard
Each user has a personalized dashboard where they can view their training history, scores, achievements, and progress over time. The dashboard provides valuable insights into individual performance and areas for improvement.

## Backend API
TMS is powered by Django REST Framework on the backend, offering a robust API for managing training modules, user data, scores, and leaderboard rankings. The backend handles data storage, authentication, and interaction with the frontend components.

## Frontend Interface
The frontend of TMS is built using React, providing users with a seamless and intuitive interface for accessing training modules, viewing their dashboard, and interacting with the leaderboard. React's component-based architecture ensures a modular and scalable frontend design.
