import {paymentOnepay} from './constants'
import {convertStr2URL} from './utils'

const generateParamsPayment = (dataOrder, ip, idOrder, amount, pickVpc) => {
  const reqParam = {
    AgainLink: paymentOnepay.BASE_URL,
    Title: 'HongHaoTravel',
    vpc_AccessCode: paymentOnepay.ACCESS_CODE,
    vpc_Amount: amount + '00',
    vpc_CardList: 'INTERNATIONAL',
    vpc_Command: 'pay',
    vpc_Currency: 'VND',
    vpc_Locale: 'en',
    vpc_MerchTxnRef: Math.floor(Date.now() / 1000) + 'honghao',
    vpc_Merchant: paymentOnepay.MERCHANT_ID,
    vpc_OrderInfo: dataOrder?.username,
    vpc_ReturnURL: paymentOnepay.BASE_URL + `/`,
    vpc_TicketNo: ip,
    vpc_Version: '2',
  }
  if (pickVpc) {
    const pickParams = {}
    for (const key in reqParam) {
      if (key.startsWith('vpc_') || key.startsWith('user_')) {
        pickParams[key] = reqParam[key]
      }
    }
    return convertStr2URL(pickParams)
  }

  return convertStr2URL(reqParam)
}

export {generateParamsPayment}
