# Tria Contact List
* **Live Demo:** `https://tria-frontend-23b0765.netlify.app/`

---

## UX Features

* View and search contacts in a responsive grid
* Sort contacts by **Name**, **Recent**, or **Favorites**
* **Create**, **Read**, and **Delete** contacts
* Add/Delete functionality handled via pop-up **modals**
* View contact details in a separate modal
* Mark contacts as "Favorites"

---

## How to Run Locally

1.  `git clone https://github.com/Avishkar1312/Tria-frontend-intern-assignment`
2.  `cd tria-contact-list`
3.  `npm install`
4.  `npm start`

---

## Design Choices & Libraries

* **React:** Used for building the component-based UI.
* **Tailwind CSS:** Used for all styling to allow for rapid, responsive, utility-first design.
* **Lucide-React:** Used for clean, lightweight icons.
* **State Management:** All app state (the contact list, search term, etc.) is "lifted up" and managed in `App.jsx`.
* **Data:** Data is hardcoded in a local `.js` file, as per the assignment requirements.
* **"Edit" Feature:** This is intentionally left as a placeholder (`alert`) as this would be later added along with the backend
