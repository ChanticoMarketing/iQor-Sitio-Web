import { NextResponse } from 'next/server';
import { updateLeadStatus } from '@/lib/leads-store';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    if (!['Nuevo', 'En Contacto', 'Diagnóstico Enviado', 'Cerrado'].includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Estatus no válido' },
        { status: 400 }
      );
    }

    const updated = updateLeadStatus(id, status);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: 'Solicitud no encontrada' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, lead: updated });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error al actualizar estatus' },
      { status: 500 }
    );
  }
}
