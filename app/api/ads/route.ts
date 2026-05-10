import { NextRequest, NextResponse } from "next/server"
import { MongoClient, ObjectId } from "mongodb"

const uri = process.env.MONGODB_URI as string
const client = new MongoClient(uri)

async function connect() {
  if (!client.topology?.isConnected()) {
    await client.connect()
  }
  return client.db("muslim-app").collection("ads")
}

// ✅ GET: جلب إعلان نشط
export async function GET() {
  try {
    const col = await connect()
    const ad = await col.findOne({ active: true })

    return NextResponse.json(ad || {})
  } catch (e) {
    return NextResponse.json({ error: "Failed to fetch ads" }, { status: 500 })
  }
}

// ✅ POST: إضافة إعلان
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { title, description, image, link, active } = body

    if (!title || !description) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      )
    }

    const col = await connect()

    const result = await col.insertOne({
      title,
      description,
      image: image || "",
      link: link || "",
      active: active ?? true,
      createdAt: new Date(),
    })

    return NextResponse.json({ success: true, id: result.insertedId })
  } catch {
    return NextResponse.json({ error: "Failed to create ad" }, { status: 500 })
  }
}

// ✅ PUT: تحديث إعلان
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json()
    const { id, ...data } = body

    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 })
    }

    const col = await connect()

    await col.updateOne(
      { _id: new ObjectId(id) },
      { $set: data }
    )

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Failed to update ad" }, { status: 500 })
  }
}

// ✅ DELETE: حذف إعلان
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 })
    }

    const col = await connect()

    await col.deleteOne({ _id: new ObjectId(id) })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Failed to delete ad" }, { status: 500 })
  }
}