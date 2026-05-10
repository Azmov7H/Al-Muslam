"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock } from "lucide-react"

type PrayerTimes = {
  fajr: string
  dhuhr: string
  asr: string
  maghrib: string
  isha: string
}

const PRAYERS = ["fajr", "dhuhr", "asr", "maghrib", "isha"] as const

const labels = {
  fajr: "الفجر",
  dhuhr: "الظهر",
  asr: "العصر",
  maghrib: "المغرب",
  isha: "العشاء",
}

/* =========================
   TWEETS SYSTEM
========================= */
const TWEETS = {
  fajr: ["الصلاة خير من النوم 🌙", "بداية يومك بالفجر نور"],
  dhuhr: ["استراحة إيمانية", "أرح قلبك بالصلاة"],
  asr: ["لا تنس الصلاة الوسطى", "لحظات قليلة تغيّر يومك"],
  maghrib: ["وقت الأذكار", "اغتنم الغروب"],
  isha: ["اختم يومك بطاعة", "قيام الليل يبدأ الآن"],
}

/* ========================= */
function toDate(time: string) {
  const [h, m] = time.split(":").map(Number)
  const d = new Date()
  d.setHours(h, m, 0, 0)
  return d
}

function formatDiff(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000))
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  return `${h.toString().padStart(2, "0")}:${m
    .toString()
    .padStart(2, "0")}:${s.toString().padStart(2, "0")}`
}

export default function PrayerFinal() {
  const [times, setTimes] = useState<PrayerTimes | null>(null)
  const [now, setNow] = useState(new Date())

  const [tweet, setTweet] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  const adhanRef = useRef<HTMLAudioElement | null>(null)
  const lastPlayedRef = useRef<string | null>(null)
  const lastTweetRef = useRef<string | null>(null)

  /* audio */
  useEffect(() => {
    const audio = new Audio("/adhan.mp3")
    adhanRef.current = audio
  }, [])

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  /* fetch */
  useEffect(() => {
    const load = async (lat: number, lng: number) => {
      const res = await fetch(`/api/prayer-times?lat=${lat}&lng=${lng}`)
      const data = await res.json()
      setTimes(data)
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => load(pos.coords.latitude, pos.coords.longitude),
      () => load(30.0444, 31.2357)
    )
  }, [])

  /* clock */
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  /* COMPUTE */
  const computed = useMemo(() => {
    if (!times) return null

    const map: Record<string, Date> = {
      fajr: toDate(times.fajr),
      dhuhr: toDate(times.dhuhr),
      asr: toDate(times.asr),
      maghrib: toDate(times.maghrib),
      isha: toDate(times.isha),
    }

    const now = new Date()

    let currentPrayer = "fajr"
    let nextKey = "fajr"

    for (let i = 0; i < PRAYERS.length; i++) {
      const p = PRAYERS[i]
      const next = PRAYERS[i + 1]

      if (now < map[p]) {
        nextKey = p
        currentPrayer = PRAYERS[i - 1] || "isha"
        break
      }

      if (!next || now < map[next]) {
        currentPrayer = p
        nextKey = next || "fajr"
      }
    }

    if (nextKey === "fajr" && now > map.isha) {
      map.fajr.setDate(map.fajr.getDate() + 1)
    }

    const start = map[currentPrayer]
    const end = map[nextKey]

    const total = end.getTime() - start.getTime()
    const passed = now.getTime() - start.getTime()

    const progress = Math.min(1, Math.max(0, passed / total))
    const diff = end.getTime() - now.getTime()

    return { nextKey, currentPrayer, diff, progress, nextTime: end }
  }, [times, now])

  /* tweet function */
  const showTweet = (prayer: keyof typeof TWEETS) => {
    const arr = TWEETS[prayer]
    const random = arr[Math.floor(Math.random() * arr.length)]

    if (lastTweetRef.current === random) return
    lastTweetRef.current = random

    setTweet(random)
    setVisible(true)

    navigator.vibrate?.(100)

    setTimeout(() => setVisible(false), 6000)
  }

  /* tweet triggers */
  useEffect(() => {
    if (!computed) return

    const nowTime = now.getTime()
    const target = computed.nextTime.getTime()
    const diff = target - nowTime

    if (diff < 10 * 60 * 1000 && diff > 9 * 60 * 1000) {
      showTweet(computed.nextKey as any)
    }

    if (Math.abs(diff) < 1000) {
      showTweet(computed.nextKey as any)
    }
  }, [now, computed])

  /* adhan */
  useEffect(() => {
    if (!computed) return

    const nowTime = now.getTime()
    const target = computed.nextTime.getTime()

    if (
      Math.abs(target - nowTime) < 1000 &&
      lastPlayedRef.current !== computed.nextKey
    ) {
      lastPlayedRef.current = computed.nextKey

      navigator.vibrate?.([300, 200, 300])
      adhanRef.current?.play().catch(() => {})

      if (Notification.permission === "granted") {
        new Notification("حان وقت الصلاة", {
          body: labels[computed.nextKey as keyof typeof labels],
        })
      }
    }
  }, [now, computed])

  if (!times) {
    return <div className="p-6 animate-pulse h-40 bg-zinc-800 rounded-xl" />
  }

  return (
    <div className="min-h-screen bg-black text-white flex justify-center p-4">
      <div className="w-full max-w-md space-y-4">

        {/* TWEET */}
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-yellow-400 text-black px-4 py-2 rounded-xl shadow-lg text-sm">
            {tweet}
          </div>
        </div>

        {/* Header */}
        <div className="flex justify-between">
          <h1 className="text-yellow-400 font-bold">مواقيت الصلاة</h1>
          <MapPin />
        </div>

        {/* Next */}
        <Card className="bg-zinc-900 border border-yellow-500/30">
          <CardContent className="p-6 text-center space-y-4">

            <h2 className="text-yellow-400 text-xl">
              {labels[computed.nextKey as keyof typeof labels]}
            </h2>

            <div className="relative w-32 h-32 mx-auto">
              <svg className="w-32 h-32 -rotate-90">
                <circle cx="64" cy="64" r="56" stroke="#27272a" strokeWidth="8" fill="none" />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="#facc15"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 56}
                  strokeDashoffset={
                    2 * Math.PI * 56 * (1 - (computed.progress || 0))
                  }
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center text-sm">
                {formatDiff(computed.diff)}
              </div>
            </div>

          </CardContent>
        </Card>

        {/* List */}
        <Card className="bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-yellow-400 flex gap-2">
              <Clock className="w-4 h-4" />
              اليوم
            </CardTitle>
          </CardHeader>

          <CardContent>
            {PRAYERS.map((p) => {
              const active = computed.currentPrayer === p

              return (
                <div
                  key={p}
                  className={`flex justify-between py-2 ${
                    active ? "text-yellow-400 font-bold" : "text-zinc-400"
                  }`}
                >
                  <span>{labels[p]}</span>
                  <span>{times[p]}</span>
                </div>
              )
            })}
          </CardContent>
        </Card>

      </div>
    </div>
  )
}