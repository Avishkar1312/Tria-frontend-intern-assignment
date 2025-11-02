import React, { useState } from 'react';
import { Search, UserPlus, Users } from 'lucide-react';
import initialContacts from './data/contacts.js';
import ContactList from './components/ContactList.jsx';
import AddContactForm from './components/AddContactForm.jsx';
import ContactDetailModal from './components/ContactDetailModal.jsx';

function App() {

  const [contacts, setContacts] = useState(initialContacts); //state to hold contatcs
  const [searchTerm, setSearchTerm] = useState("");

  const [showAddForm, setShowAddForm] = useState(false); //checks if adding form is open
  const [selectedContact, setSelectedContact] = useState(null); //state holdiong the selected contact for detail

  // Filtering for search
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  //advanced serach options for better UX experince
  const [sortBy, setSortBy] = useState('name');
  let sortedAndFilteredContacts = [...filteredContacts]; // Make a copy
  if (sortBy === 'name') {
    sortedAndFilteredContacts.sort((a, b) => a.name.localeCompare(b.name));

  } else if (sortBy === 'recent') {
    sortedAndFilteredContacts.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

  } else if (sortBy === 'favorites') {
    sortedAndFilteredContacts.sort((a, b) =>
      (a.is_favorite === b.is_favorite) ? 0 : a.is_favorite ? -1 : 1
    );
  }
  function handle_select_contact(contact) {
    setSelectedContact(contact);
  }

  // handling favourites over here
  function handle_toggle_favourite(contactToToggle) {
    const newContacts = contacts.map(contact => {
      if (contact.id === contactToToggle.id) {
        return { ...contact, is_favorite: !contact.is_favorite };
      }
      return contact;
    });
    setContacts(newContacts);
  }
  //new contcat handling
  function handle_add_contact(newContact) {
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    handle_close_modals();
  }
  function handle_delete_contact(idToDelete) {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      const newContacts = contacts.filter(contact => contact.id !== idToDelete);

      // master list
      setContacts(newContacts);
      handle_close_modals();
    }
  }
  //fucntion for editing contact
  function handle_edit_contact(contactToEdit) {
    alert("Edit featurewould be added along with the backend");
    console.log("Contact to edit", contactToEdit);
  }
 //for closing modasl
  function handle_close_modals() {
    setShowAddForm(false);
    setSelectedContact(null);
  }
  return (
    // styles ofr bg
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header Section --- */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
              <Users className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Contacts</h1>
              <p className="text-gray-600">
                {filteredContacts.length} contact{filteredContacts.length !== 1 ? 's' : ''} {/* number of fav contacts */}
              </p>
            </div>
          </div>
        </div>

        {/* Search and add */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">

          {/* Search bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 transition shadow-sm"
            />
          </div>

          {/* Adding Contact Button */}
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium transition-all hover:shadow-lg"
          >
            <UserPlus className="w-5 h-5" />
            <span className="hidden sm:inline">Add Contact</span>
          </button>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm font-medium text-gray-600">Sort by:</span>
          <button
            onClick={() => setSortBy('name')}
            className={sortBy === 'name' ? 'bg-blue-600 text-white px-3 py-1 rounded-lg' : 'bg-white text-gray-700 px-3 py-1 rounded-lg border'}
          >
            Name
          </button>
          <button
            onClick={() => setSortBy('recent')}
            className={sortBy === 'recent' ? 'bg-blue-600 text-white px-3 py-1 rounded-lg' : 'bg-white text-gray-700 px-3 py-1 rounded-lg border'}
          >
            Recent
          </button>
          <button
            onClick={() => setSortBy('favorites')}
            className={sortBy === 'favorites' ? 'bg-blue-600 text-white px-3 py-1 rounded-lg' : 'bg-white text-gray-700 px-3 py-1 rounded-lg border'}
          >
            Favorites ({contacts.filter(contact => contact.is_favorite).length})  {/* displaying the number of fav contacts */}
          </button>
        </div>
        {/* Contact List */}
        <ContactList
          contacts={sortedAndFilteredContacts}
          onSelectContact={handle_select_contact}
          onToggleFavorite={handle_toggle_favourite}
        />

        {showAddForm && (
          <AddContactForm
            onClose={handle_close_modals}
            onAddContact={handle_add_contact}
          />
        )}
        
        {selectedContact && (
          <ContactDetailModal
            contact={selectedContact}
            onClose={handle_close_modals}
            onEdit={handle_edit_contact}    
            onDelete={handle_delete_contact}
          />
        )} 

      </div>
    </div>
  );
}

export default App;