import React from 'react';
import ContactCard from "./ContactCard.jsx";
import { User } from 'lucide-react'; 




function ContactList({ contacts, onSelectContact, onToggleFavorite }) {

    // empty state
    if (contacts.length === 0) {
        return (
            <div className="text-center py-16 border-t border-gray-200">
                <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No contacts found</h3>
                <p className="text-gray-500">Try adjusting your search or add a new contact.</p>
            </div>
        );
    }

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 border-t border-gray-200 pt-6">
            {contacts.map((contact) => (
                <ContactCard
                    key={contact.id}
                    contact={contact} 
                    onSelectContact={onSelectContact} 
                    onToggleFavorite={onToggleFavorite} 
                />
            ))}
        </div>
    );
}

export default ContactList;