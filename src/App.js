import './App.css';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from './components/ui/Card.js';
import { Alert, AlertDescription } from './components/ui/Alert.js';

const MineEmissionCalculator = () => {
  const [formData, setFormData] = useState({
    activityRate: 1000,
    emissionFactor: 0.8,
    reductionEfficiency: 20,
    trees: 473,
    energy: 52,
    solar: 14
  });
  const [emissions, setEmissions] = useState(null);
  const [rating, setRating] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const calculateEmissions = () => {
    const { activityRate, emissionFactor, reductionEfficiency } = formData;
    const calculatedEmissions = activityRate * emissionFactor * (1 - reductionEfficiency / 100);
    setEmissions(calculatedEmissions.toFixed(2));

    if (calculatedEmissions < 500) setRating('★★★★★');
    else if (calculatedEmissions < 1000) setRating('★★★★☆');
    else if (calculatedEmissions < 1500) setRating('★★★☆☆');
    else if (calculatedEmissions < 2000) setRating('★★☆☆☆');
    else setRating('★☆☆☆☆');

    setSubmitted(true);
  };

  const InputField = ({ name, label, min, max, step }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-white mb-1">{label}</label>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={formData[name]}
        onChange={(e) => setFormData({ ...formData, [name]: Number(e.target.value) })}
        className="w-full p-2 border border-gray-300 rounded-md bg-gray-700 text-white"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 animate-pulse">Mine Emission Calculator</h1>
        
        {!submitted ? (
          <Card className="bg-gray-800 border-gray-700 shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105">
            <CardHeader>
              <h2 className="text-2xl font-semibold text-blue-300">Input Parameters</h2>
            </CardHeader>
            <CardContent>
              <InputField name="activityRate" label="Activity Rate (A) - e.g., tons of coal produced" min={0} step={100} />
              <InputField name="emissionFactor" label="Emission Factor (EF) - e.g., tons CO2 per ton of coal" min={0} max={1} step={0.1} />
              <InputField name="reductionEfficiency" label="Overall Emission Reduction Efficiency (ER) in %" min={0} max={100} step={1} />
              <InputField name="trees" label="Number of trees in campus" min={0} step={1} />
              <InputField name="energy" label="Electrical energy used (kW/day)" min={0} step={1} />
              <InputField name="solar" label="Solar power generated (kW/day)" min={0} step={1} />
              <button 
                onClick={calculateEmissions}
                className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Calculate Emissions
              </button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6 animate-fadeIn">
            <Alert className="bg-blue-800 border-blue-700">
              <AlertDescription>
                <p className="text-5xl font-bold text-center mb-4 animate-scaleIn">{rating}</p>
                <p className="text-2xl font-semibold text-center">Emissions: {emissions} tons CO2</p>
              </AlertDescription>
            </Alert>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Trees Planted', value: formData.trees, icon: '🌳' },
                { label: 'Energy Used', value: `${formData.energy} kW/day`, icon: '⚡' },
                { label: 'Solar Generated', value: `${formData.solar} kW/day`, icon: '☀️' },
              ].map((item, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 animate-slideInFromBottom" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="text-center">
                    <p className="text-4xl mb-2">{item.icon}</p>
                    <p className="text-xl font-semibold">{item.label}</p>
                    <p className="text-lg">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-gray-800 border-gray-700 animate-slideInFromBottom" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <h2 className="text-2xl font-semibold text-blue-300">Consultation Services</h2>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Remote Consultation', price: 'Rs. 5000', description: 'Expert analysis via video conference' },
                  { title: 'On-Site Assessment', price: 'Rs. 1,00,000', description: 'Comprehensive on-location evaluation' },
                ].map((service, index) => (
                  <div key={index} className="text-center p-4 bg-gray-700 rounded-lg animate-fadeIn" style={{animationDelay: `${0.5 + index * 0.1}s`}}>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="mb-2">{service.description}</p>
                    <p className="font-bold mb-2">{service.price}</p>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">Book Now</button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}
        
        <p className="text-center text-sm text-gray-400 mt-6 animate-fadeIn" style={{animationDelay: '0.7s'}}>
          In collaboration with Indian Oil Corporation Limited (IOCL)
        </p>
      </div>
    </div>
  );
};

export default MineEmissionCalculator;

// export default App;
