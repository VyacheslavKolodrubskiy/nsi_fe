export function formatPhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(/^\+7(\d{3})(\d{3})(\d{4})$/, '+7 ($1)-$2-$3')
}
