// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts[contact.firstName] = contact;
}

// Business Logic for Contacts ----------
function Contact(firstName, lastName, phoneNumber) {
  this.firsName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firsName + " " + this.lastName;
}