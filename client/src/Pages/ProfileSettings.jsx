import React, { useState } from 'react';

const ProfileSettings = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [password, setPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call to update user info)
    console.log('Form submitted:', { name, email, password });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, you'd apply the theme change to the entire app here
  };

  const handleDeleteAccount = () => {
    // Handle account deletion (e.g., API call to delete user account)
    console.log('Account deleted');
    setShowDeleteModal(false);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>

        {/* Account Settings */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1">New Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded text-gray-900"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Save Changes
            </button>
          </form>
        </section>

        {/* Preferences */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Preferences</h2>
          <div className="flex items-center">
            <span className="mr-2">Theme:</span>
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}
            >
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>
        </section>

        {/* Account Actions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Account Actions</h2>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete Account
          </button>
        </section>

        {/* Delete Account Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg text-gray-900">
              <h3 className="text-xl font-bold mb-4">Confirm Account Deletion</h3>
              <p className="mb-4">Are you sure you want to delete your account? This action cannot be undone.</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteAccount}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSettings;

