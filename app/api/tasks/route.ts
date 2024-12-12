import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'tasks.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const tasks = JSON.parse(jsonData);
  return NextResponse.json(tasks);

}