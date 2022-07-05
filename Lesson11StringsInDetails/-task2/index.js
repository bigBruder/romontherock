// Сортування телефонної книги масиву обєктів

const sortContacts = (contacts, isAsc) => {
  if (!Array.isArray(contacts)) {
    return null;
  }
  const result = contacts;
  contacts.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  if (isAsc === false) {
    contacts.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
  }
  return result;
};
