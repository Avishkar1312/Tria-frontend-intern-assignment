import React from 'react';
import { X, Mail, Phone, Building2, Calendar, FileText, User } from 'lucide-react';



function ContactDetailModal({ contact, onClose, onEdit, onDelete }) {
    //format of the date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">

                
                {/*Modal Header*/}
                <div className="sticky top-0 bg-gray-50 border-b border-gray-100 px-6 py-6 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                            <User className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">{contact.name}</h2>
                            {contact.company && (
                                <p className="text-blue-600">{contact.company}</p>
                            )}
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center"
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* contact details*/}
                <div className="p-6 space-y-4">
                    {contact.phone && (
                        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                            <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium text-gray-500 mb-1">Phone</p>
                                <p className="text-gray-900">{contact.phone}</p>
                            </div>
                        </div>
                    )}

                    {contact.email && (
                        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                            <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium text-gray-500 mb-1">Email</p>
                                <p className="text-gray-900 break-all">{contact.email}</p>
                            </div>
                        </div>
                    )}

                    {contact.notes && (
                        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                            <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium text-gray-500 mb-1">Notes</p>
                                <p className="text-gray-900 text-sm">{contact.notes}</p>
                            </div>
                        </div>
                    )}

                    {/* Date Created */}
                    <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs font-medium text-gray-500 mb-1">Date Added</p>
                        <p className="text-sm text-gray-900 flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            {formatDate(contact.created_at)}
                        </p>
                    </div>

                    {/* Modal Footer*/}
                    <div className="flex gap-3 pt-4 border-t border-gray-100">
                        <button
                            onClick={() => onEdit(contact)} // Calls the function from App.jsx
                            className="flex-1 px-4 py-2 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 font-medium"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => onDelete(contact.id)} // Calls the function from App.jsx
                            className="flex-1 px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 font-medium"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactDetailModal;