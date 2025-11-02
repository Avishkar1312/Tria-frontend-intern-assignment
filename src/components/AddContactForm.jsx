import React, { useState } from 'react';
import { X, UserPlus } from 'lucide-react';

function AddContactForm({ onClose, onAddContact }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        notes: '',
    });

    // input handler
    function handleChange(event) {
        const { name, value } = event.target;

        setFormData(prevData => ({
            ...prevData,  // old data
            [name]: value, 
        }));
    }


    function handleSubmit(event) {
        event.preventDefault();
        if (!formData.name) {
            alert('Name is required');
            return;
        }
        onAddContact({
            ...formData,
            id: Date.now(), //temp unique id
            is_favorite: false,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        });
        onClose();
    }

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">


                <div className="sticky top-0 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <UserPlus className="w-5 h-5 text-blue-600" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900">Add New Contact</h2>
                    </div>
                    <button
                        onClick={onClose} // function from App.jsx
                        className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Modal Form Body */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">

                    {/* Form fields */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name" 
                            id="name"
                            value={formData.name} 
                            onChange={handleChange} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Phone
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Form Footer*/}
                    <div className="flex gap-3 pt-4">
                        <button
                            type="button" 
                            onClick={onClose}
                            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                        >
                            Add Contact
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddContactForm;