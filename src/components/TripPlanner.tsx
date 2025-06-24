import React, { useState } from 'react';
import { ArrowLeft, Plus, MapPin, Calendar, Clock, Trash2, Edit3, Save } from 'lucide-react';

interface TripPlannerProps {
  onBack: () => void;
}

const TripPlanner: React.FC<TripPlannerProps> = ({ onBack }) => {
  const [tripName, setTripName] = useState('My European Adventure');
  const [tripDates, setTripDates] = useState({
    start: '2024-06-15',
    end: '2024-06-30'
  });
  const [isEditing, setIsEditing] = useState(false);

  const [itinerary, setItinerary] = useState([
    {
      id: '1',
      date: '2024-06-15',
      city: 'Paris',
      country: 'France',
      activities: [
        { id: '1', time: '09:00', title: 'Visit Eiffel Tower', duration: '2 hours', type: 'attraction' },
        { id: '2', time: '14:00', title: 'Louvre Museum', duration: '3 hours', type: 'attraction' },
        { id: '3', time: '19:00', title: 'Seine River Cruise', duration: '1.5 hours', type: 'activity' }
      ]
    },
    {
      id: '2',
      date: '2024-06-16',
      city: 'Paris',
      country: 'France',
      activities: [
        { id: '4', time: '10:00', title: 'Montmartre & Sacré-Cœur', duration: '3 hours', type: 'attraction' },
        { id: '5', time: '15:00', title: 'Champs-Élysées Shopping', duration: '2 hours', type: 'shopping' },
        { id: '6', time: '20:00', title: 'French Cuisine Dinner', duration: '2 hours', type: 'dining' }
      ]
    },
    {
      id: '3',
      date: '2024-06-17',
      city: 'Rome',
      country: 'Italy',
      activities: [
        { id: '7', time: '09:00', title: 'Colosseum Tour', duration: '2.5 hours', type: 'attraction' },
        { id: '8', time: '14:00', title: 'Vatican Museums', duration: '3 hours', type: 'attraction' },
        { id: '9', time: '18:00', title: 'Trevi Fountain', duration: '1 hour', type: 'attraction' }
      ]
    }
  ]);

  const [newActivity, setNewActivity] = useState({
    time: '',
    title: '',
    duration: '',
    type: 'attraction'
  });

  const activityTypes = [
    { id: 'attraction', name: 'Attraction', color: 'bg-blue-100 text-blue-800' },
    { id: 'activity', name: 'Activity', color: 'bg-green-100 text-green-800' },
    { id: 'dining', name: 'Dining', color: 'bg-orange-100 text-orange-800' },
    { id: 'shopping', name: 'Shopping', color: 'bg-purple-100 text-purple-800' },
    { id: 'transport', name: 'Transport', color: 'bg-gray-100 text-gray-800' }
  ];

  const getActivityTypeStyle = (type: string) => {
    const typeConfig = activityTypes.find(t => t.id === type);
    return typeConfig ? typeConfig.color : 'bg-gray-100 text-gray-800';
  };

  const addActivity = (dayId: string) => {
    if (!newActivity.title || !newActivity.time)  return;

    const activity = {
      id: Date.now().toString(),
      ...newActivity
    };

    setItinerary(itinerary.map(day => 
      day.id === dayId 
        ? { ...day, activities: [...day.activities, activity].sort((a, b) => a.time.localeCompare(b.time)) }
        : day
    ));

    setNewActivity({ time: '', title: '', duration: '', type: 'attraction' });
  };

  const removeActivity = (dayId: string, activityId: string) => {
    setItinerary(itinerary.map(day => 
      day.id === dayId 
        ? { ...day, activities: day.activities.filter(activity => activity.id !== activityId) }
        : day
    ));
  };

  const getTripDuration = () => {
    const start = new Date(tripDates.start);
    const end = new Date(tripDates.end);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div>
              {isEditing ? (
                <input
                  type="text"
                  value={tripName}
                  onChange={(e) => setTripName(e.target.value)}
                  className="text-3xl font-bold text-gray-900 bg-transparent border-b-2 border-sky-500 focus:outline-none"
                />
              ) : (
                <h1 className="text-3xl font-bold text-gray-900">{tripName}</h1>
              )}
              <p className="text-gray-600 mt-1">
                {getTripDuration()} days • {new Date(tripDates.start).toLocaleDateString()} - {new Date(tripDates.end).toLocaleDateString()}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
            >
              {isEditing ? <Save className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
              <span>{isEditing ? 'Save' : 'Edit'}</span>
            </button>
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Share Trip
            </button>
          </div>
        </div>

        {/* Trip Overview */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 mb-1">{getTripDuration()}</div>
              <div className="text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">3</div>
              <div className="text-gray-600">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">
                {itinerary.reduce((total, day) => total + day.activities.length, 0)}
              </div>
              <div className="text-gray-600">Activities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">$2,500</div>
              <div className="text-gray-600">Est. Budget</div>
            </div>
          </div>
        </div>

        {/* Itinerary */}
        <div className="space-y-6">
          {itinerary.map((day, dayIndex) => (
            <div key={day.id} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Day Header */}
              <div className="bg-gradient-to-r from-sky-500 to-sky-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm opacity-90">Day {dayIndex + 1}</div>
                    <div className="text-2xl font-bold">
                      {new Date(day.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-lg font-semibold">
                      <MapPin className="w-5 h-5 mr-2" />
                      {day.city}, {day.country}
                    </div>
                    <div className="text-sm opacity-90">
                      {day.activities.length} activities planned
                    </div>
                  </div>
                </div>
              </div>

              {/* Activities */}
              <div className="p-6">
                <div className="space-y-4">
                  {day.activities.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl group hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-3 flex-1">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-gray-900">{activity.time}</div>
                          {activity.duration && (
                            <div className="text-xs text-gray-500 flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {activity.duration}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">
                            {activity.title}
                          </h4>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getActivityTypeStyle(activity.type)}`}>
                            {activityTypes.find(t => t.id === activity.type)?.name}
                          </span>
                        </div>
                      </div>
                      
                      {isEditing && (
                        <button
                          onClick={() => removeActivity(day.id, activity.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}

                  {/* Add Activity Form */}
                  {isEditing && (
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-4">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <input
                          type="time"
                          value={newActivity.time}
                          onChange={(e) => setNewActivity({ ...newActivity, time: e.target.value })}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        />
                        <input
                          type="text"
                          placeholder="Activity title"
                          value={newActivity.title}
                          onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        />
                        <input
                          type="text"
                          placeholder="Duration (e.g., 2 hours)"
                          value={newActivity.duration}
                          onChange={(e) => setNewActivity({ ...newActivity, duration: e.target.value })}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        />
                        <select
                          value={newActivity.type}
                          onChange={(e) => setNewActivity({ ...newActivity, type: e.target.value })}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                        >
                          {activityTypes.map((type) => (
                            <option key={type.id} value={type.id}>
                              {type.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button
                        onClick={() => addActivity(day.id)}
                        className="flex items-center space-x-2 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Activity</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Day Button */}
        {isEditing && (
          <div className="text-center mt-8">
            <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors mx-auto">
              <Plus className="w-5 h-5" />
              <span>Add New Day</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripPlanner;