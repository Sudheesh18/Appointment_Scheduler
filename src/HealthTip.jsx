import React from 'react';

const HealthTip = ({ specialty }) => {
  const healthTips = {
    Dentist: [
      "Brush your teeth twice a day with fluoride toothpaste",
      "Floss daily to remove plaque from between teeth",
      "Limit sugary foods and drinks to prevent tooth decay",
      "Replace your toothbrush every 3-4 months"
    ],
    Cardiologist: [
      "Exercise regularly to keep your heart healthy",
      "Eat a heart-healthy diet rich in fruits, vegetables, and whole grains",
      "Manage stress effectively to reduce heart disease risk",
      "Know your cholesterol and blood pressure numbers"
    ],
    Neurologist: [
      "Stay mentally active with puzzles and learning new skills",
      "Get adequate sleep to support brain health",
      "Stay hydrated for optimal brain function",
      "Protect your head during physical activities"
    ],
    Psychiatrist: [
      "Practice mindfulness and meditation to reduce stress",
      "Maintain social connections to support mental health",
      "Establish a regular sleep schedule",
      "Seek help early when feeling overwhelmed"
    ],
    Pulmonologist: [
      "Avoid smoking and secondhand smoke",
      "Practice deep breathing exercises daily",
      "Use air purifiers to reduce indoor air pollutants",
      "Get vaccinated against respiratory infections"
    ],
    Pediatrician: [
      "Ensure children get regular exercise and outdoor play",
      "Keep vaccinations up to date",
      "Establish consistent sleep routines",
      "Limit screen time for better development"
    ]
  };

  // Get a random tip for the given specialty
  const getRandomTip = () => {
    const tips = healthTips[specialty] || [];
    if (tips.length === 0) return "No health tips available";
    const randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
  };

  return (
    <div className="health-tip">
      <h3>Health Tip</h3>
      <p>{getRandomTip()}</p>
    </div>
  );
};

export default HealthTip;