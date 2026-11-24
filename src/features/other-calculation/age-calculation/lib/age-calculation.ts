
export interface AgeResult {
  years: number
  months: number
  days: number
  totalMonths: number
  totalWeeks: number
  totalDays: number
  nextBirthdayDays: number
  dayOfBirth: string
  nextBirthdayDate: string
}

function parseLocalDate(value: string): Date | null {

  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)

  if (!match) return null

  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])

  const date = new Date(year, month - 1, day)

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null
  }

  return date
}

function addYears(date: Date, years: number): Date {

  const targetYear = date.getFullYear() + years
  const month = date.getMonth()
  const day = date.getDate()

  const result = new Date(targetYear, month, 1)

  const lastDay = new Date(
    targetYear,
    month + 1,
    0
  ).getDate()

  result.setDate(Math.min(day, lastDay))

  return result
}

function addMonths(date: Date, months: number): Date {

  const totalMonths =
    date.getFullYear() * 12 +
    date.getMonth() +
    months

  const year = Math.floor(totalMonths / 12)
  const month = totalMonths % 12
  const day = date.getDate()

  const lastDay = new Date(year, month + 1, 0).getDate()

  return new Date(year, month, Math.min(day, lastDay))
}

function differenceInDays(
  start: Date,
  end: Date
): number {

  const utcStart = Date.UTC(
    start.getFullYear(),
    start.getMonth(),
    start.getDate()
  )

  const utcEnd = Date.UTC(
    end.getFullYear(),
    end.getMonth(),
    end.getDate()
  )

  return Math.round(
    (utcEnd - utcStart) / 86400000
  )
}

export function calculateAge(
  dateOfBirth: string
): AgeResult | null {

  const birthDate = parseLocalDate(dateOfBirth)

  if (!birthDate) return null

  const today = new Date()

  const currentDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  )

  if (birthDate > currentDate) return null

  let years =
    currentDate.getFullYear() -
    birthDate.getFullYear()

  let yearDate = addYears(birthDate, years)

  if (yearDate > currentDate) {
    years--
    yearDate = addYears(birthDate, years)
  }

  let months =
    (currentDate.getFullYear() - yearDate.getFullYear()) * 12 +
    currentDate.getMonth() -
    yearDate.getMonth()

  let monthDate = addMonths(yearDate, months)

  if (monthDate > currentDate) {
    months--
    monthDate = addMonths(yearDate, months)
  }

  const days = differenceInDays(
    monthDate,
    currentDate
  )

  const totalDays = differenceInDays(
    birthDate,
    currentDate
  )

  const totalMonths = years * 12 + months

  const totalWeeks = Math.floor(totalDays / 7)

  // Next birthday
  let nextBirthday = new Date(
    currentDate.getFullYear(),
    birthDate.getMonth(),
    1
  )

  const birthdayDay = birthDate.getDate()

  const lastDay = new Date(
    nextBirthday.getFullYear(),
    nextBirthday.getMonth() + 1,
    0
  ).getDate()

  nextBirthday.setDate(
    Math.min(birthdayDay, lastDay)
  )

  if (nextBirthday < currentDate) {

    nextBirthday = new Date(
      currentDate.getFullYear() + 1,
      birthDate.getMonth(),
      1
    )

    const nextLastDay = new Date(
      nextBirthday.getFullYear(),
      nextBirthday.getMonth() + 1,
      0
    ).getDate()

    nextBirthday.setDate(
      Math.min(birthdayDay, nextLastDay)
    )
  }

  const nextBirthdayDays = differenceInDays(
    currentDate,
    nextBirthday
  )

  const dayOfBirth = birthDate.toLocaleDateString(
    'en-US',
    { weekday: 'long' }
  )

  const nextBirthdayDate = nextBirthday.toLocaleDateString(
    'en-IN',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  )

  return {
    years,
    months,
    days,
    totalMonths,
    totalWeeks,
    totalDays,
    nextBirthdayDays,
    dayOfBirth,
    nextBirthdayDate,
  }
}
