import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  try {
    const supabase = await createClient()
    const { error } = await supabase
      .from('agent_registry')
      .select('slug')
      .eq('enabled', true)
      .limit(1)

    if (error) {
      return NextResponse.json(
        { ok: false, service: 'mh-aios', database: 'error', error: error.message },
        { status: 503 },
      )
    }

    return NextResponse.json({ ok: true, service: 'mh-aios', database: 'connected' })
  } catch (error) {
    return NextResponse.json(
      { ok: false, service: 'mh-aios', database: 'error', error: String(error) },
      { status: 503 },
    )
  }
}
