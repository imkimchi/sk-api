window.Webflow?.push(async () => {
    const estimateOptionPrice0 = {
        doorGuard: {
            min: 15000,
            max: 18750
        },
        viewGuardMini: {
            min: 6600,
            max: 6600
        },
        innerGuard: {
            min: 15000,
            max: 18750
        },
    }
    
    //출동경비
    const estimateOptionPrice1 = {
        perPrice: 3000,
        default: {
            min: 53000,
            max: 60000,
        },
        mobileCard: {
            min: 58000,
            max: 72000
        },
        generalCard: {
            min: 60000,
            max: 74000,
        },
        fingerPrint: {
            min: 71000,
            max: 83000,
        },
        faceRecognition: {
            min: 77000,
            max: 88000,
        },
    }
    
    //CCTV
    const estimateOptionPrice2 = {
        viewGuard: {
            min: 26000,
            max: 44000,
            over5Default: {
                min: 62000,
                max: 94000 
            },
            over10Default: {
                min: 103000,
                max: 136000
            },
            perPrice: {
                min: 5000,
                max: 8000,
            }
        },
        viewGuardAi: {
            min: 29000,
            max: 44000,
            over5Default: {
                min: 84400,
                max: 122000 
            },
            over10Default: {
                min: 140000,
                max: 186000
            },
            perPrice: {
                min: 9000,
                max: 14000
            }
        },
        viewGuardCloud: {
            min: 10000,
            max: 25000,
    
            perPrice: {
                min: 10000,
                max: 20000
            }
        },
    }
    
    
    const entryTypeMap = {
        'Mobile': 'mobileCard',
        'Card': 'generalCard',
        'Fingerprint': 'fingerPrint',
        'FaceRecognition': 'faceRecognition'
    }
    
    const cctvTypeMap = {
        'Viewguard': 'viewGuard',
        'Viewguard AI': 'viewGuardAi',
        'Viewguard Cloud': 'viewGuardCloud'
    }
    
    const residentialTypeMap = {
        'Door Guard': 'doorGuard',
        'ViewGuardMini': 'viewGuardMini',
        'Inner Guard': 'innerGuard'
    }
    
    let currentTab
    let doorCount
    let windowCount
    
    let entryType
    let cctvCount
    let cctvType
    
    let tab5Type
    let tab5Extra
    
    let dispatchClicked
    let cctvClicked
    let doorGuardClicked
    let viewGuardMiniClicked
    let innerGuardChecked
    
    function initializeValues() {
        console.log("INITIAL..")
    
        currentTab = $('.w-tab-link.w--current').attr('data-w-tab').replace('Tab ', '')
        doorCount = $('.w--tab-active').find('#door-count').text()
        windowCount = $('.w--tab-active').find('#window-count').text()
    
        entryType = getEntryType()
        cctvCount = $('.w--tab-active').find('#cctv-count').text()
        cctvType = getCCTVType()
    
        tab5Type = getResidentialType() // doorGuard, innerGuard
        tab5Extra = $('input[name="viewguardmini"]').is(':checked') ? 'viewGuardMini' : null
    
        dispatchClicked = $('.w--tab-active').find('input[data-name="Dispatch"]').eq(0).is(":checked")
        cctvClicked = $('.w--tab-active').find('input[data-name="CCTV Installment"]').eq(0).is(":checked")
        doorGuardClicked = $('#Door-Guard').is(":checked")
        viewGuardMiniClicked = $('#viewguardmini').is(":checked") 
        innerGuardChecked = $('#Inner-Guard').is(":checked")
    }
    
    function getEntryType() {
        var entranceTypeRadios = $('.w--tab-active').find('input[name="Entrance-Type"]');
        var selectedValue = null;
    
        
        entranceTypeRadios.length && entranceTypeRadios.each(function(i, radio) {
            if (radio.checked) {
                selectedValue = radio.value;
                return;
            }
        });
    
        return entryTypeMap[selectedValue] || null;
    }
    
    function getCCTVType () {
        var cctvTypeRadios = $('.w--tab-active').find('input[name="CCTV-Type"]');
        var selectedValue = null;
        cctvTypeRadios.length && cctvTypeRadios.each(function(i, radio) {
            if (radio.checked) {
                selectedValue = radio.value;
                return;
            }
        });
    
        console.log("cctvTypeMap[selectedValue] ", cctvTypeMap[selectedValue], selectedValue)
    
    
        return cctvTypeMap[selectedValue] || null;
    }
    
    function getResidentialType() {
        var residentialTypeRadios = $('.w--tab-active').find('input[name="Caps-Home-Service"]');
        var selectedValue = null;
    
        residentialTypeRadios.length && residentialTypeRadios.each(function(i, radio) {
            if (radio.checked) {
                selectedValue = radio.value;
                return;
            }
        });
    
        return residentialTypeMap[selectedValue] || null;
    }
    
    const zeroOptionTextMap = {
        doorGuard: '캡스홈 도어가드',
        viewGuardMini: '뷰가드미니',
        innerGuard: '캡스홈 이너가드'
    
    
    }
    const firstOptionTextMap = {
        mobileCard: '모바일카드',
        generalCard: '일반카드',
        fingerPrint: '지문인식',
        faceRecognition: '얼굴인식'
    }
    
    const secondOptionTextMap = {
        viewGuard: '캡스 뷰가드',
        viewGuardAi: '캡스 뷰가드 AI',
        viewGuardCloud: '캡스 뷰가드 클라우드'
    }
    
    function showElements() {
        initializeValues()
        hideAllBoxes()
    
        
    
        if(currentTab === '5') {  
            showResidential()
        } else {
            console.log(dispatchClicked, cctvClicked, entryType, cctvType)
            if(!dispatchClicked && !cctvClicked) {
                alert('서비스를 선택해주세요.')
                return;
            } else if (!entryType && !cctvType) {
                if(!entryType) {
                    alert('출입방식을 선택해주세요.')
                    return;
                } else {
                    alert('CCTV 종류를 선택해주세요.')
                    return;
                }
            }

            const textContent = getEstimationText()    
            if(dispatchClicked) showDispatch(textContent['first'])
            if(cctvClicked) showCctv(textContent['second'])
        }
    
        showTotal()
    }
    
    
    function hideAllBoxes () {
        $('.estimation-dynamic-box').css('display', 'none')
    }
    
    function showResidential () {
        $('#estimation-container-residential').css('display', 'flex')
        if(viewGuardMiniClicked) $('#estimation-container-viewguardmini').css('display', 'flex')
        if(innerGuardChecked) $('#estimation-container-innerguard').css('display', 'flex')
        if(doorGuardClicked) $('#estimation-container-doorguard').css('display', 'flex')
    }
    
    function showTotal () {
        const estimation = getEstimation()
        $('#estimation-totalMin').text(`${estimation.min.toLocaleString()}원`)
        $('#estimation-totalMax').text(`${estimation.max.toLocaleString()}원`)
    }
    
    
    function getPriceText (data) { 
        return `${data.min.toLocaleString()}원 ~ ${data.max.toLocaleString()}원`
    }
    
    function showDispatch(textContent) {
        $('#estimation-container-dispatch').css('display', 'flex')
        $('#estimation-text-entryType').text(firstOptionTextMap[entryType])
        $('#estimation-text-doorCount').text(textContent.doorCount)
        $('#estimation-text-windowCount').text(textContent.windowCount)
        $('#estimation-price-dispatch').text(getPriceText(calculateFirstOption()))
    }
    
    function showCctv(textContent) {
        $('#estimation-container-cctv').css('display', 'flex')
        $('#estimation-text-cctvType').text(secondOptionTextMap[cctvType])
        $('#estimation-text-cctvCount').text(textContent.cctvCount)
        $('#estimation-price-cctv').text(getPriceText(calculateSecondOption()))
    }
    
    
    function getEstimation() {
        if(currentTab === '5') { 
          return calculateResidential()
        }
    
        const firstPrice = dispatchClicked ? calculateFirstOption() : {min: 0, max: 0}
        const secondPrice = cctvClicked ? calculateSecondOption() : {min: 0, max: 0}
    
        return {
            min: firstPrice.min + secondPrice.min,
            max: firstPrice.max + secondPrice.max
        }
    }
    
    function getEstimationText() {
        const first = dispatchClicked ? {
            price : calculateFirstOption(),
            entryType : firstOptionTextMap[entryType],
            doorCount : `출입문 ${doorCount}개`,
            windowCount :`창문 ${windowCount}개`,
        } : {
            price: 0,
            entryType: '',
            doorCount: '',
            windowCount: ''
        }
    
        const second = cctvClicked ? {
            price : calculateSecondOption(),
            cctvType : secondOptionTextMap[cctvType],
            cctvCount : `${cctvCount}개`
        } : {
            price: 0,
            cctvType: '',
            cctvCount: ''
        }
    
    
        return {
            first,
            second,
        }
    }
    
    
    function calculateResidential () {
        let initMin = estimateOptionPrice0[tab5Type].min
        let initMax = estimateOptionPrice0[tab5Type].max
        let extraPrice = tab5Extra ? estimateOptionPrice0[tab5Extra].min : 0
    
        return {
            min: initMin + extraPrice,
            max: initMax + extraPrice
        }
    }
    
    
    function calculateFirstOption () {
        const initMin = estimateOptionPrice1[entryType].min
        const initMax = estimateOptionPrice1[entryType].max
        const perPrice = estimateOptionPrice1.perPrice * (parseInt(doorCount) + parseInt(windowCount))
    
        return {
            min: initMin + perPrice,
            max: initMax + perPrice
        }
    }
    
    function calculateSecondOption () {
        let initMin = estimateOptionPrice2[cctvType].min
        let initMax = estimateOptionPrice2[cctvType].max
    
        if((cctvCount >= 5 && cctvCount < 10) && cctvType !== 'viewGuardCloud') {
            initMin = estimateOptionPrice2[cctvType].over5Default.min
            initMax = estimateOptionPrice2[cctvType].over5Default.max
        } else if ((cctvCount >= 10) && cctvType !== 'viewGuardCloud') {
            initMin = estimateOptionPrice2[cctvType].over10Default.min
            initMax = estimateOptionPrice2[cctvType].over10Default.max
        }
    
        let perPriceMin;
        let perPriceMax;
    
        if(cctvCount >=5 && cctvCount < 10) {
            perPriceMin = estimateOptionPrice2[cctvType].perPrice.min * (cctvCount % 5)
            perPriceMax = estimateOptionPrice2[cctvType].perPrice.max * (cctvCount % 5)
        } else if (cctvCount >= 10) {
            perPriceMin = estimateOptionPrice2[cctvType].perPrice.min * (cctvCount % 10)
            perPriceMax = estimateOptionPrice2[cctvType].perPrice.max * (cctvCount % 10)
        } else {
            perPriceMin = estimateOptionPrice2[cctvType].perPrice.min * cctvCount
            perPriceMax = estimateOptionPrice2[cctvType].perPrice.max * cctvCount
        }
    
        return {
            min: initMin + perPriceMin,
            max: initMax + perPriceMax
        }
    }
    
    $('#submit-estimation-request').click(() => showElements())
})
