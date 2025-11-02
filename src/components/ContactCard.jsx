import React from 'react';
import { User, Mail, Phone, Building2, Star, FileText } from 'lucide-react'; //importing icons

function ContactCard({ contact, onSelectContact, onToggleFavorite }) {
    // fcuntion to prevent propagation
    const handleFavouriteClick = (e) => {
        e.stopPropagation();
        onToggleFavorite(contact);
    };

    return (
        <div
            onClick={() => onSelectContact(contact)}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-200 hover:-translate-y-1 cursor-pointer group"
        >
            <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2">
                        <h3 className="text-lg font-semibold text-gray-900 truncate flex-1">
                            {contact.name}
                        </h3>

                        {/* Favorite Button */}
                        <button
                            onClick={handleFavouriteClick}
                            className="flex-shrink-0"
                        >
                            <Star
                                className={`w-5 h-5 ${contact.is_favorite
                                        ? 'fill-yellow-400 text-yellow-400'
                                        : 'text-gray-300 group-hover:text-yellow-300' 
                                    } transition-colors`}
                            />
                        </button>
                    </div>
                    {contact.email && (
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1.5">
                            <Mail className="w-4 h-4 flex-shrink-0 text-gray-400" />
                            <span className="truncate">{contact.email}</span>
                        </div>
                    )}

                    {contact.phone && (
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1.5">
                            <Phone className="w-4 h-4 flex-shrink-0 text-gray-400" />
                            <span>{contact.phone}</span>
                        </div>
                    )}

                    {contact.company && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Building2 className="w-4 h-4 flex-shrink-0 text-gray-400" />
                            <span className="truncate">{contact.company}</span>
                        </div>
                    )}

                    {contact.notes && (
                        <p className="mt-3 text-sm text-gray-500 line-clamp-2">
                            <FileText className="w-4 h-4 inline-block mr-2 text-gray-400" />
                            {contact.notes}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContactCard;