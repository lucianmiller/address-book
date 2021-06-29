// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = assignId();
  this.contacts[contact.firstName] = contact; 
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
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