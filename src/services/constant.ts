export const constants = {
    apiEndPoints: {
      getUserLogin : 'login',
      uploadImage : 'uploadImage',
      get_all_contract_list : 'get_all_contract_list',
      get_contract_count_dashboard: 'get_contract_count_dashboard',
      remove_contract_by_id: 'remove_contract_by_id'
    },
    dateformat: {
        generalDateFormat: 'yyyy/MM/dd HH:mm:ss',
        sendDateFormat: 'yyyy-MM-dd HH:mm:ss',
        sendDateOnlyFormat: 'yyyy-MM-dd',
        receiveDateFormat: 'dd-MM-yyyy HH:mm:ss',
        receiveDateOnlyFormat: 'dd-MM-yyyy',
        shortTimeFormatt: 'hh:mm a',
        shortDateTimeFormatt: 'dd/MM/yyyy hh:mm a',
        recDateFormatt: 'dd/MM/yyyy'
      },
      RegEx: {
        Email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
        Mobile: /(?!0+$)^\+?[\d -]+\-?[\d]$/,
        dateFormatt: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
      },
};
