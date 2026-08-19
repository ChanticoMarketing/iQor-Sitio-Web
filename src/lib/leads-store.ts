import fs from 'fs';
import path from 'path';

export interface Lead {
  id: string;
  folio: string;
  nombre: string;
  empresa: string;
  correo: string;
  telefono?: string;
  sector: string;
  cartera: string;
  mensaje?: string;
  status: 'Nuevo' | 'En Contacto' | 'Diagnóstico Enviado' | 'Cerrado';
  createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    const initialLeads: Lead[] = [
      {
        id: '1',
        folio: 'RMS-849201',
        nombre: 'Carlos Mendoza',
        empresa: 'Financiera Impulso MX',
        correo: 'cmendoza@impulsomx.com',
        telefono: '+52 55 4920 1823',
        sector: 'Banca / Fintech',
        cartera: '$5 M – $50 M MXN',
        mensaje: 'Cartera vencida con 120 días promedio, buscamos cobranza extrajudicial negociada.',
        status: 'En Contacto',
        createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
      },
      {
        id: '2',
        folio: 'RMS-710492',
        nombre: 'Valeria Sotomayor',
        empresa: 'Retail Grupo Vanguardia',
        correo: 'vsotomayor@vanguardia.com.mx',
        telefono: '+52 81 1234 5678',
        sector: 'Retail',
        cartera: '$500 mil – $5 M MXN',
        mensaje: 'Interesados en esquema de BPO para cartera corriente y preventiva.',
        status: 'Nuevo',
        createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
      }
    ];
    fs.writeFileSync(LEADS_FILE, JSON.stringify(initialLeads, null, 2), 'utf-8');
  }
}

export function getLeads(): Lead[] {
  ensureDataFile();
  try {
    const data = fs.readFileSync(LEADS_FILE, 'utf-8');
    if (!data || data.trim() === '') return [];
    return JSON.parse(data);
  } catch (error) {
    console.error('Error parsing leads file:', error);
    return [];
  }
}

export function saveLead(leadData: Omit<Lead, 'id' | 'folio' | 'createdAt' | 'status'>): Lead {
  ensureDataFile();
  const leads = getLeads();
  const folioNum = Math.floor(100000 + Math.random() * 900000);
  const newLead: Lead = {
    ...leadData,
    id: Date.now().toString(),
    folio: `RMS-${folioNum}`,
    status: 'Nuevo',
    createdAt: new Date().toISOString(),
  };

  leads.unshift(newLead);
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
  return newLead;
}

export function updateLeadStatus(id: string, status: Lead['status']): Lead | null {
  ensureDataFile();
  const leads = getLeads();
  const index = leads.findIndex(l => l.id === id);
  if (index === -1) return null;

  leads[index].status = status;
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
  return leads[index];
}
