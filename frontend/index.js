document.addEventListener('DOMContentLoaded', function() {
    // Function to render contacts
    function renderContacts(contacts) {
        const contactsList = document.getElementById('contactsList');
        contactsList.innerHTML = '';
        contacts.forEach(contact => {
            const contactItem = document.createElement('li');
            contactItem.classList.add('contactItem');
            contactItem.textContent = contact.name; // Replace with actual contact name
            contactsList.appendChild(contactItem);
        });
    }

    // Sample contacts data (replace with actual implementation)
    const contacts = [
        { name: 'John Doe', unread: true, awaitingReply: false, needsReply: false },
        { name: 'Jane Smith', unread: false, awaitingReply: true, needsReply: false },
        { name: 'Prashant Kad', unread: false, awaitingReply: true, needsReply: false },
        { name: 'sonu kad', unread: false, awaitingReply: true, needsReply: false }
        // Add more contacts here
    ];

    renderContacts(contacts);

    // Event listeners for filter buttons
    document.getElementById('allChatsBtn').addEventListener('click', function() {
        renderContacts(contacts); // Assuming allChats is an array containing all contacts
    });

    document.getElementById('unreadChatsBtn').addEventListener('click', function() {
        const unreadChats = contacts.filter(contact => contact.unread);
        renderContacts(unreadChats);
    });

    document.getElementById('awaitingReplyBtn').addEventListener('click', function() {
        const awaitingReplyChats = contacts.filter(contact => contact.awaitingReply);
        renderContacts(awaitingReplyChats);
    });

    document.getElementById('needsReplyBtn').addEventListener('click', function() {
        const needsReplyChats = contacts.filter(contact => contact.needsReply);
        renderContacts(needsReplyChats);
    });

    // Event listener for creating custom filter
    document.getElementById('createFilterBtn').addEventListener('click', function() {
        const filterName = document.getElementById('filterNameInput').value;
        // You need to implement logic to create a custom filter
        // For example, you can prompt the user to select contacts for the filter
        const customFilterContacts = prompt("Enter contacts for this filter (comma separated)");
        const customFilterContactsArray = customFilterContacts.split(",");
        const customFilter = contacts.filter(contact => customFilterContactsArray.includes(contact.name));
        renderContacts(customFilter);
    });
});
