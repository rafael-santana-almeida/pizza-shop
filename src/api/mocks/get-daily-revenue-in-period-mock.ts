import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '28/10/2024', receipt: 20000 },
    { date: '29/10/2024', receipt: 8000 },
    { date: '30/10/2024', receipt: 80000 },
    { date: '31/10/2024', receipt: 5400 },
    { date: '01/11/2024', receipt: 4000 },
    { date: '02/11/2024', receipt: 75000 },
    { date: '03/11/2024', receipt: 40000 },
  ])
})
