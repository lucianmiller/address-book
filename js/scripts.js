// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
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