// 9:21, 3/20

window.Webflow?.push(async () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
  const day = String(today.getDate()).padStart(2, '0'); // Add leading zero for single-digit days
  const formattedDate = `${year}년 ${month}월 ${day}일`;
  $('.response-text-date').text(`SK쉴더스 ${formattedDate}`)
  $('.text-116').eq(0).text(`SK쉴더스 ${formattedDate}`)

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

function handleMissingFields(missingFields, platform) {
  if(platform === 'pc') {
    missingFields.forEach(field => {
      $(`.alert.${field}`).css('display', 'flex');
    })
  } else {
    for (const field of missingFields) {
      const input = document.querySelector(`[name="${field}"]`) || document.querySelector(`#${field}`);
      const errorMessage = document.querySelector(`.error-${field}`);
      errorMessage.style.display = 'block';
      input.classList.add('error');
    }
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
const dropdownValues = [document.querySelector('.selectbox-value'), document.querySelector('.selectbox-value-copy'), document.querySelector('.selectbox-value-estimation-modal-dropdown')]

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
const reservationApplyBtnEstimation = document.querySelector('.reservation-act.estimation')

if(reservationApplyBtn) reservationApplyBtn.addEventListener('click', (e) => insertReservationData(e, 'pc'))
if(reservationApplyBtnMobile) reservationApplyBtnMobile.addEventListener('click', (e) => insertReservationData(e, 'mobile'))
if(reservationApplyBtnEstimation) reservationApplyBtnEstimation.addEventListener('click', (e) => insertReservationData(e, 'estimation'))


async function insertReservationData(e, platform) {
    e.preventDefault();
    $('.reservation-modal').css('display', 'none')
    $('.alert').css('display', 'none');

    let reservationForm = document.querySelector(`[data-name="reservation-modal-${platform}"]`);
    let reservationformData = new FormData(reservationForm);
    let FormDataEntries = Object.fromEntries(reservationformData.entries());

    const validationResult = validateForm(FormDataEntries);

    if (validationResult.isValid) {
        console.log("Form is valid! Submitting data...");
        handleInsertCounsel(FormDataEntries, platform)
    } else {
        handleMissingFields(validationResult.missingFields, platform)
        console.error("Form is invalid. Missing fields:", validationResult.missingFields);
    }
}

async function handleInsertCounsel(FormDataEntries, platform) {
  const marketingUseYnMap = platform === 'pc' ? FormDataEntries['marketingUseYn'] : FormDataEntries['consent-marketing-pii-2'] || FormDataEntries['consent-marketing-pii-3']
  const marketingCollectYnMap = platform === 'pc' ? FormDataEntries['marketingCollectYn'] : FormDataEntries['consent-remarketing-2'] || FormDataEntries['consent-remarketing-3']
  
  try {
    let data = {
      name: FormDataEntries.name,
      phone: FormDataEntries["phone-number"],
      counsel_time: document.querySelector('.selected').innerText,
      marketingUseYn: marketingUseYnMap ? (marketingUseYnMap === "on" ? "Y" : "N") : "",
      marketingCollectYn: marketingCollectYnMap ? (marketingCollectYnMap === "on" ? "Y" : "N") : "",
    }

    console.log("DATA", data, FormDataEntries)

    const checkedOnlyRequiredFields = data.marketingUseYn && data.marketingCollectYn
    if (checkedOnlyRequiredFields) {
      $('.response-all').css('display', 'flex');
    } else {
      $('.response-only-requirements').css('display', 'flex');
    }

    let res = await SkApi.insertCounsel(data);
    console.log(res)
  } catch (e) {
    console.error(`Req failed: ${e.message}`)
  }
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