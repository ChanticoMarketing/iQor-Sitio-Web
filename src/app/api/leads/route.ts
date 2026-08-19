import { NextResponse } from 'next/server';
import { getLeads, saveLead } from '@/lib/leads-store';

export async function GET() {
  try {
    const leads = getLeads();
    return NextResponse.json({ success: true, leads });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error al obtener las solicitudes' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, empresa, correo, telefono, sector, cartera, mensaje } = body;

    // Validación de campos obligatorios
    if (!nombre || !empresa || !correo || !cartera) {
      return NextResponse.json(
        { success: false, error: 'Faltan campos obligatorios requeridos.' },
        { status: 400 }
      );
    }

    // Validación básica de formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(correo)) {
      return NextResponse.json(
        { success: false, error: 'El formato de correo no es válido.' },
        { status: 400 }
      );
    }

    const newLead = saveLead({
      nombre: nombre.trim(),
      empresa: empresa.trim(),
      correo: correo.trim(),
      telefono: telefono ? telefono.trim() : undefined,
      sector: sector || 'Banca / Fintech',
      cartera,
      mensaje: mensaje ? mensaje.trim() : undefined,
    });

    return NextResponse.json({
      success: true,
      lead: newLead,
      message: 'Solicitud de diagnóstico registrada correctamente.',
    });
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json(
      { success: false, error: 'Ocurrió un error al procesar tu solicitud.' },
      { status: 500 }
    );
  }
}
