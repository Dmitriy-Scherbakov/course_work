
async function sendClientToServer(clientObj, id) {
 try {
  let clientId;
  let method;

  if (id) {
    clientId = id;
    method = 'PATCH';
  } else {
    clientId = '';
    method = 'POST';
  }

  const response = await fetch(`http://localhost:3000/api/clients/${clientId}`, {
    method: method,
    body: JSON.stringify(clientObj)
  });

  ShowErrorMessage(response.status);
 } catch (error) {
  console.log(error)
 }
};

async function getClientsFromServer() {
  const response = await fetch('http://localhost:3000/api/clients', {
    method: 'GET'
  });

  const result = await response.json();
  return result;
};

async function delClient(id) {
  await fetch(`http://localhost:3000/api/clients/${id}`, {
    method: 'DELETE',
  });
}

async function searchClientsOnServer(value) {
  const response = await fetch(`http://localhost:3000/api/clients?search=${value}`, {
    method: 'GET'
  });
  const result = await response.json();
  return result;
};

function createModalAdd() {
  const modalWrapper = document.createElement('div');
  const modal = document.createElement('div');
  const btnClose = document.createElement('button');
  const svgBtnClose = `<svg width="29" height="29" viewbox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd"
    d="M22.2333 7.73333L21.2667 6.76666L14.5 13.5334L7.7333 6.7667L6.76664 7.73336L13.5333 14.5L6.76666 21.2667L7.73333 22.2333L14.5 15.4667L21.2666 22.2334L22.2333 21.2667L15.4666 14.5L22.2333 7.73333Z"
    fill="#B0B0B0" />
  </svg>`;
  const modalTitle = document.createElement('h4');
  const form = document.createElement('form');
  const topFieldset = document.createElement('fieldset');
  const surnameLabel = document.createElement('label');
  const surnameInput = document.createElement('input');
  const surnameDescr = document.createElement('span');
  const surnameDescrStar = document.createElement('span');
  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');
  const nameDescr = document.createElement('span');
  const nameDescrStar = document.createElement('span');
  const lastnameLabel = document.createElement('label');
  const lastnameInput = document.createElement('input');
  const lastnameDescr = document.createElement('span');
  const bottomFieldset = document.createElement('fieldset');
  const btnAddContact = document.createElement('button');
  const btnAddContactSvg = ` <svg width="14" height="14" viewbox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7.00001 3.66665C6.63334 3.66665 6.33334 3.96665 6.33334 4.33331V6.33331H4.33334C3.96668 6.33331 3.66668 6.63331 3.66668 6.99998C3.66668 7.36665 3.96668 7.66665 4.33334 7.66665H6.33334V9.66665C6.33334 10.0333 6.63334 10.3333 7.00001 10.3333C7.36668 10.3333 7.66668 10.0333 7.66668 9.66665V7.66665H9.66668C10.0333 7.66665 10.3333 7.36665 10.3333 6.99998C10.3333 6.63331 10.0333 6.33331 9.66668 6.33331H7.66668V4.33331C7.66668 3.96665 7.36668 3.66665 7.00001 3.66665ZM7.00001 0.333313C3.32001 0.333313 0.333344 3.31998 0.333344 6.99998C0.333344 10.68 3.32001 13.6666 7.00001 13.6666C10.68 13.6666 13.6667 10.68 13.6667 6.99998C13.6667 3.31998 10.68 0.333313 7.00001 0.333313ZM7.00001 12.3333C4.06001 12.3333 1.66668 9.93998 1.66668 6.99998C1.66668 4.05998 4.06001 1.66665 7.00001 1.66665C9.94001 1.66665 12.3333 4.05998 12.3333 6.99998C12.3333 9.93998 9.94001 12.3333 7.00001 12.3333Z"
    fill="#9873FF" />
  </svg>Добавить контакт`;
  const errorContainer = document.createElement('div');
  const btnSave = document.createElement('button');
  const btnCancel = document.createElement('button');

  modalWrapper.classList = 'clients__modal-wrapper';
  modal.classList = 'clients-modal modal-add';
  btnClose.classList = 'btn-close-modal'
  modalTitle.classList = 'clients-modal__title modal-add__title';
  form.classList = 'clients-modal__form';
  topFieldset.classList = 'clients-modal__top-fieldset top-fieldset';
  surnameLabel.classList = 'top-fieldset__form-label';
  surnameInput.classList = 'top-fieldset__input modal__surname';
  surnameDescr.classList = 'top-fieldset__input-descr';
  surnameDescrStar.classList = 'top-fieldset__input-descr-star';
  nameLabel.classList = 'top-fieldset__form-label';
  nameInput.classList = 'top-fieldset__input modal__name';
  nameDescr.classList = 'top-fieldset__input-descr';
  nameDescrStar.classList = 'top-fieldset__input-descr-star';
  lastnameLabel.classList = 'top-fieldset__form-label';
  lastnameInput.classList = 'top-fieldset__input modal__lastname';
  lastnameDescr.classList = 'top-fieldset__input-descr';
  bottomFieldset.classList = 'clients-modal__bottom-fieldset bottom-fieldset';
  btnAddContact.classList = 'bottom-fieldset__btn-add';
  errorContainer.classList = 'clients-modal__error-container';
  btnSave.classList = 'clients-modal__btn-save btn-type-1';
  btnCancel.classList = 'clients-modal__btn-cancel btn-type-2';

  const surnameFirstLetter = formatNameDelay(surnameInput);
  const nameFirstLetter = formatNameDelay(nameInput);
  const lastnameFirstLetter = formatNameDelay(lastnameInput);

  surnameInput.addEventListener('input', surnameFirstLetter);
  nameInput.addEventListener('input', nameFirstLetter);
  lastnameInput.addEventListener('input', lastnameFirstLetter);

  btnClose.innerHTML = svgBtnClose;
  modalTitle.textContent = 'Новый клиент';
  surnameInput.setAttribute('type', 'text');
  surnameInput.setAttribute('name', 'surname');
  surnameDescr.textContent = 'Фамилия';
  surnameDescrStar.textContent = '*';
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameDescr.textContent = 'Имя';
  nameDescrStar.textContent = '*';
  lastnameInput.setAttribute('type', 'text');
  lastnameInput.setAttribute('name', 'name');
  lastnameDescr.textContent = 'Отчество';
  btnAddContact.innerHTML = btnAddContactSvg;
  btnSave.textContent = 'Сохранить';
  btnCancel.textContent = 'Отмена';

  surnameDescr.append(surnameDescrStar)
  surnameLabel.append(surnameInput, surnameDescr);
  nameDescr.append(nameDescrStar)
  nameLabel.append(nameInput, nameDescr);
  lastnameLabel.append(lastnameInput, lastnameDescr);
  topFieldset.append(surnameLabel, nameLabel, lastnameLabel);
  bottomFieldset.append(btnAddContact)
  form.append(topFieldset, bottomFieldset, errorContainer, btnSave, btnCancel);
  modal.append(btnClose, modalTitle, form)
  modalWrapper.append(modal);

  const inputs = [surnameInput, nameInput, lastnameInput];
  animateModalPlaceholders(inputs);

  btnAddContact.addEventListener('click', (e) => {
    e.preventDefault()
    addContactFieldToModal(bottomFieldset, btnAddContact);
  });

  btnSave.addEventListener('click', (e) => {
    e.preventDefault();
    createClientObj();
  });

  closeModal(modalWrapper, btnClose, btnCancel);

  return modalWrapper;
};

function createModalChange(clientObj) {
  const modalWrapper = document.createElement('div');
  const modal = document.createElement('div');
  const btnClose = document.createElement('button');
  const svgBtnClose = `<svg width="29" height="29" viewbox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd"
    d="M22.2333 7.73333L21.2667 6.76666L14.5 13.5334L7.7333 6.7667L6.76664 7.73336L13.5333 14.5L6.76666 21.2667L7.73333 22.2333L14.5 15.4667L21.2666 22.2334L22.2333 21.2667L15.4666 14.5L22.2333 7.73333Z"
    fill="#B0B0B0" />
  </svg>`;
  const modalTitle = document.createElement('h4');
  const clientId = document.createElement('span');
  const form = document.createElement('form');
  const topFieldset = document.createElement('fieldset');
  const surnameLabel = document.createElement('label');
  const surnameInput = document.createElement('input');
  const surnameDescr = document.createElement('span');
  const surnameDescrStar = document.createElement('span');
  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');
  const nameDescr = document.createElement('span');
  const nameDescrStar = document.createElement('span');
  const lastnameLabel = document.createElement('label');
  const lastnameInput = document.createElement('input');
  const lastnameDescr = document.createElement('span');
  const bottomFieldset = document.createElement('fieldset');
  const btnAddContact = document.createElement('button');
  const btnAddContactSvg = ` <svg width="14" height="14" viewbox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7.00001 3.66665C6.63334 3.66665 6.33334 3.96665 6.33334 4.33331V6.33331H4.33334C3.96668 6.33331 3.66668 6.63331 3.66668 6.99998C3.66668 7.36665 3.96668 7.66665 4.33334 7.66665H6.33334V9.66665C6.33334 10.0333 6.63334 10.3333 7.00001 10.3333C7.36668 10.3333 7.66668 10.0333 7.66668 9.66665V7.66665H9.66668C10.0333 7.66665 10.3333 7.36665 10.3333 6.99998C10.3333 6.63331 10.0333 6.33331 9.66668 6.33331H7.66668V4.33331C7.66668 3.96665 7.36668 3.66665 7.00001 3.66665ZM7.00001 0.333313C3.32001 0.333313 0.333344 3.31998 0.333344 6.99998C0.333344 10.68 3.32001 13.6666 7.00001 13.6666C10.68 13.6666 13.6667 10.68 13.6667 6.99998C13.6667 3.31998 10.68 0.333313 7.00001 0.333313ZM7.00001 12.3333C4.06001 12.3333 1.66668 9.93998 1.66668 6.99998C1.66668 4.05998 4.06001 1.66665 7.00001 1.66665C9.94001 1.66665 12.3333 4.05998 12.3333 6.99998C12.3333 9.93998 9.94001 12.3333 7.00001 12.3333Z"
    fill="#9873FF" />
  </svg>Добавить контакт`;
  const errorContainer = document.createElement('div');
  const btnSave = document.createElement('button');
  const btnDel = document.createElement('button');

  modalWrapper.classList = 'clients__modal-wrapper';
  modal.classList = 'clients-modal modal-add';
  btnClose.classList = 'btn-close-modal'
  modalTitle.classList = 'clients-modal__title modal-add__title';
  clientId.classList = 'clients-modal__title-id'
  form.classList = 'clients-modal__form';
  topFieldset.classList = 'clients-modal__top-fieldset top-fieldset';
  surnameLabel.classList = 'top-fieldset__form-label';
  surnameInput.classList = 'top-fieldset__input modal__surname';
  surnameDescr.classList = 'top-fieldset__input-descr';
  surnameDescrStar.classList = 'top-fieldset__input-descr-star';
  nameLabel.classList = 'top-fieldset__form-label';
  nameInput.classList = 'top-fieldset__input modal__name';
  nameDescr.classList = 'top-fieldset__input-descr';
  nameDescrStar.classList = 'top-fieldset__input-descr-star';
  lastnameLabel.classList = 'top-fieldset__form-label';
  lastnameInput.classList = 'top-fieldset__input modal__lastname';
  lastnameDescr.classList = 'top-fieldset__input-descr';
  bottomFieldset.classList = 'clients-modal__bottom-fieldset bottom-fieldset';
  btnAddContact.classList = 'bottom-fieldset__btn-add';
  errorContainer.classList = 'clients-modal__error-container';
  btnSave.classList = 'clients-modal__btn-save btn-type-1';
  btnDel.classList = 'clients-modal__btn-del btn-type-2';

  const surnameFirstLetter = formatNameDelay(surnameInput);
  const nameFirstLetter = formatNameDelay(nameInput);
  const lastnameFirstLetter = formatNameDelay(lastnameInput);

  surnameInput.addEventListener('input', surnameFirstLetter);
  nameInput.addEventListener('input', nameFirstLetter);
  lastnameInput.addEventListener('input', lastnameFirstLetter);

  btnClose.innerHTML = svgBtnClose;
  clientId.textContent = `ID: ${clientObj.id.substr(0, 6)}`;
  modalTitle.textContent = 'Изменить данные';
  form.setAttribute('action', 'submit');
  surnameInput.setAttribute('type', 'text');
  surnameInput.setAttribute('name', 'surname');
  surnameInput.value = clientObj.surname;
  surnameDescr.textContent = 'Фамилия';
  surnameDescrStar.textContent = '*';
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('name', 'name');
  nameInput.value = clientObj.name;
  nameDescr.textContent = 'Имя';
  nameDescrStar.textContent = '*';
  lastnameInput.setAttribute('type', 'text');
  lastnameInput.setAttribute('name', 'name');
  lastnameInput.value = clientObj.lastName;
  lastnameDescr.textContent = 'Отчество';
  btnAddContact.innerHTML = btnAddContactSvg;
  btnSave.textContent = 'Сохранить';
  btnDel.textContent = 'Удалить клиента';

  modalTitle.append(clientId);
  surnameDescr.append(surnameDescrStar);
  surnameLabel.append(surnameInput, surnameDescr);
  nameDescr.append(nameDescrStar);
  nameLabel.append(nameInput, nameDescr);
  lastnameLabel.append(lastnameInput, lastnameDescr);
  topFieldset.append(surnameLabel, nameLabel, lastnameLabel);
  bottomFieldset.append(btnAddContact);
  form.append(topFieldset, bottomFieldset, errorContainer, btnSave, btnDel);
  modal.append(btnClose, modalTitle, form);
  modalWrapper.append(modal);

  const inputs = [surnameInput, nameInput, lastnameInput]
  animateModalPlaceholders(inputs);

  for (let i = 0; i < clientObj.contacts.length; i++) {
    let contact = clientObj.contacts[i]
    addContactFieldToModal(bottomFieldset, btnAddContact, contact)
  }

  btnAddContact.addEventListener('click', (e) => {
    e.preventDefault();
    addContactFieldToModal(bottomFieldset, btnAddContact);
  });

  const id = clientObj.id;
  btnSave.addEventListener('click', (e) => {
    e.preventDefault();

    createClientObj(id);

  });

  btnDel.addEventListener('click', (e) => {
    e.preventDefault();
    const main = document.querySelector('.main');
    const modalDel = createModalDel(id);
    main.append(modalDel);
  });

  openModalDel(clientObj, btnDel)

  closeModal(modalWrapper, btnClose, btnDel);

  return modalWrapper;
};

function createModalDel(id) {
  const modalWrapper = document.createElement('div');
  const modal = document.createElement('div');
  const btnClose = document.createElement('button');
  const btnCloseSvg = `<svg width="29" height="29" viewbox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd"
    d="M22.2333 7.73333L21.2667 6.76666L14.5 13.5334L7.7333 6.7667L6.76664 7.73336L13.5333 14.5L6.76666 21.2667L7.73333 22.2333L14.5 15.4667L21.2666 22.2334L22.2333 21.2667L15.4666 14.5L22.2333 7.73333Z"
    fill="#B0B0B0" />
  </svg>`;
  const modalTitle = document.createElement('h4');
  const modalDescr = document.createElement('span');
  const btnDel = document.createElement('button');
  const btnCancel = document.createElement('button');

  modalWrapper.classList = 'clients__modal-wrapper';
  modal.classList = 'clients__modal clients-modal clients-modal-del';
  btnClose.classList = 'btn-close-modal';
  modalTitle.classList = 'clients-modal-del__title';
  modalDescr.classList = 'clients-modal-del__descr';
  btnDel.classList = 'clients-modal-del__btn-del btn-type-1';
  btnCancel.classList = 'clients-modal__btn-cancel btn-type-2';

  btnClose.innerHTML = btnCloseSvg;
  modalTitle.textContent = 'Удалить клиента';
  modalDescr.textContent = 'Вы действительно хотите удалить данного клиента?';
  btnDel.textContent = 'Удалить';
  btnCancel.textContent = 'Отмена';

  modal.append(btnClose, modalTitle, modalDescr, btnDel, btnCancel);
  modalWrapper.append(modal);

  btnDel.addEventListener('click', (e) => {
    e.preventDefault();
    createBtnPreloader(btnDel, '#fff', 'btn-modal-preloader');

    delClient(id);
  })

  closeModal(modalWrapper, btnClose, btnCancel);

  return modalWrapper;
};

function openModalAdd() {
  const btnAddClient = document.querySelector('.clients__btn-add-client');
  const main = document.querySelector('.main');

  btnAddClient.addEventListener('click', () => {
    const modalWrapper = createModalAdd();
    const modal = modalWrapper.querySelector('.clients-modal');

    main.append(modalWrapper);
    setTimeout(() => {
      modalWrapper.classList.add('active');
      modal.classList.add('active');
    });
  });
};

function openModalChange(clientObj, btnChange) {
  btnChange.addEventListener('click', async (e) => {
    e.preventDefault();
    const main = document.querySelector('.main');
    const clientsArr = await getClientsFromServer();
    const renewedClientObj = clientsArr.find(client => client.id === clientObj.id)

    const modalChangeWrapper = createModalChange(renewedClientObj);
    const modalChange = modalChangeWrapper.querySelector('.clients-modal')

    main.append(modalChangeWrapper);

    setTimeout(() => {
      modalChangeWrapper.classList.add('active');
      modalChange.classList.add('active');

      closePreloader('.btn-preloader')
    }, 100);
  });
}

function openModalDel(clientObj, btnDel) {
  btnDel.addEventListener('click', (e) => {
    e.preventDefault();
    const main = document.querySelector('.main');
    const modalDelWrapper = createModalDel(clientObj.id);
    const modalDel = modalDelWrapper.querySelector('.clients-modal');
    main.append(modalDelWrapper);

    setTimeout(() => {
      modalDelWrapper.classList.add('active');
      modalDel.classList.add('active');
    });
  });
}

function closeModal(modalWrapper, btnClose, btnCancel) {
  btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = modalWrapper.querySelector('.clients-modal');
    modal.classList.remove('active');
    modalWrapper.classList.remove('active');
    setTimeout(() => {
      modalWrapper.remove();
    }, 300)
  });

  btnCancel.addEventListener('click', (e) => {
    e.preventDefault();
    const modal = modalWrapper.querySelector('.clients-modal');
    modal.classList.remove('active');
    modalWrapper.classList.remove('active');
    setTimeout(() => {
      modalWrapper.remove();
    }, 300)
  });

  modalWrapper.addEventListener('click', (e) => {
    if (e.target == modalWrapper) {
      const modal = modalWrapper.querySelector('.clients-modal');
      modal.classList.remove('active');
      modalWrapper.classList.remove('active');
      setTimeout(() => {
        modalWrapper.remove();
      }, 300)
    };
  });
};

function createClientItem(clientObj) {
  const tr = document.createElement('tr');
  const tdId = document.createElement('td');
  const tdFullname = document.createElement('td');
  const tdCreateDate = document.createElement('td');
  const tageTimeCreateDate = document.createElement('time');
  const createDateDate = document.createElement('span');
  const createDateTime = document.createElement('span');
  const tdChangeDate = document.createElement('td');
  const tageTimeChangeDate = document.createElement('time');
  const changeDateDate = document.createElement('span');
  const changeDateTime = document.createElement('span');
  const tdContacts = document.createElement('td');
  const contactsList = document.createElement('ul');
  const tdActions = document.createElement('td');
  const actionsBtnsWrwpper = document.createElement('div');
  const btnChange = document.createElement('button');
  const svgBtnChange = `<svg width="13" height="13" viewbox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M0 10.5V13H2.5L9.87333 5.62662L7.37333 3.12662L0 10.5ZM11.8067 3.69329C12.0667 3.43329 12.0667 3.01329 11.8067 2.75329L10.2467 1.19329C9.98667 0.933291 9.56667 0.933291 9.30667 1.19329L8.08667 2.41329L10.5867 4.91329L11.8067 3.69329Z"
    fill="#9873FF" />
  </svg>`
  const btnDel = document.createElement('button');
  const svgBtnDel = `<svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z"
    fill="#F06A4D" />
  </svg>`

  tr.classList = 'table-body__tr table-tr';
  tdId.classList = 'table-body__td cell td-id';
  tdFullname.classList = 'table-body__td cell td-fullname';
  tdCreateDate.classList = 'table-body__td cell td-create-date';
  tageTimeCreateDate.classList = 'td-create-date__full-date';
  createDateDate.classList = 'td-create-date__date table-body-date';
  createDateTime.classList = 'td-create-date__time table-body-time';
  tdChangeDate.classList = 'table-body__td cell td-change-date';
  tageTimeChangeDate.classList = 'td-change-date__full-date';
  changeDateDate.classList = 'td-change-date__date table-body-date';
  changeDateTime.classList = 'td-change-date__time table-body-time';
  tdContacts.classList = 'table-body__td cell td-contacts';
  contactsList.classList = 'td-contacts__list'
  tdActions.classList = 'table-body__td cell td-actions';
  actionsBtnsWrwpper.classList = 'td-actions__btns-wrapper'
  btnChange.classList = 'td-actions__btn td-actions__btn-change';
  btnDel.classList = 'td-actions__btn td-actions__btn-del';

  tdId.textContent = clientObj.id.substring(0, 6);
  const clientSurname = clientObj.surname;
  const clientName = clientObj.name;
  const clientLastname = clientObj.lastName;
  tdFullname.textContent = `${clientSurname} ${clientName} ${clientLastname}`.trim();
  const formattedFullCreateDate = formatDate(clientObj.createdAt);
  createDateDate.textContent = formattedFullCreateDate.formattedDate;
  createDateTime.textContent = formattedFullCreateDate.formattedTime;
  const formattedFullChangeDate = formatDate(clientObj.updatedAt);
  changeDateDate.textContent = formattedFullChangeDate.formattedDate
  changeDateTime.textContent = formattedFullChangeDate.formattedTime;
  tageTimeCreateDate.setAttribute('datetime', clientObj.createdAt);
  tageTimeChangeDate.setAttribute('datetime', clientObj.updatedAt);


  tageTimeCreateDate.append(createDateDate, createDateTime);
  tdCreateDate.append(tageTimeCreateDate);
  tageTimeChangeDate.append(changeDateDate, changeDateTime);
  tdChangeDate.append(tageTimeChangeDate);
  const contactsItems = createTooltip(clientObj);
  contactsItems.forEach(item => {
    contactsList.append(item);
  })

  tdContacts.append(contactsList);
  btnChange.innerHTML = svgBtnChange + ' Изменить';
  btnDel.innerHTML = svgBtnDel + ' Удалить';
  actionsBtnsWrwpper.append(btnChange, btnDel)
  tdActions.append(actionsBtnsWrwpper);

  tr.append(tdId, tdFullname, tdCreateDate, tdChangeDate, tdContacts, tdActions);

  btnChange.addEventListener('click', () => {
    createBtnPreloader(btnChange, '#9873FF', 'btn-preloader')
  });

  openModalChange(clientObj, btnChange);
  openModalDel(clientObj, btnDel);

  return tr;
}

function createContactField(bottomFieldset, contact) {
  let optionTypeArray = [
    'Телефон',
    'Email',
    'Vk',
    'Facebook',
    'Другое'
  ];

  const contactField = document.createElement('div');
  const select = document.createElement('select');
  const inputWrapper = document.createElement('div');
  const input = document.createElement('input');
  const btnClear = document.createElement('button');

  if (contact) {
    const incomeType = contact.type;
    const index = optionTypeArray.findIndex(type => type === incomeType);
    const cutType = optionTypeArray.splice(index, 1);
    optionTypeArray.unshift(cutType[0]);
    input.value = contact.value;
  };

  for (let i = 0; i < optionTypeArray.length; i++) {
    const option = document.createElement('option');
    option.textContent = optionTypeArray[i];
    select.append(option);
  };

  input.setAttribute('type', 'text');
  input.placeholder = 'Введите данные контакта';

  btnClear.innerHTML = `
    <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
    d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z"
    fill="#B0B0B0" />
    </svg>`
  contactField.classList.add('bottom-fieldset__contact-field');
  select.classList.add('bottom-fieldset__select');
  inputWrapper.classList.add('bottom-fieldset__input-wrapper');
  input.classList.add('bottom-fieldset__input');
  btnClear.classList.add('bottom-fieldset__btn-clear');
  inputWrapper.append(input, btnClear);
  contactField.append(select, inputWrapper);

  if (input.value) {
    btnClear.classList.add('visible');
  } else btnClear.classList.remove('visible');

  btnClear.addEventListener('click', (e) => {
    e.preventDefault()
    const allContacts = bottomFieldset.querySelectorAll('.bottom-fieldset__contact-field');
    const btnAdd = document.querySelector('.bottom-fieldset__btn-add');

    if (allContacts.length < 11) {
      btnAdd.classList.remove('hidden')
    }
    if (allContacts.length < 2) bottomFieldset.classList.remove('active');
    contactField.remove();
  });

  return {
    contactField,
    input
  }
};

function createChoices(contactField) {
  const select = contactField.querySelector('.bottom-fieldset__select');
  const choices = new Choices(select, {
    position: 'bottom',
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
  });
};

function addContactFieldToModal(bottomFieldset, btnAddContact, contact) {
  const createdContactField = createContactField(bottomFieldset, contact);
  const contactField = createdContactField.contactField;

  bottomFieldset.prepend(contactField);
  createChoices(contactField);
  const allContacts = bottomFieldset.querySelectorAll('.bottom-fieldset__contact-field');

  if (allContacts) {
    bottomFieldset.classList.add('active');
  };

  if (allContacts.length > 9) {
    btnAddContact.classList.add('hidden');
  }
};

function formatDate(incomDate) {
  const fullDate = new Date(incomDate);

  const addZero = (num) => {
    if (num < 10) {
      return '0' + num;
    } else return num;
  };

  const day = addZero(fullDate.getDate());
  const month = addZero(fullDate.getMonth() + 1);
  const year = fullDate.getFullYear();
  const hour = addZero(fullDate.getHours());
  const minute = addZero(fullDate.getMinutes());

  const formattedDate = `${day}.${month}.${year}`;
  const formattedTime = `${hour}:${minute}`;

  return { formattedTime, formattedDate };
};

function createClientObj(id) {
  let clientObj = {};
  let clientContactsArr = [];

  const surnameInput = document.querySelector('.modal__surname');
  const nameInput = document.querySelector('.modal__name');
  const lastnameInput = document.querySelector('.modal__lastname');
  const contactTypes = document.querySelectorAll('.is-selected');
  const contactValuesInputs = document.querySelectorAll('.bottom-fieldset__input');
  contactTypes.forEach((contactType, index) => {
    clientContactsArr.push({
      type: contactType.textContent,
      value: contactValuesInputs[index].value
    });
  });

  const findEmptyContact = () => {
    return clientContactsArr.find(obj => obj.value == '')
  }

  if (!surnameInput.value) {
    showValidateMessage(surnameInput, 'Поле "Фамилия" обязательно к заполнению');
  } if (!nameInput.value) {
    showValidateMessage(nameInput, 'Поле "Имя" обязательно к заполнению');
  } if (findEmptyContact()) {
    contactValuesInputs.forEach(input => {
      if (input.value == '') {
        showValidateMessage(input, 'Введите данные контакта или удалите поле');
      };
    });
  } if (surnameInput.value && nameInput.value && !findEmptyContact()) {

    const btnSave = document.querySelector('.clients-modal__btn-save');
    createBtnPreloader(btnSave, '#fff', 'btn-modal-preloader');

    clientObj.surname = surnameInput.value;
    clientObj.name = nameInput.value;
    clientObj.lastName = lastnameInput.value;
    clientObj.contacts = clientContactsArr;
    sendClientToServer(clientObj, id);


  }
};

function chooseContactsSvg() {
  const svgVk = `<svg width="16" height="16" viewbox="0 0 16 16"  fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.7">
  <path
  d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z"
  fill="#9873FF" />
  </g>
  </svg>`;
  const svgFb = `<svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.7">
    <path
      d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z"
  fill="#9873FF" />`;
  const svgPhone = `<svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.7">
    <circle cx="8" cy="8" r="8" fill="#9873FF" />
    <path
      d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z"
      fill="white" />
  </g>
  </svg>`;
  const svgMail = `<svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
    d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z"
    fill="#9873FF" />
  </svg>`;
  const svgOther = `<svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
    d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z"
    fill="#9873FF" />
  </svg>`;

  return {
    vk: svgVk,
    fb: svgFb,
    phone: svgPhone,
    mail: svgMail,
    other: svgOther
  };
};

function createTooltip(clientObj) {
  let contactItems = [];
  clientObj.contacts.map(contact => {
    const contactsSvg = chooseContactsSvg();
    const contactItem = document.createElement('li');
    const tooltip = document.createElement('div');
    contactItem.classList = 'td-contacts__item';
    tooltip.classList = 'td-contacts__tooltip';
    tooltip.textContent = `${contact.type}: ${contact.value}`;

    if (contact.type === 'Телефон') {
      contactItem.classList.add('td-contacts__phone');
      contactItem.innerHTML = contactsSvg.phone;
    } else if (contact.type === 'Email') {
      contactItem.classList.add('td-contacts__mail');
      contactItem.innerHTML = contactsSvg.mail;
    } else if (contact.type === 'Vk') {
      contactItem.classList.add('td-contacts__vk');
      contactItem.innerHTML = contactsSvg.vk;
    } else if (contact.type === 'Facebook') {
      contactItem.classList.add('td-contacts__fb');
      contactItem.innerHTML = contactsSvg.fb;
    } else if (contact.type === 'Другое') {
      contactItem.classList.add('td-contacts__other-contact');
      contactItem.innerHTML = contactsSvg.other;
    };
    contactItem.append(tooltip);
    contactItems.push(contactItem);
  });


  if (contactItems.length > 5) {
    for (let i = 4; i < contactItems.length; i++) {
      contactItems[i].classList.add('hidden');
    };
    const btnMore = document.createElement('button');
    const contactItem = document.createElement('li');
    contactItem.classList = 'td-contacts__item';
    btnMore.classList = 'btn-show-contacts';
    btnMore.textContent = `+${contactItems.length - 4}`;

    btnMore.addEventListener('click', () => {
      contactItems.forEach(item => {
        item.classList.remove('hidden');
        btnMore.remove();
      });
    });

    contactItem.append(btnMore);
    contactItems.push(contactItem);

  }
  return contactItems;
};

function sortArr(clientsArr, typeSort, sortingDirection) {
  let elem1;
  let elem2;

  const sortedArr = clientsArr.sort((a, b) => {
    if (typeSort === 'id') {
      elem1 = a.id;
      elem2 = b.id;
    } else if (typeSort === 'fullname') {
      elem1 = `${a.surname} ${a.name} ${a.lastName}`.toLowerCase();
      elem2 = `${b.surname} ${b.name} ${b.lastName}`.toLowerCase();
    } else if (typeSort === 'createDate') {
      elem1 = new Date(a.createdAt);
      elem2 = new Date(b.createdAt);
    } else if (typeSort === 'changeDate') {
      elem1 = new Date(a.updatedAt);
      elem2 = new Date(b.updatedAt);
    };

    if (sortingDirection === 'down') {
      [elem1, elem2] = [elem2, elem1];
    }

    if (elem1 < elem2) return -1;
  });

  return sortedArr
}

function sortTable(arr) {
  const btnsSortArr = document.querySelectorAll('.table-head__btn');

  const changeDirection = () => {
    let direction = 'up';
    return () => {
      if (direction === 'up') {
        direction = 'down';
        return 'up'
      } else if (direction === 'down') {
        direction = 'up';
        return 'down'
      };
    }
  };

  btnsSortArr.forEach(btn => {

    const direction = changeDirection();

    btn.addEventListener('click', () => {
      const currentItems = document.querySelectorAll('.table-body__tr');
      currentItems.forEach(item => {
        item.remove();
      });


      const arrow = btn.querySelector('.table-head__btn-arrow');

      const typeSort = btn.dataset.sorting;
      const direct = direction();

      if (direct === 'up') {
        arrow.classList.remove('up');
      } else arrow.classList.add('up');

      const sortedArr = sortArr(arr, typeSort, direct);

      addClientToTable(sortedArr);
    });
  });

}

async function createSortedTable(typeSort, sortingDirection) {
  const input = document.querySelector('.header__input');

  let clientsArr;

  if (!input.value) {
    clientsArr = await getClientsFromServer();

  } else {
    clientsArr = await searchClientsOnServer(input.value);
  }

  const sortedArr = sortArr(clientsArr, typeSort, sortingDirection)

  addClientToTable(sortedArr);
  sortTable(clientsArr)
  closePreloader('.table-preloader-wrapper');
};

function addClientToTable(clientsArr) {
  const tbody = document.querySelector('.table-body');
  clientsArr.forEach(clientObj => {
    const clientItem = createClientItem(clientObj);
    tbody.append(clientItem);
  });
};

function animateModalPlaceholders(inputs) {
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.value != '') {
        input.nextElementSibling.classList.add('active');
      } else input.nextElementSibling.classList.remove('active');
    });

    if (input.value != '') {
      input.nextElementSibling.classList.add('active');
    }
  });
};

function formatNameDelay(input) {
  let timeout = null;

  const formatName = () => {
    input.value = input.value.replace(/[^a-zа-яё/g-]/gi, '');
    input.value = (input.value.substring(0, 1).toUpperCase() +
      input.value.substring(1).toLowerCase());
  };

  return () => {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(() => formatName(input), 300)
  };
}

function displayFoundClients() {
  const input = document.querySelector('.header__input');

  let timeout;

  const displayClients = () => {
    const currentClientsItems = document.querySelectorAll('.table-body__tr');
    currentClientsItems.forEach(item => {
      item.remove();
    });
    createTablePreloader()
    createSortedTable('fullname', 'up');
  };

  const timeoutDisplayClients = () => {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(displayClients, 300)
  }

  input.addEventListener('input', timeoutDisplayClients);
}

function showValidateMessage(input, message) {
  const btnSave = document.querySelector('.clients-modal__btn-save');
  const bottomFieldset = document.querySelector('.clients-modal__bottom-fieldset');
  const errorContainer = bottomFieldset.nextElementSibling;
  const errorMessage = document.createElement('span');

  const createErrorMessage = () => {
    input.classList.add('error');
    errorMessage.classList = 'bottom-fieldset__error';
    errorMessage.textContent = message;
    bottomFieldset.classList.add('error');
    errorContainer.append(errorMessage);
    btnSave.disabled = true;
  };
  createErrorMessage();

  const removeErrorMessage = () => {
    input.classList.remove('error')
    errorMessage.remove();
    const amountErrorMessages = errorContainer.children.length;

    if (amountErrorMessages === 0) {
      bottomFieldset.classList.remove('error');
      btnSave.disabled = false;
    };
  };

  input.addEventListener('input', () => {
    if (input.value) {
      removeErrorMessage()
    } else createErrorMessage()

  });

  input.nextElementSibling.addEventListener('click', removeErrorMessage);
}

function ShowErrorMessage(responseStatus) {
  let errorMessage;
  const bottomFieldset = document.querySelector('.clients-modal__bottom-fieldset');
  const blockscreen = document.querySelector('.block-screen');
  const btnSave = document.querySelector('.clients-modal__btn-save');
  const errorContainer = bottomFieldset.nextElementSibling;
  const errorMessageSpan = document.createElement('span');

  btnSave.disabled = true;
  errorMessageSpan.classList = 'bottom-fieldset__error';
  bottomFieldset.classList.add('error');
  errorContainer.append(errorMessageSpan);
  blockscreen.remove()

  if (responseStatus >= 200 && responseStatus <= 201) {
    return;
  } else if (responseStatus === 404) {
    errorMessage = `Ошибка ${responseStatus}.Страница не найдена`
  } else if (responseStatus >= 500 && responseStatus <= 599) {
    errorMessage = `Ошибка ${responseStatus}.Cервер столкнулся с неожиданной ошибкой`;
  } else if (responseStatus === 422) {
    errorMessage = `Ошибка ${responseStatus}.Сервер не может обработать запрос`;
  } else {
    errorMessage = `Ошибка ${responseStatus}.Что-то пошло не так`;
  }

  errorMessageSpan.textContent = errorMessage;
}

function createPreloaderBlockScreen() {
  const body = document.querySelector('body');
  const blockScreen = document.createElement('div');
  blockScreen.classList = 'block-screen';
  body.append(blockScreen);
}

function createBtnPreloader(btn, preloaderColor, preloaderClass) {
  createPreloaderBlockScreen()

  const preloader = document.createElement('div');
  preloader.innerHTML = `<svg width="15" height="15" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 20C2 29.941 10.059 38 20 38C29.941 38 38 29.941 38 20C38 10.059 29.941 2 20 2C17.6755 2 15.454 2.4405 13.414 3.243" stroke="${preloaderColor}" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
  </svg>`;
  preloader.classList = preloaderClass;
  btn.append(preloader);
}

function createTablePreloader() {
  createPreloaderBlockScreen();

  const table = document.querySelector('.clients-table');
  const preloader = document.createElement('svg');
  preloader.classList = 'table-preloader';
  preloader.innerHTML = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 20C2 29.941 10.059 38 20 38C29.941 38 38 29.941 38 20C38 10.059 29.941 2 20 2C17.6755 2 15.454 2.4405 13.414 3.243" stroke="#9873FF" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round"/>
  </svg>`;

  const preloaderWrapper = document.createElement('div');
  preloaderWrapper.classList = 'table-preloader-wrapper';

  preloaderWrapper.append(preloader);
  table.append(preloaderWrapper);
};

function closePreloader(preloaderClass) {
  const preloader = document.querySelector(`${preloaderClass}`);
  const blockScreen = document.querySelector('.block-screen');
  blockScreen.remove();
  preloader.remove();
}

function launchApp() {
  createTablePreloader();
  displayFoundClients();
  openModalAdd();
  createSortedTable('id', 'up');
}

launchApp();
