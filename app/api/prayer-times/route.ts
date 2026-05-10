import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const lat = searchParams.get("lat")
    const lng = searchParams.get("lng")

    if (!lat || !lng) {
      return NextResponse.json(
        { error: "Missing lat/lng" },
        { status: 400 }
      )
    }

    const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=5`

    const res = await fetch(url, { cache: "no-store" })
    const data = await res.json()

    if (!data?.data?.timings) {
      return NextResponse.json(
        { error: "Invalid API response" },
        { status: 500 }
      )
    }

    const t = data.data.timings

    return NextResponse.json({
      fajr: t.Fajr,
      dhuhr: t.Dhuhr,
      asr: t.Asr,
      maghrib: t.Maghrib,
      isha: t.Isha,
    })
  } catch {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}