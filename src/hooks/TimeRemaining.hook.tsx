import { useEffect } from 'react'
import { create } from 'zustand'

export interface TimeRemaining {
  year?: number
  months?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

interface CountdownState {
  timeRemaining: TimeRemaining
  progress: number
  timings: [string, number][]
  startCountdown: (startDate: Date, endDate: Date) => void
  stopCountdown: () => void
}

let intervalId: ReturnType<typeof setInterval> | null = null

interface UseCountdownObserverProps {
  startDate: string
  endDate: string
}

export function useCountdownEffect({ endDate, startDate }: UseCountdownObserverProps) {
  const { startCountdown, stopCountdown } = useCountdownStore()

  useEffect(() => {
    startCountdown(new Date(startDate), new Date(endDate))
    return () => stopCountdown()
  }, [startDate, endDate, startCountdown, stopCountdown])
}

export const useCountdownStore = create<CountdownState>(set => ({
  timeRemaining: { seconds: 0 },
  timings: [],
  progress: 0,

  startCountdown: (startDate: Date, endDate: Date) => {
    if (intervalId) clearInterval(intervalId)

    const calculateTime = () => {
      const now = new Date()
      const total = endDate.getTime() - now.getTime()

      if (total <= 0) {
        set({ timeRemaining: { seconds: 0 }, progress: 100 })
        if (intervalId) clearInterval(intervalId)
        return
      }

      const years = Math.floor(total / (1000 * 60 * 60 * 24 * 365))
      const months = Math.floor((total % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
      const days = Math.floor((total % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
      const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((total % (1000 * 60)) / 1000)

      const time: TimeRemaining = {}
      if (years > 0) time.year = years
      if (years > 0 || months > 0) time.months = months
      if (years > 0 || months > 0 || days > 0) time.days = days
      if (years > 0 || months > 0 || days > 0 || hours > 0) time.hours = hours
      if (years > 0 || months > 0 || days > 0 || hours > 0 || minutes > 0) time.minutes = minutes
      time.seconds = seconds

      const totalDuration = endDate.getTime() - startDate.getTime()
      const elapsed = now.getTime() - startDate.getTime()
      const progressPercentage = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100))

      set({ timeRemaining: time, progress: progressPercentage, timings: Object.entries(time).map(([unit, value]) => [unit, value]) })
    }

    calculateTime()
    intervalId = setInterval(calculateTime, 1000)
  },

  stopCountdown: () => {
    if (intervalId) clearInterval(intervalId)
    intervalId = null
  }
}))
