export function formatPhoneNumber(phoneNumber: string): string {
  const cleaned: string = phoneNumber.replace(/^\D+/g, '')

  const match: RegExpMatchArray | null = cleaned.match(
    /^(\d{1})(\d{3})(\d{3})(\d{3})$/
  )

  if (match) {
    const [_, countryCode, areaCode, firstThree, lastFour] = match

    return `+${countryCode} (${areaCode})-${firstThree}-${lastFour}`
  }

  return phoneNumber
}
