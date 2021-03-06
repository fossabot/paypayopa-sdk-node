import { payPayRestSDK } from './lib/paypay-rest-sdk';

export = {
  Configure: payPayRestSDK.configure,
  QRCodeCreate: payPayRestSDK.qrCodeCreate,
  QRCodeDelete: payPayRestSDK.qrCodeDelete,
  GetCodePaymentDetails: payPayRestSDK.getCodePaymentDetails,
  GetPaymentDetails: payPayRestSDK.getPaymentDetails,
  PaymentCancel: payPayRestSDK.paymentCancel,
  PaymentAuthCapture: payPayRestSDK.paymentAuthCapture,
  PaymentAuthRevert: payPayRestSDK.paymentAuthRevert,
  PaymentRefund: payPayRestSDK.paymentRefund,
  PaymentPreauthorize: payPayRestSDK.paymentPreauthorize,
  GetRefundDetails: payPayRestSDK.getRefundDetails,
  CheckUserWalletBalance: payPayRestSDK.checkUserWalletBalance,
  Authorization: payPayRestSDK.authorization,
  AuthorizationResult: payPayRestSDK.authorizationResult,
  AccountLinkQRCodeCreate: payPayRestSDK.accountLinkQRCodeCreate,
  ValidateJWT: payPayRestSDK.validateJWT,
  CreateSubscriptionPayment: payPayRestSDK.paymentSubscription,
};
