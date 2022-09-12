/*global opener */
'use strict';
{
    const initData = JSON.parse(document.getElementById('django-admin-AddressPopup-response-constants').dataset.AddressPopupResponse);
    switch(initData.action) {
    case 'change':
        opener.dismissChangeRelatedObjectAddressPopup(window, initData.value, initData.obj, initData.new_value);
        break;
    case 'delete':
        opener.dismissDeleteRelatedObjectAddressPopup(window, initData.value);
        break;
    default:
        opener.dismissAddRelatedObjectAddressPopup(window, initData.value, initData.obj);
        break;
    }
}
