window.Webflow?.push(async () => {
function validateForm(data) {
  removeErrorStyles()

  const requiredFields = ['name', 'phone-number', 'reservation-time', 'privacy'];
  const missingFields = [];

  for (const field of requiredFields) {
    if (field === 'reservation-time') {
        if(!document.querySelector('.selected')) missingFields.push(field);
    } else if (!data[field] || data[field].trim() === '') {
      missingFields.push(field);
    }
  }

  if (missingFields.length > 0) {
    return {
      isValid: false,
      missingFields,
    };
  } else {
    return {
      isValid: true,
    };
  }
}

function handleMissingFields(missingFields) {
  for (const field of missingFields) {
    const input = document.querySelector(`[name="${field}"]`) || document.querySelector(`#${field}`);
    const errorMessage = document.querySelector(`.error-${field}`);
    errorMessage.style.display = 'block';
    input.classList.add('error');
  }
}

function removeErrorStyles() {
  const errorMessages = document.querySelectorAll('.error-message');
  for (const errorMessage of errorMessages) {
    errorMessage.style.display = 'none';
  }

  const errorInputs = document.querySelectorAll('.error');
  for (const errorInput of errorInputs) {
    errorInput.classList.remove('error');
  }
}

const dropdownContents = document.querySelectorAll('.dropdown-content');
const dropdownValues = [document.querySelector('.selectbox-value'), document.querySelector('.selectbox-value-copy')]

for (const content of dropdownContents) {
  content.addEventListener('click', () => {
    handleDropdownSelect(content);
  });
}

function handleDropdownSelect(content) {
  $('.w-dropdown').trigger("w-close")
  
  dropdownValues.forEach(dropdownValue => {
    if(dropdownValue) {
        dropdownValue.innerHTML = content.innerHTML
        dropdownValue.classList.add('selected');
    }
    
  })
}


const reservationApplyBtn = document.querySelector('.reservation-act:not(.mobile)')
const reservationApplyBtnMobile = document.querySelector('.reservation-act.mobile')

if(reservationApplyBtn) reservationApplyBtn.addEventListener('click', (e) => insertReservationData(e, 'pc'))
if(reservationApplyBtnMobile) reservationApplyBtnMobile.addEventListener('click', (e) => insertReservationData(e, 'mobile'))


async function insertReservationData(e, platform) {
    e.preventDefault();
    let reservationForm = document.querySelector(`[data-name="reservation-modal-${platform}"]`);
    let reservationformData = new FormData(reservationForm);
    let FormDataEntries = Object.fromEntries(reservationformData.entries());

    const validationResult = validateForm(FormDataEntries);

    if (validationResult.isValid) {
        console.log("Form is valid! Submitting data...");
        handleInsertCounsel(FormDataEntries)
    } else {
        handleMissingFields(validationResult.missingFields)
        console.error("Form is invalid. Missing fields:", validationResult.missingFields);
    }
    
}


async function handleInsertCounsel(FormDataEntries) {
    let data = {
        name: FormDataEntries.name,
        phone: FormDataEntries["phone-number"],
        counsel_time: document.querySelector('.selected').innerText,
        marketingUseYn: FormDataEntries["marketingUseYn"] ? (FormDataEntries["marketingUseYn"] === "on" ? "Y" : "N") : "",
        marketingCollectYn: FormDataEntries["marketingCollectYn"] ? (FormDataEntries["marketingCollectYn"] === "on" ? "Y" : "N") : "",
    }

    let res = await SkApi.insertCounsel(data);
    console.log(res);
}

if(document.querySelector('.reservation-wrapper')) {
    function handleResize() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 1445) {
            document.querySelector('.reservation-wrapper').style.display = 'none';
            document.querySelector('.reservation-wrapper-tab').style.display = 'flex';
        } else {
            document.querySelector('.reservation-wrapper').style.display = 'flex';
            document.querySelector('.reservation-wrapper-tab').style.display = 'none';
        }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
}
})